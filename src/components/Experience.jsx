const Experience = () => {
  const ListItem = ({ children }) => {
    return (
      <div className="flex flex-row justify-center items-start gap-x-4">
        <span className="text-[#64ffda]">▹</span>
        <p className="text-base">{children}</p>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start mx-auto gap-12 px-4 mt-20 max-w-6xl md:h-96">
        <div className="flex flex-row gap-x-4 text-2xl md:text-3xl">
          <span className="text-[#64ffda]">02.</span>
          <p className="text-[#ccd6f6]">Where I’ve Worked</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <a
            className="text-[#64ffda] text-lg"
            href="https://www.dygnify.com/"
            target="_blank"
            rel="noreferrer"
          >
            Dygnify Ventures Pvt Limited
            <p className="text-sm text-white">March 2022 - June 2022</p>
          </a>
          <ul className="text-base max-w-2xl flex flex-col gap-2">
            <li>
              <ListItem>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </ListItem>
            </li>
            <li>
              <ListItem>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </ListItem>
            </li>
            <li>
              <ListItem>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </ListItem>
            </li>
            <li>
              <ListItem>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </ListItem>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
