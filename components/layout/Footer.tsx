import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center dark:bg-black overflow-hidden">
      <div className="relative w-full h-[557px]">
       
        <Image
          src="/images/Copyright.png"
          alt="Footer background"
          fill
          className="object-cover object-center " // opacity по желанию
          priority
        />


        <div className="relative z-10 w-full max-w-[1440px] mx-auto  flex items-end px-[80px] pb-[40px] h-[70px] bg-[rgba(17,17,17,0.8)] ">
          <p className="text-white text-[14px] font-normal">
            © Copyright 2021, «Домашняя гостиница»
          </p>
          <div className="flex-1" />
          <p className="text-white text-[14px] font-normal text-center flex-1">
            Пользовательское соглашение
          </p>
          <div className="flex-1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
