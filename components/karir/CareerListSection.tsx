import { Briefcase, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constant";
import { CareerJobItem } from "@/types/career";

interface CareerListSectionProps {
  title?: string;
  jobs?: CareerJobItem[];
  email?: string;
}

const DEFAULT_JOBS: CareerJobItem[] = [
  {
    id: 1,
    title: "Drafter AutoCad",
    location: "Jombang · Penuh Waktu",
    description:
      "Menguasai AutoCAD 2D/3D untuk membuat gambar kerja arsitektur dan struktur bangunan.",
    cta_button_text: "Lamar posisi ini",
  },
  {
    id: 2,
    title: "Tenaga Ahli Pengawasan",
    location: "Jombang · Penuh Waktu",
    description:
      "Melakukan pengawasan pelaksanaan proyek fisik di lapangan dan memastikan kesesuaian dengan RKS.",
    cta_button_text: "Lamar posisi ini",
  },
  {
    id: 3,
    title: "Tenaga Ahli Perencanaan",
    location: "Jombang · Penuh Waktu",
    description:
      "Menyusun perhitungan struktur, Rencana Anggaran Biaya (RAB), serta dokumen teknis perizinan.",
    cta_button_text: "Lamar posisi ini",
  },
];

export default function CareerListSection({
  title = "Lowongan Kerja di An Nasr",
  jobs,
  email: propEmail,
}: CareerListSectionProps) {
  const phone = CONTACT_INFO.phoneNumberClean || "6281200000000";
  const contactEmail = propEmail || CONTACT_INFO.email;
  const displayJobs = jobs && jobs.length > 0 ? jobs : DEFAULT_JOBS;

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-6 lg:px-8 font-sans text-slate-800 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Centered Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E293B] text-center tracking-tight mb-10 sm:mb-14">
          {title}
        </h1>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayJobs.map((job, idx) => {
            const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya ingin melamar posisi ${job.title} di CV. AN NASR KONSULTAN.`
            )}`;
            const buttonLabel = job.cta_button_text || "Lamar posisi ini";
            const locationText = job.location || "Jombang · Penuh Waktu";

            return (
              <div
                key={job.id || idx}
                className="flex flex-col justify-between rounded-[2rem] border border-slate-200/80 bg-white p-7 sm:p-8 shadow-xs text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full"
              >
                <div className="flex flex-col items-center">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF] mb-4">
                    <Briefcase className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#1E293B]">
                    {job.title}
                  </h2>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="size-3.5 text-[#0066FF]" aria-hidden="true" />
                    {locationText}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="mt-6 pt-2 w-full">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center h-11 rounded-full bg-[#FF8D28] text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-orange-600 transition-colors"
                  >
                    {buttonLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Email Footer Note */}
        <p className="mt-12 text-center text-xs sm:text-sm text-slate-500">
          Kirim CV dan portofolio Anda ke{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold text-[#0066FF] hover:underline"
          >
            {contactEmail}
          </a>{" "}
          atau hubungi kami melalui WhatsApp.
        </p>
      </div>
    </section>
  );
}
