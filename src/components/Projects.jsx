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
          <Card title="SAC IIIT NR Website" bg={sac}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque
            labore est quae quam quis iste eligendi, mollitia incidunt porro
            cumque ipsam officiis, facilis reprehenderit reiciendis. Esse maxime
            officia modi deserunt, deleniti repellat, eius voluptatibus
            recusandae autem, magni architecto! Dignissimos nostrum architecto
            quod repudiandae iste laudantium ad praesentium voluptas quibusdam!
          </Card>
          <Card title="Blogging app" bg={kabir}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque
            labore est quae quam quis iste eligendi, mollitia incidunt porro
            cumque ipsam officiis, facilis reprehenderit reiciendis. Esse maxime
            officia modi deserunt, deleniti repellat, eius voluptatibus
            recusandae autem, magni architecto! Dignissimos nostrum architecto
            quod repudiandae iste laudantium ad praesentium voluptas quibusdam!
          </Card>
          <Card title="E-Comm" bg={ecom}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque
            labore est quae quam quis iste eligendi, mollitia incidunt porro
            cumque ipsam officiis, facilis reprehenderit reiciendis. Esse maxime
            officia modi deserunt, deleniti repellat, eius voluptatibus
            recusandae autem, magni architecto! Dignissimos nostrum architecto
            quod repudiandae iste laudantium ad praesentium voluptas quibusdam!
          </Card>
        </div>
      </div>
    </>
  );
};

export default Projects;
