import Image from "next/image";
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
  const bgImage = data?.bgImage || "/images/hero-bg.jpg";

  return (
    <section className="cta-gradient relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44 font-sans">
      {/* Background Image with Overlay & Blueprint Grid */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background tentang kami hero"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover opacity-30 select-none scale-105"
          priority
        />
        <div
          className="blueprint-grid absolute inset-0 opacity-25"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <h1 className="text-[30px] sm:text-[38px] lg:text-[48px] font-normal tracking-normal text-white text-center leading-[38px] sm:leading-[48px] lg:leading-[60px]">
          {title}
        </h1>
      </div>
    </section>
  );
}


