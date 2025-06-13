import Image from "next/image";

export default function WelcomeInfo() {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full ">

      {/* Left */}
      <div className="flex flex-col gap-4 w-full justify-center h-full ">

        <div className="bg-gray-100 rounded-xl p-5">
          <div className="bg-yellow-400 w-8 h-8 rounded-full mb-4 justify-self-end" />
          {/* <p className="text-sm text-gray-400 md:mt-10">+25.5%</p> */}
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">Hello!</p>
          <p className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Welcome to the website</p>
          <p className="text-xs text-right text-gray-400 mt-4 md:mt-10">I hope you like it!</p>
          <hr className="border border-gray-600 mt-2 w-4/6" />
        </div>

        <div className="bg-black rounded-lg p-3">
          <div className="grid grid-cols-[40px_1fr] items-center">
            <div className="bg-yellow-200 rounded-full p-2 w-9 h-9 ml-2">
              <p className="text-gray-900 text-sm text-center font-semibold">9.8</p>
            </div>

            <div className="ml-4">
              <p className="text-white text-xs">Overall clients rate</p>
              <p className="text-gray-400 text-[10px]">More than 10K reviews</p>
            </div>

          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-4">
         <div className="rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/photo/synoralab-share.png"
            alt="Smiling"
            width={600}
            height={400}
            className="object-cover w-full h-[240px] sm:h-[280px] lg:h-[300px]"
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-sm">
            
          <Image
            src="/photo/synora.jpg"
            alt="synora"
            width={600}
            height={400}
            className="object-cover w-full h-[200px] sm:h-[230px] lg:h-[250px]"
          />
        </div>

       
      </div>
    </div>
  );
}
