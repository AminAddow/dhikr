import { useState } from "react";
import Adhkar from "../components/adhkar";
import Landing from "../components/landing";
import Burger from "../components/svgs/burger";
import Close from "../components/svgs/close";
import Translations from "../components/translations";
import Airtable from "airtable";
import Head from "next/head";

function IndexPage({ adhkar }) {
  // Menu opener state
  const [toggle, setToggle] = useState(true);

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
      <Translations />
    </div>
  );

  return (
    // full app
    <div className="container font-playfair">
      <Head>
        <title>Dhikr.life</title>
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
