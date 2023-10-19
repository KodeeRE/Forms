// Prevent form from submitting
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function(event) {
      // Retrieve the input field value
      const inputValue = inputField.value;

      // Regular expression pattern for alphanumeric input
      const alphanumericPattern = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (!alphanumericPattern.test(inputValue)) {
          // Invalid input: display error message
          errorMessage.textContent = "Input must be alphanumeric.";
          event.preventDefault(); // Prevent form submission
      } else {
          // Valid input: display confirmation (for demonstration purposes)
          errorMessage.textContent = "Success! Input is valid.";
          event.preventDefault(); // stopping form submission
      }
  });
});