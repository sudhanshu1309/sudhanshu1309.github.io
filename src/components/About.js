import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="container mx-auto text-cyan-300 flex flex-col items-center py-16"
      >
        <h3 className="text-4xl md:text-6xl py-4">About Me</h3>
        <img
          src="./assets/me.jpeg"
          alt="Sudhanshu Tripathi"
          className="max-w-xs md:max-w-sm px-6 py-6 my-6"
          style={{ borderRadius: "50%" }}
        />
        <p className="max-w-xs md:max-w-3xl text-center px-4 py-4 text-lg md:text-2xl">
          Hi, I am Sudhanshu Tripathi, an Electronics and Communication
          Engineering Pre-Final Year student at International Institute of
          Information Technology, Naya Raipur, CG, India
        </p>
      </div>
    </>
  );
};

export default About;
