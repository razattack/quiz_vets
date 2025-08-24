// ====== CONFIG AND DATA ======

// Full dataset from your C code

const questions = [
"1. What is the minimum recommended age for first rabies vaccination in cats in Canada?",
"2. Which dental condition is most common in domestic cats?",
"3. Feline hypertrophic cardiomyopathy most commonly affects which heart chamber?",
"4. Which parasite is most commonly transmitted transplacentally in cats?",
"5. The most common cause of feline hyperthyroidism is?",
"6. Which antibiotic is contraindicated in cats due to esophageal strictures?",
"7. What vaccine is considered 'core' in Canadian cats?",
"8. In chronic kidney disease staging (IRIS), staging is primarily based on?",
"9. Which inhalant anesthetic is most commonly used in Canadian feline practice?",
"10. Acetaminophen toxicity in cats primarily affects?",
"11. The primary vector of Bartonella henselae (cat scratch disease) is?",
"12. Which feline blood type is most common in North America?",
"13. Which drug is used as the first-line treatment for feline hypertrophic cardiomyopathy?",
"14. Which feline retrovirus is associated with immunosuppression?",
"15. What is the typical lifespan of a feline red blood cell?",
"16. Which anesthetic agent should be avoided in cats with hypertrophic cardiomyopathy?",
"17. Which enzyme deficiency makes cats highly sensitive to certain drugs/toxins?",
"18. What is the most common clinical sign of feline asthma?",
"19. Which imaging modality best diagnoses portosystemic shunts in cats?",
"20. Which nutritional deficiency can occur in cats fed exclusively dog food?",
"21. Which vitamin deficiency in cats can cause retinal degeneration?",
"22. Which fluid choice is best for a cat with hypovolemic shock?",
"23. What is the recommended first-line drug for hypertensive cats?",
"24. Which antibiotic must never be given IV to cats due to fatal reaction?",
"25. In cats, which anesthetic agent provides analgesia but increases sympathetic tone?",
"26. Which core vaccine is typically combined with FHV-1 and FCV?",
"27. Best screening test for hyperthyroidism in cats?",
"28. Most sensitive early biomarker for feline CKD progression?",
"29. Which flea control is safe for cats?",
"30. Which parasite causes cutaneous larva migrans in humans?",
"31. FIP is caused by mutation of which virus?",
"32. Preferred treatment for feline hyperthyroidism in renal-compromised cats?",
"33. Which drug is a contraindication with tramadol due to serotonin syndrome risk?",
"34. Classic radiographic sign of feline asthma?",
"35. Best first test for suspected pleural effusion?",
"36. Common cause of urethral obstruction in male cats?",
"37. Best stabilization for blocked cat before anesthesia?",
"38. First-line antiemetic for feline nausea?",
"39. Which analgesic is safest for cats with CKD?",
"40. Which antibiotic is effective against Mycoplasma haemofelis?",
"41. Gold standard for diagnosing hyperthyroidism when total T4 equivocal?",
"42. Which test screens FeLV infection initially?",
"43. Which endocrine disease causes insulin resistance in cats?",
"44. Preferred insulin for newly diagnosed feline diabetes?",
"45. Most common urolith type in cats?",
"46. Which crystal forms in alkaline urine in cats?",
"47. Key dietary change to prevent FLUTD recurrences?",
"48. Which cardiomyopathy is most common in cats?",
"49. Which test estimates left atrial enlargement non-invasively?",
"50. Which anticoagulant is used for ATE risk in HCM cats?",
"51. Best imaging for biliary obstruction in cats?",
"52. Which enzyme is most liver-specific in cats?",
"53. Which disease is linked to triaditis in cats?",
"54. Best test for EPI in cats?",
"55. Which antibiotic causes retinal toxicity in cats at high doses?",
"56. Which antiviral is used for FHV-1 keratitis?",
"57. Preferred analgesia for moderate postoperative pain in cats?",
"58. Which sedative can cause significant bradycardia in cats?",
"59. Best reversal agent for dexmedetomidine?",
"60. Which induction agent preserves cardiovascular stability best?",
"61. Which emergency drug treats calcium channel blocker overdose?",
"62. Which electrolyte abnormality is typical in hypoadrenocorticism?",
"63. Best screening for proteinuria in cats?",
"64. Which test confirms hypertension-induced retinal detachment?",
"65. Mainstay therapy for idiopathic cystitis?",
"66. Which anticonvulsant is safest long-term in cats?",
"67. Which antibiotic class risks esophageal injury if dry-pilled?",
"68. Best first test for hemoabdomen?",
"69. Which drug is contraindicated in feline asthma?",
"70. Which vaccine can cause injection-site sarcomas rarely?",
"71. Preferred site for rabies vaccination in cats (Canada)?",
"72. Best test for early HCM detection in asymptomatic cats?",
"73. Safe opioid for severe pain in cats?",
"74. Which NSAID is labeled for cats (single dose)?",
"75. Nutritional requirement unique to cats?",
"76. Which antibiotic is effective for toxoplasmosis?",
"77. Which test confirms giardiasis?",
"78. Which drug is used to treat hypertrophic obstructive cardiomyopathy?",
"79. Which imaging best detects ureteral calculi?",
"80. Which therapy reduces ureteral obstruction in cats?",
"81. Which endocrine test confirms acromegaly?",
"82. Common cause of feline cholangitis?",
"83. Which lab abnormality suggests hepatic lipidosis?",
"84. Which tube is used for long-term enteral feeding?",
"85. Which antibiotic penetrates prostate tissue well?",
"86. Which anesthetic risk increases with anemia?",
"87. Which ECG change suggests hyperkalemia?",
"88. Best emergency treatment for hyperkalemia?",
"89. Which fluid is hypotonic and not for resuscitation?",
"90. Which drug reverses benzodiazepines?",
"91. Which antibiotic is contraindicated in young kittens (teeth/bone)?",
"92. Which test diagnoses FIV infection definitively?",
"93. Which cardiopulmonary parasite affects cats occasionally?",
"94. Which drug treats anaphylaxis acutely?",
"95. Which antibiotic is best for bite wound anaerobes?",
"96. Best imaging for nasal mass in cats?",
"97. Which tumor is linked to FeLV historically?",
"98. Which chemotherapy drug risks hemorrhagic cystitis?",
"99. Which drug treats hypertensive emergencies in cats IV?",
"100. Which therapy induces remission in insulin-resistant acromelagic cats?"
];

