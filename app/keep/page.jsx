import { Egg, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const KeepPage = () => {
  return (
    <section id="type" className="bg-white/85">
        <div className="container mt-[80px]">
            <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: การเก็บไข่สดให้อยู่ได้นาน </h1>
            <Image src={'/images/info/keep.jpg'} alt="การเก็บไข่สดให้อยู่ได้นาน" width={900} height={500} className="w-full h-auto object-cover bg-bottom" />
        
            <div className="my-10 w-full md:w-[80%] mx-auto">
                <div className="flex my-3 px-5">
                    <span className="flex mr-3"><Heart fill="yellow" color="#e09d5d" /><Egg fill="#e09d5d" color="#e09d5d" /></span>
                    <p>ไม่ควรล้างไข่ก่อนนำไปเก็บ เพราะจะทำให้สารเคลือบผิวที่รักษาความสดของไข่ถูกทำลายได้</p>
                </div>
                <div className="flex my-3 px-5">
                    <span className="flex mr-3"><Heart fill="yellow" color="#e09d5d" /><Egg fill="#e09d5d" color="#e09d5d" /></span>
                    <p>ควรนำไข่ไปเก็บในที่ที่มีอุณหภูมิต่ำ เช่น ในตู้เย็น โดยให้ด้านป้านอยู่ด้านบน เพราะด้านป้านจะมีฟองอากาศอยู่ภายใน พอพลิกขึ้นด้านบน จะทำให้ไข่แดงไม่แตกเร็ว สามารถช่วยให้ไข่เก็บไว้ได้นานขึ้น</p>
                </div>
                <div className="flex my-3 px-5">
                    <span className="flex mr-3"><Heart fill="yellow" color="#e09d5d" /><Egg fill="#e09d5d" color="#e09d5d" /></span>
                    <p>ควรเก็บไข่ไว้ในช่องวางไข่ เพื่อป้องกันการกระทบกระเทือน และป้องกันการระเหยของน้ำออกจากไข่</p>
                </div>
                <div className="flex my-3 px-5">
                    <span className="flex mr-3"><Heart fill="yellow" color="#e09d5d" /><Egg fill="#e09d5d" color="#e09d5d" /></span>
                    <p>หากพบว่าไข่มีรอยร้าวหรือแตกไม่ควรปล่อยทิ้งไว้ เพราะเชื้อโรคที่เปลือกไข่อาจเข้าไปในไข่ได้ ควรตอกใส่ภาชนะที่มีฝาปิดสนิทแล้วแช่ตู้เย็นจะทำให้เก็บได้นานขึ้น</p>
                </div>
            </div>

            <div className="text-right mt-5 text-[12px]">
                <h6 className="text-[var(--highlight)] font-bold">ข้อมูลอ้างอิง ::</h6>
                <p>
                    <Link href={'https://www.maggi.co.th/kitchen-tips/how-to-keep-eggs-fresh'} target="_blank" className="underline hover:text-[var(--highlight)]">
                    4 วิธีเก็บไข่สดให้อยู่ได้นาน สำหรับแม่บ้านมือใหม่
                    </Link>
                
                </p>
            </div>
        </div>
    </section>
  )
}
export default KeepPage