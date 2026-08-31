import Image from "next/image";
import { TeamMember } from "@/types/team";
import { fetchTeamSettingsData } from "@/lib/api/team";

interface TeamSectionProps {
  tagline?: string;
  members?: TeamMember[];
}

export default async function TeamSection({
  tagline: propTagline,
  members: propMembers,
}: TeamSectionProps) {
  let members = propMembers;
  if (!members || members.length === 0) {
    try {
      members = await fetchTeamSettingsData();
    } catch (e) {
      console.error("Error loading team members:", e);
      members = [];
    }
  }

  const tagline = propTagline || "Tim di Balik Setiap Proyek";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF4FF] via-[#C9E0FF] to-[#92BDFA] py-16 sm:py-20 lg:py-24 px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E293B] text-center leading-tight tracking-tight mb-12 sm:mb-16">
          {tagline}
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {members && members.length > 0 ? (
            members.map((member, idx) => {
              const photoSrc = member.photoUrl || "/images/team.jpg";
              return (
                <div
                  key={member.documentId || member.id || idx}
                  className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-md border border-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* Photo container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={photoSrc}
                      alt={member.photoAlt || member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Info */}
                  <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-[#1E293B] leading-snug whitespace-pre-line">
                      {member.name}
                    </h3>
                    <span className="mt-3 inline-block rounded-full bg-[#F1F5F9] px-4 py-1 text-xs font-semibold text-slate-500">
                      {member.position}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-slate-600">
              Belum ada data anggota tim yang tersedia.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
