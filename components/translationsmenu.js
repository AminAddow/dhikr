import { useState } from "react";

export default function translationMenu(props) {
  return (
    <>
      <div className="block">
        <h1 className="subpixel-antialiased text-3xl font-bold">
          Translations
        </h1>
      </div>
      <form className="block pl-4">
        <label className="block items-center text-2xl h-10">
          <input
            type="checkbox"
            className="h-8 w-8 mr-4 btn-check"
            name="english"
            onChange={(event) => props.onChange(event)}
            checked={props.selectedTranslations.showEnglish || ""}
          />
          English
        </label>
        <label className="block items-center text-2xl h-10">
          <input
            type="checkbox"
            className="h-8 w-8 mr-4 btn-check"
            name="french"
            onChange={(event) => props.onChange(event)}
            checked={props.selectedTranslations.showFrench || ""}
          />
          Français
        </label>
        <label className="block items-center text-2xl h-10">
          <input
            type="checkbox"
            className="h-8 w-8 mr-4 btn-check"
            name="norwegian"
            onChange={(event) => props.onChange(event)}
            checked={props.selectedTranslations.showNorwegian || ""}
          />
          Norsk
        </label>
      </form>
    </>
  );
}
