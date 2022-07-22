import React from "react";

const Skill = () => {
  const SkillCard = ({ img = "", name = "", text = "", items = [] }) => {
    return (
      <>
        <div className="container max-w-md flex flex-col items-center border-2 border-cyan-300 rounded-lg">
          <img
            src={`./assets/${img}`}
            alt=""
            className="rounded-lg h-80 object-cover"
          />
          <h4 className="text-2xl md:text-4xl py-4 font-semibold">{name}</h4>
          <p className="text-sm text-center px-4">{text}</p>
          <div className="flex flex-row flex-wrap justify-center items-center p-2">
            {items.map((i, index) => {
              return (
                <span
                  key={index}
                  className="rounded-full px-3 py-1 border border-cyan-300 m-2"
                >
                  {i}
                </span>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        id="skills"
        className="container mx-auto text-cyan-300 flex flex-col items-center"
      >
        <h3 className="text-4xl md:text-6xl py-12 mt-4">My Skills</h3>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-x-8 px-4 gap-y-8">
          <SkillCard
            img="frontend.jpeg"
            name={"Frontend Development"}
            text={`Front-end web development, also known as client-side development is
            the practice of producing HTML, CSS and JavaScript for a website or
            Web Application so that a user can see and interact with them
            directly.`}
            items={[
              "HTML",
              "CSS",
              "JavaScript",
              "ReactJS",
              "TailWindCSS",
              "Material UI",
              "Git",
              "GitHub",
            ]}
          />
          <SkillCard
            img="backend.jpeg"
            name={"Backend Development"}
            text={`Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scene activities that occur when performing any action on a website.`}
            items={[
              "JavaScript",
              "NodeJS",
              "ExpressJS",
              "Firebase",
              "MongoDB",
              "SQL",
              "Postman",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Skill;
