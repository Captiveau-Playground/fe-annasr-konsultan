import {
  ArrowRight,
  Building2,
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
  sectionTitle?: string;
  sectionTagline?: string;
  sectionDescription?: string;
}

const DEFAULT_DETAILED_SERVICES = [
  {
    id: "jasa-perencanaan",
    title: "Jasa Perencanaan",
    slug: "jasa-perencanaan",
    description:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    image: "/images/perencanaan.jpg",
    alt: "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    icon: Building2,
    href: "/layanan/jasa-perencanaan",
    buttonText: "Lihat Detail",
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
    id: "jasa-pengawasan",
    title: "Jasa Pengawasan",
    slug: "jasa-pengawasan",
    description:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    image: "/images/pengawasan.jpg",
    alt: "Pengawas lapangan memeriksa progres pekerjaan konstruksi dengan alat ukur",
    icon: ClipboardCheck,
    href: "/layanan/jasa-pengawasan",
    buttonText: "Lihat Detail",
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
    id: "jasa-perizinan",
    title: "Jasa Perizinan",
    slug: "jasa-perizinan",
    description:
      "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    image: "/images/perizinan.jpg",
    alt: "Pendampingan pengurusan dokumen perizinan bangunan PBG dan SLF",
    icon: FileCheck2,
    href: "/layanan/jasa-perizinan",
    buttonText: "Lihat Detail",
    scopes: [
      "Persetujuan Bangunan Gedung (PBG)",
      "Sertifikat Laik Fungsi (SLF)",
    ],
  },
  {
    id: "jasa-konstruksi",
    title: "Jasa Konstruksi",
    slug: "jasa-konstruksi",
    description:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    image: "/images/konstruksi.jpg",
    alt: "Pekerja konstruksi membangun struktur bangunan dua lantai",
    icon: HardHat,
    href: "/layanan/jasa-konstruksi",
    buttonText: "Lihat Detail",
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
  sectionTitle = "Layanan Kami",
  sectionTagline = "Solusi lengkap dari perencanaan hingga pelaksanaan",
  sectionDescription = "Empat lini layanan utama yang saling terhubung, sehingga setiap tahap proyek Anda tetap terkendali dalam satu standar mutu.",
}: LayananListSectionProps) {
  let apiServices = propServices;
  if (!apiServices || apiServices.length === 0) {
    try {
      apiServices = await fetchServicesSectionData();
    } catch (err) {
      console.error("Error fetching services data in LayananListSection:", err);
    }
  }

  // Dynamically map API services or use fallback
  const items =
    apiServices && apiServices.length > 0
      ? apiServices.map((apiItem) => {
        const rawSlug = apiItem.slug || "";
        const defMatch = DEFAULT_DETAILED_SERVICES.find(
          (def) =>
            rawSlug.toLowerCase().includes(def.slug.toLowerCase()) ||
            def.slug.toLowerCase().includes(rawSlug.toLowerCase())
        );

        return {
          id: String(apiItem.id || apiItem.slug),
          title: apiItem.title,
          slug: apiItem.slug,
          description: apiItem.description,
          image: apiItem.image || defMatch?.image || "/images/perencanaan.jpg",
          alt: apiItem.alt || apiItem.title,
          icon: getServiceIcon(apiItem.slug),
          href: apiItem.href || `/layanan/${apiItem.slug}`,
          buttonText: `Lihat Detail ${apiItem.title}`,
          scopes:
            apiItem.tags && apiItem.tags.length > 0
              ? apiItem.tags
              : defMatch?.scopes || [],
        };
      })
      : DEFAULT_DETAILED_SERVICES;


  return (
    <section className="bg-slate-50/60 px-6 py-20 lg:px-8 lg:py-24 font-sans">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066FF]">
            {sectionTitle}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            {sectionTagline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            {sectionDescription}
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
                    className={`text-center lg:text-left ${isEven ? "lg:order-2" : "lg:order-1"
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
