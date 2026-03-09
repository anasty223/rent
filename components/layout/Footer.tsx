const Footer = () => {
  return (
    <footer
      className="relative w-full flex flex-col items-center dark:bg-black overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/Copyright.png)' }}
    >
      <div className="w-full h-[557px] flex items-end justify-center">
        <div className="w-full   py-[20px] h-[70px] bg-[rgba(17,17,17,0.8)]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[80px]">  <p className="text-white text-[14px] font-normal">
            © Copyright 2021, «Домашняя гостиница»
          </p>
          <p className="text-white text-[14px] font-normal text-center">
            Пользовательское соглашение
          </p></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
