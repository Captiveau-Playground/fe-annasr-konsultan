import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#133d9c_0%,#005ded_100%)] px-8 py-16 text-center shadow-xl lg:px-16 lg:py-20">
          {/* Blueprint Grid Overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Konsultasikan Kebutuhan Proyek Anda Bersama Kami
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-white/80">
              Sampaikan rencana pembangunan Anda, tim kami akan membantu
              menyusun solusi teknis yang tepat sasaran dan sesuai anggaran.
            </p>
            <Link
              href="/kontak"
              className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#70E000] px-8 text-base font-bold text-slate-950 shadow-md transition-all hover:brightness-105"
            >
              Hubungi Kami
              <ArrowRight className="size-4 text-slate-950" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

