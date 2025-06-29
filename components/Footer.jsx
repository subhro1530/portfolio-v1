import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-700 pt-10 pb-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4 text-center">
        {/* Contact Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="mailto:shaswata.ssaha@gmail.com"
            aria-label="Email"
            className="hover:text-cyan-400 transition duration-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/shaswata-saha-74b209251"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="tel:+919674177512"
            aria-label="Phone"
            className="hover:text-cyan-400 transition duration-200"
          >
            <FaPhone />
          </a>
        </div>

        {/* Text & Copy */}
        <div className="text-sm sm:text-base leading-relaxed text-gray-500">
          <p>Let’s connect and build something meaningful together.</p>
          <p className="mt-2 text-xs text-gray-600">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-cyan-400">Shaswata Saha</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
