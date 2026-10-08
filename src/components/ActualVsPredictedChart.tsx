import React, { useState } from 'react';
import { Layers, Droplets, Info } from 'lucide-react';

// Generates data that matches the user's VS Code screenshot exactly (Image 11)
// 75 samples = 75 experimental field plots (бақыланған 75 егістік сынақ учаскесі)
// Water requirement in mm per season: 1 mm water depth = 10 m³/ha
const RAW_SAMPLES = [
  680, 200, 260, 310, 890, 340, 720, 380, 860, 280,
  120, 150, 650, 180, 700, 310, 600, 740, 290, 420,
  530, 80, 360, 480, 620, 780, 730, 210, 170, 790,
  330, 640, 390, 810, 520, 350, 160, 690, 470, 240,
  910, 410, 870, 190, 230, 710, 780, 860, 320, 940,
  610, 370, 190, 680, 750, 300, 880, 460, 310, 250,
  590, 760, 790, 420, 650, 850, 270, 890, 180, 360,
  140, 430, 560, 410, 280
];

const PREDICTED_VALUE = 388.35; // mm

export const ActualVsPredictedChart: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [sampleLimit, setSampleLimit] = useState<number>(RAW_SAMPLES.length);
  // Unit mode: 'mm' or 'm3_ha' (1 mm = 10 m3/ha)
  const [unitMode, setUnitMode] = useState<'mm' | 'm3_ha'>('mm');
  // Selected area in hectares for instant water volume calculation
  const [selectedHectares, setSelectedHectares] = useState<number>(1);

  const samples = RAW_SAMPLES.slice(0, sampleLimit);
  const width = 800;
  const height = 280;
  const padding = { top: 30, right: 30, bottom: 40, left: 65 };

  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const minY = 0;
  const maxY = unitMode === 'mm' ? 1000 : 10000;

  const toDisplayValue = (mm: number) => {
    return unitMode === 'mm' ? mm : mm * 10;
  };

  const getX = (index: number) => {
    return padding.left + (index / (samples.length - 1)) * innerWidth;
  };

  const getY = (valInMm: number) => {
    const val = toDisplayValue(valInMm);
    return padding.top + innerHeight - ((val - minY) / (maxY - minY)) * innerHeight;
  };

  // Build SVG path for Actual line
  const actualPathD = samples.reduce((acc, val, i) => {
    const x = getX(i);
    const y = getY(val);
    return `${acc} ${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }, '');

  // Predicted line
  const predY = getY(PREDICTED_VALUE);
  const predPathD = `M ${padding.left} ${predY.toFixed(1)} L ${padding.left + innerWidth} ${predY.toFixed(1)}`;

  const activeValMm = hoveredIndex !== null ? samples[hoveredIndex] : null;
  const activeValDisplay = activeValMm !== null ? toDisplayValue(activeValMm) : null;
  const predValDisplay = toDisplayValue(PREDICTED_VALUE);

  // Calculated total water for chosen hectares
  const totalWaterM3 = Math.round(PREDICTED_VALUE * 10 * selectedHectares);

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm p-4 relative">
      {/* Top Header & Context Description */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2 px-1">
        <div>
          <h4 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <span>Actual vs Predicted: 1 гектарға кететін су мөлшері</span>
            <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
              75 сынақ учаскесі (1 га нормасы)
            </span>
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            <strong>75 үлгі</strong> — сынақтан өткен 75 егістік учаскесі. Агрономиялық формула: <strong>1 мм су = 10 м³/га</strong> (1 гектарға 10 тонна су).
          </p>
        </div>

        {/* Unit Switcher & Legend */}
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setUnitMode('mm')}
              className={`px-2.5 py-1 rounded-md transition ${
                unitMode === 'mm' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              мм (қабат)
            </button>
            <button
              onClick={() => setUnitMode('m3_ha')}
              className={`px-2.5 py-1 rounded-md transition ${
                unitMode === 'm3_ha' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              м³/га (көлем)
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 bg-blue-600 rounded-full inline-block"></span>
              <span className="text-slate-700">Actual (Нақты)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 bg-amber-500 rounded-full inline-block"></span>
              <span className="text-slate-700">Predicted (Болжам)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Canvas Chart */}
      <div className="relative overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto select-none"
          style={{ minWidth: '600px' }}
        >
          {/* Background grid lines */}
          {(unitMode === 'mm' ? [0, 200, 400, 600, 800, 1000] : [0, 2000, 4000, 6000, 8000, 10000]).map((tick) => {
            const valInMm = unitMode === 'mm' ? tick : tick / 10;
            const y = getY(valInMm);
            return (
              <g key={tick}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={padding.left + innerWidth}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="11"
                  fill="#64748b"
                  fontFamily="sans-serif"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Axes */}
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={padding.top + innerHeight}
            stroke="#1e293b"
            strokeWidth="1.5"
          />
          <line
            x1={padding.left}
            y1={padding.top + innerHeight}
            x2={padding.left + innerWidth}
            y2={padding.top + innerHeight}
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Y Axis Label */}
          <text
            transform={`rotate(-90 ${padding.left - 45} ${padding.top + innerHeight / 2})`}
            x={padding.left - 45}
            y={padding.top + innerHeight / 2}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#334155"
          >
            {unitMode === 'mm' ? 'Су қабаты: Water (мм)' : '1 гектарға су көлемі: (м³/га)'}
          </text>

          {/* X Axis Label */}
          <text
            x={padding.left + innerWidth / 2}
            y={height - 8}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#334155"
          >
            Сынақ учаскелері (Барлығы: {samples.length} үлгі / учаске)
          </text>

          {/* Predicted Line (Orange) */}
          <path
            d={predPathD}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Actual Line (Blue) */}
          <path
            d={actualPathD}
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Interactive Hover Area & Dots */}
          {samples.map((val, i) => {
            const x = getX(i);
            const y = getY(val);
            const isHovered = hoveredIndex === i;

            return (
              <g
                key={i}
                className="cursor-pointer transition-transform"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <rect
                  x={x - (innerWidth / samples.length) / 2}
                  y={padding.top}
                  width={innerWidth / samples.length}
                  height={innerHeight}
                  fill="transparent"
                />

                {isHovered && (
                  <>
                    <line
                      x1={x}
                      y1={padding.top}
                      x2={x}
                      y2={padding.top + innerHeight}
                      stroke="#94a3b8"
                      strokeDasharray="3 3"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="5.5"
                      fill="#2563eb"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx={x}
                      cy={predY}
                      r="5.5"
                      fill="#f59e0b"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Real Land Area Calculator & Field Clarification Card */}
      <div className="mt-2.5 grid grid-cols-1 md:grid-cols-12 gap-3 text-xs bg-slate-50 border border-slate-200 p-3 rounded-xl">
        {/* Left: Hover details */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {hoveredIndex !== null && activeValMm !== null ? (
            <div className="space-y-1">
              <div className="font-bold text-slate-800 flex items-center gap-2">
                <span>Учаске #{hoveredIndex + 1}:</span>
                <span className="text-blue-700 font-extrabold">
                  Нақты: {activeValDisplay?.toLocaleString()} {unitMode === 'mm' ? 'мм' : 'м³/га'}
                </span>
                <span className="text-amber-700 font-extrabold">
                  Болжам: {predValDisplay.toLocaleString()} {unitMode === 'mm' ? 'мм' : 'м³/га'}
                </span>
              </div>
              <div className="text-[11px] text-slate-600">
                1 га жерге айырмашылық: {Math.abs((activeValDisplay || 0) - predValDisplay).toFixed(1)} {unitMode === 'mm' ? 'мм' : 'м³'}
              </div>
            </div>
          ) : (
            <div className="text-slate-600">
              <div className="font-bold text-slate-800 flex items-center gap-1.5 mb-0.5">
                <Info className="w-4 h-4 text-blue-600" />
                75 үлгі туралы түсіндірме:
              </div>
              <div>
                Бұл деректердегі <strong>75 нүкте — 75 сынақ егістігі</strong>. Әрқайсысы үшін 1 гектарға қажет су көлемі есептелген (орташа норма: <strong>3 883.5 м³/га</strong>).
              </div>
            </div>
          )}
        </div>

        {/* Right: Land Area Selector (Гектар ауданына шаққандағы су шығыны) */}
        <div className="md:col-span-5 bg-white border border-slate-200 p-2.5 rounded-lg flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-slate-800 text-[11px] flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-blue-600" /> Егістік ауданы:
            </span>
            <div className="flex items-center gap-1">
              {[1, 10, 50, 100].map((ha) => (
                <button
                  key={ha}
                  onClick={() => setSelectedHectares(ha)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition ${
                    selectedHectares === ha
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {ha} га
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] border-t border-slate-100 pt-1">
            <span className="text-slate-500">{selectedHectares} гектарға су шығыны:</span>
            <span className="font-extrabold text-blue-700 text-xs font-mono">
              ~{totalWaterM3.toLocaleString()} м³ су
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
