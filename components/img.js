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
      <div className="flex justify-center">
        <img
          src="/img/dhikr-logo-new.png"
          alt="Dhikr life logo"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
