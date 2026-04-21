'use strict';

// ============================================================
// STIMULUS RENDERING
// ============================================================
const STIM_HTML = {
  heart:  '<span class="stim-char stim-heart">&#9829;</span>',
  flower: '<span class="stim-char stim-flower">&#10047;</span>',
};

// ============================================================
// BLOCK DEFINITIONS
// ============================================================
const BLOCKS = [
  {
    index: 0,
    id: 'hearts',
    name: 'Hearts',
    color: '#e74c3c',
    stimType: 'heart',
    testCount: 16,
    practiceCount: 2,
    label: 'Block 1 of 3',
    ruleHTML: `
      <div class="rule-icon stim-heart">&#9829;</div>
      <p>A <strong class="color-heart">heart</strong> will appear on the left or right side of the screen.</p>
      <div class="rule-examples">
        <div class="rule-ex">
          <span class="stim-sm stim-heart">&#9829;</span> on the <strong>LEFT</strong> &rarr; press <kbd>A</kbd>
        </div>
        <div class="rule-ex">
          <span class="stim-sm stim-heart">&#9829;</span> on the <strong>RIGHT</strong> &rarr; press <kbd>L</kbd>
        </div>
      </div>
      <p class="rule-summary">Press the key on the <strong>SAME&nbsp;side</strong> as the heart.</p>
    `,
    practiceRuleCompact: '&#9829; Heart &rarr; press the key on the <strong>SAME&nbsp;side</strong>',
    testRuleCompact:
      '&#9829; same side &nbsp;&bull;&nbsp; <kbd>A</kbd>&nbsp;=&nbsp;Left &nbsp;&nbsp; <kbd>L</kbd>&nbsp;=&nbsp;Right',
    quizCorrect: 'attention',
    quizCorrectMsg:
      'Correct! The Hearts block is the <strong>congruent</strong> condition: the correct key is always on the same side as the stimulus. This measures your baseline <strong>attention and processing speed</strong>, with no conflicting demands.',
    quizWrongMsg:
      'Not quite &mdash; the answer is <strong>Attention</strong>. Here there is no conflict: you simply match your key to the side the heart appears on. That makes it a measure of basic attention and stimulus-response speed, not inhibition or flexibility.',
    statsIntro:
      'In the Hearts block you matched your key to the side the heart appeared on.',
    statsExplanation:
      'This is the <strong>congruent condition</strong> of the Hearts &amp; Flowers task. There is no cognitive conflict &mdash; the correct response always aligns with the stimulus. Performance here reflects baseline <strong>attention and processing speed</strong>. In children, this improves steadily with age as basic neural processing becomes faster and more reliable.',
  },
  {
    index: 1,
    id: 'flowers',
    name: 'Flowers',
    color: '#9b59b6',
    stimType: 'flower',
    testCount: 16,
    practiceCount: 2,
    label: 'Block 2 of 3',
    ruleHTML: `
      <div class="rule-icon stim-flower">&#10047;</div>
      <p>A <strong class="color-flower">flower</strong> will appear on the left or right side of the screen.</p>
      <div class="rule-examples">
        <div class="rule-ex">
          <span class="stim-sm stim-flower">&#10047;</span> on the <strong>LEFT</strong> &rarr; press <kbd>L</kbd>
          <em>(opposite!)</em>
        </div>
        <div class="rule-ex">
          <span class="stim-sm stim-flower">&#10047;</span> on the <strong>RIGHT</strong> &rarr; press <kbd>A</kbd>
          <em>(opposite!)</em>
        </div>
      </div>
      <p class="rule-summary">Press the key on the <strong>OPPOSITE&nbsp;side</strong> from the flower.</p>
    `,
    practiceRuleCompact: '&#10047; Flower &rarr; press the key on the <strong>OPPOSITE&nbsp;side</strong>',
    testRuleCompact:
      '&#10047; opposite side &nbsp;&bull;&nbsp; <kbd>A</kbd>&nbsp;=&nbsp;Left &nbsp;&nbsp; <kbd>L</kbd>&nbsp;=&nbsp;Right',
    quizCorrect: 'inhibitory-control',
    quizCorrectMsg:
      'Correct! The Flowers block measures <strong>inhibitory control</strong> &mdash; you had to suppress the automatic impulse to press the same side as the flower and instead select the opposite key. This conflict between impulse and rule is the hallmark of inhibitory control.',
    quizWrongMsg:
      'Not quite &mdash; the answer is <strong>Inhibitory Control</strong>. You had to override the &ldquo;natural&rdquo; response (same side as the stimulus) and choose the opposite. Suppressing that automatic impulse is exactly what inhibitory control means. Children&rsquo;s inhibitory control develops rapidly between ages 3 and 8.',
    statsIntro:
      'In the Flowers block you had to press the key on the <em>opposite</em> side from the flower &mdash; fighting the impulse to press the same side.',
    statsExplanation:
      'This is the <strong>incongruent condition</strong>. The conflict between where the stimulus appeared and where the correct key is requires active <strong>inhibitory control</strong> &mdash; suppressing the automatic same-side response. The extra reaction time compared to the Hearts block is called the <strong>Simon Effect</strong>, and it quantifies the cognitive cost of inhibition. Children show much larger Simon Effects than adults because their prefrontal cortex is still maturing.',
  },
  {
    index: 2,
    id: 'mixed',
    name: 'Mixed',
    color: '#2980b9',
    stimType: 'both',
    testCount: 16,
    practiceCount: 2,
    label: 'Block 3 of 3',
    ruleHTML: `
      <p>Both <strong class="color-heart">hearts &#9829;</strong> and <strong class="color-flower">flowers &#10047;</strong> will appear &mdash; you never know which is next!</p>
      <div class="rule-examples">
        <div class="rule-ex">
          <span class="stim-sm stim-heart">&#9829;</span>
          <strong>Heart</strong>: press <strong>SAME&nbsp;side</strong>
          <em>(A&nbsp;=&nbsp;left, L&nbsp;=&nbsp;right)</em>
        </div>
        <div class="rule-ex">
          <span class="stim-sm stim-flower">&#10047;</span>
          <strong>Flower</strong>: press <strong>OPPOSITE&nbsp;side</strong>
          <em>(A&nbsp;=&nbsp;right, L&nbsp;=&nbsp;left)</em>
        </div>
      </div>
      <p class="rule-summary">Switch between rules depending on which shape appears.</p>
    `,
    practiceRuleCompact:
      '&#9829; Heart &rarr; same side &nbsp;&bull;&nbsp; &#10047; Flower &rarr; opposite side',
    testRuleCompact:
      '&#9829; same side &nbsp;&bull;&nbsp; &#10047; opposite side &nbsp;&bull;&nbsp; <kbd>A</kbd>&nbsp;=&nbsp;Left &nbsp;&nbsp; <kbd>L</kbd>&nbsp;=&nbsp;Right',
    quizCorrect: 'cognitive-flexibility',
    quizCorrectMsg:
      'Correct! The Mixed block measures <strong>cognitive flexibility</strong> &mdash; switching between two different response rules on every trial. The extra time on trials where the stimulus type changed (hearts &harr; flowers) is the &ldquo;switch cost,&rdquo; and it directly quantifies the effort of mental set-shifting.',
    quizWrongMsg:
      'Not quite &mdash; the answer is <strong>Cognitive Flexibility</strong>. When the stimulus type changed (e.g., heart &rarr; flower), you had to reconfigure your entire response rule. The extra time on those &ldquo;switch trials&rdquo; is the switch cost &mdash; the most direct measure of cognitive flexibility. This continues developing well into adolescence.',
    statsIntro:
      'In the Mixed block you applied both rules and switched between them unpredictably.',
    statsExplanation:
      'This block measures <strong>cognitive flexibility</strong> &mdash; the ability to update and switch between mental task sets on the fly. When the stimulus type changed, you had to reconfigure your response rule mid-stream. The <strong>switch cost</strong> (extra RT and lower accuracy on switch trials vs. non-switch trials) directly quantifies the cognitive effort of set-shifting. Cognitive flexibility is one of the last executive functions to mature, continuing to develop into early adulthood.',
  },
];

