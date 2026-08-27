import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata = {
    title: "CV. AN NASR KONSULTAN — Konsultan Teknik Sipil & Konstruksi Jombang",
    description: "Jasa perencanaan, pengawasan, perizinan (PBG & SLF), dan konstruksi bangunan, jalan, jembatan, serta irigasi di Kabupaten Jombang, Jawa Timur.",
};
export default function RootLayout({ children }) {
    return (_jsx("html", { lang: "id", className: `${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`, children: _jsxs("body", { className: "min-h-full flex flex-col bg-slate-50 text-slate-900", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-1 flex flex-col", children: children }), _jsx(Footer, {}), _jsx(WhatsAppWidget, {})] }) }));
}
