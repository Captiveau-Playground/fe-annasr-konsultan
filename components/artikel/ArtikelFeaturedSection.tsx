import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ArticleItem } from "@/lib/api/article";

interface ArtikelFeaturedSectionProps {
  article: ArticleItem;
}

export default function ArtikelFeaturedSection({ article }: ArtikelFeaturedSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 mb-12 lg:mb-16">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white p-5 sm:p-7 lg:p-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Featured Image */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl relative aspect-[16/10] w-full bg-slate-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Featured Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tag Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {article.tags?.map((tag, idx) => (
                <span
                  key={tag}
                  className={`text-[11px] font-bold px-3 py-1 rounded-md tracking-wider uppercase ${
                    idx === 0
                      ? "bg-[#FF8D28] text-white"
                      : "bg-[#0066FF] text-white"
                  }`}
                >
                  {tag}
                </span>
              )) || (
                <span className="bg-[#0066FF] text-white text-[11px] font-bold px-3 py-1 rounded-md tracking-wider uppercase">
                  {article.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-snug mb-3">
              <Link
                href={`/artikel/${article.slug}`}
                className="hover:text-[#0066FF] transition-colors"
              >
                {article.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {article.excerpt}
            </p>

            {/* Date & Read Time */}
            <div className="text-xs sm:text-sm text-slate-400 font-medium mb-6">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Button */}
            <Link
              href={`/artikel/${article.slug}`}
              className="inline-flex items-center gap-1.5 bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all shadow-sm shadow-blue-500/20"
            >
              Baca Selengkapnya
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
