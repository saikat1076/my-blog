"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImGithub, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Simple Blog</h2>
        <p className="text-lg">Made with love and passion using <strong>Next.js</strong>.</p>
      </div>

      <div className="flex justify-center gap-8 mb-8">
        <Link href="https://www.facebook.com" target="_blank">
          <FaFacebook className="text-3xl hover:text-blue-500 transition duration-300" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <FaInstagram className="text-3xl hover:text-pink-500 transition duration-300" />
        </Link>
        <Link href="https://github.com" target="_blank">
          <ImGithub className="text-3xl hover:text-gray-500 transition duration-300" />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <ImYoutube className="text-3xl hover:text-red-500 transition duration-300" />
        </Link>
      </div>

      <div className="divider mb-6"></div>

      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} - Simple Blog | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;