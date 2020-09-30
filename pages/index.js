import Adhkar from "../components/adhkar";
import Landing from "../components/landing";
import Airtable from "airtable";
import { useState, useEffect } from "react";
// import GetMorning from '../components/GetMorning';
import Head from "next/head";

function IndexPage({ adhkar }) {
  return (
    <div className="flex items-center w-auto">
      <div>
        {/* <Landing /> */}
        <div className="font-arabic flex">
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
      maxRecords: 1,
    })
    .all();

  const adhkar = records.map((product) => {
    return {
      key_id: product.get("key_id"),
      dhikr_id: product.get("dhikr_id"),
      time_of_day: product.get("time_of_day"),
      arabic_text: product.get("arabic_text"),
      read_amount_int: product.get("read_amount_int"),
    };
  });

  return {
    props: {
      adhkar,
    },
  };
}

export default IndexPage;
