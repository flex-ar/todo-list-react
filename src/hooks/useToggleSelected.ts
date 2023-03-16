import { MouseEvent, useState } from 'react';

const objectBooleanToToples = (
  <T>(_list: [string, T][] = []) =>
  (obj: { [key: string]: T }) => {
    for (const key in obj) {
      _list = [..._list, [key, obj[key]]];
    }

    return [..._list];
  }
)<boolean>();

export const useToggleSelected = (initialState: { [key: string]: boolean }) => {
  const [isSelected, setIsSelected] = useState(initialState);
  const toggleSelected = (event: MouseEvent) => {
    const { textContent: target } = event.target as HTMLParagraphElement;

    setIsSelected(state =>
      objectBooleanToToples(state)
        .map(([key]): [string, boolean] =>
          key === target ? [key, true] : [key, false]
        )
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
    );
  };

  return { isSelected, toggleSelected };
};
