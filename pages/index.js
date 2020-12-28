import { useState } from "react";
import Adhkar from "../components/adhkar";
import Landing from "../components/landing";
import Card from "../components/card";
import Burger from "../components/svgs/burger";
import Close from "../components/svgs/close";
import Translations from "../components/translations";
import Airtable from "airtable";
import Head from "next/head";

function IndexPage({ adhkar }) {
  // Menu opener state
  const [toggle, setToggle] = useState(false);

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

  const drawer = (
    <div className="fixed inset-y-0 right-0 flow space-y-6 px-2 bg-white w-5/6 md:w-3/6 lg:w-2/6 xl:w-1/6">
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
        <Translations />
      </div>
    </div>
  );

  /* 
TODO:
[x] - Move card component to own seperate file
[x] - Make drawer take whole screen height

*/

  return (
    // full app
    <div>
      <Head>
        <title>Dhikr.life</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="px-2 h-screen w-screen">
        {/* Navigation drawer */}
        <nav className="flow-root">
          <button
            className="float-right pt-4"
            onClick={() => {
              setToggle(true);
            }}
          >
            <Burger />
          </button>
        </nav>
        {toggle ? drawer : ""}
        {/* landing screen */}
        {/* Card components */}
        <Card adhkar={adhkar} />
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
