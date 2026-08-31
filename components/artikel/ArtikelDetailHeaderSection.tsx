import Link from "next/link";
import { ArticleItem } from "@/lib/api/article";

interface ArtikelDetailHeaderSectionProps {
  article: ArticleItem;
}

export default function ArtikelDetailHeaderSection({ article }: ArtikelDetailHeaderSectionProps) {
  const authorName = article.authorName || "Dr. Arif Nugroho";
  const authorRole = article.authorRole || "Direktur Operasional";

  return (
    <section className="pt-28 pb-8 lg:pt-36 lg:pb-10 px-5 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium mb-6">
        <Link href="/artikel" className="hover:text-[#0066FF] transition-colors">
          Artikel
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">{article.category}</span>
      </nav>

      {/* Category Tag */}
      <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0066FF] uppercase mb-3 inline-block">
        {article.category}
      </span>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
        {article.title}
      </h1>

      {/* Excerpt / Lead */}
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
        {article.excerpt}
      </p>

      {/* Meta info row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500 border-t border-b border-slate-100 py-4">
        <span className="font-bold text-slate-900">{authorName}</span>
        <span className="text-slate-400">{authorRole}</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-500">{article.date}</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-500">{article.readTime}</span>
      </div>
    </section>
  );
}
