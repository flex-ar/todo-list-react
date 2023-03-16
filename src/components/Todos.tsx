import { Dispatch } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Action, Todo } from '../models';
import { TodosContainer } from '../styled-components';
import { reorder, TYPE_ACTION } from '../utilities';

import { Footer } from './Footer';
import { TodoItem } from './TodoItem';

interface TodosProps {
  todoList: Todo[];
  dispatch: Dispatch<Action>;
}

export const Todos = ({ todoList, dispatch }: TodosProps) => {
  return (
    <TodosContainer>
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (!destination) return;

          if (source.index === destination.index) return;

          if (source.index < destination.index) {
            dispatch({
              type: TYPE_ACTION.REORDER_TODOS,
              payload: todoList[destination.index].isHidden
                ? reorder(todoList, source.index, destination.index - 1)
                : reorder(todoList, source.index, destination.index),
            });
          }

          if (source.index > destination.index) {
            dispatch({
              type: TYPE_ACTION.REORDER_TODOS,
              payload: todoList[destination.index].isHidden
                ? reorder(todoList, source.index, destination.index + 1)
                : reorder(todoList, source.index, destination.index),
            });
          }
        }}
      >
        <Droppable droppableId="TODOLIST">
          {provider => {
            return (
              <div {...provider.droppableProps} ref={provider.innerRef}>
                {todoList.map((todo, index) => (
                  <Draggable
                    key={todo.id}
                    draggableId={todo.id.toString()}
                    index={index}
                  >
                    {({ draggableProps, innerRef, dragHandleProps }) => (
                      <div
                        {...draggableProps}
                        ref={innerRef}
                        {...dragHandleProps}
                      >
                        <TodoItem {...todo} dispatch={dispatch} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
      <Footer dispatch={dispatch} todoList={todoList} />
    </TodosContainer>
  );
};
