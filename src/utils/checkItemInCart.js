export const checkItemInCart = (array, id) => {
  return !!array.find((item) => item.id === id);
};
