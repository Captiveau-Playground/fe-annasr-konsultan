import {
  ArrowRight,
  Building2,
  Check,
  ClipboardCheck,
  FileCheck2,
  HardHat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchServicesSectionData } from "@/lib/api/services";
import { ServiceCardData } from "@/types/service";

interface LayananListSectionProps {
  services?: ServiceCardData[];
}

const DEFAULT_DETAILED_SERVICES = [
  {
    id: "perencanaan",
    title: "Jasa Perencanaan",
    slug: "perencanaan",
    description:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    image: "/images/perencanaan.jpg",
    alt: "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    icon: Building2,
    href: "/layanan/perencanaan",
    buttonText: "Lihat Detail Jasa Perencanaan",
    scopes: [
      "Perencanaan Bangunan Gedung",
      "Perencanaan Jalan",
      "Perencanaan Jembatan",
      "Perencanaan Sumber Daya Air",
      "Saluran Irigasi",
      "Penahan Tanah",
      "Bendungan",
    ],
  },
  {
    id: "pengawasan",
    title: "Jasa Pengawasan",
    slug: "pengawasan",
    description:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    image: "/images/pengawasan.jpg",
    alt: "Pengawas lapangan memeriksa progres pekerjaan konstruksi dengan alat ukur",
    icon: ClipboardCheck,
    href: "/layanan/pengawasan",
    buttonText: "Lihat Detail Jasa Pengawasan",
    scopes: [
      "Pengawasan Bangunan Gedung",
      "Pengawasan Jalan",
      "Pengawasan Jembatan",
      "Pengawasan Irigasi",
      "Pengawasan Penahan Tanah",
      "Pengawasan Bendungan",
    ],
  },
  {
    id: "perizinan",
    title: "Jasa Perizinan",
    slug: "perizinan",
    description:
      "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    image: "/images/perizinan.jpg",
    alt: "Pendampingan pengurusan dokumen perizinan bangunan PBG dan SLF",
    icon: FileCheck2,
    href: "/layanan/perizinan",
    buttonText: "Lihat Detail Jasa Perizinan",
    scopes: [
      "Persetujuan Bangunan Gedung (PBG)",
      "Sertifikat Laik Fungsi (SLF)",
    ],
  },
  {
    id: "konstruksi",
    title: "Jasa Konstruksi",
    slug: "konstruksi",
    description:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    image: "/images/konstruksi.jpg",
    alt: "Pekerja konstruksi membangun struktur bangunan dua lantai",
    icon: HardHat,
    href: "/layanan/konstruksi",
    buttonText: "Lihat Detail Jasa Konstruksi",
    scopes: [
      "Pembangunan Rumah",
      "Renovasi Rumah",
      "Gedung",
      "Kantor",
      "Sekolah",
      "Jalan Aspal",
      "Jalan Beton",
      "Jembatan",
      "Saluran Irigasi",
      "Penahan Tanah",
      "Bendungan",
    ],
  },
];

function getServiceIcon(slug: string) {
  const s = slug.toLowerCase();
  if (s.includes("perencanaan")) return Building2;
  if (s.includes("pengawasan") || s.includes("pelayanan")) return ClipboardCheck;
  if (s.includes("perizinan")) return FileCheck2;
  if (s.includes("konstruksi")) return HardHat;
  return Building2;
}

export default async function LayananListSection({
  services: propServices,
}: LayananListSectionProps) {
  let apiServices = propServices;
  if (!apiServices || apiServices.length === 0) {
    try {
      apiServices = await fetchServicesSectionData();
    } catch (err) {
      console.error("Error fetching services data in LayananListSection:", err);
    }
  }

  // Merge API data with detailed default content if matching by slug
  const items = DEFAULT_DETAILED_SERVICES.map((defItem) => {
    const matched = apiServices?.find((s) => s.slug.includes(defItem.slug));
    if (matched) {
      return {
        ...defItem,
        title: matched.title || defItem.title,
        description: matched.description || defItem.description,
        image: matched.image || defItem.image,
        alt: matched.alt || defItem.alt,
        href: matched.href || defItem.href,
        scopes: matched.tags && matched.tags.length > 0 ? matched.tags : defItem.scopes,
      };
    }
    return defItem;
  });

  return (
    <section className="bg-slate-50/60 px-6 py-20 lg:px-8 lg:py-24 font-sans">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066FF]">
            Layanan Kami
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Solusi lengkap dari perencanaan hingga pelaksanaan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Empat lini layanan utama yang saling terhubung, sehingga setiap tahap
            proyek Anda tetap terkendali dalam satu standar mutu.
          </p>
        </div>

        {/* Detailed Articles List */}
        <div className="mt-14 space-y-16">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.icon || getServiceIcon(item.slug);

            return (
              <div key={item.id}>
                <article
                  id={item.id}
                  className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  {/* Image Column */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 shadow-md">
                      <Image
                        alt={item.alt}
                        width={1200}
                        height={800}
                        loading="lazy"
                        unoptimized
                        className="aspect-[3/2] w-full object-cover"
                        src={item.image}
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`text-center lg:text-left ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-blue-600/10 text-[#0066FF] lg:mx-0">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-500">
                      {item.description}
                    </p>

                    {/* Scopes List */}
                    <ul className="mt-6 grid gap-2.5 text-left sm:grid-cols-2">
                      {item.scopes.map((scope, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-2 text-sm font-medium text-slate-700"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-[#0066FF]"
                            aria-hidden="true"
                          />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <div className="mt-8">
                      <Link
                        href={item.href}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-bold text-white shadow transition-all hover:bg-slate-800"
                      >
                        {item.buttonText}
                        <ArrowRight
                          className="size-4 text-white"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
