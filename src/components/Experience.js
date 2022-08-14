import React from "react";

const Experience = () => {
  const ExperienceCard = ({ img, name, date, org, link }) => {
    return (
      <>
        <div className="container max-w-md flex flex-col border-2 border-cyan-300 rounded-lg">
          <img
            src={`./assets/${img}`}
            alt=""
            className="rounded-lg object-cover"
          />
          <h4 className="text-left text-xl px-4 py-3">{name}</h4>
          <p className="text-left text-sm px-4 pb-3">
            {date} | {org}
          </p>
          <a
            href={link}
            target={"_blank"}
            rel="noreferrer"
            className="px-4 pb-4"
          >
            <button className="rounded-full border border-cyan-300 px-4 py-2 my-2 hover:bg-cyan-300 hover:text-black">
              Know more...
            </button>
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        id="experience"
        className="container mx-auto flex flex-col items-center text-cyan-300 mt-4"
      >
        <h3 className="text-4xl md:text-6xl py-12 md:mt-28">My Experiences</h3>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-x-8 px-4 gap-y-8 my-4">
          <ExperienceCard
            img="internship.jpeg"
            name="Web Development Intern"
            date="March 2022 - June 2022"
            org="Dygnify Ventures Pvt. Limited"
            link={
              "https://drive.google.com/file/d/175kDRNhBt9V9lBCc68dKG4kaqCjOGkFl/view?usp=sharing"
            }
          />
          <ExperienceCard
            img="responsibility.jpeg"
            name={"Vice-Head @ Web Management Team"}
            date="May 2022 - Present"
            org="Student Activity Center, IIIT Naya Raipur"
            link={"http://sac.iiitnr.ac.in/team"}
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
