import { useState, useEffect } from "react";

export default function adhkar(dhikr) {
  const d = dhikr.data;

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="rounded sm:w-auto md:w-3/4 lg:1/2
         overflow-hidden shadow-lg">
          <div className="rounded-full absolute h-12 w-12 -mt-6 right-0 mr-4 text-4xl bg-gray-400 shadow">
            <p className="antialiased text-center">{d.dhikr_id}</p>
          </div>
          <div className="px-6 pt-8 pb-8">
            <p className="antialiased text-gray-700 text-3xl rtl">
              {d.arabic_text}
            </p>
          </div>
          <div>
            <p>{d.source}</p>
          </div>
        </div>
      </div>
    </>
  );
} 