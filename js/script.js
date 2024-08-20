

// ============infinite scroll=====================

const scrollContainer = document.querySelector('.scroll-content');
const items = scrollContainer.children;
const itemsCount = items.length;

// Clone the items to create the seamless infinite effect
for (let i = 0; i < itemsCount; i++) {
    const clone = items[i].cloneNode(true);
    scrollContainer.appendChild(clone);
}

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navbarNav');
    const logo = document.getElementById('logo');
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', function() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        navbar.classList.add('visible');
      } else {
        navbar.classList.remove('visible');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
  
    mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
      mobileMenu.querySelector('.navbar-toggler-icon').classList.toggle('active');
      logo.classList.toggle('hidden');
    });
});
  

  