import React from "react";
import headerImage from "../static/header.png";
import HeaderFloat from "./HeaderFloat";
import Navbar from "./Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img1 from "../static/1.png";
import img2 from "../static/2.png";
import img3 from "../static/3.png";
import img4 from "../static/4.png";
import img5 from "../static/5.png";
import img6 from "../static/6.png";
export default function Hero() {

  const parallaxStyle = {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "45%",
    height: "400px",
    // '@media (min-width: 475px)':{

    // }
  };

  return (
    <div className="">
      <Navbar />
      <Parallax pages={1.2} className="bg-white">
        <ParallaxLayer
          speed={2}
          style={parallaxStyle}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={2.5}>
          <img src={img1} alt="" className="hidden lg:block h-60 m-auto"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1.5}>
          <img src={img2} alt="" className="h-60 "/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={4}>
          <img src={img3} alt="" className="hidden lg:block h-60 m-auto "/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={3}>
          <img src={img4} alt="" className="h-60 float-right"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={3}>
          <img src={img5} alt="" className="hidden lg:block h-60 pl-10"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={2.5}>
          <img src={img6} alt="" className=" h-60  float-right pr-10"/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={1}>
          <HeaderFloat />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
