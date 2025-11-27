"use client";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neonpurp-500/30 bg-[#12081c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-neonmag-500 shadow-[0_0_18px_0_rgba(255,0,212,0.35)]">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <div className="text-sm sm:text-base font-semibold text-neonmag-100">
            Shaswata Saha
          </div>
          <div className="text-xs sm:text-sm text-gray-300">
            Full‑Stack Developer • Cloud • Cybersecurity
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/subhro1530"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 rounded-full border border-neonmag-500 text-neonmag-100 hover:bg-neonmag-500 hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shaswata-saha-74b209251"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 rounded-full border border-neonmag-500 text-neonmag-100 hover:bg-neonmag-500 hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shaswata.ssaha@gmail.com"
            className="text-xs px-3 py-1 rounded-full border border-neonmag-500 text-neonmag-100 hover:bg-neonmag-500 hover:text-black transition"
          >
            Email
          </a>
        </div>
      </div>
      <div className="text-center text-[11px] text-gray-400 pb-6">
        © {new Date().getFullYear()} Shaswata Saha. All rights reserved.
      </div>
    </footer>
  );
};
