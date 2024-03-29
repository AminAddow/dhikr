import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Airtable from 'airtable';
import Menu from '../components/menu';
// import ProgressBar from "../components/progressbar";
import Landing from '../components/landing';
import SelectTime from '../components/selecttime';
import Card from '../components/card';
import { ThemeContext } from '../components/themecontext';
import { NextSeo } from 'next-seo';

function IndexPage({ adhkar }) {
  // Menu opener state
  const [toggle, setToggle] = useState(false);

  // // Theme state
  const [theme, setTheme] = useState('lightgreen');

  var color = {
    primary: 'bg-' + theme + '-primary',
    secondary: 'bg-' + theme + '-secondary'
  };

  // Translation states
  const [english, setEnglish] = useState(false);
  const [french, setFrench] = useState(false);
  const [norwegian, setNorwegian] = useState(false);

  // Button state
  const [enabled, setEnabled] = useState(true);

  // State object for easy handling to childComp
  var states = {
    showEnglish: english,
    showFrench: french,
    showNorwegian: norwegian
  };

  //Theme changing logic
  (() => {
    try {
      var store = localStorage.getItem('theme');
      if (store !== null) {
        useEffect(() => {
          setTheme(store);
        });
      }
    } catch (error) {
      console.error(error);
    }
  })();

  // Translation selection handler
  const handleTranslationChange = (event) => {
    let lang = event.target.name;
    let state = event.target.checked;
    setTimeout(() => {
      setToggle(false);
    }, 500);

    switch (lang) {
      case 'english':
        setEnglish(state);
        // console.log("Selected", event.target.name, "is set to", { english });
        break;
      case 'french':
        setFrench(state);
        // console.log("Selected", event.target.name, "is set to", { french });
        break;
      case 'norwegian':
        setNorwegian(state);
        // console.log("Selected", event.target.name, "is set to", { norwegian });
        break;
    }
  };

  // Anon function that selects morning or evening based upon user selection
  (() => {
    var time;
    if (enabled === true) {
      time = 'evening';
    } else {
      time = 'morning';
    }
    var time = (adhkar = adhkar.filter((dhikr) => dhikr.time_of_day === time));
  })();

  return (
    // full app
    // Add overflow-x-hidden below
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NextSeo
        title="Dhikr.life - Morning and Evening adhkar"
        description="Mobile morning and evening supplications app in accordance to the sunnah. Read the dhikr daily every morning after fajr prayer and evenings after asr prayer."
      />
      <div
        className={
          `mx-auto w-full pb-24 ${color.primary} ` +
          (theme === 'dark' ? 'text-white' : 'text-black')
        }
      >
        <Landing onClick={(value) => setToggle(value)} />
        <Menu
          translationStates={states}
          state={toggle}
          onClick={() => setToggle(!toggle)}
          onChange={(event) => handleTranslationChange(event)}
        />
        <SelectTime state={enabled} onChange={() => setEnabled(!enabled)} />
        {/* Card components */}
        <Card selectedTranslations={states} content={adhkar} />
      </div>
    </ThemeContext.Provider>
  );
}

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_KEY
  });

  const records = await airtable
    .base('appijFDoXEaa1S4tF')('Master')
    .select({
      fields: [
        'key_id',
        'dhikr_id',
        'time_of_day',
        'arabic_text',
        'read_amount_text',
        'read_amount_int',
        'source',
        'transliteration',
        'transliteration_source',
        'translation_eng',
        'translation_eng_source'
        // "translation_nor",
        // "translation_nor_source",
        // "translation_fr",
        // "translation_fr_source",
      ],
      sort: [{ field: 'key_id', direction: 'asc' }]
    })
    .all();

  const adhkar = records.map((api) => {
    return {
      key_id: api.get('key_id'),
      dhikr_id: api.get('dhikr_id'),
      time_of_day: api.get('time_of_day'),
      arabic_text: api.get('arabic_text'),
      read_amount_text: api.get('read_amount_text'),
      read_amount_int: api.get('read_amount_int'),
      source: api.get('source'),
      transliteration: api.get('transliteration'),
      transliteration_source: api.get('transliteration_source'),
      translation_eng: api.get('translation_eng'),
      translation_eng_source: api.get('translation_eng_source')
      // translation_nor: api.get("translation_nor"),
      // translation_nor_source: api.get("translation_nor_source"),
      // translation_fr: api.get("translation_fr"),
      // translation_fr_source: api.get("translation_fr_source"),
    };
  });

  return {
    props: {
      adhkar
    }
  };
}

export default IndexPage;
