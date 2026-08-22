import { fetchTentangHeroData } from "@/lib/api/about-use";
import { TentangHeroData } from "@/types/about-use";

interface TentangHeroSectionProps {
  data?: TentangHeroData;
}

export default async function TentangHeroSection({ data: propData }: TentangHeroSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchTentangHeroData();
    } catch (err) {
      console.error("Error fetching TentangHeroSection data on server:", err);
    }
  }

  const badge = data?.badge || "Tentang Kami";
  const title = data?.title || "Mitra teknik yang tumbuh bersama pembangunan daerah";
  const description =
    data?.description ||
    "Kami hadir untuk memastikan setiap rencana pembangunan berjalan dengan perhitungan yang matang dan pelaksanaan yang bertanggung jawab.";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#133d9c_0%,#005ded_100%)] px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
      {/* Blueprint Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#78E100]">
          {badge}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </section>
  );
}

