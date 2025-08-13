// --- Setup ---
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const starCount = 800; // More stars for a denser feel
const starColor = 'rgba(224, 224, 224, 0.7)';

// --- Initialization ---
function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initStars() {
  stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width // Z-depth for parallax
    });
  }
}

// --- Animation Loop ---
function animate() {
  // Set up a semi-transparent background for motion blur trails
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Center of the screen (the vanishing point)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Loop through each star
  stars.forEach(star => {
    // Move star away from the center to simulate forward motion
    star.z -= 2; // Speed of the hyperspace effect

    // If star is behind the screen, reset it to a new position
    if (star.z <= 0) {
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
      star.z = canvas.width;
    }

    // Calculate the star's 2D position on the screen
    const k = 128 / star.z;
    const px = star.x * k + centerX;
    const py = star.y * k + centerY;

    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = (1 - star.z / canvas.width) * 5;
      ctx.fillStyle = starColor;
      ctx.fillRect(px, py, size, size);
    }
  });

  requestAnimationFrame(animate);
}

// --- Initial Call ---
setCanvasSize();
initStars();
// We will call animate() from our transition script now

window.addEventListener('resize', () => {
  setCanvasSize();
  initStars();
});