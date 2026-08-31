"use client";

import { useState } from "react";
import { Link as LinkIcon, Check, MessageCircle } from "lucide-react";

interface ArtikelShareSectionProps {
  title: string;
}

export default function ArtikelShareSection({ title }: ArtikelShareSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: "whatsapp" | "twitter" | "facebook" | "linkedin") => {
    if (typeof window === "undefined") return;
    const currentUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(title);
    let url = "";

    switch (platform) {
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${shareText}%20${currentUrl}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
        break;
    }

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-5 lg:px-8 mb-16 font-sans">
      <div className="rounded-2xl bg-[#f3f6f9] p-5 sm:p-6 text-slate-800">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 block">
          BAGIKAN ARTIKEL INI
        </span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* WhatsApp */}
          <button
            type="button"
            onClick={() => handleShare("whatsapp")}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors border border-slate-200/60 cursor-pointer"
          >
            <MessageCircle className="size-4 text-emerald-600" />
            <span>WhatsApp</span>
          </button>

          {/* X / Twitter */}
          <button
            type="button"
            onClick={() => handleShare("twitter")}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors border border-slate-200/60 cursor-pointer"
          >
            <svg className="size-4 text-slate-900 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X / Twitter</span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            onClick={() => handleShare("facebook")}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors border border-slate-200/60 cursor-pointer"
          >
            <svg className="size-4 text-blue-600 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </button>

          {/* LinkedIn */}
          <button
            type="button"
            onClick={() => handleShare("linkedin")}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors border border-slate-200/60 cursor-pointer"
          >
            <svg className="size-4 text-blue-700 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </button>

          {/* Salin Tautan Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="size-4 text-white" />
                <span>Tautan Tersalin!</span>
              </>
            ) : (
              <>
                <LinkIcon className="size-4 text-white" />
                <span>Salin Tautan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
