import WelcomeInfo from "@/components/home/WelcomeInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

export default function section1() {
  return (
    <div className="container mx-auto px-8 mt-4 md:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 w-full ">

        {/* Left */}

        <div className="flex justify-center items-center w-full  ">
          <div className="w-full max-w-8xl">

            <h1 className="text-5xl sm:text-4xl md:text-7xl text-gray-900 font-bold">
              WHAT 
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-bold mt-2">
              did you gain from this internship?
            </h2>

            <div className="text-base sm:text-lg text-gray-900 font-light mt-8 space-y-2">
              <p>This website presents the projects and experiences gained during my internship at Synora Lab, conducted from April 8, 2025 - June 13, 2025.</p>
            </div>

            {/* <div className="flex flex-col-1 gap-4 mt-8">
              <button className="bg-black text-white w-48 md:w-52 p-3 rounded-full flex justify-between items-center hover:bg-gray-800 transition">
                <span className="text-base font-light ml-4">Read more</span>
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
              </button>
            </div> */}

            <hr className="border border-gray-900 mt-8 md:w-5/6 " />

            <div className="text-base text-gray-900 font-light mt-8 space-y-1">
              <p>This internship helped shape both my skills and confidence.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 font-light">
              <div className="text-gray-900 flex items-center gap-2">
                <FontAwesomeIcon icon={faLightbulb} className="text-2xl sm:text-3xl" />
                <p>Learn new things</p>
              </div>

              <div className="text-gray-900 flex items-center gap-2">
                <FontAwesomeIcon icon={faFaceSmile} className="text-2xl sm:text-3xl" />
                <p>Happy</p>
              </div>

            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center items-center w-full ">
            <WelcomeInfo />
        </div>

      </div>
    </div>
  );
}
