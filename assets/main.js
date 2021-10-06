console.log("Hello world");

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

// $("button").on("click", function (event) {
//   saveTask();
// });

// need empty array for local storage to add input too
var task = [];
if (localStorage.getItem("task") != null) {
  task = JSON.parse(localStorage.getItem("task"));
}

$("button").on("click", function (event) {
  for (var i = 0; i < 24; i++) {
    var taskInput = "";
    taskInput = $("#activity-" + i).value;
    // taskInput = JSON.stringify($("#activity-" + i).value);
    console.log(taskInput);
    task.push(taskInput);
    saveTask();
  }
});
// Possibly another for loop needed to keep value on page, like using: something.text($("#activity-" + i).value)?

function saveTask() {
  localStorage.setItem("task", JSON.stringify(task));
}





var CurrentTime = document.getElementsByTagName("h2");
console.log(CurrentTime);
console.log(moment().format("k"));

function timeColor() {
  for (var i = 0; i < 24; i++) {
    // var inputText = "activity-" + i;

    // used parseInt to turn all data-time strings to integers to be compared with current time
    var timeData = parseInt(CurrentTime[i].getAttribute("data-time"));

    if (moment().format("k") > timeData) {
      console.log("past");
      $("#activity-" + i).addClass("past-time");
    } else if (moment().format("k") < timeData) {
      console.log("future");
      $("#activity-" + i).addClass("future-time");
    } else {
      console.log("present");
      $("#activity-" + i).addClass("present-time");
    }
  }
}
timeColor();

// for loop to reduce html documentation?
