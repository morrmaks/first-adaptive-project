// сначала поставить ту, которая в сторадж
//   если значение есть тогда ее
//   иначе
//     если у пользователя темная
//       тогда применить стили для темной


// забираю значение темы
const page = document.querySelector('.page')
const savedTheme = localStorage.getItem('theme')
const userTheme = window.matchMedia('(prefers-color-scheme: dark)')

// проверяю заполнено ли оно
if (savedTheme) {
  // если заполнено тогда это
  if (savedTheme === 'dark') {
    // если заполнена темная тема тогда так, если светлая, тогда ничего не меняем
    page.classList.add('page_theme_dark');
  }
} else {
  // если пустое, тогда это
  // совпадает ли значение темы у юзера с темной
  if (userTheme.matches) {
    // если тема у юзера темная
    page.classList.add('page_theme_dark')
  }
}

const userDeviceMobile = window.matchMedia('(max-width: 490px)')
const button = document.querySelector('.button-theme')
const buttonSwitch = document.querySelector('.button-theme__switch')

// присваиваем константе значение темы
const themeDark = page.classList.contains('page_theme_dark')

// начальная позиция кнопки в зависимости от темы
if (themeDark) {
  buttonSwitch.style.transform = 'translateX(0)'
} else {
  if (userDeviceMobile.matches) {
    buttonSwitch.style.transform = 'translateX(-26px)'
  } else {
    buttonSwitch.style.transform = 'translateX(-32px)'
  }
}

// нажатие на кнопку переключения темы
button.onclick = () => {

  const themeDark = page.classList.contains('page_theme_dark')
  // проверка истины темной темы
  if (themeDark) {
    // если тема темная
    page.classList.remove('page_theme_dark');
    localStorage.setItem('theme', 'light');

    // если мобильный пользователь
    if (userDeviceMobile.matches) {
      buttonSwitch.style.transform = 'translateX(-26px)'

      // если пк пользователь
    } else {
      // мув кнопки через элемент в ней
      buttonSwitch.style.transform = 'translateX(-32px)'

      // мув кнопки через псевдоэлемент в ней
      // const styleSheet = document.styleSheets[0];
      // styleSheet.insertRule('.button-theme::before { transform: translateX(-32px); }', styleSheet.cssRules.length);
    }

    // если тема светлая
  } else {
    page.classList.add('page_theme_dark');
    localStorage.setItem('theme', 'dark');

    // мув кнопки через элемент в ней
    buttonSwitch.style.transform = 'translateX(0)'

    // мув кнопки через ее псевдоэлемент
    // const styleSheet = document.styleSheets[0];
    // styleSheet.insertRule('.button-theme::before { transform: translateX(0); }', styleSheet.cssRules.length);
  }
}

// поменял ли пользователь тему на девайсе
userTheme.addEventListener('change', () => {
  // если сделал темную
  if (userTheme.matches) {
    page.classList.add('page_theme_dark')
    localStorage.setItem('theme', 'dark')
    buttonSwitch.style.transform = 'translateX(0)'
  // если сделал светлую
  } else {
    page.classList.remove('page_theme_dark')
    localStorage.setItem('theme', 'light')

    // если мобильный пользователь
    if (userDeviceMobile.matches) {
      buttonSwitch.style.transform = 'translateX(-26px)'

      // если пк пользователь
    } else {
      buttonSwitch.style.transform = 'translateX(-32px)'
    }
  }
})

window.onclick = () => {
  alert('Куда тычешь, быдлон?')
}
