const inputFields = document.querySelectorAll(".inp");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");

// style the input fields
inputFields.forEach((input) => {
  input.addEventListener("focus", function () {
    this.setAttribute("data-placeholder", this.getAttribute("placeholder"));
    this.setAttribute("placeholder", "");
    this.style.borderBottom = "crimson solid";
  });

  input.addEventListener("blur", function () {
    if (!this.value) {
      this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
      this.removeAttribute("data-placeholder");
      this.style.borderBottom = "1px solid black";
    }
  });
});

//optionally if we want to remain the data-placeholder

    // inputFields.forEach((input) => {
    //   input.value = localStorage.getItem(input.id);
    // });

//set the input to the local storage
inputFields.forEach((input) => {
  input.addEventListener("input", function () {
    localStorage.setItem(input.id, input.value);
  });
});

// Clear local storage and input fields when form is submitted
form.addEventListener('submit', function(event) {
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#re-pass');
    const inputsToClear = document.querySelectorAll('.inp');

    if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = "Password mismatch, please reenter it.";
    } else {
        errorMessage.textContent = ""; // Clear error message
        
        // Clear input values
        inputsToClear.forEach(input => {
            input.value ='';
            //optionally clear the local storage
                  // localStorage.clear();
        });
    }
});

