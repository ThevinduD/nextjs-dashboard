import { lusitana } from "@/app/ui/fonts";
import LogoImg from "./../../public/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src={LogoImg} alt="logoImage" width={50} height={50} />
    </div>
  );
}
