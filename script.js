const currentDate = document.querySelector(".schedule-current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".Schedule-icons div");


// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // getting last date of month
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

  let liTag = "";


  for (let i = 0; i < firstDayofMonth; i++) {
    liTag += `<li class="inactive"></li>`;
  }


  for (let i = 1; i <= lastDateofMonth; i++) {
    // adding active class to li if the current day, month, and year matched
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
      && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }



  // Calculate the remaining cells in the grid
  let remainingCells = 7 - (firstDayofMonth + lastDateofMonth % 7) % 7;

  // Add inactive days for the remaining cells
  for (let i = 0; i < remainingCells; i++) {
    liTag += `<li class="inactive"></li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag
}
renderCalendar();


prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => { //adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {//else pass new Date as date value
      date = new Date();
    }
    renderCalendar();

  })
})




// Dynamic Clock

// const canvas = document.getElementById('clock-canvas');
// const context = canvas.getContext('2d');
// const needle = document.getElementById('needle');
// const hourInput = document.getElementById('hour');
// const minuteInput = document.getElementById('minute');
// const periodInput = document.getElementById('period');

// function drawClock() {
//   const centerX = canvas.width / 2;
//   const centerY = canvas.height / 2;
//   const radius = canvas.width / 2 - 10;

//   context.clearRect(0, 0, canvas.width, canvas.height);

//   for (let i = 1; i <= 12; i++) {
//     const angle = (i - 3) * (Math.PI * 2) / 12;
//     const x = centerX + Math.cos(angle) * radius;
//     const y = centerY + Math.sin(angle) * radius;

//     context.fillStyle = '#21212114';
//     context.beginPath();
//     context.arc(x, y, 20, 0, Math.PI * 2);
//     context.fill();

//     context.fillStyle = '#000';
//     context.textAlign = 'center';
//     context.textBaseline = 'middle';
//     context.font = 'bold 16px Arial';  // Adjusted font size for better visibility
//     context.fillText(i, x, y);
//   }
// }


// function updateNeedle(hour, minute) {
//   const degrees = (hour % 12) * 30 + minute / 60 * 30;
//   needle.style.transform = `translate(-50%, -100%) rotate(${degrees}deg)`;
// }

// function updateClockFromNeedle() {
//   const centerX = canvas.width / 2;
//   const centerY = canvas.height / 2;
//   const mouseX = event.clientX - canvas.getBoundingClientRect().left - centerX;
//   const mouseY = event.clientY - canvas.getBoundingClientRect().top - centerY;
//   const angle = Math.atan2(mouseY, mouseX);
//   let degrees = (angle * 180) / Math.PI;

//   if (degrees < 0) {
//     degrees += 360;
//   }

//   const hour = Math.floor((degrees + 15) / 30) + 1;
//   const minute = Math.floor(((degrees % 30) * 2) % 60);
//   const period = degrees < 180 ? 'AM' : 'PM';

//   hourInput.value = hour.toString().padStart(2, '0');
//   minuteInput.value = minute.toString().padStart(2, '0');
//   periodInput.value = period;

//   updateNeedle(hour, minute);
// }

// // Add event listeners
// document.getElementById('hour').addEventListener('input', updateClock);
// document.getElementById('minute').addEventListener('input', updateClock);
// document.getElementById('period').addEventListener('change', updateClock);

// needle.addEventListener('mousedown', () => {
//   document.addEventListener('mousemove', updateClockFromNeedle);
//   document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', updateClockFromNeedle);
//     updateClock();
//   });
// });

// // Initial draw
// drawClock();
// updateClock();

