import "./Career.css";

function Career() {
  return (
    <section className="career max-w-[1600px] mx-auto mb-36 min-h-fit">
      <div className="flex justify-center">
        <h1 className="text-3xl text-center inline font-medium text-[#4d468d] bg-[#4d468d]/[0.15] w-max p-1 rounded-lg mb-10">
          💼 Career
        </h1>
      </div>
      <h1 className="text-4xl font-semibold mb-20 text-center">My journey</h1>
      <div className="grid grid-flow-col grid-cols-2 gap-y-8">
        <div>
          <h2 className="text-3xl font-semibold mb-20 text-center">Work</h2>
          <div className="card flex flex-col relative p-10">
            <h4 className="font-medium text-lg mb-4">Ydeal.net</h4>
            <p className="text-white/[0.7] text-sm">
              For one month I had the opportunity to be an intern at Ydeal, a
              company based in S. Miguel de Souto. In this internship I
              developed an authentication API using Node.js and Express.js for
              the backend and MySQL as the database.
            </p>
            <h5 className="absolute bottom-10 left-10 text-[#4d468d] font-bold">
              1 month
            </h5>
            <h5 className="absolute bottom-10 right-10 text-[#4d468d] font-medium">
              June/2022 · July/2022
            </h5>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-20 text-center">Academic</h2>
          <div className="card flex flex-col relative p-10">
            <h4 className="font-medium text-lg mb-4">Ensino secundário</h4>
            <p className="text-white/[0.7] text-sm">
              Since 2020 I have been studying IT at Dr. Serafim Leite in São
              João da Madeira.
            </p>
            <h5 className="absolute bottom-10 left-10 text-[#4d468d] font-bold">
              2 years and 2 months
            </h5>
            <h5 className="absolute bottom-10 right-10 text-[#4d468d] font-medium">
              September/2020 · Today
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