const options = [
["8 weeks","12 weeks","16 weeks","6 months"],
["Tooth fractures","Gingivostomatitis","Tooth resorption","Periodontal abscess"],
["Left atrium","Right atrium","Left ventricle","Right ventricle"],
["Roundworm","Tapeworm","Hookworm","Giardia"],
["Carcinoma","Adenomatous hyperplasia","Iodine deficiency","Pituitary tumor"],
["Amoxicillin","Ciprofloxacin","Doxycycline","Clindamycin"],
["FIV","FeLV","Rabies","Chlamydia"],
["SDMA level","Creatinine","USG","Blood pressure"],
["Sevoflurane","Isoflurane","Halothane","Nitrous oxide"],
["Liver","Kidneys","Spleen","Pancreas"],
["Ticks","Mosquitoes","Fleas","Lice"],
["Type A","Type B","Type AB","Type C"],
["Furosemide","Pimobendan","Atenolol","Enalapril"],
["FeLV","FIV","FIP","FCV"],
["30 days","60 days","90 days","120 days"],
["Ketamine","Propofol","Alfaxalone","Midazolam"],
["CYP3A4","Glucuronyl transferase","Monoamine oxidase","Cholinesterase"],
["Sneezing","Coughing","Vomiting","Wheezing"],
["X-ray","CT angiography","MRI","Ultrasound"],
["Vitamin B12","Calcium","Taurine","Iron"],
["Vitamin A","Vitamin D","Taurine","Vitamin E"],
["0.9% NaCl","Lactated Ringers","Plasma","Dextrose 5%"],
["Atenolol","Amlodipine","Enalapril","Hydralazine"],
["Penicillin","Cefovecin","Doxycycline","Procaine Pen G"],
["Propofol","Ketamine","Midazolam","Isoflurane"],
["Panleukopenia","Calicivirus","Chlamydia","Bordetella"],
["Free T4","Total T4","TSH","T3 uptake"],
["SDMA","Creatinine","BUN","USG"],
["Permethrin","Fipronil (cat)","Organophosphate","Amitraz"],
["Hookworm","Roundworm","Whipworm","Tapeworm"],
["FeLV","FCoV","FCV","FHV-1"],
["I-131","Methimazole","Thyroidectomy","Low-iodine diet"],
["SSRIs","Tramadol","Gabapentin","Maropitant"],
["Air bronchograms","Bronchial pattern","Alveolar pattern","Interstitial"],
["CT","Thoracocentesis","US","Radiographs"],
["Struvite","Mucus plug","Calcium oxalate","Urethral stone"],
["Induce anesthesia","Cystocentesis","Fluids + stabilize","Perineal massage"],
["Maropitant","Metoclopramide","Ondansetron","Diphenhydramine"],
["NSAIDs","Buprenorphine","Tramadol","Acetaminophen"],
["Amoxicillin","Doxycycline","Enrofloxacin","Azithromycin"],
["TSH","Free T4 by ED","Total T4","TRH stimulation"],
["IFA","ELISA","PCR","Western blot"],
["Addison's","Cushing's","Hyperthyroidism","Pheochromocytoma"],
["NPH","Glargine","Detemir","PZI"],
["Struvite","Calcium oxalate","Urate","Cystine"],
["Struvite","Oxalate","Urate","Cystine"],
["High sodium","High moisture","High protein","High magnesium"],
["DCM","RCM","HCM","ARVC"],
["Radiographs","NT-proBNP","ECG","LA:Ao echo"],
["Heparin","Clopidogrel","Aspirin","Warfarin"],
["Radiographs","Ultrasound","CT","MRI"],
["ALT","AST","ALP","GGT"],
["Pancreatitis","IBD","Hepatitis","All three"],
["TLI","cPLI","fPLI","B12 level"],
["Enrofloxacin","Doxycycline","Amikacin","Clindamycin"],
["Oseltamivir","Famciclovir","Acyclovir","Ganciclovir"],
["NSAID alone","Buprenorphine","Acetaminophen","Phenylbutazone"],
["Midazolam","Dexmedetomidine","Acepromazine","Ketamine"],
["Naloxone","Flumazenil","Atipamezole","Yohimbine"],
["Etomidate","Propofol","Ketamine","Thiopental"],
["Calcium gluconate","Atropine","Insulin/dextrose","Lipid emulsion"],
["Hypernatremia","Hypokalemia","Hyperkalemia","Hypoglycemia"],
["Dipstick","UPC ratio","Sediment exam","SSA test"],
["Indirect BP","Direct BP","Fundic exam","ECG"],
["Antibiotics","Steroids","Environmental mods","Diuretics"],
["Phenobarbital","Levetiracetam","Zonisamide","KBr"],
["Fluoroquinolones","Tetracyclines","Macrolides","Cephalosporins"],
["FAST scan","CT","Radiographs","Peritoneal tap"],
["Terbutaline","Furosemide","Prednisone","Albuterol"],
["Rabies","FeLV","FIV","Panleukopenia"],
["Right forelimb","Right hindlimb","Left forelimb","Left hindlimb"],
["Radiographs","NT-proBNP","Genetic test","Echocardiogram"],
["Fentanyl","Codeine","Meperidine","Loperamide"],
["Carprofen","Meloxicam","Robenacoxib","Aspirin"],
["Taurine","Vitamin C","Beta-carotene","Linoleic acid"],
["Clindamycin","Metronidazole","Penicillin","Amikacin"],
["Wet mount","Fecal ELISA","Zinc sulfate float","PCR panel"],
["Atenolol","Diltiazem","Pimobendan","Enalapril"],
["Radiographs","Ultrasound","Non-contrast CT","MRI"],
["Alpha blockers","Tamsulosin","Nifedipine","Stents/SUB"],
["Insulin level","IGF-1","ACTH stim","Dexamethasone"],
["E. coli","Ascending bacteria","Lymphocytic","Flukes"],
["Low ALT","High ALP","Low bilirubin","High CK"],
["Nasoenteric","Esophagostomy","PEG","Jejunostomy"],
["Penicillin","Enrofloxacin","Chloramphenicol","Amoxiclav"],
["Hypotension","Hypercapnia","Hypoxemia","All three"],
["Tall T waves","Short PR","Wide QRS","Osborn waves"],
["Calcium gluconate","Sodium bicarb","Insulin/dextrose","All three"],
["LRS","0.9% NaCl","D5W","Plasmalyte"],
["Naloxone","Flumazenil","Atipamezole","N-acetylcysteine"],
["Chloramphenicol","Tetracyclines","Fluoroquinolones","Aminoglycosides"],
["ELISA antibody","Western blot","PCR","Virus isolation"],
["Aelurostrongylus","Dirofilaria","Capillaria","Angiostrongylus"],
["Diphenhydramine","Epinephrine","Prednisone","Albuterol"],
["Clindamycin","Metronidazole","Doxycycline","Trimethoprim sulfa"],
["Radiographs","CT","MRI","Ultrasound"],
["Osteosarcoma","Lymphoma","SCC","MCT"],
["Cyclophosphamide","Doxorubicin","Vincristine","Lomustine"],
["Hydralazine","Labetalol","Nitroprusside","Esmolol"],
["Hypophysectomy","SRT (radiation)","Pasireotide","Cabergoline"]
];

