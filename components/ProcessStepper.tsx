"use client";

import React, { useState } from "react";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProcessStepperProps {
  processes: ProcessStep[];
}

export default function ProcessStepper({ processes }: ProcessStepperProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full">
      {/* Stepper Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
        {processes.map((proc, idx) => (
          <button
            key={proc.step}
            onClick={() => setActiveStep(idx)}
            className={`px-5 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeStep === idx
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            {proc.step} {proc.title}
          </button>
        ))}
      </div>

      {/* Active Step Content */}
      <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 max-w-3xl mx-auto text-left shadow-lg relative overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="text-6xl md:text-8xl font-black text-blue-600/10 select-none shrink-0 md:leading-none">
          {processes[activeStep].step}
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-slate-900 mb-3">
            {processes[activeStep].title}
          </h3>
          <p className="text-slate-500 text-base leading-relaxed">
            {processes[activeStep].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
