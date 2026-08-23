import type { Metadata } from "next";
import { Briefcase, MapPin } from "lucide-react";
import CtaSection from "@/components/home/CtaSection";
import { CONTACT_INFO } from "@/lib/constant";
import { fetchCareerData } from "@/lib/api/career";

export const metadata: Metadata = {
  title: "Karir & Lowongan Kerja — CV. AN NASR KONSULTAN",
  description:
    "Tumbuh bersama tim teknik kami. Kami mencari orang-orang yang teliti, disiplin, dan senang belajar di dunia perencanaan dan konstruksi.",
};

export const dynamic = "force-dynamic";

export default async function KarirPage() {
  const phone = CONTACT_INFO.phoneNumberClean || "6281200000000";
  const { page, jobs } = await fetchCareerData();

  const heroBadge = page?.hero_title || "Karir";
  const heroTagline = page?.hero_tagline || "Tumbuh bersama tim teknik kami";
  const heroDescription =
    page?.hero_description ||
    "Kami mencari orang-orang yang teliti, disiplin, dan senang belajar di dunia perencanaan dan konstruksi.";

  const jobList = jobs || [];

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="cta-gradient relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div
          className="blueprint-grid absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {heroBadge}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
            {heroTagline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Career Openings Section */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {jobList.map((job, idx) => {
              const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
                `Halo, saya ingin melamar posisi ${job.title} di CV. AN NASR KONSULTAN.`
              )}`;

              const buttonLabel = job.cta_button_text || "Lamar posisi ini";
              const locationText = job.location || "Jombang · Penuh Waktu";

              return (
                <div key={job.id || idx} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
                    <span className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="size-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-lg font-bold text-foreground">
                      {job.title}
                    </h2>
                    <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                      {locationText}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                      {job.description}
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer shadow h-11 rounded-full px-6 text-sm mx-auto mt-6 bg-accent text-accent-foreground transition-all hover:brightness-105"
                    >
                      {buttonLabel}
                    </a>
                  </article>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Kirim CV dan portofolio Anda ke{" "}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-medium text-primary hover:underline"
            >
              {CONTACT_INFO.email}
            </a>{" "}
            atau hubungi kami melalui WhatsApp.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
