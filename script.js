const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');
const cartCount = document.getElementById('cartCount');
const toast = document.getElementId('toast');

menuButton?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

let cart = 0;
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    cart += 1;
    cartCount.textContent = cart;
    const toast = document.getElementById('toast');
    toast.textContent = `${button.dataset.product} added to cart`;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  });
});

document.getElementById('newsletterForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const toast = document.getElementById('toast');
  toast.textContent = 'Welcome to the Zulu Poison community';
  toast.classList.add('show');
  event.target.reset();
  window.setTimeout(() => toast.classList.remove('show'), 2200);
});
