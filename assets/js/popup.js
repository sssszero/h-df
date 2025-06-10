document.addEventListener('click', (e) => {
    if (e.target.matches('.open-popup')) {
      document.getElementById('popup-container').classList.add('visible');
    }
    if (e.target.matches('.close-popup')) {
      document.getElementById('popup-container').classList.remove('visible');
    }
  });
  