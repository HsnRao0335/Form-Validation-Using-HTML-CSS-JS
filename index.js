const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
let showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// Show Input Success outline

let showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Validate Email   from (STACKOVER FLOW)
let checkEmail = input => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess;
  } else {
    showError(input, "Email is not valid");
  }
};

//**Check required fields (USING forEach method) */

let checkRequired = inputArray => {
  inputArray.forEach(input => {
    if (input.value.trim() === "") {
      // trim() removes spaces
      showError(input, `${getFieldName(input)} is required`); // <--  we want our first letter to be capital so we have to make a function
    } else {
      showSuccess(input);
    }
  });
};

//Check input length

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} should be at least ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} should be at least ${max}`);
  } else {
    showSuccess(input);
  }
};

// Check passwords match

let checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
};

// To capitalize first word of checkRequired function

let getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event Listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();

  //* NEW AND MODIFIED WAY  by forEachLoop*/

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

  //    **LONG METHOD TOO MUCH REPITITIVE WORK**
  //   if (username.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value === "") {
  //     showError(email, "Email is required");
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, "Email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "Password is required");
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (password2.value === "") {
  //     showError(password2, "Password 2 is required");
  //   } else {
  //     showSuccess(password2);
  //   }
});
