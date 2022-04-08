export const addItem = (initialItems, ItemToAdd) => {
  const exist = initialItems.find(
    (initialItem) => initialItem.id === ItemToAdd.id
  );
  if (exist) {
    return initialItems.map((initialItem) =>
      initialItem.id === ItemToAdd.id
        ? { ...initialItem, quantity: initialItem.quantity + 1 }
        : initialItem
    );
  }
  return [...initialItems, { ...ItemToAdd, quantity: 1 }];
};

export const deleteItem = (initialItems, ItemToDelete) => {
  const exist = initialItems.find(
    (initialItem) => initialItem.id === ItemToDelete.id
  );
  if (exist.quantity === 1) {
    return initialItems.filter(
      (initialItem) => initialItem.id != ItemToDelete.id
    );
  }
  return initialItems.map((initialItem) =>
    initialItem.id === ItemToDelete.id
      ? { ...initialItem, quantity: initialItem.quantity - 1 }
      : initialItem
  );
};
