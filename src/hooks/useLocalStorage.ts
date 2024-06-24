import {useEffect, useState} from "react";

export function useLocalStorage<T>(key: string, defaultValue: T | (() => T)){
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)();
    }
    return defaultValue
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}