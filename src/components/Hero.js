import headerImage2 from "../static/header2.jpg";
import HeaderFloat from "./HeaderFloat";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img1 from "../static/1.png";
import img2 from "../static/2.png";
import img3 from "../static/3.png";
import img4 from "../static/4.png";
import img5 from "../static/5.png";
import img6 from "../static/6.png";
import rover from "../static/rover.jpg";
import Prize from "./Prize";
import Content from "./Content";
import Segments from "./Segments";
import Footer from "./Footer";
import useWindowDimensions from "./useWinDimension";
export default function Hero() {
  const { width } = useWindowDimensions();
  return (
    <div className="">
      <Parallax pages={width > 700 ? 2.2 : 2.85} className="bg-white">
        <ParallaxLayer
          speed={2}
          className="bg-center bg-header-img"
          style={{
            height: "400px",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={2.5}>
          <img
            src={img1}
            alt=""
            className="h-32 md:h-60 lg:block ml-5 lg:m-auto"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1.5}>
          <img src={img2} alt="" className="h-32 md:h-60" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={4}>
          <img
            src={img3}
            alt=""
            className="h-20 mr-10 md:h-40  lg:block ml-12 lg:ml-48"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={2}>
          <img src={img4} alt="" className="h-32 md:h-60 float-right" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={3}>
          <img
            src={img5}
            alt=""
            className="h-32 md:h-36  lg:block ml-16 lg:ml-24"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={3}>
          <img src={img6} alt="" className="h-32 md:h-60 float-right" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={1}>
          <HeaderFloat />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.99999999999}
          speed={0.9}
          factor={0.25}
          className="bg-center"
          style={{
            height: "400px",
            backgroundSize: "cover",
            backgroundImage: `url(${headerImage2})`,
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={0.999999999} speed={0.6} factor={0.25}>
          <Prize />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          className="bg-center"
          style={{
            height: "400px",
            backgroundSize: "cover",
            backgroundImage: `url(${rover})`,
            marginTop: "-75px",
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.6} factor={1.5}>
          <Content />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.6} factor={1.5}>
          <Segments />
        </ParallaxLayer>
        <ParallaxLayer offset={width > 700 ? 2 : 2.7}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
