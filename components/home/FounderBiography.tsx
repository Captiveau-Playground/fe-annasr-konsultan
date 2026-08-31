import Image from "next/image";
import { fetchFounderSectionData } from "@/lib/api/founder";
import { FounderSectionData } from "@/types/founder";

interface FounderBiographyProps {
  data?: FounderSectionData;
  useBiography?: boolean;
}

function parseParagraphs(text?: string): string[] {
  if (!text) return [];
  if (text.includes("\n")) {
    return text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  }
  return [text.trim()];
}

export default async function FounderBiography({
  data: propData,
  useBiography = true,
}: FounderBiographyProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchFounderSectionData();
    } catch (err) {
      console.error("Error fetching FounderBiography data on server:", err);
    }
  }

  const name = data?.name || (useBiography ? "Nasrulloh, ST" : "H. Ahmad Nasrullah, S.T.");
  const position = data?.position || "Founder & Direktur";
  const firstAttachment = data?.attachments?.[0];
  const photoUrl = data?.photoUrl || firstAttachment?.url || "/images/founder.jpg";
  const photoAlt = data?.photoAlt || firstAttachment?.alt || name;

  // Home Page Mode (/) using DESCRIPTION key
  if (!useBiography) {
    const defaultDescription =
      "An Nasr Konsultan adalah perusahaan konsultan konstruksi yang membantu klien dalam perencanaan, pengawasan, dan pengendalian proyek untuk memastikan pekerjaan berjalan tepat mutu, tepat waktu, dan tepat biaya sesuai standar teknis dan peraturan yang berlaku.";

    const descriptionText =
      data?.description && typeof data.description === "string" && data.description.trim().length > 0
        ? data.description.trim()
        : defaultDescription;

    const paragraphs = parseParagraphs(descriptionText);

    const attachmentsToDisplay =
      data?.attachments && data.attachments.length > 0
        ? data.attachments
        : [
            {
              url: "/assets/proyek-gedung-DKD8sHd2.jpg",
              alt: "Dokumentasi Proyek 1",
            },
            {
              url: "/assets/proyek-gedung-DKD8sHd2.jpg",
              alt: "Dokumentasi Proyek 2",
            },
          ];

    return (
      <section className="py-16 md:py-24 bg-white font-sans text-slate-800">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left side: Founder Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative aspect-[4/4.6] w-full max-w-sm overflow-hidden rounded-[2.25rem] bg-slate-100 shadow-xl shadow-slate-200/60">
                <Image
                  src={photoUrl}
                  alt={photoAlt || `${name}, ${position} CV. AN NASR KONSULTAN`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  loading="lazy"
                  unoptimized
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right side: Information & Attachments */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E293B] leading-tight tracking-tight">
                {name}
              </h2>
              <div className="mt-3">
                <span className="bg-[#FF8D28] text-white font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full inline-block">
                  {position}
                </span>
              </div>
              <div className="mt-5 text-[#475569] text-base leading-relaxed max-w-2xl space-y-4">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Attachments Cards Grid */}
              {attachmentsToDisplay.length > 0 && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl">
                  {attachmentsToDisplay.map((att, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-lg shadow-slate-200/60 group"
                    >
                      <Image
                        src={att.url}
                        alt={att.alt || att.caption || `Lampiran ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 340px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // About Page Mode (/tentang) using BIOGRAPHY key
  const tagline = data?.tagline || "Mengenal Sosok di Balik An Nasr";
  const defaultBio =
    "Lulusan Teknik Sipil Universitas Darul Ulum Jombang, Nasrulloh memulai perjalanan kariernya di dunia kontraktor sebelum melanjutkan peran sebagai tenaga ahli. Pengalaman tersebut membentuk pemahaman yang kuat terhadap proses perencanaan hingga pelaksanaan proyek di lapangan.\n\nDengan keahlian di bidang bangunan gedung, jalan, sumber daya air, drafting, surveying, dan pelaksanaan lapangan, beliau membawa An Nasr dengan komitmen untuk menghadirkan solusi konstruksi yang aman, efisien, dan tepat guna.";

  const biographyText =
    data?.biography && typeof data.biography === "string" && data.biography.trim().length > 0
      ? data.biography.trim()
      : defaultBio;

  const paragraphs = parseParagraphs(biographyText);

  return (
    <section className="bg-[#EAF8FA] py-16 sm:py-20 lg:py-24 px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Founder Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative aspect-[4/4.5] w-full max-w-sm sm:max-w-md overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] bg-white shadow-lg shadow-cyan-950/10">
              <Image
                src={photoUrl}
                alt={photoAlt || `${name}, ${position} CV. AN NASR KONSULTAN`}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                loading="lazy"
                unoptimized
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Title, Name, Badge, Biography */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E293B] leading-[1.25] tracking-tight">
              {tagline}
            </h2>

            <div className="mt-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E293B] leading-snug">
                {name}
              </h3>
              <span className="mt-2.5 inline-block rounded-full bg-[#FF6B00] px-4 py-1 text-xs sm:text-sm font-semibold text-white shadow-xs">
                {position}
              </span>
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-600 font-normal max-w-3xl">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
