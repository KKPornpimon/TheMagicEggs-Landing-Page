
'use server'

import { DessertData } from "@/utils/DessertData";
import { Egg, EggFried } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";


async function getDessertMenu(id) {
    const dessertMenu = DessertData.find((item) => item.id === parseInt(id, 10));
    return dessertMenu || null;
}

export default async function DessertRoute({ params }) {

    const { id } = await params

    const data = await getDessertMenu(id)
    if (!data) redirect('/')

    return (
        <div className="bg-white/90">
            <div className="container mt-[80px]">

                <h1 className="uppercase text-2xl font-semibold text-center mb-7 flex items-center justify-center"> 
                    <Egg fill="var(--krop)" color="var(--krop)" />
                    <span className="inline-block px-1"> วิธีการทำ{data.title} </span> 
                    <EggFried fill="var(--krop)" color="var(--krop)" />
                </h1>
                <p className="text-center font-semibold w-full md:w-[70%] mx-auto italic text-[14px] text-[var(--main-color)] text-shadow-black">
                    {
                        data.description !== '' ? data.description : ""
                    }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-7 mt-10">
                    <div className="md:w-[300px] lg:w-[400px] md:h-[200px] lg:h-[300px] mx-auto"> <Image src={`${data.image}`} alt={data.title} width={400} height={400} className="w-full h-full object-cover rounded-lg" priority /> </div>
                    <div className="md:ml-10">
                        <h3 className="text-[20px] font-bold px-5 py-1 bg-[var(--krop)] rounded-md w-[100px] text-center">วัตถุดิบ</h3>
                        <ul className="list-disc list-inside pl-5 mt-2">
                            {data.ingredient.map((item, index) => (
                                <li key={index} className="text-[18px] pb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-10 md:ml-10">
                    <h3 className="text-[20px] font-bold px-5 py-1 bg-[var(--krop)] rounded-md w-[100px] text-center">วิธีทำ</h3>
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