
import { HeroSection2Data } from "@/utils/Hero"
import Link from "next/link"

const HeroSection2 = () => {
  return (
    <section id="hero2">
        <div className="container ">
          <h2 className="uppercase text-2xl font-semibold text-center"> :: ข้อมูลสำคัญและคุณค่าทางโภชนาการจากไข่</h2> 

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-8 mt-8 overflow-hidden">

            {
              HeroSection2Data.map((item,index) => {
                return (
                  <div key={index} className="
                      flex justify-center items-center
                      relative origin-center sm:-translate-x-3 rotate-6 p-6 
                      duration-500 hover:rotate-0
                  "> 
                    <Link href={item.link}>
                      <h2 className="
                            absolute top-[0px] start-[55px] 
                            sm:top-[100px]
                            md:top-[8px] md:start-[10px] bg-[var(--highlight)]  
                            px-8 py-3 rounded-3xl text-white z-[50]
                      ">
                        {item.title}
                      </h2> 
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        width={100} 
                        height={100} 
                        className="
                          h-50 w-100 rounded-2xl object-cover hover:opacity-50 duration-500 z-[20]
                          transform: rotateX(30deg) rotateY(-5deg) rotateZ(15deg) sm:-translate-x-3
                        "
                      />
                    </Link>
                  </div>
                )
              })
            }
            
          </div>
        </div>
        
    </section>
  )
}
export default HeroSection2