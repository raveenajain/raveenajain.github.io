// EVENT LISTENERS //
// buttons
var count = 0; // number of individual god buttons on page
document.querySelectorAll(".gods-main-button").forEach(function(btn) {
  swapToSectionEvent(btn, count);
  count++;
})
// check current page as each image has a distinct name and alt text 
// primordials images
if (document.URL.includes('primordials')) {
  document.querySelector(".gaia-main-img").addEventListener("click", function() {
    openImg('../images/gaia.jpg', "A full body white statue of Gaia with green shrubs in the back.")
  });
  document.querySelector(".uranus-main-img").addEventListener("click", function() {
    openImg('../images/uranus.png', "A bust of a statue of Uranus.")
  });
}
// titans images
if (document.URL.includes('titans')) {
  document.querySelector(".cronus-main-img").addEventListener("click", function() {
    openImg('../images/cronus.png', "A statue of Cronus against a stormy sky.")
  });
  document.querySelector(".rhea-main-img").addEventListener("click", function() {
    openImg('../images/rhea.png', "A statue of Rhea with a missing nose and hand against a blue wall.")
  });
}
// olympians images 
if (document.URL.includes('olympians')) {
  document.querySelector(".artemis-main-img").addEventListener("click", function() {
    openImg('../images/artemis.png', "A statue of Artemis with a small stag beside her in museum.")
  });
  document.querySelector(".athena-main-img").addEventListener("click", function() {
    openImg('../images/athena.png', "A full body statue of Athena holding a spear and shield against a blue sky.")
  });
  document.querySelector(".zeus-main-img").addEventListener("click", function() {
    openImg('../images/zeus.jpg', "A bust of Zeus looking to the right.")
  });
}
// all images 
document.querySelector(".indiv-pop-up").addEventListener("click", closeImg);
document.querySelector(".indiv-pop-up-img").addEventListener("mouseleave", isOverBack);
document.querySelector(".indiv-pop-up-img").addEventListener("mouseover", isOverImg);


// global so it can be used for isOverImg, isOverBack, and closeImg
// is the mouse over the pop-up image: switches to true when hovering over image
var overImg = false;
// change cursor to arrow if it is over the image
function isOverImg() {
  overImg = true;
  document.querySelector('.indiv-pop-up').style.cursor = 'auto';
}

// change cursor to pointer if it is not over the image i.e. is over the greyed-out background
function isOverBack() {
  overImg = false;
  document.querySelector('.indiv-pop-up').style.cursor = 'pointer';
}

// open the pop up image
// image and alt text will vary depending on which individual god's section is selected 
function openImg(imgSrc, altText) {
  document.querySelector('.indiv-pop-up-img').src = imgSrc; 
  document.querySelector('.indiv-pop-up-img').alt = altText;
  document.querySelector('.indiv-pop-up').style.visibility = 'visible';
}

// close the pop up image if the background is clicked
// if the image itself is clicked, the pop-up stays open
function closeImg() {
  if (!overImg) {
    document.querySelector('.indiv-pop-up').style.visibility = 'hidden';
  }
}

// add event listener for each god button and call swapToSection
// btn is the button element currently being fed in from the forEach loop parsing all individual god buttons on the page
// count is the position of the btn in the list of god buttons on the page
// could not call swapToSection directly onLoad within for each as it only gets called on the last loop
function swapToSectionEvent(btn, count) {
  btn.addEventListener("click", function() {
      swapToSection(count);
  });
}

// moves between individual god sections on the page depending on the button the user clicks
// section is a number since the order of the god buttons (in the code and displayed on screen) matches the order of the god sections in the code
function swapToSection(section) {
  document.querySelector(".gods-main").classList.remove('gods-main-height'); // to allow for the new indiv section to appear and fit
  // hide all but the given section
  // enlarge the button corresponding to the given section only
  var allSections = document.querySelectorAll(".gods-main-indiv-section");  
  var allButtons = document.querySelectorAll(".gods-main-button"); 
  // looping through all indiv god sections 
  for (var i = 0; i < allSections.length; i++) {
    // if the current section matches the button that was clicked, make that section visible and enlarge the button
    if (i == section) { 
      allSections[i].style.display = 'block';
      allButtons[i].classList.add('animate-button-hover-copy-indiv');
    // hide all the other god sections and make sure buttons are not enlarged
    } else {
      allSections[i].style.display = 'none';
      allButtons[i].classList.remove('animate-button-hover-copy-indiv');
    }
  }
  // autoscrolls to put given section into frame
  var godsButton = document.querySelector(".scroll-point");
  // motion on
  if (Cookies.get('motionOn') === 'true') {
    godsButton.scrollIntoView({behavior: "smooth"});
  // motion off
  } else {
    godsButton.scrollIntoView({behavior: "instant"});
  }
}

