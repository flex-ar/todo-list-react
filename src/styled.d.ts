import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgBody: string;
      bgTodo: string;
      border: string;
      smallText: string;
      text: string;
      textChecked: string;
      c7: string;
    };
    bgImg: string;
    icon: string;
    shadow: string;
  }
}
