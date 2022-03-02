var dateEl = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var textArea = document.querySelector(".text-area");
todayDate = moment().format("dddd, MMMM Do");
dateEl.textContent = todayDate;

var eventNine = [];

function colorCoder() {
  var currentTime = Number(moment().format().split("T")[1].split(":")[0]);

  console.log(currentTime);
  $(".time-block").each(function () {
    var blockHour = Number($(this).attr("id").split("-")[1]);
    if (blockHour < currentTime) {
      $(this).removeClass("present future");
      $(this).addClass("past");
    } else if (blockHour === currentTime) {
      $(this).removeClass("past future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past present");
      $(this).addClass("future");
    }
  });
}

$(".saveBtn").click(function () {
  localStorage.clear();
  eventNine.push(textArea.value);
  localStorage.setItem("eventNine", JSON.stringify(eventNine));
  console.log(eventNine);
});

function loadEvents() {
  if (!eventNine) {
    eventNine = {
      // create an empty array here, but for objects [time, event]
    };
  } else {
    eventNine = JSON.parse(localStorage.getItem("eventNine"));
    textArea.value = eventNine;
  }
}
loadEvents();
colorCoder();