// ============================================================
// QUIZ OPTIONS (order shuffled at display time)
// ============================================================
const QUIZ_OPTIONS = [
  {
    id: 'attention',
    label: 'Attention',
    desc: 'Focusing on a stimulus and responding to it accurately',
  },
  {
    id: 'working-memory',
    label: 'Working Memory',
    desc: 'Holding and manipulating information in mind',
  },
  {
    id: 'inhibitory-control',
    label: 'Inhibitory Control',
    desc: 'Suppressing automatic or prepotent responses',
  },
  {
    id: 'cognitive-flexibility',
    label: 'Cognitive Flexibility',
    desc: 'Switching between different rules or mental sets',
  },
];

// ============================================================
// STATE
// ============================================================
let S = {
  blockIndex: 0,

  practiceTrials: [],
  practiceIdx: 0,
  practiceResults: [],

  testTrials: [],
  testIdx: 0,
  testResults: [],

  trialStart: 0,
  responseGiven: false,
  timeoutId: null,
  fixationId: null,
  feedbackId: null,

  allResults: [],
  keyHandler: null,
};

// ============================================================
// UTILITIES
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function avg(arr) {
  return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : null;
}

function pct(n, d) {
  return d ? Math.round((n / d) * 100) : 0;
}

function el(id) {
  return document.getElementById(id);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  el(id).classList.add('active');
}

