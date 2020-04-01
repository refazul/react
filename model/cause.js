
const mongoose = require('mongoose');

var CauseSchema = new mongoose.Schema({
    case_number: String,
    case_type: String,
    case_type_raw: String,
    case_type_valid: String,
    case_date: String,
    serial: Number,
    court_name: String,
    judge_name: String,
    category: String,
    parties: String,
});
var Cause = mongoose.model('Cause', CauseSchema);

function cause_search(param = {}, callback) {
    var case_numbers = param.case_numbers || '';
    case_numbers = case_numbers.split(',').filter(function (el) {
        return el != '';
    });
    case_numbers = case_numbers.map((function (el) {
        return { case_number: new RegExp('.*' + el + '.*', 'i') }
    }));

    var offset = param.offset || 0;
    var limit = param.limit || 50;
    var filter = {};
    if (case_numbers.length > 0) {
        filter = { $or: case_numbers };
    }
    var projection = '_id serial case_date case_number case_type court_name judge_name';//null
    var options = {skip: offset, limit: limit, sort: 'serial'};
    
    // Check for more https://mongoosejs.com/docs/api.html#model_Model.find
    Cause.find(filter, projection, options, function (err, data) {
        callback(data);
    });
}
function cause_data_get(param = {}, callback) {
    Cause.findOne({ case_number: param.case_number }, function (err, data) {
        //callback(data);
    });
}
function cause_data_set(param = {}) {
    var case_type = case_type_normalize(param.case_type);
    var case_type_raw = param.case_type;
    var case_type_valid = 'no';
    if (typeof case_type === 'string' && case_type.length > 1) {
        case_type_valid = 'yes';
    }
    return new Promise((resolve, reject) => {
        Cause.find({ case_number: param.case_number, case_type, case_date: param.case_date }, function (err, data) {
            if (data.length > 0) {
                // Exists Already
                Cause.findOneAndUpdate({ case_number: param.case_number, case_type, case_date: param.case_date }, param, { new: true }, function (err, doc) {
                    resolve(doc);
                });
            } else {
                var case_number = param.case_number;
                var case_date = param.case_date || '';
                var serial = param.serial || '';
                var court_name = param.court_name || '';
                var judge_name = param.judge_name || '';
                var category = param.category || '';
                var parties = param.parties || '';
                // New User
                var u = new Cause({ case_number, case_type, case_type_raw, case_type_valid, case_date, serial, court_name, judge_name, category, parties });
                u.save(function (err, data) {
                    resolve(data);
                });
            }
        });
    });
}
function case_type_normalize(case_type = '') {
    for (var i in case_types) {
        var right_side = case_types[i];
        if (case_type == i) {
            return i;
        }
        if (typeof right_side === 'object') {
            for (var j = 0; j < right_side.length; j++) {
                if (case_type == right_side[j]) {
                    return i;
                }
            }
        }
    }
    return false;
}
const case_types = {
    "Election Petition": [],
    "First Appeal": [],
    "First Misc Appeal": [],
    "Cross Objection": [],
    "Transfer Appeal": [],
    "Second Appeal": [],
    "Second Misc Appeal": [],
    "First Appeal Tender": [],
    "First Misc Appeal Tender": [],

    "Civil Rule": [],
    "Civil Revision": [],
    "Civil Misc": [],
    "Civil Order": [],
    "Contempt": [],
    "Civil Review": [],
    "Violation Misc": [],
    "Violation Case": [],
    "Violation Misc. Rule": [],

    "Misc.": [],
    "Criminal Rule(Con A)": [],
    "Criminal Misc (Suo-Muto) Rule": [],
    "Death Reference": [],
    "Criminal Appeal(H)": ["Criminal Appeal"],
    "Criminal Revision": [],
    "Criminal Misc": [],
    "Jail Appeal(H)": ["Jail Appeal"],
    "Criminal Rule": [],
    "Jail Appeal Admission": [],
    "Suo Muto": [],
    "Govt. Appeal": [],
    "In re": [],
    "Criminal Rule(Con)": [],
    "Transferred Misc Case": [],
    "Suo-Muto Contempt Rule": [],
    "Criminal Revision (Suo-Muto)": [],
    "Govt. Criminal Appeal": [],
    "Criminal Review Rule": [],

    "Letter of Administration Suit": [],
    "Violation Misc": [],
    "Review Petition": [],
    "Suo-Muto Rule (Original)": [],
    "Execution Case": [],
    "Company Matter": [],
    "Contempt Matter": [],
    "Customs Appeal": [],
    "Divorce Suit": [],
    "Income Tax Reference": [],
    "Merchant Shipping": [],
    "Trademark Appeal": [],
    "Trademark Application": [],
    "VAT Appeal": [],
    "Admiralty Suit": [],
    "Arbitration Appeal": [],
    "Arbitration Application": [],
    "Cancellation and Design": [],
    "Contempt Petition": [],
    "Contempt Rule": [],
    "Summary Suit": [],
    "Arbitration Rule": [],
    "Bank Company Application": [],
    "Family Matter": [],
    "VAT Revision": [],

    "In re : Writ Petition": [],
    "Writ Petition": [],
    "Contempt Petition(H)": [],
    "Review Petition": [],
    "Suo-Muto Rule": [],
    "Transfer Petiion": [],
    "Reference Application": [],
    "I.T.R.": [],
    "Rule": [],
    "Copy Right Appeal": [],
}
/*
    //Civil Appeal
        Election Petition
        First Appeal
        First Misc Appeal
        Cross Objection
        Transfer Appeal
        Second Appeal
        Second Misc Appeal
        First Appeal Tender
        First Misc Appeal Tender


    //Civil Revision
        Civil Rule
        Civil Revision
        Civil Misc
        Civil Order
        Contempt
        Civil Review
        Violation Misc
        Violation Case
        Violation Misc. Rule

    //Criminal Cases(HD)
        Misc.
        Criminal Rule(Con A)
        Criminal Misc (Suo-Muto) Rule
        Death Reference
        Criminal Appeal(H) -> Criminal Appeal
        Criminal Revision
        Criminal Misc
        Jail Appeal(H) -> Jail Appeal
        Criminal Rule
        Jail Appeal Admission
        Suo Muto
        Govt. Appeal
        In re
        Criminal Rule(Con)
        Transferred Misc Case
        Suo-Muto Contempt Rule
        Criminal Revision (Suo-Muto)
        Govt. Criminal Appeal
        Criminal Review Rule

    //Original Cases
        Letter of Administration Suit
        Violation Misc
        Review Petition
        Suo-Muto Rule (Original)
        Execution Case
        Company Matter
        Contempt Matter
        Customs Appeal
        Divorce Suit
        Income Tax Reference
        Merchant Shipping
        Trademark Appeal
        Trademark Application
        VAT Appeal
        Admiralty Suit
        Arbitration Appeal
        Arbitration Application
        Cancellation and Design
        Contempt Petition
        Contempt Rule
        Summary Suit
        Arbitration Rule
        Bank Company Application
        Family Matter
        VAT Revision

    //Writ Cases
        In re : Writ Petition
        Writ Petition
        Contempt Petition(H)
        Review Petition
        Suo-Muto Rule
        Transfer Petiion
        Reference Application
        I.T.R.
        Rule
        Copy Right Appeal
*/
module.exports = {
    cause_search: cause_search,
    cause_data_get: cause_data_get,
    cause_data_set: cause_data_set,
}