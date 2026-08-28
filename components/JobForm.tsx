"use client";

import { CheckCircle2, Send } from "lucide-react";
import React, { useState } from "react";

interface Job {
  title: string;
}

interface JobFormProps {
  jobs: Job[];
}

export default function JobForm({ jobs }: JobFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: jobs[0]?.title || "",
    portfolio: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Harap lengkapi nama, email, dan nomor telepon Anda.");
      return;
    }
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm sticky top-28">
      <h3 className="font-extrabold text-2xl text-slate-900 mb-2">
        Kirim Lamaran
      </h3>
      <p className="text-slate-500 text-sm mb-8 leading-relaxed">
        Isi data diri Anda di bawah ini. Tim rekrutmen kami akan segera menghubungi Anda jika kualifikasi cocok.
      </p>

      {isSubmitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800 flex flex-col items-center gap-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          <h4 className="font-bold text-lg">Lamaran Terkirim!</h4>
          <p className="text-xs text-emerald-600 leading-relaxed">
            Terima kasih telah melamar di CV. AN NASR KONSULTAN. Berkas Lamaran Anda telah kami terima dan sedang diproses oleh tim kami.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Kirim Lamaran Baru
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-name" className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Nama Lengkap *
            </label>
            <input
              id="job-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Masukkan nama lengkap Anda"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-email" className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Alamat Email *
            </label>
            <input
              id="job-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="nama@email.com"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-phone" className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              No. Telepon / WhatsApp *
            </label>
            <input
              id="job-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Contoh: 081234567890"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Position */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-position" className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Posisi Dilamar
            </label>
            <select
              id="job-position"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              {jobs.map((j) => (
                <option key={j.title} value={j.title}>
                  {j.title}
                </option>
              ))}
            </select>
          </div>

          {/* Portfolio / CV Link */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-portfolio" className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Link CV & Portfolio (Drive/Dropbox)
            </label>
            <input
              id="job-portfolio"
              type="url"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              placeholder="https://drive.google.com/..."
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-message" className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Pesan Singkat / Pengalaman Kerja
            </label>
            <textarea
              id="job-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tuliskan pengalaman kerja singkat Anda..."
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-4 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-all cursor-pointer"
          >
            Kirim Lamaran
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
