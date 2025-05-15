import { BreadcrumbEggs } from "@/components/Breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Info = () => {
  return (
    <section id="info" className="bg-white/85">
        <div className="container mt-[80px]">
            <BreadcrumbEggs title="info" /> 
            <div>
                {/* <Tabs defaultValue="type" className="w-full flex justify-center items-center" orientation="vertical">
                    <TabsList>
                        <TabsTrigger 
                            value="type"
                            className={"tab-trigger cursor-pointer"}
                        >
                            <span className="text-[20px] px-2">ชนิดไข่</span>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="category"
                            className={"tab-trigger cursor-pointer"}
                        >
                            <span className="text-[20px] px-2">ประเภทไข่</span>
                        </TabsTrigger>
                        <TabsTrigger value="boil" className={"tab-trigger cursor-pointer"}>วิธีการต้มไข่</TabsTrigger>
                        <TabsTrigger value="keep" className={"tab-trigger cursor-pointer"}>การเก็บรักษาไข่</TabsTrigger>
                        <TabsTrigger value="tranform" className={"tab-trigger cursor-pointer"}>การแปรรูปไข่</TabsTrigger>
                    </TabsList>
                    <TabsContent value="type" className={"w-100"}>
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="category">Change your password here.</TabsContent>
                    <TabsContent value="boil">boilll</TabsContent>
                    <TabsContent value="keep">keeppppppppppppp</TabsContent>
                    <TabsContent value="tranform">tranformmmmmmmmmm</TabsContent>
                </Tabs>   */}

                <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: รู้จักกับไข่ </h1>
                <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-3">
                    <div className="typeegg animate-wiggle w-[300px] h-[300px] bg-amber-600 ">
                        <img src="/images/info/logo1.png" alt="type-egg" className="w-full h-auto" />
                    </div>
                    <div>
                        <p>
                            <span className="inline-block px-3 rounded-lg mr-2 bg-[var(--main-color)] text-[24px] text-amber-50 font-bold"> “ไข่” </span>
                            ถือเป็นอาหารที่แสนพิเศษ มีสารอาหารมากมาย 
                            คนส่วนใหญ่จึงนำไข่มาประกอบอาหารทั้งคาว และหวาน ซึ่งการนำไข่มาทอด ต้ม 
                            ก็เป็นเมนูแสนง่ายมีรสชาติอร่อย ที่หลายท่านรับประทานเป็นประจำ ซึ่งไข่ มีประโยชน์ มีคุณค่าทางโภชนาการมากมายดังนี้
                        </p>
                        
                        <ul className="info-know">
                            <li>
                                <span className="font-bold text-amber-50 inline-block px-3 rounded-lg mr-2 bg-[var(--main-color)] "> 
                                    วิตามินที่สำคัญ เช่น วิตามินบี1 บี2 บี6 วิตามินเอ วิตามินดี วิตามินอี 
                                </span> 
                                ช่วยในการเจริญเติบโตของเด็กวัยเรียน ช่วยในการทำงานของระบบประสาท สมอง และระบบกล้ามเนื้อ
                            </li>
                            <li>
                                <span className="font-bold text-amber-50 inline-block px-3 rounded-lg mr-2 bg-[var(--main-color)]"> 
                                โฟเลต 
                                </span> 
                                ช่วยป้องกันการจับตัวของไขมันที่ผนังหลอดเลือด 
                            </li>
                            <li>
                                <span className="font-bold text-amber-50 inline-block px-3 rounded-lg mr-2 bg-[var(--main-color)]"> 
                                เลซิธินในไข่แดง
                                </span> 
                                ช่วยบำรุงประสาท ป้องการหลอดเลือดแข็งตัว ป้องกันโรคหัวใจ บำรุงสมอง
                            </li>
                            <li>
                                <span className="font-bold text-amber-50 inline-block px-3 rounded-lg mr-2 bg-[var(--main-color)]"> 
                                กรดอะมิโนจำเป็นครบถ้วน
                                </span> 
                                และปริมาณสูง ช่วยซ่อมแซมร่างกาย
                            </li>
                            <li>
                                <span className="font-bold text-amber-50 inline-block px-3 rounded-lg mr-2 bg-[var(--main-color)]"> 
                                แคลเซียม ฟอสฟอรัส
                                </span> 
                                ช่วยในการส่งสริมสร้างกระดูกและฟันให้แข็งแรง
                            </li>
                            <li>
                                <span className="font-bold text-amber-50 inline-block px-3 rounded-lg mr-2 bg-[var(--main-color)]"> 
                                ลูทีนและซีแซนทีน 
                                </span> 
                                ช่วยกรองหรือป้องกันรังสีจากแสงแดดที่เป็นอันตรายต่อดวงตา และยังช่วยปกป้องเซลล์ของจอประสาทตาไม่ให้ถูกทำลาย
                            </li>
                        </ul>

                        <p className="indent-5">
                            ในไข่ไก่ 1 ฟอง น้ำหนักเฉลี่ยประมาณ 50-70 กรัม ให้พลังงาน 80 กิโลแคลอรี หากเปรียบเทียบไข่ต่อ 100 กรัม จะมีคุณค่าทางโภชนาการดังนี้   
                        </p>
                        <div className="flex justify-center items-center">
                            <img 
                                src="/images/info/guide.png" 
                                alt="ภาพเปรียบเทียบไข่ต่อ 100 กรัม" 
                                className="w-[80%] h-auto m-5"
                            />
                        </div>

                        <div className="text-right mt-5 text-[12px]">
                            <h6 className="text-[var(--highlight)] font-bold">ข้อมูลอ้างอิง ::</h6>
                            <p>
                                <Link href={'https://multimedia.anamai.moph.go.th/infographics/info500_egg/'} target="_blank" className="underline hover:text-[var(--highlight)]">
                                เรื่องไข่กินแล้วดี มีประโยชน์
                                </Link>
                            
                            </p>
                            <p>
                                <Link href={'https://multimedia.anamai.moph.go.th/infographics/info348_covid19/'} target="_blank" className="underline hover:text-[var(--highlight)]">
                                รู้ไว้..แต่ละ “ไข่” ไม่เหมือนกัน
                                </Link>
                            
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div> 
    </section>
  );
};
export default Info;
