// create variable that targets DOM element with id of "currentDay"
var todaysDate = document.getElementById('currentDay');
var timeBlockDivs = document.querySelectorAll(".time-block");

var currentTime = moment().format('h A');
var currentHourOfDay = convertTimeToHourOfDay(currentTime);
console.log(currentHourOfDay);

//converts supplied argument of time in format "12 PM" to num value out of 24 for later use in comparisons
function convertTimeToHourOfDay(timeString) {
    var splitTime = timeString.split(" ");
    splitTime[0] = parseInt(splitTime, 10)
    if (splitTime[1] === "PM" && splitTime[0] !== 12) {
        var nthHourOfDay = splitTime[0] + 12;
    } else {
        var nthHourOfDay = splitTime[0];
    }
    return nthHourOfDay;
}

// set background color of time-block divs based on whether the time slot is in the past, future, or present
function colorTimeBlocks() {

    for (const val of timeBlockDivs) { // You can use `let` instead of `const` if you like
      var timeEl = val.querySelector('.hour');
      var blockEl = val.querySelector('.col-9');
    
      var blockTime = timeEl.innerHTML
      var blockHourOfDay = convertTimeToHourOfDay(blockTime);
      console.log(blockHourOfDay);
      console.log(currentHourOfDay);

      if (blockHourOfDay < currentHourOfDay) {
        blockEl.classList.add('past');
      } else if (blockHourOfDay === currentHourOfDay) {
          blockEl.classList.add('present');
      } else {
          blockEl.classList.add('future');
      }
    }
}

colorTimeBlocks();

// use moment.js to determine current date and write to todaysDate variable
todaysDate.textContent = moment().format('dddd, MMMM Do YYYY')