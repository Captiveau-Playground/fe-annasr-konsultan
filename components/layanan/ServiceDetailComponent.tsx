import { ArrowRight, MapPin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/home/CtaSection";
import { ServiceDetailData } from "@/types/service";

export function MarkdownRenderer({ content }: { content?: string }) {
  if (!content) return null;

  const lines = content.replace(/\u00a0/g, " ").split("\n");

  const blocks: React.ReactNode[] = [];
  let currentList: {
    type: "ol" | "ul";
    items: { num?: string; text: string; subItems?: string[] }[];
  } | null = null;

  const flushList = (keyPrefix: string) => {
    if (!currentList) return;

    if (currentList.type === "ol") {
      blocks.push(
        <ol key={`ol-${keyPrefix}`} className="space-y-4 my-4 text-left">
          {currentList.items.map((item, idx) => (
            <li key={idx} className="space-y-2">
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-slate-900 text-sm sm:text-base shrink-0 mt-0.5 min-w-[1.25rem]">
                  {item.num || `${idx + 1}.`}
                </span>
                <span className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {item.text}
                </span>
              </div>
              {item.subItems && item.subItems.length > 0 && (
                <ul className="ml-7 space-y-2 border-l-2 border-slate-100 pl-4 mt-2">
                  {item.subItems.map((sub, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm leading-relaxed"
                    >
                      <span className="text-slate-400 font-bold mt-0.5">•</span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      );
    } else {
      blocks.push(
        <ul key={`ul-${keyPrefix}`} className="space-y-2.5 my-4 text-left">
          {currentList.items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              <span className="text-[#0066FF] font-bold shrink-0 mt-0.5">•</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      );
    }
    currentList = null;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    // Headings #, ##, ###
    if (trimmed.startsWith("#")) {
      flushList(`h-${index}`);
      const headingText = trimmed.replace(/^#+\s*/, "");
      blocks.push(
        <h3
          key={`h-${index}`}
          className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-6 mb-3 leading-tight first:mt-0"
        >
          {headingText}
        </h3>
      );
      return;
    }

    // Numbered List: 1. Text or 10. Text
    const numMatch = trimmed.match(/^(\d+)\.\s*(.*)/);
    if (numMatch) {
      const num = `${numMatch[1]}.`;
      const text = numMatch[2];
      if (!currentList || currentList.type !== "ol") {
        flushList(`list-${index}`);
        currentList = { type: "ol", items: [] };
      }
      currentList.items.push({ num, text, subItems: [] });
      return;
    }

    // Bullet List / Sub-bullet: - Text or * Text
    const bulletMatch = trimmed.match(/^[-*]\s*(.*)/);
    if (bulletMatch) {
      const text = bulletMatch[1];
      if (currentList && currentList.type === "ol" && currentList.items.length > 0) {
        currentList.items[currentList.items.length - 1].subItems?.push(text);
      } else {
        if (!currentList || currentList.type !== "ul") {
          flushList(`list-${index}`);
          currentList = { type: "ul", items: [] };
        }
        currentList.items.push({ text });
      }
      return;
    }

    // Normal Paragraph
    flushList(`p-${index}`);
    blocks.push(
      <p
        key={`p-${index}`}
        className="text-slate-600 text-sm sm:text-base leading-relaxed my-3"
      >
        {trimmed}
      </p>
    );
  });

  flushList("final");

  return <div className="text-left font-sans">{blocks}</div>;
}

interface ServiceDetailComponentProps {
  data: ServiceDetailData;
}

export default function ServiceDetailComponent({ data }: ServiceDetailComponentProps) {
  const serviceKeyword = (data.title || "")
    .toLowerCase()
    .replace("jasa ", "")
    .trim();

  const hasWorkflows = Array.isArray(data.workflows) && data.workflows.length > 0;
  const hasRequirements =
    Array.isArray(data.requirements) && data.requirements.length > 0;

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="px-6 pb-12 pt-28 lg:px-8 lg:pt-36 bg-white font-sans">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0066FF]">
            LAYANAN KAMI
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#0F172A] leading-tight mb-12 sm:mb-16">
            {data.title}
          </h1>

          <div className="grid gap-10 md:grid-cols-2 items-center text-left">
            {/* Hero Image */}
            <div className="w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-slate-200/70 shadow-sm">
              <Image
                alt={data.heroImageAlt || data.title}
                src={data.heroImage}
                width={800}
                height={600}
                priority
                unoptimized
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>

            {/* Short Description & CTA */}
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm sm:text-base leading-relaxed text-slate-500 font-normal mb-8">
                {data.shortDescription}
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0F172A] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-slate-800"
              >
                <span>{data.ctaBtnText || "Konsultasi Sekarang"}</span>
                <ArrowRight className="size-4 text-white" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: WHY & BENEFITS */}
      <section className="px-6 py-14 lg:px-8 lg:py-16 bg-white">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <div className="mb-4 inline-flex items-center justify-center size-10 rounded-xl bg-blue-50 text-[#0066FF] shadow-xs">
              <FileText className="size-5" />
            </div>
            {data.section2Description ? (
              <MarkdownRenderer content={data.section2Description} />
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {data.aboutTitle || "Tentang Layanan Ini"}
                </h2>
                {data.aboutText?.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Right: Section 2 Image */}
          <div className="w-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 shadow-md">
            <Image
              alt={data.section2ImageAlt || data.title}
              src={data.section2Image || data.heroImage}
              width={800}
              height={600}
              unoptimized
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3A. WORKFLOW SECTION (If Present) */}
      {hasWorkflows && (
        <section className="px-6 py-16 lg:px-8 bg-slate-50/50">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 max-w-2xl mx-auto leading-tight mb-12">
              {`Alur proses layanan ${serviceKeyword} dari awal hingga selesai`}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 justify-center">
              {data.workflows!.map((wf, idx) => (
                <div
                  key={wf.id || idx}
                  className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-xs flex flex-col items-center justify-center gap-3 transition-all hover:shadow-sm"
                >
                  <div className="size-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-extrabold text-xs">
                    {wf.stepNumber || String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {wf.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3B. REQUIREMENTS SECTION (If Present, e.g. Jasa Perizinan) */}
      {hasRequirements && (
        <section className="px-6 py-16 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl space-y-12">
            {data.requirements!.map((req, idx) => (
              <div key={req.id || idx} className="space-y-6">
                <div className="flex items-center justify-center gap-3 text-center">
                  <span className="size-3.5 rounded-full bg-[#0066FF] inline-block shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {req.title}
                  </h2>
                </div>
                <div className="bg-white border border-slate-200/80 rounded-[1.75rem] p-6 sm:p-10 shadow-xs text-left">
                  <MarkdownRenderer content={req.description} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. SECTION 3: OUTPUT / DOKUMEN YANG DITERIMA KLIEN */}
      {(data.section3Text || data.section3Image) && (
        <section className="px-6 py-16 lg:px-8 bg-white">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-12 items-center">
            {/* Left Image (5 cols) */}
            <div className="md:col-span-5 w-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 shadow-md">
              <Image
                alt={data.section3ImageAlt || data.title}
                src={data.section3Image || data.heroImage}
                width={600}
                height={750}
                unoptimized
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>

            {/* Right Text (7 cols) */}
            <div className="md:col-span-7 text-left">
              {data.section3Text && (
                <MarkdownRenderer content={data.section3Text} />
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. PORTFOLIO CARDS ROW */}
      {data.portfolios && data.portfolios.length > 0 && (
        <section className="px-6 py-12 lg:px-8 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {data.portfolios.map((proj, idx) => (
                <article
                  key={proj.id || idx}
                  className="group relative flex h-full aspect-[4/3] w-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-900 shadow-md transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
                >
                  <Image
                    alt={proj.title}
                    src={proj.image || proj.fallbackImage || "/assets/proyek-gedung-DKD8sHd2.jpg"}
                    width={600}
                    height={450}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start text-left">
                    <span className="inline-block rounded-md bg-[#FF7A00] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-1.5">
                      {proj.category || "BANGUNAN"}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold leading-snug text-white drop-shadow-sm">
                      {proj.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
                      <MapPin className="size-3.5 text-slate-300 shrink-0" />
                      {proj.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CTA BANNER */}
      <CtaSection />
    </div>
  );
}
