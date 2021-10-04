console.log("Hello world")
var today = moment();

$('#currentDay').text(today.format("dddd, MMM Do"));

// $('button').parent().on("click", function(event)
$('button').on("click", function(event){
    saveTask();
});

function saveTask() {
    localStorage.setItem("task", activity.value);
  }
  // save input in console log
  // Should I save each one seperately or in an array
  // if seperate, need ability to know which button was clicked, give parens element ID to match time
  // if array could I assign each time with an index so will always match up




var CurrentTime = $('h2').getAttribute("data-time")

function timeColor(){
    if (moment().format('h a') > CurrentTime) {
        $('#actvity').css('background-color', 'gray');
    }
    else if (moment().format('h a') < CurrentTime) {
        $('#actvity').css('background-color', 'green');
    }
    else {
        $('#actvity').css('background-color', 'red');
    }
}
// if, else if, else statement to color input boxes based on if
// time has passed (gray), in current time window(red), or future time (green)

// for loop to reduce html documentation?