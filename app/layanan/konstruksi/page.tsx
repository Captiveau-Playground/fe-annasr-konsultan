"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hammer, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function KonstruksiDetailPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Detail Header */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-lime-400 text-xs font-bold uppercase mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Layanan
          </Link>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Jasa Pelaksanaan Konstruksi Fisik
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Mewujudkan gambar rencana arsitektur dan sipil menjadi fisik bangunan nyata dengan standar pengerjaan rapi, aman, kuat, dan efisien.
          </p>
        </div>
      </section>

      {/* Core Detail Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Details */}
            <div className="lg:col-span-8 text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Eksekusi Fisik Tanpa Celah dengan Tenaga Kerja Terlatih
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <div className="flex flex-col gap-6 text-slate-600 leading-relaxed text-base mb-12">
                <p>
                  Tahap konstruksi fisik adalah titik di mana seluruh rencana teknis diuji. Keberhasilan pembangunan bergantung sepenuhnya pada ketelitian tukang batu, presisi tukang besi, kualitas adukan semen beton, dan kedisiplinan pengawasan mandiri pelaksana lapangan.
                </p>
                <p>
                  CV. AN NASR KONSULTAN bertindak sebagai kontraktor pelaksana umum yang menangani pembangunan rumah tinggal mewah, ruko komersial, gedung instansi, hingga peningkatan prasarana jalan raya desa dan jembatan. Kami menggunakan rantai pasok material terpercaya, tenaga kerja terampil di bawah bimbingan Site Engineer yang andal, serta mengedepankan Kesehatan & Keselamatan Kerja (K3) selama aktivitas konstruksi berlangsung.
                </p>
              </div>

              {/* Scopes Grid */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Lingkup Jasa Konstruksi Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Pembangunan Rumah Tinggal & Ruko",
                    desc: "Konstruksi unit perumahan baru, villa, ruko usaha, dan kantor operasional dengan finishing premium dan pengerjaan rapi."
                  },
                  {
                    title: "Renovasi Rumah & Gedung",
                    desc: "Renovasi penambahan lantai (dak beton), perbaikan atap baja ringan, penggantian keramik/granit lantai, dan tata ulang ruangan."
                  },
                  {
                    title: "Konstruksi Jalan & Paving",
                    desc: "Pengecoran jalan beton rabat desa/kecamatan (rigid pavement), pengaspalan hotmix, dan penataan area parkir paving block."
                  },
                  {
                    title: "Konstruksi Jembatan & Irigasi",
                    desc: "Pembangunan jembatan beton bertulang sederhana, penataan dinding penahan tanah kali, dan normalisasi saluran irigasi."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Outputs Checklist */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Komitmen Kualitas Pelaksanaan
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 leading-relaxed text-sm">
                {[
                  "Jaminan Mutu Material Sesuai Kontrak (SNI Resmi)",
                  "Jadwal Pelaksanaan Terarah (Kurva S Terpantau Berkala)",
                  "Garansi Pemeliharaan Pasca Kontrak Fisik (Defects Liability)",
                  "Metode Kerja Aman & Meminimalisir Gangguan Tetangga",
                  "Penyediaan APD & Rambu K3 untuk Pekerja Konstruksi",
                  "Pelaporan Progres Terbuka Melalui Foto & Video Lapangan"
                ].map((out, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Photo */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-slate-100">
                <Image
                  src="/images/konstruksi.jpg"
                  alt="Pelaksanaan Konstruksi Fisik"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-blue-900 text-white rounded-3xl p-8 text-left">
                <h3 className="font-extrabold text-xl mb-4">Siap Memulai Pembangunan?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Dapatkan penawaran harga RAB konstruksi yang bersaing dengan kualitas pengerjaan premium. Hubungi estimator kami.
                </p>
                <Link
                  href="https://wa.me/6281200000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center px-6 py-3.5 rounded-full text-xs font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 flex items-center gap-1.5 transition-all shadow-md"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
