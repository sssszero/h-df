function loadComponent(id, url) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', '../assets/components/header.html');
    loadComponent('footer', '../assets/components/footer.html');
    // loadComponent('popup-container', '../components/popup.html');
  });
  