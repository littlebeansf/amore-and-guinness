/* ===== AMORE & GUINNESS — GAME LOGIC ===== */

// ============================================================
// CARD DATABASE — 120+ prompts, 6 categories, early + spicy
// Players born ~1997-1998 | References 2000s-2020s culture
// ============================================================

const CARDS = {
  warmup: [
    // CHALLENGES — early rounds
    {
      type: 'challenge',
      text: 'Do your best Italian hand gesture to explain "I don\'t care". If the other person laughs, they drink.',
      target: 'italian',
    },
    {
      type: 'challenge',
      text: 'Say "I\'ll be grand" in your best Irish accent. If {irish} doesn\'t cringe, you\'re doing it wrong — they drink.',
      target: 'irish',
    },
    {
      type: 'challenge',
      text: 'Order a drink in Italian. If you butcher the pronunciation so badly {italian} winces — drink 2.',
      target: 'irish',
    },
    {
      type: 'challenge',
      text: 'Both players: name 3 pasta shapes in 10 seconds without repeating. Whoever fails first drinks.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Describe Riverdance using only your hands. If {italian} recognises it in under 30 seconds, {irish} drinks.',
      target: 'irish',
    },
    {
      type: 'challenge',
      text: 'Do your best "mamma mia" impression. {irish} rates it 1-10. Under 6? Drink.',
      target: 'italian',
    },
    {
      type: 'challenge',
      text: 'Sing the first 4 seconds of the 2006 Italian World Cup celebration. No Google. If {irish} has no idea what\'s happening — that\'s the point.',
      target: 'italian',
    },
    {
      type: 'challenge',
      text: 'Name a Robbie Williams song in 5 seconds or drink. Everyone had "Angels" on their parents\' CD.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Do a Ronaldo "Siuuu!" celebration. {irish} judges enthusiasm out of 10. Under 7? Drink.',
      target: 'italian',
    },
    {
      type: 'challenge',
      text: 'Sip your drink and hold eye contact for 5 full seconds with the other person. First to blink drinks.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Recite the Friends theme song opening line. Miss a word, drink.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Do a 5-second TikTok dance. The other person rates it. Under 5? Drink.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'In 10 seconds, name 5 European capitals or drink a sip for each one missed.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Switch phones for 30 seconds. Each person must react-emoji to the last 3 Spotify songs of the other. No peeking at chats.',
      target: 'both',
    },

    // TRUTHS — early rounds
    {
      type: 'truth',
      text: 'What\'s the most embarrassing thing you\'ve Googled in the last month? Answer honestly or drink 3.',
      target: 'both',
    },
    {
      type: 'truth',
      text: '{italian}: What Italian stereotype about yourself is 100% true? Be honest or drink.',
      target: 'italian',
    },
    {
      type: 'truth',
      text: '{irish}: What Irish stereotype about yourself is embarrassingly accurate? No lying or drink.',
      target: 'irish',
    },
    {
      type: 'truth',
      text: 'Who was your celebrity crush at age 12? Go.',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s the worst movie you secretly loved in the 2000s? Bonus drink if it had a High School Musical connection.',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s your go-to lie when you\'re pretending to be busy? Own it or drink.',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'Have you ever Shazam\'d a song and been mortified by what it was? Confess.',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s the most ridiculous reason you\'ve ghosted someone? Or has someone ghosted you? Tell.',
      target: 'both',
    },
    {
      type: 'truth',
      text: '{irish}: Real talk — is a Tayto crisp sandwich actually good? {italian} must listen with an open mind.',
      target: 'irish',
    },
    {
      type: 'truth',
      text: '{italian}: Have you ever pretended to be from somewhere else in Europe to avoid explaining Italy? No shame.',
      target: 'italian',
    },
    {
      type: 'truth',
      text: 'What\'s a phase you went through (emo, scene, skater, "I only wear black") that you\'re proud you outgrew?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s the most recent Netflix show you watched in one sitting and told no one about?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'Be honest: do you actually like Guinness or do you just drink it because it\'s the vibe?',
      target: 'both',
    },

    // VOTES — early rounds
    {
      type: 'vote',
      text: 'Who would survive longer on a desert island?',
      prompt: 'Who would survive longer on a desert island?',
      loser_drinks: 1,
    },
    {
      type: 'vote',
      text: 'Who was the bigger drama queen as a teenager?',
      prompt: 'Who was the bigger drama queen as a teenager?',
      loser_drinks: 2,
    },
    {
      type: 'vote',
      text: 'Who spends more time getting ready?',
      prompt: 'Who spends more time getting ready?',
      loser_drinks: 1,
    },
    {
      type: 'vote',
      text: 'Who would win MasterChef — with home-country advantage allowed?',
      prompt: 'Who would win MasterChef — home country advantage allowed?',
      loser_drinks: 1,
    },
    {
      type: 'vote',
      text: 'Who would be more likely to accidentally start a international incident abroad?',
      prompt: 'Who would be more likely to accidentally start an international incident?',
      loser_drinks: 1,
    },
    {
      type: 'vote',
      text: 'Who talks to strangers more easily?',
      prompt: 'Who talks to strangers more easily?',
      loser_drinks: 1,
    },

    // COUPLES — early rounds
    {
      type: 'couple',
      text: 'Both teach each other one phrase in your language that you\'d only use at home. Pronunciation marks given.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Recreate your best version of the "Dirty Dancing" lift — or just attempt it and drink when you fail.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Take turns describing your perfect Sunday morning in your home country. Whoever paints a more vivid picture wins a sip-skip.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Both close your eyes. First one to say a 2000s pop song wins. Loser drinks.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Spend 30 seconds complimenting each other — but only about non-physical things. If either one laughs nervously, drink.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Quick debate: Pizza vs. Fish & Chips. You have 90 seconds. The more convincing argument wins bragging rights.',
      target: 'both',
    },

    // NOSTALGIA — early rounds
    {
      type: 'nostalgia',
      text: 'Name the first console you played on. If it was a PlayStation 2, you both drink out of solidarity.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Do you remember MSN Messenger? Your display name in 2009 was probably something tragic. Confess it.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Who\'s your favourite character from the early 2000s cartoon era — SpongeBob, Kim Possible, Codename: Kids Next Door?',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Without thinking: Naruto or Dragon Ball Z? Fight.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'What was your childhood comfort food that isn\'t in the other person\'s vocabulary? Explain it. They must drink if they\'ve never heard of it.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Hannah Montana, High School Musical, or Lizzie McGuire? You watched at least one. Confess which one defined your childhood.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Recreate your school photo pose from age 11. Both of you. Simultaneously.',
      target: 'both',
    },
  ],

  spicy: [
    // CHALLENGES — spicy zone
    {
      type: 'challenge',
      text: 'Text your mum right now with just "Ti voglio bene" (Italian) or "Thinking of ya, Ma" (Irish). Screenshot counts as proof.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Compliment the other person in the most dramatic Italian telenovela style possible. Use hand gestures. {irish} must fan themselves if it\'s convincing.',
      target: 'italian',
    },
    {
      type: 'challenge',
      text: 'Recreate your most attractive selfie face — right now, zero prep. The other person says "publish" or "delete". Delete? Drink.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Call or voice-note a friend and say "Emergency, need your opinion on something" then hang up. No explanation. Who\'s brave enough?',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Talk for 60 seconds straight about {irish} without pausing, using only compliments. Hesitate? Drink.',
      target: 'italian',
    },
    {
      type: 'challenge',
      text: 'Talk for 60 seconds straight about {italian} without pausing, using only compliments. Hesitate? Drink.',
      target: 'irish',
    },
    {
      type: 'challenge',
      text: 'Freestyle rap about the date so far — minimum 4 lines. One person starts, the other continues. No rhyming = drink.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Show each other the 7th photo in your camera roll. No deleting beforehand. Both drink if it\'s awkward.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Stare at each other in complete silence for 30 seconds. First to smile drinks. First to say something drinks double.',
      target: 'both',
    },
    {
      type: 'challenge',
      text: 'Take a photo together right now. Post it to your story with the caption "bella serata" or "great craic". Whoever refuses drinks 3.',
      target: 'both',
    },

    // TRUTHS — spicy zone
    {
      type: 'truth',
      text: 'What\'s the first thing you noticed about the other person tonight? Real answer or drink 3.',
      target: 'both',
    },
    {
      type: 'truth',
      text: '{italian}: What\'s something about Irish culture you actually find really attractive? No diplomatic answers.',
      target: 'italian',
    },
    {
      type: 'truth',
      text: '{irish}: What\'s something about Italian culture that makes you want to move there? Be specific.',
      target: 'irish',
    },
    {
      type: 'truth',
      text: 'What\'s a red flag you\'ve been ignoring about yourself recently? 10 seconds to think, then answer — or drink 3.',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'How many people have you dated from a different country? What was the culture clash that caught you off guard?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'Be honest — what\'s your most irrational dealbreaker in a relationship?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s the most unexpected thing you find attractive in the other person right now?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s a personal tradition from your culture that you hope a partner would adopt?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'If you could relive one night from your early 20s, what would it be and who would be there?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s the boldest thing you\'ve done to impress someone? Did it work?',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'Describe the other person in 3 words you\'d never say out loud sober. You\'re saying them now.',
      target: 'both',
    },
    {
      type: 'truth',
      text: 'What\'s something you wish more people noticed about you?',
      target: 'both',
    },

    // VOTES — spicy zone
    {
      type: 'vote',
      text: 'Who would be the more chaotic travel companion?',
      prompt: 'Who would be the more chaotic travel companion?',
      loser_drinks: 2,
    },
    {
      type: 'vote',
      text: 'Who\'s the bigger overthinker in relationships?',
      prompt: 'Who\'s the bigger overthinker in relationships?',
      loser_drinks: 2,
    },
    {
      type: 'vote',
      text: 'Who would be more likely to send a "miss you" text first?',
      prompt: 'Who would be more likely to send a "miss you" text first?',
      loser_drinks: 2,
    },
    {
      type: 'vote',
      text: 'Who\'s more charming in a first impression?',
      prompt: 'Who\'s more charming in a first impression?',
      loser_drinks: 2,
    },
    {
      type: 'vote',
      text: 'Who would be more dangerous as a villain?',
      prompt: 'Who would be more dangerous as a villain?',
      loser_drinks: 1,
    },

    // COUPLES — spicy zone
    {
      type: 'couple',
      text: 'Pick a song right now. Both of you listen to 30 seconds together, no talking. Then: what did you each feel?',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Write each other a 6-word love letter. You have 30 seconds. Read them simultaneously.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Tell each other the moment tonight where you thought "okay, they\'re interesting." Whoever is most specific wins a sip-skip.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Plan a hypothetical 72-hour trip together — one city, your choice. Each person adds one activity per turn. 4 rounds each. Go.',
      target: 'both',
    },
    {
      type: 'couple',
      text: 'Both close your eyes. Picture the other person 10 years from now. Describe exactly what you see. Don\'t edit yourself.',
      target: 'both',
    },

    // NOSTALGIA — spicy zone
    {
      type: 'nostalgia',
      text: '{italian}: What Italian 2000s pop song do you still have on your playlist but deny? Confess or drink 2.',
      target: 'italian',
    },
    {
      type: 'nostalgia',
      text: '{irish}: Name a 2000s Irish mammy phrase that you\'ve accidentally used as an adult. Bonus drink if you can\'t stop using it.',
      target: 'irish',
    },
    {
      type: 'nostalgia',
      text: 'What TV show from your childhood would horrify your adult self if you rewatched it?',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Rate the impact of these on your generation: Bebo, Facebook, Vine, TikTok. 10 seconds each. Go.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Quick fire: What was your most-played song on iTunes circa 2009? Both answer simultaneously. Shame-free zone.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Did you watch the 2006 World Cup final? {italian} — you get to gloat. {irish} — you have to hear it.',
      target: 'both',
    },
    {
      type: 'nostalgia',
      text: 'Name your favourite video game growing up. If it was the same as the other person\'s — both skip a sip.',
      target: 'both',
    },
  ],
};

