
'use server'

import { BreadcrumbID } from "@/components/Breadcrumb";
import { SavoryData } from "@/utils/SavoryData"
import { Egg, EggFried } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";


async function getSavoryMenu(id) {
    const savoryMenu = SavoryData.find((item) => item.id === parseInt(id, 10));
    return savoryMenu || null;
}

export default async function SavoryRoute({ params }) {

    const { id } = await params

    const data = await getSavoryMenu(id)
    if (!data) redirect('/')

    return (
        <div className="bg-white/90">
            <div className="container mt-[80px]">
                <BreadcrumbID title="savory" />
                <h1 className="uppercase text-2xl font-semibold text-center mb-7 flex items-center justify-center"> 
                    <Egg fill="var(--main-color)" color="var(--main-color)" />
                    <span className="inline-block px-1"> วิธีการทำ{data.title} </span> 
                    <EggFried fill="var(--main-color)" color="var(--main-color)" />
                </h1>
                <p className="text-center font-semibold w-full md:w-[70%] mx-auto italic text-[14px] text-[var(--krop)] text-shadow-black">
                    {
                        data.description !== '' ? data.description : ""
                    }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-7 mt-10">
                    <div className="md:w-[300px] lg:w-[400px] md:h-[200px] lg:h-[300px] mx-auto"> <Image src={`${data.image}`} alt={data.title} width={400} height={400} className="w-full h-full object-cover rounded-lg" priority /> </div>
                    <div className="md:ml-10">
                        <h3 className="text-[20px] font-bold px-5 py-1 bg-[var(--main-color)] rounded-md w-[100px] text-center">วัตถุดิบ</h3>
                        <ul className="list-disc list-inside pl-5 mt-2">
                            {data.ingredient.map((item, index) => (
                                <li key={index} className="text-[18px] pb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-10 md:ml-10">
                    <h3 className="text-[20px] font-bold px-5 py-1 bg-[var(--main-color)] rounded-md w-[100px] text-center">วิธีทำ</h3>
                    <ul className="list-decimal list-inside pl-5 mt-2">
                        {data.todo.map((item, index) => (
                            <li key={index} className="text-[18px] pb-2">{item}</li>
                        ))}
                    </ul>
                </div>

            </div>

            
        </div>
    )
}