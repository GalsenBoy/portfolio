import { NavLink } from "react-router-dom";
import "../css/navigation.scss";

export default function Navigation() {
  return (
    <nav className="navigation" aria-label="Navigation principale">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-tab ${isActive ? "active" : ""}`}
      >
        Moi
      </NavLink>
      <NavLink
        to="/projets"
        className={({ isActive }) => `nav-tab ${isActive ? "active" : ""}`}
      >
        Projets
      </NavLink>
    </nav>
  );
}
