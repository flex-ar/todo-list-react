import { KeyboardEvent, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { FiltersMobile } from './components/FiltersMobile';
import { Todos } from './components/Todos';
import { getThemeFromLocalStorage, useToggleTheme } from './hooks';
import { reducer } from './reducer';
import {
  BgImage,
  Container,
  GlobalStyle,
  Header,
  Heading,
  InputTodo,
  ThemeToggleIcon,
  InputContainer,
  Circle,
  FiltersContainerMobile,
} from './styled-components';
import themes from './themes';
import { initialState, TYPE_ACTION } from './utilities';

function App() {
  const [todoList, dispatch] = useReducer(reducer, initialState());
  const { theme, toggleTheme } = useToggleTheme(getThemeFromLocalStorage());

  const handleAddTodo = ({ key, target }: KeyboardEvent) => {
    if (key === 'Enter') {
      const { value } = target as HTMLInputElement;

      if (value.trim().length > 3) {
        dispatch({
          type: TYPE_ACTION.ADD_TODO,
          payload: {
            id: new Date().getTime(),
            textContent: value,
            completed: false,
            isHidden: false,
          },
        });
        (target as HTMLInputElement).value = '';
      }
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <BgImage />
      <Container>
        <Header>
          <Heading>TODO</Heading>
          <ThemeToggleIcon onClick={() => toggleTheme()} />
        </Header>
        <InputContainer>
          <Circle noBorder />
          <InputTodo
            placeholder="Create a new todo..."
            onKeyUp={handleAddTodo}
          />
        </InputContainer>
        <Todos dispatch={dispatch} todoList={todoList} />
        <FiltersMobile />
      </Container>
    </ThemeProvider>
  );
}

export default App;
