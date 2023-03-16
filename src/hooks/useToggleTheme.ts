import { useState } from 'react';

type Theme = 'light' | 'dark';

export const getThemeFromLocalStorage = (): Theme =>
  localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

export const useToggleTheme = (initialTheme: Theme) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const toggleTheme = () =>
    theme === 'light'
      ? [setTheme('dark'), localStorage.setItem('theme', 'dark')]
      : [setTheme('light'), localStorage.setItem('theme', 'light')];

  return { theme, toggleTheme };
};
