import React from "react";
import Image from "next/image";

export default function Img(props) {
  return (
    <div className="flex justify-center">
      <Image
        src="/img/dhikr.png"
        layout="intrinsic"
        width={500}
        height={500}
        alt="Dhikr life logo"
      />
      {/* <div className="flex justify-center h-100 w-100">
        <img
          src="/img/dhikr.png"
          alt="Dhikr life logo"
          layout="intrinsic"
          width={300}
          height={300}
        />
      </div> */}
    </div>
  );
}
