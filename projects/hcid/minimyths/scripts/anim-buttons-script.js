// EVENT LISTENERS //
document.querySelector(".motion-toggle").addEventListener("click", setMotion);
setMotion(); // onLoad
// KNOWN BUG: motion does not change if user presses back button e.g. if user turns motion off then presses back button it will say motion on

// toggles the size and color motion for buttons on all pages (except index) on and off 
function setMotion() {
  var animButtons = document.querySelectorAll('.animate-button');
  animButtons.forEach(function(curButton) {
    // motion on 
    if (Cookies.get('motionOn') === 'true') {
      curButton.style.transition = '0.65s';
    // motion off
    } else {
      curButton.style.transition = '0s';
    }
  });
}