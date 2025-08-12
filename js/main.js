// Find the button and the audio player elements on the page
const toggleButton = document.getElementById('audio-toggle-button');
const audioPlayer = document.getElementById('audio-player');

// Add an event listener that waits for a 'click' on our button
toggleButton.addEventListener('click', () => {
  // Check if the audio is currently paused
  if (audioPlayer.paused) {
    audioPlayer.play(); // If it's paused, play it
    toggleButton.textContent = ' ∥ '; // Change button to PAUSE symbol
  } else {
    audioPlayer.pause(); // If it's playing, pause it
    toggleButton.textContent = ' ► '; // Change button to PLAY symbol
  }
});

// Set the initial button state when the page loads
// This ensures if the audio is already playing/paused, the button is correct.
if (audioPlayer.paused) {
  toggleButton.textContent = ' ► ';
} else {
  toggleButton.textContent = ' ∥ ';
}