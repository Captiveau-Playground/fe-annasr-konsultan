import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Hubungi Kami — CV. AN NASR KONSULTAN",
  description:
    "Konsultasikan rencana proyek perencanaan, pengawasan, perizinan bangunan (PBG & SLF), maupun konstruksi Anda dengan CV. AN NASR KONSULTAN Jombang.",
};

export default function KontakPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#133d9c_0%,#005ded_100%)] px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        {/* Blueprint Grid Overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#78E100]">
            Kontak
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Mari bicarakan rencana proyek Anda
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Tim kami siap membantu menghitung kebutuhan teknis, dokumen perizinan,
            hingga estimasi biaya pekerjaan.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form Kirim Pesan */}
          <div>
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm lg:p-10 text-left">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Kirim Pesan
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Isi formulir berikut, tim kami akan menghubungi Anda pada jam
                kerja.
              </p>

              <ContactForm />
            </div>
          </div>

          {/* Detail Informasi Kontak & Map */}
          <div className="space-y-6 text-left">
            <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50/60 p-8 lg:p-10">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Informasi Kontak
              </h2>
              <ul className="mt-8 space-y-7">
                {/* Domisili Perusahaan */}
                <li className="flex gap-4 items-start">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-[#0066FF]">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Domisili Perusahaan
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                      {CONTACT_INFO.domicileAddress}
                    </span>
                  </span>
                </li>

                {/* Alamat Kantor */}
                <li className="flex gap-4 items-start">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-[#0066FF]">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Alamat Kantor
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                      {CONTACT_INFO.officeAddress}
                    </span>
                  </span>
                </li>

                {/* Telepon */}
                <li className="flex gap-4 items-start">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-[#0066FF]">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Telepon
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      {CONTACT_INFO.phoneNumberFormatted}
                    </span>
                  </span>
                </li>

                {/* Email */}
                <li className="flex gap-4 items-start">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-[#0066FF]">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Email
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      {CONTACT_INFO.email}
                    </span>
                  </span>
                </li>

                {/* Jam Operasional */}
                <li className="flex gap-4 items-start">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-[#0066FF]">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Jam Operasional
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      {CONTACT_INFO.operationalHours}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-sm">
              <iframe
                title="Peta lokasi kantor CV. AN NASR KONSULTAN"
                src="https://www.google.com/maps?q=Jombang%2C%20Jawa%20Timur&output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
