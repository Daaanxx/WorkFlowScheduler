// Current day display var & function
var currentDay = $("#currentDay");

function displayDay() {
  var todaysDay = moment().format("dddd, Do of MMMM ");
  currentDay.text(todaysDay);
  // console.log(todaysDay); - Checking if var above returns current day - WORKS!
}
// Calls above function
displayDay();

//
//
// Time Blocks Function - colors for past/preset/future
$(function () {
  // To get CURRENT HOUR of the day
  var currentTime = moment().format("H");
  //  console.log(currentTime); - Checking if var above returns current time - WORKS!
  // Function to change colors based on current time.
  function colors() {
    $(".time-block").each(function () {
      var Hour = parseInt(this.id);
      // This is compering and setting up clasess against current time - var Hour
      $(this).toggleClass("past", Hour < currentTime);
      $(this).toggleClass("present", Hour == currentTime);
      $(this).toggleClass("future", Hour > currentTime);
    });
  }
  // Calls above function
  colors();
});

//
//
// Function to save value from textarea. This function's going to save only one ID's input per SAVE, rather than the whole page's.
function inputSave() {
  $(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
  });
}
inputSave();

// Function to call for values from local storage based on their ID and textarea input
$(".time-block").each(function () {
  var key = $(this).attr("id");
  var value = localStorage.getItem(key);
  $(this).children(".description").val(value);
});