const answerKeyLetters = [
'B','C','C','A','B','C','C','B','B','A',
'C','A','C','B','C','A','B','B','B','C',
'A','B','B','D','B','A','B','A','B','A',
'B','A','B','B','B','C','C','B','B','B',
'B','B','D','B','B','B','B','C','C','B',
'B','A','D','D','C','B','B','B','C','A',
'D','C','B','D','C','B','B','A','C','A',
'B','D','A','D','B','D','B','B','A','C',
'A','C','B','B','B','B','D','B','D','B',
'C','B','A','B','B','C','C','B','C','B'
];

// Convert letters to indices 0..3
const answerKey = answerKeyLetters.map(ch => ({A:0,B:1,C:2,D:3}[ch]));

// Bands: five bands of 20 (0-19, 20-39, 40-59, 60-79, 80-99)
const bandMeta = [
  {name:"Beginner", start:0, end:19, color:"#9ae6b4"},
  {name:"Intermediate", start:20, end:39, color:"#fbd38d"},
  {name:"Advanced", start:40, end:59, color:"#90cdf4"},
  {name:"Expert", start:60, end:79, color:"#fbb6ce"},
  {name:"Master", start:80, end:99, color:"#c4b5fd"},
];

const QUIZ_KEY = 'fvq_state_v1';
const SOUND_KEY = 'fvq_sound';
const CONTRAST_KEY = 'fvq_contrast';
const QUESTION_TIME = 30; // seconds