// Category display config
const CAT_CONFIG = {
  challenge: {
    label: '⚔️ Challenge',
    catBg: 'rgba(179,58,58,0.2)',
    catColor: '#e05555',
    catBorder: 'rgba(179,58,58,0.35)',
    glow: 'linear-gradient(135deg, #b33a3a, #e05555)',
    glowColor: 'rgba(179,58,58,0.15)',
  },
  truth: {
    label: '🔮 Truth',
    catBg: 'rgba(124,92,191,0.2)',
    catColor: '#a888ff',
    catBorder: 'rgba(124,92,191,0.35)',
    glow: 'linear-gradient(135deg, #7c5cbf, #a888ff)',
    glowColor: 'rgba(124,92,191,0.15)',
  },
  vote: {
    label: '⚖️ Vote',
    catBg: 'rgba(201,150,58,0.2)',
    catColor: '#f0c060',
    catBorder: 'rgba(201,150,58,0.35)',
    glow: 'linear-gradient(135deg, #c9963a, #f0c060)',
    glowColor: 'rgba(201,150,58,0.15)',
  },
  couple: {
    label: '💞 Couple',
    catBg: 'rgba(45,122,79,0.2)',
    catColor: '#45b875',
    catBorder: 'rgba(45,122,79,0.35)',
    glow: 'linear-gradient(135deg, #2d7a4f, #45b875)',
    glowColor: 'rgba(45,122,79,0.15)',
  },
  spicy: {
    label: '🌶️ Spicy',
    catBg: 'rgba(212,66,110,0.2)',
    catColor: '#ff7bac',
    catBorder: 'rgba(212,66,110,0.35)',
    glow: 'linear-gradient(135deg, #d4426e, #ff7bac)',
    glowColor: 'rgba(212,66,110,0.15)',
  },
  nostalgia: {
    label: '🕹️ Nostalgia',
    catBg: 'rgba(74,134,200,0.2)',
    catColor: '#88bbff',
    catBorder: 'rgba(74,134,200,0.35)',
    glow: 'linear-gradient(135deg, #4a86c8, #88bbff)',
    glowColor: 'rgba(74,134,200,0.15)',
  },
};

