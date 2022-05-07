import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Header from "./Header";

const Nav = function () {
  return (
    <nav className={navStyles.nav}>
      <Header></Header>
      <ul>
        <li>
          <Link href="/">
            <a> Home</a>
          </Link>
        </li>
        <li>
          <Link href="/delivery">
            <a> Delivery </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
