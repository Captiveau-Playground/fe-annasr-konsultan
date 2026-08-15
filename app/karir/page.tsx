"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const JOBS = [
  {
    title: "Civil Estimator & Planner",
    type: "Full-Time",
    location: "Jombang (Office)",
    exp: "Minimal 2 Tahun",
    desc: "Menyusun perhitungan Rencana Anggaran Biaya (RAB), analisa harga satuan pekerjaan sipil, gambar Detail Engineering Design (DED), serta laporan spesifikasi teknik."
  },
  {
    title: "Drafter AutoCAD / SketchUp",
    type: "Full-Time / Contract",
    location: "Jombang (Office)",
    exp: "Minimal 1 Tahun / Fresh Graduate welcome",
    desc: "Membuat gambar perencanaan gedung, shop drawing jalan/jembatan, gambar kerja 2D detail struktur, serta pemodelan 3D arsitektur bangunan."
  },
  {
    title: "Site Supervisor / Pengawas Lapangan",
    type: "Project-Based",
    location: "Jombang & Sekitarnya (On-Site)",
    exp: "Minimal 2 Tahun",
    desc: "Melakukan monitoring harian progres fisik lapangan, pengecekan ketebalan jalan/mutu beton segar, verifikasi volume terpasang kontraktor, serta menyusun laporan harian."
  }
];

export default function KarirPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Civil Estimator & Planner",
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
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Bergabung Bersama Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Karir di An Nasr Konsultan
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Membuka kesempatan bagi tenaga teknik sipil, drafter arsitektur, dan pengawas konstruksi untuk berkembang dalam lingkungan profesional.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Job Openings */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
                Lowongan Pekerjaan Aktif
              </h2>
              <div className="flex flex-col gap-6">
                {JOBS.map((job, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-wrap gap-2.5 items-center justify-between mb-4">
                      <h3 className="font-extrabold text-xl text-slate-900">
                        {job.title}
                      </h3>
                      <span className="bg-blue-600/10 text-blue-600 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-slate-500 text-xs font-semibold mb-6">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{job.exp}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-5 text-left">
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
                      className="mt-4 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                    >
                      Kirim Lamaran Baru
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                        Nama Lengkap *
                      </label>
                      <input
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
                      <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                        Alamat Email *
                      </label>
                      <input
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
                      <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                        No. Telepon / WhatsApp *
                      </label>
                      <input
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
                      <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                        Posisi Dilamar
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      >
                        {JOBS.map((j) => (
                          <option key={j.title} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Portfolio / CV Link */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                        Link CV & Portfolio (Drive/Dropbox)
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://drive.google.com/..."
                        className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                        Pesan Singkat / Pengalaman Kerja
                      </label>
                      <textarea
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
