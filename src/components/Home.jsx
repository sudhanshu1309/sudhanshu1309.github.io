/**
 * max width 6xl
 */

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-y-4 mx-auto px-4 max-w-6xl h-screen">
        <h2 className="text-[#64ffda] text-base">Hi! My name is</h2>
        <h1 className="text-[#ccd6f6] text-3xl md:text-6xl">
          Sudhanshu Tripathi
        </h1>
        <p className="text-[#8892b0] text-3xl md:text-6xl">
          I build things for the web.
        </p>
        <p className="text-[#8892b0] text-lg md:text-xl">
          I’m a software engineer specializing in building exceptional digital
          experiences.
        </p>
        <a
          className="text-sm mt-12 rounded-md border-[#64ffda] border py-4 px-7 text-center text-[#64ffda] w-fit"
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </>
  );
};

export default Home;
