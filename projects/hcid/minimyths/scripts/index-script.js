// EVENT LISTENERS //
// motion button
document.querySelector(".motion-toggle").addEventListener("click", updateArrowMotion);
// arrows
document.querySelector(".arrow1").addEventListener("click", function() {
  moveDown("section1");
});
document.querySelector(".arrow2-down").addEventListener("click", function() {
  moveDown("section2");
});
document.querySelector(".arrow2-up").addEventListener("click", function() {
  moveUp("section2");
});
document.querySelector(".arrow3").addEventListener("click", function() {
  moveUp("section3");
});
updateArrowMotion(); // onLoad
// gods buttons 
document.querySelector(".home-main-gods-area").addEventListener("mouseleave", function() {
  makeButtonsHidden(0, 2);
});
document.querySelector(".home-main-gods-area").addEventListener("mouseover", function() {
  makeButtonsVisible(0, 2);
});
// stories buttons
document.querySelector(".home-main-stories-area").addEventListener("mouseleave", function() {
  makeButtonsHidden(3, 4);
});
document.querySelector(".home-main-stories-area").addEventListener("mouseover", function() {
  makeButtonsVisible(3, 4);
});
// set initial positions for scrolled sections so everything resets when user:
// refreshes page 
document.querySelector(".home-main").style.transform = 'translate(0, 0vh)';
// goes back to page via back button
window.addEventListener("pageshow", function() {
  document.querySelector(".home-main").style.transform = 'translate(0, 0vh)';
  document.querySelector(".home-main").style.transition = '0s';
  makeButtonsHidden(0, 4);
});
// KNOWN "BUG": if the user presses one of the arrow buttons before the page loading is complete, it will jump back to the first section of the page


// makes given buttons (inclusive of buttons at start and end positions) visbile when respecitve area is hovered 
function makeButtonsVisible(start, end) {
  for (var i = start; i <= end; i++) {
    var thisButton = document.querySelectorAll('.home-main-button')[i]; // buttons themselves 
    var curAnimButton = document.querySelectorAll('.animate-button-color')[i]; // button color fill
    // make visible
    thisButton.classList.remove('home-main-button-off');
    thisButton.classList.add('home-main-button-on');
    // motion on
    if (Cookies.get('motionOn') === 'true') {
      thisButton.style.transition = '0.3s'; 
      curAnimButton.style.transition = '0.65s'; 
      // for expanding containing area buttons are in
      document.querySelectorAll(".home-main-buttons").forEach(function(btn) { 
        btn.style.transition = '0.75s';
      })
    // motion off
    } else {
      thisButton.style.transition = '0s';
      curAnimButton.style.transition = '0s';
      document.querySelectorAll(".home-main-buttons").forEach(function(btn) {
        btn.style.transition = '0s';
      })
    }
  }
}

// hides given buttons (inclusive of buttons at start and end positions) when respecitve area is left 
function makeButtonsHidden(start, end) {
  for (var i = start; i <= end; i++) {
    var thisButton = document.querySelectorAll('.home-main-button')[i]; // buttons themselves 
    // hide visibility for accessibility 
    thisButton.classList.add('home-main-button-off');
    thisButton.classList.remove('home-main-button-on');
    // motion on
    if (Cookies.get('motionOn') === 'true') {
      thisButton.style.transition = '0.3s';
      // for closing containing area buttons are in
      document.querySelectorAll(".home-main-buttons").forEach(function(btn) { 
        btn.style.transition = '0.75s';
      })
    // motion off
    } else {
      thisButton.style.transition = '0s';
      document.querySelectorAll(".home-main-buttons").forEach(function(btn) {
        btn.style.transition = '0s';
      })
    }
  }
}

// allows or disables motion for arrows on hover 
function updateArrowMotion() {
  // add motion
  if (Cookies.get('motionOn') === 'true') {
    document.querySelectorAll(".home-main-arrows").forEach(function(arrow) {
      arrow.classList.add('home-main-arrows-hover');
    })
  // disable motion
  } else {
    document.querySelectorAll(".home-main-arrows").forEach(function(arrow) {
      arrow.classList.remove('home-main-arrows-hover');
    })
  }
}

// outside functions for consistency for both moveDown and moveUp so motion will not break if transition timing is changed
var shiftTime = '4s'; 
// moves the user down to the next section by moving the main section of the home page when a down arrow is clicked 
// i.e. the section you see will move up and off screen and the next section will move into view from off the bottom of the screen
// sec = the current section the user is in
function moveDown(sec) {
  var section = document.querySelector(".home-main"); // div being moved
  // how much div is moved 
  var shift = '-100vh'; 
  if (sec == "section2") {
    shift = '-200vh';
  }
  // motion on
  if (Cookies.get('motionOn') === 'true') {
    section.style.transition = shiftTime;
  // motion off
  } else {
    section.style.transition = '0s';
  }
  // move section
  section.style.transform = 'translate(0,' + shift + ')';
}

// moves the user back up to the previous section by moving the main section of the home page when an up arrow is clicked 
// i.e. the section you see will move down and off screen and the next section will move into view from off the top of the screen
// sec = the current section the user is in
function moveUp(sec) {
  var section = document.querySelector(".home-main"); // div being moved
  // how much div is moved 
  var shift = '-100vh';
  if (sec == "section2") {
    shift = '0vh';
  }
  // motion on
  if (Cookies.get('motionOn') === 'true') {
    section.style.transition = shiftTime;
  // motion off
  } else {
    section.style.transition = '0s';
  }
  // move section
  section.style.transform = 'translate(0,' + shift + ')';
}