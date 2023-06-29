// EVENT LISTENERS //
document.querySelector(".motion-toggle").addEventListener("click", changeMotionOnClick);
document.querySelector(".fa-bars").addEventListener("click", toggleMobileNav);
document.querySelector(".nav-inner-gods").addEventListener("click", function() {
  toggleInnerNav(0);
});
document.querySelector(".nav-inner-stories").addEventListener("click", function() {
  toggleInnerNav(1);
});
changeMotionOnLoad(); // onLoad


// if motion is on and button is clicked, turn motion off
// else turn motion back on
// change buttons styles depending on state
function changeMotionOnClick() {
  var toggle = document.querySelector(".motion-toggle");
  var curMotion = Cookies.get('motionOn');
  // if motion is on and button is clicked, turn motion off
  if (curMotion === 'true') {
    toggle.textContent = "Motion Off";
    toggle.classList.add('motion-toggle-off');
    toggle.classList.remove('motion-toggle-on');
    Cookies.set('motionOn', false);
  // if motion is off and button is clicked, turn motion on
  } else {
    toggle.textContent = "Motion On";
    toggle.classList.add('motion-toggle-on');
    toggle.classList.remove('motion-toggle-off');
    Cookies.set('motionOn', true);
  }
}

// change the motion button depending on whether motion is on or off
// if the page is loading for the first time, motion is set to and turned on
function changeMotionOnLoad() {
  var toggle = document.querySelector(".motion-toggle");
  // initial load
  if (Cookies.get('motionOn') == null) {
    Cookies.set('motionOn', true);
  }
  var curMotion = Cookies.get('motionOn');
  // motion off
  if (curMotion === 'false') {
    toggle.textContent = "Motion Off";
    toggle.classList.add('motion-toggle-off');
    toggle.classList.remove('motion-toggle-on');
  // motion on
  } else {
    toggle.textContent = "Motion On";
    toggle.classList.add('motion-toggle-on');
    toggle.classList.remove('motion-toggle-off');
  }
}

// open or close the contents of the hamburger nav bar seen on smaller screens
function toggleMobileNav() {
  var content = document.querySelector(".nav-burger-content");
  // close nav
  if (content.style.display == "flex") {
    content.style.display = "none";
  // open nav
  } else {
    content.style.display = "flex";
  }
}

// open or close the inner dropdown contents of the hamburger nav bar seen on smaller screens
function toggleInnerNav(index) {
  var content = document.querySelectorAll(".nav-burger-inner-dropdown")[index];
  var subContent = document.querySelectorAll(".nav-burger-inner-dropdown-content")[index];
  // close contents
  if (subContent.style.display == "flex") {
    subContent.style.display = "none";
    content.classList.remove('nav-burger-orange');
  // open contents and highlight parent that was clicked
  } else {
    subContent.style.display = "flex";
    content.classList.add('nav-burger-orange');
  }
}
