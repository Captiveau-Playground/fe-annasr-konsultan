import Image from "next/image";
import { ArticleItem } from "@/lib/api/article";

interface ArtikelDetailBodySectionProps {
  article: ArticleItem;
}

export default function ArtikelDetailBodySection({ article }: ArtikelDetailBodySectionProps) {
  const paragraphs = article.contentParagraphs || [article.excerpt];

  return (
    <section className="mx-auto max-w-4xl px-5 lg:px-8 mb-12">
      {/* Featured Main Image */}
      <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[16/9] w-full mb-10 bg-slate-100 shadow-xs">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>

      {/* Paragraphs */}
      <article className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>
    </section>
  );
}