// ============================================================
// STATE
// ============================================================
let state = {
  italianName: 'Romeo',
  irishName: 'Aoife',
  italianSips: 0,
  irishSips: 0,
  round: 1,
  totalRounds: 10,
  spicyStart: 6,
  isSpicy: false,
  cardRevealed: false,
  currentCard: null,
  usedWarmup: [],
  usedSpicy: [],
  voteState: { italianVoted: false, irishVoted: false, italianChoice: null, irishChoice: null },
  waitingForNext: false,
};

// ============================================================
// UTILITY
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickCard(pool, used) {
  const available = pool.filter((_, i) => !used.includes(i));
  if (available.length === 0) {
    // Reset if exhausted
    used.length = 0;
    return { card: pool[Math.floor(Math.random() * pool.length)], idx: 0 };
  }
  const idx = pool.indexOf(available[Math.floor(Math.random() * available.length)]);
  return { card: pool[idx], idx };
}

function personalize(text) {
  return text
    .replace(/{italian}/g, state.italianName)
    .replace(/{irish}/g, state.irishName);
}

function updateSips(who, amount) {
  if (who === 'italian' || who === 'both') {
    state.italianSips += amount;
    const el = document.getElementById('italianSips');
    el.textContent = state.italianSips + (state.italianSips === 1 ? ' sip' : ' sips');
    el.classList.remove('updated');
    void el.offsetWidth;
    el.classList.add('updated');
  }
  if (who === 'irish' || who === 'both') {
    state.irishSips += amount;
    const el = document.getElementById('irishSips');
    el.textContent = state.irishSips + (state.irishSips === 1 ? ' sip' : ' sips');
    el.classList.remove('updated');
    void el.offsetWidth;
    el.classList.add('updated');
  }
}

