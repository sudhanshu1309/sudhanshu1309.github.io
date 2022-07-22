import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const SocialLinks = ({ href, children }) => {
    return (
      <>
        <a
          href={href}
          target={"_blank"}
          rel="noreferrer"
          className="hover:text-cyan-300 transition"
        >
          {children}
        </a>
      </>
    );
  };

  const NavLink = ({ to, children }) => {
    return (
      <Link
        className="block hover:text-cyan-300 transition cursor-pointer"
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        // hashSpy={true}
        // offset={50}
        // duration={500}
        // delay={1000}
        // isDynamic={true}
        // ignoreCancelEvents={false}
        // spyThrottle={500}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <div className="sticky top-0 z-40 backdrop-blur-lg flex flex-row justify-between items-start md:items-center px-6 md:px-12 py-4 text-white">
        <div className="hidden md:flex flex-row gap-x-4 lg:text-xl">
          <NavLink to={"home"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"skills"}>Skills</NavLink>
          <NavLink to={"projects"}>Projects</NavLink>
          <NavLink to={"experience"}>Experience</NavLink>
          <NavLink to={"contact"}>Contact me</NavLink>
        </div>
        <div>
          <button
            className="md:hidden"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            {isVisible ? <MdOutlineClose /> : <HiMenuAlt3 />}
          </button>
          {isVisible && (
            <div className="flex flex-col md:hidden gap-x-4 lg:text-xl">
              <NavLink to={"home"}>Home</NavLink>
              <NavLink to={"about"}>About</NavLink>
              <NavLink to={"skills"}>Skills</NavLink>
              <NavLink to={"projects"}>Projects</NavLink>
              <NavLink to={"experience"}>Experience</NavLink>
              <NavLink to={"contact"}>Contact me</NavLink>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-x-3 md:gap-x-6 items-center">
          <SocialLinks href="https://www.linkedin.com/in/sudhanshu1309/">
            <FiLinkedin size={24} />
          </SocialLinks>
          <SocialLinks href="https://github.com/sudhanshu1309">
            <AiFillGithub size={24} />
          </SocialLinks>
          <SocialLinks href="https://twitter.com/sudhanshutweets">
            <FiTwitter size={24} />
          </SocialLinks>
          <SocialLinks href="https://www.instagram.com/_sudhanshu_1309/">
            <AiOutlineInstagram size={24} />
          </SocialLinks>
        </div>
      </div>
    </>
  );
};

export default Navbar;
