import { useState } from 'react';

import { Theme } from '../themes';

const getTheme = (): Theme =>
  localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

export const useToggleTheme = (initialTheme: Theme = getTheme()) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const toggleTheme = () =>
    theme === 'light'
      ? (setTheme('dark'), localStorage.setItem('theme', 'dark'))
      : (setTheme('light'), localStorage.setItem('theme', 'light'));

  return { theme, toggleTheme };
};