// ============================================================
// SCREENS
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    requestAnimationFrame(() => target.classList.add('active'));
  }
}

// ============================================================
// CARD RENDERING
// ============================================================
function renderCard(card) {
  const front = document.querySelector('.card-front');
  const catEl = document.getElementById('cardCategory');
  const textEl = document.getElementById('cardText');
  const targetEl = document.getElementById('cardTarget');
  const cfg = CAT_CONFIG[card.type] || CAT_CONFIG.truth;

  // Category badge
  catEl.textContent = cfg.label;
  catEl.style.background = cfg.catBg;
  catEl.style.color = cfg.catColor;
  catEl.style.borderColor = cfg.catBorder;

  // Card text
  textEl.textContent = personalize(card.text);

  // Target hint
  if (card.target === 'italian') {
    targetEl.textContent = `👉 ${state.italianName}'s turn`;
  } else if (card.target === 'irish') {
    targetEl.textContent = `👉 ${state.irishName}'s turn`;
  } else if (card.target === 'both') {
    targetEl.textContent = '👫 Both players';
  } else {
    targetEl.textContent = '';
  }

  // Glowing border
  front.style.setProperty('--card-glow', cfg.glow);
  front.style.setProperty('--card-glow-color', cfg.glowColor);
  front.setAttribute('data-cat', card.type);
}

