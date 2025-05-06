import EggCoupleTab from "@/components/adaptPage/EggCoupleTab"
import EggPinkTab from "@/components/adaptPage/EggPinkTab"
import EggSaltTab from "@/components/adaptPage/EggSaltTab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AdaptPage = () => {
  return (
    <section id="adapt" className="bg-white/85">
        <div className="container mt-[80px]">
        <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: การแปรรูปไข่ </h1>

            <div>
            <Tabs defaultValue="eggSalt" className="w-[100%] grid justify-center">
                <TabsList className={`grid w-full grid-cols-3`}>
                    <TabsTrigger value="eggSalt" className={'tab-trigger lg:text-[20px]'}>การทำไข่เค็ม</TabsTrigger>
                    <TabsTrigger value="eggPink" className={'tab-trigger lg:text-[20px]'}>การทำไข่เยี่ยวม้า</TabsTrigger>
                    <TabsTrigger value="eggCouple" className={'tab-trigger lg:text-[20px]'}>การทำไข่ครอบ</TabsTrigger>
                </TabsList>
                <TabsContent value="eggSalt" className={'bg-linear-to-r/increasing from-[#c73406]/80 to-[#fff]/80 rounded-md'}> <EggSaltTab /> </TabsContent>
                <TabsContent value="eggPink" className={'bg-linear-to-r from-[#5a1b03] to-[#fb4556]/80 rounded-md'}> <EggPinkTab /> </TabsContent>
                <TabsContent value="eggCouple" className={'bg-linear-to-r from-[#fff]/80 to-[var(--krop)] rounded-md'}> <EggCoupleTab /> </TabsContent>
            </Tabs>

            </div>
        </div>
    </section>
  )
}
export default AdaptPage