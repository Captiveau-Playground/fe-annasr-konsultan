"use client";

import { CheckCircle2, Send } from "lucide-react";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Jasa Perencanaan",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Harap lengkapi nama, nomor telepon, dan pesan Anda.");
      return;
    }
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-sm">
      <h3 className="font-extrabold text-2xl text-slate-900 mb-2">
        Formulir Konsultasi
      </h3>
      <p className="text-slate-500 text-sm mb-8 leading-relaxed">
        Silakan jelaskan rencana konstruksi, renovasi, atau dokumen izin bangunan yang ingin Anda urus. Teknisi kami akan merespons dalam waktu 1x24 jam.
      </p>

      {isSubmitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center text-emerald-800 flex flex-col items-center gap-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          <h4 className="font-bold text-xl">Pesan Terkirim!</h4>
          <p className="text-xs text-emerald-600 leading-relaxed max-w-sm">
            Terima kasih telah berkonsultasi dengan kami. Detail pesan Anda telah diteruskan ke tim estimator teknis kami. Kami akan menghubungi Anda segera.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Kirim Pesan Baru
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Nama Lengkap / Instansi *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nama Anda atau nama perusahaan/dinas"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Alamat Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="nama@email.com"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              No. WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Contoh: 081234567890"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Kebutuhan Layanan
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="Jasa Perencanaan">Jasa Perencanaan (DED)</option>
              <option value="Jasa Pengawasan">Jasa Pengawasan Lapangan</option>
              <option value="Jasa Perizinan">Jasa Perizinan (PBG & SLF)</option>
              <option value="Jasa Konstruksi">Jasa Pelaksanaan Konstruksi</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Deskripsi Singkat Rencana Proyek *
            </label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Contoh: Saya berencana membangun ruko 2 lantai ukuran 8x15 di Jombang kota. Butuh perencanaan struktur dan pengurusan SLF..."
              className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-all cursor-pointer"
          >
            Kirim Formulir
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
