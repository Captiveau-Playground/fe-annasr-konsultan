import { Compass, Flag } from "lucide-react";
import Image from "next/image";
import { fetchAboutSectionData } from "@/lib/api/about";
import { AboutSectionData } from "@/types/about";

interface AboutSectionProps {
  data?: AboutSectionData;
}

function parseParagraphs(text?: string): string[] {
  if (!text) return [];
  if (text.includes("\n")) {
    return text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  }
  if (text.includes("  ")) {
    return text.split(/\s{2,}/).map((p) => p.trim()).filter(Boolean);
  }
  return [text.trim()];
}

export default async function AboutSection({ data: propData }: AboutSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchAboutSectionData();
    } catch (err) {
      console.error("Error fetching AboutSection data on server:", err);
    }
  }

  const title = data?.title || "Tentang Kami";
  const tagline = data?.tagline || "Tentang CV. AN NASR KONSULTAN";
  const description =
    data?.description ||
    "CV. AN NASR KONSULTAN adalah penyedia jasa konsultansi teknik sipil dan arsitektur yang berkedudukan di Kabupaten Jombang, Jawa Timur. Kami menangani pekerjaan perencanaan, pengawasan, pengurusan perizinan bangunan, serta pelaksanaan konstruksi untuk instansi pemerintah, lembaga, maupun perorangan.\n\nTujuan kami sederhana: memastikan setiap rencana pembangunan berjalan tepat mutu, tepat biaya, dan tepat waktu. Dengan dukungan tenaga ahli di bidang struktur, jalan, jembatan, dan sumber daya air, kami menghadirkan solusi pembangunan yang profesional dan sesuai standar teknis yang berlaku.";
  const vision =
    data?.vision ||
    "Menjadi mitra konsultan teknik dan konstruksi yang terpercaya di Jawa Timur melalui kualitas pekerjaan dan integritas layanan.";
  const mission =
    data?.mission ||
    "Menghadirkan perencanaan yang akurat, pengawasan yang disiplin, serta pelaksanaan konstruksi yang tepat mutu, biaya, dan waktu.";
  const imageUrl = data?.imageUrl || "/assets/tim-perusahaan-CPnbyUCn.jpg";
  const imageAlt = data?.imageAlt || tagline;
  const imageCaption = data?.imageCaption || "Tim CV. AN NASR KONSULTAN — Jombang, Jawa Timur";

  const paragraphs = parseParagraphs(description);

  return (
    <section className="py-16 md:py-24 bg-background font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {title}
            </p>
            <h2 className="mt-3 text-2xl leading-tight text-foreground sm:text-3xl font-bold">
              {tagline}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 text-left">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Compass className="size-5" />
                </span>
                <span className="mt-3 block font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                  Visi
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                  {vision}
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 text-left">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Flag className="size-5" />
                </span>
                <span className="mt-3 block font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                  Misi
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                  {mission}
                </span>
              </div>
            </div>
          </div>

          <div>
            <Image
              alt={imageAlt}
              loading="lazy"
              width={1400}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              src={imageUrl}
              unoptimized
            />
            {imageCaption && (
              <p className="mt-4 text-center text-sm text-muted-foreground">
                {imageCaption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


