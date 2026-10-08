import React, { useState } from 'react';
import { ArrowRight, Database, Code2, Sliders, Split, BrainCircuit, CheckCircle2 } from 'lucide-react';

interface StepDetail {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  bgLight: string;
  borderColor: string;
  textColor: string;
  icon: React.ReactNode;
  details: string;
  codeSnippet: string;
}

const STEPS: StepDetail[] = [
  {
    id: 'csv',
    title: 'CSV',
    subtitle: 'Dataset',
    badge: '1-қадам',
    color: 'blue',
    bgLight: 'bg-blue-100',
    borderColor: 'border-blue-400',
    textColor: 'text-blue-700',
    icon: <Database className="w-5 h-5 text-blue-600" />,
    details: 'Қазақстан бойынша 414 720 жазбадан тұратын тарихи және RCP климаттық ирригациялық мәліметтер кестесі жүктелді.',
    codeSnippet: 'df = pd.read_csv("kazakhstan_irrigation_dataset.csv")\n# 414,720 rows × 6 columns'
  },
  {
    id: 'label',
    title: 'Label',
    subtitle: 'Encoding',
    badge: '2-қадам',
    color: 'purple',
    bgLight: 'bg-purple-100',
    borderColor: 'border-purple-400',
    textColor: 'text-purple-700',
    icon: <Code2 className="w-5 h-5 text-purple-600" />,
    details: 'Мәтіндік санаттар (Crop: Бидай=0, Мақта=1; Scenario: RCP2.6=0, RCP4.5=1) сандық бүтін сандарға түрлендірілді.',
    codeSnippet: 'le_crop = LabelEncoder()\ndf["Crop"] = le_crop.fit_transform(df["Crop"])\ndf["Scenario"] = le_scen.fit_transform(df["Scenario"])'
  },
  {
    id: 'scale',
    title: 'Min-Max',
    subtitle: 'Scaling',
    badge: '3-қадам',
    color: 'emerald',
    bgLight: 'bg-emerald-100',
    borderColor: 'border-emerald-400',
    textColor: 'text-emerald-700',
    icon: <Sliders className="w-5 h-5 text-emerald-600" />,
    details: 'Барлық сандық белгілердің (Year, Lat, Long) мәндері [0, 1] аралығына нормализацияланып, градиенттер тұрақтандырылды.',
    codeSnippet: 'scaler = MinMaxScaler(feature_range=(0, 1))\nX_scaled = scaler.fit_transform(X)\n# x_norm = (x - x_min) / (x_max - x_min)'
  },
  {
    id: 'split',
    title: 'Train',
    subtitle: '80 / 20',
    badge: '4-қадам',
    color: 'blue',
    bgLight: 'bg-blue-100',
    borderColor: 'border-blue-400',
    textColor: 'text-blue-700',
    icon: <Split className="w-5 h-5 text-blue-600" />,
    details: 'Деректер 80% оқыту жинағы (331 776 жазба) және 20% валидациялық тестілеу жинағы (82 944 жазба) болып бөлінді.',
    codeSnippet: 'X_train, X_test, y_train, y_test = train_test_split(\n  X_scaled, y, test_size=0.20, shuffle=False\n)'
  },
  {
    id: 'lstm',
    title: 'LSTM',
    subtitle: 'Ready',
    badge: '5-қадам',
    color: 'purple',
    bgLight: 'bg-purple-100',
    borderColor: 'border-purple-400',
    textColor: 'text-purple-700',
    icon: <BrainCircuit className="w-5 h-5 text-purple-600" />,
    details: 'Деректер [samples, timesteps, features] 3D тензор форматына келтіріліп, LSTM нейрондық желісіне жіберілді.',
    codeSnippet: 'X_train_3d = X_train.reshape((X_train.shape[0], 1, X_train.shape[1]))\n# Shape: (331776, 1, 5) -> ready for LSTM layer'
  }
];

export const PipelineDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('csv');
  const currentStep = STEPS.find((s) => s.id === activeStep) || STEPS[0];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Pipeline Visual Track (Matches exact Image 6) */}
      <div className="w-full bg-slate-900/95 p-6 rounded-2xl border border-slate-800 shadow-lg">
        <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center justify-between">
          <span>Деректерді өңдеу конвейері (Preprocessing Pipeline)</span>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" /> 5 кезең толық орындалды
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 overflow-x-auto py-2">
          {STEPS.map((step, idx) => {
            const isSelected = activeStep === step.id;
            return (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-1 min-w-[125px] w-full md:w-auto p-3.5 rounded-xl border-2 text-center transition-all duration-200 cursor-pointer ${
                    step.id === 'csv' || step.id === 'split'
                      ? 'bg-blue-100/90 border-blue-400 text-blue-900 shadow-md shadow-blue-500/10'
                      : step.id === 'label' || step.id === 'lstm'
                      ? 'bg-purple-100/90 border-purple-400 text-purple-900 shadow-md shadow-purple-500/10'
                      : 'bg-emerald-100/90 border-emerald-400 text-emerald-900 shadow-md shadow-emerald-500/10'
                  } ${
                    isSelected
                      ? 'ring-4 ring-white/60 scale-105 z-10'
                      : 'opacity-90 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                >
                  <div className="text-base font-extrabold tracking-tight">
                    {step.title}
                  </div>
                  <div className="text-xs font-medium opacity-80 mt-0.5">
                    {step.subtitle}
                  </div>
                </button>

                {/* Arrow */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-slate-400 px-1">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Explanation Box */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">{currentStep.icon}</span>
            <h4 className="text-base font-bold text-slate-900">
              {currentStep.badge}: {currentStep.title} ({currentStep.subtitle})
            </h4>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            {currentStep.details}
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[260px] bg-white border border-slate-200 p-3 rounded-lg text-xs shadow-xs">
          <div className="text-[11px] font-bold text-blue-700 uppercase mb-1">
            Кезеңнің сипаттамасы:
          </div>
          <div className="text-slate-600 font-medium">
            Барлық деректер толық тазартылып, терең нейрондық желіге сәйкестендірілді.
          </div>
        </div>
      </div>
    </div>
  );
};
