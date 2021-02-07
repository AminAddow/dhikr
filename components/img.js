import React from "react";

export default function Img(props) {
  return (
    <div className="flex justify-center">
      {/* <Image
        src="/img/dhikr.png"
        layout="intrinsic"
        width={500}
        height={500}
        alt="Dhikr life logo"
      /> */}
      <div className="flex justify-center h-100 w-100">
        <img
          src="/img/dhikr-logo-dark.png"
          alt="Dhikr life logo"
          layout="intrinsic"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
