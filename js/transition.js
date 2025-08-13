// Find the necessary elements
const enterButton = document.getElementById('enter-button');
const mainContent = document.querySelector('main');
const unlockOverlay = document.getElementById('unlock-overlay');
const transitionPortal = document.getElementById('transition-portal');

if (enterButton) {
  enterButton.addEventListener('click', (event) => {
    event.preventDefault();

    // --- Stage 1: Fade out card, show "Access Granted" ---
    mainContent.style.opacity = '0';
    unlockOverlay.classList.add('is-active');

    // --- Stage 2: After a delay, expand the portal ---
    setTimeout(() => {
      unlockOverlay.style.opacity = '0'; // Fade out the unlock message
      transitionPortal.classList.add('is-active'); // Activate the portal
      animate(); // Start the hyperspace animation
    }, 2000); // Wait 2 seconds for the unlock animation

    // --- Stage 3: After another delay, navigate to the page ---
    setTimeout(() => {
      window.location.href = enterButton.href;
    }, 4000); // Total transition time of 4 seconds
  });
}