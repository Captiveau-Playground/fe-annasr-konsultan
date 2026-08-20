import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left side: Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <Image
                src="/images/founder.jpg"
                alt="H. Ahmad Nasrullah, S.T."
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right side: Biography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
              Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              H. Ahmad Nasrullah, S.T.
            </h2>
            <span className="bg-lime-500/20 text-lime-800 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
              Founder & Direktur
            </span>
            <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              &ldquo;Setiap pekerjaan harus dapat dipertanggungjawabkan secara teknis maupun moral.&rdquo;
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Berpengalaman lebih dari 15 tahun di bidang teknik sipil, mulai dari perencanaan struktur, pengawasan proyek infrastruktur, hingga pelaksanaan konstruksi bangunan pemerintah dan swasta. Beliau mendirikan CV. AN NASR KONSULTAN dengan satu prinsip sederhana: memastikan kualitas konstruksi yang presisi dan akuntabel di Kabupaten Jombang, Jawa Timur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
