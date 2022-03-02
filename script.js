var dateEl = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
todayDate = moment().format("dddd, MMMM Do");
dateEl.textContent = todayDate;

var events = {};

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
  var textArea = document.querySelector(".text-area");
  console.log(textArea.value);
  textArea.value = localStorage.setItem("events", JSON.stringify(events));
  console.log(events);
});
//   textArea.value.push({
//     Time: document.querySelector(".time-block"),
//     event: textArea,
//   });
//   localStorage.setItem("events", JSON.stringify(events));
//   console.log(events);

// function saveEvent() {
//   $(".text-area").each(function () {
//     localStorage.setItem("events", JSON.stringify(events));
//     console.log(events);
//   });
// }

colorCoder();
