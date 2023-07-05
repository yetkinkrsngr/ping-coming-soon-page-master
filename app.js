function clearValue(element) {
  element.value = "";
}
function restoreValue(element) {
  if (element.value === "") {
    element.value = "Your email Address...";
  }
}
// Get the form element and email input element
const form = document.querySelector("form");
const emailInput = document.getElementById("email-input");
const errorElement = document.querySelector(".error-message");

// Add an event listener for the form submission
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Remove any existing error message
  errorElement.textContent = "";

  // Get the entered email value
  const email = emailInput.value.trim();

  // Check if the email is valid using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  // Toggle the error state based on email validity
  if (isValidEmail) {
    // Valid email, remove any error styles
    emailInput.classList.remove("error");
    // Submit the form
    form.submit();
  } else {
    // Invalid email, add error styles
    emailInput.classList.add("error");
    // Display error message below the input
    errorElement.textContent = "Please provide a valid email address.";
  }
});
