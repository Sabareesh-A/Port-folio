
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = form.querySelector('input[name="Name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  // Prevent number input in Name field
  nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[0-9]/g, '');
  });

  form.addEventListener("submit", function (e) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }
  });
});

