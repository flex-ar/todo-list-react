import type { ThemeType } from './themes';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
