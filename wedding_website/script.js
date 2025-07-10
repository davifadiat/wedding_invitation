// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('name') || 'Guest';
const eventName = urlParams.get('event') || 'Wedding Ceremony';

// Update the page content
document.getElementById('guest-name').textContent = guestName;
document.getElementById('event-name').textContent = eventName;

// RSVP Button Action (you can expand this later with form handling)
document.getElementById('rsvp-btn').addEventListener('click', function() {
  alert('Thank you for your RSVP!');
});
