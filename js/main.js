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

