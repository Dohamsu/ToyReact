import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Header from "./Header";

const Nav = function () {
  /*
  const navList = []
  for (let i=0; i<props.to)
  */
  return (
    <nav className={navStyles.nav}>
      <Header></Header>
      <ul>
        <li>
          <Link href="/">
            <a> 홈 </a>
          </Link>
        </li>
        <li>
          <Link href="/delivery">
            <a> 전체 </a>
          </Link>
        </li>
        <li>
          <Link href="/newShop">
            <a> 신규 </a>
          </Link>
        </li>
        <li>
          <Link href="/chickenShop">
            <a> 치킨 </a>
          </Link>
        </li>
        <li>
          <Link href="/snackShop">
            <a> 분식 </a>
          </Link>
        </li>
        <li>
          <Link href="/korShop">
            <a> 한식 </a>
          </Link>
        </li>
        <li>
          <Link href="/chnShop">
            <a> 중식 </a>
          </Link>
        </li>
        <li>
          <Link href="/jpnShop">
            <a> 일식 </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
