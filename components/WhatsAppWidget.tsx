"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO, WHATSAPP_OPTIONS } from "@/lib/constant";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  const phoneNumber = CONTACT_INFO.phoneNumberClean;
  const options = WHATSAPP_OPTIONS;

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setShowBadge(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Card Popup */}
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-5 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  {/* WhatsApp SVG Icon */}
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                    <path d="M12.012 1.985c-5.523 0-10.002 4.478-10.002 10.002a9.955 9.955 0 001.378 5.027L2 22l5.138-1.348a9.948 9.948 0 004.874 1.272c5.523 0 10.002-4.478 10.002-10.002 0-5.524-4.479-10.002-10.002-10.002zm5.82 14.183c-.244.686-1.42 1.34-1.947 1.402-.486.057-1.12.072-1.802-.146-2.735-.87-4.502-3.642-4.638-3.823-.136-.18-1.102-1.464-1.102-2.793 0-1.328.7-1.98 1.01-2.298.24-.246.634-.374.996-.374.12 0 .23 0 .332.006.302.013.454.032.652.502.246.59.845 2.062.918 2.213.072.15.12.326.02.528-.1.202-.15.326-.3.498-.15.174-.316.388-.452.52-.152.148-.312.31-.133.616.18.304.796 1.31 1.708 2.122.912.812 1.68 1.066 1.98 1.216.3.15.474.126.65-.078.178-.204.764-.888.966-1.19.204-.304.408-.254.688-.15.28.102 1.776.837 2.083.99.308.154.512.23.587.356.076.126.076.73-.168 1.417z" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-sm tracking-tight text-white leading-tight">
                  CV. An Nasr Konsultan
                </h3>
                <p className="text-[11px] text-emerald-100 mt-0.5 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-350 animate-pulse"></span>
                  Admin Online (WhatsApp)
                </p>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-5 bg-slate-50 flex-1 max-h-[320px] overflow-y-auto">
            {/* Operator bubble */}
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100/80 mb-5 text-left">
              <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">Customer Support</p>
              <p className="text-slate-700 text-xs leading-relaxed">
                Halo! Terima kasih telah mengunjungi website kami. 
                <br /><br />
                Ada yang bisa kami bantu? Silakan klik salah satu pilihan topik konsultasi di bawah untuk langsung chat WhatsApp dengan tim teknis kami:
              </p>
            </div>

            {/* Selection Buttons */}
            <div className="flex flex-col gap-2.5">
              {options.map((opt, i) => (
                <Link
                  key={i}
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(opt.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-slate-200/60 rounded-2xl text-left hover:border-emerald-500 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex-1 pr-2">
                    <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-emerald-600 transition-colors">
                      {opt.title}
                    </h4>
                    <p className="text-[10px] text-slate-450 font-medium mt-0.5 leading-snug">
                      {opt.desc}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-xl bg-slate-50 text-slate-450 group-hover:bg-emerald-50 group-hover:text-emerald-600 flex items-center justify-center transition-colors shrink-0">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Chat Footer */}
          <div className="p-3 bg-white border-t border-slate-100 text-center">
            <Link
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-400 hover:text-emerald-600 transition-colors font-bold"
            >
              Atau kirim pesan langsung tanpa topik
            </Link>
          </div>
        </div>
      )}

      {/* Floating Circular Toggle Button */}
      <button
        onClick={handleOpen}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group relative border border-emerald-400/20"
        aria-label="Hubungi kami di WhatsApp"
      >
        {/* Pulsing visual glow to invite clicks */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none opacity-75"></span>

        {showBadge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center animate-bounce shadow-md">
            1
          </span>
        )}

        {isOpen ? (
          <X className="w-5 h-5 z-10" />
        ) : (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white z-10">
            <path d="M12.012 1.985c-5.523 0-10.002 4.478-10.002 10.002a9.955 9.955 0 001.378 5.027L2 22l5.138-1.348a9.948 9.948 0 004.874 1.272c5.523 0 10.002-4.478 10.002-10.002 0-5.524-4.479-10.002-10.002-10.002zm5.82 14.183c-.244.686-1.42 1.34-1.947 1.402-.486.057-1.12.072-1.802-.146-2.735-.87-4.502-3.642-4.638-3.823-.136-.18-1.102-1.464-1.102-2.793 0-1.328.7-1.98 1.01-2.298.24-.246.634-.374.996-.374.12 0 .23 0 .332.006.302.013.454.032.652.502.246.59.845 2.062.918 2.213.072.15.12.326.02.528-.1.202-.15.326-.3.498-.15.174-.316.388-.452.52-.152.148-.312.31-.133.616.18.304.796 1.31 1.708 2.122.912.812 1.68 1.066 1.98 1.216.3.15.474.126.65-.078.178-.204.764-.888.966-1.19.204-.304.408-.254.688-.15.28.102 1.776.837 2.083.99.308.154.512.23.587.356.076.126.076.73-.168 1.417z" />
          </svg>
        )}
      </button>
    </div>
  );
}
