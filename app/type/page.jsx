import { Egg } from "lucide-react"
import Link from "next/link"

const TypePage = () => {
  return (
    <section  id="type" className="bg-white/85">
        <div className="container mt-[80px]">
            <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: ไข่แต่ละชนิด </h1>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-[var(--main-color)] p-5 mb-8 rounded-md">
                    <div className="flex justify-center items-center">
                        <img src="/images/info/type_egg1.jpg" alt="ไข่ไก่" className="rounded-md w-[300px] h-[200px] object-cover" />
                    </div>
                    <div className="mb-5 mx-3">
                        <h3 className="font-bold flex underline decoration-amber-500 decoration-wavy text-[20px] mb-2"><Egg fill="#dd9372" color="#f1cbb5" /> ไข่ไก่  </h3>
                        <p className="indent-5">
                        ไข่ที่ขายกันอยู่ตามท้องตลาดวัดราคาขายกันตามขนาด ไล่จากไข่ใหญ่ไปไข่เล็ก มีตั้งแต่เบอร์ 0, 1, 2, 3, 4, 5 หรือเล็กกว่านั้น ดูแต่ตาอาจจะต่างกันไม่มาก ดังนั้น การจะปะเบอร์ให้กับไข่จึงต้องมีมาตรฐานสากล
                        </p>
                        <ul>
                            <li>
                                <span className="font-bold underline underline-offset-4 decoration-2 inline-block mr-2"> เบอร์ 0 </span> คือ ไข่ยักษ์จัมโบ้ มีน้ำหนักขั้นต่ำต่อฟอง 70 กรัมขึ้นไป
                            </li>
                            <li>
                                <span className="font-bold underline underline-offset-4 decoration-2 inline-block mr-2"> เบอร์ 1 </span> คือ ไข่ใหญ่พิเศษ มีน้ำหนักขั้นต่ำต่อฟอง 65-69 กรัม
                            </li>
                            <li>
                                <span className="font-bold underline underline-offset-4 decoration-2 inline-block mr-2"> เบอร์ 2 </span> คือ ไข่ใหญ่ มีน้ำหนักขั้นต่ำต่อฟอง 60-64 กรัม
                            </li>
                            <li>
                                <span className="font-bold underline underline-offset-4 decoration-2 inline-block mr-2"> เบอร์ 3 </span> คือ ไข่กลาง มีน้ำหนักขั้นต่ำต่อฟอง 55-59 กรัม
                            </li>
                            <li>
                                <span className="font-bold underline underline-offset-4 decoration-2 inline-block mr-2"> เบอร์ 4 </span> คือ ไข่เล็ก มีน้ำหนักขั้นต่ำต่อฟอง 50-54 กรัม
                            </li>
                            <li>
                                <span className="font-bold underline underline-offset-4 decoration-2 inline-block mr-2"> เบอร์ 5 </span> คือ ไข่จิ๋ว มีน้ำหนักขั้นต่ำต่อฟอง 45-49 กรัม
                            </li>
                        </ul>
                        <span className="bg-[var(--skinegg)] text-[var(--highlight2)] inline-block px-3 py-1 mt-2 rounded-md">ปริมาณคอเลสเตอรอล = 212 มิลลิกรัม / 1 ฟอง</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-5 mb-8 rounded-md">
                    <div className="flex justify-center items-center">
                        <img src="/images/info/type_egg3.jpg" alt="ไข่ไก่ Cage Free" className="rounded-md w-[300px] h-[200px] object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold flex underline decoration-amber-500 decoration-wavy text-[20px] mb-2"><Egg fill="#dd9372" color="#f1cbb5" /> ไข่ไก่ Cage Free </h3>
                        <p className="indent-5">
                        เป็นไข่ไก่ปลอดสารพิษ โดยจะเลี้ยงแบบยืนกรง ควบคุมอาหาร เป็นที่นิยมมากสำหรับการนำมากินกับชาบู เพราะไข่ไก่ประเภทนี้ สามารถรับประทานแบบดิบได้
                        </p>
                        <span className="bg-[var(--skinegg)] text-[var(--highlight2)] inline-block px-3 py-1 mt-2 rounded-md">ปริมาณคอเลสเตอรอล = 212 มิลลิกรัม / 1 ฟอง</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-[var(--main-color)] p-5 mb-8 rounded-md">
                    <div className="flex justify-center items-center">
                        <img src="/images/info/type_egg2.jpg" alt="ไข่เป็ด" className="rounded-md w-[300px] h-[200px] object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold flex underline decoration-amber-500 decoration-wavy text-[20px] mb-2"><Egg fill="#dd9372" color="#f1cbb5" /> ไข่เป็ด </h3>
                        <p className="indent-5">
                        อาจจะไม่นิยมมากนักในคนไทย เพราะส่วนใหญ่จะมีไข่ไก่ขายในท้องตลาดมากกว่า มีลักษณะข้นกว่า สีของไข่แดงจะเข้มกว่าไข่ไก่มาก หากนำมาทำขนมไทย จะได้ความข้นหนืดกว่าไข่ไก่
                        </p>
                        <span className="bg-[var(--skinegg)] text-[var(--highlight2)] inline-block px-3 py-1 mt-2 rounded-md">ปริมาณคอเลสเตอรอล = 250 มิลลิกรัม / 1 ฟอง</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-5 mb-8 rounded-md">
                    <div className="flex justify-center items-center">
                        <img src="/images/info/type_egg6.jpg" alt="ไข่นกกระทา" className="rounded-md w-[300px] h-[200px] object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold flex underline decoration-amber-500 decoration-wavy text-[20px] mb-2"><Egg fill="#dd9372" color="#f1cbb5" /> ไข่นกกระทา </h3>
                        <p className="indent-5">
                        เป็นไข่ที่หาซื้อได้ไม่ง่ายนัก มีลักษณะเล็ก เปลือกมีสีด่าง ดำสลับขาว สามารถนำมาประกอบอาหารได้เหมือนไข่เป็ด หรือไข่ไก่เลย ทำเป็นอาหารเช้ากินกับขนมปังก็ยิ่งดี
                        </p>
                        <span className="bg-[var(--skinegg)] text-[var(--highlight2)] inline-block px-3 py-1 mt-2 rounded-md">ปริมาณคอเลสเตอรอล = 50 มิลลิกรัม / 1 ฟอง</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-[var(--main-color)] p-5 mb-8 rounded-md">
                    <div className="flex justify-center items-center">
                        <img src="/images/info/type_egg5.jpg" alt="ไข่เค็ม" className="rounded-md w-[300px] h-[200px] object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold flex underline decoration-amber-500 decoration-wavy text-[20px] mb-2"><Egg fill="#dd9372" color="#f1cbb5" /> ไข่เค็ม </h3>
                        <p className="indent-5">
                        ทำมาจากไข่เป็ด การทำไข่เค็มถือเป็นการถนอมอาหารอย่างหนึ่ง โดยนำไปแช่ในน้ำเกลือ หรือนำไปพอกด้วยวัสดุผสมเกลือ โดยความเค็มนั้นขึ้นอยู่กับระยะเวลาที่บ่ม
                        </p>
                        <span className="bg-[var(--skinegg)] text-[var(--highlight2)] inline-block px-3 py-1 mt-2 rounded-md">ปริมาณคอเลสเตอรอล = 250 มิลลิกรัม / 1 ฟอง</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-5 mb-8 rounded-md">
                    <div className="flex justify-center items-center">
                        <img src="/images/info/type_egg4.jpg" alt="ไข่เยี่ยวม้า" className="rounded-md w-[300px] h-[200px] object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold flex underline decoration-amber-500 decoration-wavy text-[20px] mb-2"><Egg fill="#dd9372" color="#f1cbb5" /> ไข่เยี่ยวม้า </h3>
                        <p className="indent-5">
                        เป็นอีกหนึ่งการถนอมอาหารจากไข่ โดยการนำไปพอกด้วยปูนขาวผสมใบชา เกลือป่น และขี้เถ้า ไข่ขาวจะมีลักษณะสีดำใส รสสัมผัสเหมือนวุ้น ตัวไข่แดงเป็นสีดำเข้ม นิยมนำมาใส่โจ๊กหรือผัดกระเพราไข่เยี่ยวม้า
                        </p>
                        <span className="bg-[var(--skinegg)] text-[var(--highlight2)] inline-block px-3 py-1 mt-2 rounded-md">ปริมาณคอเลสเตอรอล = 250 มิลลิกรัม / 1 ฟอง</span>
                    </div>
                </div>
                
            </div> 

            <div className="text-right mt-5 text-[12px]">
                <h6 className="text-[var(--highlight)] font-bold">ข้อมูลอ้างอิง ::</h6>
                <p>
                    <Link href={'https://salehere.co.th/articles/kind-of-egg'} target="_blank" className="underline hover:text-[var(--highlight)]">
                    ทำความรู้จัก ไข่แต่ละชนิด
                    </Link>
                
                </p>
                <p>
                    <Link href={'https://www.greenery.org/g101-egg/'} target="_blank" className="underline hover:text-[var(--highlight)]">
                    เรียงตามลำดับไข่
                    </Link>
                
                </p>
            </div>
            
        </div>
    </section>
  )
}
export default TypePage