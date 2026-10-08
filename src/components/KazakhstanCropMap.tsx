import React, { useState } from 'react';
import { MapPin, Wheat, Sparkles } from 'lucide-react';

interface CropZone {
  id: string;
  name: string;
  crops: string[];
  color: string;
  share: string;
  waterReq: string;
  desc: string;
}

const ZONES: CropZone[] = [
  {
    id: 'north',
    name: 'Солтүстік Қазақстан, Қостанай, Ақмола',
    crops: ['Бидай (Яровая пшеница)', 'Арпа', 'Зығыр'],
    color: 'amber',
    share: 'ҚР бидайының 75%-ы',
    waterReq: '250 - 450 мм / маусым',
    desc: 'Негізгі дәнді дақылдар аймағы. Жазғы жауын-шашын мен топырақ ылғалына тікелей тәуелді.'
  },
  {
    id: 'south',
    name: 'Түркістан, Жамбыл, Шымкент өңірі',
    crops: ['Мақта (Хлопок)', 'Жүгері', 'Бақша дақылдары'],
    color: 'emerald',
    share: 'ҚР мақтасының 100%-ы',
    waterReq: '700 - 1100 мм / маусым',
    desc: 'Суармалы егіншілік зонасы (Сырдария өзені бассейні). Су тапшылығы ең өзекті өңір.'
  },
  {
    id: 'kyzylorda',
    name: 'Қызылорда облысы (Қорқыт Ата өңірі)',
    crops: ['Күріш (Рис)', 'Жоңышқа'],
    color: 'blue',
    share: 'ҚР күрішінің 90%-ы',
    waterReq: '1200 - 1600 мм / маусым',
    desc: 'Тұрақты суармалы алқаптар. Арал теңізі бассейніндегі су ресурстарының үнемделуін қажет етеді.'
  }
];

export const KazakhstanCropMap: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('north');
  const zone = ZONES.find((z) => z.id === selectedZone) || ZONES[0];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wheat className="w-5 h-5 text-amber-600" />
          <h4 className="text-sm font-bold text-slate-800">
            Қазақстандағы негізгі дақылдарды өсіру аудандары
          </h4>
        </div>
        <span className="text-xs text-slate-500 font-mono">
          Бидай & Мақта (RCP Сценарийлері)
        </span>
      </div>

      {/* Zone Switcher Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {ZONES.map((z) => (
          <button
            key={z.id}
            onClick={() => setSelectedZone(z.id)}
            className={`p-2.5 rounded-lg text-left text-xs font-semibold transition border ${
              selectedZone === z.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="truncate">{z.name}</div>
            <div className={`text-[10px] mt-0.5 truncate ${selectedZone === z.id ? 'text-blue-100' : 'text-slate-500'}`}>
              {z.crops[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Zone Detail */}
      <div className="bg-white rounded-lg border border-slate-200 p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex-1">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
            <MapPin className="w-4 h-4 text-rose-500" />
            {zone.name}
          </div>
          <p className="text-slate-600 leading-relaxed mb-2">{zone.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {zone.crops.map((c, i) => (
              <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium border border-slate-200">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-[190px] bg-blue-50 border border-blue-200 p-3 rounded-lg text-center">
          <div className="text-[11px] text-blue-700 font-medium">Су қажеттілігі (Норма)</div>
          <div className="text-base font-extrabold text-blue-900 mt-0.5">{zone.waterReq}</div>
          <div className="text-[10px] text-blue-600 mt-1">{zone.share}</div>
        </div>
      </div>
    </div>
  );
};
