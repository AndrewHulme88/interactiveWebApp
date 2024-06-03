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

document.getElementById('rotating-triangle').addEventListener('click', function() {
  this.classList.add('rotate');
  setTimeout(() => {
      this.classList.remove('rotate');
  }, 2000);
});

document.getElementById('moving-rectangle').addEventListener('click', function() {
  this.classList.add('move');
  setTimeout(() => {
      this.classList.remove('move');
  }, 2000);
});