// ====== DOM ======
const bandBanner = document.getElementById('bandBanner');
const bandNameEl = document.getElementById('bandName');
const qCounterEl = document.getElementById('qCounter');
const qTotalEl = document.getElementById('qTotal');
const streakEl = document.getElementById('streak');
const titleEl = document.getElementById('title');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const scoreView = document.getElementById('scoreView');
const scoreLine = document.getElementById('scoreLine');
const breakdown = document.getElementById('breakdown');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');
const exportBtn = document.getElementById('exportBtn');
const quizPanel = document.getElementById('quizPanel');
const timerValEl = document.getElementById('timerVal');
const newBtn = document.getElementById('newBtn');
const resumeBtn = document.getElementById('resumeBtn');

// Sounds and toggles
const s = {
  click: document.getElementById('s-click'),
  correct: document.getElementById('s-correct'),
  wrong: document.getElementById('s-wrong'),
  band: document.getElementById('s-band'),
  complete: document.getElementById('s-complete'),
  tick: document.getElementById('s-tick'),
};
const soundToggle = document.getElementById('soundToggle');
const contrastToggle = document.getElementById('contrastToggle');

// ====== STATE ======
let seq = []; // [{q,band}]
let cursor = 0;
let score = 0;
let streak = 0;
let answered = false;
let bandScores = bandMeta.map(()=>({correct:0,total:0}));
let timer = null;
let timeLeft = QUESTION_TIME;
let history = []; // per-question results for export

// ====== HELPERS ======
function play(name) {
  if (!soundToggle.checked) return;
  const a = s[name];
  if (!a) return;
  try { a.currentTime = 0; a.play(); } catch {}
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function buildSequence() {
  seq = [];
  bandMeta.forEach((b, idx) => {
    const temp = [];
    for (let i=b.start; i<=b.end; i++) temp.push(i);
    shuffle(temp);
    seq.push(...temp.map(q => ({q, band: idx})));
  });
  cursor = 0; score = 0; streak = 0;
  bandScores = bandMeta.map(()=>({correct:0,total:0}));
  history = [];
}

function currentBandIdx() {
  return seq[cursor]?.band ?? 0;
}

function showBandBanner() {
  bandBanner.textContent = '--- Ramping up difficulty ---';
  bandBanner.classList.add('show');
  play('band');
  setTimeout(()=> bandBanner.classList.remove('show'), 1200);
}

function stopTimer() {
  if (timer) { clearInterval(timer); timer = null; }
}

function startTimer() {
  stopTimer();
  timeLeft = QUESTION_TIME;
  timerValEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerValEl.textContent = timeLeft;
    if (timeLeft <= 5 && timeLeft > 0) play('tick');
    if (timeLeft <= 0) {
      stopTimer();
      // Treat as incorrect; auto-reveal and enable Next
      autoTimeout();
    }
    persist();
  }, 1000);
}

