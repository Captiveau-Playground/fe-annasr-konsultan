import { Compass, Flag } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Tentang Kami
            </p>
            <h2 className="mt-3 text-2xl leading-tight text-foreground sm:text-3xl font-bold">
              Tentang CV. AN NASR KONSULTAN
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              CV. AN NASR KONSULTAN adalah penyedia jasa konsultansi teknik sipil dan arsitektur yang berkedudukan di Kabupaten Jombang, Jawa Timur. Kami menangani pekerjaan perencanaan, pengawasan, pengurusan perizinan bangunan, serta pelaksanaan konstruksi untuk instansi pemerintah, lembaga, maupun perorangan.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tujuan kami sederhana: memastikan setiap rencana pembangunan berjalan tepat mutu, tepat biaya, dan tepat waktu. Dengan dukungan tenaga ahli di bidang struktur, jalan, jembatan, dan sumber daya air, kami menghadirkan solusi pembangunan yang profesional dan sesuai standar teknis yang berlaku.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 text-left">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Compass className="size-5" />
                </span>
                <span className="mt-3 block font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                  Visi
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                  Menjadi mitra konsultan teknik dan konstruksi yang terpercaya di Jawa Timur melalui kualitas pekerjaan dan integritas layanan.
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 text-left">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Flag className="size-5" />
                </span>
                <span className="mt-3 block font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                  Misi
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                  Menghadirkan perencanaan yang akurat, pengawasan yang disiplin, serta pelaksanaan konstruksi yang tepat mutu, biaya, dan waktu.
                </span>
              </div>
            </div>
          </div>

          <div>
            <Image
              alt="Seluruh pegawai CV. AN NASR KONSULTAN berfoto bersama di depan kantor"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              src="/assets/tim-perusahaan-CPnbyUCn.jpg"
              unoptimized
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Tim CV. AN NASR KONSULTAN — Jombang, Jawa Timur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

