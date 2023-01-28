export const showElement = (condition: boolean, type: string = 'block') => {
  return { display: condition ? type : "none" };
};
