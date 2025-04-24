import * as React from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function Home() {
  return (
    <div className={`${nunito.variable} font-nunito bg-white`}>
      <div className="min-h-screen w-full flex justify-center items-center px-4 py-6 overflow-y-auto">
        <div className="w-full max-w-6xl bg-white md:rounded-lg md:shadow-xl md:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3  md:gap-4 ">

            {/* Left */}
            <div className="w-full bg-gray-900 md:p-6 rounded-xl flex flex-col items-center min-h-[650px]">
                <div className="rounded-full mt-4 mb-6 justify-self-center object-cover overflow-hidden md:w-46 md:h-46 w-50 h-50 ">
                                <Image
                                src={"/photo/me.jpg"}
                                alt={"photo"}
                                width={200} 
                                height={200} 
                                className="object-cover"
                                />
                            </div>

                <div className="text-white w-full text-sm sm:text-base md:mt-2 p-2">
                    <p className="text-lg sm:text-xl font-bold mb-1">PERSONAL</p>
                    <hr className="border-2 border-amber-50 mb-3 mt-2" />
                    <ul className="space-y-2 mt-4">
                    <li className="flex justify-between"><span>NAME</span><span className="font-extralight">Sutthita Sarasonthi</span></li>
                    <li className="flex justify-between"><span>NICKNAME</span><span className="font-extralight">Tukta</span></li>
                    <li className="flex justify-between"><span>BIRTHDAY</span><span className="font-extralight">Nov 07, 2004</span></li>
                    <li className="flex justify-between"><span>RELIGION</span><span className="font-extralight">Buddhism</span></li>
                    <li className="flex justify-between"><span>ETHNICITY</span><span className="font-extralight">Thai</span></li>
                    </ul>

                    <p className="text-lg sm:text-xl font-bold mt-8 mb-1">CONTACT</p>
                    <hr className="border-2 border-amber-50 mb-3 mt-2" />
                    <ul className="space-y-2 break-words">
                    <li className="flex justify-between"><span>MOBILE</span><span className="font-extralight">090 317 9448</span></li>
                    <li className="flex justify-between"><span>E-MAIL</span><span className="font-extralight break-all">suththitasarasnthi@gmail.com</span></li>
                    <li className="flex justify-between"><span>IG</span><span className="font-extralight">T_ST_1079</span></li>
                    <li className="flex justify-between"><span>ID LINE</span><span className="font-extralight">tuktaa07</span></li>
                    </ul>
                </div>
            </div>

            {/*Right*/}
            <div className="col-span-2 w-full">
              <div className="flex flex-wrap justify-center items-center mt-6 text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                <div>SUTTHITA</div>
                <div className="ml-2 font-bold">S.</div>
              </div>

              <div className="mt-6 px-2 text-sm sm:text-base">
                {/*About Me */}
                <div className="bg-gray-900 p-2 w-fit rounded mb-2">
                  <p className="text-white font-bold text-center">ABOUT ME</p>
                </div>
                <p className="text-gray-800">
                    <span className="font-bold text-gray-900 md:ml-25 ml-10">Hello!, </span>
                    My name is Suthita Sarasanthi, nickname Tukta. I am 21 years old.
                    Currently studying at Rajamangala University of Technology Thanyaburi,
                    Faculty of Industrial Education, Department of Computer Engineering.
                </p>


                {/*Education */}
                <div className="bg-gray-900 p-2 w-fit rounded mt-6 mb-2">
                  <p className="text-white font-bold text-center">EDUCATION</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="font-semibold">PRIMARY</div>
                  <div className="sm:col-span-2 text-gray-800">- Anubanmaemoh School</div>

                  <div className="font-semibold">MIDDLE SCHOOL</div>
                  <div className="sm:col-span-2 text-gray-800">
                    - Mattayom Wat Sichanpradit School Under The Royal Patronage of His Majesty The King
                  </div>

                  <div className="font-semibold">VOCATIONAL</div>
                  <div className="sm:col-span-2 text-gray-800">- Ayutthaya Vocational College</div>

                  <div className="font-semibold">UNIVERSITY</div>
                  <div className="sm:col-span-2 text-gray-800">- Rajamangala University of Technology Thanyaburi</div>
                </div>

                {/* Activities */}
                <div className="bg-gray-900 p-2 w-fit rounded mt-6 mb-2">
                  <p className="text-white font-bold text-center">Activities I have joined</p>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                  <li>Industrial Education Student Club, Academic Vice President</li>
                  <li>Assistant Instructor, Robot Academy 2024</li>
                  <li>Assistant Facilitator, Hands-on Workshop</li>
                  <li>Assistant Trainer, KidBright Workshop</li>
                  <li>Assistant Instructor, Object-Oriented Programming (OOP) Course</li>
                </ul>

                {/* Software Skills */}
                <div className="bg-gray-900 p-2 w-fit rounded mt-6 mb-4">
                  <p className="text-white text-center font-bold">SOFTWARE SKILL</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {[
                    { src: "/photo/word.png", alt: "Word", w: 40, h: 40 },
                    { src: "/photo/pp.png", alt: "PowerPoint", w: 45, h: 45 },
                    { src: "/photo/excel.png", alt: "Excel", w: 25, h: 25 },
                    { src: "/photo/python.png", alt: "Python", w: 30, h: 30 },
                  ].map((icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 sm:w-14 sm:h-14 border border-gray-950 rounded-full flex justify-center items-center"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={icon.w}
                        height={icon.h}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
