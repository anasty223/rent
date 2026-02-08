import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import Button from "../ui/Button";
import ContactInfo from "./ContactInfo";

const Header = () => {
  return (
    <div className="w-full min-h-screen flex ">
      {/* Фон на всю ширину */}
      <div className="flex w-full  max-h-[135px]">
        {/* Левая половина */}
        <div className="w-1/2 bg-white"></div>
        {/* Правая половина */}
        <div className="w-1/2 bg-[#2b7af1]  dark:bg-black"></div>
      </div>

      {/* Контент ограничен 1440px и центрирован */}
      <div className="absolute inset-0 flex justify-center  max-h-[135px]">
        <div className="flex w-full max-w-[1440px] px-10 py-[25px]">
          {/* Левая часть контента */}
          <div className="w-1/2 flex items-center gap-[54px]">
      <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
        <Navigation />
          </div>

          {/* Правая часть контента */}
          <div className="w-1/2 flex items-center justify-end gap-6">
       <ContactInfo />
      <Button variant="secondary">Заказать звонок</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
