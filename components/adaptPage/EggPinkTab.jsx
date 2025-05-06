import { Egg, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const EggPinkTab = () => {
  return (
    <div className="p-5">

        <h1 className="font-bold text-[20px] mx-2 flex text-[#ac8729]">
            <Egg fill={'var(--pink)'} color={'var(--pink)'} /> ไข่เยี่ยวม้า <Egg fill={'var(--pink)'} color={'var(--pink)'} />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
            <div className="p-2"> <Image src={'/images/info/pink.png'} alt="ไข่เยี่ยวม้า" width={300} height={300} className={'w-full object-cover rounded-md'} priority /> </div>
            <div className="p-2">
                <h2 className=" text-[#ac8729] font-bold text-[18px] underline decoration-wavy decoration-amber-400">อุปกรณ์</h2>
                <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className=" text-amber-100"> - ไข่เป็ด </div>
                    <div className=" text-amber-100"> - น้ำเปล่า </div>
                    <div className=" text-amber-100"> - เกลือป่น </div>
                    <div className=" text-amber-100"> - ถุงมือ </div>
                    <div className=" text-amber-100"> - ตะแกรง </div>
                    <div className=" text-amber-100"> - ปูนขาว </div>
                    <div className=" text-amber-100"> - ใบชาดำ </div>
                    <div className=" text-amber-100"> - ไม้พายสำหรับคน </div>
                    <div className=" text-amber-100"> - โหล (สำหรับดองไข่) </div>
                    <div className=" text-amber-100"> - โซเดียมคาร์บอเนต หรือโซดาเอช </div>
                    <div className=" text-amber-100"> - สังกะสีออกไซด์ (ใส่หรือไม่ใส่ก็ได้) </div>
                    <div className=" text-amber-100"> - หม้อเคลือบสำหรับต้ม (ใช้หม้อที่ใส่แกงอลูมิเนียมไม่ได้ เพราะมันจะทำปฏิกิริยากับพวกโซดาเอช)  </div>
                </div>
            </div>
        </div>
        <div className="mx-2 my-4 ">
            <h2 className="text-[#ac8729] font-bold text-[18px] underline decoration-wavy decoration-amber-400 mb-5">วิธีทำ</h2>
            <div>
              <div className="py-3 sm:p-4 flex ">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">1. นำน้ำใส่หม้อ </p>
              </div>

              <div className="py-3 sm:p-4 flex">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">2. เทเกลือ,โซเดียมคาร์บอเนต,ปูนขาว,ใบชาดำ (ระหว่างผสมวัตถุดิบให้ใส่ถุงมือค่ะ) 
                  เมื่อเททุกอย่างลงไปแล้ว ยกเว้น สังกะสีออกไซด์ จะใส่ทีหลังสุด คนทุกอย่างให้เข้ากันก่อนนำไปตั้งไฟ </p>
              </div>

              <div className="py-3 sm:p-4 flex">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">3. นำหม้อไปตั้งไฟ ใช้ไฟอ่อน แล้วคอยคนจนปูนขาวละลาย เมื่อน้ำเดือด ตั้งไฟอ่อน ๆ ต่ออีก 20 นาที  </p>
              </div>

              <div className="py-3 sm:p-4 flex">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">4. เมื่อครบ20 นาทีปิดเตา แล้วพักไว้ให้เย็น </p>
              </div>

              <div className="py-3 sm:p-4 flex">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">5. ระหว่างรอให้น้ำเย็น นำไข่เป็ดมาล้างทำความสะอาด แล้วผึ่งลมให้แห้ง แล้วนำมาเรียงใส่ขวดโหล </p>
              </div>

              <div className="py-3 sm:p-4 flex">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">6. เมื่อน้ำที่ต้มส่วนผสมเย็นแล้ว ให้นำมากรองเอาใบชาออก ก็จะได้น้ำสีชา ใส่สังกะสีออกไซด์ ลงไปคนให้ละลาย </p>
              </div>

              <div className="py-3 sm:p-4 flex">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">7. เทน้ำดองไข่ใส่ไปในโหลที่มีไข่เตรียมไว้ เคล็ดลับก่อนการปิดฝา ให้น้ำถุงแกง ใส่น้ำสะอาด แล้วมัดปากถุงให้แน่น 
                  นำมาทับด้านบนเผื่อไม่ให้ไข่ลอย ใช้เวลาดองสำหรับไข่ไก่ 20-25 วัน. ส่วนไข่เป็ดนั้น 30 วัน เพราะไข่เป็ดเปลือกหนากว่าไข่ไก่ </p>
              </div>

              <div className="py-3 sm:p-4 flex">
                <span><Egg fill="#fb4556" color="#fb4556" className="w-[24px] h-[24px]" /></span> 
                <p className=" text-amber-100">8. เมื่อครบตามจำนวนวันแล้ว นำไข่ออกจากโหลมาล้างให้สะอาด แล้วเรียงใส่หม้อต้ม คราวนี้ใช้หม้ออะไรก็ได้ 
                  ใส่น้ำสะอาดให้ท่วมไข่ เปิดเตาต้มน้ำพอน้ำเดือด เริ่มจับเวลาในการต้ม 6 นาที หรือถ้ากลัวไม่สุกก็เพิ่มเวลาได้เป็น 7-8 นาทีก็จะได้ไข่เค็มตามที่ต้องการ </p>
              </div>

            </div>
        </div>


        <div className="text-right mt-5 text-[12px]">
            <h6 className="text-[var(--highlight)] font-bold">ข้อมูลอ้างอิง ::</h6>
            <p>
            <Link href={'https://food.trueid.net/detail/j6pMkNJeXeM5'} target="_blank" className="underline hover:text-[var(--highlight)]">
            ไข่เยี่ยวม้าทำง่าย อร่อยด้วย
            </Link>
            </p>
        </div>
    </div>
  )
}
export default EggPinkTab