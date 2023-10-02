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
