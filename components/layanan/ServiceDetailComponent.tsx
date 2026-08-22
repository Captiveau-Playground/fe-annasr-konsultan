import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constant";
import { ServiceDetailData } from "@/types/service";

interface ServiceDetailComponentProps {
  data: ServiceDetailData;
}

export default function ServiceDetailComponent({ data }: ServiceDetailComponentProps) {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Detail Header */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-lime-400 text-xs font-bold uppercase mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Layanan
          </Link>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            {data.title}
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            {data.shortDescription}
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
                {data.aboutTitle}
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <div className="flex flex-col gap-6 text-slate-600 leading-relaxed text-base mb-12">
                {data.aboutText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Scopes Section */}
              {data.scopes && data.scopes.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                    {data.scopeTitle || "Lingkup Layanan Kami"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.scopes.map((scope, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">
                          {scope}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits / Deliverables Section */}
              {data.benefits && data.benefits.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                    Output & Keunggulan Layanan
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 leading-relaxed text-sm">
                    {data.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Photo */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-slate-100 border-4 border-slate-50">
                <Image
                  src={data.heroImage}
                  alt={data.heroImageAlt || data.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-blue-900 text-white rounded-3xl p-8 text-left shadow-xl">
                <h3 className="font-extrabold text-xl mb-4">
                  Konsultasikan Proyek Anda
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Dapatkan pendampingan resmi dari tenaga ahli bersertifikat CV. AN NASR KONSULTAN untuk perencanaan, pengawasan, perizinan, maupun konstruksi.
                </p>
                <Link
                  href={`https://wa.me/${CONTACT_INFO.phoneNumberClean}`}
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
