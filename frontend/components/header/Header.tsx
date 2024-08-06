import Link from "next/link";
import { Button } from "../ui/button";

import { ModeToggle } from "../ui/ModeToggle";
import Navbar from "../navbar/Navbar";
const Header = () => {
  return (
    <header className="py-8 xl:py-5 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Collab.IO <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="xl:flex items-center gap-8">
          <Navbar />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
