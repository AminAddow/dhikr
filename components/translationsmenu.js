import { useState } from "react";

export default function translationMenu(props) {
  var selectedEnglish = props.selectedTranslations.showEnglish;
  var selectedFrench = props.selectedTranslations.showFrench;
  var selectedNorwegian = props.selectedTranslations.showNorwegian;

  return (
    <>
      <div className="px-4 block mb-8">
        <h1 className="subpixel-antialiased text-4xl font-bold">
          Translations
        </h1>
      </div>
      <form className="px-4 flex flex-col space-y-4">
        <div
          className={
            "flex h-12 rounded-md" +
            (selectedEnglish ? " bg-green-10 font-bold" : "")
          }
        >
          <label className="flex items-center text-3xl h-full w-full">
            <div className="flex items-center justify-center mr-4 w-12 h-full">
              <input
                type="checkbox"
                className="btn-check text-2xl"
                name="english"
                onChange={(event) => props.onChange(event)}
                checked={selectedEnglish || ""}
              />
            </div>
            English
          </label>
        </div>
        <div
          className={
            "flex h-12 rounded-md" +
            (selectedFrench ? " bg-green-10 font-bold" : "")
          }
        >
          <label className="flex items-center text-3xl h-full w-full">
            <div className="flex items-center justify-center mr-4 w-12 h-full">
              <input
                type="checkbox"
                className="btn-check text-2xl"
                name="french"
                onChange={(event) => props.onChange(event)}
                checked={selectedFrench || ""}
              />
            </div>
            Français
          </label>
        </div>
        <div
          className={
            "flex h-12 rounded-md" +
            (selectedNorwegian ? " bg-green-10 font-bold" : "")
          }
        >
          <label className="flex items-center text-3xl h-full w-full">
            <div className="flex items-center justify-center mr-4 w-12 h-full">
              <input
                type="checkbox"
                className="btn-check text-2xl"
                name="norwegian"
                onChange={(event) => props.onChange(event)}
                checked={selectedNorwegian || ""}
              />
            </div>
            Norsk
          </label>
        </div>
      </form>
    </>
  );
}
