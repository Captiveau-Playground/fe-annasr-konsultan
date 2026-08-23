import { fetchProcessSectionData } from "@/lib/api/process";
import { ProcessSectionData } from "@/types/process";

interface ProcessSectionProps {
  data?: ProcessSectionData;
}

export default async function ProcessSection({ data: propData }: ProcessSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchProcessSectionData();
    } catch (err) {
      console.error("Error fetching ProcessSection data on server:", err);
    }
  }

  const badge = data?.header?.badge || "Proses Kerja";
  const tagline = data?.header?.tagline || "Tujuh tahap kerja yang terukur";
  const description =
    data?.header?.description ||
    "Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima.";

  const items = data?.items || [];

  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-20 font-sans">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {badge}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {tagline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.step} className="h-full">
              <li className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-soft)]">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-xs">
                  {item.step}
                </span>
                <h3 className="mt-3 text-sm font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
}
