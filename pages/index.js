import { useState } from "react";
import Head from "next/head";
import Airtable from "airtable";
import Landing from "../components/landing";
import Card from "../components/card";
import Burger from "../components/svgs/burger";
import Close from "../components/svgs/close";
import TranslationsMenu from "../components/translationsmenu";

function IndexPage({ adhkar }) {
  // Menu opener state
  const [toggle, setToggle] = useState(true);

  // Translation states
  const [english, setEnglish] = useState(false);
  const [french, setFrench] = useState(false);
  const [norwegian, setNorwegian] = useState(false);

  // State object for easy handling to childComp
  var states = {
    showEnglish: english,
    showFrench: french,
    showNorwegian: norwegian,
  };

  // Translation selection handler
  const handleTranslationChange = (event) => {
    let lang = event.target.name;
    let state = event.target.checked;

    switch (lang) {
      case "english":
        setEnglish(state);
        // console.log("Selected", event.target.name, "is set to", { english });
        break;
      case "french":
        setFrench(state);
        // console.log("Selected", event.target.name, "is set to", { french });
        break;
      case "norwegian":
        setNorwegian(state);
        // console.log("Selected", event.target.name, "is set to", { norwegian });
        break;
    }
  };

  // const check = (
  //   <svg
  //     className="w-5 h-5"
  //     fill="none"
  //     stroke="#fff"
  //     viewBox="0 0 24 24"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth={2}
  //       d="M5 13l4 4L19 7"
  //     />
  //   </svg>
  // );

  const drawer = (
    <div
      className={
        "fixed inset-y-0 right-0 flow space-y-6 bg-white w-5/6 md:w-3/6 lg:w-2/6 transform ease-in-out transition-all duration-300" +
        (toggle ? " translate-x-0" : " translate-x-full")
      }
    >
      <nav className="flow-root">
        <button
          className="float-right pt-4"
          onClick={() => {
            setToggle(false);
          }}
        >
          <Close />
        </button>
      </nav>
      <div className="space-y-2">
        <TranslationsMenu
          selectedTranslations={states}
          onChange={(event) => handleTranslationChange(event)}
        />
      </div>
    </div>
  );

  return (
    // full app
    // Add overflow-x-hidden below
    <div className="mx-auto w-full">
      <Head>
        <title>Adhkar - Dhikr.life</title>

        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Dhikr.life, Adhkar morning and evening, Dhikr, Supplications in islam, Sunnah adhkar, Adhkar Salafi"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      {/* Navigation drawer */}
      <nav className="flow-root">
        <button
          className="pt-4 float-right"
          onClick={() => {
            setToggle(true);
          }}
        >
          <Burger />
        </button>
      </nav>
      {drawer}
      {/* landing screen */}
      {/* Card components */}
      <Card selectedTranslations={states} content={adhkar} />
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
        "time_of_day",
        "arabic_text",
        "read_amount_int",
        "source",
        "transliteration",
        "transliteration_source",
        "translation_eng",
        "translation_eng_source",
        "translation_nor",
        "translation_nor_source",
        "translation_fr",
        "translation_fr_source",
      ],
      sort: [{ field: "key_id", direction: "asc" }],
      maxRecords: 5,
    })
    .all();

  const adhkar = records.map((api) => {
    return {
      key_id: api.get("key_id"),
      dhikr_id: api.get("dhikr_id"),
      time_of_day: api.get("time_of_day"),
      arabic_text: api.get("arabic_text"),
      read_amount_int: api.get("read_amount_int"),
      source: api.get("source"),
      transliteration: api.get("transliteration"),
      transliteration_source: api.get("transliteration_source"),
      translation_eng: api.get("translation_eng"),
      translation_eng_source: api.get("translation_eng_source"),
      translation_nor: api.get("translation_nor"),
      translation_nor_source: api.get("translation_nor_source"),
      translation_fr: api.get("translation_fr"),
      translation_fr_source: api.get("translation_fr_source"),
    };
  });

  return {
    props: {
      adhkar,
    },
  };
}

export default IndexPage;
