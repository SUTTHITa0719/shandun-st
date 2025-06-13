import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faGamepad, faD } from "@fortawesome/free-solid-svg-icons";
const features = [
  {
    icon: faLaptopCode,
    title: "Website",
    desc: "I created a website to showcase the projects and experiences I gained",
  },
  {
    icon: faGamepad,
    title: "Spot the Difference Game",
    desc: "I used AI to generate images for creating a Spot the Difference game.",
  },
  {
    icon: faD,
    title: "LuckyDose",
    desc: "I was assigned to migrate collection data and add new collections to the website.",
  }
]

export default function section2() {
  return (

    <div className="w-full md:mt-20 mt-10 text-center  bg-white md:mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
          My Internship Project
        </h2>

        <p className="text-gray-900 text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-12 ">
          Tasks and Projects Assigned During My Internship at Synora Lab
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-[80%] mx-auto">

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
