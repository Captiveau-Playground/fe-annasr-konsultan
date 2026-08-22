"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export default function ProcessStepper({ processes }) {
    const [activeStep, setActiveStep] = useState(0);
    return (_jsxs("div", { className: "w-full", children: [_jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto", children: processes.map((proc, idx) => (_jsxs("button", { onClick: () => setActiveStep(idx), className: `px-5 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${activeStep === idx
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"}`, children: [proc.step, " ", proc.title] }, proc.step))) }), _jsxs("div", { className: "bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 max-w-3xl mx-auto text-left shadow-lg relative overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center", children: [_jsx("div", { className: "text-6xl md:text-8xl font-black text-blue-600/10 select-none shrink-0 md:leading-none", children: processes[activeStep].step }), _jsxs("div", { children: [_jsx("h3", { className: "font-extrabold text-2xl text-slate-900 mb-3", children: processes[activeStep].title }), _jsx("p", { className: "text-slate-500 text-base leading-relaxed", children: processes[activeStep].desc })] })] })] }));
}
