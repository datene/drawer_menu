var openDrawerButton = document.getElementById('open-drawer');
var closeDrawerButton = document.getElementById('close-drawer');
var drawer = document.getElementById('drawer');

openDrawerButton.addEventListener('click', function(event) {
  event.preventDefault();
  drawer.classList.remove('drawer-collapsed');
  drawer.classList.add('drawer-expanded');
  openDrawerButton.classList.add('active');
  closeDrawerButton.classList.remove('active');
  document.querySelector('body').classList.add('drawer-backdrop');
  document.querySelector('.drawer-backdrop-overlay').classList.remove('hidden');
  document.querySelector('.drawer-backdrop-overlay').classList.remove('invisible');
  document.querySelector('.drawer-backdrop-overlay').classList.add('visible');
})

closeDrawerButton.addEventListener('click', function(event) {
  event.preventDefault();
  drawer.classList.add('drawer-collapsed');
  drawer.classList.remove('drawer-expanded');
  openDrawerButton.classList.remove('active');
  closeDrawerButton.classList.add('active');
  document.querySelector('body').classList.remove('drawer-backdrop');
  document.querySelector('.drawer-backdrop-overlay').classList.remove('visible');
  document.querySelector('.drawer-backdrop-overlay').classList.add('invisible');
})