// сначала поставить ту, которая в сторадж
//   если значение есть тогда ее
//   иначе
//     если у пользователя темная
//       тогда применить стили для темной


// забираю значение темы
const page = document.querySelector('.page')
const savedTheme = localStorage.getItem('theme')
const userTheme = window.matchMedia('(prefers-color-scheme: dark)')

if (savedTheme === 'dark' || (!savedTheme && userTheme.matches)) {
  page.classList.add('page_theme_dark');
}

const userDeviceMobile = window.matchMedia('(max-width: 490px)')
const button = document.querySelector('.button-theme')
const buttonSwitch = document.querySelector('.button-theme__switch')

// присваиваем константе значение темы
const themeDark = page.classList.contains('page_theme_dark')

buttonSwitch.style.transform = themeDark ? 'translateX(0)' :
  (userDeviceMobile.matches ? 'translateX(-26px)' : 'translateX(-32px)');

button.onclick = () => {
  const themeDark = page.classList.toggle('page_theme_dark');
  localStorage.setItem('theme', themeDark ? 'dark' : 'light');

  buttonSwitch.style.transform = themeDark
    ? 'translateX(0)'
    : (userDeviceMobile.matches ? 'translateX(-26px)' : 'translateX(-32px)');

  // Если требуется перемещение через псевдоэлемент, можно раскомментировать этот блок
  // const styleSheet = document.styleSheets[0];
  // styleSheet.insertRule(
  //   `.button-theme::before { transform: ${themeDark ? 'translateX(0)' : (userDeviceMobile.matches ? 'translateX(-26px)' : 'translateX(-32px)')}; }`,
  //   styleSheet.cssRules.length
  // );
}

userTheme.addEventListener('change', () => {
  const themeDark = userTheme.matches;
  page.classList.toggle('page_theme_dark', themeDark);
  localStorage.setItem('theme', themeDark ? 'dark' : 'light');

  buttonSwitch.style.transform = themeDark
    ? 'translateX(0)'
    : (userDeviceMobile.matches ? 'translateX(-26px)' : 'translateX(-32px)');
});
