var today = moment();

$('#currentDay').text(today.format("dddd, MMM Do"));

$('button').on("click", function(event){
    saveTask();
});

function saveTask() {
    localStorage.setItem("task", activity.value);
  }



  // if, else if, else statement to color input boxes based on if
  // time has passed (gray), in current time window(red), or future time (green)

  // for loop to reduce html documentation?

  // save input in console log
  // Should I save each one seperately or in an array
  // if array could I assign each time with an index so will always match up