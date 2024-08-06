// ============nav collaps=====================

const toggleBtn = document.querySelector('.toggle_btn')
const toggleIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleIcon.classList = isOpen
    ? 'bi bi-x'
    : 'bi bi-list'
}

// ============infinite scroll=====================

const scrollContainer = document.querySelector('.scroll-content');
const items = scrollContainer.children;
const itemsCount = items.length;

// Clone the items to create the seamless infinite effect
for (let i = 0; i < itemsCount; i++) {
    const clone = items[i].cloneNode(true);
    scrollContainer.appendChild(clone);
}

// ==============navbar addEventListener.==========
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
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
});
  


