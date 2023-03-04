function changeburgerMenu() {
  const menu = document.querySelector('#menu');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    setTimeout(() => menu.classList.toggle('opacity-0'), 0);
  });
}
changeburgerMenu();

// dark mode
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function changeMode() {
  const modeBtn = document.querySelector('#mode');

  modeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');
    document.querySelector('html').classList.contains('dark')
      ? (localStorage.theme = 'dark')
      : (localStorage.theme = 'light');
  });
}

changeMode();
