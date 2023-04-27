const seats = document.querySelectorAll('.seat:not(.occupied)');
const selectedSeats = document.getElementById('selected-seats');
const clearButton = document.getElementById('clear-btn');
const bookButton = document.getElementById('book-btn');
let selectedSeatCount = 0;

// Add event listeners to seats
seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    // Toggle selected class on click
    seat.classList.toggle('selected');
    seat.classList.toggle('selected-color');

    // Update selected seats option
    const selected = document.querySelectorAll('.selected');
    const seatNumbers = [...selected].map((seat) => seat.getAttribute('data-seat'));
    selectedSeats.textContent = seatNumbers.join(', ');

    // Update selected seat count
    selectedSeatCount = selected.length;

    // Enable/disable book button
    bookButton.disabled = selectedSeatCount === 0;
    // Enable/disable clear button
    clearButton.disabled = selectedSeatCount === 0;
  });
});

// Add event listener to clear button
clearButton.addEventListener('click', () => {
  // Remove selected class from all seats
  seats.forEach((seat) => {
    seat.classList.remove('selected', 'clearButton');
  });

  // Update selected seats option and selected seat count
  selectedSeats.textContent = '';
  selectedSeatCount = 0;

  // Disable book button
  bookButton.disabled = true;
  // Disable clear button
  clearButton.disabled = true;
});

bookButton.addEventListener('click', () => {
  // Get selected seats
  const selectedSeats = document.querySelectorAll('.selected');

  if (selectedSeats.length === 0) {
    alert('Please select at least one seat to book!');
    return;
  }

  // Get user input
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === '') {
    alert('Please enter your name!');
    return;
  }

  if (email === '') {
    alert('Please enter your email!');
    return;
  }

  // Get seat numbers
  const seatNumbers = Array.from(selectedSeats).map(seat => seat.dataset.seatNumber).join(', ');

  // Send email
  const emailBody = `Name: ${name}\nEmail: ${email}\nSelected Seats: ${seatNumbers}`;
  const emailLink = `mailto:${email}?subject=Ticket Details&body=${encodeURIComponent(emailBody)}`;

  window.location.href = emailLink;

  // Reset form and seats
  nameInput.value = '';
  emailInput.value = '';
  selectedSeats.forEach(seat => seat.classList.remove('selected'));
});
