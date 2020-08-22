import Nav from "../components/nav";
import firebase from "../firebase";
import { useState, useEffect } from "react";
import GetMorning from "../components/GetMorning";

function IndexPage({ adhkar }) {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">Dhikr.life</h1>
      </div>
      <div>
        {/* <ul>
          {adhkar.map((dhikr) => (
            <li key={dhikr.id}>{dhikr.text}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
    
}


export default IndexPage;
