import React from "react";

export default function Prize() {
  return (
    <div className="card glass bg-std-green-tx hover:bg-std-green-tx text-black w-max m-auto md:pt-10 pl-10  pr-10  md:pb-10">
      <div className="card-body p-5 md:p-10">
        <div className="grid md:grid-cols-2 gap-5 grid-cols-1 items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="card-title rounded-full bg-std-green h-20 w-20 text-center">
              <p className="fontPirulen text-black text-2xl font-bold">150K</p>
            </h2>
            <h3 className="fontEthno lg:text-2xl">Prizemoney</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="card-title rounded-full bg-std-green h-20 w-20 text-center">
              <p className="fontPirulen text-black text-2xl">4</p>
            </h2>
            <h3 className="fontEthno lg:text-2xl">Segments</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
