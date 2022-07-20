import React from "react";

export default function EachSegment({name, brief, bg, url}) {
  return (
    <div className="card w-76 md:w-80 lg:w-80 shadow-xl image-full">
      <figure>
        <img src={bg} alt="" className=""/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-500 fontPirulen text-sm">{name}</h2>
        <p className="text-white">{brief}</p>
        <div className="card-actions justify-end">
          <a href={url} className="btn glass text-white bg-std-green-tx hover:bg-std-green active:bg-std-green">Register</a>
        </div>
      </div>
    </div>
  );
}
