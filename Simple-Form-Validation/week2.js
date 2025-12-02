// JavaScript Document

window.onload = function() {
    document.getElementById("submit").addEventListener("click", validateForm);
}
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

    
    if (fName === "") {
        errors.push("Please fill in your first name.");
  } else if (!namePattern.test(fName)) {
        errors.push("Your first name cannot include special characters.");
  }

  // Last name
    if (lName === "") {
        errors.push("Please fill in your last name.");
  } else if (!namePattern.test(lName)) {
        errors.push("Your last name cannot include special characters.");
  }

  // Email
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email.");
  }

  // Confirm email
    if (cEmail !== email) {
        errors.push("Emails do not match.");
  }

  // Phone
    if (!phonePattern.test(phone)) {
        errors.push("Phone number must be exactly 10 digits.");
  }

    let errorsDiv = document.getElementById("errors");
    let confirmationDiv = document.getElementById("confirmation");
    let confirmationText = document.getElementById("info");

  if (errors.length > 0) {
    errorsDiv.innerHTML = errors.join("<br>");
    errorsDiv.style.display = "block";
    confirmationDiv.style.display = "none";
  } else {
    errorsDiv.style.display = "none";
    document.getElementById("form").style.display = "none";

    let person = { fname: fName, lname: lName, email: email, phone: phone };

    confirmationText.innerHTML =
      `Name: ${person.fname} ${person.lname}<br>
       Email: ${person.email}<br>
       Phone: ${person.phone}`;

    confirmationDiv.style.display = "block";
  }}