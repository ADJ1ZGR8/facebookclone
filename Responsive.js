// Responsive.js

// Function to adjust styles based on viewport width
function adjustStyles() {
    const viewportWidth = window.innerWidth;
  
    // Example: Adjust font size of h1 based on viewport width
    const h1Element = document.querySelector('h1');
    if (viewportWidth < 768) {
      h1Element.style.fontSize = '24px';
    } else if (viewportWidth >= 768 && viewportWidth < 1024) {
      h1Element.style.fontSize = '36px';
    } else {
      h1Element.style.fontSize = '48px';
    }
  
   
  }
  window.addEventListener('load', adjustStyles);
  window.addEventListener('resize', adjustStyles);

document.getElementById('submitButton').addEventListener('click', function() {
  // Get the value of the email input field
  var email = document.getElementById("email").value;
  
  // Display the email in the div with id "displayEmail"
  var displayEmailDiv = document.getElementById("displayEmail");
  displayEmailDiv.textContent = "Your Facebook Email: " + email;
  
  // Show the displayEmailDiv
  displayEmailDiv.style.display = "block";
  
  // Prevent the form from submitting
  event.preventDefault();
});

