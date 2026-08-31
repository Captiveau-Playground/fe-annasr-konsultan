interface ArtikelHeaderSectionProps {
  title?: string;
  tagline?: string;
  description?: string;
}

export default function ArtikelHeaderSection({
  title = "ARTIKEL & BERITA",
  tagline = "Informasi Resmi Perusahaan",
  description = "Publikasi resmi mengenai kebijakan, kegiatan operasional, serta perkembangan CV An Nasr Konsultan. Pilih salah satu berita untuk membaca isi selengkapnya.",
}: ArtikelHeaderSectionProps) {
  return (
    <section className="pt-28 pb-10 lg:pt-36 lg:pb-12 text-center px-5 lg:px-8 max-w-4xl mx-auto">
      <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0066FF] uppercase mb-3 inline-block">
        {title}
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
        {tagline}
      </h1>
      <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </section>
  );
}
