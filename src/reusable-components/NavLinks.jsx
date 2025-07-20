import  cn  from "../utilities/cn";
import NavItems from "../db/NavItems";

const NavLinks = ({ className = "", onClick }) => {
  return (
    <>
      {NavItems.map((item, i) => (
        <a
          key={i}
          href={item.href || "#"}
          onClick={onClick}
          className={cn("text-mid-gray-text hover:text-dark-gray-text transition font-medium", className)}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
