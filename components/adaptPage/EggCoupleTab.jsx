import { Egg } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const EggCoupleTab = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-[20px] mx-2 flex ">
          <Egg fill={'var(--krop)'} color={'var(--krop)'} /> ไข่ครอบ <Egg fill={'var(--krop)'} color={'var(--krop)'} />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
        <div className="p-2"> <Image src={'/images/info/krop.png'} alt="ไข่เยี่ยวม้า" width={300} height={300} className={'w-full object-cover rounded-md'} priority /> </div>
        <div className="p-2">
          <h2 className=" font-bold text-[18px] underline decoration-wavy decoration-amber-400">อุปกรณ์</h2>
          <div className="grid grid-cols-2 gap-2 mt-3">
              <div> - ไข่แดง (ไข่เป็ด) </div>
              <div> - น้ำเปล่า </div>
              <div> - เกลือ </div> 
          </div>
        </div>
      </div>  
      
      <div className="mx-2 my-4 ">
        <div>
          <h2 className=" font-bold text-[18px] underline decoration-wavy decoration-amber-400 mb-5">วิธีทำ</h2>
          <div className="py-3 sm:p-4 flex ">
            <span><Egg fill={'var(--krop)'} color={'var(--krop)'} className="w-[24px] h-[24px]" /></span> 
            <p>1. ละลายเกลือในน้ำอุ่น แล้วพักไว้ </p>
          </div>
          <div className="py-3 sm:p-4 flex ">
            <span><Egg fill={'var(--krop)'} color={'var(--krop)'} className="w-[24px] h-[24px]" /></span> 
            <p>1. ค่อยๆเคาะเปลือกไข่ให้แตกรอบๆ แกะเปลือกออก เทไข่ออกใส่ชามไว้ </p>
          </div>
          <div className="py-3 sm:p-4 flex ">
            <span><Egg fill={'var(--krop)'} color={'var(--krop)'} className="w-[24px] h-[24px]" /></span> 
            <p>1. แยกไข่แดงออกจากไข่ขาว ใส่ไข่แดงลงในน้ำเกลือที่ละลายไว้ แช่ไว้ 1 ชั่วไมง </p>
          </div>
          <div className="py-3 sm:p-4 flex ">
            <span><Egg fill={'var(--krop)'} color={'var(--krop)'} className="w-[24px] h-[24px]" /></span> 
            <p>1. ล้างเปลือกไข่ให้สะอาด ตัดแต่งขอบเปลือกไข่ แล้วคว่ำพักให้แห้ง </p>
          </div>
          <div className="py-3 sm:p-4 flex ">
            <span><Egg fill={'var(--krop)'} color={'var(--krop)'} className="w-[24px] h-[24px]" /></span> 
            <p>1. ค่อยๆช้อนเอาไข่แดงขึ้นจากน้ำเกลือ แล้วหยอดลงในเปลือกไข่ เปลือกไข่ 1 เปลือก ใส่ไข่แดง 2 ฟอง วางบนถ้วยตะไล ผึ่งไว้ต่ออก 1 ชั่วโมง </p>
          </div>
          <div className="py-3 sm:p-4 flex ">
            <span><Egg fill={'var(--krop)'} color={'var(--krop)'} className="w-[24px] h-[24px]" /></span> 
            <p>1. ตั้งลังถึงให้น้ำเดือด ใส่ไข่ครอบลงนึ่งน้ำเดือด 6-7 นาที จากนั้นยกลงเป็นอันเสร็จเรียบร้อย </p>
          </div>
        </div>

        <div className="text-right mt-5 text-[12px]">
            <h6 className="text-[var(--highlight)] font-bold">ข้อมูลอ้างอิง ::</h6>
            <p>
            <Link href={'https://www.khaosod.co.th/technologychaoban/techno-news/article_295263'} target="_blank" className="underline hover:text-[var(--highlight)]">
            รู้จัก “ไข่ครอบ” วิธีการถนอมอาหารของภาคใต้ นุ่มลิ้นรสเค็มมัน
            </Link>
            </p>
        </div>
      </div>

        
    </div>
  )
}
export default EggCoupleTab