function setKeyHandler(fn) {
  if (S.keyHandler) document.removeEventListener('keydown', S.keyHandler);
  S.keyHandler = fn || null;
  if (S.keyHandler) document.addEventListener('keydown', S.keyHandler);
}

function clearTrialTimers() {
  clearTimeout(S.timeoutId);
  clearTimeout(S.fixationId);
  clearTimeout(S.feedbackId);
}

// ============================================================
// TRIAL LOGIC
// ============================================================
function correctKey(stimType, stimSide) {
  const correctSide =
    stimType === 'heart' ? stimSide : (stimSide === 'left' ? 'right' : 'left');
  return correctSide === 'left' ? 'a' : 'l';
}

function enforceMaxRun(trials, keyFn, max) {
  for (let attempt = 0; attempt < 500; attempt++) {
    let ok = true;
    let run = 1;
    for (let i = 1; i < trials.length; i++) {
      run = keyFn(trials[i]) === keyFn(trials[i - 1]) ? run + 1 : 1;
      if (run > max) { ok = false; break; }
    }
    if (ok) return trials;
    trials = shuffle(trials);
  }
  return trials;
}

function makePracticeTrials(blockIdx) {
  const b = BLOCKS[blockIdx];
  if (b.stimType === 'heart') {
    return shuffle([
      { stimType: 'heart', stimSide: 'left' },
      { stimType: 'heart', stimSide: 'right' },
    ]);
  }
  if (b.stimType === 'flower') {
    return shuffle([
      { stimType: 'flower', stimSide: 'left' },
      { stimType: 'flower', stimSide: 'right' },
    ]);
  }
  return shuffle([
    { stimType: 'heart',  stimSide: Math.random() < 0.5 ? 'left' : 'right' },
    { stimType: 'flower', stimSide: Math.random() < 0.5 ? 'left' : 'right' },
  ]);
}

