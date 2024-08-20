import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";

import { LANGUAGE_VERSIONS } from "./constants";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400"; // Tailwind CSS class for active color

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (temp = true) => {
    console.log(isOpen);
    if (temp == false) setIsOpen(false);
    else setIsOpen((prev) => !prev);
  };
  return (
    <div className="ml-2 mb-4 ">
      <div className="mb-2 text-lg">Language:</div>

      <DropdownMenu onOpenChange={toggleDropdown}>
        <DropdownMenuTrigger asChild>
          <Button className=" rounded-md flex items-center gap-2">
            {language}{" "}
            <motion.div
              onClick={() => toggleDropdown()}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-block" }}
            >
              <FaChevronDown />
            </motion.div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900">
          {languages.map(([lang, version]) => (
            <DropdownMenuItem
              key={lang}
              className={`${lang === language ? ACTIVE_COLOR : ""} ${
                lang === language ? "bg-gray-800" : ""
              }`}
              onClick={() => onSelect(lang)}
            >
              {lang}
              <span className="ml-1 text-gray-600 text-sm">({version})</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
