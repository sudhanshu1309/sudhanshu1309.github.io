const Links = ({ href, children }) => {
  return (
    <>
      <a
        href={href}
        target={"_blank"}
        rel="noreferrer"
        className="hover:text-cyan-300 transition cursor-pointer"
      >
        {children}
      </a>
    </>
  );
};

export default Links;
