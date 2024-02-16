import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initValue) => {
    const [darkModeIsOn, setDarkModeIsOn] = useLocalStorage(key, initValue);
    return [ darkModeIsOn, setDarkModeIsOn ];
}