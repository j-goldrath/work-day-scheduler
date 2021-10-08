// create variable that targets DOM element with id of "currentDay"
var todaysDate = document.getElementById('currentDay')

// use moment.js to determine current date and write todaysDate variable
todaysDate.textContent = moment().format('dddd, MMMM Do YYYY')