import React from "react";

export default function Img(props) {
  return (
    <div className="flex justify-center mx-auto py-24 px-6 h-auto w-5/6 md:w-2/3 lg:w-1/2">
      <img
        className="max-w-min max-h-min"
        src="/img/dhikr-logo-new.png"
        alt="Dhikr life logo"
      />
    </div>
  );
}
