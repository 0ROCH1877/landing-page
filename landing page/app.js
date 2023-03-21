$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('active');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
  }
});

