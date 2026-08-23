import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fetchCareerData } from "@/lib/api/career";

interface CtaSectionProps {
  tagline?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export default async function CtaSection({
  tagline: propTagline,
  description: propDescription,
  buttonText: propButtonText,
  buttonUrl = "/kontak",
}: CtaSectionProps = {}) {
  let tagline = propTagline;
  let description = propDescription;
  let buttonText = propButtonText;

  if (!tagline || !description || !buttonText) {
    try {
      const { page } = await fetchCareerData();
      if (page) {
        if (!tagline) tagline = page.cta_tagline;
        if (!description) description = page.cta_description;
        if (!buttonText) buttonText = page.cta_button_text;
      }
    } catch (e) {
      console.error("Error fetching CtaSection data from career-pages:", e);
    }
  }

  const finalTagline =
    tagline || "Konsultasikan Kebutuhan Proyek Anda Bersama Kami";
  const finalDescription =
    description ||
    "Sampaikan rencana pembangunan Anda, tim kami akan membantu menyusun solusi teknis yang tepat sasaran dan sesuai anggaran.";
  const finalButtonText = buttonText || "Hubungi Kami";

  return (
    <section className="bg-background px-6 py-20 lg:px-8 lg:py-24 font-sans">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] cta-gradient px-8 py-16 text-center shadow-xl lg:px-16 lg:py-20">
          {/* Blueprint Grid Overlay */}
          <div
            className="blueprint-grid pointer-events-none absolute inset-0 opacity-25"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-[2.5rem]">
              {finalTagline}
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-primary-foreground/80">
              {finalDescription}
            </p>
            <Link
              href={buttonUrl}
              className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-md transition-all hover:brightness-105"
            >
              {finalButtonText}
              <ArrowRight className="size-4 text-accent-foreground" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
