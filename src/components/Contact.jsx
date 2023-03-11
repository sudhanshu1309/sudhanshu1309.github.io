import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { default as SocialLinks } from "./Links";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start mx-auto px-4 pt-20 max-w-6xl gap-10">
        <div className="flex flex-row gap-x-4 text-2xl md:text-3xl">
          <span className="text-[#64ffda]">04.</span>
          <p className="text-[#ccd6f6]">Get In Touch</p>
        </div>
        <p>
          Thank you for taking the time to visit my portfolio, and I look
          forward to hearing from you!
        </p>
        <a
          className="mx-auto text-sm mt-12 rounded-md border-[#64ffda] border py-4 px-7 text-center text-[#64ffda] w-fit"
          href="mailto:sudhanshutripathi008@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Say Hello
        </a>
        <div className="flex flex-row items-center justify-between gap-x-4 px-4 mx-auto mt-6">
          <SocialLinks href="https://www.linkedin.com/in/sudhanshu1309/">
            <FiLinkedin size={24} />
          </SocialLinks>
          <SocialLinks href="https://github.com/sudhanshu1309">
            <AiFillGithub size={24} />
          </SocialLinks>
          <SocialLinks href="https://twitter.com/sudhanshutweets">
            <FiTwitter size={24} />
          </SocialLinks>
          <SocialLinks href="https://www.instagram.com/sudhanshuweb/">
            <AiOutlineInstagram size={24} />
          </SocialLinks>
          <SocialLinks href="https://medium.com/@sudhanshutripathi008/">
            <SiMedium size={24} />
          </SocialLinks>
        </div>
        <div className="mx-auto mt-24 mb-10 font-light">
          <p className="text-sm">Built by Sudhanshu Tripathi</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
