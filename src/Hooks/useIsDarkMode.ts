import { THEME_LOCAL_STORAGE_KEY } from "../components/DarkModeSwitch/DarkModeSwitch";

// FIXME: may be better to use a context for this. Currently components that
// don't rerender won't update when the theme changes
const useIsDarkMode = () => {
  return (
    localStorage[THEME_LOCAL_STORAGE_KEY] === "dark" ||
    (!(THEME_LOCAL_STORAGE_KEY in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

export default useIsDarkMode;
