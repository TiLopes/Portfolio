import { Fade } from "react-awesome-reveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience max-w-[1600px] mx-auto mb-36 h-[200px]">
      <div className="card-wrapper flex items-center justify-center gap-16 flex-wrap">
        <Fade cascade damping={0.05} direction="left" triggerOnce>
          <div className="card flex justify-center items-center flex-col">
            <i className="fa-solid fa-code"></i>
            <p>2 years as a</p>
            <h1>Programmer</h1>
          </div>
          <div className="card flex justify-center items-center flex-col bg-[#4d468d]/[0.15] border-none">
            <i className="fa-solid fa-briefcase"></i>
            <p>1 month of</p>
            <h1>Working</h1>
          </div>
          <div className="card flex justify-center items-center flex-col">
            <i className="fa-solid fa-heart-pulse"></i>
            <p>16 years</p>
            <h1>Living life</h1>
          </div>
        </Fade>
      </div>
    </section>
  );
}
