import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
    const [darkModeIsOn, setDarkModeIsOn] = useLocalStorage('darkMode', false);
    return [ darkModeIsOn, setDarkModeIsOn ];
}