function autoTimeout() {
  if (answered) return;
  const {q} = seq[cursor];
  const correct = answerKey[q];
  const children = Array.from(optionsEl.children);
  children.forEach((el, idx) => {
    el.classList.add('disabled');
    if (idx === correct) el.classList.add('correct');
  });
  answered = true;
  nextBtn.disabled = false;
  streak = 0;
  bandScores[currentBandIdx()].total += 1;
  history.push({index:q+1, band: bandMeta[currentBandIdx()].name, correct:false, time:QUESTION_TIME, answered:false});
}

function renderQuestion() {
  if (cursor >= seq.length) return showScore();

  const {q, band} = seq[cursor];
  const bandInfo = bandMeta[band];

  bandNameEl.textContent = bandInfo?.name ?? 'Band';
  qCounterEl.textContent = String(cursor + 1);
  qTotalEl.textContent = String(seq.length);
  streakEl.textContent = String(streak);

  titleEl.textContent = `Question ${cursor + 1}`;
  questionEl.textContent = questions[q].replace(/^\d+\.\s*/, '');
  optionsEl.innerHTML = '';
  const letters = ['A','B','C','D'];

  options[q].forEach((opt, i) => {
    const item = document.createElement('button');
    item.className = 'option';
    item.setAttribute('role','listitem');
    item.setAttribute('aria-pressed','false');
    item.innerHTML = `<span class="opt-key">${letters[i]}</span>${opt}`;
    item.addEventListener('click', () => choose(i));
    item.addEventListener('keydown', (ev)=>{
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); choose(i); }
    });
    optionsEl.appendChild(item);
  });

  const percent = (cursor / seq.length) * 100;
  progressFill.style.width = `${percent}%`;
  nextBtn.disabled = true;
  answered = false;

  if (cursor > 0) {
    const prevBand = seq[cursor - 1].band;
    if (prevBand !== band) showBandBanner();
  }

  startTimer();
  persist();
}

function choose(i) {
  if (answered) return;
  play('click');
  stopTimer();
  const {q, band} = seq[cursor];
  const correct = answerKey[q];

  const children = Array.from(optionsEl.children);
  children.forEach((el, idx) => {
    el.classList.add('disabled');
    if (idx === correct) el.classList.add('correct');
    else if (idx === i) el.classList.add('wrong');
  });

  answered = true;
  nextBtn.disabled = false;

  bandScores[band].total += 1;

  const usedTime = QUESTION_TIME - timeLeft;

  if (i === correct) {
    score++; streak++;
    bandScores[band].correct += 1;
    play('correct');
    history.push({index:q+1, band: bandMeta[band].name, correct:true, time:usedTime, answered:true});
  } else {
    streak = 0;
    play('wrong');
    history.push({index:q+1, band: bandMeta[band].name, correct:false, time:usedTime, answered:true});
  }
  persist();
}

