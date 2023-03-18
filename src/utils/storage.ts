

export const  getStorageValue = (key: string) => {
    // getting stored value
    const saved = localStorage.getItem(key);
    if(saved){
        const initial = JSON.parse(saved);
        return initial;
    }
    return null;
}

export const setStorageValue = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}
