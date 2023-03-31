// Current day display var & function
var currrentDay = $("#currentDay");

function displayDay() {
  var todaysDay = moment().format("dddd, Do of MMMM ");
  currrentDay.text(todaysDay);
}

displayDay();

// Each of a tibler block will habe one kay value pare to save on one time block
