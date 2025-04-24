const reminders = [
  {
    title: "You Are Enough",
    desc: "Even when you're doing nothing, you are still worthy of love and peace.",
  },
  {
    title: "Breathe with Intention",
    desc: "Each deep breath is a message to your body: You are safe now.",
  },
  {
    title: "Let Go Gently",
    desc: "Healing is not about forgetting. It is about releasing the weight you no longer need.",
  },
  {
    title: "Joy in Little Things",
    desc: "A ray of sunlight. A warm cup. A kind word. That is enough for today.",
  },
];

export default function Section3() {
  return (
    <div className="w-full py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left */}
        <div className="md:col-span-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
            25 Reminders of Kindness<br /> and Emotional Healing
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6">
            In the rush of life, we forget how beautiful a pause can be. Take a moment to breathe, feel, and simply be.
          </p>

          <button className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm">
            Discover More
          </button>
        </div>

        {/* Right */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reminders.map((item, index) => (
            <div key={index} className="bg-gray-100 hover:shadow-lg rounded-xl p-6 transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
