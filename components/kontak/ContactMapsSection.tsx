interface ContactMapsSectionProps {
  domicileAddress?: string;
  officeAddress?: string;
  domicileMapQuery?: string;
  officeMapQuery?: string;
}

export default function ContactMapsSection({
  domicileAddress,
  officeAddress,
  domicileMapQuery: propDomicileQuery,
  officeMapQuery: propOfficeQuery,
}: ContactMapsSectionProps) {
  const domicileQuery =
    propDomicileQuery || domicileAddress || "Bedahlawak, Tembelang, Jombang";
  const officeQuery =
    propOfficeQuery || officeAddress || "Candi Mulyo, Jombang";

  const domicileSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    domicileQuery
  )}&output=embed`;
  const officeSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    officeQuery
  )}&output=embed`;

  return (
    <section className="pt-4 pb-16 sm:pb-20 lg:pb-24 px-6 lg:px-8 font-sans text-slate-800">
      <div className="mx-auto max-w-7xl">
        {/* 2 Google Maps Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Map Domisili */}
          <div className="text-left">
            <h3 className="text-base font-bold text-[#1E293B] mb-3">
              Map Domisili Perusahaan :
            </h3>
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 shadow-xs">
              <iframe
                title="Peta lokasi domisili perusahaan CV. AN NASR KONSULTAN"
                src={domicileSrc}
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Map Alamat Kantor */}
          <div className="text-left">
            <h3 className="text-base font-bold text-[#1E293B] mb-3">
              Map Alamat Kantor :
            </h3>
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 shadow-xs">
              <iframe
                title="Peta lokasi alamat kantor CV. AN NASR KONSULTAN"
                src={officeSrc}
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
