import { useState } from "react";
import Adhkar from "../components/adhkar";
import Landing from "../components/landing";
import Burger from "../components/svgs/burger";
import Close from "../components/svgs/close";
import Airtable from "airtable";
import Head from "next/head";

function IndexPage({ adhkar }) {
  const [toggle, setToggle] = useState(true);

  const check = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
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

  // TODO:
  // [] Set check inside filled box.
  // [] Change box for unselected languages
  // [] Create logic for selection/unselection with state

  const drawer = (
    <div className="absolute inset-y-0 right-0 bg-white w-5/6 md:w-3/6 lg:w-2/6 xl:w-1/6">
      <div className="grid grid-cols-5 grid-rows-24 gap-6 px-4">
        <nav className="col-span-1 col-end-6 row-span-2 row-start-1">
          <button
            className="float-right pt-4"
            onClick={() => {
              setToggle(false);
            }}
          >
            <Close />
          </button>
        </nav>
        <div className="row-start-3">
          <h1 className="subpixel-antialiased text-xl font-bold">
            Translation
          </h1>
        </div>
        {/* English selected style */}
        <div className="row-start-4 col-span-6 h-8 bg-green-50 rounded-md">
          <div className="inline-block align-middle shadow-md bg-white h-full rounded-md w-8">
            <button className="py-1 px-1">{check}</button>
          </div>
          <div className="inline-block align-middle pl-8">
            <h2>English</h2>
          </div>
        </div>
        <div className="row-start-5 col-span-6 h-8 bg-green-50 rounded-md">
          <div className="inline-block align-middle shadow-md bg-white h-full rounded-md w-8">
            <button className=""></button>
          </div>
          <div className="inline-block align-middle pl-8">
            <h2>Français</h2>
          </div>
        </div>
        <div className="row-start-6 col-span-6 h-8 bg-green-50 rounded-md">
          <div className="inline-block align-middle shadow-md bg-white h-full rounded-md w-8">
            <button className=""></button>
          </div>
          <div className="inline-block align-middle pl-8">
            <h2>Norsk</h2>
          </div>
        </div>
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
