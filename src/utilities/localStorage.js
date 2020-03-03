import { LOCAL_STORAGE_TOKEN } from 'constants/storageConstants';

export const getLocalToken = () => localStorage[LOCAL_STORAGE_TOKEN];

export const updateLocalToken = (updatedObj) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(updatedObj));
}

export const removeLocalToken = () => localStorage.removeItem(LOCAL_STORAGE_TOKEN);;
