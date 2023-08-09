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
    name: "CFT Labs",
    duration: "May 2023 - June 2023",
    url: "https://cftlabs.org/",
    line1: `Developed a versatile React-based admin panel application catering to diverse clients.`,
    line2: `Collaborated with a wide range of clients to deliver customized solutions tailored to their specific needs and requirements.`,
  },
  {
    name: "Dygnify Ventures Pvt Limited",
    duration: "March 2022 - June 2022",
    url: "https://www.dygnify.com/",
    line1: `Developed modern, performant and maintainable code for a DeFi application primarily using HTML, CSS, JavaScript, and React`,
    line2: `The website was designed with a focus on providing a seamless user experience and ensuring responsiveness across various devices, including both desktop and mobile browsers`,
  },
];
