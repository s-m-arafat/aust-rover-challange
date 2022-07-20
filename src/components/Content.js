import React from "react";
import image from "../static/content.png"

export default function Content() {
  return (
    // container
    <div className="-mt-16 flex flex-col md:flex-row items-center justify-center">

      {/* item 1 */}
      <div className="card md:-mr-10 z-10 bg-green-300">
        <img src={image} alt="" className="h-56 m-auto lg:h-64" />
      </div>

      {/* item 2 */}
      <div className="card glass hover:bg-slate-900 bg-slate-900 opacity-90 backdrop-blur-sm w-11/12 -mt-10 md:mt-0 md:w-1/2 h-96">
        <div className="card-body">
          <h1 className="text-xl text-green-600 fontPirulen font-bold italic mt-5 md:mt-2 p-5">About Rover Challenge 2022</h1>
        </div>
      </div>

    </div>
  );
}
