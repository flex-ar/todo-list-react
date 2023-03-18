import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

interface Element {
  id: string;
}

type ProviderDraggableType = <T extends Element>(
  Component: (props: T) => JSX.Element,
  props: T,
  provider: DraggableProvided
) => JSX.Element;
const ProviderDraggable: ProviderDraggableType = (
  Component,
  props,
  provider
) => {
  return (
    <div
      {...provider.draggableProps}
      ref={provider.innerRef}
      {...provider.dragHandleProps}
    >
      <Component {...props} />
    </div>
  );
};

type ToDraggableItemType = <T extends Element>(
  Component: (props: T) => JSX.Element,
  element: T,
  index: number
) => JSX.Element;
const ToDraggableItem: ToDraggableItemType = (Component, props, index) => (
  <Draggable key={props.id} draggableId={String(props.id)} index={index}>
    {provider => ProviderDraggable(Component, props, provider)}
  </Draggable>
);

type ProviderDroppableType = <T extends Element>(
  Component: (props: T) => JSX.Element,
  elements: T[],
  provider: DroppableProvided
) => JSX.Element;
const ProviderDroppable: ProviderDroppableType = (
  Component,
  elements,
  provider
) => {
  return (
    <div {...provider.droppableProps} ref={provider.innerRef}>
      {elements.map((element, index) =>
        ToDraggableItem(Component, element, index)
      )}
      {provider.placeholder}
    </div>
  );
};

interface Props<T extends Element> {
  id: string;
  Component: (props: T) => JSX.Element;
  list: T[];
  onDragEnd: (result: DropResult, provider: ResponderProvided) => void;
}

type DragAndDropType = <T extends Element>(props: Props<T>) => JSX.Element;

export const DragAndDrop: DragAndDropType = ({
  id,
  Component,
  list,
  onDragEnd,
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id}>
        {provider => ProviderDroppable(Component, list, provider)}
      </Droppable>
    </DragDropContext>
  );
};
