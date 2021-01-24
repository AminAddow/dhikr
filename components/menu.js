import { useContext } from "react";
import { ThemeContext } from "../components/themecontext";
import TranslationsMenu from "../components/translationsmenu";
import Close from "../components/svgs/close";

export default function menu(props) {
  const toggle = props.state;
  const states = props.translationStates;
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        "z-50 fixed inset-y-0 right-0 flow space-y-6 w-5/6 md:w-3/6 lg:w-2/6 transform ease-in-out transition-all duration-300" +
        (toggle ? " translate-x-0 " : " translate-x-full ") +
        (theme === "dark" ? "bg-dark-secondary" : "bg-white")
      }
    >
      <nav className="flow-root">
        <button
          className="float-right pt-2 pr-2"
          onClick={() => {
            props.onClick();
          }}
        >
          <Close />
        </button>
      </nav>
      <TranslationsMenu
        selectedTranslations={states}
        onChange={(event) => props.onChange(event)}
      />
    </div>
  );
}
