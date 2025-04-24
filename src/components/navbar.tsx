"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Nunito } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${nunito.variable} font-nunito w-full bg-white shadow-sm`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-900 text-lg font-semibold flex items-center">
          <span>T_ST_1079</span>
          <FontAwesomeIcon icon={faFeather} className="ml-2 text-gray-900" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-gray-900 hover:underline">
            HOME
          </Link>
          <Link href="/about" className="text-gray-900 hover:underline">
            ABOUT
          </Link>
          <Link href="/contact" className="text-gray-900 hover:underline">
            CONTACT
          </Link>
          <Link href="/gallery" className="text-gray-900 hover:underline">
            GALLERY 
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/login" className="text-gray-900">
            Login
          </Link>
          <Link href="/signup" className="bg-gray-900 text-white px-4 py-1 rounded-full hover:bg-gray-800 transition">
            Sign up
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md">
          <Link href="/" className="block text-gray-900">
            HOME
          </Link>
          <Link href="/about" className="block text-gray-900">
            ABOUT
          </Link>
          <Link href="/" className="block text-gray-900">
            CONTACT
          </Link>
          <Link href="/" className="block text-gray-900">
            GALLERY
          </Link>
          <hr className="border-gray-300" />
          <Link href="/" className="block text-gray-900">
            Login
          </Link>
          <Link href="/" className="block text-gray-900 ">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
