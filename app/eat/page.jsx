import Image from "next/image"
import Link from "next/link"

const EatPage = () => {
  return (
    <section id="type" className="bg-white/85">
        <div className="container mt-[80px]">
            <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: กินไข่อย่างไรได้ประโยชน์ </h1>
            <div>
                <img src={'/images/info/eat_header.jpg'} alt="eating the egg" className="w-full h-[300px] object-cover" />

                <div className="p-4">            
                    <p className="indent-5 font-bold my-1 text-green-700 text-shadow-white">
                        <span className="text-[20px] text-[var(--main-color)]"> “ไข่” </span>
                        มักมีความสัมพันธ์กับอาหารเช้าและให้โปรตีนแก่ร่างกาย ไข่ขนาดใหญ่หนึ่งฟอง 
                        มีวิตามินและแร่ธาตุที่จำเป็น 13 ชนิดและโปรตีนคุณภาพสูงทั้งหมด 70 แคลอรี่
                    </p>
                    <p className="my-1 indent-5">
                        นั้นมีสารอาหาร 2 ชนิดที่สำคัญสำหรับสุขภาพสมอง ประกอบไปด้วย โคลีน และ ลูทีน 
                        โคลีนมีบทบาทในการพัฒนาสมองของทารกในช่วงแรกของการตั้งครรภ์ 
                        โดยเฉพาะอย่างยิ่งพื้นที่ในสมองที่ใช้สำหรับเป็นหน่วยความจำและสำหรับเรียนรู้ 
                        ในขณะเดียวกัน ลูทีนก็มีส่วนที่เกี่ยวข้องกับสุขภาพของดวงตาและมีบทบาทต่อการรับรู้ด้วยเช่นกัน 
                        <Link href={'https://www.incredibleegg.org/?site=b'} target="_blank">
                            <span className="text-green-700 hover:text-[var(--main-color)] underline"> อ้างอิงจากนักวิจัยของ University of Illinois </span> 
                        </Link>
                         
                        แสดงให้เห็นว่าความสัมพันธ์ระหว่างลูทีนในสมองโดยวัดจากการทดสอบสายตาที่ 
                        เรียกว่า Macular Pigment Optical Density (MPOD) และการรับรู้ในเด็ก 
                        นักวิจัยพบว่า MPOD มีความสัมพันธ์เชิงบวกกับผลการเรียน
                    </p>
                </div>

            {/* grid #1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 bg-[url(/images/info/eat_bg.jpg)] bg-cover bg-center">
                    <div className="p-4">
                        <h1 className="font-bold max-sm:text-[18px] md:text-[20px] pb-3 max-sm:text-[var(--main-color)]">การกินไข่ กับบุคคลทั่วไป </h1>
                        <div className="flex justify-center">
                            <Image src={'/images/info/eat3.png'} alt="การกินไข่ กับบุคคลทั่วไป" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-md" />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="indent-5">
                            ไข่อาจมีปริมาณคลอเลสเตอรอลค่อนข้างสูง แต่ไม่มีผลกระทบต่อระดับคอเลสเตอรอลในร่างกาย 
                        ไข่เป็นแหล่งโปรตีนที่มีคุณค่าทางโภชนาการสูง มีวิตามินและแร่ธาตุต่าง ๆ มากมายรวมไปถึง 
                        วิตามินเอ วิตามิน B และ B-12 วิตามินดี ไอโอดีน  โฟเลต โอเมก้า – 3  
                        อีกทั้ง “ไข่” ยังมีราคาไม่แพง หาซื้อง่าย และวิธีที่ดีที่สุดในการกินไข่คือการต้ม  
                        การรับประทานไข่วันละ 1-3 ฟอง มีประโยชน์ต่อสุขภาพหลายอย่าง 
                        แต่จะแตกต่างกันไปในแต่ละบุคคล
                        </p>
                    </div>
                </div>

            {/* grid #2 */}
                <div className="flex flex-col sm:flex-row-reverse sm:gap-5 bg-[url(/images/element/sw.jpg)] bg-bottom-left bg-cover">
                    <div className="p-4 sm:w-1/2">
                        <h1 className="font-bold max-sm:text-[18px] md:text-[20px] pb-3 text-[var(--highlight2)]">การกินไข่ กับโรคเบาหวานชนิดที่ 2   </h1>
                        <div className="flex justify-center">
                            <Image 
                                src={'/images/info/eat1.png'} 
                                alt="การกินไข่ สำหรับบุคคลเป็นโรคเบาหวานชนิดที่ 2" 
                                width={300} height={300}  
                                className="w-[300px] h-[300px] object-cover rounded-md" 
                            />
                        </div>
                    </div>
                    <div className="p-4 sm:w-1/2">
                        <p className="indent-5">
                        จากการศึกษาแบบสุ่มในผู้ที่มีภาวะ 
                        <Link href={'https://pubmed.ncbi.nlm.nih.gov/23021013/'} target="_blank">
                             <span className="text-green-700 hover:text-[var(--main-color)] underline mx-2">
                                metabolic syndrome 
                             </span> 
                        </Link>
                        
                         แสดงให้เห็นว่าผู้ที่บริโภคไข่ 3 ฟองต่อวัน 
                        ส่งผลให้มีความเปลี่ยนแปลงไปในทิศทางที่ดี ในเรื่องของ HDL-cholesterol, insulin sensitivity 
                        และอีกกรณีศึกษาเกี่ยวกับการลดน้ำหนักแบบควบคุมในผู้ที่เป็นโรคเบาหวานชนิดที่ 2 ได้รับการวินิจฉัยพบว่า 
                        ไขมันและกลูโคสดีขึ้นหลังจากบริโภคไข่วันละ 2 ฟองเป็นเวลา 12  สัปดาห์ อาหารเช้าที่ทำจากไข่อุดมไปด้วยโปรตีน 
                        (พลังงาน 35%; โปรตีนไข่ 26.1 กรัม) จะช่วยส่งเสริมการควบคุมระดับน้ำตาลในเลือดในผู้เป็นโรคเบาหวานชนิดที่ 2
                        </p>
                    </div>
                </div>

            {/* grid #3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 bg-[url(/images/info/eat_bg.jpg)] bg-cover bg-center">
                    <div className="p-4">
                        <h1 className="font-bold max-sm:text-[18px] md:text-[20px] pb-3 max-sm:text-[var(--main-color)]">การกินไข่ กับโรคอ้วน </h1>
                        <div className="flex justify-center">
                            <Image src={'/images/info/eat5.png'} alt="การกินไข่ กับบุคคลทั่วไป" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-md" />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="indent-5">
                            โรคอ้วนถือเป็นปัญหาสุขภาพที่เกิดได้จากหลายปัจจัยและซับซ้อน 
                            คำแนะนำในปัจจุบันสำหรับการควบคุมน้ำหนักคือการส่งเสริมการออกกำลังกายพร้อมกับการบริโภคอาหารเพื่อสุขภาพ 
                            โดยรวมถึงธัญพืช ผลไม้ ผัก โปรตีน และ ผลิตภัณฑ์นมไขมันต่ำหรือปราศจากไขมัน 
                            อีกทั้งบริโภคโปรตีนคุณภาพสูงจากไข่ที่ส่งผลต่อความอิ่ม ในขณะเดียวกันก็มีผลต่อการลดน้ำหนักด้วย 
                            ในวัยผู้ใหญ่ที่มีน้ำหนักเกิน เปรียบเทียบระหว่างผู้ที่นิยมรับประทานเบเกิล และไข่เป็นอาหารเช้า 
                            แสดงให้เห็นว่าผู้ที่บริโภคไข่รู้สึกกระปรี้กระเปร่า มีดัชนีมวลกายลดลง 61% และน้ำหนักลดลง 65% 
                            <Link href={'https://ajcn.nutrition.org/'} target="_blank">
                                <span className="text-green-700 hover:text-[var(--main-color)] underline"> จากการทดลอง </span>  
                            </Link>
                            เป็นระยะเวลา 3 เดือนในกลุ่มตัวอย่างที่เป็นเบาหวานชนิดที่ 2 ผู้ที่บริโภคไข่  2 ฟองต่อวันเป็นเวลา 6 วันต่อสัปดาห์นั้นมีรายงานว่า
                            ความหิวนั้นลดลงและรู้สึกอิ่มเร็วมากขึ้นกว่าผู้ที่บริโภคไข่ น้อยกว่า 2 ฟองต่อสัปดาห์
                        </p>
                    </div>
                </div>

            {/* grid #4 */}
                <div className="flex flex-col sm:flex-row-reverse sm:gap-5 bg-[url(/images/element/sw.jpg)] bg-bottom-left bg-cover">
                    <div className="p-4 sm:w-1/2">
                        <h1 className="font-bold max-sm:text-[18px] md:text-[20px] pb-3 text-[var(--highlight2)]"> กลุ่มคนที่ต้องระวังการบริโภคไข่  </h1>
                        <div className="flex justify-center">
                            <Image 
                                src={'/images/info/eat4.png'} 
                                alt="กลุ่มคนที่ต้องระวังการบริโภคไข่"  
                                width={300} height={300} 
                                className="w-[300px] h-[300px] object-cover rounded-md" 
                            />
                        </div>
                    </div>
                    <div className="p-4 sm:w-1/2">
                        <p className="indent-5">
                            คนที่ต้องระวังเรื่องการบริโภคไข่เป็นพิเศษ และควรบริโภคไข่ 3-4 ฟองต่อสัปดาห์หรือบริโภคแค่ไข่ขาวเท่านั้น ได้แก่
                        </p>
                        <ul className="list-disc pl-5">
                            <li>
                                ผู้ป่วยความดันโลหิตสูง
                            </li>
                            <li> ผู้สูงอายุ </li>
                            <li>
                                ผู้ป่วยไขมันในเลือด
                            </li>
                        </ul>
                        <p className="indent-5">
                            ไข่ มีประโยชน์ แต่ก็ควรเลือกกินให้ถูกโดยเฉพาะกรรมวิธีในการประกอบอาหารที่ควรหลีกเลี่ยงการทอดด้วยน้ำมัน
                            เพราะอาจทำให้ระดับคอเลสตอรอลสูงได้ แทนที่จะได้ประโยชน์ กลับกลายเป็นเกิดโทษ จากการบริโภคไข่แทน
                        </p>
                    </div>
                </div>

            </div>

            <div className="text-right mt-5 text-[12px]">
                <h6 className="text-[var(--highlight)] font-bold">ข้อมูลอ้างอิง ::</h6>
                <p>
                    <Link href={'https://www.samitivejhospitals.com/th/article/detail/%E0%B9%84%E0%B8%82%E0%B9%88-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C'} target="_blank" className="underline hover:text-[var(--highlight)]">
                    "ไข่" กินอย่างไร ร่างกายจึงได้ประโยชน์
                    </Link>
                
                </p>
            </div>
        </div>
    </section>
  )
}
export default EatPage