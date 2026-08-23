import { fetchClientsSectionData } from "@/lib/api/client";
import { ClientsSectionData } from "@/types/client";

interface ClientsSectionProps {
  data?: ClientsSectionData;
}

export default async function ClientsSection({ data: propData }: ClientsSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchClientsSectionData();
    } catch (err) {
      console.error("Error fetching ClientsSection data on server:", err);
    }
  }

  const title = data?.header?.title || "Klien Kami";
  const tagline = data?.header?.tagline || "Dipercaya instansi, lembaga, dan mitra usaha";
  const description =
    data?.header?.description ||
    "Sebagian pemberi tugas yang pernah bekerja sama dengan CV. AN NASR KONSULTAN.";

  const clientList = data?.clients || [];
  const marqueeItems =
    clientList.length > 0
      ? clientList.length < 10
        ? [...clientList, ...clientList, ...clientList, ...clientList]
        : [...clientList, ...clientList]
      : [];

  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-20 font-sans">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {title}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {tagline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      <div className="marquee-mask mt-10 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-3">
          {marqueeItems.map((client, idx) => (
            <li
              key={idx}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 shadow-[var(--shadow-soft)]"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-[10px] font-semibold text-primary">
                {client.label}
              </span>
              <span className="whitespace-nowrap text-xs font-medium text-foreground/80">
                {client.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
