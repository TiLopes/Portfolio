import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade direction="up" duration={500} triggerOnce>
      <section
        className="about max-w-[1600px] mx-auto mb-24 h-[300px]"
        id="about"
      >
        <div className="grid grid-flow-col items-center justify-center grid-cols-2">
          <div className="image"></div>
          <div className="about-text">
            <h1 className="text-3xl text-[#4d468d] bg-[#4d468d]/[0.15] w-max p-1 rounded-lg mb-7">
              🤔About me
            </h1>
            <h1 className="text-4xl font-semibold mb-3">
              Tiago Fernandes Lopes
            </h1>
            <p className="text-white/[0.7] leading-7">
              <span className="text-neutral-50">👋</span> My name is Tiago
              Fernandes Lopes, but you can call me Tiago. It's pleasure meeting
              you!!
            </p>
            <p className="text-white/[0.7] leading-7">
              <span className="text-neutral-50">📚</span> For the past 2 years I
              have been studying IT at Dr. Serafim Leite in São João da Madeira.
            </p>
            <p className="text-white/[0.7] leading-7">
              I have experience coding in Javascript, Java and C. I love the
              backend, though I'm always open for something new!
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
}
