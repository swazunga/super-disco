var dateEl = document.getElementById("currentDay");
var nineBlock = document.getElementById("hour-9");
todayDate = moment().format("dddd, MMMM Do");
dateEl.textContent = todayDate;

function colorCoder() {
  var currentTime = Number(moment().format("LT").charAt(0));

  console.log(currentTime);
  $(".timeblock").each(function () {
    var blockHour = Number($(this).attr("id").split("-")[1]);
    console.log(blockHour);
    if (blockHour < currentTime) {
      $(this).removeClass("present future");
      $(this).addClass("past");
      //   console.log(this.class);
    } else if ((blockHour = currentTime)) {
      $(this).removeClass("past future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past present");
      $(this).addClass("future");
    }
  });
}

colorCoder();
