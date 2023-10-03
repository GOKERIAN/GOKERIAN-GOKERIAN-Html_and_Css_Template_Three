const li = document.querySelector(".header .main-nav>li:last-child");
const megaMenu = document.querySelector(".mega-menu");

let isMenuVisible = false;

li.addEventListener("click", (event) => {
  // تمنع انتشار الحدث لعدم إغلاق القائمة فورًا
  event.stopPropagation();

  if (!isMenuVisible) {
    megaMenu.style.opacity = 1;
    megaMenu.style.zIndex = 100;
    megaMenu.style.top = "calc(100% + 2px)";
    isMenuVisible = true;
  } else {
    // إذا قمت بالنقر مرة أخرى على الزر li، سيتم إخفاء القائمة
    megaMenu.style.opacity = 0;
    megaMenu.style.zIndex = 0;
    megaMenu.style.top = "0";
    isMenuVisible = false;
  }
});

// إضافة حدث النقر على الوثيقة لإخفاء القائمة عندما يتم النقر في أي مكان آخر
document.addEventListener("click", (event) => {
  if (event.target !== li) {
    megaMenu.style.opacity = 0;
    megaMenu.style.zIndex = 0;
    megaMenu.style.top = "0";
    isMenuVisible = false;
  }
});

// Selectors for Progress Bars
const ourSkillSection = document.querySelector(".our-skills");
const progressBars = document.querySelectorAll(".our-skills .progress span");

// Function to Handle Progress Bars
window.addEventListener("scroll", () => {
  // Check if the user has scrolled to the "our-skills" section
  if (window.scrollY >= ourSkillSection.offsetTop) {
    // Loop through all progress bars
    progressBars.forEach((progressBar) => {
      // Get the progress value from the "data-progress" attribute
      const progressValue = progressBar.dataset.progress;
      // Set the width of the progress bar
      progressBar.style.width = progressValue;
    });
  }
});

// Selectors for Counters
const allSpan = document.querySelectorAll(".number");
const stats = document.querySelector(".stats");
let start = false;

// Function to Start Counters
window.onscroll = () => {
  // Check if the user has scrolled to the "stats" section
  if (window.scrollY >= stats.offsetTop) {
    // Check if the counters have already started
    if (!start) {
      // Loop through all number elements and start counting
      allSpan.forEach((span) => {
        counterFun(span);
      });
    }
    // Set the counters as started
    start = true;
  }
};

// Function for Counting
function counterFun(span) {
  // Get the target goal from the "data-goal" attribute
  let goal = span.dataset.goal;
  // Initialize the current counter value
  let current = 0;

  // Use setInterval to gradually increase the counter value
  let counter = setInterval(() => {
    // Increment the current value
    current++;
    // Display the current value in the span element
    span.textContent = current;

    // Check if the counter has reached the goal
    if (current === parseInt(goal)) {
      // Stop the setInterval when the goal is reached
      clearInterval(counter);
    }
  }, 6000 / parseInt(goal)); // Adjust the counter speed based on the goal
}

// Counter Time

const endDate = new Date("2024-12-31T23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = endDate - now;

  if (timeRemaining <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = ` ${days}`;
    document.getElementById("hours").textContent =
      hours === 0 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent =
      minutes === 0 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent =
      seconds === 0 ? `0${seconds}` : seconds;
  }
}, 1000);
