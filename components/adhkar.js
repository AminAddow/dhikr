import { useState, useEffect } from "react";

export default function adhkar(dhikr) {
  return (
          <li className="text-3xl text-right" key={dhikr.data.key_id}>
            {dhikr.data.arabic_text}
          </li>
  );
}

