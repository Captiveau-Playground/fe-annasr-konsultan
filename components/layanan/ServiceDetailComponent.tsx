import { ArrowRight, Check, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/home/CtaSection";
import { ServiceDetailData } from "@/types/service";

interface ServiceDetailComponentProps {
  data: ServiceDetailData;
}

export default function ServiceDetailComponent({ data }: ServiceDetailComponentProps) {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Section 1: Header & Images Grid */}
      <section className="px-6 pb-14 pt-32 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066FF]">
            Layanan
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {data.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            {data.shortDescription}
          </p>

          {/* Images Grid */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {/* Main Hero Image */}
            <div className="sm:col-span-2">
              <Image
                alt={data.heroImageAlt || data.title}
                src={data.heroImage}
                width={1200}
                height={800}
                priority
                unoptimized
                className="w-full rounded-[1.5rem] border border-slate-200/80 object-cover shadow-sm aspect-[16/7]"
              />
            </div>

            {/* Gallery Images */}
            {data.gallery &&
              data.gallery.map((img, idx) => (
                <div key={idx}>
                  <Image
                    alt={img.alt || `${data.title} ${idx + 1}`}
                    src={img.url}
                    width={1200}
                    height={800}
                    loading="lazy"
                    unoptimized
                    className="w-full rounded-[1.5rem] border border-slate-200/80 object-cover shadow-sm aspect-[4/3]"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Section 2: Detailed Text, Benefits & Scope */}
      <section className="bg-slate-50/60 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {data.aboutTitle || "Tentang layanan ini"}
          </h2>
          {data.aboutText.map((paragraph, idx) => (
            <p key={idx} className="mt-4 text-base leading-relaxed text-slate-500">
              {paragraph}
            </p>
          ))}

          {/* Benefits Section */}
          {data.benefits && data.benefits.length > 0 && (
            <>
              <h3 className="mt-12 text-xl font-bold text-slate-900">
                Manfaat untuk proyek Anda
              </h3>
              <ul className="mx-auto mt-6 grid gap-3 text-left sm:grid-cols-2">
                {data.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-white p-4 text-sm font-medium text-slate-800 shadow-sm"
                  >
                    <Sparkles
                      className="mt-0.5 size-4 shrink-0 text-[#70E000]"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Scope Section */}
          {data.scopes && data.scopes.length > 0 && (
            <>
              <h3 className="mt-12 text-xl font-bold text-slate-900">
                {data.scopeTitle || "Lingkup pekerjaan"}
              </h3>
              <ul className="mx-auto mt-6 grid gap-2.5 text-left sm:grid-cols-2">
                {data.scopes.map((scope, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm font-medium text-slate-800"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#0066FF]"
                      aria-hidden="true"
                    />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Consultation Button */}
          <Link
            href="/kontak"
            className="mt-10 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-bold text-white shadow transition-all hover:bg-slate-800"
          >
            Konsultasi {data.title}
            <ArrowRight className="size-4 text-white" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Section 3: Reusable CTA Banner */}
      <CtaSection />
    </div>
  );
}
