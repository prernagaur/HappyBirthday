document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('playBtn');
  const img = document.querySelector('.photo img');
  const audio = document.getElementById('birthdaySong'); 
  let played = false;

  function playSong() {
    if (audio) {
      audio.play().catch(error => {
        console.error("Audio playback failed (check if the file path is correct):", error);
      });
    } else {
      console.error("Audio element not found. Check if the ID 'birthdaySong' is correct in index.html.");
    }
  }

  btn.addEventListener('click', function () {
    if (!played) {
      playSong(); 
      
      img.style.transform = 'scale(1.03) rotate(-0.6deg)';
      setTimeout(() => (img.style.transform = 'scale(1) rotate(0deg)'), 1700);
      
      btn.textContent = 'Wishes Played';
      played = true;
    }
  });
});