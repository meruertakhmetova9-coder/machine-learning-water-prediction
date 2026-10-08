import React from 'react';
import { ArrowRight, Layers, Cpu, Hash, Droplets } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Visual Pipeline (Exact match to user's uploaded Image 7) */}
      <div className="w-full bg-slate-900/95 p-6 rounded-2xl border border-slate-800 shadow-lg">
        <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center justify-between">
          <span>Модель архитектурасы (Neural Network Architecture)</span>
          <span className="text-[11px] text-blue-400 font-mono">Keras / TensorFlow Sequential</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 overflow-x-auto py-2">
          {/* 1. Input */}
          <div className="flex-1 min-w-[130px] w-full md:w-auto p-4 rounded-xl bg-blue-100 border-2 border-blue-400 text-blue-900 text-center shadow-md">
            <div className="text-lg font-extrabold">Input</div>
            <div className="text-xs font-semibold text-blue-700 mt-0.5">5 features</div>
            <div className="mt-2 text-[10px] text-blue-600 bg-white/70 py-0.5 px-2 rounded-full inline-block font-mono">
              [Year, Crop, Scen, Lat, Lon]
            </div>
          </div>

          <div className="hidden md:flex text-slate-400 px-1">
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* 2. LSTM */}
          <div className="flex-1 min-w-[140px] w-full md:w-auto p-4 rounded-xl bg-emerald-100 border-2 border-emerald-400 text-emerald-900 text-center shadow-md ring-2 ring-emerald-300/40">
            <div className="text-lg font-extrabold">LSTM</div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">64 neurons</div>
            <div className="mt-2 text-[10px] text-emerald-800 bg-white/70 py-0.5 px-2 rounded-full inline-block font-mono">
              tanh / sigmoid gates
            </div>
          </div>

          <div className="hidden md:flex text-slate-400 px-1">
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* 3. Dense */}
          <div className="flex-1 min-w-[130px] w-full md:w-auto p-4 rounded-xl bg-purple-100 border-2 border-purple-400 text-purple-900 text-center shadow-md">
            <div className="text-lg font-extrabold">Dense</div>
            <div className="text-xs font-semibold text-purple-700 mt-0.5">1 output</div>
            <div className="mt-2 text-[10px] text-purple-700 bg-white/70 py-0.5 px-2 rounded-full inline-block font-mono">
              Linear activation
            </div>
          </div>

          <div className="hidden md:flex text-slate-400 px-1">
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* 4. Output */}
          <div className="flex-1 min-w-[130px] w-full md:w-auto p-4 rounded-xl bg-blue-100 border-2 border-blue-400 text-blue-900 text-center shadow-md">
            <div className="text-lg font-extrabold">Output</div>
            <div className="text-xs font-semibold text-blue-700 mt-0.5">Water (mm)</div>
            <div className="mt-2 text-[10px] text-blue-700 bg-white/70 py-0.5 px-2 rounded-full inline-block font-mono">
              ŷ болжамдық мәні
            </div>
          </div>
        </div>
      </div>

      {/* Layer Parameters & Feature Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-0.5">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Кіріс өлшемі (Shape)</div>
            <div className="text-sm font-bold text-slate-800">(batch_size, 1, 5)</div>
            <div className="text-xs text-slate-500 mt-0.5">5 фактор бойынша уақыттық қадам</div>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 mt-0.5">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">LSTM ұяшықтары</div>
            <div className="text-sm font-bold text-slate-800">64 Hidden Units</div>
            <div className="text-xs text-slate-500 mt-0.5">Жад қақпалары: Forget, Input, Output</div>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
          <div className="p-2 rounded-lg bg-purple-50 text-purple-600 mt-0.5">
            <Droplets className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Шығыс қабаты (Regression)</div>
            <div className="text-sm font-bold text-slate-800">1 үздіксіз скаляр мән</div>
            <div className="text-xs text-slate-500 mt-0.5">Суаруға қажетті су көлемі (мм)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
