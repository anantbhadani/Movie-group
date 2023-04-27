const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselItemWidth = carouselItems[0].clientWidth;
let currentIndex = 0;

carouselInner.style.transform = `translateX(-${currentIndex * carouselItemWidth}px)`;

function moveToNext() {
  currentIndex++;
  if (currentIndex > carouselItems.length - 1) {
    currentIndex = 0;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * carouselItemWidth}px)`;
}

setInterval(moveToNext, 3000); // auto transition every 3 seconds

function submitButton() {
  // Get the input values from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verify user credentials
  if (username === 'demo' && password === 'password') {
    // Generate and send OTP to user's email
    const otp = Math.floor(Math.random() * 900000) + 100000;
    const email = 'user@example.com';
    const subject = 'Login OTP';
    const message = `Your OTP is: ${otp}`;
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${message}`;
    window.location.href = mailtoLink;
  } else {
    alert('Invalid username or password');
  }
}