function next() {
  if (!answered) return;
  cursor++;
  if (cursor < seq.length) {
    renderQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quizPanel.style.display = 'none';
  scoreView.style.display = 'block';
  play('complete');

  scoreLine.textContent = `You scored ${score} out of ${seq.length} (${Math.round(score/seq.length*100)}%).`;

  breakdown.innerHTML = '';
  bandScores.forEach((b, i) => {
    const meta = bandMeta[i];
    const div = document.createElement('div');
    div.className = 'pill';
    const pct = b.total ? Math.round(b.correct / b.total * 100) : 0;
    div.innerHTML = `<strong>${meta.name}</strong><br>${b.correct}/${b.total} (${pct}%)`;
    breakdown.appendChild(div);
  });

  // Clear persisted state at the end
  localStorage.removeItem(QUIZ_KEY);
}

function exportCSV() {
  const headers = ['QuestionNumber','Band','Correct','Answered','TimeSeconds'];
  const rows = history.map(h => [h.index, h.band, h.correct ? 1 : 0, h.answered ? 1 : 0, h.time]);
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quiz_results.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Keyboard shortcuts
window.addEventListener('keydown', (ev) => {
  const key = ev.key.toLowerCase();
  const map = { a:0, b:1, c:2, d:3 };
  if (key in map) {
    const el = optionsEl.children[map[key]];
    if (el) el.click();
  } else if (key === 'n') {
    nextBtn.click();
  }
});

// Buttons
nextBtn.addEventListener('click', next);
restartBtn.addEventListener('click', () => {
  quizPanel.style.display = '';
  scoreView.style.display = 'none';
  buildSequence();
  renderQuestion();
});
shareBtn.addEventListener('click', async () => {
  const text = `I scored ${score}/${seq.length} on the Feline Veterinary Quiz!`;
  if (navigator.share) {
    try { await navigator.share({ text, title: 'Feline Veterinary Quiz' }); } catch {}
  } else {
    await navigator.clipboard.writeText(text);
    alert('Score copied to clipboard!');
  }
});
exportBtn.addEventListener('click', exportCSV);

// Sound & contrast persistence
function applyContrast(on) {
  document.body.style.filter = on ? 'contrast(1.12) saturate(1.08)' : '';
}
function loadPrefs() {
  const sOn = localStorage.getItem(SOUND_KEY);
  if (sOn !== null) soundToggle.checked = sOn === '1';
  const cOn = localStorage.getItem(CONTRAST_KEY);
  if (cOn !== null) { contrastToggle.checked = cOn === '1'; applyContrast(contrastToggle.checked); }
}
soundToggle.addEventListener('change', () => {
  localStorage.setItem(SOUND_KEY, soundToggle.checked ? '1':'0');
  play('click');
});
contrastToggle.addEventListener('change', () => {
  localStorage.setItem(CONTRAST_KEY, contrastToggle.checked ? '1':'0');
  applyContrast(contrastToggle.checked);
});

// Persist/resume
function persist() {
  const state = {
    seq, cursor, score, streak, answered,
    bandScores, timeLeft, history
  };
  localStorage.setItem(QUIZ_KEY, JSON.stringify(state));
}
function canResume() {
  return !!localStorage.getItem(QUIZ_KEY);
}
function resume() {
  const raw = localStorage.getItem(QUIZ_KEY);
  if (!raw) return false;
  try {
    const st = JSON.parse(raw);
    seq = st.seq; cursor = st.cursor; score = st.score; streak = st.streak;
    answered = st.answered; bandScores = st.bandScores; timeLeft = st.timeLeft ?? QUESTION_TIME;
    history = st.history ?? [];
    // re-render question and if already answered, show revealed state and enable next
    const {q} = seq[cursor];
    bandNameEl.textContent = bandMeta[seq[cursor].band].name;
    qCounterEl.textContent = String(cursor + 1);
    qTotalEl.textContent = String(seq.length);
    streakEl.textContent = String(streak);
    titleEl.textContent = `Question ${cursor + 1}`;
    questionEl.textContent = questions[q].replace(/^\d+\.\s*/, '');
    optionsEl.innerHTML = '';
    const letters = ['A','B','C','D'];
    options[q].forEach((opt, i) => {
      const item = document.createElement('button');
      item.className = 'option';
      item.innerHTML = `<span class="opt-key">${letters[i]}</span>${opt}`;
      item.addEventListener('click', () => choose(i));
      optionsEl.appendChild(item);
    });
    const percent = (cursor / seq.length) * 100;
    progressFill.style.width = `${percent}%`;

    if (answered) {
      // show revealed correct only (unknown which was chosen), allow next
      const correct = answerKey[q];
      Array.from(optionsEl.children).forEach((el, idx) => {
        el.classList.add('disabled');
        if (idx === correct) el.classList.add('correct');
      });
      nextBtn.disabled = false;
      stopTimer();
      timerValEl.textContent = 0;
    } else {
      // resume timer
      // cap timeLeft to QUESTION_TIME
      if (typeof timeLeft !== 'number' || timeLeft <= 0 || timeLeft > QUESTION_TIME) timeLeft = QUESTION_TIME;
      timerValEl.textContent = timeLeft;
      startTimer();
    }
    return true;
  } catch {
    return false;
  }
}

// New vs Resume controls
newBtn.addEventListener('click', () => {
  localStorage.removeItem(QUIZ_KEY);
  buildSequence();
  renderQuestion();
});
if (canResume()) {
  resumeBtn.style.display = '';
}
resumeBtn.addEventListener('click', () => {
  if (!resume()) {
    buildSequence();
    renderQuestion();
  }
  resumeBtn.style.display = 'none';
});

// ====== INIT ======
loadPrefs();

if (!resume()) {
  // First load
  buildSequence();
  renderQuestion();
}
