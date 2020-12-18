import Adhkar from "../components/adhkar";
import Landing from "../components/landing";
import Drawer from "../components/drawer";
import Airtable from "airtable";
import { useState, useEffect } from "react";
import Head from "next/head";

function IndexPage({ adhkar }) {
  return (
    // full app
    <div className="container bg-brown-100 w-full h-full ">
      {/* Navigation drawer */}
      <Drawer />

      {/* landing screen */}
      {/* <div>Hei</div> */}
      {/* card components */}
      <div className="">
        {adhkar.map((dhikr) => (
          <ul>
            <Adhkar data={dhikr} />
          </ul>
        ))}
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
