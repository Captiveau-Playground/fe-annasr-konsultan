import Image from "next/image";
import Link from "next/link";
import { ArticleItem } from "@/lib/api/article";

interface ArtikelRelatedSectionProps {
  articles: ArticleItem[];
}

export default function ArtikelRelatedSection({ articles }: ArtikelRelatedSectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-16 lg:pb-24">
      {/* Section Label */}
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 lg:mb-8">
        ARTIKEL TERKAIT
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((item) => (
          <article
            key={item.id}
            className="group rounded-2xl border border-slate-200/80 bg-white p-4 lg:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="overflow-hidden rounded-xl relative aspect-[16/10] w-full mb-3.5 bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Category */}
              <span className="block text-[11px] font-bold text-[#0066FF] uppercase tracking-wider mb-2">
                {item.category}
              </span>

              {/* Title */}
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#0066FF] transition-colors">
                <Link href={`/artikel/${item.slug}`}>
                  {item.title}
                </Link>
              </h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