function dealNextCard() {
  const pool = state.isSpicy ? CARDS.spicy : CARDS.warmup;
  const used = state.isSpicy ? state.usedSpicy : state.usedWarmup;
  const { card, idx } = pickCard(pool, used);
  used.push(idx);
  state.currentCard = card;
  state.cardRevealed = false;
  state.waitingForNext = false;

  // Render content (hidden behind back)
  renderCard(card);

  // Reset vote state
  state.voteState = { italianVoted: false, irishVoted: false, italianChoice: null, irishChoice: null };
  document.getElementById('voteArea').classList.add('hidden');
  document.getElementById('voteResult').classList.add('hidden');
  document.getElementById('normalActions').classList.remove('hidden');
  document.getElementById('voteResult').textContent = '';
  document.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('selected-italian', 'selected-irish'));

  // Reset card flip
  const gameCard = document.getElementById('gameCard');
  gameCard.classList.remove('flipped');
  gameCard.classList.remove('dealing');
  void gameCard.offsetWidth;
  gameCard.classList.add('dealing');
}

function revealCard() {
  if (state.cardRevealed || state.waitingForNext) return;
  state.cardRevealed = true;

  const gameCard = document.getElementById('gameCard');
  gameCard.classList.add('flipped');

  // If vote card, show vote buttons
  if (state.currentCard && state.currentCard.type === 'vote') {
    setTimeout(() => {
      document.getElementById('voteArea').classList.remove('hidden');
      document.getElementById('votePrompt').textContent = state.currentCard.prompt || 'Who do you vote for?';
      document.getElementById('normalActions').classList.add('hidden');
    }, 400);
  }
}

// ============================================================
// VOTING LOGIC
// ============================================================
function handleVote(voter, choice) {
  const vs = state.voteState;
  if (voter === 'italian') {
    if (vs.italianVoted) return;
    vs.italianVoted = true;
    vs.italianChoice = choice;
    document.getElementById('voteItalian').classList.add(choice === 'italian' ? 'selected-italian' : 'selected-irish');
  } else {
    if (vs.irishVoted) return;
    vs.irishVoted = true;
    vs.irishChoice = choice;
    document.getElementById('voteIrish').classList.add(choice === 'italian' ? 'selected-italian' : 'selected-irish');
  }

  if (vs.italianVoted && vs.irishVoted) {
    // Reveal result
    const drinkAmount = state.currentCard.loser_drinks || 1;
    const resultEl = document.getElementById('voteResult');
    resultEl.classList.remove('hidden');

    if (vs.italianChoice === vs.irishChoice) {
      // Both agree — the chosen person drinks
      const loser = vs.italianChoice;
      const loserName = loser === 'italian' ? state.italianName : state.irishName;
      resultEl.textContent = `Both agree: ${loserName} drinks ${drinkAmount} sip${drinkAmount > 1 ? 's' : ''}! 🎯`;
      updateSips(loser, drinkAmount);
    } else {
      // They disagreed — both drink 1
      resultEl.textContent = `Divided verdict! Everyone drinks 1 sip 🤷`;
      updateSips('both', 1);
    }

    // Show next button
    setTimeout(() => {
      document.getElementById('normalActions').classList.remove('hidden');
      document.getElementById('drinkBtn').classList.add('hidden');
      state.waitingForNext = true;
    }, 600);
  }
}

