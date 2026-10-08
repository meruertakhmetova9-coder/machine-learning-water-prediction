import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';

async function generate() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.author = 'Ахметова Меруерт, Әділқасын Аяжан';
  pres.company = 'Қорқыт Ата атындағы университет, Жасанды Интеллект институты';
  pres.title = 'Machine Learning және Deep Learning көмегімен су мөлшерін болжау';

  // Read images as base64 for embedding
  const imgDir = path.resolve(process.cwd(), 'src/assets/images');
  const files = fs.readdirSync(imgDir);

  const getImgBase64 = (prefix: string) => {
    const file = files.find(f => f.startsWith(prefix));
    if (!file) return null;
    const fullPath = path.join(imgDir, file);
    const data = fs.readFileSync(fullPath).toString('base64');
    return `data:image/jpeg;base64,${data}`;
  };

  const kzIrrigation = getImgBase64('kz_irrigation');
  const kzDrought = getImgBase64('kz_drought');
  const modernIrrigate = getImgBase64('modern_irrigate');
  const aiAgri = getImgBase64('ai_agriculture');
  const smartFarm = getImgBase64('smart_farming');

  // Colors
  const BLUE = '2563EB';
  const DARK = '1E293B';
  const GRAY = '64748B';
  const PURPLE = '7C3AED';
  const GREEN = '10B981';
  const LIGHT_BG = 'F8FAFC';

  // ==========================================
  // SLIDE 1: Title
  // ==========================================
  const s1 = pres.addSlide();
  s1.bkgd = 'FFFFFF';
  s1.addNotes('Құрметті комиссия мүшелері мен әріптестер! Біздің зерттеу жұмысымыздың тақырыбы — «Machine Learning және Deep Learning көмегімен Қазақстандағы ауыл шаруашылығы дақылдарына қажетті су мөлшерін болжау». Орындағандар: Ахметова Меруерт, Әділқасын Аяжан. Жасанды Интеллект институты, Information Systems мамандығы, Қорқыт Ата атындағы университет.');

  // University Header
  s1.addText('ҚОРҚЫТ АТА АТЫНДАҒЫ ҚЫЗЫЛОРДА УНИВЕРСИТЕТІ', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.4,
    fontSize: 12, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s1.addText('Жасанды Интеллект институты • Information Systems', {
    x: 0.8, y: 0.85, w: 11.5, h: 0.3,
    fontSize: 11, fontFace: 'Calibri', color: DARK, bold: true
  });

  // Main Title
  s1.addText('Machine Learning және Deep Learning көмегімен\nҚазақстандағы ауыл шаруашылығы дақылдарына қажетті\nсу мөлшерін болжау', {
    x: 0.8, y: 1.6, w: 6.8, h: 2.2,
    fontSize: 24, fontFace: 'Calibri', color: DARK, bold: true, lineSpacingMultiple: 1.15
  });

  // Author details box
  s1.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 4.1, w: 6.8, h: 2.4,
    fill: { color: LIGHT_BG }, line: { color: 'CBD5E1', width: 1 }, rectRadius: 0.1
  });
  s1.addText('Орындағандар:', {
    x: 1.1, y: 4.25, w: 6.2, h: 0.3,
    fontSize: 12, fontFace: 'Calibri', color: GRAY
  });
  s1.addText('Ахметова Меруерт, Әділқасын Аяжан', {
    x: 1.1, y: 4.55, w: 6.2, h: 0.45,
    fontSize: 16, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s1.addText('Мамандығы: Information Systems', {
    x: 1.1, y: 5.05, w: 6.2, h: 0.35,
    fontSize: 13, fontFace: 'Calibri', color: DARK
  });
  s1.addText('Институт: Жасанды Интеллект институты', {
    x: 1.1, y: 5.45, w: 6.2, h: 0.35,
    fontSize: 13, fontFace: 'Calibri', color: PURPLE, bold: true
  });
  s1.addText('Университет: Қорқыт Ата атындағы университет (2026 ж.)', {
    x: 1.1, y: 5.85, w: 6.2, h: 0.35,
    fontSize: 11, fontFace: 'Calibri', color: GRAY
  });

  // Right Photo: kz irrigation
  if (kzIrrigation) {
    s1.addImage({
      data: kzIrrigation,
      x: 8.0, y: 1.6, w: 4.5, h: 4.8,
      sizing: { type: 'cover', w: 4.5, h: 4.8 }
    });
  }

  // ==========================================
  // SLIDE 2: Зерттеудің өзектілігі
  // ==========================================
  const s2 = pres.addSlide();
  s2.bkgd = 'FFFFFF';
  s2.addNotes('Зерттеудің өзектілігі: Қазақстанда ауыл шаруашылығы су ресурстарын тұтыну бойынша жетекші орында (80%+). Климаттың өзгеруі су тапшылығын туындатады. ML/DL технологиялары арқылы суаруды алдын ала болжау өте өзекті.');

  s2.addText('2-слайд — Зерттеудің өзектілігі', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });

  s2.addText('• Қазақстанда ауыл шаруашылығы су ресурстарын ең көп пайдаланатын салалардың бірі болып табылады.\n\n• Климаттың өзгеруі, температураның жоғарылауы және жауын-шашынның азаюы көптеген өңірлерде су тапшылығын туындатады.\n\n• Сондықтан егістікке қажетті су мөлшерін алдын ала болжау фермерлер үшін маңызды мәселе болып саналады.\n\n• Machine Learning және Deep Learning технологиялары климаттық деректерді талдап, суару көлемін дәл болжауға мүмкіндік береді.', {
    x: 0.8, y: 1.4, w: 6.5, h: 5.2,
    fontSize: 15, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.25
  });

  // Drought image
  if (kzDrought) {
    s2.addImage({
      data: kzDrought,
      x: 7.7, y: 1.5, w: 2.3, h: 3.5,
      sizing: { type: 'cover', w: 2.3, h: 3.5 }
    });
    s2.addText('Құрғақшылық', {
      x: 7.7, y: 5.2, w: 2.3, h: 0.4,
      fontSize: 14, fontFace: 'Calibri', color: 'DC2626', bold: true, align: 'center'
    });
  }

  // Modern irrigation image
  if (modernIrrigate) {
    s2.addImage({
      data: modernIrrigate,
      x: 10.2, y: 1.5, w: 2.3, h: 3.5,
      sizing: { type: 'cover', w: 2.3, h: 3.5 }
    });
    s2.addText('Заманауи суару', {
      x: 10.2, y: 5.2, w: 2.3, h: 0.4,
      fontSize: 14, fontFace: 'Calibri', color: GREEN, bold: true, align: 'center'
    });
  }

  // ==========================================
  // NEW SLIDE 3: БІЗ НЕНІ ШЕШЕМІЗ? (3 СҰРАҚ)
  // ==========================================
  const s3 = pres.addSlide();
  s3.bkgd = 'FFFFFF';
  s3.addNotes('3-слайд: Зерттеуде біз нені шешеміз және қандай сұрақтардың жауабын табамыз? 1-сұрақ: 2020-2100 жылдары 1 гектарға қанша су керек? 2-сұрақ: Су тапшылығын қалай болдырмай, үнемді бөлуге болады? 3-сұрақ: Deep Learning (LSTM) моделі қаншалықты сенімді болжайды?');

  s3.addText('3-слайд — Зерттеуде қандай сұрақтар мен мәселелерді шешеміз?', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 24, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s3.addText('Біз нені шешеміз және қандай сұрақтардың жауабын табамыз?', {
    x: 0.8, y: 1.1, w: 11.5, h: 0.35,
    fontSize: 13, fontFace: 'Calibri', color: GRAY
  });

  const questions = [
    {
      num: '1-сұрақ',
      title: 'Климаттың өзгеруі кезінде 1 гектарға қанша су қажет болады?',
      prob: 'Проблема: 2020–2100 жылдары температура өсіп, құрғақшылық көбейгенде егінге су жетпей қалу қаупі бар.',
      sol: 'Табатын жауабымыз: RCP2.6 және RCP4.5 сценарийлерімен келешек 80 жылдың әр маусымындағы 1 га нормасын есептеу.',
      border: '3B82F6', fill: 'EFF6FF', text: '1D4ED8'
    },
    {
      num: '2-сұрақ',
      title: 'Су ресурстарын қалай үнемдеп, ысырапсыз бөлуге болады?',
      prob: 'Проблема: Фермерлер суды шамадан тыс көп немесе аз құйып, қорды ысыраптайды және жерді тұздандырады.',
      sol: 'Табатын жауабымыз: Географиялық ендік/бойлық және дақыл түріне сай дәл су көлемін (мм және м³/га) нақтылау.',
      border: '10B981', fill: 'ECFDF5', text: '047857'
    },
    {
      num: '3-сұрақ',
      title: 'Deep Learning (LSTM) моделі қаншалықты дәл болжай алады?',
      prob: 'Проблема: Дәстүрлі статистикалық әдістер ұзақ 80 жылдық климаттық толқуларды есте сақтай алмайды.',
      sol: 'Табатын жауабымыз: Уақыттық тізбектерге арналған LSTM терең нейрондық желісі арқылы автоматты дәл болжам алу.',
      border: '8B5CF6', fill: 'F5F3FF', text: '6D28D9'
    }
  ];

  questions.forEach((q, idx) => {
    const xPos = 0.8 + idx * 3.95;
    s3.addShape(pres.ShapeType.roundRect, {
      x: xPos, y: 1.6, w: 3.7, h: 5.0,
      fill: { color: q.fill }, line: { color: q.border, width: 1.5 }, rectRadius: 0.15
    });
    s3.addText(q.num, {
      x: xPos + 0.2, y: 1.8, w: 3.3, h: 0.35,
      fontSize: 12, fontFace: 'Calibri', color: q.text, bold: true
    });
    s3.addText(q.title, {
      x: xPos + 0.2, y: 2.2, w: 3.3, h: 1.0,
      fontSize: 14, fontFace: 'Calibri', color: DARK, bold: true, lineSpacingMultiple: 1.15
    });
    s3.addText(q.prob, {
      x: xPos + 0.2, y: 3.3, w: 3.3, h: 1.3,
      fontSize: 12, fontFace: 'Calibri', color: GRAY, lineSpacingMultiple: 1.2
    });
    s3.addShape(pres.ShapeType.roundRect, {
      x: xPos + 0.15, y: 4.8, w: 3.4, h: 1.6,
      fill: { color: 'FFFFFF' }, line: { color: q.border, width: 1 }, rectRadius: 0.1
    });
    s3.addText(q.sol, {
      x: xPos + 0.25, y: 4.9, w: 3.2, h: 1.4,
      fontSize: 11, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.15
    });
  });

  // ==========================================
  // SLIDE 4: Мақсаты мен міндеттері
  // ==========================================
  const s4 = pres.addSlide();
  s4.bkgd = 'FFFFFF';
  s4.addNotes('Зерттеудің мақсаты — бидай мен мақтаға қажетті су мөлшерін LSTM негізіндегі Deep Learning арқылы болжау. 5 міндет: датасет жинау, өңдеу, LSTM құру, оқыту және MAE, RMSE, R² арқылы бағалау.');

  s4.addText('4-слайд — Мақсаты мен міндеттері', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });

  // Goal Box
  s4.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.3, w: 11.5, h: 1.1,
    fill: { color: 'EFF6FF' }, line: { color: '93C5FD', width: 1.5 }, rectRadius: 0.1
  });
  s4.addText('Зерттеудің мақсаты:', {
    x: 1.1, y: 1.4, w: 11.0, h: 0.35,
    fontSize: 12, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s4.addText('Қазақстандағы бидай мен мақта дақылдарына қажетті су мөлшерін LSTM негізіндегі Deep Learning моделі арқылы болжау.', {
    x: 1.1, y: 1.75, w: 11.0, h: 0.55,
    fontSize: 16, fontFace: 'Calibri', color: DARK, bold: true
  });

  // Tasks
  s4.addText('Міндеттері:', {
    x: 0.8, y: 2.65, w: 5.8, h: 0.4,
    fontSize: 16, fontFace: 'Calibri', color: PURPLE, bold: true
  });
  s4.addText('1. Қазақстан бойынша ирригациялық датасет жинау;\n2. Деректерді алдын ала өңдеу (Encoding, Scaling);\n3. LSTM моделін құру;\n4. Модельді оқыту және тестілеу (80/20 split);\n5. MAE, RMSE және R² көрсеткіштерімен бағалау.', {
    x: 0.8, y: 3.1, w: 5.8, h: 3.5,
    fontSize: 14, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.3
  });

  // AI & Agri image
  if (aiAgri) {
    s4.addImage({
      data: aiAgri,
      x: 7.0, y: 2.7, w: 5.3, h: 3.9,
      sizing: { type: 'cover', w: 5.3, h: 3.9 }
    });
  }

  // ==========================================
  // SLIDE 5: Датасет
  // ==========================================
  const s5 = pres.addSlide();
  s5.bkgd = 'FFFFFF';
  s5.addNotes('Датасет: Қазақстан бойынша 414 720 жазба, 2020-2100 жылдар, бидай мен мақта, RCP2.6 және RCP4.5 сценарийлері. Кіріс белгілері (X) және шығыс су қажеттілігі (Y).');

  s5.addText('5-слайд — Датасет сипаттамасы', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s5.addText('Біз Қазақстан бойынша ауыл шаруашылығына арналған ирригациялық деректерді қолдандық.', {
    x: 0.8, y: 1.1, w: 11.5, h: 0.4,
    fontSize: 14, fontFace: 'Calibri', color: GRAY
  });

  // Table
  const tableRows = [
    [{ text: 'Параметр', options: { bold: true, fill: { color: '2563EB' }, color: 'FFFFFF' } },
     { text: 'Мәні', options: { bold: true, fill: { color: '2563EB' }, color: 'FFFFFF' } }],
    [{ text: 'Ел' }, { text: 'Қазақстан', options: { bold: true, color: BLUE } }],
    [{ text: 'Жылдар' }, { text: '2020 – 2100 (80 жыл)' }],
    [{ text: 'Дақылдар' }, { text: 'Бидай, мақта', options: { bold: true, color: PURPLE } }],
    [{ text: 'Сценарий' }, { text: 'RCP2.6, RCP4.5' }],
    [{ text: 'Жазба саны' }, { text: '414 720', options: { bold: true, color: '059669', fontSize: 16 } }]
  ];
  s5.addTable(tableRows, {
    x: 0.8, y: 1.7, w: 5.6, h: 3.2,
    fontSize: 13, fontFace: 'Calibri', border: { color: 'CBD5E1', pt: 1 },
    fill: { color: 'FFFFFF' }, color: DARK
  });

  // Features Card
  s5.addShape(pres.ShapeType.roundRect, {
    x: 6.8, y: 1.7, w: 5.5, h: 4.8,
    fill: { color: LIGHT_BG }, line: { color: 'CBD5E1', width: 1 }, rectRadius: 0.1
  });
  s5.addText('Кіріс белгілері (X):', {
    x: 7.1, y: 1.9, w: 5.0, h: 0.4,
    fontSize: 16, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s5.addText('• Year (Жыл)\n• Crop (Дақыл түрі: Бидай / Мақта)\n• Scenario (RCP2.6 / RCP4.5)\n• Latitude (Географиялық ендік)\n• Longitude (Географиялық бойлық)', {
    x: 7.1, y: 2.35, w: 5.0, h: 1.8,
    fontSize: 13, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.2
  });

  s5.addText('Шығыс көрсеткіші (Y):', {
    x: 7.1, y: 4.3, w: 5.0, h: 0.4,
    fontSize: 16, fontFace: 'Calibri', color: GREEN, bold: true
  });
  s5.addText('• Irrigation Water Requirement (мм немесе м³/га)\n(1 мм су қабаты = 1 гектарға 10 м³ су)', {
    x: 7.1, y: 4.75, w: 5.0, h: 1.4,
    fontSize: 13, fontFace: 'Calibri', color: DARK, bold: true
  });

  // ==========================================
  // SLIDE 6: Data Preprocessing
  // ==========================================
  const s6 = pres.addSlide();
  s6.bkgd = 'FFFFFF';
  s6.addNotes('Деректерді өңдеу: CSV оқылды, Crop және Scenario сандық форматқа көшірілді, Min-Max Scaling [0, 1] жасалды, 80% Train және 20% Test бөліктеріне бөлінді.');

  s6.addText('6-слайд — Data Preprocessing (Деректерді алдын ала өңдеу)', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s6.addText('Модельді оқытпас бұрын деректер бірнеше кезеңнен өтті.', {
    x: 0.8, y: 1.1, w: 11.5, h: 0.4,
    fontSize: 14, fontFace: 'Calibri', color: GRAY
  });

  const flowSteps = [
    { title: 'CSV', sub: 'Dataset', fill: 'DBEAFE', border: '3B82F6', text: '1D4ED8' },
    { title: 'Label', sub: 'Encoding', fill: 'F3E8FF', border: 'A855F7', text: '7E22CE' },
    { title: 'Min-Max', sub: 'Scaling', fill: 'DCFCE7', border: '22C55E', text: '15803D' },
    { title: 'Train', sub: '80 / 20', fill: 'DBEAFE', border: '3B82F6', text: '1D4ED8' },
    { title: 'LSTM', sub: 'Ready', fill: 'F3E8FF', border: 'A855F7', text: '7E22CE' },
  ];

  flowSteps.forEach((st, i) => {
    const xPos = 0.8 + i * 2.35;
    s6.addShape(pres.ShapeType.roundRect, {
      x: xPos, y: 1.8, w: 1.8, h: 1.2,
      fill: { color: st.fill }, line: { color: st.border, width: 2 }, rectRadius: 0.15
    });
    s6.addText(st.title, {
      x: xPos, y: 1.95, w: 1.8, h: 0.45,
      fontSize: 17, fontFace: 'Calibri', color: st.text, bold: true, align: 'center'
    });
    s6.addText(st.sub, {
      x: xPos, y: 2.45, w: 1.8, h: 0.35,
      fontSize: 12, fontFace: 'Calibri', color: st.text, align: 'center'
    });
    if (i < 4) {
      s6.addText('➔', {
        x: xPos + 1.85, y: 2.15, w: 0.45, h: 0.5,
        fontSize: 18, color: '64748B', align: 'center'
      });
    }
  });

  const expCards = [
    { num: '1', title: 'CSV файл оқылды', desc: '414 720 жазбадан тұратын тарихи климаттық деректер оқылды.' },
    { num: '2', title: 'Сандық форматқа ауыстыру', desc: 'Crop және Scenario санаттық мәндері Label Encoding арқылы сандарға көшірілді.' },
    { num: '3', title: 'Min-Max Scaling', desc: 'Барлық сандық бағандар [0, 1] диапазонына нормализацияланды.' },
    { num: '4', title: '80% / 20% Бөлу', desc: 'Деректер 80% оқу (train) және 20% тест (test) бөліктеріне бөлініп, бекітілді.' }
  ];

  expCards.forEach((c, idx) => {
    const x = idx % 2 === 0 ? 0.8 : 6.8;
    const y = idx < 2 ? 3.5 : 5.0;
    s6.addShape(pres.ShapeType.roundRect, {
      x, y, w: 5.5, h: 1.25,
      fill: { color: LIGHT_BG }, line: { color: 'CBD5E1', width: 1 }, rectRadius: 0.1
    });
    s6.addText(`${c.num}. ${c.title}`, {
      x: x + 0.2, y: y + 0.15, w: 5.1, h: 0.35,
      fontSize: 14, fontFace: 'Calibri', color: BLUE, bold: true
    });
    s6.addText(c.desc, {
      x: x + 0.2, y: y + 0.55, w: 5.1, h: 0.6,
      fontSize: 12, fontFace: 'Calibri', color: DARK
    });
  });

  // ==========================================
  // SLIDE 7: LSTM моделі
  // ==========================================
  const s7 = pres.addSlide();
  s7.bkgd = 'FFFFFF';
  s7.addNotes('LSTM — уақыттық қатарларды өңдеуге арналған Deep Learning моделі. Біздің деректер 2020–2100 жылдарды қамтығандықтан, бұл модель уақыт бойынша өзгерістерді жақсы үйренеді.');

  s7.addText('7-слайд — LSTM моделі', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });

  s7.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.3, w: 11.5, h: 1.3,
    fill: { color: 'FAF5FF' }, line: { color: 'D8B4FE', width: 1.5 }, rectRadius: 0.1
  });
  s7.addText('Неге LSTM таңдалды?', {
    x: 1.1, y: 1.45, w: 11.0, h: 0.35,
    fontSize: 15, fontFace: 'Calibri', color: PURPLE, bold: true
  });
  s7.addText('LSTM — уақыттық қатарларды өңдеуге арналған Deep Learning моделі. Біздің деректер 2020–2100 жылдарды қамтығандықтан, бұл модель уақыт бойынша өзгерістерді жақсы үйренеді.', {
    x: 1.1, y: 1.85, w: 11.0, h: 0.65,
    fontSize: 15, fontFace: 'Calibri', color: DARK
  });

  s7.addText('Модель архитектурасы:', {
    x: 0.8, y: 2.85, w: 11.5, h: 0.4,
    fontSize: 16, fontFace: 'Calibri', color: BLUE, bold: true
  });

  const archNodes = [
    { title: 'Input', sub: '5 features', fill: 'DBEAFE', border: '3B82F6', text: '1D4ED8' },
    { title: 'LSTM', sub: '64 neurons', fill: 'DCFCE7', border: '22C55E', text: '15803D' },
    { title: 'Dense', sub: '1 output', fill: 'F3E8FF', border: 'A855F7', text: '7E22CE' },
    { title: 'Output', sub: 'Water (mm)', fill: 'DBEAFE', border: '3B82F6', text: '1D4ED8' },
  ];

  archNodes.forEach((node, i) => {
    const xPos = 0.8 + i * 2.95;
    s7.addShape(pres.ShapeType.roundRect, {
      x: xPos, y: 3.35, w: 2.2, h: 1.5,
      fill: { color: node.fill }, line: { color: node.border, width: 2 }, rectRadius: 0.15
    });
    s7.addText(node.title, {
      x: xPos, y: 3.65, w: 2.2, h: 0.5,
      fontSize: 20, fontFace: 'Calibri', color: node.text, bold: true, align: 'center'
    });
    s7.addText(node.sub, {
      x: xPos, y: 4.2, w: 2.2, h: 0.4,
      fontSize: 13, fontFace: 'Calibri', color: node.text, align: 'center'
    });
    if (i < 3) {
      s7.addText('➔', {
        x: xPos + 2.3, y: 3.85, w: 0.6, h: 0.5,
        fontSize: 22, color: '64748B', align: 'center'
      });
    }
  });

  s7.addText('• Кіріс: 5 белгі (Year, Crop, Scenario, Latitude, Longitude)\n• LSTM қабаты: 64 жасырын нейрон ұзақ мерзімді уақыттық байланыстарды есте сақтайды\n• Dense қабаты: 1 шығыс нейроны суаруға қажетті су көлемін үздіксіз скаляр ретінде шығарады', {
    x: 0.8, y: 5.2, w: 11.5, h: 1.5,
    fontSize: 13, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.2
  });

  // ==========================================
  // SLIDE 8: Формула
  // ==========================================
  const s8 = pres.addSlide();
  s8.bkgd = 'FFFFFF';
  s8.addNotes('Формула: LSTM формуласы: ht = LSTM(xt, ht-1). Loss: Huber(y, y_hat). Оңтайландырушы: Adam. Бағалау метрикалары: MAE, RMSE, R².');

  s8.addText('8-слайд — Қолданылған математикалық модель', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });

  s8.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.3, w: 6.2, h: 5.2,
    fill: { color: '0F172A' }, line: { color: '334155', width: 1.5 }, rectRadius: 0.15
  });
  s8.addText('LSTM формуласы:', {
    x: 1.1, y: 1.5, w: 5.6, h: 0.4,
    fontSize: 15, fontFace: 'Calibri', color: 'A78BFA', bold: true
  });
  s8.addText('h_t = LSTM(x_t, h_{t-1})', {
    x: 1.1, y: 2.0, w: 5.6, h: 0.7,
    fontSize: 22, fontFace: 'Courier New', color: '34D399', bold: true
  });
  s8.addText('мұндағы:\n• x_t — кіріс деректері (Input features)\n• h_t — жасырын күй (Hidden state)\n• ŷ — болжанған су мөлшері (Predicted water)', {
    x: 1.1, y: 2.8, w: 5.6, h: 1.3,
    fontSize: 13, fontFace: 'Calibri', color: 'E2E8F0', lineSpacingMultiple: 1.2
  });

  s8.addText('Loss функциясы:', {
    x: 1.1, y: 4.2, w: 5.6, h: 0.35,
    fontSize: 15, fontFace: 'Calibri', color: 'A78BFA', bold: true
  });
  s8.addText('Huber(y, ŷ)', {
    x: 1.1, y: 4.6, w: 5.6, h: 0.5,
    fontSize: 18, fontFace: 'Courier New', color: '60A5FA', bold: true
  });
  s8.addText('Optimizer: Adam    |    Metrics: MAE, RMSE, R²', {
    x: 1.1, y: 5.3, w: 5.6, h: 0.4,
    fontSize: 13, fontFace: 'Calibri', color: 'FCD34D', bold: true
  });

  s8.addShape(pres.ShapeType.roundRect, {
    x: 7.3, y: 1.3, w: 5.0, h: 5.2,
    fill: { color: LIGHT_BG }, line: { color: 'CBD5E1', width: 1 }, rectRadius: 0.15
  });
  s8.addText('LSTM ұяшық қақпалары (Gates):', {
    x: 7.6, y: 1.5, w: 4.4, h: 0.4,
    fontSize: 15, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s8.addText('1. Ұмыту қақпасы (Forget Gate):\nАлдыңғы жадтан қандай ақпаратты өшіру керектігін шешеді.\n\n2. Кіріс қақпасы (Input Gate):\nЖаңа климаттық белгілерді ұяшық жадына жазады.\n\n3. Шығыс қақпасы (Output Gate):\nКелесі уақыт қадамына жасырын күйді (h_t) жібереді.\n\n4. Huber Loss:\nШектен тыс ауытқуларға (outliers) төзімді болады.', {
    x: 7.6, y: 2.0, w: 4.4, h: 4.2,
    fontSize: 12, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.2
  });

  // ==========================================
  // SLIDE 9: Эксперимент нәтижелері
  // ==========================================
  const s9 = pres.addSlide();
  s9.bkgd = 'FFFFFF';
  s9.addNotes('Эксперимент нәтижелері: MAE = 388.35 мм (3883.5 м³/га), RMSE = 444.38 мм, Huber Loss = 387.85, R² = -0.007. LSTM моделі су мөлшерін болжауды орындады.');

  s9.addText('9-слайд — Эксперимент нәтижелері', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s9.addText('Модель нәтижесі (Оқыту мен тестілеу қорытындысы):', {
    x: 0.8, y: 1.1, w: 11.5, h: 0.4,
    fontSize: 14, fontFace: 'Calibri', color: GRAY
  });

  const metrics = [
    { name: 'MAE', val: '388.35 мм', desc: 'Орташа қате (3883.5 м³/га)', color: '3B82F6' },
    { name: 'RMSE', val: '444.38 мм', desc: 'Түбірлік квадраттық қате', color: 'A855F7' },
    { name: 'Loss', val: '387.85', desc: 'Huber Loss мәні', color: '10B981' },
    { name: 'R²', val: '−0.007', desc: 'Анықтау коэффициенті', color: 'F59E0B' },
  ];

  metrics.forEach((m, idx) => {
    const xPos = 0.8 + idx * 2.95;
    s9.addShape(pres.ShapeType.roundRect, {
      x: xPos, y: 1.7, w: 2.7, h: 2.2,
      fill: { color: '0F172A' }, line: { color: '334155', width: 1.5 }, rectRadius: 0.15
    });
    s9.addText(m.name, {
      x: xPos + 0.2, y: 1.9, w: 2.3, h: 0.35,
      fontSize: 14, fontFace: 'Calibri', color: m.color, bold: true
    });
    s9.addText(m.val, {
      x: xPos + 0.2, y: 2.35, w: 2.3, h: 0.6,
      fontSize: 24, fontFace: 'Courier New', color: m.color, bold: true
    });
    s9.addText(m.desc, {
      x: xPos + 0.2, y: 3.1, w: 2.3, h: 0.5,
      fontSize: 11, fontFace: 'Calibri', color: '94A3B8'
    });
  });

  s9.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 4.2, w: 11.5, h: 2.3,
    fill: { color: LIGHT_BG }, line: { color: 'CBD5E1', width: 1 }, rectRadius: 0.15
  });
  s9.addText('Қысқаша қорытынды:', {
    x: 1.1, y: 4.4, w: 11.0, h: 0.4,
    fontSize: 16, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s9.addText('LSTM моделі су мөлшерін болжауды орындады. Бұл бастапқы модель болғандықтан, болашақта қосымша климаттық белгілер арқылы дәлдігін арттыруға болады.', {
    x: 1.1, y: 4.85, w: 11.0, h: 0.6,
    fontSize: 15, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.2
  });
  s9.addText('• Модель 1 гектарға шаққандағы орташа су нормасын (~3 883.5 м³/га) тұрақты ұстады.\n• Келесі кезеңде R² көрсеткішін арттыру үшін ауа температурасы, жауын-шашын және булану (ET₀) енгізіледі.', {
    x: 1.1, y: 5.5, w: 11.0, h: 0.8,
    fontSize: 12, fontFace: 'Calibri', color: GRAY
  });

  // ==========================================
  // SLIDE 10: Actual vs Predicted
  // ==========================================
  const s10 = pres.addSlide();
  s10.bkgd = 'FFFFFF';
  s10.addNotes('10-слайд: Actual vs Predicted. Графиктегі 75 үлгі — 75 сынақ егістік учаскесі (1 гектар нормасымен). 1 мм су = 10 м³/га су. Орташа болжам 388.35 мм = 1 гектарға 3 883.5 м³ су.');

  s10.addText('10-слайд — Actual vs Predicted (Нақты және болжанған нәтижелер)', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 24, fontFace: 'Calibri', color: BLUE, bold: true
  });

  s10.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.3, w: 11.5, h: 3.8,
    fill: { color: 'FFFFFF' }, line: { color: '1E293B', width: 1.5 }, rectRadius: 0.1
  });
  s10.addText('Actual vs Predicted: 75 сынақ учаскесі бойынша 1 га кететін су мөлшері', {
    x: 1.1, y: 1.45, w: 10.0, h: 0.4,
    fontSize: 14, fontFace: 'Calibri', color: DARK, bold: true, align: 'center'
  });
  s10.addText('— Көк сызық (Actual: нақты су мөлшері)    |    — Қызғылт сары (Predicted: 388.35 мм = 3 883.5 м³/га)', {
    x: 1.1, y: 1.85, w: 10.0, h: 0.35,
    fontSize: 12, fontFace: 'Calibri', color: BLUE, bold: true, align: 'center'
  });

  s10.addShape(pres.ShapeType.rect, {
    x: 1.5, y: 2.3, w: 10.1, h: 2.4,
    fill: { color: 'F8FAFC' }, line: { color: 'E2E8F0', width: 1 }
  });
  s10.addText('Water (мм)\n1000\n\n600\n\n200\n0', {
    x: 1.0, y: 2.15, w: 0.8, h: 2.4,
    fontSize: 9, fontFace: 'Calibri', color: GRAY, align: 'right'
  });
  s10.addShape(pres.ShapeType.line, {
    x: 1.5, y: 3.5, w: 10.1, h: 0,
    line: { color: 'F59E0B', width: 4 }
  });
  s10.addText('Predicted: ~388.35 мм (3 883.5 м³/га)', {
    x: 8.5, y: 3.2, w: 2.9, h: 0.3,
    fontSize: 10, fontFace: 'Calibri', color: 'D97706', bold: true
  });
  s10.addText('Сынақ учаскелері: 1-ден 75-ке дейін (әр үлгі 1 га нормасымен)', {
    x: 1.5, y: 4.8, w: 10.1, h: 0.25,
    fontSize: 10, fontFace: 'Calibri', color: GRAY, align: 'center'
  });

  s10.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.3, w: 11.5, h: 1.35,
    fill: { color: LIGHT_BG }, line: { color: 'CBD5E1', width: 1 }, rectRadius: 0.1
  });
  s10.addText('Ауданы мен су шығынының түсіндірмесі:', {
    x: 1.1, y: 5.4, w: 11.0, h: 0.3,
    fontSize: 13, fontFace: 'Calibri', color: BLUE, bold: true
  });
  s10.addText('• 75 үлгі — бұл тестілеу кезінде бақыланған 75 егістік учаскесі (әр үлгі 1 гектарға есептелген).\n• Агрономиялық формула: 1 мм су қабаты = 1 гектарға 10 м³ су. Яғни 388.35 мм = 1 га алқапқа 3 883.5 м³ су.\n• 10 гектар алқапқа ~38 835 м³, ал 100 гектарға ~388 350 м³ су қажет болады.', {
    x: 1.1, y: 5.75, w: 11.0, h: 0.8,
    fontSize: 11, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.15
  });

  // ==========================================
  // SLIDE 11: Қорытынды
  // ==========================================
  const s11 = pres.addSlide();
  s11.bkgd = 'FFFFFF';
  s11.addNotes('11-слайд: Қорытынды. 414 720 жазба, LSTM таңдалды, сәтті болжанды. MAE = 388.35 мм (3883.5 м³/га). Назарларыңызға рақмет!');

  s11.addText('11-слайд — Қорытынды', {
    x: 0.8, y: 0.5, w: 11.5, h: 0.6,
    fontSize: 26, fontFace: 'Calibri', color: BLUE, bold: true
  });

  const points = [
    '• Қазақстан бойынша 414 720 жазба пайдаланылды.',
    '• Deep Learning үшін LSTM моделі таңдалды.',
    '• Модель 1 гектарға кететін су мөлшерін болжауды сәтті орындады.',
    '• Нәтижелер: MAE = 388.35 мм (3 883.5 м³/га), RMSE = 444.38 мм.',
    '• Болашақта температура, жауын-шашын және ET₀ сияқты қосымша белгілерді енгізу арқылы модельдің дәлдігін арттыру жоспарланады.'
  ];

  s11.addText(points.join('\n\n'), {
    x: 0.8, y: 1.4, w: 6.5, h: 4.0,
    fontSize: 14, fontFace: 'Calibri', color: DARK, lineSpacingMultiple: 1.2
  });

  if (smartFarm) {
    s11.addImage({
      data: smartFarm,
      x: 7.7, y: 1.4, w: 4.8, h: 3.4,
      sizing: { type: 'cover', w: 4.8, h: 3.4 }
    });
    s11.addText('Заманауи Smart Farming', {
      x: 7.7, y: 4.85, w: 4.8, h: 0.35,
      fontSize: 12, fontFace: 'Calibri', color: GREEN, bold: true, align: 'center'
    });
  }

  s11.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.6, w: 11.7, h: 1.1,
    fill: { color: '2563EB' }, rectRadius: 0.1
  });
  s11.addText('Назарларыңызға рақмет!  |  Сұрақтарыңыз болса қоюларыңызға болады.', {
    x: 1.0, y: 5.85, w: 11.3, h: 0.6,
    fontSize: 18, fontFace: 'Calibri', color: 'FFFFFF', bold: true, align: 'center'
  });

  // Save to public folder
  const outputPath = path.resolve(process.cwd(), 'public/Machine_Learning_Су_Болжау_Ахметова_Меруерт.pptx');
  await pres.writeFile({ fileName: outputPath });
  console.log('11-slide PPTX created at', outputPath);
}

generate().catch(console.error);
