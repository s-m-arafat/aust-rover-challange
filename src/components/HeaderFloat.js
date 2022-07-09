import React from "react";

export default function HeaderFloat() {
  const divStyle = {
    background: "hsla(0, 0%, 0%, 0.5)",
    backdropFilter: "blur(5px)",
    marginTop: "-100px",
  };
  return (
    <div className="container w-fit mx-auto px-6 md:px-12 xl:px-32">
      <div className="text-center ">
        <div
          className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
          style={divStyle}
        >
          <h1 className="text-5xl text-lime-500 md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            AUST
            <br />
            <span className="text-red-600">Rover Challange 2022</span>
          </h1>
          <a
            className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-lime-600 text-white font-bold text-2xl  leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-rgreened-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#!"
            role="button"
          >
            Participate Now
          </a>
          <a
            className="btn btn-info text-2xl"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#!"
          >
            Rule Book
          </a>
        </div>
      </div>
    </div>
  );
}
