import Image from "next/image";
import Link from "next/link";
import LucianDev from "../../../public/lucian.svg";

export const Header = () => {
  return (
    <header className="xl:min-h-full w-full py-10 min-h-screen bg-gradient-to-t from-blue to-blueBold relative">
      <nav className="w-full">
        <ul className="list-none flex items-center justify-center gap-10 text-white text-small">
          <li>
            <Link href="#" className="hover:border-b-[1px] transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:border-b-[1px] transition-all">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:border-b-[1px] transition-all">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:border-b-[1px] transition-all">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:border-b-[1px] transition-all">
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col justify-center items-center mt-20">
        <Image src={LucianDev} alt="Ilustration Luciano Garcia" />
        <h1 className="flex flex-col text-center text-titles text-white">
          Olá, eu sou Luciano Garcia{" "}
          <span className="text-semTitles">Web Developer</span>
        </h1>

        <div className="flex gap-10 mt-10">
          <Link
            href="#"
            className="text-semSmall bg-gradient-to-r from-white to-whiteG block w-36 text-center py-2 text-black border-l-8  border-b-8 border-black rounded"
          >
            Download CV
          </Link>
          <Link
            href="contato"
            className="text-semSmall bg-gradient-to-r from-black to-blackG block w-36 text-center py-2 text-white border-r-8 border-b-8 border-white rounded"
          >
            Contato
          </Link>
        </div>
      </div>

      <div className="w-full px-20 flex items-center justify-between absolute top-[-80px]">
        <div className="w-20 h-20 block bg-white"></div>
        <div className="w-20 h-20 block bg-white"></div>
        <div className="w-20 h-20 block bg-white"></div>
        <div className="w-20 h-20 block bg-white"></div>
        <div className="w-20 h-20 block bg-white"></div>
      </div>
    </header>
  );
};
