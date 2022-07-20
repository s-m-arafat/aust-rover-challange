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
          className="block rounded-lg shadow-lg py-12 md:pb-5 md:py-16 md:px-12"
          style={divStyle}
        >
          <h1 className="tracking-tight  font-ethnocentric">
            <span className="text-4xl md:text-5xl xl:text-8xl  text-green-500 p-2 fontPirulen italic font-bold lg:pb-5">
              A U S T
            </span>
            <br />
            <span className="text-xl md:text-4xl xl:text-5xl bg-std-green text-black fontEthno italic">
              Rover Challenge 2022
            </span>
          </h1>
          <p className="text-white  text-md lg:text-2xl mt-4 mb-8">
            Aust Inter University Robotics Carnival
          </p>
          <a
            className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-red-600 text-white font-bold text-2xl  leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-rgreened-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#segments"
            role="button"
          >
            Participate Now
          </a>
          <a className="btn btn-info text-2xl" href="https://drive.google.com/file/u/1/d/1TjomCgKHgIw0fhUl5RzP6mJGLCIrpqL6/view?usp=sharing&fbclid=IwAR0YG2zaRyC_I04-5H-xubi52fN0asM0qfpb7VhCajBM-IEO9PyBlY-BuS8">
            Rule Book
          </a>
        </div>
      </div>
    </div>
  );
}
