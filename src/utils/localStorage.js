export const connectToLocalStorage = (key, data) => {
  let haveData;
  // Perform localStorage action
  data && localStorage.setItem(key, JSON.stringify(data));
  haveData = localStorage.getItem(key);
  return haveData ? JSON.parse(localStorage.getItem(key)) : [];
};
