console.log('Hello');

var values = [[1,2], [3,4]];
var court_data = [];

for (var i = 0; i < values.length; i++) {
    for(var j = 0;j<values[i].length;j++) {
        console.log(values[i][j])
        court_data.push(values[i][j]);
    }
}
console.log(court_data);