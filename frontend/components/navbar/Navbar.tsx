"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  {
    name: "Collaborate",
    path: "collaborate",
  },
  {
    name: "Whiteboard",
    path: "/whiteboard",
  },
  {
    name: "Problem Statement",
    path: "/problem",
  },
  {
    name: "My Submissions",
    path: "/submissions",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const dropdownLinks = [
  { name: "Code Editor", path: "/code" },
  { name: "Drawing area", path: "/code" },
  { name: "Chat", path: "/code" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (temp = true) => {
    console.log(isOpen);
    if (temp == false) setIsOpen(false);
    else setIsOpen((prev) => !prev);
  };
  return (
    <nav className="flex gap-8">
      <DropdownMenu onOpenChange={toggleDropdown}>
        <DropdownMenuTrigger className="font-extrabold focus:outline-none border-transparent">
          <div className=" rounded-md flex items-center gap-2">
            {" "}
            Features
            <motion.div
              onClick={() => toggleDropdown()}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-block" }}
            >
              <FaChevronDown />
            </motion.div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          onClick={() => toggleDropdown(false)}
        >
          {dropdownLinks.map((link, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                router.push(link.path);
              }}
            >
              {link.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "border-b-2 border-accent"
            } captialize font-medium transition-all ease-in-out`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
