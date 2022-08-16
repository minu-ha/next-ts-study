import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <a>home &nbsp;</a>
      </Link>
      <Link href={"/about"}>
        <a>about</a>
      </Link>
    </nav>
  );
};

export default NavBar;
