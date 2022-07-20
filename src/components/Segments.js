import React from "react";
import EachSegment from "./EachSegment";
import bg1 from "../static/moon-rover.png";
import bg2 from "../static/sb.jpg";
import bg3 from "../static/hd.png";
import bg4 from "../static/car.png";

const segementList = [
  {
    name: "Rover Challenge",
    bgUrl: bg1,
    url: "https://forms.gle/Bq3qvPY2dsAdsxiU7",
    brief: "aaaaaaf  fadlskjf sdjfldkaj faksldjf fajsdlfkajsf ;ldfdasl;kfjdsa ",
  },

  {
    name: "Soccer bot",
    bgUrl: bg2,
    url: "https://forms.gle/9ovutJCVmAPHbTUq6",
    brief: "aaaaaaf  fadlskjf sdjfldkaj faksldjf fajsdlfkajsf ;ldfdasl;kfjdsa ",
  },
  {
    name: "Hardware Showcasing",
    bgUrl: bg3,
    url: "https://forms.gle/Jo9o5rsCFt2CcBbo9",
    brief: "aaaaaaf  fadlskjf sdjfldkaj faksldjf fajsdlfkajsf ;ldfdasl;kfjdsa ",
  },
  {
    name: "Line Follower Robot",
    bgUrl: bg4,
    url: "https://forms.gle/jtkcQpkQAsBwGGzCA",
    brief: "aaaaaaf  fadlskjf sdjfldkaj faksldjf fajsdlfkajsf ;ldfdasl;kfjdsa ",
  },
];
export default function Segments() {
  return (
    <>
      <div className="fontPirulen text-center text-green-500 text-2xl p-5">Segments</div>
      <div
        id="segments"
        className="mt-40 md:mt-0 flex space-y-3 md:space-x-3 lg:space-y-0 flex-wrap pl-5 pr-5 items-center justify-center "
      >
        {segementList.map((segment, index) => (
          <EachSegment
            key={index}
            name={segment.name}
            url={segment.url}
            bg={segment.bgUrl}
            brief={segment.brief}
          />
        ))}
      </div>
    </>
  );
}
