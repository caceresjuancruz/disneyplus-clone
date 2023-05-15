"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  white?: boolean;
  height?: number;
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ white, height, width }) => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      src={
        white
          ? "/images/disney-plus-logo-white.png"
          : "/images/disney-plus-logo-blue.png"
      }
      height={height ? height : "100"}
      width={width ? width : "100"}
      alt="Logo"
    />
  );
};

export default Logo;
