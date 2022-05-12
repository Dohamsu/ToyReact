import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      {" "}
      <Link href="/">
        <a> React Toy Project</a>
      </Link>
      <ul>
        <input className="header_search" type="text"></input>
      </ul>
      <div className="header_navi">
        <ul>
          <span className="header_login">
            {" "}
            <a href="/Login"> 로그인 </a>{" "}
          </span>
          <span className="header_orderList">
            {" "}
            <a href="/orderList"> 장바구니 </a>{" "}
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Header;
