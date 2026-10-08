import React, { useState } from 'react';

export const LstmCellDiagram: React.FC = () => {
  const [activeCell, setActiveCell] = useState<number | null>(null);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-3 text-xs text-slate-600 px-2">
        <span className="font-bold text-slate-800 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
          LSTM уақыттық қатар бойымен ашылуы (Unrolled Recurrent Architecture)
        </span>
        <span className="text-[11px] text-slate-500 font-mono">
          $t = 1, 2, 3$ уақыт қадамдары
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 780 340"
          className="w-full h-auto max-w-[760px] mx-auto select-none"
        >
          {/* Top Output Bar */}
          <rect
            x="180"
            y="25"
            width="460"
            height="32"
            rx="6"
            fill="#f0fdf4"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <text x="210" y="46" fill="#047857" fontSize="13" fontWeight="bold">
            h₁
          </text>
          <text x="410" y="46" fill="#047857" fontSize="13" fontWeight="bold">
            h₂
          </text>
          <text x="610" y="46" fill="#047857" fontSize="13" fontWeight="bold">
            h₃
          </text>
          <text x="690" y="46" fill="#059669" fontSize="13" fontWeight="600">
            Output (Шығыс)
          </text>
          <line
            x1="650"
            y1="41"
            x2="680"
            y2="41"
            stroke="#10b981"
            strokeWidth="1.5"
            markerEnd="url(#green-arrow)"
          />

          {/* Cell State Stream (Blue Line) across the cells */}
          <line
            x1="60"
            y1="135"
            x2="720"
            y2="135"
            stroke="#3b82f6"
            strokeWidth="2.5"
            markerEnd="url(#blue-arrow)"
          />
          <circle cx="50" cy="135" r="16" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="44" y="139" fill="#2563eb" fontSize="12" fontWeight="bold">C₀</text>

          <circle cx="310" cy="115" r="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="303" y="119" fill="#2563eb" fontSize="11" fontWeight="bold">C₁</text>

          <circle cx="510" cy="115" r="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="503" y="119" fill="#2563eb" fontSize="11" fontWeight="bold">C₂</text>

          <circle cx="710" cy="115" r="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="703" y="119" fill="#2563eb" fontSize="11" fontWeight="bold">C₃</text>

          {/* Hidden State Stream (Amber Line) across cells */}
          <line
            x1="60"
            y1="175"
            x2="720"
            y2="175"
            stroke="#f59e0b"
            strokeWidth="2.5"
            markerEnd="url(#amber-arrow)"
          />
          <circle cx="50" cy="175" r="16" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="43" y="179" fill="#d97706" fontSize="12" fontWeight="bold">h₀</text>

          <circle cx="310" cy="160" r="14" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="304" y="164" fill="#d97706" fontSize="11" fontWeight="bold">h₁</text>

          <circle cx="510" cy="160" r="14" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="504" y="164" fill="#d97706" fontSize="11" fontWeight="bold">h₂</text>

          <text x="704" y="164" fill="#d97706" fontSize="11" fontWeight="bold">h₃</text>

          {/* 3 Main LSTM Cells */}
          {[
            { id: 1, cx: 160, label: 't=1', xInput: 'X₁', hOut: 'h₁' },
            { id: 2, cx: 360, label: 't=2', xInput: 'X₂', hOut: 'h₂' },
            { id: 3, cx: 560, label: 't=3', xInput: 'X₃', hOut: 'h₃' },
          ].map((cell) => {
            const isHovered = activeCell === cell.id;
            return (
              <g
                key={cell.id}
                className="cursor-pointer transition-all"
                onMouseEnter={() => setActiveCell(cell.id)}
                onMouseLeave={() => setActiveCell(null)}
              >
                {/* Cell Body */}
                <rect
                  x={cell.cx}
                  y="105"
                  width="110"
                  height="100"
                  rx="16"
                  fill={isHovered ? '#ede9fe' : '#f5f3ff'}
                  stroke="#7c3aed"
                  strokeWidth={isHovered ? '2.5' : '2'}
                  filter="drop-shadow(0 2px 4px rgba(124, 58, 237, 0.12))"
                />
                <text
                  x={cell.cx + 55}
                  y="160"
                  textAnchor="middle"
                  fill="#6d28d9"
                  fontSize="14"
                  fontWeight="bold"
                >
                  LSTM Cell
                </text>

                {/* Bottom Up Input Arrow */}
                <line
                  x1={cell.cx + 55}
                  y1="260"
                  x2={cell.cx + 55}
                  y2="210"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#red-arrow)"
                />

                {/* Top Hidden State Output Arrow */}
                <line
                  x1={cell.cx + 55}
                  y1="105"
                  x2={cell.cx + 55}
                  y2="60"
                  stroke="#059669"
                  strokeWidth="2"
                  markerEnd="url(#green-arrow)"
                />
              </g>
            );
          })}

          {/* Bottom Inputs Box */}
          <rect
            x="180"
            y="265"
            width="460"
            height="32"
            rx="6"
            fill="#fef2f2"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <text x="210" y="286" fill="#b91c1c" fontSize="13" fontWeight="bold">
            X₁
          </text>
          <text x="410" y="286" fill="#b91c1c" fontSize="13" fontWeight="bold">
            X₂
          </text>
          <text x="610" y="286" fill="#b91c1c" fontSize="13" fontWeight="bold">
            X₃
          </text>
          <text x="95" y="286" fill="#dc2626" fontSize="13" fontWeight="600">
            Input (Кіріс)
          </text>
          <line
            x1="135"
            y1="281"
            x2="175"
            y2="281"
            stroke="#ef4444"
            strokeWidth="1.5"
            markerEnd="url(#red-arrow)"
          />

          {/* Time Steps Horizontal Arrow at very bottom */}
          <line
            x1="180"
            y1="318"
            x2="640"
            y2="318"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#slate-arrow)"
          />
          <text
            x="410"
            y="314"
            textAnchor="middle"
            fill="#64748b"
            fontSize="12"
            fontWeight="600"
          >
            Time Steps (Уақыт қадамдары) →
          </text>

          {/* SVG Arrow Markers */}
          <defs>
            <marker id="blue-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
            </marker>
            <marker id="amber-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
            </marker>
            <marker id="green-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
            </marker>
            <marker id="red-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
            </marker>
            <marker id="slate-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="mt-2 text-xs text-slate-500 flex items-center gap-6 justify-center flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          <b>C_t</b> — Ұяшық жағдайы (Cell State, ұзақ мерзімді жад)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <b>h_t</b> — Жасырын күй (Hidden State, қысқа мерзімді жад)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <b>x_t</b> — Кіріс векторлары (Time steps)
        </span>
      </div>
    </div>
  );
};
