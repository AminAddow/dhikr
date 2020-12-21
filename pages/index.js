import { useState } from "react";
import Adhkar from "../components/adhkar";
import Landing from "../components/landing";
import Burger from "../components/svgs/burger";
import Close from "../components/svgs/close";
import Airtable from "airtable";
import Head from "next/head";

function IndexPage({ adhkar }) {
  // Menu opener state
  const [toggle, setToggle] = useState(true);

  // Translation states
  const [english, setEnglish] = useState(false);
  const [french, setFrench] = useState(false);
  const [norsk, setNorsk] = useState(false);

  const check = (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  // Styling of selected button
  // <div className="inline-block align-middle shadow-md bg-white h-full rounded-md w-8">
  //   <button
  //     type="button"
  //     className="bg-black
  //    rounded-md m-1.5"
  //   >
  //     {check}
  //   </button>
  // </div>;

  // TODO:
  // [x] Set check inside filled box.
  // [x] Change box for unselected languages
  // [x] Create logic for selection/unselection with state

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

  const drawer = (
    <div className="absolute inset-y-0 right-0 grid grid-cols-5 grid-rows-24 gap-6 px-4 bg-white w-5/6 md:w-3/6 lg:w-2/6 xl:w-1/6">
      <nav className="col-span-1 col-end-7 row-span-2 row-start-1">
        <button
          className="float-right pt-4"
          onClick={() => {
            setToggle(false);
          }}
        >
          <Close />
        </button>
      </nav>
      <div className="row-start-4 row-span-1 h-8">
        <h1 className="subpixel-antialiased text-4xl font-bold">Translation</h1>
      </div>
      {/* English selected style */}
      <div className="row-start-6 row-span-1 col-span-6 h-8">
        <form className="grid grid-rows-3 gap-2 align-middle">
          <label className="row-span-1 inline-flex items-center text-2xl h-10">
            <input
              type="checkbox"
              className="h-8 w-8 mr-4"
              name="english"
              onChange={(event) => handleClick(event)}
            />
            English
          </label>
          <label className="row-span-1 inline-flex items-center text-2xl h-10">
            <input
              type="checkbox"
              className="h-8 w-8 mr-4"
              name="french"
              onChange={(event) => handleClick(event)}
            />
            Français
          </label>
          <label className="row-span-1 inline-flex items-center text-2xl h-10">
            <input
              type="checkbox"
              className="h-8 w-8 mr-4"
              name="norsk"
              onChange={(event) => handleClick(event)}
            />
            Norsk
          </label>
        </form>
      </div>
    </div>
  );

  return (
    // full app
    <div className="container font-playfair">
      <div className="grid grid-cols-6 grid-rows-24 gap-4 px-2 h-screen w-screen bg-green-500">
        {/* Navigation drawer */}
        {toggle ? drawer : ""}
        <nav className="col-span-1 col-end-7 row-span-2 row-start-1">
          <button
            className="float-right pt-4"
            onClick={() => {
              setToggle(true);
            }}
          >
            <Burger />
          </button>
        </nav>

        {/* landing screen */}
        {/* card components */}
        <div className="">
          {adhkar.map((dhikr) => (
            <ul>
              <Adhkar data={dhikr} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_KEY,
  });

  const records = await airtable
    .base("appijFDoXEaa1S4tF")("Data")
    .select({
      fields: [
        "key_id",
        "dhikr_id",
        "arabic_text",
        "read_amount_int",
        "time_of_day",
        "source",
        "translation_eng",
      ],
      sort: [{ field: "key_id", direction: "asc" }],
      maxRecords: 5,
    })
    .all();

  const adhkar = records.map((product) => {
    return {
      key_id: product.get("key_id"),
      dhikr_id: product.get("dhikr_id"),
      time_of_day: product.get("time_of_day"),
      arabic_text: product.get("arabic_text"),
      read_amount_int: product.get("read_amount_int"),
      source: product.get("source"),
    };
  });

  return {
    props: {
      adhkar,
    },
  };
}

export default IndexPage;