// ============================================================
// ROUND PROGRESSION
// ============================================================
function nextRound() {
  state.round++;

  // Update progress
  const pct = ((state.round - 1) / state.totalRounds) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('roundNum').textContent = state.round;

  // Check for spicy zone transition
  if (state.round === state.spicyStart && !state.isSpicy) {
    showSpicyTransition();
    return;
  }

  // Check game end
  if (state.round > state.totalRounds) {
    endGame();
    return;
  }

  // Reset drink button
  document.getElementById('drinkBtn').classList.remove('hidden');
  dealNextCard();
}

function showSpicyTransition() {
  const overlay = document.getElementById('roundTransition');
  overlay.classList.remove('hidden');
  document.getElementById('transitionNum').textContent = '🌶️';
  document.getElementById('transitionText').textContent = 'SPICY ZONE';
  document.getElementById('transitionSub').textContent = `Round ${state.spicyStart} — time to stop playing it safe...`;
}

// ============================================================
// GAME END
// ============================================================
function endGame() {
  document.getElementById('endItalianName').textContent = state.italianName;
  document.getElementById('endIrishName').textContent = state.irishName;
  document.getElementById('endItalianSips').textContent = state.italianSips + (state.italianSips === 1 ? ' sip' : ' sips');
  document.getElementById('endIrishSips').textContent = state.irishSips + (state.irishSips === 1 ? ' sip' : ' sips');

  const italianCard = document.getElementById('endItalian');
  const irishCard = document.getElementById('endIrish');
  italianCard.classList.remove('winner');
  irishCard.classList.remove('winner');

  const msgs = [
    `The night's barely started, but the scoreboard says otherwise.`,
    `The real winner? Whoever planned this date.`,
    `From Rome to Dublin, this one's a story to tell.`,
    `One night, two cultures, zero regrets.`,
    `Mamma mia… what a night.`,
  ];

  if (state.italianSips < state.irishSips) {
    document.getElementById('winnerText').textContent = `${state.italianName} played it cool 🏆`;
    italianCard.classList.add('winner');
  } else if (state.irishSips < state.italianSips) {
    document.getElementById('winnerText').textContent = `${state.irishName} held their ground 🏆`;
    irishCard.classList.add('winner');
  } else {
    document.getElementById('winnerText').textContent = `It\'s a dead heat — perfectly balanced 🤝`;
    italianCard.classList.add('winner');
    irishCard.classList.add('winner');
  }

  document.getElementById('endMessage').textContent = msgs[Math.floor(Math.random() * msgs.length)];
  showScreen('endScreen');
}

