"use client";

import { CheckCircle2, Send } from "lucide-react";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nama: "",
    hp: "",
    email: "",
    jenisLayanan: "Jasa Perencanaan",
    pesan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama || !formData.hp || !formData.pesan) {
      alert("Harap lengkapi nama, nomor HP, dan pesan Anda.");
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center text-emerald-800 flex flex-col items-center gap-4">
        <CheckCircle2 className="size-12 text-emerald-600" />
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {/* Nama */}
      <div className="space-y-2 text-left">
        <label
          htmlFor="nama"
          className="text-sm font-medium leading-none text-slate-800"
        >
          Nama
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          required
          placeholder="Nama lengkap Anda"
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          className="flex h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
        />
      </div>

      {/* Grid: HP & Email */}
      <div className="grid gap-5 sm:grid-cols-2 text-left">
        <div className="space-y-2">
          <label
            htmlFor="hp"
            className="text-sm font-medium leading-none text-slate-800"
          >
            Nomor HP
          </label>
          <input
            id="hp"
            name="hp"
            type="tel"
            inputMode="tel"
            required
            placeholder="08xxxxxxxxxx"
            value={formData.hp}
            onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
            className="flex h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none text-slate-800"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="nama@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="flex h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
        </div>
      </div>

      {/* Jenis Layanan */}
      <div className="space-y-2 text-left">
        <label
          htmlFor="jenisLayanan"
          className="text-sm font-medium leading-none text-slate-800"
        >
          Jenis Layanan
        </label>
        <select
          id="jenisLayanan"
          name="jenisLayanan"
          value={formData.jenisLayanan}
          onChange={(e) => setFormData({ ...formData, jenisLayanan: e.target.value })}
          className="h-11 w-full rounded-md border border-slate-200 bg-transparent px-3 text-sm text-slate-800 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
        >
          <option value="Jasa Perencanaan">Jasa Perencanaan</option>
          <option value="Jasa Pengawasan">Jasa Pengawasan</option>
          <option value="Jasa Perizinan">Jasa Perizinan</option>
          <option value="Jasa Konstruksi">Jasa Konstruksi</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      {/* Pesan */}
      <div className="space-y-2 text-left">
        <label
          htmlFor="pesan"
          className="text-sm font-medium leading-none text-slate-800"
        >
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          required
          placeholder="Ceritakan kebutuhan proyek Anda"
          value={formData.pesan}
          onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
          className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-bold text-white shadow transition-all hover:bg-slate-800 cursor-pointer"
      >
        Kirim Pesan
        <Send className="size-4 text-white" aria-hidden="true" />
      </button>
    </form>
  );
}
