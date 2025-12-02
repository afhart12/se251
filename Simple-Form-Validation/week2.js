// JavaScript Document
document.getElementById("submit").addEventListener("click", validateForm);

function validateForm() {
    const fName = document.getElementById("first-name").value;
    const lName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const cEmail = document.getElementById("confirm-email").value;
    const phone = document.getElementById("phone").value;

    const namePattern = /^[A-Za-z\-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    let errors = [];
    let isValid = true;

    
    if (fNameInput.value.trim() === "") {
        errors.push("Please fill in your first name.");
        isValid = false;
  } else if (!namePattern.test(fNameInput.value)) {
        errors.push("Your first name cannot include special characters.");
        isValid = false;
  }

    
    if (lNameInput.value.trim() === "") {
    errors.push("Please fill in your last name.");
    isValid = false;
  } else if (!namePattern.test(lNameInput.value)) {
    errors.push("Your last name cannot include special characters.");
    isValid = false;
  }

  
  if (!emailPattern.test(emailInput.value)) {
    errors.push("Please enter a valid email.");
    isValid = false;
  }

  
  if (confirmEmailInput.value !== emailInput.value) {
    errors.push("Emails do not match.");
    isValid = false;
  }

  
  if (!phonePattern.test(phoneInput.value)) {
    errors.push("Phone number must be exactly 10 digits.");
    isValid = false;
  }

  
  if (!isValid) {
    document.getElementById("confirmationText").innerHTML = errors.join("<br>");
    document.getElementById("confirmationDiv").style.display = "block";
    return false; 
  } else {
    document.getElementById("formDiv").style.display = "none";

    let errorsDiv = document.getElementById("errors");
    let confirmationDiv = document.getElementById("confirmation");
    let confirmationText = document.getElementById("info");

  if (errors.length > 0) {
    // Show errors in the errors div
    errorsDiv.innerHTML = errors.join("<br>");
    errorsDiv.style.display = "none";
    var person = {
      fname: fName,
      lname: lName,
      email: email,
      phone: phone
    };

    info.innerHTML =
      `First Name: ${person.fname}<br>
       Last Name: ${person.lname}<br>
       Email: ${person.email}<br>
       Phone: ${person.phone}`;

    confirmationDiv.style.display = "block";
    return true;
  }}}