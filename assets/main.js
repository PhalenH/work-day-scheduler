console.log("Hello world");
var today = moment();

$("#currentDay").text(today.format("dddd, MMM Do"));

// $('button').parent().on("click", function(event)
$("button").on("click", function (event) {
  saveTask();
});

function saveTask() {
  localStorage.setItem("task", activity.value);
}
// save input in console log
// Use an array
// if array could I assign each time with an index so will always match up
// need empty array for local storage to add input too
var task = [] 
 




var CurrentTime = document.getElementsByTagName("h2")
console.log(CurrentTime);
console.log(moment().format("k"))

function timeColor() {
    for (var i = 0; i < 24; i++) {
      // var inputText = "activity-" + i;
  
      // used parseInt to turn all data-time strings to integers to be compared with current time
  var timeData = parseInt(CurrentTime[i].getAttribute("data-time"))
        console.log(timeData)      

      if (moment().format("k") > timeData) {
          console.log("past")
        $("#activity-" + i).addClass("past-time");
      } 
      else if (moment().format("k") < timeData) {
          console.log("future")
        $("#activity-" + i ).addClass("present-time");
      } else {
          console.log("present")
        $("#activity-" + i).addClass("future-time");
      }
    }
  }
  timeColor();


// for loop to reduce html documentation?
