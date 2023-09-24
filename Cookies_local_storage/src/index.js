// Import the necessary module to work with cookies
import Cookies from 'js-cookie';

// Function to set cookies
function setCookies() {
  const firstnameInput = document.getElementById('firstname');
  const emailInput = document.getElementById('email');

  const firstname = firstnameInput.value;
  const email = emailInput.value;

  Cookies.set('firstname', firstname);
  Cookies.set('email', email);

  firstnameInput.value = '';
  emailInput.value = '';
}

// Function to show cookies
function showCookies() {
  const cookies = Cookies.get();
  const cookiesParagraph = document.createElement('p');
  cookiesParagraph.innerHTML = `Cookies: ${JSON.stringify(cookies)}`;

  document.body.appendChild(cookiesParagraph);
}

// Expose the functions globally so they can be called from HTML
window.setCookies = setCookies;
window.showCookies = showCookies;
