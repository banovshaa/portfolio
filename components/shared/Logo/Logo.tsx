import Image from "next/image";
import LogoImage from "@/assets/images/Logo.svg";

const Logo = () => {
  return <Image src={LogoImage} alt="Logo" />;
};

export default Logo;
