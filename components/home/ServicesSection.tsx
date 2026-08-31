import {
  Building2,
  ClipboardCheck,
  FileCheck2,
  HardHat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchServicesSectionData } from "@/lib/api/services";
import { fetchHeroSectionData } from "@/lib/api/hero";
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

interface ServicesSectionProps {
  tagline?: string;
}

export default async function ServicesSection({ tagline }: ServicesSectionProps = {}) {
  let services: ServiceCardData[] = [];
  let serviceTagline = tagline;

  try {
    const servicesPromise = fetchServicesSectionData();
    const taglinePromise = !serviceTagline
      ? fetchHeroSectionData().then((data) => data.serviceTagline)
      : Promise.resolve(serviceTagline);

    const [fetchedServices, fetchedTagline] = await Promise.all([
      servicesPromise,
      taglinePromise,
    ]);

    services = fetchedServices;
    if (fetchedTagline) {
      serviceTagline = fetchedTagline;
    }
  } catch (error) {
    console.error("Error loading ServicesSection data:", error);
  }

  const rawTagline =
    serviceTagline || "Layanan An Nasr dalam \nMendukung Proyek Anda";
  const taglineLines = rawTagline.replace(/\u2028/g, "\n").split("\n");

  return (
    <section className="bg-gradient-to-b from-[#EBF3FE] via-[#D8E8FD] to-[#92BDFA] px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-left">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-normal text-slate-900 leading-[36px] sm:leading-[46px] lg:leading-[55px]">
            {taglineLines.map((line, idx) => (
              <span key={idx} className="block">
                {line.trim()}
              </span>
            ))}
          </h2>
        </div>
        <div className="mt-10 lg:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = getServiceIcon(service.slug, service.title, idx);
            return (
              <Link
                key={service.id || service.href}
                href={service.href}
                className="group flex h-full flex-col"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm border border-white/60 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      alt={service.alt || service.title}
                      width={600}
                      height={450}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={service.image}
                    />
                    <span className="absolute bottom-0 left-1/2 flex size-11 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#0066FF] shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5 text-[#0066FF]" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-6 pt-9 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0066FF]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 line-clamp-3">
                      {service.description}
                    </p>
                    <ul className="mt-auto pt-4 flex flex-wrap justify-center gap-1.5">
                      {service.tags.map((tag: string) => (
                        <li
                          key={tag}
                          className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[11px] font-medium text-slate-600 leading-normal"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}





