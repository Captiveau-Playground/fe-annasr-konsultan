import type { Metadata } from "next";
import ClientsSection from "@/components/home/ClientsSection";
import LocationsSection from "@/components/home/LocationsSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Klien Kami — CV. AN NASR KONSULTAN",
  description:
    "Kepercayaan yang kami jaga di setiap proyek. Dari pemerintah desa hingga perusahaan swasta, setiap pekerjaan kami tangani dengan standar mutu yang sama.",
};

export default function KlienPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Klien Hero Section */}
      <section className="cta-gradient relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div
          className="blueprint-grid absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Klien Kami
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
            Kepercayaan yang kami jaga di setiap proyek
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Dari pemerintah desa hingga perusahaan swasta, setiap pekerjaan kami
            tangani dengan standar mutu yang sama.
          </p>
        </div>
      </section>

      {/* Clients Section Component */}
      <ClientsSection />

      {/* Locations Section Component */}
      <LocationsSection />

      {/* CTA Section Component */}
      <CtaSection />
    </div>
  );
}
