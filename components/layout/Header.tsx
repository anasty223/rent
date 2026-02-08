import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full min-h-screen flex ">
      {/* Фон на всю ширину */}
      <div className="flex w-full  max-h-[135px]">
        {/* Левая половина */}
        <div className="w-1/2 bg-white"></div>
        {/* Правая половина */}
        <div className="w-1/2 bg-blue-600  dark:bg-black"></div>
      </div>

      {/* Контент ограничен 1440px и центрирован */}
      <div className="absolute inset-0 flex justify-center  max-h-[135px]">
        <div className="flex w-full max-w-[1440px] px-10 py-[25px]">
          {/* Левая часть контента */}
          <div className="w-1/2 flex items-start">
      <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
          </div>

          {/* Правая часть контента */}
          <div className="w-1/2 flex items-start">
            Тут контент справа
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