function makeTestTrials(blockIdx) {
  const b = BLOCKS[blockIdx];
  let trials = [];

  if (b.stimType === 'heart') {
    for (let i = 0; i < 8; i++) trials.push({ stimType: 'heart', stimSide: 'left' });
    for (let i = 0; i < 8; i++) trials.push({ stimType: 'heart', stimSide: 'right' });
    trials = enforceMaxRun(shuffle(trials), t => t.stimSide, 3);
  } else if (b.stimType === 'flower') {
    for (let i = 0; i < 8; i++) trials.push({ stimType: 'flower', stimSide: 'left' });
    for (let i = 0; i < 8; i++) trials.push({ stimType: 'flower', stimSide: 'right' });
    trials = enforceMaxRun(shuffle(trials), t => t.stimSide, 3);
  } else {
    for (let i = 0; i < 4; i++) trials.push({ stimType: 'heart',  stimSide: 'left'  });
    for (let i = 0; i < 4; i++) trials.push({ stimType: 'heart',  stimSide: 'right' });
    for (let i = 0; i < 4; i++) trials.push({ stimType: 'flower', stimSide: 'left'  });
    for (let i = 0; i < 4; i++) trials.push({ stimType: 'flower', stimSide: 'right' });
    trials = enforceMaxRun(shuffle(trials), t => t.stimType, 3);
    for (let i = 0; i < trials.length; i++) {
      trials[i].isSwitch = i > 0 && trials[i].stimType !== trials[i - 1].stimType;
    }
  }
  return trials;
}

// ============================================================
// BLOCK PROGRESS BAR
// ============================================================
function updateBlockProgress(currentIdx) {
  for (let i = 0; i < 3; i++) {
    const step = el(`bprog-${i}`);
    step.className = 'block-step';
    if (i < currentIdx)      step.classList.add('done');
    else if (i === currentIdx) step.classList.add('active');
  }
}

// ============================================================
// WELCOME
// ============================================================
function showWelcome() {
  setKeyHandler(null);
  showScreen('screen-welcome');
  el('btn-start').onclick = () => showBlockIntro(0);
}

// ============================================================
// BLOCK INTRO
// ============================================================
function showBlockIntro(blockIdx) {
  setKeyHandler(null);
  clearTrialTimers();
  S.blockIndex = blockIdx;
  const b = BLOCKS[blockIdx];

  updateBlockProgress(blockIdx);
  el('block-intro-label').textContent = b.label;
  el('block-intro-label').style.background = b.color;
  el('block-intro-title').textContent = b.name;
  el('block-intro-title').style.color = b.color;
  el('block-rule-card').innerHTML = b.ruleHTML;
  el('block-rule-card').style.borderLeftColor = b.color;

  showScreen('screen-block-intro');
  el('btn-practice').onclick = () => beginPractice();
}

// ============================================================
// PRACTICE
// ============================================================
function beginPractice() {
  S.practiceTrials = makePracticeTrials(S.blockIndex);
  S.practiceIdx    = 0;
  S.practiceResults = [];
  runPracticeTrial();
}

function runPracticeTrial() {
  clearTrialTimers();
  const b     = BLOCKS[S.blockIndex];
  const trial = S.practiceTrials[S.practiceIdx];

  el('trial-progress').textContent     = `Practice ${S.practiceIdx + 1} / ${b.practiceCount}`;
  el('trial-phase-label').textContent  = 'PRACTICE';
  el('trial-phase-label').className    = 'phase-label practice';
  el('trial-rule-reminder').innerHTML  = b.practiceRuleCompact;

  showScreen('screen-trial');
  beginFixation(trial, true);
}

function beginFixation(trial, isPractice) {
  el('fixation').style.display             = 'flex';
  el('stimuli').style.display              = 'none';
  el('trial-feedback-display').style.display = 'none';
  setKeyHandler(null);

  S.fixationId = setTimeout(() => presentStimulus(trial, isPractice), 500);
}

function presentStimulus(trial, isPractice) {
  el('fixation').style.display               = 'none';
  el('trial-feedback-display').style.display = 'none';

  el('stimulus-left').innerHTML  = trial.stimSide === 'left'  ? STIM_HTML[trial.stimType] : '';
  el('stimulus-right').innerHTML = trial.stimSide === 'right' ? STIM_HTML[trial.stimType] : '';
  el('stimuli').style.display    = 'flex';

  S.trialStart     = performance.now();
  S.responseGiven  = false;

  S.timeoutId = setTimeout(() => processResponse(null, trial, isPractice), 2000);

  setKeyHandler((e) => {
    const k = e.key.toLowerCase();
    if (k !== 'a' && k !== 'l') return;
    e.preventDefault();
    if (S.responseGiven) return;
    clearTimeout(S.timeoutId);
    processResponse(k, trial, isPractice);
  });
}

