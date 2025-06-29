import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer = () => (
  <footer className="pt-10 border-t border-gray-600 text-center text-sm text-gray-400">
    <div className="flex justify-center gap-6 mb-2 text-lg">
      <a href="mailto:shaswata.ssaha@gmail.com" className="hover:text-white">
        <FaEnvelope />
      </a>
      <a
        href="https://linkedin.com/in/shaswata-saha-74b209251"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <FaLinkedin />
      </a>
      <a href="tel:+919674177512" className="hover:text-white">
        <FaPhone />
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()} Shaswata Saha. All rights reserved.</p>
  </footer>
);
