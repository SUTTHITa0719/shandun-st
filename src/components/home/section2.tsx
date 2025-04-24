import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faMusic, faComments, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faBookOpen,
    title: "Healing Reads",
    desc: "Read to understand yourself and see the world more gently.",
  },
  {
    icon: faMusic,
    title: "Audio Healing",
    desc: "Sounds that bring you back to peace, whether it's meditation or words from the heart.",
  },
  {
    icon: faComments,
    title: "Talk Space",
    desc: "Because sometimes...just speaking out can help more than you think.",
  },
  {
    icon: faHandHoldingHeart,
    title: "Healing Activities",
    desc: "A small activity to check in with yourself and recharge your heart.",
  },
];

export default function section2() {
  return (

    <div className="w-full md:mt-20 mt-10 text-center  bg-white md:mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
          Explore Your Healing Space
        </h2>

        <p className="text-gray-900 text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-12 ">
          Choose what your heart needs today. <br / >
          Let yourself feel, breathe, and be.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 max-w-[95%] mx-auto">

          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              <FontAwesomeIcon icon={item.icon} className="text-3xl text-yellow-300 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white">{item.desc}</p>
            </div>
        
        
        ))}
        </div>
      </div>
    </div>
  );
}
