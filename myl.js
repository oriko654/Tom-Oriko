 function submitForm() {
      let name = document.getElementById('name').value.trim();
      let email = document.getElementById('email').value.trim();
      let message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        alert("Please fill in all fields! 🔒");
      } else {
        alert("Message sent successfully! 🚀 We'll get back to you.");
        // Reset form
        document.getElementById('contactForm').reset();
      }
    }
    