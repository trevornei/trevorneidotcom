"use client";
import { useEffect } from "react";
import { useState } from "react";
import Slant from "./Slant.jsx";
export default function slants() {
  const [slantComponents, setSlantComponent] = useState([]);
  useEffect(() => {
    const numberOfSlants = 7;
    const componentsArrary = [];

    function genSlant() {
      for (let i = 0; i < numberOfSlants; i++) {
        componentsArrary.push(<Slant key={i} />);
      }
      setSlantComponent(componentsArrary);
    }
    genSlant();
  }, []);

  return (
    <>
      {/* Parent Div*/}
      <div
        className="absolute right-0 block -rotate-35 xl:m-0 xl:flex xl:flex-row"
        id="slantPop"
      >
        {/* Each Child Div's */}
        {slantComponents}
      </div>
    </>
  );
}
