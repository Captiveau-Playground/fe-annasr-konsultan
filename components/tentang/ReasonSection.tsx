import { ReasonItem } from "@/types/reason";
import { fetchReasonSettingsData } from "@/lib/api/reason";

interface ReasonSectionProps {
  tagline?: string;
  reasons?: ReasonItem[];
}

export default async function ReasonSection({
  tagline: propTagline,
  reasons: propReasons,
}: ReasonSectionProps) {
  let reasons = propReasons;
  if (!reasons || reasons.length === 0) {
    try {
      reasons = await fetchReasonSettingsData();
    } catch (e) {
      console.error("Error loading reasons:", e);
      reasons = [];
    }
  }

  const tagline = propTagline || "Mengapa Memilih An Nasr?";

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-6 lg:px-8 font-sans text-slate-800">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E293B] text-left leading-tight tracking-tight mb-8 sm:mb-10">
          {tagline}
        </h2>

        {/* 3 Solid Orange Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons && reasons.length > 0 ? (
            reasons.map((reason, idx) => (
              <div
                key={reason.documentId || reason.id || idx}
                className="bg-[#FF6B00] rounded-[1.5rem] p-7 sm:p-8 flex flex-col justify-start items-start text-left text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3.5">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal whitespace-pre-line">
                  {reason.description}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full py-8 text-center text-slate-500">
              Belum ada informasi alasan yang tersedia.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
