import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="flex gap-4 items-center text-sm text-gray-700">
      <a href="tel:+71234567890" className="flex items-center gap-[10px] justify-center">
        <div className="flex items-center justify-center bg-white p-1 rounded-full w-[40px] h-[40px]">
          <Image src="/images/Phone_Icon.png" alt="phone" width={20} height={20} />
        </div>
        <span className="text-white text-[16px] font-[400]">+4 (123) 456-78-90</span> 
      </a>
      <a href="mailto:info@example.com" className="flex items-center gap-[10px] justify-center] ">
       <div className="flex items-center justify-center bg-white p-1 rounded-full w-[40px] h-[40px]">
         <Image src="/images/Group.png" alt="email" width={20} height={20} />
       </div>   <span className="text-white text-[16px] font-[400]">mail@yandex.ru</span>
      </a>
    </div>
  );
}   