import JobForm from "@/components/JobForm";
import { Clock, MapPin } from "lucide-react";
import { CAREER_JOBS } from "@/lib/constant";

const JOBS = CAREER_JOBS;

export default function KarirPage() {

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Bergabung Bersama Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Karir di An Nasr Konsultan
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Membuka kesempatan bagi tenaga teknik sipil, drafter arsitektur, dan pengawas konstruksi untuk berkembang dalam lingkungan profesional.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Job Openings */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
                Lowongan Pekerjaan Aktif
              </h2>
              <div className="flex flex-col gap-6">
                {JOBS.map((job, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-wrap gap-2.5 items-center justify-between mb-4">
                      <h3 className="font-extrabold text-xl text-slate-900">
                        {job.title}
                      </h3>
                      <span className="bg-blue-600/10 text-blue-600 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-slate-500 text-xs font-semibold mb-6">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{job.exp}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-5 text-left">
              <JobForm jobs={JOBS} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
