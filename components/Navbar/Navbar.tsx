"use client";

import { usePathname } from "next/navigation";
import Button from "../Button";

import Logo from "./Logo";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const pathname = usePathname();

  return (
    <div className="fixed w-full bg-transparent z-10">
      <div
        className="
          p-4 
        "
      >
        <div
          className={`
            flex 
            flex-row 
            items-center 
            gap-3
            md:gap-0
            ${pathname == "/" ? "justify-end" : "justify-between"}
          `}
        >
          {pathname == "/" ? <></> : <Logo />}
          <Button
            label="INICIAR SESION"
            outline
            small
            onClick={() => console.log("iniciar sesion")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
