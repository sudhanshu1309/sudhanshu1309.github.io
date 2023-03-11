import Positions from "./Positions";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start mx-auto gap-12 px-4 mt-20 max-w-6xl md:h-96">
        <div className="flex flex-row gap-x-4 text-2xl md:text-3xl">
          <span className="text-[#64ffda]">02.</span>
          <p className="text-[#ccd6f6]">Where I’ve Worked</p>
        </div>
        <div className="flex flex-col gap-y-8">
          {pos.map((position, index) => {
            return (
              <Positions
                key={index}
                comName={position.name}
                duration={position.duration}
                url={position.url}
                line1={position.line1}
                line2={position.line2}
                line3={position.line3}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;

const pos = [
  {
    name: "SAC IIITNR",
    duration: "July 2022 - Present",
    url: "https://sac.iiitnr.ac.in/team",
    line1: `Developed the SAC website with a focus on modern, performant, and maintainable code using the NextJS framework`,
    line2: `Collaborated with junior team and design team to deliver a modern and high-performing website`,
    line3: `Deployed on a local Linux-based server and mapped to a public IP address`,
  },
  {
    name: "Dygnify Ventures Pvt Limited",
    duration: "March 2022 - June 2022",
    url: "https://www.dygnify.com/",
    line1: `Developed modern, performant and maintainable code for a DeFi application primarily using HTML, CSS, JavaScript, and React`,
    line2: `The website was designed with a focus on providing a seamless user experience and ensuring responsiveness across various devices, including both desktop and mobile browsers`,
  },
];
