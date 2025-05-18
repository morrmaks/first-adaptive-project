const page = document.querySelector('.page')
const savedTheme = localStorage.getItem('theme')
const userTheme = window.matchMedia('(prefers-color-scheme: dark)')

if (savedTheme) {
  if (savedTheme === 'dark') {
    page.classList.add('page_theme_dark');
  }
} else {
  if (userTheme.matches) {
    page.classList.add('page_theme_dark')
  }
}

const userDeviceMobile = window.matchMedia('(max-width: 490px)')
const button = document.querySelector('.button-theme')
const buttonSwitch = document.querySelector('.button-theme__switch')

const themeDark = page.classList.contains('page_theme_dark')

if (themeDark) {
  buttonSwitch.style.transform = 'translateX(0)'
} else {
  if (userDeviceMobile.matches) {
    buttonSwitch.style.transform = 'translateX(-26px)'
  } else {
    buttonSwitch.style.transform = 'translateX(-32px)'
  }
}

button.onclick = () => {
  const themeDark = page.classList.contains('page_theme_dark')
  if (themeDark) {
    page.classList.remove('page_theme_dark');
    localStorage.setItem('theme', 'light');
    if (userDeviceMobile.matches) {
      buttonSwitch.style.transform = 'translateX(-26px)'
    } else {
      buttonSwitch.style.transform = 'translateX(-32px)'
    }
  } else {
    page.classList.add('page_theme_dark');
    localStorage.setItem('theme', 'dark');
    buttonSwitch.style.transform = 'translateX(0)'
  }
}

userTheme.addEventListener('change', () => {

  page.classList.toggle('page_theme_dark', userTheme.matches);
  localStorage.setItem('theme', userTheme.matches ? 'dark' : 'light' )
  buttonSwitch.style.transform = userTheme.matches
    ? 'translateX(0)'
    : userDeviceMobile.matches
      ? 'translateX(-26px)'
      : 'translateX(-32px)';
})

userDeviceMobile.addEventListener('change', () => {
  buttonSwitch.style.transform = userTheme.matches
    ? 'translateX(0)'
    : userDeviceMobile.matches
      ? 'translateX(-26px)'
      : 'translate(-32px)';
})
