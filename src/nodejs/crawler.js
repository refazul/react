const axios = require('axios')
const cheerio = require('cheerio');
const url = require('url');

function court_scan(param = {}) {
    return new Promise((resolve, reject) => {
        var date = param.date;
        var court_link = 'http://supremecourt.gov.bd/web/?page=bench_list.php&menu=00&div_id=2' + '&date1=' + date;
        var court_data = [];
        var promises = [];
        axios.get(court_link).then((response) => {
            const $ = cheerio.load(response.data);

            var table = $('form[name="form1"]').siblings('table');
            var tr = $(table).children().children().not(':first-child');
            $(tr).each(function () {
                var row = this;

                var c0 = $(row).children('td').eq(0);
                var c1 = $(row).children('td').eq(1);
                var c2 = $(row).children('td').eq(2);
                var c3 = $(row).children('td').eq(3);

                var court_name = $(c1).find('strong a').text();
                var judge_name = extract_all_text($, c2);
                var court_link = $(c1).find('strong a').attr('href');
                var court_id = url.parse(court_link, { parseQueryString: true }).query.court_id;
                var bench_id = url.parse(court_link, { parseQueryString: true }).query.bench_id;

                promises.push(cause_scan({ court_id, bench_id, date, court_name, judge_name }));
            });
            Promise.all(promises).then((values) => {
                for (var i = 0; i < values.length; i++) {
                    for (var j = 0; j < values[i].length; j++) {
                        court_data.push(values[i][j]);
                    }
                }
                resolve(court_data);
            });

        });
    });
}

function cause_scan(param = {}) {
    return new Promise((resolve, reject) => {
        var court_id = param.court_id;
        var bench_id = param.bench_id;
        var date = param.date;
        var court_name = param.court_name;
        var judge_name = param.judge_name;
        var cause_link = 'http://supremecourt.gov.bd/web/index.php?page=cause_list.php&menu=00&div_id=2' + '&court_id=' + court_id + '&bench_id=' + bench_id + '&date1=' + date;
        axios.get(cause_link).then((response) => {
            const $ = cheerio.load(response.data);

            var cause_data = [];
            var category = '';
            var table = $('form[name="form1"]').find('table');
            var tr = $(table).children().children();
            $(tr).each(function () {
                var row = this;

                if (sl_row_is($, row)) {
                    var prev = $(row).prev();
                    category = $(prev).text();
                } else if (valid_row_is($, row)) {
                    var c0 = $(row).children('td').eq(0);
                    var c1 = $(row).children('td').eq(1);
                    var c2 = $(row).children('td').eq(2);
                    var c3 = $(row).children('td').eq(3);

                    var serial = $(c0).text().trim();
                    var case_type = extract_nth_text($, c1, 0);
                    var case_number = extract_nth_text($, c1, 1);
                    var with_numbers = extract_nth_text($, c1, 2).match(/[0-9 ]+\/[0-9 ]+/gi);
                    var parties = $(c2).text().replace(/vs/i, " vs ").trim();

                    cause_data.push({ serial, case_type, case_number, with_numbers, date, court_name, judge_name, category, parties });
                }
            });
            resolve(cause_data);
        });
    })
}

function extract_all_text($, el) {
    var text = [];
    for (var i = 0; i < $(el).contents().length; i++) {
        var content = $(el).contents()[i];
        if (content.type == 'text') {
            text.push(content.data);
        }
    }
    return text.join(' ').replace(/\s\s+/g, ' ').trim();
}
function extract_nth_text($, el, n) {
    var text = [];
    for (var i = 0, j = 0; i < $(el).contents().length; i++) {
        var content = $(el).contents()[i];
        if (content.type == 'text') {
            if (j == n) {
                text.push(content.data);
                break;
            }
            j++;
        }
    }
    return text.join(' ').replace(/\s\s+/g, ' ').trim();
}
function valid_row_is($, row) {
    return parseInt($(row).children('td').eq(0).text()) > 0 ? true : false;
}
function sl_row_is($, row) {
    return $(row).children('td').eq(0).text().toLowerCase() == 'sl' ? true : false;
}

//court_scan({ date: '03/03/2020' });

module.exports = {
    court_scan
}



