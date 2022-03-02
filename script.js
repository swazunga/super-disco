var dateEl = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var textArea = document.querySelector(".text-area");
todayDate = moment().format("dddd, MMMM Do");
dateEl.textContent = todayDate;

var events = [];

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
  events.push(textArea.value);
  localStorage.setItem("events", JSON.stringify(events));
  console.log(events);
});

function loadEvents() {
  if (!events) {
    events = {};
  } else {
    events = JSON.parse(localStorage.getItem("events"));
    console.log(events);
    textArea.value = events;
  }
}
loadEvents();
colorCoder();
