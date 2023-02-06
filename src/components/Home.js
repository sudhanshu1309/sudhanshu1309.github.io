import React from "react";
import Vanta from "./Vanta";

const Home = () => {
  const ref = Vanta();
  return (
    <>
      <section id="home" ref={ref} className="h-screen text-cyan-300">
        <div className="container mx-auto text-3xl px-12">
          <h3 className="text-4xl md:text-6xl py-16 font-bold">Hi There!</h3>
          <p className="text-4xl md:text-5xl py-2 font-bold">I am Sudhanshu,</p>
          <p className="text-4xl md:text-5xl py-2 font-bold">a full stack</p>
          <p className="text-4xl md:text-5xl py-2 font-bold"> developer</p>
        </div>
        <div className="container mx-auto px-12 py-20">
          <a
            href="https://drive.google.com/file/d/1zl8dcldB8q0C8a_AUIEzHhATsWmRUtya/view?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="border border-cyan-300 rounded-full p-4 hover:bg-cyan-300 hover:text-black transition text-xl">
              Download Resume
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
