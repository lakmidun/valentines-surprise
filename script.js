// Select Elements
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const thankYou = document.getElementById('thank-you');

// Open Envelope
envelope.addEventListener('click', () => {
  envelope.style.display = 'none';
  letter.style.display = 'block';
});

// Handle Yes Button
yesBtn.addEventListener('click', () => {
  letter.style.display = 'none';
  thankYou.style.display = 'block';
});

// Handle No Button
noBtn.addEventListener('mouseover', () => {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});