function processResponse(key, trial, isPractice) {
  if (S.responseGiven) return;
  S.responseGiven = true;
  setKeyHandler(null);

  const rt      = key !== null ? Math.round(performance.now() - S.trialStart) : 2000;
  const ck      = correctKey(trial.stimType, trial.stimSide);
  const correct = key === ck;

  if (key === 'a') flashKey('key-a');
  if (key === 'l') flashKey('key-l');

  el('stimuli').style.display = 'none';

  const result = {
    correct,
    rt,
    timeout:  key === null,
    stimType: trial.stimType,
    stimSide: trial.stimSide,
    isSwitch: trial.isSwitch || false,
  };

  if (isPractice) {
    S.practiceResults.push(result);
    showTrialFeedback(correct, ck, () => advancePractice());
  } else {
    S.testResults.push(result);
    el('trial-feedback-display').style.display = 'none';
    S.feedbackId = setTimeout(() => advanceTest(), 400);
  }
}

function flashKey(keyId) {
  const elem = el(keyId);
  elem.classList.add('pressed');
  setTimeout(() => elem.classList.remove('pressed'), 200);
}

function showTrialFeedback(correct, ck, callback) {
  const correctLabel = ck === 'a' ? 'A (Left)' : 'L (Right)';
  const fb = el('trial-feedback-display');
  fb.innerHTML = correct
    ? `<div class="feedback-correct"><span class="feedback-icon">&#10003;</span><span>Correct!</span></div>`
    : `<div class="feedback-wrong"><span class="feedback-icon">&#10007;</span><span>The correct key was <strong>${correctLabel}</strong></span></div>`;
  fb.style.display = 'flex';
  S.feedbackId = setTimeout(callback, 950);
}

function advancePractice() {
  S.practiceIdx++;
  if (S.practiceIdx < S.practiceTrials.length) {
    runPracticeTrial();
  } else {
    endPractice();
  }
}

function endPractice() {
  setKeyHandler(null);
  const allCorrect = S.practiceResults.every(r => r.correct);
  if (allCorrect) {
    showScreen('screen-practice-passed');
    el('btn-start-test').onclick = () => beginTest();
  } else {
    const b = BLOCKS[S.blockIndex];
    el('practice-rule-reminder').innerHTML         = b.ruleHTML;
    el('practice-rule-reminder').style.borderLeftColor = b.color;
    showScreen('screen-practice-failed');
    el('btn-retry-practice').onclick = () => beginPractice();
  }
}

// ============================================================
// TEST
// ============================================================
function beginTest() {
  S.testTrials  = makeTestTrials(S.blockIndex);
  S.testIdx     = 0;
  S.testResults = [];
  runTestTrial();
}

function runTestTrial() {
  clearTrialTimers();
  const b     = BLOCKS[S.blockIndex];
  const trial = S.testTrials[S.testIdx];

  el('trial-progress').textContent    = `Trial ${S.testIdx + 1} / ${b.testCount}`;
  el('trial-phase-label').textContent = 'TEST';
  el('trial-phase-label').className   = 'phase-label test';
  el('trial-rule-reminder').innerHTML = b.testRuleCompact;

  showScreen('screen-trial');
  beginFixation(trial, false);
}

function advanceTest() {
  S.testIdx++;
  if (S.testIdx < S.testTrials.length) {
    runTestTrial();
  } else {
    finishTest();
  }
}

function finishTest() {
  setKeyHandler(null);
  clearTrialTimers();
  const results = computeResults(S.blockIndex, S.testResults);
  S.allResults.push(results);
  showBlockResultsScreen(S.blockIndex, results);
}

