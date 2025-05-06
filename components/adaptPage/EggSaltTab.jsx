
import { Egg, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const EggSaltTab = () => {
  return (
    <div className="p-5">

        <h1 className="font-bold text-[20px] mx-2 flex">
            <Egg fill="#c73406" color="white" /> ไข่เค็ม <Egg fill="#c73406" color="white" />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
            <div className="p-2"> <Image src={'/images/info/salt/salthead.jpg'} alt="ไข่เค็ม" width={300} height={300} className={'w-full object-cover rounded-md'} priority /> </div>
            <div className="p-2">
                <h2 className="font-bold text-[18px] underline decoration-wavy decoration-amber-400">อุปกรณ์</h2>
                
                <div className="grid grid-cols-2 gap-2 mt-3">
                    <div> - ไข่เป็ด </div>
                    <div> - น้ำเปล่า </div>
                    <div> - น้ำส้มสายชู </div>
                    <div> - เกลือป่น </div>
                    <div> - ขวดโหล </div>
                    <div> - ชามกระเบื้อง </div>
                    <div> - ตะกร้า </div>
                </div>
            </div>
        </div>
        <div className="mx-2 my-4">
            <h2 className="font-bold text-[18px] underline decoration-wavy decoration-amber-400 mb-5">วิธีทำ</h2>
            <div>
                
                <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] lg:grid-cols-[20%_80%] gap-5 justify-center items-center my-2">
                    <div className="flex justify-center items-center"><Image src={'/images/info/salt/salt1.jpg'} alt="วิธีการทำไข่เค็ม 1" width={200} height={100} className="rounded-[40px] object-cover" priority /></div>
                    <div className="sm:p-5 flex">
                        <span><Egg fill="#c73406" color="white" className="w-[24px] h-[24px]" /></span> 
                        <p>1. นำไข่เป็ด ( แนะนำให้ใช้ไข่เป็ดไล่ทุ่ง ชนิดเบอร์ 0/ขนาดใหญ่สุด) 
                        เพื่อจะได้คุณภาพของไข่แดงใหญ่ สีสดสวย  จำนวนฟองตามแต่ต้องการ  
                        มาล้างทำความสะอาดในน้ำเปล่า ให้สะอาดปราศจากสิ่งปนเปื้อนใด ๆ</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] lg:grid-cols-[20%_80%] gap-5 justify-center items-center my-2">
                    <div className="flex justify-center items-center"><Image src={'/images/info/salt/salt2.jpg'} alt="วิธีการทำไข่เค็ม 2" width={200} height={100} className="rounded-[40px] object-cover" priority /></div>
                    <div className="sm:p-5 flex">
                        <span><Egg fill="#c73406" color="white" className="w-[24px] h-[24px]" /></span> 
                        <p>2. นำไข่เป็ดที่ล้างสะอาดแล้ว ผึ่งในตะกร้าให้แห้ง</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] lg:grid-cols-[20%_80%] gap-5 justify-center items-center my-2">
                    <div className="flex justify-center items-center"><Image src={'/images/info/salt/salt3.jpg'} alt="วิธีการทำไข่เค็ม 3" width={200} height={100} className="rounded-[40px] object-cover" priority /></div>
                    <div className="sm:p-5 flex">
                        <span><Egg fill="#c73406" color="white" className="w-[24px] h-[24px]" /></span> 
                        <p>3. นำไข่เป็ดที่แห้งแล้วมาจัดวางเรียงไว้ในภาชนะประเภทกระเบื้องเคลือบ 
                          แล้วเทน้ำส้มสายชูลงไป ให้ท่วมไข่ แช่ทิ้งไว้ประมาณ    5-10 นาที  
                          เพื่อให้เปลือกไข่อ่อนนุ่ม  เกลือป่นสามารถดูดซึมเข้าสู่ลูกไข่ได้โดยง่าย</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] lg:grid-cols-[20%_80%] gap-5 justify-center items-center my-2">
                    <div className="flex justify-center items-center"><Image src={'/images/info/salt/salt4.jpg'} alt="วิธีการทำไข่เค็ม 4" width={200} height={100} className="rounded-[40px] object-cover" priority /></div>
                    <div className="sm:p-5 flex">
                        <span><Egg fill="#c73406" color="white" className="w-[24px] h-[24px]" /></span> 
                        <p>4. นำไข่เป็ดมาพอกด้วยเกลือป่น คลุกเคล้าให้ทั่วทั้งใบ</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] lg:grid-cols-[20%_80%] gap-5 justify-center items-center my-2">
                    <div className="flex justify-center items-center"><Image src={'/images/info/salt/salt5.jpg'} alt="วิธีการทำไข่เค็ม 5" width={200} height={100} className="rounded-[40px] object-cover" priority /></div>
                    <div className="sm:p-5 flex">
                        <span><Egg fill="#c73406" color="white" className="w-[24px] h-[24px]" /></span> 
                        <p>5. จัดวางเรียงไว้ในโหลแก้ว ปิดฝาให้สนิท  ทิ้งไว้ประมาณ  5- 7 วัน</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] lg:grid-cols-[20%_80%] gap-5 justify-center items-center my-2">
                    <div className="flex justify-center items-center"><Image src={'/images/info/salt/salt6.jpg'} alt="วิธีการทำไข่เค็ม 6" width={200} height={100} className="rounded-[40px] object-cover" priority /></div>
                    <div className="sm:p-5 flex">
                        <span><Egg fill="#c73406" color="white" className="w-[24px] h-[24px]" /></span> 
                        <p>6. เมื่อครบกำหนด  5 วัน สามารถนำมาทอดเป็นไข่ดาวได้ และเมื่อครบกำหนด  7  วัน 
                          ให้นำมาต้ม ใช้เวลาต้มประมาณ 10 นาที จะได้ไข่เค็มที่เนื้อไข่ขาวนุ่ม ไข่แดงสีสันสดสวย รสชาติอร่อย น่ารับประทาน.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="text-right mt-5 text-[12px]">
            <h6 className="text-[var(--highlight)] font-bold">ข้อมูลอ้างอิง ::</h6>
            <p>
            <Link href={'http://www.snc.lib.su.ac.th/kmblog/?p=1377'} target="_blank" className="underline hover:text-[var(--highlight)]">
            การถนอมอาหาร(ไข่เค็มพอกเกลือ)
            </Link>
            </p>
        </div>
    </div>
  )
}
export default EggSaltTab