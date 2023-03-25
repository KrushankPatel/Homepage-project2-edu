const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.createElement('i');
closeIcon.classList.add('fa-solid', 'fa-times');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
  if (menu.classList.contains('show')) {
    menuIcon.style.display = 'none';
    menu.appendChild(closeIcon);
  } else {
    menuIcon.style.display = 'block';
    menu.removeChild(closeIcon);
  }
});

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.remove('show');
    menuIcon.style.display = 'block';
    menu.removeChild(closeIcon);
  }
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('show');
  menuIcon.style.display = 'block';
  menu.removeChild(closeIcon);
});