// ============================================================
// COMPUTE RESULTS
// ============================================================
function computeResults(blockIdx, testResults) {
  const correct = testResults.filter(r => r.correct);
  const accuracy = pct(correct.length, testResults.length);
  const meanRT   = correct.length ? Math.round(avg(correct.map(r => r.rt))) : null;

  const out = {
    blockIdx, accuracy, meanRT,
    n: testResults.length,
    nCorrect: correct.length,
  };

  if (blockIdx === 2) {
    const switchAll    = testResults.filter(r =>  r.isSwitch);
    const nonSwitchAll = testResults.filter(r => !r.isSwitch);
    const switchCorr    = switchAll.filter(r => r.correct);
    const nonSwitchCorr = nonSwitchAll.filter(r => r.correct);

    const switchRT    = switchCorr.length    ? Math.round(avg(switchCorr.map(r => r.rt)))    : null;
    const nonSwitchRT = nonSwitchCorr.length ? Math.round(avg(nonSwitchCorr.map(r => r.rt))) : null;
    const switchCost  = (switchRT !== null && nonSwitchRT !== null) ? switchRT - nonSwitchRT : null;

    Object.assign(out, {
      switchRT, nonSwitchRT, switchCost,
      switchAcc:    pct(switchCorr.length,    switchAll.length),
      nonSwitchAcc: pct(nonSwitchCorr.length, nonSwitchAll.length),
      nSwitch:    switchAll.length,
      nNonSwitch: nonSwitchAll.length,
    });
  }

  return out;
}

// ============================================================
// BLOCK RESULTS + QUIZ
// ============================================================
function showBlockResultsScreen(blockIdx, results) {
  const b = BLOCKS[blockIdx];

  el('results-block-label').textContent       = b.label;
  el('results-block-label').style.background  = b.color;
  el('results-block-title').textContent       = `${b.name} — Your Results`;
  el('results-block-title').style.color       = b.color;

  const rtDisplay = results.meanRT !== null ? `${results.meanRT} ms` : 'N/A';

  let statsHTML = `
    <p class="results-intro-text">${b.statsIntro}</p>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-value" style="color:${b.color}">${results.accuracy}%</div>
        <div class="stat-label">Accuracy</div>
        <div class="stat-sub">${results.nCorrect} / ${results.n} correct</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:${b.color}">${rtDisplay}</div>
        <div class="stat-label">Mean Reaction Time</div>
        <div class="stat-sub">correct trials only</div>
      </div>
    </div>`;

  // Simon Effect (shown on flowers block if hearts block already done)
  if (blockIdx === 1 && S.allResults.length >= 1 && S.allResults[0].meanRT && results.meanRT) {
    const diff = results.meanRT - S.allResults[0].meanRT;
    const sign = diff >= 0 ? '+' : '';
    statsHTML += `
      <div class="effect-highlight">
        <span class="effect-label">Simon Effect:</span>
        <span class="effect-num">${sign}${diff}&nbsp;ms</span>
        <span class="effect-desc">
          (Flowers RT &minus; Hearts RT &mdash; cost of inhibitory control)
        </span>
      </div>`;
  }

  // Switch cost (mixed block)
  if (blockIdx === 2) {
    const { switchRT, nonSwitchRT, switchCost, switchAcc, nonSwitchAcc, nSwitch, nNonSwitch } = results;
    const sc   = switchCost !== null ? (switchCost >= 0 ? '+' : '') + switchCost + '&nbsp;ms' : 'N/A';
    const sRT  = switchRT    !== null ? switchRT    + '&nbsp;ms' : 'N/A';
    const nsRT = nonSwitchRT !== null ? nonSwitchRT + '&nbsp;ms' : 'N/A';

    statsHTML += `
      <div class="switch-cost-section">
        <h3>Switch Cost</h3>
        <p class="switch-cost-explainer">
          On <em>switch trials</em> the stimulus type changed from the previous trial
          (&#9829;&harr;&#10047;), requiring you to mentally reconfigure your response rule.
        </p>
        <div class="switch-cost-grid">
          <div class="stat-card">
            <div class="stat-value">${sRT}</div>
            <div class="stat-label">Switch trials (RT)</div>
            <div class="stat-sub">${switchAcc}% accuracy &middot; ${nSwitch} trials</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${nsRT}</div>
            <div class="stat-label">Non-switch trials (RT)</div>
            <div class="stat-sub">${nonSwitchAcc}% accuracy &middot; ${nNonSwitch} trials</div>
          </div>
          <div class="stat-card cost-card">
            <div class="stat-value">${sc}</div>
            <div class="stat-label">Switch Cost</div>
            <div class="stat-sub">switch RT &minus; non-switch RT</div>
          </div>
        </div>
      </div>`;
  }

  el('results-stats').innerHTML = statsHTML;
  el('results-explanation').style.display = 'none';

  buildQuiz(blockIdx, b);
  showScreen('screen-block-results');
  // Scroll to top on this screen
  el('screen-block-results').scrollTop = 0;
}

