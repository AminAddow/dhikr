import { useContext } from "react";
import { ThemeContext } from "../components/themecontext";

export default function card(props) {
  const selected = props.selectedTranslations;
  const adhkar = props.content;
  const { theme, setTheme } = useContext(ThemeContext);

  const English = (props) => {
    return (
      <div className="px-4">
        <hr
          className={
            `my-4 w-1/3 mx-auto ` + (theme === "dark" ? "bg-white" : "bg-black")
          }
        />
        <h1 className="text-lg font-semibold">English</h1>
        <p className="">{props.content}</p>
      </div>
    );
  };

  const French = (props) => {
    return (
      <div className="px-4">
        <hr
          className={
            `my-4 w-1/3 mx-auto` +
            (theme === "dark" ? "text-white" : "text-black")
          }
        />
        <h1 className="text-lg font-semibold">Français</h1>
        <p className="">{props.content}</p>
      </div>
    );
  };

  const Norwegian = (props) => {
    return (
      <div className="px-4">
        <hr
          className={
            `my-4 w-1/3 mx-auto` +
            (theme === "dark" ? "text-white" : "text-black")
          }
        />
        <h1 className="text-lg font-semibold">Norsk</h1>
        <p className="">{props.content}</p>
      </div>
    );
  };

  return (
    <div className="mx-auto px-2 mt-24 space-y-24 md:w-3/4 lg:w-1/2">
      {adhkar.map((dhikr) => (
        <div
          className={`grid grid-rows-max grid-cols-max shadow-lg gap-6 py-2 bg-${theme}-secondary rounded-xl`}
          key={dhikr.key_id}
        >
          <div className="row-start-1 col-span-full">
            <p className="ml-4 mt-1 text-sm font-semibold">
              Read<span> {dhikr.read_amount_int} </span>
              {dhikr.read_amount_int > 1 ? "times" : "time"}
            </p>
          </div>
          <div className="row-start-2 px-4">
            <p className="text-4xl rtl font-arabic">{dhikr.arabic_text}</p>
          </div>
          {selected.showEnglish ? (
            <English content={dhikr.translation_eng} />
          ) : (
            ""
          )}
          {selected.showFrench ? <French content={dhikr.translation_fr} /> : ""}
          {selected.showNorwegian ? (
            <Norwegian content={dhikr.translation_nor} />
          ) : (
            ""
          )}
          <div className="col-span-full">
            <p className="ml-4 mt-1 text-sm">{dhikr.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
