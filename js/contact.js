// let contactform = document.querySelector("form");
// let submitbutton = document.getElementById("submitbtn");

// function validateForm() {
//   var nameField = document.getElementById("name");
//   var emailField = document.getElementById("email");
//   var messageField = document.getElementById("message");

//   if (nameField.value.trim() === "") {
//     nameField.classList.add("error");
//     return false;
//   } else {
//     nameField.classList.remove("error");
//   }

//   if (emailField.value.trim() === "") {
//     emailField.classList.add("error");
//     return false;
//   } else {
//     emailField.classList.remove("error");
//   }

//   if (messageField.value.trim() === "") {
//     messageField.classList.add("error");
//     return false;
//   } else {
//     messageField.classList.remove("error");
//   }

//   return true;
// }

// contactform.addEventListener("submit", function(e) {
//   if (validateForm()) {
//     e.preventDefault();
//     submitbutton.innerText = "SUBMITTED";
//     submitbutton.classList.add("glowing-button");
//   }
// });

let contactform = document.querySelector("form");
let submitbutton = document.getElementById("submitbtn");

function validateForm() {
  var nameField = document.getElementById("name");
  var emailField = document.getElementById("email");
  var messageField = document.getElementById("message");

  if (nameField.value.trim() === "") {
    nameField.classList.add("error");
    return false;
  } else {
    nameField.classList.remove("error");
  }

  if (emailField.value.trim() === "") {
    emailField.classList.add("error");
    return false;
  } else {
    emailField.classList.remove("error");
  }

  if (messageField.value.trim() === "") {
    messageField.classList.add("error");
    return false;
  } else {
    messageField.classList.remove("error");
  }

  return true;
}

contactform.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  if (validateForm()) {
    submitbutton.innerText = "SUBMITTED";
    submitbutton.classList.add("glowing-button");

    // Prepare the form data for submission
    let formData = new FormData(contactform);

    // Perform an AJAX request to submit the form
    let xhr = new XMLHttpRequest();
    xhr.open(contactform.method, contactform.action, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Handle the response here if needed
        // if (xhr.status === 200) {
        //   console.log("Form submitted successfully.");
        // } else {
        //   console.log("Form submission failed.");
        // }

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }
    };
    xhr.send(formData);
  }
});


// the effect on heading


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function runCode(targetElement) {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    targetElement.innerText = targetElement.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return targetElement.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= targetElement.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 50);
}

function startCode() {
  const targetElement = document.querySelector("#getintouch");
  runCode(targetElement);

  setInterval(() => {
    runCode(targetElement);
  }, 8000); // Run the code automatically every 10 seconds
}

document.addEventListener("DOMContentLoaded", startCode);
