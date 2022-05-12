import Nav from "./Nav";
import Header from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <div>{children}</div>
    </>
  );
};

export default Layout;
