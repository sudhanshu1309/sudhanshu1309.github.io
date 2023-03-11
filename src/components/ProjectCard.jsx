import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Links from "./Links";

const ProjectCard = ({ title, children, bg, gh, url }) => {
  return (
    <>
      <div className="relative">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundBlendMode: "lighten",
            opacity: 0.8,
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius: "8px",
          }}
        ></div>
        <div className="max-w-xs flex flex-col gap-y-5 py-8 px-6 bg-[#112240] opacity-80 rounded-lg hover:opacity-0 transition duration-500 h-full">
          <h1 className="text-[#64ffda] text-2xl font-normal">{title}</h1>
          <p className="text-sm font-light">{children}</p>
          <div className="flex flex-row justify-start items-center gap-x-4">
            <Links href={gh}>
              <AiFillGithub size={24} />
            </Links>
            <Links href={url}>
              <AiOutlineLink size={24} />
            </Links>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
