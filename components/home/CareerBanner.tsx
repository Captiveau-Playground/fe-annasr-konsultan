import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export default function CareerBanner() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-slate-100 bg-white p-8 text-center shadow-md">
        <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-[#70E000] text-slate-950 shadow-sm">
          <Briefcase className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-xl font-extrabold text-slate-900 sm:text-2xl">
          Bergabung Bersama Tim Kami
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
          Kami membuka kesempatan bagi tenaga teknik, drafter, dan pengawas
          lapangan untuk berkembang bersama CV. AN NASR KONSULTAN.
        </p>
        <Link
          href="/karir"
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0066FF] px-6 text-sm font-semibold text-white shadow transition-colors hover:bg-[#0052cc]"
        >
          Recruitment
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

