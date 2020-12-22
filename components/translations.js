import { useState } from "react";

export default function translations() {
  // Translation states
  const [english, setEnglish] = useState(false);
  const [french, setFrench] = useState(false);
  const [norsk, setNorsk] = useState(false);

  const handleClick = (event) => {
    let lang = event.target.name;
    let state = event.target.checked;

    console.log(lang, state);

    switch (lang) {
      case "english":
        setEnglish(!state);
        console.log("Selected", event.target.name, "is set to", { english });
        break;
      case "french":
        setFrench(!state);
        console.log("Selected", event.target.name, "is set to", { french });
        break;
      case "norsk":
        setNorsk(!state);
        console.log("Selected", event.target.name, "is set to", { norsk });
        break;
    }
  };

  return (
    <>
      <div className="row-start-4 row-span-1 h-8">
        <h1 className="subpixel-antialiased text-4xl font-bold">Translation</h1>
      </div>
      <div className="row-start-6 row-span-1 col-span-6 h-8">
        <form className="grid grid-rows-3 gap-2 align-middle">
          <label className="row-span-1 inline-flex items-center text-2xl h-10">
            <input
              type="checkbox"
              className="h-8 w-8 mr-4 btn-check"
              name="english"
              onChange={(event) => handleClick(event)}
            />
            English
          </label>
          <label className="row-span-1 inline-flex items-center text-2xl h-10">
            <input
              type="checkbox"
              className="h-8 w-8 mr-4 btn-check"
              name="french"
              onChange={(event) => handleClick(event)}
            />
            Français
          </label>
          <label className="row-span-1 inline-flex items-center text-2xl h-10">
            <input
              type="checkbox"
              className="h-8 w-8 mr-4 btn-check"
              name="norsk"
              onChange={(event) => handleClick(event)}
            />
            Norsk
          </label>
        </form>
      </div>
    </>
  );
}
