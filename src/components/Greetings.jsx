import bitmap from "../assets/bitmap.svg";
import React from "react";
import { Zoom } from "react-awesome-reveal";

export default function Greetings() {
  return (
    <Zoom duration={500} triggerOnce>
      <section className="greetings mt-24 mb-36 max-w-[1600px] mx-auto h-[630px]">
        <div className="grid grid-flow-col items-center auto-cols-[1fr] max-lg:grid-flow-row">
          <div className="greeting-text pl-28">
            <h1 className="text-6xl ">
              Hello <span>👋</span>
            </h1>
            <h2 className="text-3xl">
              I'm{" "}
              <span className="text-4xl text-[#4d468d] font-bold">
                Tiago Lopes
              </span>
            </h2>
            <h3 className="text-white text-opacity-50 text-lg font-light mt-5">
              Software developer
            </h3>
            <div className="icons flex items-center justify-start mt-4 ">
              <a href="https://github.com/TiLopes" target={"__blank"}>
                <i className="fa-solid fa-brands fa-github text-4xl mr-3 text-white text-opacity-50"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-brands fa-linkedin text-4xl mx-3 text-white text-opacity-50"></i>
              </a>
            </div>
          </div>
          <div className="justify-self-center pr-20">
            <img src={bitmap} className="max-w-xl"></img>
          </div>
        </div>
      </section>
    </Zoom>
  );
}
