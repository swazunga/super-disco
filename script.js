var dateEl = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var textArea = document.querySelector(".text-area");
var btn9 = document.querySelector("#btn-9");
todayDate = moment().format("dddd, MMMM Do");
dateEl.textContent = todayDate;

function colorCoder() {
  var currentTime = Number(moment().format().split("T")[1].split(":")[0]);

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
    var value = localStorage.getItem(blockHour);

    $(`#text-${blockHour}`).text(value);
  });
}

function handleSave(event) {
  var time = event.target.id.split("-")[1];
  var textEl = document.querySelector("#text-" + time);
  var value = textEl.value;
  localStorage.setItem(time, value);
}

$("#btn-9").click(handleSave);
$("#btn-10").click(handleSave);
$("#btn-11").click(handleSave);
$("#btn-12").click(handleSave);
$("#btn-13").click(handleSave);
$("#btn-14").click(handleSave);
$("#btn-15").click(handleSave);
$("#btn-16").click(handleSave);
$("#btn-17").click(handleSave);

colorCoder();
