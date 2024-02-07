

function openPage() {
window.location.href = "homepage.html";
  
}

function showRegisterForm() {
  document.getElementById("register-form").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const offsetTop = target.offsetTop;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});
