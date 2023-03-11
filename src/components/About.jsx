import sudhanshuImg from "../assets/sudhanshu.png";
import { techs } from "../Data";

const About = () => {
  const Tech = ({ name }) => {
    return (
      <>
        <div className="flex flex-row justify-start items-center gap-4">
          <p className="text-base text-[#64ffda]">{name}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-20 md:gap-x-20 justify-center items-center md:items-start mx-auto px-4 pt-20 max-w-6xl md:h-screen">
        <div>
          <div className="flex flex-row gap-x-4 text-2xl md:text-3xl">
            <span className="text-[#64ffda]">01.</span>
            <p className="text-[#ccd6f6]">About Me</p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-y-4 text-lg mt-5">
            <p>
              Hello! My name is Sudhanshu Tripathi and I enjoy creating things
              that live on the internet. My interest in web development started
              back in 2012 when I decided to try editing custom Tumblr themes —
              turns out hacking together a custom reblog button taught me a lot
              about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-x-36 gap-y-8 max-w-xl mt-5">
            {techs.map((tech, index) => {
              return <Tech key={index} name={tech.name} />;
            })}
          </div>
        </div>
        <img
          src={sudhanshuImg}
          alt="Sudhanshu Tripathi"
          style={{
            height: "300px",
            width: "300px",
            objectFit: "contain",
            borderRadius: "18px",
          }}
        />
      </div>
    </>
  );
};

export default About;
