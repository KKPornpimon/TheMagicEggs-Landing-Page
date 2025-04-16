import Image from "next/image"

const Hero = () => {
  return (
    <section className="h-[400px] w-full bg-transparent mt-[140px]">
      <div className="container sm:ps-[30px] flex flex-col items-center justify-center md:items-start md:justify-start">
        <div className="bg-[var(--main-color)] md:bg-transparent px-10 py-5 text-center rounded-2xl md:p-0 md:rounded-none md:text-left">
          <h1 className="
              text-shadow-amber-500 text-gray-600 text-shadow-md 
              text-4xl md:text-5xl lg:text-[55px] font-bold
          ">
            ไข่มหัศจรรย์
          </h1>
          <h2 className="indent-3 text-[20px] pt-3">สารพัดเมนูไข่ อร่อยดี มีประโยชน์</h2>
        </div>
        <img 
          src="/images/element/egg.gif" 
          alt="logo" 
          width={100} 
          height={100} 
          className="w-60 rounded-2xl object-cover mt-7"
        />
      </div>
    </section>
  )
}
export default Hero