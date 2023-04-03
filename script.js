// Current day display var & function
var currentDay = $("#currentDay");

function displayDay() {
  var todaysDay = moment().format("dddd, Do of MMMM ");
  currentDay.text(todaysDay);
  // console.log(todaysDay); - Checking if var above returns current day - WORKS!
}
displayDay();

// Time Blocks Function - colors for past/preset/future
$(function () {
  // To get CURRENT HOUR of the day
  var currentTime = moment().format("H");
  //  console.log(currentTime); - Checking if var above returns current time - WORKS!
  // Function to change colors based on current time
  function colors() {
    $(".time-block").each(function () {
      var Hour = parseInt(this.id);
      $(this).toggleClass("past", Hour < currentTime);
      $(this).toggleClass("present", Hour == currentTime);
      $(this).toggleClass("future", Hour > currentTime);
    });
  }
  // Calling above function
  colors();
});
