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

function getServiceIcon(slug: string, title: string, index: number) {
  const s = slug.toLowerCase();
  const t = title.toLowerCase();
  if (s.includes("perencanaan") || t.includes("perencanaan")) return Building2;
  if (s.includes("pengawasan") || s.includes("pelayanan") || t.includes("pengawasan")) return ClipboardCheck;
  if (s.includes("perizinan") || t.includes("perizinan")) return FileCheck2;
  if (s.includes("konstruksi") || t.includes("konstruksi")) return HardHat;

  const icons = [Building2, ClipboardCheck, FileCheck2, HardHat];
  return icons[index % icons.length];
}

export default async function ServicesSection() {
  let services: ServiceCardData[] = [];
  try {
    services = await fetchServicesSectionData();
  } catch (error) {
    console.error("Error loading ServicesSection data:", error);
  }

  return (
    <section className="bg-slate-50/60 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
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
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = getServiceIcon(service.slug, service.title, idx);
            return (
              <div key={service.id || service.href} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-100/80 bg-white text-center shadow-md">
                  <div className="relative">
                    <Image
                      alt={service.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover"
                      src={service.image}
                    />
                    <span className="absolute bottom-0 left-1/2 flex size-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-xl border border-slate-100 bg-white text-[#0066FF] shadow-md">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-6 pt-9">
                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap justify-center gap-2">
                      {service.tags.map((tag: string) => (
                        <li
                          key={tag}
                          className="rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <Link
                        href={service.href}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#70E000] px-6 text-sm font-bold text-slate-950 shadow transition-all hover:brightness-105"
                      >
                        Lihat Detail
                        <ArrowRight className="size-4 text-slate-950" aria-hidden="true" />
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




