const mail = document.getElementById("email");

const checkEmailValidity = (event) => {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity("Enter an e-mail address");
    mail.reportValidity();
  } else {
    mail.setCustomValidity("");
  }
};

mail.addEventListener("input", checkEmailValidity);
