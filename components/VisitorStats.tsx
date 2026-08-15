"use client";

import React, { useState } from "react";
import { TrendingUp } from "lucide-react";

interface WeekData {
  week: string;
  sessions: number;
  height: string; // Tailwind height class
}

const STATS_DATA: WeekData[] = [
  { week: "M1", sessions: 280, height: "h-16" },
  { week: "M2", sessions: 320, height: "h-20" },
  { week: "M3", sessions: 290, height: "h-18" },
  { week: "M4", sessions: 390, height: "h-24" },
  { week: "M5", sessions: 410, height: "h-28" },
  { week: "M6", sessions: 380, height: "h-24" },
  { week: "M7", sessions: 450, height: "h-32" },
  { week: "M8", sessions: 441, height: "h-30" }, // Selected/Current Week
];

export default function VisitorStats() {
  const [selectedWeek, setSelectedWeek] = useState<WeekData>(STATS_DATA[7]);

  return (
    <div className="bg-blue-900/40 border border-blue-800/60 rounded-2xl p-6 md:p-8 font-sans w-full max-w-4xl mx-auto backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-lime-400 font-bold tracking-wide uppercase text-sm mb-2">
            <TrendingUp className="w-4 h-4" />
            Sesi Pengunjung per Minggu
          </div>
          <p className="text-slate-300 text-sm">
            Total <strong className="text-white">2.560</strong> sesi dalam 8 minggu terakhir
          </p>
        </div>

        {/* Dynamic Big Number Display */}
        <div className="text-right">
          <div className="text-5xl font-black text-lime-400 leading-none">
            {selectedWeek.sessions}
          </div>
          <div className="text-slate-400 text-xs mt-1 uppercase font-semibold tracking-wider">
            Sesi Minggu {selectedWeek.week}
          </div>
        </div>
      </div>

      {/* Styled Bar Chart */}
      <div className="flex items-end justify-between gap-2 md:gap-4 pt-4 border-t border-blue-800/40">
        {STATS_DATA.map((item) => {
          const isSelected = selectedWeek.week === item.week;

          return (
            <button
              key={item.week}
              onMouseEnter={() => setSelectedWeek(item)}
              onClick={() => setSelectedWeek(item)}
              className="flex-1 flex flex-col items-center group focus:outline-none cursor-pointer"
            >
              {/* Tooltip */}
              <div className="relative mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded shadow-md whitespace-nowrap">
                  {item.sessions} Sesi
                </span>
              </div>

              {/* Bar */}
              <div className="w-full bg-blue-950/60 rounded-t-lg h-36 flex items-end p-1">
                <div
                  className={`w-full rounded-t-md transition-all duration-300 ${item.height} ${
                    isSelected
                      ? "bg-lime-400 shadow-[0_0_12px_rgba(139,227,0,0.5)]"
                      : "bg-blue-600/60 group-hover:bg-blue-500/80"
                  }`}
                />
              </div>

              {/* Label */}
              <span
                className={`text-xs font-semibold mt-3 transition-colors ${
                  isSelected ? "text-lime-400 font-bold" : "text-slate-400 group-hover:text-slate-300"
                }`}
              >
                {item.week}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
