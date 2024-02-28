document.addEventListener("DOMContentLoaded", function () {
  var openFormBtn = document.getElementById("openFormBtn");
  var contactFormModal = document.getElementById("contactFormModal");
  var closeBtn = document.getElementsByClassName("close")[0];
  
  openFormBtn.onclick = function () {
    contactFormModal.style.display = "block";
  };

  closeBtn.onclick = function () {
    contactFormModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == contactFormModal) {
      contactFormModal.style.display = "none";
    }
  };

  var form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Your form submission logic here
    // For example, you can use AJAX to send the form data to a server
    console.log("Form submitted!");
    contactFormModal.style.display = "none";
  });
});
