import { Fade } from "react-awesome-reveal";
import "./About.css";
import face from "../assets/face.jpg";

export default function About() {
  return (
    <Fade direction="up" duration={500} triggerOnce>
      <section
        className="about max-w-[1600px] mx-auto mb-40 min-h-[488px]"
        id="about"
      >
        <div className="grid grid-flow-col items-center grid-cols-2">
          <div className="image flex justify-center xl:justify-start xl:pl-10">
            <img
              src={face}
              alt=""
              className="rounded-[50%] w-[20rem] sm:w-[30rem]"
            />
          </div>
          <div className="about-text pr-4">
            <h1 className="text-3xl font-medium text-[#4d468d] bg-[#4d468d]/[0.15] w-max p-1 rounded-lg mb-7">
              🤔About me
            </h1>
            <h1 className="text-4xl font-semibold mb-3">
              Tiago Fernandes Lopes
            </h1>
            <p className="text-white/[0.7] leading-7">
              <span className="text-neutral-50">👋</span> My name is Tiago
              Fernandes Lopes and I'm 16 years old. It's a pleasure meeting
              you!!
            </p>
            <p className="text-white/[0.7] leading-7">
              <span className="text-neutral-50">📚</span> For the past 2 years I
              have been studying IT at Dr. Serafim Leite in São João da Madeira.
            </p>
            <p className="text-white/[0.7] leading-7">
              I have experience coding in Javascript, Java and C. I mostly work
              in the backend, though I'm always open for something new!
            </p>
            <p className="text-white/[0.7] leading-7">
              🎮🎶 Playing games and listening to music are my favourite ways to
              relax.
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
}
