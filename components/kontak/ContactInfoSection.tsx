import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constant";
import { AboutSectionData } from "@/types/about";

interface ContactInfoSectionProps {
  data?: AboutSectionData;
  title?: string;
  domicileAddress?: string;
  officeAddress?: string;
  operationalHours?: string;
  phone?: string;
  email?: string;
}

export default function ContactInfoSection({
  data,
  title = "Mari bicarakan rencana proyek Anda",
  domicileAddress: propDomicile,
  officeAddress: propOffice,
  operationalHours: propHours,
  phone: propPhone,
  email: propEmail,
}: ContactInfoSectionProps) {
  const domicileAddress = propDomicile || data?.domicileAddress || CONTACT_INFO.domicileAddress;
  const officeAddress = propOffice || data?.officeAddress || CONTACT_INFO.officeAddress;
  const operationalHours = propHours || data?.operationalHours || CONTACT_INFO.operationalHours;
  const phone = propPhone || data?.phone || CONTACT_INFO.phoneNumberFormatted;
  const email = propEmail || data?.email || CONTACT_INFO.email;
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-6 px-6 lg:px-8 font-sans text-slate-800">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E293B] text-center tracking-tight mb-10 sm:mb-14">
          {title}
        </h1>

        {/* 2 Top Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Lokasi dan Waktu */}
          <div className="rounded-[2rem] bg-[#F8FAFC] border border-slate-100 p-8 lg:p-10 shadow-xs text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-7">
              Lokasi dan Waktu
            </h2>
            <div className="space-y-6">
              {/* Domisili Perusahaan */}
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EBF5FE] text-[#0066FF]">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-sm font-bold text-[#1E293B]">
                    Domisili Perusahaan
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {domicileAddress}
                  </span>
                </div>
              </div>

              {/* Alamat Kantor */}
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EBF5FE] text-[#0066FF]">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-sm font-bold text-[#1E293B]">
                    Alamat Kantor
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {officeAddress}
                  </span>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EBF5FE] text-[#0066FF]">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-sm font-bold text-[#1E293B]">
                    Jam Operasional
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {operationalHours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Informasi Kontak */}
          <div className="rounded-[2rem] bg-[#F8FAFC] border border-slate-100 p-8 lg:p-10 shadow-xs text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-7">
              Informasi Kontak
            </h2>
            <div className="space-y-6">
              {/* Telepon */}
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EBF5FE] text-[#0066FF]">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-sm font-bold text-[#1E293B]">
                    Telepon
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {phone}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EBF5FE] text-[#0066FF]">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-sm font-bold text-[#1E293B]">
                    Email
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
