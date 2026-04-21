document.querySelector('.burger')?.addEventListener('click', function() {
  var nav = document.querySelector('.nav');
  nav.classList.toggle('nav--open');
});

document.querySelectorAll('.nav a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.querySelector('.nav')?.classList.remove('nav--open');
  });
});

document.querySelectorAll('.faq-q').forEach(function(q) {
  q.addEventListener('click', function() {
    var item = q.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});
