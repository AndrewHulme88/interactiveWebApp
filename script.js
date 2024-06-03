// script.js
document.getElementById('spinning-square').addEventListener('click', function() {
  this.classList.add('spin');
  setTimeout(() => {
      this.classList.remove('spin');
  }, 2000);
});

document.getElementById('bouncing-circle').addEventListener('click', function() {
  this.classList.add('bounce');
  setTimeout(() => {
      this.classList.remove('bounce');
  }, 2000);
});
