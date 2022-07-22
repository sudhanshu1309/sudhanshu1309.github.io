import React from "react";

const Project = () => {
  const ProjectCard = ({
    img,
    name = "",
    source = "",
    deploy = "",
    description = "",
  }) => {
    return (
      <>
        <div className="container max-w-md flex flex-col items-center border-2 border-cyan-300 rounded-lg">
          <img
            src={`./assets/${img}`}
            alt=""
            className="rounded-tl-lg rounded-tr-lg object-cover"
          />
          <h6 className="text-3xl px-6 py-2">{name}</h6>

          <div className="flex flex-row gap-x-2 justify-center items-center">
            {source && (
              <a href={source} target={"_blank"} rel="noreferrer">
                <button className="rounded-full border border-cyan-300 px-4 py-2 my-2 hover:bg-cyan-300 hover:text-black">
                  Source Code
                </button>
              </a>
            )}
            {deploy && (
              <a href={deploy} target={"_blank"} rel="noreferrer">
                <button className="rounded-full border border-cyan-300 px-4 py-2 my-2 hover:bg-cyan-300 hover:text-black">
                  Deployed App
                </button>
              </a>
            )}
          </div>
          <p className="px-4 text-center py-4">{description}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        id="projects"
        className="container mx-auto text-cyan-300 mt-20 flex flex-col items-center justify-center"
      >
        <h3 className="text-4xl md:text-6xl text-center py-12 mt-4">
          My Projects
        </h3>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-x-8 px-4 gap-y-8">
          <ProjectCard
            img="tshirt.jpeg"
            name="t-shirt"
            source="https://github.com/sudhanshu1309/t-shirt"
            deploy={"https://tshirtweb.herokuapp.com/"}
            description="An e-commerce app for selling t-shirts developed in MERN stack. It is responsive with bootstrap. It is deployed at Heroku."
          />
          <ProjectCard
            img="blog.jpeg"
            name="Blog"
            deploy={"https://askabir.netlify.app/"}
            description="A personal blogging site for NSS Regional Director Mr. A S Kabir. It is developed in ReactJS and its backend in Google Firebase."
          />
        </div>
      </div>
    </>
  );
};

export default Project;
