const ContactForm = () => {
  return (
    <div className="w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center sm:text-left">
          CONTACT US
        </h1>

        <p className="text-gray-600 text-base mb-10 text-center sm:text-left">
          Feel free to contact us anytime. We are here to listen with kindness and an open heart.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-b border-gray-300 py-3 px-2 text-gray-800 bg-transparent focus:outline-none focus:border-yellow-400 placeholder:text-gray-400 transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-b border-gray-300 py-3 px-2 text-gray-800 bg-transparent focus:outline-none focus:border-yellow-400 placeholder:text-gray-400 transition-all duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border-b border-gray-300 py-3 px-2 text-gray-800 bg-transparent focus:outline-none focus:border-yellow-400 placeholder:text-gray-400 transition-all duration-300"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-6 w-full sm:w-1/2 md:w-2/5 rounded-full uppercase text-sm tracking-wider transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
