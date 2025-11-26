// nav.js — injects bottom nav and handles active tab + login state

(function(){
  const navHtml = `
    <nav class="app-nav" id="appNav">
      <a href="index.html" data-page="index.html">
        <div class="icon">🏠</div><div class="label">Home</div>
      </a>
      <a href="search.html" data-page="search.html">
        <div class="icon">🔍</div><div class="label">Search</div>
      </a>
      <a href="library.html" data-page="library.html">
        <div class="icon">📚</div><div class="label">Library</div>
      </a>
      <a href="profile.html" data-page="profile.html" id="profileLink">
        <div class="icon">👤</div><div class="label">Account</div>
      </a>
    </nav>
  `;

  // append nav to body
  document.addEventListener('DOMContentLoaded', () => {
    // only add once
    if (!document.getElementById('appNav')) {
      document.body.insertAdjacentHTML('beforeend', navHtml);
    }

    // add bottom padding class so content not hidden
    document.body.classList.add('page-bottom-padding');

    // determine active link from location
    const path = location.pathname.split('/').pop() || 'index.html';

    // If you used filenames other than index.html, adjust here if needed
    const anchors = document.querySelectorAll('#appNav a');
    anchors.forEach(a => {
      const page = a.getAttribute('data-page');
      if (page === path) a.classList.add('active');
    });

    // Show profile or login depending on auth
    const user = localStorage.getItem('loggedInUser');
    const profileLink = document.getElementById('profileLink');
    if (user) {
      profileLink.href = 'profile.html';
      profileLink.querySelector('.label').textContent = user.length > 10 ? user.slice(0,10)+'…' : user;
    } else {
      profileLink.href = 'login.html';
      profileLink.querySelector('.label').textContent = 'Sign in';
    }
  });
})();