// ============================================================
// INIT & RESTART
// ============================================================
function resetGame() {
  state.italianSips = 0;
  state.irishSips = 0;
  state.round = 1;
  state.isSpicy = false;
  state.usedWarmup = [];
  state.usedSpicy = [];
  state.cardRevealed = false;
  state.waitingForNext = false;

  // Update UI names
  document.getElementById('voteItalianName').textContent = state.italianName;
  document.getElementById('voteIrishName').textContent = state.irishName;
  document.getElementById('italianScoreName').textContent = state.italianName;
  document.getElementById('irishScoreName').textContent = state.irishName;
  document.getElementById('italianSips').textContent = '0 sips';
  document.getElementById('irishSips').textContent = '0 sips';
  document.getElementById('roundNum').textContent = '1';
  document.getElementById('totalRounds').textContent = '/ ' + state.totalRounds;
  document.getElementById('progressBar').style.width = '0%';
  document.getElementById('zoneBadge').textContent = 'Warm-Up Zone 🌶';
  document.getElementById('zoneBadge').classList.remove('spicy');
  document.getElementById('drinkBtn').classList.remove('hidden');

  dealNextCard();
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // START button
  document.getElementById('startBtn').addEventListener('click', () => {
    const it = document.getElementById('italianName').value.trim();
    const ir = document.getElementById('irishName').value.trim();
    state.italianName = it || 'Romeo';
    state.irishName = ir || 'Aoife';
    showScreen('rulesScreen');
  });

  // BEGIN (rules → game)
  document.getElementById('beginBtn').addEventListener('click', () => {
    showScreen('gameScreen');
    resetGame();
  });

  // Card tap — reveal
  document.getElementById('cardContainer').addEventListener('click', () => {
    if (!state.cardRevealed && !state.waitingForNext) {
      revealCard();
    }
  });

  // NEXT button
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (!state.cardRevealed) {
      revealCard();
      return;
    }
    // Animate leaving
    const gameCard = document.getElementById('gameCard');
    gameCard.classList.add('leaving');
    setTimeout(() => {
      gameCard.classList.remove('leaving');
      nextRound();
    }, 320);
  });

  // CHICKEN OUT button
  document.getElementById('drinkBtn').addEventListener('click', () => {
    if (!state.cardRevealed) {
      revealCard();
      return;
    }
    // Add 2 sips to both
    updateSips('both', 2);
    document.getElementById('drinkBtn').classList.add('hidden');
  });

  // VOTE buttons
  document.getElementById('voteItalian').addEventListener('click', () => {
    if (state.voteState.italianVoted && state.voteState.irishVoted) return;
    // We'll let both people tap — first tap is "first player" voting for italian
    if (!state.voteState.italianVoted) handleVote('italian', 'italian');
    else if (!state.voteState.irishVoted) handleVote('irish', 'italian');
  });
  document.getElementById('voteIrish').addEventListener('click', () => {
    if (state.voteState.italianVoted && state.voteState.irishVoted) return;
    if (!state.voteState.italianVoted) handleVote('italian', 'irish');
    else if (!state.voteState.irishVoted) handleVote('irish', 'irish');
  });

  // SPICY ZONE continue
  document.getElementById('continueBtn').addEventListener('click', () => {
    state.isSpicy = true;
    document.getElementById('zoneBadge').textContent = 'Spicy Zone 🔥';
    document.getElementById('zoneBadge').classList.add('spicy');
    document.getElementById('roundTransition').classList.add('hidden');
    document.getElementById('drinkBtn').classList.remove('hidden');
    dealNextCard();
  });

  // PLAY AGAIN
  document.getElementById('playAgainBtn').addEventListener('click', () => {
    showScreen('splash');
  });

  // MENU button
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('settingsOverlay').classList.remove('hidden');
  });
  document.getElementById('closeSettings').addEventListener('click', () => {
    document.getElementById('settingsOverlay').classList.add('hidden');
  });
  document.getElementById('quitGame').addEventListener('click', () => {
    document.getElementById('settingsOverlay').classList.add('hidden');
    showScreen('splash');
  });

  // Click outside settings
  document.getElementById('settingsOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('settingsOverlay')) {
      document.getElementById('settingsOverlay').classList.add('hidden');
    }
  });

  // Enter key on inputs
  document.getElementById('irishName').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('startBtn').click();
  });
  document.getElementById('italianName').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('irishName').focus();
  });

  // Touch feedback on card
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.addEventListener('touchstart', () => {
    cardContainer.style.transform = 'scale(0.98)';
  }, { passive: true });
  cardContainer.addEventListener('touchend', () => {
    cardContainer.style.transform = '';
  }, { passive: true });
});
