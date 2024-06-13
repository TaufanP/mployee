import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

const localStorage = new MMKV();

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return localStorage.set(name, value);
  },
  getItem: name => {
    const value = localStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return localStorage.delete(name);
  },
};

export const storageKeys = {
  userAuth: 'userAuth',
};

export function getStorageObj(key: string) {
  const value = localStorage.getString(key);
  return typeof value === 'string' ? JSON.parse(value) : '';
}

export default localStorage;
