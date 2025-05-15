import { BreadcrumbEggs } from "@/components/Breadcrumb"
import Image from "next/image"

const BoilPage = () => {
  return (
    <section id="boil" className="bg-white/85">
        <div className="container mt-[80px]">
            <BreadcrumbEggs title="วิธีต้มไข่ไม่ให้แตก" />
            <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: วิธีต้มไข่ไม่ให้แตก </h1>

            <div>
                <img src={'/images/info/boil3.png'} alt="ไข่ต้ม" className="w-full h-[300px] object-cover bg-center" />
                <div className="mx-5 my-10">
                    <h2 className="bg-[var(--main-color)] py-2 px-3 mb-3 text-center text-[18px] font-semibold w-[200px]">ก่อนต้มไข่</h2>
                    <ul className="list-none sm:list-disc sm:list-inside">
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--skineggboil)]">เลือกใช้ไข่เก่า</span>  
                            เนื่องจากไข่ใหม่จะมีช่องอากาศขนาดใหญ่กว่าไข่เก่า ทำให้เวลาต้มจะขยายตัวทำให้เปลือกแตกออกได้
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--skineggboil)]">นำไข่ออกมาวางไว้ที่อุณหภูมิห้องก่อนต้ม</span> 
                            เนื่องจากไข่ที่เย็นจัด เมื่อนำลงไปในน้ำร้อน อุณหภูมิที่เปลี่ยนแปลงกะทันหันจะทำให้เปลือกแตก ควรปล่อยให้ไข่ได้อยู่ในน้ำอุ่น ๆ ก่อนประมาณ 10 - 15 นาที 
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--skineggboil)]">เจาะเปลือกไข่ด้านล่างให้เป็นรูเล็ก ๆ </span>
                            จะช่วยระบายอากาศในระหว่างต้มออกจากไข่ และลดแรงดันภายในไข่ ป้องกันการแตกได้
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src={'/images/info/boil4.png'} alt="ไข่ต้ม" width={900} height={500} className="w-full h-auto object-cover" />
                </div>
                <div className="mx-5 my-10">
                    <h2 className="bg-[var(--main-color)] py-2 px-3 mb-3 text-center text-[18px] font-semibold w-[200px]">ระหว่างต้มไข่</h2>
                    <ul className="list-none sm:list-disc sm:list-inside">
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--main-color)]">เติมเกลือลงในน้ำ ประมาณ 1 ช้อนชา</span>  
                             จะช่วยให้ไข่ขาวเกาะตัวกันแน่นขึ้น ป้องกันไม่ให้ไข่รั่วไหลออกมาหากเปลือกแตก
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--main-color)]">เริ่มต้มไข่จากน้ำเย็น</span> 
                             โดยใส่ไข่ลงในหม้อที่มีน้ำเย็นก่อน จากนั้นเปิดไฟอ่อนค่อย ๆ รอให้น้ำเดือดอย่างช้า ๆ และไม่ควรเติมน้ำลงไปในระหว่างต้ม
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--main-color)]">ต้มด้วยไฟอ่อนไปเรื่อย ๆ </span>
                             หลังจากที่น้ำเริ่มเดือดแล้วลดไฟให้เบาลง ต้มต่อจนครบเวลาตามที่ต้องการ เพราะการใช้ไฟแรงต้มไข่จะยิ่งทำให้เปลือกแตกง่ายขึ้น
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--main-color)]">เติมเบกกิ้งโซดา หรือน้ำส้มสายชูลงไปเล็กน้อย </span>
                             ประมาณ 1/2 - 1 ช้อนชา จะช่วยให้ไข่ขาวเกาะตัวกันแน่นขึ้น
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 bg-[var(--main-color)]">ไม่ใส่ไข่ลงไปต้มในหม้อจนแน่นเกินไป </span>
                             ควรใส่ลงไปต้มเพียงชั้นเดียว เพื่อไม่ให้ไข่ชนกันจนเปลือกแตก
                        </li>
                    </ul>
                </div>

                <div>
                    <Image src={'/images/info/boil5.png'} alt="ไข่ต้ม" width={900} height={500} className="w-full h-auto object-cover" />
                </div>
                <div className="mx-5 my-10">
                    <h2 className="bg-[var(--main-color)] py-2 px-3 mb-3 text-center text-[18px] font-semibold w-[200px]">เคล็ดลับในการต้มไข่</h2>
                    <ul className="list-disc list-inside">
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 text-[var(--highlight2)] text-shadow-[var(--main-color)]">ต้มไข่ 2 นาที :</span>  
                             “ไข่ลวก” ไข่ขาวยังไม่สุกดีนัก และไข่แดงก็ยังดิบอยู่
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 text-[var(--highlight2)] text-shadow-[var(--main-color)]">ต้มไข่ 4 นาที :</span> 
                             “ไข่ต้มยางมะตูม” ไข่ขาวสุกเริ่มดีแล้ว ในขณะที่ไข่แดงก็ยังกึ่งสุกกึ่งดิบและเหลวอยู่  
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 text-[var(--highlight2)] text-shadow-[var(--main-color)]">ต้มไข่ 6 นาที : </span>
                             ไข่ขาวสุกเต็มที่ และไข่แดงก็เกือบจะสุกแล้ว แต่บริเวณกึ่งกลางยังเหนียวอยู่เล็กน้อย
                        </li>
                        <li className="my-3">
                            <span className="inline-block px-3 mr-3 text-[var(--highlight2)] text-shadow-[var(--main-color)]">ต้มไข่ 10 นาที : </span>
                             “ไข่สุก” ทั้งไข่ขาวและไข่แดงสุกเต็มที่
                        </li>
                    </ul>
                </div>
                <div className="mx-auto w-full sm:w-[70%] bg-[var(--highlight2)]/75 py-3 px-5">
                    <h2 className=" text-center text-[18px] font-semibold text-[var(--main-color)] text-shadow">เคล็ดลับปลอกเปลือกไข่ต้มง่ายๆ</h2>
                    <ul className="list-disc list-inside">
                        <li className="my-3">ทำให้ไข่เย็นลงทันทีหลังต้ม โดยนำไข่ใส่ลงในอ่างที่มีน้ำผสมน้ำแข็งทิ้งไว้ประมาณ 10-15 นาที จะช่วยให้ไข่แกะเปลือกได้ง่ายขึ้น</li>
                        <li className="my-3">คลึงไข่ต้มที่พักไว้จนเย็นแล้วเบา ๆ จะช่วยให้เปลือกไข่ค่อย ๆ แตกออกและปอกได้ง่ายขึ้น</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
export default BoilPage