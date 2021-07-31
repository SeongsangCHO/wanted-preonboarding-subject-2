export const setLocalStorageData = (itemName, data) => {
  localStorage.setItem(itemName, JSON.stringify(data));
};

export const getLocalStorageData = (dataName) => {
  const localData = localStorage.getItem(dataName);
  if (localData === null) {
    return [];
  }
  return JSON.parse(localData);
};
