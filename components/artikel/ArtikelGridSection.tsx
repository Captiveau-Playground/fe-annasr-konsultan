import Image from "next/image";
import Link from "next/link";
import { ArticleItem } from "@/lib/api/article";

interface ArtikelGridSectionProps {
  articles: ArticleItem[];
}

export default function ArtikelGridSection({ articles }: ArtikelGridSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-16 lg:pb-24">
      {/* Section Header */}
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 lg:mb-8">
        BERITA LAINNYA
      </h3>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((item) => (
          <article
            key={item.id}
            className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="overflow-hidden rounded-xl relative aspect-[16/10] w-full mb-4 bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Category */}
              <span className="block text-[11px] font-bold text-[#0066FF] uppercase tracking-wider mb-2">
                {item.category}
              </span>

              {/* Title */}
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2.5 group-hover:text-[#0066FF] transition-colors">
                <Link href={`/artikel/${item.slug}`}>
                  {item.title}
                </Link>
              </h4>

              {/* Excerpt */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                {item.excerpt}
              </p>
            </div>

            {/* Date & Read Time */}
            <div className="text-xs text-slate-400 font-medium pt-3 border-t border-slate-100 flex items-center gap-1.5">
              <span>{item.date}</span>
              <span>•</span>
              <span>{item.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
