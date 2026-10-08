import React from 'react';
import {
  GraduationCap,
  Calendar,
  Layers,
  Database,
  ArrowRight,
  TrendingDown,
  Activity,
  CheckCircle2,
  Sparkles,
  Cpu,
  BrainCircuit,
  Droplets,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Info,
  Maximize2,
  HelpCircle,
  Target,
  Compass
} from 'lucide-react';
import { PipelineDiagram } from './PipelineDiagram';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { LstmCellDiagram } from './LstmCellDiagram';
import { ActualVsPredictedChart } from './ActualVsPredictedChart';
import { KazakhstanCropMap } from './KazakhstanCropMap';

// Images imported
import kzIrrigationImg from '../assets/images/kz_irrigation_1790628752859.jpg';
import kzDroughtImg from '../assets/images/kz_drought_1790628765352.jpg';
import modernIrrigateImg from '../assets/images/modern_irrigate_1790628777875.jpg';
import aiAgricultureImg from '../assets/images/ai_agriculture_1790628793422.jpg';
import smartFarmingImg from '../assets/images/smart_farming_1790628807638.jpg';

interface SlideContentProps {
  slideId: number;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slideId }) => {
  switch (slideId) {
    // -------------------------------------------------------------
    // SLIDE 1: ТИТУЛ
    // -------------------------------------------------------------
    case 1:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          {/* Top Institutional Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs uppercase font-extrabold tracking-wider text-blue-700">
                  Қорқыт Ата атындағы Қызылорда университеті
                </div>
                <div className="text-xs text-slate-700 font-bold mt-0.5">
                  Жасанды Интеллект институты
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Ғылыми-зерттеу жұмысы • 2026
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
            {/* Left 7 cols: Title & Author details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-xs font-bold w-fit mb-4 border border-blue-100">
                <BrainCircuit className="w-4 h-4 text-purple-600" />
                Machine Learning & Deep Learning
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.2] mb-6">
                Machine Learning және Deep Learning көмегімен{' '}
                <span className="text-blue-600">Қазақстандағы</span> ауыл шаруашылығы дақылдарына қажетті{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                  су мөлшерін болжау
                </span>
              </h1>

              {/* Author & University Details Card */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      АА
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Орындағандар:</div>
                      <div className="text-base font-bold text-slate-900">
                        Ахметова Меруерт
                      </div>
                      <div className="text-base font-bold text-slate-900">
                        Әділқасын Аяжан
                      </div>
                      <div className="text-xs text-blue-600 font-semibold mt-0.5">Зерттеушілер тобы</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Мамандығы:</div>
                      <div className="text-base font-bold text-slate-900">Information Systems</div>
                      <div className="text-xs text-purple-600 font-semibold mt-0.5">Жасанды Интеллект институты</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">Университет:</span>
                  <span className="text-blue-700 font-bold">Қорқыт Ата атындағы университет</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Photo from Kazakhstan irrigated farmland */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 aspect-[4/3] group">
                <img
                  src={kzIrrigationImg}
                  alt="Қазақстандағы егістік пен суару"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Droplets className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Қазақстанның аграрлық алқабы
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium leading-relaxed">
                    Қазақстандағы егістік пен заманауи суару жүйелерінің көрінісі
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Қазақстан Республикасы, Қызылорда қаласы</span>
            <span className="font-mono">Слайд 1 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 2: ЗЕРТТЕУДІҢ ӨЗЕКТІЛІГІ
    // -------------------------------------------------------------
    case 2:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> 2-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Зерттеудің өзектілігі
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-6"></div>
          </div>

          {/* Content Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
            {/* Left text column */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="bg-slate-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
                <p className="text-base md:text-lg text-slate-800 leading-relaxed font-normal">
                  <strong className="text-slate-900 font-bold">Қазақстанда ауыл шаруашылығы</strong> су ресурстарын ең көп пайдаланатын салалардың бірі болып табылады. Климаттың өзгеруі, температураның жоғарылауы және жауын-шашынның азаюы көптеген өңірлерде{' '}
                  <span className="text-rose-600 font-bold bg-rose-50 px-1.5 py-0.5 rounded">
                    су тапшылығын
                  </span>{' '}
                  туындатады.
                </p>
              </div>

              <div className="bg-slate-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
                <p className="text-base md:text-lg text-slate-800 leading-relaxed font-normal">
                  Сондықтан егістікке қажетті су мөлшерін алдын ала болжау фермерлер үшін аса маңызды мәселе болып саналады.
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Machine Learning және Deep Learning технологиялары климаттық деректерді талдап, суару көлемін дәл болжауға мүмкіндік береді.
                </div>
              </div>

              {/* Statistics Pill Cards */}
              <div className="grid grid-cols-2 gap-3 mt-1">
                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl">
                  <div className="text-xs text-blue-700 font-bold uppercase">Су шығыны</div>
                  <div className="text-2xl font-black text-blue-900 mt-0.5">80%+</div>
                  <div className="text-xs text-slate-600">ҚР суы ауыл шаруашылығына жұмсалады</div>
                </div>
                <div className="bg-purple-50/70 border border-purple-200 p-3 rounded-xl">
                  <div className="text-xs text-purple-700 font-bold uppercase">AI тиімділігі</div>
                  <div className="text-2xl font-black text-purple-900 mt-0.5">30-40%</div>
                  <div className="text-xs text-slate-600">Суды үнемдеу әлеуеті</div>
                </div>
              </div>
            </div>

            {/* Right two comparison photos */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Photo 1: Құрғақшылық */}
                <div className="flex flex-col">
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square border border-rose-200">
                    <img
                      src={kzDroughtImg}
                      alt="Құрғақшылық"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-rose-600/90 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                      Құрғақшылық
                    </div>
                  </div>
                  <div className="mt-2 text-center text-xs font-bold text-slate-700">
                    Құрғақшылық қаупі
                  </div>
                  <div className="text-[11px] text-center text-slate-500">
                    Топырақтың қаңсуы және өнімнің төмендеуі
                  </div>
                </div>

                {/* Photo 2: Заманауи суару */}
                <div className="flex flex-col">
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square border border-emerald-200">
                    <img
                      src={modernIrrigateImg}
                      alt="Заманауи суару"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-emerald-600/90 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                      Заманауи суару
                    </div>
                  </div>
                  <div className="mt-2 text-center text-xs font-bold text-slate-700">
                    Заманауи суару жүйесі
                  </div>
                  <div className="text-[11px] text-center text-slate-500">
                    Тамшылатып дәл суару технологиясы
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-3 rounded-xl text-center text-xs text-slate-600 font-medium border border-slate-200">
                «Дәл суару (Precision Irrigation) — су тапшылығын шешудің басты кілті»
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Зерттеудің өзектілігі • Климаттық факторлар</span>
            <span className="font-mono">Слайд 2 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // NEW SLIDE 3: БІЗ НЕНІ ШЕШЕМІЗ? (3 НЕГІЗГІ СҰРАҚ ПЕН ЗАДАЧА)
    // -------------------------------------------------------------
    case 3:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4 text-purple-600" /> 3-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Зерттеуде қандай сұрақтар мен мәселелерді шешеміз?
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              Біз алдымызға қандай негізгі сұрақтар қойдық және бұл модель қандай міндеттерді шешеді?
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          {/* 3 Main Problem & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
            {/* Question 1 */}
            <div className="bg-gradient-to-b from-blue-50/70 to-white border-2 border-blue-300 rounded-2xl p-5 shadow-xs flex flex-col justify-between relative">
              <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-black px-3 py-0.5 rounded-full shadow-xs">
                1-мәселе (Сұрақ)
              </div>
              <div>
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    Климаттың өзгеруі кезінде 1 гектарға қанша су керек?
                  </h3>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed mb-3">
                  <strong>Проблема:</strong> 2020–2100 жылдары температура өсіп, ауа райы құрғағанда егінге су жетпей қалу қаупі туындайды.
                </div>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-3 text-xs text-blue-900 font-medium">
                <span className="font-bold text-blue-700">Табатын жауабымыз:</span> RCP2.6 және RCP4.5 сценарийлерімен келешек 80 жылдың әр маусымындағы су нормасын дәл есептеу.
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-gradient-to-b from-emerald-50/70 to-white border-2 border-emerald-300 rounded-2xl p-5 shadow-xs flex flex-col justify-between relative">
              <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-xs font-black px-3 py-0.5 rounded-full shadow-xs">
                2-мәселе (Сұрақ)
              </div>
              <div>
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    Суды қалай үнемдеп, ысырапсыз тиімді бөлуге болады?
                  </h3>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed mb-3">
                  <strong>Проблема:</strong> Фермерлер суды шамадан тыс көп немесе аз құйып, су қорын босқа шығындайды және топырақты тұздандырады.
                </div>
              </div>
              <div className="bg-white border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 font-medium">
                <span className="font-bold text-emerald-700">Табатын жауабымыз:</span> Әр егістік координаты мен дақыл түріне (бидай, мақта) қажетті суды миллиметр және м³/га көлемінде нақтылау.
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-gradient-to-b from-purple-50/70 to-white border-2 border-purple-300 rounded-2xl p-5 shadow-xs flex flex-col justify-between relative">
              <div className="absolute -top-3 left-4 bg-purple-600 text-white text-xs font-black px-3 py-0.5 rounded-full shadow-xs">
                3-мәселе (Сұрақ)
              </div>
              <div>
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    Deep Learning (LSTM) моделі қаншалықты дәл болжайды?
                  </h3>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed mb-3">
                  <strong>Проблема:</strong> Қарапайым математикалық формулалар уақыт бойынша жылдам өзгеретін көпжылдық динамиканы есте сақтай алмайды.
                </div>
              </div>
              <div className="bg-white border border-purple-200 rounded-xl p-3 text-xs text-purple-900 font-medium">
                <span className="font-bold text-purple-700">Табатын жауабымыз:</span> Уақыттық тізбектерге арналған LSTM нейрондық желісі арқылы автоматтандырылған дәл болжам алу.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Зерттеу проблемасы • 3 негізгі сұрақ пен шешімдері</span>
            <span className="font-mono">Слайд 3 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 4: МАҚСАТЫ МЕН МІНДЕТТЕРІ (бұрынғы 3)
    // -------------------------------------------------------------
    case 4:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-blue-600" /> 4-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Мақсаты мен міндеттері
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
            {/* Left 7 cols: Objective & Tasks */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Primary Objective Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border-2 border-blue-400/80 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-blue-800 mb-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  Зерттеудің мақсаты
                </div>
                <p className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                  Қазақстандағы <span className="text-blue-700 underline decoration-blue-300">бидай</span> мен{' '}
                  <span className="text-purple-700 underline decoration-purple-300">мақта</span> дақылдарына қажетті су мөлшерін{' '}
                  <span className="text-emerald-700 font-extrabold">LSTM негізіндегі Deep Learning</span> моделі арқылы болжау.
                </p>
              </div>

              {/* Tasks List */}
              <div className="flex flex-col gap-2.5">
                <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                  Зерттеу міндеттері:
                </div>

                {[
                  'Қазақстан бойынша ирригациялық датасет жинау;',
                  'Деректерді алдын ала өңдеу (Encoding, Scaling);',
                  'LSTM терең нейрондық желі моделін құру;',
                  'Модельді оқыту және тестілеу (Train 80% / Test 20%);',
                  'MAE, RMSE және R² көрсеткіштерімен бағалау.'
                ].map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                      {idx + 1}
                    </div>
                    <span className="text-sm md:text-base font-semibold text-slate-800">
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: AI & Agriculture connecting photo */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 aspect-[16/10] group">
                <img
                  src={aiAgricultureImg}
                  alt="AI мен ауыл шаруашылығын байланыстыратын сурет"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Жасанды интеллект және агротехнология
                  </div>
                  <p className="text-xs text-slate-200 mt-0.5">
                    AI алгоритмдері мен дрон арқылы суаруды бақылау
                  </p>
                </div>
              </div>

              <div className="mt-3 p-3 bg-purple-50/80 border border-purple-200 rounded-xl flex items-start gap-2.5 text-xs text-purple-900">
                <BrainCircuit className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Терең оқытудың басымдығы:</strong> климаттық параметрлердің күрделі байланыстарын дәл модельдейді.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Мақсат пен міндеттер • Зерттеу жоспары</span>
            <span className="font-mono">Слайд 4 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 5: ДАТАСЕТ (бұрынғы 4)
    // -------------------------------------------------------------
    case 5:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Database className="w-4 h-4 text-blue-600" /> 5-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Датасет сипаттамасы
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Біз Қазақстан бойынша ауыл шаруашылығына арналған ирригациялық деректерді қолдандық.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <div className="bg-slate-100 px-4 py-2 font-bold text-xs uppercase text-slate-700 tracking-wider">
                  Негізгі ақпарат
                </div>
                <div className="divide-y divide-slate-100 text-sm">
                  <div className="flex justify-between p-2.5 px-4 bg-white">
                    <span className="text-slate-500 font-medium">Ел</span>
                    <span className="font-bold text-blue-700">Қазақстан</span>
                  </div>
                  <div className="flex justify-between p-2.5 px-4 bg-slate-50/50">
                    <span className="text-slate-500 font-medium">Жылдар ауқымы</span>
                    <span className="font-bold text-slate-800">2020 – 2100 (80 жыл)</span>
                  </div>
                  <div className="flex justify-between p-2.5 px-4 bg-white">
                    <span className="text-slate-500 font-medium">Дақылдар</span>
                    <span className="font-bold text-purple-700">Бидай, мақта</span>
                  </div>
                  <div className="flex justify-between p-2.5 px-4 bg-slate-50/50">
                    <span className="text-slate-500 font-medium">Сценарий</span>
                    <span className="font-bold text-emerald-700">RCP2.6, RCP4.5</span>
                  </div>
                  <div className="flex justify-between p-2.5 px-4 bg-blue-50">
                    <span className="text-blue-900 font-bold">Жазба саны</span>
                    <span className="font-black text-blue-700 text-base font-mono">414 720</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5">
                  <div className="text-xs font-extrabold uppercase text-blue-800 mb-2 flex items-center justify-between">
                    <span>Кіріс белгілері (X)</span>
                    <span className="px-1.5 py-0.2 bg-blue-200 text-blue-800 rounded text-[10px]">5 параметр</span>
                  </div>
                  <ul className="text-xs space-y-1.5 text-slate-800 font-mono">
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>Year (Жыл)</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>Crop (Дақыл түрі)</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>Scenario (RCP2.6 / 4.5)</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>Latitude (Ендік)</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>Longitude (Бойлық)</li>
                  </ul>
                </div>

                <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-extrabold uppercase text-emerald-800 mb-1">
                      Шығыс көрсеткіші (Y)
                    </div>
                    <div className="text-xs text-slate-600 mb-2">Нысаналы болжам:</div>
                    <div className="p-2.5 bg-white rounded-lg border border-emerald-300 text-slate-900 font-bold text-xs">
                      Irrigation Water Requirement
                      <div className="text-emerald-700 text-sm font-extrabold mt-0.5">
                        (мм — миллиметр немесе м³/га)
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-emerald-800 mt-2 font-medium">
                    1 мм су = 1 гектарға 10 м³ су
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <KazakhstanCropMap />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Ирригациялық мәліметтер қоры • 414 720 жазба</span>
            <span className="font-mono">Слайд 5 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 6: DATA PREPROCESSING (бұрынғы 5)
    // -------------------------------------------------------------
    case 6:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Layers className="w-4 h-4 text-blue-600" /> 6-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Data Preprocessing (Деректерді алдын ала өңдеу)
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Модельді оқытпас бұрын деректер бірнеше кезеңнен өтті.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          <div className="my-auto py-2">
            <PipelineDiagram />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div className="font-bold text-blue-700 mb-1">1. CSV оқылды</div>
                <p className="text-slate-600">Кестелік деректер тазаланып, бос мәндер тексерілді.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div className="font-bold text-purple-700 mb-1">2. Сандық формат</div>
                <p className="text-slate-600">Crop және Scenario мәтіндік белгілері сандарға түрлендірілді.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div className="font-bold text-emerald-700 mb-1">3. Min-Max Scaling</div>
                <p className="text-slate-600">Белгілер [0, 1] диапозонына келтірілді.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div className="font-bold text-blue-700 mb-1">4. 80% / 20% Бөлу</div>
                <p className="text-slate-600">80% оқу және 20% тест бөлігіне бөлініп бекітілді.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Деректерді өңдеу конвейері • Min-Max Scaling & Split</span>
            <span className="font-mono">Слайд 6 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 7: LSTM МОДЕЛІ (бұрынғы 6)
    // -------------------------------------------------------------
    case 7:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <BrainCircuit className="w-4 h-4 text-purple-600" /> 7-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              LSTM моделі
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          <div className="my-auto flex flex-col gap-5">
            <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-emerald-50 border-l-4 border-purple-600 p-4 rounded-r-2xl shadow-xs">
              <h3 className="text-base font-extrabold text-purple-900 mb-1 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-purple-600" /> Неге LSTM таңдалды?
              </h3>
              <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                <strong>LSTM (Long Short-Term Memory)</strong> — уақыттық қатарларды (Time Series) өңдеуге арналған Deep Learning моделі. Біздің деректер <strong>2020–2100 жылдарды</strong> қамтығандықтан, бұл модель уақыт бойынша өзгерістерді жақсы үйренеді.
              </p>
            </div>

            <ArchitectureDiagram />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs">
                <div className="font-bold text-slate-900 mb-1 text-sm text-blue-700">
                  1. Ұзақ мерзімді жад (Memory Cell)
                </div>
                <p className="text-slate-600">
                  Қарапайым RNN-ге қарағанда 80 жылдық кезеңдегі тенденцияларды ұмытпай сақтайды.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs">
                <div className="font-bold text-slate-900 mb-1 text-sm text-emerald-700">
                  2. Қақпалар механизмі (Gates)
                </div>
                <p className="text-slate-600">
                  Forget, Input, Output қақпалары ақпаратты іріктеп өңдейді.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs">
                <div className="font-bold text-slate-900 mb-1 text-sm text-purple-700">
                  3. Регрессиялық нәтиже
                </div>
                <p className="text-slate-600">
                  Dense қабаты арқылы нақты су қажеттілігін үздіксіз скаляр ретінде болжайды.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>LSTM Recurrent Neural Network • 64 нейрон</span>
            <span className="font-mono">Слайд 7 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 8: ФОРМУЛА (бұрынғы 7)
    // -------------------------------------------------------------
    case 8:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Cpu className="w-4 h-4 text-purple-600" /> 8-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Қолданылған математикалық модель
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg border border-slate-800">
                <div className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">
                  LSTM формуласы
                </div>
                <div className="font-mono text-xl md:text-2xl text-center py-3 bg-slate-800/80 rounded-xl text-emerald-400 font-bold tracking-wide">
                  h<sub>t</sub> = LSTM(x<sub>t</sub>, h<sub>t-1</sub>)
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-slate-300">
                  <div className="text-slate-400 font-semibold mb-1">мұндағы:</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-purple-400">x<sub>t</sub></span>
                    <span>— кіріс деректері (Input features)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-amber-400">h<sub>t</sub></span>
                    <span>— жасырын күй (Hidden state)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-emerald-400">ŷ</span>
                    <span>— болжанған су мөлшері (Predicted water)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-xs text-slate-500 font-medium">Loss функциясы</div>
                  <div className="text-base font-bold text-purple-700 font-mono mt-0.5">
                    Huber(y, ŷ)
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Шектен тыс ауытқуларға төзімді
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-xs text-slate-500 font-medium">Optimizer</div>
                  <div className="text-base font-bold text-blue-700 font-mono mt-0.5">
                    Adam
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Бейімделгіш оқу жылдамдығы
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl">
                <div className="text-xs font-bold text-blue-800 uppercase mb-1">
                  Metrics (Бағалау метрикалары)
                </div>
                <div className="flex items-center gap-4 text-xs font-mono font-bold text-slate-800">
                  <span className="px-2 py-0.5 bg-white rounded border border-blue-200">MAE</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-blue-200">RMSE</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-blue-200">R²</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <LstmCellDiagram />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Математикалық модель • Huber Loss & Adam Optimizer</span>
            <span className="font-mono">Слайд 8 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 9: ЭКСПЕРИМЕНТ НӘТИЖЕЛЕРІ (бұрынғы 8)
    // -------------------------------------------------------------
    case 9:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Activity className="w-4 h-4 text-purple-600" /> 9-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Эксперимент нәтижелері
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          <div className="my-auto flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  MAE
                </div>
                <div className="text-3xl font-black text-blue-400 font-mono">
                  388.35 <span className="text-lg text-slate-300 font-sans">мм</span>
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Орташа абсолюттік қате (3883.5 м³/га)
                </div>
              </div>

              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  RMSE
                </div>
                <div className="text-3xl font-black text-purple-400 font-mono">
                  444.38 <span className="text-lg text-slate-300 font-sans">мм</span>
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Түбірлік квадраттық қате
                </div>
              </div>

              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  Loss
                </div>
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  387.85
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Huber Loss
                </div>
              </div>

              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  R²
                </div>
                <div className="text-3xl font-black text-amber-400 font-mono">
                  −0.007
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Анықтау коэффициенті
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Қысқаша қорытынды мен ғылыми талдау
              </h4>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                LSTM моделі су мөлшерін болжауды орындады. Бұл бастапқы модель болғандықтан, болашақта қосымша климаттық белгілер арқылы дәлдігін арттыруға болады.
              </p>

              <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                  <span><strong>Бастапқы жетістік:</strong> Модель 1 гектарға кететін орташа су деңгейін (~3 883 м³/га) тұрақты ұстап, аномалияларға ұрынбады.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0"></span>
                  <span><strong>Келесі қадам:</strong> R² көрсеткішін 0.85+ дейін арттыру үшін температура, топырақ ылғалы және ET₀ белгілері енгізіледі.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Эксперимент нәтижелері • 414 720 жазба бойынша тестілеу</span>
            <span className="font-mono">Слайд 9 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 10: ACTUAL VS PREDICTED (бұрынғы 9)
    // -------------------------------------------------------------
    case 10:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <TrendingDown className="w-4 h-4 text-blue-600" /> 10-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Нақты және болжанған нәтижелер (Actual vs Predicted)
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-3"></div>
          </div>

          <div className="my-auto flex flex-col gap-3">
            <ActualVsPredictedChart />

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-1">
                  Түсіндірме мен өлшем бірліктері:
                </div>
                <p className="text-sm md:text-base text-slate-800 leading-snug">
                  <span className="font-bold text-blue-700">Көк сызық</span> — нақты су мөлшері (Actual), ал{' '}
                  <span className="font-bold text-amber-600">қызғылт сары сызық</span> — LSTM моделінің болжаған нәтижесі (Predicted).
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Графиктегі <strong>75 үлгі</strong> — 75 сынақ егістік учаскесі. <strong>1 мм су қабаты = 1 гектарға 10 м³ су</strong>. Болжанған 388.35 мм = <strong>1 гектарға 3 883.5 м³ су</strong> нормасын білдіреді.
                </p>
              </div>

              <div className="text-xs text-slate-600 bg-white border border-slate-200 p-3 rounded-lg min-w-[280px]">
                <div className="font-bold text-slate-800 mb-1">1 гектарға су нормасы:</div>
                <div>Орташа болжам: <span className="font-mono font-bold text-amber-600">3 883.5 м³/га</span></div>
                <div>Нақты ауқым: <span className="font-mono font-bold text-blue-600">500 - 9 500 м³/га</span></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>VS Code графигі • 75 сынақ учаскесі бойынша салыстыру (1 га)</span>
            <span className="font-mono">Слайд 10 / 11</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // SLIDE 11: ҚОРЫТЫНДЫ (бұрынғы 10)
    // -------------------------------------------------------------
    case 11:
      return (
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 11-слайд
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              Қорытынды
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
            <div className="lg:col-span-7 flex flex-col gap-3">
              {[
                {
                  text: 'Қазақстан бойынша 414 720 жазба пайдаланылды.',
                  icon: <Database className="w-4 h-4 text-blue-600" />,
                  badge: 'Мәліметтер'
                },
                {
                  text: 'Deep Learning үшін LSTM моделі таңдалды.',
                  icon: <BrainCircuit className="w-4 h-4 text-purple-600" />,
                  badge: 'Архитектура'
                },
                {
                  text: 'Модель 1 гектарға кететін су мөлшерін болжауды сәтті орындады.',
                  icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
                  badge: 'Сынақ'
                },
                {
                  text: 'Нәтижелер: MAE = 388.35 мм (3883.5 м³/га), RMSE = 444.38 мм.',
                  icon: <Activity className="w-4 h-4 text-amber-600" />,
                  badge: 'Метрикалар'
                },
                {
                  text: 'Болашақта температура, жауын-шашын және ET₀ сияқты қосымша белгілерді енгізу арқылы модельдің дәлдігін арттыру жоспарланады.',
                  icon: <Sparkles className="w-4 h-4 text-blue-600" />,
                  badge: 'Болашақ жоспар'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-slate-50 hover:bg-blue-50/40 rounded-xl border border-slate-200 transition"
                >
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                      {item.badge}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 aspect-[16/10] group">
                <img
                  src={smartFarmingImg}
                  alt="Заманауи smart farming суреті"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> Заманауи Smart Farming
                  </div>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Бұлттық аналитика, IoT датчиктер және автоматты клапандар
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-center shadow-md">
                <div className="text-lg font-extrabold">Назарларыңызға рақмет!</div>
                <div className="text-xs text-blue-100 mt-1">
                  Сұрақтарыңыз болса қоюларыңызға болады
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>Қорытынды • Smart Farming және болашақ зерттеу бағыттары</span>
            <span className="font-mono">Слайд 11 / 11</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
