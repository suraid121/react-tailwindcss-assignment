import  cn  from "../utilities/cn";
import NavItems from "../db/NavItems";
import { NavLink } from "react-router-dom";

const NavLinks = ({ className  }) => {
  return (
    <>
      {NavItems.map((item, i) => (
        <NavLink
          key={i}
          to={item.to}         
          className={cn("text-mid-gray-text hover:text-dark-gray-text   transition  font-medium cursor-pointer inline", className)}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
