import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <div className="bg-gray-900 text-white px-8 py-10 rounded-md relative w-full ">
      <div className="absolute top-0 left-0 w-5 h-5 bg-yellow-400"></div>

      <h2 className="text-3xl font-bold mb-6">INFO</h2>

      <div className="space-y-5 text-base">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 text-lg" />
          <span>suththitasarasnthi@gmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-lg" />
          <span>+66 987 654 321</span>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 text-lg" />
          <span>123 Serenity St., Chiang Mai</span>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faClock} className="text-yellow-400 text-lg" />
          <span>09:00 – 18:00 ( Mon – Fri )</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
