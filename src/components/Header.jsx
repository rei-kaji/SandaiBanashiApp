import { useState, useEffect } from "react";
import Link from "next/link";
import { SignInOrOutButton } from "./SignInOrOutButton";

const Header = ({ pathname }) => {
  return (
    <header>
      <Link href="/" className={pathname === "/" ? "is-active" : ""}>
        Home
      </Link>{" "}
      <Link href="/about" className={pathname === "/about" ? "is-active" : ""}>
        About
      </Link>
      <SignInOrOutButton />
    </header>
  );
};

export default Header;
