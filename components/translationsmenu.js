import { useState, useContext } from 'react';
import { ThemeContext } from '../components/themecontext';

export default function translationMenu(props) {
  var selectedEnglish = props.selectedTranslations.showEnglish;
  var selectedFrench = props.selectedTranslations.showFrench;
  var selectedNorwegian = props.selectedTranslations.showNorwegian;

  const { theme, setTheme } = useContext(ThemeContext);

  function confirmThemeColor(selection) {
    try {
      localStorage.setItem('theme', selection);
      setTheme(selection);
      console.warn(selection, 'set by selection in drawer');
    } catch (error) {
      console.error(selection);
    }
  }

  return (
    <>
      <div>
        <div className="px-4 block mb-8">
          <h1 className="subpixel-antialiased text-4xl font-bold">
            Translations
          </h1>
        </div>
        <form className="px-4 flex flex-col space-y-4 pb-16">
          <div
            className={
              'flex h-12 rounded-md' +
              (selectedEnglish ? ' bg-' + theme + '-primary font-bold' : '')
            }
          >
            <label className="flex items-center text-3xl h-full w-full select-none	">
              <div className="flex items-center justify-center mr-4 w-12 h-full">
                <input
                  type="checkbox"
                  className="form-checkbox appearance-none border-solid border-2 border-dark-primary rounded-md text-gray-1000 checked:border-transparent text-3xl text-black"
                  name="english"
                  onChange={(event) => props.onChange(event)}
                  checked={selectedEnglish || ''}
                />
              </div>
              English
            </label>
          </div>
          {/* <div
            className={
              "flex h-12 rounded-md" +
              (selectedFrench ? " bg-" + theme + "-primary font-bold" : "")
            }
          >
            <label className="flex items-center text-3xl h-full w-full select-none	">
              <div className="flex items-center justify-center mr-4 w-12 h-full">
                <input
                  type="checkbox"
                  className="form-checkbox appearance-none border-solid border-2 border-dark-primary rounded-md text-gray-1000 checked:border-transparent text-3xl text-black"
                  name="french"
                  onChange={(event) => props.onChange(event)}
                  checked={selectedFrench || ""}
                />
              </div>
              Français
            </label>
          </div> */}
          {/* <div
            className={
              "flex h-12 rounded-md" +
              (selectedNorwegian ? " bg-" + theme + "-primary font-bold" : "")
            }
          >
            <label className="flex items-center text-3xl h-full w-full select-none	">
              <div className="flex items-center justify-center mr-4 w-12 h-full">
                <input
                  type="checkbox"
                  className="form-checkbox appearance-none border-solid border-2 border-dark-primary rounded-md text-gray-1000 checked:border-transparent text-3xl text-black"
                  name="norwegian"
                  onChange={(event) => props.onChange(event)}
                  checked={selectedNorwegian || ""}
                />
              </div>
              Norsk
            </label>
          </div> */}
        </form>
      </div>
      <div>
        <div className="px-4 block mb-8">
          <h1 className="subpixel-antialiased text-4xl font-bold">Theme</h1>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Light green theme"
            name={'lightgreen'}
            onClick={() => {
              confirmThemeColor('lightgreen');
            }}
            className="inline-block rounded-full h-12 w-12 bg-gradient-to-br from-lightgreen-primary to-lightgreen-secondary"
          />
          <button
            aria-label="Dark green theme"
            name={'sky'}
            onClick={() => {
              confirmThemeColor('sky');
            }}
            className="inline-block rounded-full h-12 w-12 bg-gradient-to-br from-sky-primary to-sky-secondary"
          />
          <button
            aria-label="Pink theme"
            name={'pop'}
            onClick={() => {
              confirmThemeColor('pop');
            }}
            className="inline-block rounded-full h-12 w-12 bg-gradient-to-br from-pop-primary to-pop-secondary"
          />
          <button
            aria-label="Dark theme"
            name={'dark'}
            onClick={() => {
              confirmThemeColor('dark');
            }}
            className="inline-block rounded-full h-12 w-12 bg-gradient-to-br from-dark-primary to-dark-secondary"
          />
        </div>
      </div>
    </>
  );
}
