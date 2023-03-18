import bgDesktopLight from './assets/images/bg-desktop-light.jpg';
import bgDesktopDark from './assets/images/bg-desktop-dark.jpg';
import bgMobileLight from './assets/images/bg-mobile-light.jpg';
import bgMobileDark from './assets/images/bg-mobile-dark.jpg';
import btnMoon from './assets/icons/icon-moon.svg';
import btnSun from './assets/icons/icon-sun.svg';

export type ThemeType = typeof light;
export type Theme = 'light' | 'dark';

const light = {
  colors: {
    bgBody: 'hsl(236, 33%, 92%)',
    bgTodo: 'hsl(0, 0%, 98%)',
    border: 'hsl(233, 11%, 84%)',
    smallText: 'hsl(236, 9%, 61%)',
    text: 'hsl(235, 19%, 35%)',
    textChecked: 'hsl(236, 9%, 61%)',
    c7: '#111',
  },
  img: {
    bgDesktop: bgDesktopLight,
    bgMobile: bgMobileLight,
  },
  icon: btnMoon,
  shadow: '0 5px 40px -5px rgba(0, 0, 0, 10%)',
};

const dark: ThemeType = {
  colors: {
    bgBody: 'hsl(235, 21%, 11%)',
    bgTodo: 'hsl(235, 24%, 19%)',
    border: 'hsl(237, 14%, 26%)',
    smallText: 'hsl(234, 11%, 52%)',
    text: 'hsl(234, 39%, 85%)',
    textChecked: 'hsl(233, 14%, 35%)',
    c7: 'hsl(236, 33%, 92%)',
  },
  img: {
    bgDesktop: bgDesktopDark,
    bgMobile: bgMobileDark,
  },
  icon: btnSun,
  shadow: '0 10px 50px 10px rgba(0, 0, 0, 30%)',
};

const themes = { light, dark };

export default themes;
