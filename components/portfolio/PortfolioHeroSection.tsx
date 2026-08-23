import { fetchPortfolioHeroData } from "@/lib/api/portfolio-page";
import { PortfolioHeroData } from "@/types/portfolio-page";

interface PortfolioHeroSectionProps {
  data?: PortfolioHeroData;
}

export default async function PortfolioHeroSection({ data: propData }: PortfolioHeroSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchPortfolioHeroData();
    } catch (err) {
      console.error("Error fetching PortfolioHeroSection data on server:", err);
    }
  }

  const badge = data?.badge || "Portfolio";
  const tagline = data?.tagline || "Pekerjaan yang berbicara melalui hasilnya";
  const description =
    data?.description ||
    "Setiap proyek kami dokumentasikan sebagai bukti komitmen terhadap mutu pekerjaan dan ketepatan pelaksanaan di lapangan.";

  return (
    <section className="cta-gradient relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
      <div
        className="blueprint-grid absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {badge}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
          {tagline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
          {description}
        </p>
      </div>
    </section>
  );
}
