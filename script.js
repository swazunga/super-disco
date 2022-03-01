var dateEl = document.getElementById("currentDay");

todayDate = moment().format("dddd, MMMM Do");
dateEl.textContent = todayDate;