function buildQuiz(blockIdx, b) {
  const options = shuffle([...QUIZ_OPTIONS]);
  const grid = el('results-quiz-options');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  options.forEach((opt, i) => {
    const letter = letters[i];
    const btn = document.createElement('button');
    btn.className    = 'quiz-option';
    btn.dataset.id   = opt.id;
    btn.dataset.letter = letter;
    btn.innerHTML = `
      <span class="quiz-letter">${letter}</span>
      <div class="quiz-option-text">
        <span class="quiz-option-label">${opt.label}</span>
        <span class="quiz-option-desc">${opt.desc}</span>
      </div>`;
    btn.onclick = () => handleQuiz(opt.id, b);
    grid.appendChild(btn);
  });

  setKeyHandler((e) => {
    const k = e.key.toUpperCase();
    if (!letters.includes(k)) return;
    const btn = grid.querySelector(`[data-letter="${k}"]`);
    if (btn && !btn.disabled) btn.click();
  });
}

function handleQuiz(chosenId, b) {
  setKeyHandler(null);
  const isCorrect = chosenId === b.quizCorrect;

  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.id === b.quizCorrect)              btn.classList.add('quiz-correct');
    if (btn.dataset.id === chosenId && !isCorrect)     btn.classList.add('quiz-wrong');
  });

  const icon = isCorrect ? '&#127881;' : '&#128161;';
  el('results-quiz-feedback').innerHTML = `
    <div class="quiz-fb-header ${isCorrect ? 'fb-correct' : 'fb-wrong'}">
      <span>${icon}</span>
      <span>${isCorrect ? 'Correct!' : 'Not quite…'}</span>
    </div>
    <p>${isCorrect ? b.quizCorrectMsg : b.quizWrongMsg}</p>`;

  el('results-deep-explanation').innerHTML = `<p>${b.statsExplanation}</p>`;

  const blockIdx = b.index;
  const nextIdx  = blockIdx + 1;
  const nextBtn  = el('btn-next-block');
  if (nextIdx < BLOCKS.length) {
    nextBtn.textContent = `Continue to Block ${nextIdx + 1}: ${BLOCKS[nextIdx].name} →`;
    nextBtn.onclick = () => showBlockIntro(nextIdx);
  } else {
    nextBtn.textContent = 'See Final Summary →';
    nextBtn.onclick = () => showFinalSummary();
  }

  el('results-explanation').style.display = 'block';
  setTimeout(
    () => el('results-explanation').scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
    80
  );
}

