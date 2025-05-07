
import Link from "next/link"

const Contact = () => {
  return (
    <section id="contact" className="bg-white/85">
        <div className="container mt-[80px] pb-[200px]">
          <h1 className="uppercase text-2xl font-semibold text-center mb-8"> :: ติดต่อ </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-10 gap-x-7 mt-10">

            <div className="border-4 border-[var(--main-color)] rounded-lg flex flex-col items-center justify-center text-center p-5 ">
                <div>
                  <img src="/images/email.png" alt="mail" className="w-[100px] h-[100px]" />
                </div>
                <h2 className="text-[30px] font-semibold">E-Mail</h2>
                <h1 className="text-[18px]"> kanom7448@gmail.com </h1>
            </div>

            <div className="border-4 border-[var(--main-color)] rounded-lg flex flex-col items-center justify-center text-center p-5 ">
              <div>
                <img src="/images/line.png" alt="mail" className="w-[100px] h-[100px]" />
              </div>
              <h2 className="text-[30px] font-semibold">Line</h2>
              <h1 className="text-[18px]"> kanomwarnmon </h1>
            </div>

            <div className="cursor-pointer border-4 border-[var(--main-color)] rounded-lg flex flex-col items-center justify-center text-center p-5 hover:shadow-lg hover:shadow-orange-600 transition-all duration-300 ease-in-out">
              <Link href={"https://www.facebook.com/kanomwarnmon"} target="_blank" className="flex flex-col items-center justify-center text-center">
                <div>
                  <img src="/images/facebook.png" alt="mail" className="w-[100px] h-[100px] p-3" />
                </div>
                <h2 className="text-[30px] font-semibold">Facebook</h2>
                <h1 className="text-[18px]"> Pornpimon Pradabsri </h1>
              </Link>
            </div>

          </div>
        </div>
    </section>
  )
}
export default Contact