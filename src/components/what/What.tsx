import React from "react";
import Pixel from "./Pixel";

interface WhatProps {
  children: React.ReactNode;
  score: number;
  title: string;
  logo: React.ReactNode;
}

function calculatePixelValues(score: number) {
  const values = [0, 0, 0, 0, 0];
  if (score >= 1) {
    values[0] = 100;
  } else {
    values[0] = score * 10;
  }
  if (score >= 2) {
    values[1] = 100;
  } else {
    values[1] = (score - 1) * 100 < 0 ? 0 : (score - 1) * 100;
  }
  if (score >= 3) {
    values[2] = 100;
  } else {
    values[2] = (score - 2) * 100 < 0 ? 0 : (score - 2) * 100;
  }
  if (score >= 4) {
    values[3] = 100;
  } else {
    values[3] = (score - 3) * 100 < 0 ? 0 : (score - 3) * 100;
  }
  if (score >= 5) {
    values[4] = 100;
  } else {
    values[4] = (score - 4) * 100 < 0 ? 0 : (score - 4) * 100;
  }
  return values;
}

function What(props: WhatProps) {
  const values = calculatePixelValues(props.score);
  console.log(values);
  return (
    <div className="w-4/5 h-fit bg-neutral-100 bg-opacity-40 rounded-3xl border-4 border-neutral-100 border-opacity-30 p-6 md:p-12 m-6">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-4xl text-neutral-50">{props.title}</h1>
        <div className="flex flex-col md:flex-row items-center m-4">
          <div className="flex flex-row">
            <Pixel value={values[0]} delay={0.1}></Pixel>
            <Pixel value={values[1]} delay={0.2}></Pixel>
            <Pixel value={values[2]} delay={0.3}></Pixel>
            <Pixel value={values[3]} delay={0.4}></Pixel>
            <Pixel value={values[4]} delay={0.5}></Pixel>
          </div>
          <h2 className="text-xl text-neutral-50 opacity-75 relative top-1 ml-2">
            {props.score}/5
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3">{props.children}</div>
        <div className="m-8">{props.logo}</div>
      </div>
    </div>
  );
}

export default What;
