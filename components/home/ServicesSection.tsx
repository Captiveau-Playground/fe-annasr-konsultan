import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  FileCheck2,
  HardHat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "Jasa Perencanaan",
    description:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    image: "/images/perencanaan.jpg",
    alt: "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    icon: Building2,
    href: "/layanan/perencanaan",
    tags: [
      "Perencanaan Bangunan Gedung",
      "Perencanaan Jalan",
      "Perencanaan Jembatan",
    ],
  },
  {
    title: "Jasa Pengawasan",
    description:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    image: "/images/pengawasan.jpg",
    alt: "Pengawas lapangan memeriksa progres pekerjaan konstruksi dengan alat ukur",
    icon: ClipboardCheck,
    href: "/layanan/pengawasan",
    tags: [
      "Pengawasan Bangunan Gedung",
      "Pengawasan Jalan",
      "Pengawasan Jembatan",
    ],
  },
  {
    title: "Jasa Perizinan",
    description:
      "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    image: "/images/perizinan.jpg",
    alt: "Pendampingan pengurusan dokumen perizinan bangunan PBG dan SLF",
    icon: FileCheck2,
    href: "/layanan/perizinan",
    tags: [
      "Persetujuan Bangunan Gedung (PBG)",
      "Sertifikat Laik Fungsi (SLF)",
    ],
  },
  {
    title: "Jasa Konstruksi",
    description:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    image: "/images/konstruksi.jpg",
    alt: "Pekerja konstruksi membangun struktur bangunan dua lantai",
    icon: HardHat,
    href: "/layanan/konstruksi",
    tags: ["Pembangunan Rumah", "Renovasi Rumah", "Gedung"],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-surface px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Layanan Kami
          </p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
            Solusi lengkap dari perencanaan hingga pelaksanaan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Empat lini layanan utama yang saling terhubung, sehingga setiap tahap
            proyek Anda tetap terkendali dalam satu standar mutu.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.href} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card text-center shadow-[var(--shadow-soft)]">
                  <div className="relative">
                    <Image
                      alt={service.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover"
                      src={service.image}
                    />
                    <span className="absolute bottom-3 left-1/2 flex size-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-xl bg-card text-primary shadow-[var(--shadow-soft)]">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-6 pt-9">
                    <h3 className="text-lg text-foreground">{service.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap justify-center gap-2">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-11 rounded-full px-6 text-sm bg-accent text-accent-foreground transition-none hover:bg-accent"
                      >
                        Lihat Detail
                        <ArrowRight className="size-4" aria-hidden="true" />
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

