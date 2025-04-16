import { HeroSection3Data } from "@/utils/Hero"
import Link from "next/link"

const HeroSection3 = () => {
  return (
    <section id="hero3">
        <div className="container ">
            <h2 className="uppercase text-2xl font-semibold text-center"> :: เมนูต่างๆจากไข่ </h2> 
        
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-8 justify-center items-center ">
        
                    {
                      HeroSection3Data.map((item,index) => {
                        return (
                          <div key={index} className="
                              flex justify-center items-center
                              relative origin-center
                              sm:-translate-x-3 rotate-0 p-6 duration-500
                          "> 
                          {/* duration-500 transform: rotateX(30deg) rotateY(-5deg) rotateZ(15deg) */}
                            <Link href={item.link}>
                              <h2 className="
                                    absolute top-[0px] start-[55px] 
                                    sm:top-[100px]
                                    md:top-[9px] md:start-[9px] bg-[var(--highlight)]  
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
                                  h-auto sm:h-50 w-100 rounded-2xl object-cover z-[20]
                                  hover:opacity-50 hover:rotate-6 sm:-translate-x-3 duration-500
                                "
                              />
                            </Link>
                            {/* hover:opacity-50 -translate-x-3 rotate-6 p-6 duration-500 hover:rotate-0 */}
                          </div>
                        )
                      })
                    }
                    
                </div>
        </div>
    </section>
  )
}
export default HeroSection3