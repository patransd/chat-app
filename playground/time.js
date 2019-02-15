var moment = require('moment');



var createdAt = 0;
var date = moment(createdAt);

console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);