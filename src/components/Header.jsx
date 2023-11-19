import { NavLink } from "react-router-dom";

function Header() {
  // const linkStyle = {
  //   margin: "10px",
  //   color: "white",
  //   fontSize: "20px",
  //   backgroundColor: "purple",
  // };

  const getLinkStyles = ({ isActive }) => {
    const classNames = ["link"];
    if (isActive) {
      classNames.push("active");
    }
    return classNames.join(" ");
  };

  return (
    <nav>
      <div>
        <NavLink to="/" className={getLinkStyles}>
          People
        </NavLink>
        <NavLink to="/films" className={getLinkStyles}>
          Films
        </NavLink>
        <NavLink to="/planets" className={getLinkStyles}>
          Planets
        </NavLink>

        <NavLink to="/species" className={getLinkStyles}>
          Species
        </NavLink>

        <NavLink to="/starships" className={getLinkStyles}>
          Starships
        </NavLink>

        <NavLink to="/vehicles" className={getLinkStyles}>
          Vehicles
        </NavLink>
      </div>
    </nav>
  );
}
export { Header };
