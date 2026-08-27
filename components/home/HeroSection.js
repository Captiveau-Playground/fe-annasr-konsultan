import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fetchHeroSectionData } from "@/lib/api/hero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default async function HeroSection({ data: propData }) {
    let data = propData;
    if (!data) {
        try {
            data = await fetchHeroSectionData();
        }
        catch (err) {
            console.error("Error fetching HeroSection data on server:", err);
        }
    }
    // Fallbacks for initial state or missing Strapi fields
    const title = (data === null || data === void 0 ? void 0 : data.title) || "CV. An Nasr";
    const titleHighlight = (data === null || data === void 0 ? void 0 : data.titleHighlight) || "Konsultan";
    const description = (data === null || data === void 0 ? void 0 : data.description) ||
        "Menyediakan layanan perencanaan, pengawasan, perizinan, dan konstruksi dengan mengutamakan kualitas, profesionalisme, serta ketepatan dalam setiap tahap pekerjaan.";
    const primaryCtaText = (data === null || data === void 0 ? void 0 : data.primaryCtaText) || "Konsultasi Sekarang";
    const primaryCtaUrl = (data === null || data === void 0 ? void 0 : data.primaryCtaUrl) || "/kontak";
    const secondaryCtaText = (data === null || data === void 0 ? void 0 : data.secondaryCtaText) || "Lihat Layanan";
    const secondaryCtaUrl = (data === null || data === void 0 ? void 0 : data.secondaryCtaUrl) || "/layanan";
    const bgImage = (data === null || data === void 0 ? void 0 : data.backgroundImageUrl) || "/images/hero-bg.jpg";
    return (_jsxs("section", { className: "relative min-h-screen flex items-center justify-center bg-slate-950 font-sans overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(Image, { src: bgImage, alt: "Construction Site background", fill: true, sizes: "100vw", unoptimized: true, className: "object-cover opacity-100 select-none scale-105 animate-pulse-slow", priority: true }), _jsx("div", { className: "absolute inset-0 bg-[#4f6baa]/85 z-10" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" })] }), _jsxs("div", { className: "relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12 md:mt-0", children: [_jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl mb-8", children: [title, " ", _jsx("span", { className: "text-lime-400", children: titleHighlight })] }), _jsx("p", { className: "text-slate-300 text-base md:text-xl leading-relaxed max-w-3xl mb-12", children: description }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-5", children: [_jsxs(Link, { href: primaryCtaUrl, className: "px-8 py-4 rounded-full text-base font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 hover:scale-105 shadow-[0_4px_20px_rgba(139,227,0,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group", children: [primaryCtaText, _jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })] }), _jsx(Link, { href: secondaryCtaUrl, className: "px-8 py-4 rounded-full text-base font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors flex items-center justify-center", children: secondaryCtaText })] })] })] }));
}
