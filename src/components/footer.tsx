import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-10  font-nunito">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-3">T_ST_1079</h2>
          <p className="text-sm text-gray-300">
            A space to heal, breathe, and feel. Let a little kindness guide your way.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Healing Space</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Healing Resources</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:underline">Healing Reads</a></li>
            <li><a href="#" className="hover:underline">Audio Healing</a></li>
            <li><a href="#" className="hover:underline">Talk Space</a></li>
            <li><a href="#" className="hover:underline">Healing Activities</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
          <p className="text-sm text-gray-300 mb-3">
            Join our newsletter and stay inspired with weekly reminders of kindness.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-md text-white placeholder-gray-600"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>“You only live once, but if you do it right, once is enough.”</p>
        <p className="mt-2">© {new Date().getFullYear()} T_ST_1079. All rights reserved.</p>
      </div>
    </footer>
  );
}
