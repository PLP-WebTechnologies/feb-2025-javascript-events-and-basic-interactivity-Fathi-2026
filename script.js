// Event Handling Section

// Button Click Event
document.getElementById('clickButton').addEventListener('click', function() {
    console.log("Button was clicked!");
  });
  
  // Hover Effect
  document.getElementById('hoverButton').addEventListener('mouseover', function() {
    console.log("Button was hovered over!");
  });
  
  // Keypress Detection
  document.getElementById('keyPressInput').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
  
  // Bonus: Double-click or Long Press
  let pressTimer;
  document.getElementById('secretButton').addEventListener('dblclick', function() {
    alert("You found the secret! 🎉");
  });
  document.getElementById('secretButton').addEventListener('mousedown', function() {
    pressTimer = setTimeout(function() {
      alert("Long press detected! 🔓");
    }, 1000);
  });
  document.getElementById('secretButton').addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
  });
  
  // Interactive Elements Section
  
  // Change Text or Color
  document.getElementById('changeButton').addEventListener('click', function() {
    this.textContent = 'Text Changed!';
    this.style.backgroundColor = '#FF6347';
  });
  
  // Image Gallery
  let images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  let currentIndex = 0;
  document.getElementById('galleryImage').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    this.src = images[currentIndex];
  });
  
  // Tabs/Accordion
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  // Form Validation Section
  
  // Form Validation
  document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!document.getElementById('username').value || !document.getElementById('email').value || !document.getElementById('password').value) {
      event.preventDefault();
      alert("Please fill in all required fields!");
    }
  });
  
  // Real-time feedback for password length
  document.getElementById('password').addEventListener('input', function() {
    if (this.value.length < 8) {
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = "green";
    }
  });
  
  // Real-time email validation
  document.getElementById('email').addEventListener('input', function() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(this.value)) {
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = "green";
    }
  });
  