const Positions = ({
  comName,
  duration,
  url,
  line1,
  line2,
  line3,
  ...rest
}) => {
  const ListItem = ({ children }) => {
    return (
      <div className="flex flex-row justify-start items-start gap-x-4">
        <span className="text-[#64ffda]">▹</span>
        <p className="text-base">{children}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10">
      <a
        className="text-[#64ffda] text-lg w-64"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {comName}
        <p className="text-sm text-white">{duration}</p>
      </a>
      <ul className="text-base max-w-2xl flex flex-col gap-2">
        {line1 && (
          <li>
            <ListItem>{line1}</ListItem>
          </li>
        )}
        {line2 && (
          <li>
            <ListItem>{line2}</ListItem>
          </li>
        )}
        {line3 && (
          <li>
            <ListItem>{line3}</ListItem>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Positions;
