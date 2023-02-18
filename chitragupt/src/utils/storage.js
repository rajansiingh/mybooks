const getItem = (itemName) => {
    return localStorage.getItem(itemName);
}
const setItem = (itemName, data) => {
    return localStorage.getItem(itemName, data);
}

export {
    getItem,
    setItem
}