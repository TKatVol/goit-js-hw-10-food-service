import menuCardsTpl from './templates/menu.hbs';
import cards from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('#theme-switch-toggle');
const page = document.querySelector('body');

menuContainer.insertAdjacentHTML('beforeend', menuCardsTpl(cards));



//************ THEME - LocalStorage

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeOnPage();
themeSwitch.addEventListener('change', themeOnSwitch);

function themeOnPage() {
    const currentTheme = localStorage.getItem('Theme');

    if (currentTheme === null || currentTheme === 'LIGHT') {
        lightTheme();
    } else {
        themeSwitch.checked = true;
        darkTheme();
    }
}

function themeOnSwitch(evt) {
    if (themeSwitch.checked) {
        darkTheme();
    } else {
        lightTheme();
    }
}

function darkTheme() {
    localStorage.setItem('Theme', 'DARK');
    page.classList.remove(Theme.LIGHT);
    page.classList.add(Theme.DARK);
}

function lightTheme() {
    localStorage.setItem('Theme', 'LIGHT');
    page.classList.remove(Theme.DARK);
    page.classList.add(Theme.LIGHT);
}