import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProcessStepper from "@/components/ProcessStepper";
import { HOME_PROCESSES } from "@/lib/constant";
export default function ProcessSection() {
    return (_jsx("section", { className: "py-24 md:py-32 bg-slate-50 font-sans border-t border-b border-slate-100", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-8 text-center", children: [_jsx("span", { className: "text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block", children: "Proses Kerja" }), _jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4", children: "Tujuh tahap kerja yang terukur" }), _jsx("p", { className: "text-slate-500 text-sm max-w-xl mx-auto mb-16", children: "Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima." }), _jsx(ProcessStepper, { processes: HOME_PROCESSES })] }) }));
}
