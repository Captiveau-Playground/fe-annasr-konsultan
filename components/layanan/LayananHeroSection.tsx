import { fetchLayananHeroData } from "@/lib/api/service-page";
import { LayananHeroData } from "@/types/service-page";

interface LayananHeroSectionProps {
  data?: LayananHeroData;
}

export default async function LayananHeroSection({ data: propData }: LayananHeroSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchLayananHeroData();
    } catch (err) {
      console.error("Error fetching LayananHeroSection data on server:", err);
    }
  }

  const badge = data?.badge || "Layanan";
  const title = data?.title || "Layanan teknik yang lengkap dan terintegrasi";
  const description =
    data?.description ||
    "Dari studi awal hingga serah terima pekerjaan, seluruh kebutuhan teknis proyek Anda dapat kami tangani dalam satu koordinasi.";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#133d9c_0%,#005ded_100%)] px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44 font-sans">
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

