import React from "react";
import Image from "next/image";

export default function Img(props) {
  return (
    <div className="block">
      <div className="flex justify-center h-100 w-100">
        <img
          src="/img/logo.png"
          alt="Dhikr life logo"
          layout="intrinsic"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
