import sac from "../assets/sac.png";
import ecom from "../assets/ecom.png";
import kabir from "../assets/kabir.png";
import { default as Card } from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start mx-auto px-4 pt-20 max-w-6xl gap-12">
        <div className="flex flex-row gap-x-4 text-2xl md:text-3xl">
          <span className="text-[#64ffda]">03.</span>
          <p className="text-[#ccd6f6]">Some Things I’ve Built</p>
        </div>
        <div className="flex flex-col md:flex-row mx-auto gap-4">
          <Card
            title="SAC IIIT NR Website"
            bg={sac}
            gh={
              "https://github.com/Student-Activity-Center-IIIT-NR/sac-website"
            }
            url={"https://sac.iiitnr.ac.in/"}
          >
            This is the official website for the Student Activity Center (SAC)
            of the Indian Institute of Information Technology, Naya Raipur. The
            website serves as a one-stop-shop for students to stay informed
            about upcoming events, register for events, and connect with the
            right person for any inquiries or concerns. The website has a clean
            and modern design that is easy to navigate and provides all the
            necessary information for students to get involved in
            extracurricular activities on campus.
          </Card>
          <Card
            title="Blogging app"
            bg={kabir}
            gh={""}
            url={"https://askabir.in/"}
          >
            The blogging application is an platform to showcase the work and
            achievements of Mr. A S Kabir, the regional director for NSS
            India. Mr. Kabir shares his experiences, expertise, and achievements
            through his blog posts, providing valuable insights and advice to
            his readers. The website has a user-friendly interface that allows
            users to easily navigate through the blog posts and access the
            information they need.
          </Card>
          <Card
            title="E-Comm"
            bg={ecom}
            gh={"https://github.com/sudhanshu1309/t-shirt"}
            url={"https://ecom-dha2.onrender.com/"}
          >
            This is a online shopping website built as a prototype using the
            ExpressJS and ReactJS frameworks. It offers a simple yet powerful
            full-stack solution that allows customers to browse, select and
            purchase products. The website's front-end is built on ReactJS,
            which provides a highly interactive user interface and seamless user
            experience. The back-end is powered by ExpressJS, which enables the
            website to handle complex data operations and allows for easy
            scalability.
          </Card>
        </div>
      </div>
    </>
  );
};

export default Projects;
