import { SavoryData } from "@/utils/SavoryData"
import Image from "next/image"
import Link from "next/link"

const SavoryPage = () => {
  return (
    <>
        <section id="type" className="bg-white/85">
            <div className="container mt-[80px] pb-[50px]">
                <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: เมนูอาหารคาว </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-7 mt-10">
                    {
                        SavoryData.map((item) => {
                            return(
                                <Link key={item.id} href={`/savory/${item.id}`}>
                                    <div className="rounded-lg cursor-pointer hover:shadow-lg hover:shadow-orange-600 transition-all duration-300 ease-in-out bg-[var(--main-color)] flex flex-col items-center justify-center text-center">
                                        <div className="w-full h-[200px] flex items-center justify-center rounded-tl-lg rounded-tr-lg overflow-hidden hover:border-4 border-[var(--main-color)]">
                                            <Image src={`${item.image}`} alt={item.title} width={400} height={400} className="w-full h-full object-cover hover:rounded-bl-lg hover:rounded-br-lg" priority />
                                        </div>
                                        <h2 className="my-2 text-[18px]">{item.title}</h2>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>

        </section>
    </>
  )
}
export default SavoryPage