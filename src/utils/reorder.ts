type reorderType = <T>(list: T[], startIndex: number, endIndex: number) => T[];
export const reorder: reorderType = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};
