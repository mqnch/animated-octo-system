/* Function to toggle the background music */
function toggleMusic() {
    var audio = document.getElementById("backgroundMusic");
    var toggleButton = document.getElementById("toggleButton");
    if (audio.paused) {
        audio.play();
        toggleButton.src = "volume.png";
    } else {
        audio.pause();
        toggleButton.src = "mute.png";
    }
}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

// Function to handle page load
function handlePageLoad() {
// Get the loading overlay and text elements
var loadingOverlay = document.querySelector('.loading-overlay');
var loadingText = document.querySelector('.loading-text');

// Hide the loading overlay and text after a delay (1 second in this example)
setTimeout(function () {
    loadingOverlay.style.opacity = 0;
    loadingText.style.opacity = 0;
    loadingText.style.fontSize = '0';

    // Fade out the black screen gradually
    var fadeOutInterval = setInterval(function () {
        document.body.style.backgroundColor = `rgba(0, 0, 0, ${parseFloat(document.body.style.backgroundColor.substring(14)) - 0.01})`;
        if (parseFloat(document.body.style.backgroundColor.substring(14)) <= 0) {
        clearInterval(fadeOutInterval);
        loadingOverlay.remove();
        }
    }, 10);
    }, 1000);

// Add the'loaded' class to the body to hide the loading overlay and text using CSS
document.body.classList.add('loaded');
}

// Call the handlePageLoad function when the window has finished loading
window.addEventListener('load', handlePageLoad);
  


function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var emailInput = document.querySelector('input[type="email"]');
    var email = emailInput.value;
    
    // Change the button text to indicate successful subscription
    var submitButton = document.getElementById("submitButton");
    submitButton.innerText = "✓";
    
    // Perform any desired actions with the entered email
    console.log("Subscribed email:", email);
    emailInput.value = ''; // Clear the input field after submission
}

// Function to animate rectangles
function animateRectangles() {
    var rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach(function(rectangle, index) {
      setTimeout(function() {
        rectangle.style.opacity = '1';
        rectangle.style.transform = 'translateY(0)';
      }, (index + 1) * 600); // Change the delay (in milliseconds) for each rectangle
    });
  }
  
  // Call the animateRectangles function when the window has finished loading
  window.addEventListener('load', function() {
    setTimeout(animateRectangles, 300); // Wait for 1 second before starting animation
  });
  