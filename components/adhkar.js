import { useState, useEffect } from "react";

export default function adhkar(dhikr) {
  const d = dhikr.data;

  return (
    <>
      {/* Outter Card */}
      <div className="flex justify-center font-arabic">
        {/* Inner Card */}
        <div className="rounded shadow bg-gray-100">
          {/* Arabic text */}
          <div className="px-2">
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
