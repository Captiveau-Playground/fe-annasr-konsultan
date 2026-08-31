"use client";

import Link from "next/link";
import { FaqItem } from "@/types/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqSectionProps {
  tagline?: string;
  description?: string;
  ctaBtnText?: string;
  faqs?: FaqItem[];
}

export default function FaqSection({
  tagline = "Pertanyaan yang sering diajukan",
  description = "Belum menemukan jawabannya? Tim kami siap\nmembantu menjelaskan kebutuhan teknis proyek\nAnda.",
  ctaBtnText,
  faqs = [],
}: FaqSectionProps) {
  const formattedDescription = description.replace(/\u2028/g, "\n").split("\n");

  // Determine button text: if ctaBtnText is short (<= 30 chars), use it, otherwise default to "Konsultasi Sekarang"
  const buttonText =
    ctaBtnText && ctaBtnText.trim().length > 0 && ctaBtnText.trim().length <= 30
      ? ctaBtnText.trim()
      : "Konsultasi Sekarang";

  return (
    <section className="bg-[#F4F7FC] py-16 sm:py-20 lg:py-24 px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Header & Orange CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#1E293B] leading-[1.25]">
              {tagline}
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-md whitespace-pre-line">
              {formattedDescription.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </p>

            <Link
              href="/kontak"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#E56000] hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Column: Shadcn Accordion */}
          <div className="lg:col-span-7">
            {faqs && faqs.length > 0 ? (
              <Accordion className="space-y-3.5">
                {faqs.map((faq, index) => {
                  const value = String(faq.documentId || faq.id || index);
                  return (
                    <AccordionItem
                      key={value}
                      value={value}
                      className="bg-white rounded-[1.25rem] sm:rounded-full border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 data-open:!rounded-[1.25rem] data-open:ring-1 data-open:ring-[#FF6B00]/30 data-open:shadow-md border-none"
                    >
                      <AccordionTrigger className="flex w-full items-center justify-between gap-4 px-6 sm:px-8 py-4 sm:py-5 text-left text-sm sm:text-base font-bold text-[#1E293B] hover:text-[#FF6B00] hover:no-underline cursor-pointer group leading-snug font-sans">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 sm:px-8 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100/80 pt-3 font-sans">
                        <p className="whitespace-pre-line">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <div className="p-8 rounded-[1.25rem] bg-white border border-slate-100 text-center text-slate-400 text-sm">
                Belum ada pertanyaan FAQ yang tersedia.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
