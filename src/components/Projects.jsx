import "./Projects.css";
import todo from "../assets/todo.png";
import auth from "../assets/auth.svg";

function Projects() {
  return (
    <section
      className="projects max-w-[1600px] mx-auto mb-36 h-auto"
      id="projects"
    >
      <h1 className="text-3xl font-medium text-[#4d468d] bg-[#4d468d]/[0.15] w-max p-1 rounded-lg mb-10">
        📎 Portfolio
      </h1>
      <h1 className="text-4xl font-semibold mb-20">Projects</h1>
      <div className="grid grid-flow-col gap-y-8">
        <div className="card flex flex-col justify-self-center relative">
          <h4 className="absolute top-6 left-6 font-medium">To-do List</h4>
          <p className="text-white/[0.7] text-sm px-6 pt-14">
            A simple To-do list using vanilla Javascript
          </p>
          <div className="flex flex-row mt-12 mx-6">
            {/* <h5 className="py-1 px-3 rounded-lg text-gray-200 font-semibold bg-gray-400/[0.3] w-fit">
              Offline
            </h5> */}
            <h5 className="py-1 px-3 rounded-lg text-[#4d468d] font-semibold bg-[#4d468d]/[0.15] w-fit">
              Javascript
            </h5>
          </div>
          <div className="image pt-16">
            <img src={todo} />
          </div>
        </div>
        <div className="card flex flex-col justify-self-center relative">
          <h4 className="absolute top-6 left-6 font-medium">
            Authentication API
          </h4>
          <p className="text-white/[0.7] text-sm px-6 pt-14">
            An authentication API written in Node.js and Express.js capable of:
            signing up, logging in and checking user permissions.
          </p>
          <div className="flex flex-row mt-12 mx-6">
            <h5 className="py-1 px-3 rounded-lg text-[#4d468d] font-semibold bg-[#4d468d]/[0.15] w-fit">
              Node.js
            </h5>
            <h5 className="ml-3 py-1 px-3 rounded-lg text-[#4d468d] font-semibold bg-[#4d468d]/[0.15] w-fit">
              Express.js
            </h5>
          </div>
          <div className="image pt-9">
            <img src={auth} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
