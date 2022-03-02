var dateEl = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var textArea = document.querySelector(".text-area");
var btn9 = document.querySelector("#btn-9");
todayDate = moment().format("dddd, MMMM Do");
dateEl.textContent = todayDate;

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

function handleSave(event) {
  var time = event.target.id.split("-")[1];
  var value = $("#text-" + time).value;
  localStorage.setItem(time, value);
  console.log(value);
}

$("#btn-9").click(handleSave);
$("#btn-13").click(handleSave);

function loadEvents() {}

loadEvents();
colorCoder();
