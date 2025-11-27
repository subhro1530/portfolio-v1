"use client";
import { useState } from "react";

export const Certifications = ({ className = "" }) => {
  // keep items with and without images; clicking opens modal
  const certs = [
    {
      title: "Oracle Cloud Infrastructure Architect Associate",
      img: "/ocicloudarch.jpeg",
    },
    { title: "Oracle Cloud Developer Professional", img: "/ocidev.jpeg" },
    { title: "ISC² Certified in Cybersecurity (CC)", img: "/isc2cc.jpeg" },
    { title: "Fortinet NSE Fundamentals", img: "/fortinet.jpeg" },
    { title: "CNSP – Cloud Native Security Practitioner", img: "/cnsp.jpeg" },
    { title: "CompTIA Security+ (in progress)", img: "" },
  ];

  const [open, setOpen] = useState(null); // index of open modal or null

  return (
    <div className={className}>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {certs.map((c, i) => (
          <button
            key={i}
            onClick={() => c.img && setOpen(i)}
            className="group relative rounded-lg overflow-hidden border border-neonpurp-500/30 bg-[#12081c] focus:outline-none"
            aria-label={`Open ${c.title}`}
          >
            {c.img ? (
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover aspect-square"
              />
            ) : (
              <div className="flex items-center justify-center aspect-square text-center px-3 text-xs sm:text-sm text-gray-300">
                {c.title}
              </div>
            )}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/50 to-transparent transition" />
            <div className="absolute bottom-0 left-0 right-0 p-2 text-[11px] sm:text-xs text-neonmag-100 bg-[#1d102b]/50 backdrop-blur-md">
              {c.title}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div className="relative max-w-4xl w-full bg-[#140c20] border border-neonpurp-500/40 rounded-2xl shadow-[0_0_30px_0_rgba(255,0,212,0.35)]">
            <button
              className="absolute top-2 right-2 text-xs px-3 py-1 rounded-full bg-neonmag-500 text-black hover:bg-neonmag-400"
              onClick={() => setOpen(null)}
            >
              Close
            </button>
            <div className="p-4 sm:p-6">
              <img
                src={certs[open].img}
                alt={certs[open].title}
                className="w-full h-auto object-contain rounded-lg"
              />
              <div className="mt-3 text-center text-sm sm:text-base text-neonmag-100">
                {certs[open].title}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
