"use client";

import React, { useState } from "react";
import { TrendingUp } from "lucide-react";

interface WeekData {
  week: string;
  sessions: number;
  percent: number;
}

const STATS_DATA: WeekData[] = [
  { week: "M1", sessions: 210, percent: 47.6 },
  { week: "M2", sessions: 268, percent: 60.8 },
  { week: "M3", sessions: 245, percent: 55.6 },
  { week: "M4", sessions: 312, percent: 70.7 },
  { week: "M5", sessions: 356, percent: 80.7 },
  { week: "M6", sessions: 330, percent: 74.8 },
  { week: "M7", sessions: 398, percent: 90.2 },
  { week: "M8", sessions: 441, percent: 100 },
];

export default function VisitorStats() {
  const [activeWeek, setActiveWeek] = useState<WeekData>(STATS_DATA[7]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <TrendingUp className="size-4 shrink-0 text-[#70E000]" aria-hidden="true" />
            Sesi Pengunjung per Minggu
          </p>
          <p className="mt-1 truncate text-xs text-white/80">
            Total 2.560 sesi dalam 8 minggu terakhir
          </p>
        </div>
        <span className="shrink-0 text-2xl font-semibold text-[#70E000]">
          {activeWeek.sessions}
        </span>
      </div>

      <div className="mt-5 flex h-24 items-end gap-2">
        {STATS_DATA.map((item) => (
          <div
            key={item.week}
            onMouseEnter={() => setActiveWeek(item)}
            className="flex min-w-0 flex-1 flex-col items-center gap-2 cursor-pointer group"
          >
            <div
              className={`w-full rounded-t-md transition-all duration-300 ${
                activeWeek.week === item.week
                  ? "bg-[#70E000]"
                  : "bg-[#70E000]/70 group-hover:bg-[#70E000]"
              }`}
              style={{ height: `${item.percent}%` }}
              title={`${item.week}: ${item.sessions} sesi`}
            />
            <span
              className={`truncate text-[10px] transition-colors ${
                activeWeek.week === item.week
                  ? "text-[#70E000] font-bold"
                  : "text-white/75"
              }`}
            >
              {item.week}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