// ============================================================
// FINAL SUMMARY
// ============================================================
function showFinalSummary() {
  setKeyHandler(null);

  const hr = S.allResults[0]; // hearts
  const fr = S.allResults[1]; // flowers
  const mr = S.allResults[2]; // mixed

  const simonEffect = (hr && hr.meanRT && fr && fr.meanRT) ? fr.meanRT - hr.meanRT : null;
  const switchCost  = mr ? mr.switchCost : null;

  const fmtRT  = v => v !== null && v !== undefined ? `${v} ms` : '&mdash;';
  const fmtPct = v => v !== null && v !== undefined ? `${v}%`   : '&mdash;';
  const fmtSgn = v => v !== null ? (v >= 0 ? `+${v} ms` : `${v} ms`) : '&mdash;';

  el('final-comparison-table').innerHTML = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Block</th>
          <th>Accuracy</th>
          <th>Mean RT</th>
          <th>EF Component</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row-hearts">
          <td><span class="stim-sm stim-heart">&#9829;</span> Hearts</td>
          <td>${hr ? fmtPct(hr.accuracy) : '&mdash;'}</td>
          <td>${hr ? fmtRT(hr.meanRT)    : '&mdash;'}</td>
          <td>Attention</td>
        </tr>
        <tr class="row-flowers">
          <td><span class="stim-sm stim-flower">&#10047;</span> Flowers</td>
          <td>${fr ? fmtPct(fr.accuracy) : '&mdash;'}</td>
          <td>${fr ? fmtRT(fr.meanRT)    : '&mdash;'}</td>
          <td>Inhibitory Control</td>
        </tr>
        <tr class="row-mixed">
          <td>&#128256; Mixed</td>
          <td>${mr ? fmtPct(mr.accuracy) : '&mdash;'}</td>
          <td>${mr ? fmtRT(mr.meanRT)    : '&mdash;'}</td>
          <td>Cognitive Flexibility</td>
        </tr>
      </tbody>
    </table>`;

  el('final-effects').innerHTML = `
    <div class="effects-grid">
      <div class="effect-card">
        <div class="effect-title">Simon Effect</div>
        <div class="effect-value">${fmtSgn(simonEffect)}</div>
        <p>Flowers RT minus Hearts RT. Measures the cognitive cost of
        <strong>inhibitory control</strong> &mdash; how much extra time it took to
        suppress the automatic same-side response.</p>
      </div>
      <div class="effect-card">
        <div class="effect-title">Switch Cost</div>
        <div class="effect-value">${fmtSgn(switchCost)}</div>
        <p>Switch-trial RT minus non-switch RT (Mixed block). Measures the cost of
        <strong>cognitive flexibility</strong> &mdash; the mental effort needed to
        shift between response rules mid-task.</p>
      </div>
    </div>`;

  el('final-explanation').innerHTML = `
    <div class="final-explanation-box">
      <h3>What does this tell us about Executive Function?</h3>
      <p><strong>Executive functions (EF)</strong> are a family of top-down mental processes
      that let us plan, sustain attention, hold instructions in mind, and switch flexibly between tasks.
      They are primarily supported by the <strong>prefrontal cortex</strong> &mdash; one of the last
      brain regions to fully mature, a process that continues well into the mid-20s.</p>
      <p>The Hearts &amp; Flowers task isolates three core EF components:</p>
      <ul>
        <li><strong>Attention</strong> (Hearts): Baseline stimulus-response processing &mdash;
            how fast and reliably you respond when there is no cognitive conflict.</li>
        <li><strong>Inhibitory Control</strong> (Flowers): Suppressing the dominant, automatic
            response &mdash; reflected here by a Simon Effect of <strong>${fmtSgn(simonEffect)}</strong>.</li>
        <li><strong>Cognitive Flexibility</strong> (Mixed): Switching between rules on the fly
            &mdash; reflected by a switch cost of <strong>${fmtSgn(switchCost)}</strong>.</li>
      </ul>
      <p>In children, all three components improve with age but at different rates. Inhibitory
      control develops rapidly in the preschool years (ages 3&ndash;5), while cognitive flexibility
      continues to mature through adolescence. Young children show much larger Simon Effects and
      switch costs than adults &mdash; a direct window into the ongoing development of their
      prefrontal cortex.</p>
      <p class="attribution">Based on: Davidson, M.&thinsp;C., Amso, D., Anderson, L.&thinsp;C.,
      &amp; Diamond, A. (2006). Development of cognitive control and executive functions from 4
      to 13 years. <em>Neuropsychologia, 44</em>(11), 2037&ndash;2078.</p>
    </div>`;

  showScreen('screen-final-summary');
  el('screen-final-summary').scrollTop = 0;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  showWelcome();
});
