/* ===== AMORE & GUINNESS — GAME LOGIC ===== */
// Card database: ~150 cards across warmup / spicy / extreme
// Players born ~1997-1998 | Cultural refs: Italian + Irish + chronically online 28yo energy

// ============================================================
// CARD DATABASE
// ============================================================
const CARDS = {

  // ── WARM-UP (rounds 1→warmupEnd) ─────────────────────────
  warmup: [

    // CHALLENGES (12+)
    {
      type: 'challenge',
      text: 'Show {italian} your camera roll from exactly 3 years ago today. No curating. Whatever\'s there, is there. {italian} reacts out loud.',
      target: 'irish',
      drinkRule: 'Anything embarrassing? {irish} takes 1 sip per cringeworthy photo.',
      sipsOpen: true,
    },
    {
      type: 'challenge',
      text: 'Do your best impression of {irish}\'s accent right now. {irish} rates it 1–10. Under 5 means you drink.',
      target: 'italian',
      drinkRule: 'Under 5/10? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Show {irish} your camera roll from exactly 3 years ago today. No curating. {irish} picks the most chaotic photo and describes it.',
      target: 'italian',
      drinkRule: 'Anything embarrassing? {italian} takes 1 sip per cringeworthy photo.',
      sipsOpen: true,
    },
    {
      type: 'challenge',
      text: 'Do your best impression of {italian}\'s accent. {italian} rates it 1–10. Under 5? You\'re drinking.',
      target: 'irish',
      drinkRule: 'Under 5/10? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Name 5 Italian pasta shapes in 10 seconds. {italian} is judge. Wrong or blanked? 1 sip per miss.',
      target: 'irish',
      timer: 10,
      drinkRule: '1 sip per missed pasta. Max 5 sips.',
      sipsOpen: true,
    },
    {
      type: 'challenge',
      text: 'Say "ah sure look, it\'ll be grand" with full Irish conviction. {italian} scores it 1–10. Under 6? Drink.',
      target: 'italian',
      drinkRule: 'Under 6/10? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Both players: recreate your most iconic school photo pose simultaneously. Right now. No prep. The more accurate the fringe, the better.',
      target: 'both',
      drinkRule: 'Whoever breaks first or laughs first takes 1 sip.',
    },
    {
      type: 'challenge',
      text: 'Explain what a Centra meal deal is to {italian} as if it\'s a Michelin-starred dining experience. Give it the reverence it deserves.',
      target: 'irish',
      drinkRule: 'Not reverent enough? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Order a Negroni Sbagliato in the most theatrical Italian you can manage. {italian} judges pronunciation. One butchered syllable = 1 sip.',
      target: 'irish',
      drinkRule: 'Adjust sips using the buttons below.',
      sipsOpen: true,
    },
    {
      type: 'challenge',
      text: 'In your best Italian hand-gesture vocabulary, express "I have absolutely no idea what you\'re talking about." {irish} must guess the meaning.',
      target: 'italian',
      drinkRule: '{irish} guesses wrong? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Both players: name a song from the FIFA 06 soundtrack simultaneously. Same song? Both skip a sip. No match? Both drink.',
      target: 'both',
      drinkRule: 'No match? Both take 1 sip.',
    },
    {
      type: 'challenge',
      text: 'Recreate your most authentic Bebo-era profile photo pose. Right now. Other player scores it out of 10. Under 5? Drink.',
      target: 'both',
      drinkRule: 'Under 5/10? That player takes 2 sips.',
    },
    {
      type: 'challenge',
      text: '{italian}: describe "dolce far niente" to {irish} in 30 seconds without using the word "relax". Fail? Drink.',
      target: 'italian',
      timer: 30,
      drinkRule: 'Used "relax"? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Quote an actual MSN Messenger away message you used circa 2007. Linkin Park lyrics count. Can\'t remember one? Drink 2.',
      target: 'both',
      drinkRule: 'Can\'t recall one? Take 2 sips.',
    },

    // TRUTHS (10+)
    {
      type: 'truth',
      text: 'What\'s the most embarrassing thing you\'ve Googled in the last week? Full honesty or drink 3.',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: '{italian}: which Italian stereotype about yourself is 100% accurate? Own it out loud.',
      target: 'italian',
      drinkRule: 'Won\'t own it? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: which Irish stereotype about yourself is embarrassingly true? "The tea thing" counts but you still have to say it.',
      target: 'irish',
      drinkRule: 'Won\'t confirm it? {irish} takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'What was your celebrity crush at age 12? The more chaotic, the better. Most cringe answer has to take 2 sips.',
      target: 'both',
      drinkRule: 'Most cringeworthy answer takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s on your Spotify that you\'d die if someone saw? No vague answers. Name the song.',
      target: 'both',
      drinkRule: 'Dodge it or go vague? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s your most-used excuse when you cancel plans? Extra sip if you\'ve used it in the last two weeks.',
      target: 'both',
      drinkRule: 'Used it recently? Take 1 extra sip.',
    },
    {
      type: 'truth',
      text: '{italian}: have you ever pretended to be from Spain to avoid explaining Italy? Judgment-free zone. Completely.',
      target: 'italian',
      drinkRule: 'Refuse to answer? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'Did you have a Habbo Hotel account? What was the username? No account? Drink 1 for a deprived childhood.',
      target: 'both',
      drinkRule: 'No account? Take 1 sip for the loss.',
    },
    {
      type: 'truth',
      text: 'What\'s the most ridiculous thing you downloaded on Limewire? Exact song title, please. Refuse? Drink 2.',
      target: 'both',
      drinkRule: 'Refuse to admit it? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What emo / scene / Tumblr phase did you go through in secondary school that you\'re quietly grateful you outgrew?',
      target: 'both',
      drinkRule: 'Refuse to own it? Take 1 sip.',
    },
    {
      type: 'truth',
      text: 'What\'s the most controversial food opinion you hold? The other person must sit in silence for 5 full seconds after hearing it.',
      target: 'both',
      drinkRule: 'React in under 5 seconds? Take 1 sip.',
    },
    {
      type: 'truth',
      text: 'What\'s a show you secretly binge-watched and told absolutely nobody about? Most embarrassing confession skips a sip.',
      target: 'both',
      drinkRule: 'Most embarrassing answer skips their next sip.',
    },

    // VOTES (6)
    {
      type: 'vote',
      text: 'Who would be more chaotic on a first date abroad?',
      prompt: 'More chaotic on a first date abroad?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who was the bigger drama queen as a teenager?',
      prompt: 'Bigger drama queen as a teenager?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who spends longer getting ready — honestly?',
      prompt: 'Who takes longer to get ready?',
      loser_drinks: 1,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would win MasterChef with home-country advantage?',
      prompt: 'Who wins MasterChef (home rules)?',
      loser_drinks: 1,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who is more likely to accidentally cause a diplomatic incident abroad?',
      prompt: 'More likely to cause an international incident?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who talks to strangers more easily?',
      prompt: 'Better with strangers?',
      loser_drinks: 1,
      target: 'both',
    },

    // COUPLE (5)
    {
      type: 'couple',
      text: 'Each teach the other one phrase from your native language that you\'d only say at home — something untranslatable. Mock each other\'s pronunciation freely.',
      target: 'both',
      drinkRule: 'Worst pronunciation? That person takes 1 sip.',
    },
    {
      type: 'couple',
      text: 'Quick debate: pizza vs. fish and chips. 60 seconds each to make the case. Most convincing argument wins a sip-skip.',
      target: 'both',
      timer: 30,
      drinkRule: 'Less convincing argument? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Both close your eyes and simultaneously shout one 2000s pop song title. Same song? Both skip a sip. Different song? Both drink.',
      target: 'both',
      drinkRule: 'Different songs? Both take 1 sip.',
    },
    {
      type: 'couple',
      text: '30 seconds of complimenting each other — non-physical things only. First one to laugh awkwardly, go silent, or give a vague answer drinks.',
      target: 'both',
      timer: 30,
      drinkRule: 'First to crack or go vague takes 1 sip.',
    },
    {
      type: 'couple',
      text: 'Take turns describing your perfect Sunday morning in your home country. Most vivid, specific, sensory description skips their next drink.',
      target: 'both',
      drinkRule: 'Less vivid description? Take 1 sip.',
    },

    // NOSTALGIA (6)
    {
      type: 'nostalgia',
      text: 'Name the first console you ever played. If it was a PlayStation 2, you both drink in solidarity.',
      target: 'both',
      drinkRule: 'PS2 veterans? Both take 1 sip. Any other answer? 1 sip for the liar.',
    },
    {
      type: 'nostalgia',
      text: 'What was your MSN Messenger status in 2008? "xXx broken_wings xXx" and Yellowcard lyrics are both valid confessions.',
      target: 'both',
      drinkRule: 'Refuses to confess? Take 1 sip.',
    },
    {
      type: 'nostalgia',
      text: 'What did you spend your Leaving Cert or Maturità money on? Compare answers. The more ridiculous purchase drinks.',
      target: 'both',
      drinkRule: 'Most ridiculous purchase? Take 2 sips.',
    },
    {
      type: 'nostalgia',
      text: 'Hannah Montana, High School Musical, or Lizzie McGuire? One shaped you. Which one? Own it.',
      target: 'both',
      drinkRule: 'Refuses to answer? Take 1 sip.',
    },
    {
      type: 'nostalgia',
      text: 'Name a childhood comfort food that means nothing to the other person\'s culture. They drink if they\'ve genuinely never heard of it.',
      target: 'both',
      drinkRule: 'Never heard of it? That person takes 1 sip.',
    },
    {
      type: 'nostalgia',
      text: 'Did you have a MySpace? Who was in your Top 8? Did anyone get hurt over that list? Be honest.',
      target: 'both',
      drinkRule: 'Someone got hurt? Take 1 sip of guilt.',
    },

    // WILD (6)
    {
      type: 'wild',
      text: 'NPC mode: for 30 seconds, both players must respond to everything as if you\'re background NPCs in a video game. Wooden expressions. Scripted replies. First to break character drinks.',
      target: 'both',
      timer: 30,
      drinkRule: 'First to break character takes 2 sips.',
    },
    {
      type: 'wild',
      text: 'Both players: describe tonight so far as a Spotify Wrapped top artist — one artist, and why that artist specifically. Weirder = better.',
      target: 'both',
      drinkRule: 'Most boring choice? Take 1 sip.',
    },
    {
      type: 'wild',
      text: 'Demonstrate the exact noise your phone made when you got an MSN message notification in 2007. Other player drinks if they recognise it instantly.',
      target: 'both',
      drinkRule: 'Recognised it instantly? Other player takes 1 sip.',
    },
    {
      type: 'wild',
      text: '{italian} describes their ideal Sunday using only Italian words. {irish} must try to understand from context alone. No translating for 45 seconds.',
      target: 'both',
      timer: 45,
      drinkRule: 'Completely lost? {irish} takes 1 sip.',
    },
    {
      type: 'wild',
      text: 'Both players: pick the most "touch grass immediately" opinion you\'ve seen online this week. Most unhinged answer wins. The tamer answer takes 1 sip.',
      target: 'both',
      drinkRule: 'Less unhinged answer? Take 1 sip.',
    },
    {
      type: 'wild',
      text: 'What\'s the first thing you actually thought when you saw the other person tonight? Not the edited version — the real first thought. Say it.',
      target: 'both',
      drinkRule: 'Clearly filtered their answer? Take 2 sips.',
    },

    // MINI-GAMES (2 tap_race + 2 stare)
    { type: 'wild', text: 'TAP RACE! 👆 Fastest fingers in Italy vs Ireland. First to 20 taps wins. Loser drinks 2.', target: 'both', drinkRule: 'Loser drinks 2 sips.', minigame: 'tap_race', loser_drinks: 2 },
    { type: 'wild', text: 'TAP RACE ROUND 2! 💥 Rematch energy. Same rules. Different vibes. Loser drinks 2.', target: 'both', drinkRule: 'Loser drinks 2 sips.', minigame: 'tap_race', loser_drinks: 2 },
    { type: 'wild', text: 'STARE CONTEST 👀 Hold eye contact. No smiling. No looking away. First to blink — drinks 2.', target: 'both', drinkRule: 'First to look away drinks 2 sips.', minigame: 'stare', loser_drinks: 2 },
    { type: 'wild', text: 'STARE CONTEST ROUND 2 👁️ Second attempt. More tension now. First to break — drinks 2.', target: 'both', drinkRule: 'First to look away drinks 2 sips.', minigame: 'stare', loser_drinks: 2 },
  ],

  // ── SPICY ZONE (rounds warmupEnd+1 → spicyEnd) ───────────
  spicy: [

    // CHALLENGES (14+)
    {
      type: 'challenge',
      text: 'Show each other the 7th photo in your camera roll. Right now. No curating, no deleting. If it\'s an ex — drink 3.',
      target: 'both',
      drinkRule: 'Ex in the photo? That person takes 3 sips. Just awkward? Both take 1.',
    },
    {
      type: 'challenge',
      text: 'What\'s the most attractive thing {italian} has done tonight without realising it? Be specific. "Just being themselves" is not an answer.',
      target: 'irish',
      drinkRule: 'Vague answer or cop-out? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'What\'s the most attractive thing {irish} has done tonight without realising it? Be specific. No hiding behind irony.',
      target: 'italian',
      drinkRule: 'Vague answer or cop-out? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Open Instagram. Find your most-liked post. Who was the first person to like it? If it\'s an ex — drink 2.',
      target: 'both',
      drinkRule: 'Ex liked it first? Take 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Send {irish} a voice note right now saying something you\'d normally only think. Record it before you second-guess it. Don\'t send? Drink 3.',
      target: 'italian',
      drinkRule: 'Don\'t send it? {italian} takes 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Send {italian} a voice note right now saying something you\'d normally only think. Record it. Don\'t pre-plan it. Don\'t send? Drink 3.',
      target: 'irish',
      drinkRule: 'Don\'t send it? {irish} takes 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Show your most-used emoji in the last month. Both players check. Whoever\'s is more revealing about their emotional state drinks.',
      target: 'both',
      drinkRule: 'More emotionally exposed emoji? Take 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Stare at each other in complete silence for 30 seconds. First to smile drinks 1. First to speak doubles their sips.',
      target: 'both',
      timer: 30,
      drinkRule: 'First to smile: 1 sip. First to speak: 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Compliment {irish} in the most dramatic Italian telenovela style imaginable. Use your hands. Use pauses. Use the drama. {irish} must fan themselves if convinced.',
      target: 'italian',
      drinkRule: '{irish} not convinced? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Open your most recent text thread with your closest friend. Read the last thing you said — out loud. Don\'t sanitise it. Refuse? Drink 3.',
      target: 'both',
      drinkRule: 'Refuse to read it? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Touch the other person\'s hand for 10 seconds. Maintain eye contact the entire time. First to look away or pull back drinks.',
      target: 'both',
      timer: 10,
      drinkRule: 'First to break contact or look away takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Both scroll to the last time you checked someone\'s Instagram without following them. Who were you checking? Most suspicious answer drinks.',
      target: 'both',
      drinkRule: 'Most suspicious answer takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Post a BeReal right now. No repositioning, no filter, no waiting for better lighting. Whoever takes longest to hit post drinks.',
      target: 'both',
      drinkRule: 'Slowest to post takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Both scroll to your last unread DM request. Whoever has the weirder one drinks. Screenshots optional but strongly encouraged.',
      target: 'both',
      drinkRule: 'Weirder DM request? Take 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Open Spotify. Show your "On Repeat" playlist to the other person. First 3 songs, out loud. Drink 1 per song you\'re embarrassed about.',
      target: 'both',
      drinkRule: 'Adjust sips using the buttons below.',
      sipsOpen: true,
    },

    // TRUTHS (12+)
    {
      type: 'truth',
      text: 'What\'s the first thing you noticed about the other person tonight? Real answer. Not "your smile". Actual first thing. Drink 3 if you dodge it.',
      target: 'both',
      drinkRule: 'Dodge it or go vague? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s your body count? Both answer. Whoever guesses the other\'s number closer wins. The one furthest off drinks 3.',
      target: 'both',
      drinkRule: 'Furthest from the other\'s number? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s your most irrational deal-breaker in a relationship? The more specific and unhinged, the better. Too vague? Drink 1.',
      target: 'both',
      drinkRule: 'Too vague or boring? Take 1 sip and try again.',
    },
    {
      type: 'truth',
      text: 'What\'s the boldest thing you\'ve ever done to get someone\'s attention romantically? Did it work? Be specific.',
      target: 'both',
      drinkRule: 'Didn\'t work? Take 1 sip for the loss.',
    },
    {
      type: 'truth',
      text: 'Describe the other person in 3 words you\'d never say out loud sober. You\'re saying them now. Refuse? Drink 3.',
      target: 'both',
      drinkRule: 'Refuse to say them? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s a red flag you\'ve been ignoring about yourself in relationships recently? 10 seconds to think, then answer. Dodge it? Drink 3.',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: '{italian}: What\'s something about Irish culture you actually find genuinely attractive — not just tolerable? Be specific.',
      target: 'italian',
      drinkRule: 'Diplomatic non-answer? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: What\'s something about Italian culture that makes you want to move there immediately? Not "the food." Something specific.',
      target: 'irish',
      drinkRule: 'Says "the food"? {irish} takes 2 sips and tries again.',
    },
    {
      type: 'truth',
      text: 'What\'s a phrase that lives rent-free in your head from a past relationship? You don\'t have to explain the context — just say it out loud.',
      target: 'both',
      drinkRule: 'Won\'t say it? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'When did you last genuinely live in your villain era — and what had you done? No sanitising.',
      target: 'both',
      drinkRule: 'Dodge the details? Take 2 sips.',
    },
    {
      type: 'truth',
      text: '{italian}: what does Sunday family lunch actually represent for you emotionally? This is not a small question. Answer properly.',
      target: 'italian',
      drinkRule: 'Surface-level answer? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: what\'s a phrase your mammy says that has leaked into your everyday vocabulary against your will? Say it. In her voice.',
      target: 'irish',
      drinkRule: 'Refuses the mammy voice? {irish} takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the most embarrassing dating app conversation you\'ve ever had? Specific details required. No "I deleted it" excuses. Drink 3.',
      target: 'both',
      drinkRule: 'Refuse to share? Take 3 sips.',
    },

    // VOTES (6)
    {
      type: 'vote',
      text: 'Who would text "I miss you" at 3am first?',
      prompt: 'Texts "I miss you" at 3am first?',
      loser_drinks: 3,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who is the bigger overthinker in relationships?',
      prompt: 'Bigger overthinker in relationships?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would be the more chaotic travel companion?',
      prompt: 'More chaotic travel companion?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who is more charming on a first impression with strangers?',
      prompt: 'More charming on first impression?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who is more likely to have left someone on read for 3+ days and then replied as if nothing happened?',
      prompt: 'More likely to ghost then resurface?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would fall first in this situation?',
      prompt: 'Who falls first?',
      loser_drinks: 3,
      target: 'both',
    },

    // COUPLE (6)
    {
      type: 'couple',
      text: 'Pick a song right now. Both listen to 30 seconds together in silence. No phones, no talking. Then each say one honest thing it made you think about.',
      target: 'both',
      timer: 30,
      drinkRule: 'Gives a deflecting non-answer? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Tell each other the exact moment tonight when you thought "okay, they\'re interesting." Be specific — a sentence, a gesture, a look. Not "immediately."',
      target: 'both',
      drinkRule: 'Vague or generic answer? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Plan a hypothetical 48-hour trip together — pick one city neither of you has been to. Alternate one activity per turn. You have 5 turns each. Go.',
      target: 'both',
      drinkRule: 'Runs out of ideas first? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Both close your eyes. Picture the other person 10 years from now. Open your eyes and describe what you saw. Don\'t edit yourself.',
      target: 'both',
      drinkRule: 'Too vague? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Write each other a 6-word love letter right now. 30 seconds. Read them simultaneously out loud.',
      target: 'both',
      timer: 30,
      drinkRule: 'Too safe or generic? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'What song would be playing in the movie version of this evening, right now, at this exact moment? Both answer simultaneously. Whoever\'s choice fits better wins.',
      target: 'both',
      drinkRule: 'Worst soundtrack choice? Take 1 sip.',
    },

    // NOSTALGIA (6)
    {
      type: 'nostalgia',
      text: '{italian}: What Italian early-2000s banger do you still have saved on your phone — but "ironically"? Name it. Confess or drink 2.',
      target: 'italian',
      drinkRule: 'Won\'t confess? {italian} takes 2 sips.',
    },
    {
      type: 'nostalgia',
      text: 'What TV show from your childhood would genuinely horrify your adult self if you rewatched it right now?',
      target: 'both',
      drinkRule: 'Refuses to name one? Take 1 sip.',
    },
    {
      type: 'nostalgia',
      text: 'Quick fire: what was your most-played song on iTunes circa 2008? Both answer simultaneously. No shame here.',
      target: 'both',
      drinkRule: 'Identical answer? Both skip a sip. Different? Both take 1.',
    },
    {
      type: 'nostalgia',
      text: 'What\'s a core memory from a night out in your early 20s that you\'ve told 40 times but will never stop telling? Go.',
      target: 'both',
      drinkRule: 'The other person doesn\'t laugh? Take 1 sip.',
    },
    {
      type: 'nostalgia',
      text: 'Describe your GTA San Andreas strategy in one sentence. The more chaotic the strategy, the more you drink.',
      target: 'both',
      drinkRule: 'Adjust sips using the buttons below.',
      sipsOpen: true,
    },
    {
      type: 'nostalgia',
      text: 'What\'s the first thing you bought with your own money as a child? Compare. Whoever bought something more objectively ridiculous drinks.',
      target: 'both',
      drinkRule: 'More ridiculous purchase? Take 2 sips.',
    },

    // WILD (8)
    {
      type: 'wild',
      text: 'The "this is fine" dog energy is real. Both describe one thing in your life right now that is absolutely on fire that you\'re choosing to ignore. Whoever sounds more deluded drinks.',
      target: 'both',
      drinkRule: 'Most in denial? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'Chaotic good vs chaotic evil: classify the other person\'s alignment and give a specific example as evidence. The other player must accept the verdict or drink 2.',
      target: 'both',
      drinkRule: 'Reject the verdict? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'Both of you have "understood the assignment" at some point tonight. Call it out with specifics. The one who understood it least drinks.',
      target: 'both',
      drinkRule: 'Least understood the assignment? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'Rizz check: both players have 30 seconds to say the most genuinely charming thing they can think of right now. Not corny. Actually charming. The other player judges. Loser drinks.',
      target: 'both',
      timer: 30,
      drinkRule: 'Lost the rizz check? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'Both write a one-line BeReal caption for right now — this exact moment — as honestly as possible. Read them simultaneously. Most filtered answer takes 2 sips.',
      target: 'both',
      drinkRule: 'Most filtered? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'Explain the Lidl middle aisle experience to {italian} as if it\'s a sacred weekly pilgrimage. Give it the full cultural weight it deserves.',
      target: 'irish',
      drinkRule: 'Not reverent enough? {irish} takes 2 sips.',
    },
    {
      type: 'wild',
      text: 'Both: pick a Vine or early meme that defines your sense of humour. Whoever\'s pick lands harder with the other person wins. Loser drinks.',
      target: 'both',
      drinkRule: 'Didn\'t land? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'It\'s Spotify Wrapped. Each player names the top 3 artists the other person would have. Whoever guesses more accurately — the other drinks 2.',
      target: 'both',
      drinkRule: 'Worse guess? Take 2 sips.',
    },

    // MINI-GAMES (2 tap_race + 2 quick_draw)
    { type: 'wild', text: 'TAP RACE! 💥 Fastest fingers win — this one\'s personal. Loser drinks 3.', target: 'both', drinkRule: 'Loser drinks 3 sips.', minigame: 'tap_race', loser_drinks: 3 },
    { type: 'wild', text: 'TAP RACE REMATCH! 🔥 You both know what\'s at stake. Loser drinks 3.', target: 'both', drinkRule: 'Loser drinks 3 sips.', minigame: 'tap_race', loser_drinks: 3 },
    { type: 'wild', text: 'QUICK DRAW 🔫 Hands on the table. When you see DRAW — first to tap wins. Loser drinks 2.', target: 'both', drinkRule: 'Slower finger drinks 2 sips.', minigame: 'quick_draw', loser_drinks: 2 },
    { type: 'wild', text: 'QUICK DRAW REMATCH 🔫 One more time. False start costs you. Loser drinks 2.', target: 'both', drinkRule: 'Slower finger drinks 2 sips.', minigame: 'quick_draw', loser_drinks: 2 },
  ],

  // ── EXTREME ZONE (rounds spicyEnd+1 → totalRounds) ────────
  extreme: [

    // CHALLENGES / DARES (12+)
    {
      type: 'challenge',
      text: 'Dare: kiss the other person\'s hand. Look up while you do it. Hold eye contact for 3 full seconds. Refuse? Drink 4.',
      target: 'both',
      drinkRule: 'Refuse? Take 4 sips.',
    },
    {
      type: 'challenge',
      text: 'Turn-based dare: {italian} gives {irish} a 30-second shoulder massage. Then switch. Timer on. No skipping.',
      target: 'both',
      timer: 30,
      drinkRule: 'Skip your turn? Take 4 sips.',
    },
    {
      type: 'challenge',
      text: 'Tell the other person one thing you\'ve been wanting to do to them tonight. No vague answers. No metaphors. Say it plainly. Dodge it? Drink 5.',
      target: 'both',
      drinkRule: 'Dodge or go vague? Take 5 sips.',
    },
    {
      type: 'challenge',
      text: 'Rate the other person out of 10 — physical first, then personality. Say both numbers out loud. You cannot say the same number for both. Refuse? Drink 4.',
      target: 'both',
      drinkRule: 'Refuse to rate? Take 4 sips.',
    },
    {
      type: 'challenge',
      text: 'Text your group chat right now: "I think I\'m falling for someone." No context. Screenshot and show it. Don\'t send? Drink 5.',
      target: 'both',
      drinkRule: 'Don\'t send? Take 5 sips.',
    },
    {
      type: 'challenge',
      text: 'What\'s the most compromising photo on your phone right now? You don\'t have to show it — but you have to describe it in detail. Refuse the description? Drink 4.',
      target: 'both',
      drinkRule: 'Refuse to describe? Take 4 sips.',
    },
    {
      type: 'challenge',
      text: 'Show each other the last photo you took of yourself that you didn\'t post anywhere. Right now. No deleting.',
      target: 'both',
      drinkRule: 'Refuse to show? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Open your phone camera. Take a photo of the other person right now. They get to see it immediately after. You cannot delete it tonight.',
      target: 'both',
      drinkRule: 'Refuse? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Send {irish} a voice note right now saying exactly: "I\'ve been thinking about you." Send it before you second-guess it. Don\'t send? Drink 4.',
      target: 'italian',
      drinkRule: 'Don\'t send it? {italian} takes 4 sips.',
    },
    {
      type: 'challenge',
      text: 'Send {italian} a voice note right now saying exactly: "I\'ve been thinking about you." Send it before you second-guess it. Don\'t send? Drink 4.',
      target: 'irish',
      drinkRule: 'Don\'t send it? {irish} takes 4 sips.',
    },
    {
      type: 'challenge',
      text: 'Tell the other person something about tonight that you didn\'t plan to say until at least two more drinks. Say it now anyway. Chicken out? Drink 5.',
      target: 'both',
      drinkRule: 'Chicken out? Take 5 sips.',
    },
    {
      type: 'challenge',
      text: 'Describe your biggest insecurity about dating in exactly 7 words. Count them out loud. Wrong count or refusal? Drink 3.',
      target: 'both',
      drinkRule: 'Wrong count or refusal? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Open your most recent text thread with an ex. Read the last 2 messages — yours and theirs — out loud. No editing. Refuse? Drink 4.',
      target: 'both',
      drinkRule: 'Refuse to read? Take 4 sips.',
    },

    // TRUTHS (14+)
    {
      type: 'truth',
      text: 'What\'s the most physical thing you\'ve done on a first date? {irish} goes first. {italian} has to top it or drink 4.',
      target: 'both',
      drinkRule: 'Can\'t top it? Take 4 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s your most embarrassing sexual or romantic moment? Full details. No glossing over. Dodge it? Drink 4.',
      target: 'both',
      drinkRule: 'Dodge it or go vague? Take 4 sips.',
    },
    {
      type: 'truth',
      text: 'What actually turns you on about the other person right now, specifically? Not a general type. Them. Right now. Refuse? Drink 4.',
      target: 'both',
      drinkRule: 'Refuse or go vague? Take 4 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s something you want from a relationship that you\'ve never actually asked for out loud? Say it. Dodge it? Drink 3.',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'Be honest: what\'s something you\'ve told yourself about your love life that you know is a lie? Admit it now.',
      target: 'both',
      drinkRule: 'Won\'t admit the lie? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the darkest secret you\'d be willing to tell tonight — right now, at this level of drunk? Say it. Dodge it? Drink 4.',
      intensity: 'inferno',
      target: 'both',
      drinkRule: 'Dodge it? Take 4 sips.',
    },
    {
      type: 'truth',
      text: 'What would happen if this evening went exactly the way part of you wants it to? Say what you actually want. Don\'t hedge. Drink 5 if you won\'t.',
      target: 'both',
      drinkRule: 'Hedges or refuses? Take 5 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the most "no thoughts, head empty" decision you\'ve made that was specifically about a person you were attracted to?',
      target: 'both',
      drinkRule: 'Too tame? Take 1 sip and try harder.',
    },
    {
      type: 'truth',
      text: 'If the other person texted you "we need to talk" tomorrow morning — what would your immediate gut assumption be? Be honest.',
      target: 'both',
      drinkRule: 'Too vague or deflecting? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s a version of yourself you perform for people when you first meet them that isn\'t quite the real you? Describe it specifically.',
      target: 'both',
      drinkRule: 'Won\'t reveal it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: '{italian}: what\'s one thing about a Sunday family lunch that a therapist would find really interesting? Be specific.',
      target: 'italian',
      drinkRule: 'Too surface-level? {italian} takes 3 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: "Grand so" — tell me about a time you said it when absolutely nothing was grand. What was actually going on?',
      target: 'irish',
      drinkRule: 'Won\'t go there? {irish} takes 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the thing about tonight that you\'ll still be thinking about tomorrow morning when you wake up? Answer honestly. Dodge it? Drink 4.',
      target: 'both',
      drinkRule: 'Dodge it? Take 4 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the last relationship deal-breaker you discovered too late? Specific story. No vague "they weren\'t right for me."',
      target: 'both',
      drinkRule: 'Vague answer? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the most "the audacity" thing you\'ve ever done to or for someone you were attracted to? No regrets clause applies.',
      target: 'both',
      drinkRule: 'Too tame? Take 2 sips.',
    },

    // VOTES (5)
    {
      type: 'vote',
      text: 'Who\'s better in bed — based purely on vibes?',
      intensity: 'inferno',
      prompt: 'Better in bed — vibes only?',
      loser_drinks: 4,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would be more mortified the morning after a big night?',
      prompt: 'More mortified the morning after?',
      loser_drinks: 3,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would send the paragraph text at 2am explaining everything?',
      prompt: 'Sends the 2am paragraph text?',
      loser_drinks: 3,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who is giving more "I\'m completely fine, this is totally fine" energy tonight when they\'re not fine?',
      prompt: 'Who\'s pretending to be fine?',
      loser_drinks: 3,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who is the bigger "I\'m obsessed with you" energy person in a new relationship?',
      prompt: 'Bigger obsessive energy in relationships?',
      loser_drinks: 3,
      target: 'both',
    },

    // COUPLE (5)
    {
      type: 'couple',
      text: 'Both look at each other for 15 uninterrupted seconds. No phones. No laughing it off. After — each say one honest thing you noticed.',
      target: 'both',
      timer: 15,
      drinkRule: 'Can\'t hold the look? Take 3 sips.',
    },
    {
      type: 'couple',
      text: 'If tonight was a movie, what genre is it and what\'s the title? Both answer separately, then compare. Loser of the accuracy contest drinks.',
      target: 'both',
      drinkRule: 'Less accurate title? Take 2 sips.',
    },
    {
      type: 'couple',
      text: 'Without irony: tell the other person one thing you genuinely admire about them that you haven\'t said yet tonight. Then tell them one thing you find physically attractive about them right now.',
      target: 'both',
      drinkRule: 'Gives a vague non-answer? Take 2 sips.',
    },
    {
      type: 'couple',
      text: 'Plan the most absurdly perfect date you could imagine with this person — money completely irrelevant. 3 minutes. Go. Whoever plans the better one has their next drink paid for in sip-skips.',
      target: 'both',
      timer: 30,
      drinkRule: 'Less creative date plan? Take 2 sips.',
    },
    {
      type: 'couple',
      text: 'Both ask each other one question the other must answer fully and honestly. No vetoing. No deflecting. Ask it now.',
      target: 'both',
      drinkRule: 'Deflects or refuses their question? Take 3 sips.',
    },

    // WILD (4)
    {
      type: 'wild',
      text: 'Both of you are in your "obsessed" era. Admit one thing about this evening you\'re genuinely obsessed with — no irony allowed. Whoever sounds more sincere wins. The other takes 2 sips.',
      target: 'both',
      drinkRule: 'Less sincere? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'You both get to say one thing to the other person with full amnesty — no consequences, no bringing it up later. Say it. Dodge it? Drink 5.',
      target: 'both',
      drinkRule: 'Dodge it? Take 5 sips.',
    },
    {
      type: 'wild',
      text: 'What\'s your Spotify Wrapped "Audio Aura" for this year, actually? Not the nice version — the uncomfortable honest version of what your music says about your emotional state.',
      target: 'both',
      drinkRule: 'Not uncomfortable enough? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'Both players: pick a Vine or meme that best describes what you think is happening between the two of you right now. No hiding behind irony.',
      target: 'both',
      drinkRule: 'Hides behind irony? Take 3 sips.',
    },

    // MINI-GAMES (2 stare + 2 quick_draw)
    { type: 'wild', text: 'STARE CONTEST 🔥 No laughing. No looking away. This is war now. Loser takes 3.', target: 'both', drinkRule: 'First to look away drinks 3 sips.', minigame: 'stare', loser_drinks: 3 },
    { type: 'wild', text: 'STARE CONTEST FINAL 🔥 Last stare of the night. Make it count. Loser drinks 4.', target: 'both', drinkRule: 'First to look away drinks 4 sips.', minigame: 'stare', loser_drinks: 4 },
    { type: 'wild', text: 'QUICK DRAW 🔫 Extreme edition. Zero mercy. No false starts. Loser drinks 3.', target: 'both', drinkRule: 'Slower tap drinks 3 sips.', minigame: 'quick_draw', loser_drinks: 3 },
    { type: 'wild', text: 'QUICK DRAW FINALE 🔫 Last draw of the night. One shot. Loser drinks 4.', target: 'both', drinkRule: 'Slower tap drinks 4 sips.', minigame: 'quick_draw', loser_drinks: 4 },
  ],
};

// ============================================================
// CATEGORY CONFIG
// ============================================================
const CAT_CONFIG = {
  challenge: {
    label: '⚔️ Challenge',
    catBg: 'rgba(179,58,58,0.22)',
    catColor: '#e05555',
    catBorder: 'rgba(224,85,85,0.65)',
    glowColor: 'rgba(179,58,58,0.22)',
  },
  truth: {
    label: '🔮 Truth',
    catBg: 'rgba(124,92,191,0.22)',
    catColor: '#a888ff',
    catBorder: 'rgba(168,136,255,0.60)',
    glowColor: 'rgba(124,92,191,0.22)',
  },
  vote: {
    label: '⚖️ Vote',
    catBg: 'rgba(201,150,58,0.22)',
    catColor: '#f0c060',
    catBorder: 'rgba(240,192,96,0.60)',
    glowColor: 'rgba(201,150,58,0.22)',
  },
  couple: {
    label: '💞 Couple',
    catBg: 'rgba(45,122,79,0.22)',
    catColor: '#45b875',
    catBorder: 'rgba(69,184,117,0.60)',
    glowColor: 'rgba(45,122,79,0.22)',
  },
  nostalgia: {
    label: '🕹️ Nostalgia',
    catBg: 'rgba(74,134,200,0.22)',
    catColor: '#88bbff',
    catBorder: 'rgba(136,187,255,0.60)',
    glowColor: 'rgba(74,134,200,0.22)',
  },
  wild: {
    label: '🎲 Wild',
    catBg: 'rgba(255,165,0,0.22)',
    catColor: '#ffaa44',
    catBorder: 'rgba(255,170,68,0.65)',
    glowColor: 'rgba(255,165,0,0.20)',
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
  totalRounds: 12,
  warmupEnd: 4,     // last warmup round
  spicyEnd: 9,      // last spicy round (extreme = spicyEnd+1 to totalRounds)
  zone: 'warmup',   // 'warmup' | 'spicy' | 'extreme'
  roundMode: 'shared', // 'shared' | 'turns'
  spiceLevel: 'hot',   // 'mild' | 'hot' | 'inferno'
  activeTurn: 'italian', // only relevant in 'turns' mode
  currentCard: null,
  usedWarmup: [],
  usedSpicy: [],
  usedExtreme: [],
  voteState: { italianVoted: false, irishVoted: false, italianChoice: null, irishChoice: null },
  advancing: false,
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

// Spice level hierarchy: mild ⊂ hot ⊂ inferno
// A card with intensity 'inferno' only shows at inferno level.
// A card with intensity 'hot' shows at hot + inferno.
// Cards with no intensity field always show.
const SPICE_RANKS = { mild: 0, hot: 1, inferno: 2 };
function cardAllowed(card) {
  if (!card.intensity) return true; // untagged cards always show
  return SPICE_RANKS[card.intensity] <= SPICE_RANKS[state.spiceLevel];
}

function pickCard(pool, used) {
  const allowed = pool.filter(c => cardAllowed(c));
  const available = allowed.filter((_, i) => !used.includes(pool.indexOf(allowed[i])) );
  // Re-do: filter by index in original pool for used tracking
  const poolIndices = pool.map((c, i) => ({ card: c, idx: i }));
  const allowedIndexed = poolIndices.filter(({ card }) => cardAllowed(card));
  const availableIndexed = allowedIndexed.filter(({ idx }) => !used.includes(idx));

  if (availableIndexed.length === 0) {
    // Reset used for allowed cards only
    const allowedIdxs = allowedIndexed.map(x => x.idx);
    allowedIdxs.forEach(i => { const pos = used.indexOf(i); if (pos > -1) used.splice(pos, 1); });
    const fallback = allowedIndexed[Math.floor(Math.random() * allowedIndexed.length)];
    return fallback ? { card: fallback.card, idx: fallback.idx } : { card: pool[0], idx: 0 };
  }

  let candidates = availableIndexed;
  if (state.roundMode === 'turns') {
    const preferred = availableIndexed.filter(({ card: c }) => !c.target || c.target === 'both' || c.target === state.activeTurn);
    if (preferred.length > 0) candidates = preferred;
  }
  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  return { card: chosen.card, idx: chosen.idx };
}

function personalize(text) {
  return text
    .replace(/{italian}/g, state.italianName)
    .replace(/{irish}/g, state.irishName);
}

function getZone(round) {
  if (round <= state.warmupEnd) return 'warmup';
  if (round <= state.spicyEnd) return 'spicy';
  return 'extreme';
}

function updateSips(who, amount) {
  if (who === 'italian' || who === 'both') {
    state.italianSips = Math.max(0, state.italianSips + amount);
    const el = document.getElementById('italianSips');
    if (el) {
      el.textContent = state.italianSips + (state.italianSips === 1 ? ' sip' : ' sips');
      el.classList.remove('updated');
      void el.offsetWidth;
      el.classList.add('updated');
    }
    const adjEl = document.getElementById('sipItalianCount');
    if (adjEl) adjEl.textContent = state.italianSips + (state.italianSips === 1 ? ' sip' : ' sips');
  }
  if (who === 'irish' || who === 'both') {
    state.irishSips = Math.max(0, state.irishSips + amount);
    const el = document.getElementById('irishSips');
    if (el) {
      el.textContent = state.irishSips + (state.irishSips === 1 ? ' sip' : ' sips');
      el.classList.remove('updated');
      void el.offsetWidth;
      el.classList.add('updated');
    }
    const adjEl = document.getElementById('sipIrishCount');
    if (adjEl) adjEl.textContent = state.irishSips + (state.irishSips === 1 ? ' sip' : ' sips');
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
// TURN INDICATOR
// ============================================================
function updateTurnIndicator() {
  const indicator = document.getElementById('turnIndicator');
  const turnEmoji = document.getElementById('turnEmoji');
  const turnName = document.getElementById('turnName');
  if (!indicator) return;

  if (state.roundMode === 'turns') {
    indicator.classList.remove('hidden', 'italian', 'irish');
    if (state.activeTurn === 'italian') {
      indicator.classList.add('italian');
      if (turnEmoji) turnEmoji.textContent = '🍷';
      if (turnName) turnName.textContent = state.italianName;
    } else {
      indicator.classList.add('irish');
      if (turnEmoji) turnEmoji.textContent = '🍺';
      if (turnName) turnName.textContent = state.irishName;
    }
  } else {
    indicator.classList.add('hidden');
  }
}

// ============================================================
// TIMER
// ============================================================
let _timerInterval = null;

function stopTimer() {
  if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
  const el = document.getElementById('cardTimer');
  if (el) {
    el.classList.add('hidden');
    el.classList.remove('urgent');
  }
}

function startTimer(seconds) {
  stopTimer();
  const el = document.getElementById('cardTimer');
  const display = document.getElementById('timerDisplay');
  if (!el || !display) return;
  let remaining = seconds;
  display.textContent = remaining;
  el.classList.remove('hidden', 'urgent');
  _timerInterval = setInterval(() => {
    remaining--;
    display.textContent = remaining;
    if (remaining <= 5) el.classList.add('urgent');
    if (remaining <= 0) {
      stopTimer();
      // Flash the drink rule to draw attention
      const dr = document.getElementById('cardDrinkRule');
      if (dr) {
        dr.style.background = 'rgba(255,96,96,0.18)';
        setTimeout(() => { dr.style.background = ''; }, 600);
      }
    }
  }, 1000);
}

// ============================================================
// MINI-GAME ENGINE
// ============================================================

let _mgStareInterval = null;

function showMinigame(card) {
  const overlay = document.getElementById('minigameOverlay');
  // Hide all panels
  ['mg-tap-race','mg-stare','mg-quick-draw'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  overlay.classList.remove('hidden');

  if (card.minigame === 'tap_race') initTapRace(card);
  else if (card.minigame === 'stare') initStare(card);
  else if (card.minigame === 'quick_draw') initQuickDraw(card);
}

function closeMgAndAdvance() {
  document.getElementById('minigameOverlay').classList.add('hidden');
  advanceCard();
}

/* ── TAP RACE ── */
function initTapRace(card) {
  const panel = document.getElementById('mg-tap-race');
  panel.classList.remove('hidden');

  let italianTaps = 0, irishTaps = 0;
  let raceActive = false;
  const RACE_SECS = 5;
  let remaining = RACE_SECS;

  // Update names
  document.getElementById('tapNameItalian').textContent = state.italianName;
  document.getElementById('tapNameIrish').textContent   = state.irishName;
  document.getElementById('tapCountItalian').textContent = '0';
  document.getElementById('tapCountIrish').textContent   = '0';
  document.getElementById('mgTapTimer').textContent = RACE_SECS;
  document.getElementById('mgTapResult').classList.add('hidden');
  document.getElementById('mgTapDone').classList.add('hidden');

  const zoneIt  = document.getElementById('tapZoneItalian');
  const zoneIr  = document.getElementById('tapZoneIrish');
  const timerEl = document.getElementById('mgTapTimer');
  const cntdEl  = document.getElementById('mgTapCountdown');
  const resultEl= document.getElementById('mgTapResult');
  const doneBtn = document.getElementById('mgTapDone');

  zoneIt.disabled = true;
  zoneIr.disabled = true;

  // Countdown 3 2 1 GO
  let count = 3;
  cntdEl.textContent = count;
  cntdEl.classList.remove('hidden');

  const cntdInterval = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(cntdInterval);
      cntdEl.textContent = 'GO!';
      setTimeout(() => {
        cntdEl.classList.add('hidden');
        zoneIt.disabled = false;
        zoneIr.disabled = false;
        raceActive = true;

        const raceInterval = setInterval(() => {
          remaining--;
          timerEl.textContent = remaining;
          if (remaining <= 0) {
            clearInterval(raceInterval);
            raceActive = false;
            zoneIt.disabled = true;
            zoneIr.disabled = true;
            // Result
            let msg, loser;
            if (italianTaps > irishTaps) {
              loser = 'irish';
              msg = `${state.italianName} wins! ${italianTaps} vs ${irishTaps} taps — ${state.irishName} drinks ${card.loser_drinks || 2} sips! 🍺`;
            } else if (irishTaps > italianTaps) {
              loser = 'italian';
              msg = `${state.irishName} wins! ${irishTaps} vs ${italianTaps} taps — ${state.italianName} drinks ${card.loser_drinks || 2} sips! 🍷`;
            } else {
              loser = 'both';
              msg = `Dead tie — ${italianTaps} taps each! Both drink ${card.loser_drinks || 2} sips!`;
            }
            updateSips(loser, card.loser_drinks || 2);
            resultEl.textContent = msg;
            resultEl.classList.remove('hidden');
            doneBtn.classList.remove('hidden');
          }
        }, 1000);
      }, 600);
    } else {
      cntdEl.textContent = count;
      // trigger re-animation
      cntdEl.style.animation = 'none';
      void cntdEl.offsetWidth;
      cntdEl.style.animation = '';
    }
  }, 900);

  zoneIt.onclick = () => {
    if (!raceActive) return;
    italianTaps++;
    document.getElementById('tapCountItalian').textContent = italianTaps;
  };
  zoneIr.onclick = () => {
    if (!raceActive) return;
    irishTaps++;
    document.getElementById('tapCountIrish').textContent = irishTaps;
  };

  doneBtn.onclick = closeMgAndAdvance;
}

/* ── STARE CONTEST ── */
function initStare(card) {
  const panel = document.getElementById('mg-stare');
  panel.classList.remove('hidden');

  document.getElementById('stareNameItalian').textContent = state.italianName;
  document.getElementById('stareNameIrish').textContent   = state.irishName;
  document.getElementById('mgStareTimer').textContent = '0.0s';
  document.getElementById('mgStareResult').classList.add('hidden');
  document.getElementById('mgStareDone').classList.add('hidden');

  const btnIt   = document.getElementById('stareItalian');
  const btnIr   = document.getElementById('stareIrish');
  const timerEl = document.getElementById('mgStareTimer');
  const resultEl= document.getElementById('mgStareResult');
  const doneBtn = document.getElementById('mgStareDone');

  let elapsed = 0;
  let firstPress = null;
  let done = false;

  btnIt.disabled = false;
  btnIr.disabled = false;

  if (_mgStareInterval) clearInterval(_mgStareInterval);
  _mgStareInterval = setInterval(() => {
    elapsed += 100;
    timerEl.textContent = (elapsed / 1000).toFixed(1) + 's';
  }, 100);

  function pressedBy(who) {
    if (done) return;
    if (!firstPress) {
      firstPress = who;
      btnIt.disabled = true;
      btnIr.disabled = true;
      // wait 400ms for simultaneous tap
      setTimeout(() => {
        clearInterval(_mgStareInterval);
        done = true;
        const drinkAmt = card.loser_drinks || 2;
        let msg;
        if (firstPress === 'italian') {
          updateSips('italian', drinkAmt);
          msg = `${state.italianName} looked away first — drinks ${drinkAmt} sips! They lasted ${(elapsed/1000).toFixed(1)}s 😂`;
        } else {
          updateSips('irish', drinkAmt);
          msg = `${state.irishName} looked away first — drinks ${drinkAmt} sips! They lasted ${(elapsed/1000).toFixed(1)}s 😂`;
        }
        resultEl.textContent = msg;
        resultEl.classList.remove('hidden');
        doneBtn.classList.remove('hidden');
      }, 400);
    } else {
      // second tap within 400ms = both drink
      clearInterval(_mgStareInterval);
      done = true;
      const drinkAmt = card.loser_drinks || 2;
      updateSips('both', drinkAmt);
      const msg = `Simultaneous blink! You both looked away — both drink ${drinkAmt} sips! 👀`;
      resultEl.textContent = msg;
      resultEl.classList.remove('hidden');
      doneBtn.classList.remove('hidden');
    }
  }

  btnIt.onclick = () => pressedBy('italian');
  btnIr.onclick = () => pressedBy('irish');
  doneBtn.onclick = () => { clearInterval(_mgStareInterval); closeMgAndAdvance(); };
}

/* ── QUICK DRAW ── */
function initQuickDraw(card) {
  const panel = document.getElementById('mg-quick-draw');
  panel.classList.remove('hidden');

  const drawZone  = document.getElementById('mgDrawZone');
  const subEl     = document.getElementById('mgDrawSub');
  const resultEl  = document.getElementById('mgDrawResult');
  const doneBtn   = document.getElementById('mgDrawDone');

  resultEl.classList.add('hidden');
  doneBtn.classList.add('hidden');
  drawZone.classList.remove('active');
  subEl.textContent = 'Hands ready! Tap your side the moment you see DRAW! 🔫';

  let phase = 'waiting'; // 'waiting' | 'ready' | 'done'
  let firstTapper  = null;
  let firstTapTime = null;

  // Replace drawZone contents with two half zones
  drawZone.innerHTML = `
    <button class="draw-half draw-half-italian" id="drawHalfItalian" disabled>
      <span>🍷 ${state.italianName}</span>
    </button>
    <div class="draw-signal-center hidden" id="drawSignalCenter">DRAW! 🔫</div>
    <button class="draw-half draw-half-irish" id="drawHalfIrish" disabled>
      <span>🍺 ${state.irishName}</span>
    </button>
  `;

  const halfIt = document.getElementById('drawHalfItalian');
  const halfIr = document.getElementById('drawHalfIrish');
  const centerSignal = document.getElementById('drawSignalCenter');

  let tapDone = false;

  const delay = 3000 + Math.random() * 4000;
  const goTimeout = setTimeout(() => {
    phase = 'ready';
    centerSignal.classList.remove('hidden');
    drawZone.classList.add('active');
    halfIt.disabled = false;
    halfIr.disabled = false;
    firstTapTime = Date.now();
  }, delay);

  function playerTapped(who) {
    if (phase !== 'ready' || tapDone) return;
    if (!firstTapper) {
      firstTapper = who;
      // wait 200ms for simultaneous
      setTimeout(() => {
        if (tapDone) return;
        tapDone = true;
        halfIt.disabled = true;
        halfIr.disabled = true;
        const drinkAmt = card.loser_drinks || 2;
        let msg, loser;
        if (firstTapper === 'italian') {
          loser = 'irish';
          msg = `${state.italianName} was faster! ${state.irishName} drinks ${drinkAmt} sips! ⚡`;
        } else {
          loser = 'italian';
          msg = `${state.irishName} was faster! ${state.italianName} drinks ${drinkAmt} sips! ⚡`;
        }
        updateSips(loser, drinkAmt);
        resultEl.textContent = msg;
        resultEl.classList.remove('hidden');
        doneBtn.classList.remove('hidden');
      }, 200);
    } else {
      // second tap within 200ms = photo finish
      tapDone = true;
      halfIt.disabled = true;
      halfIr.disabled = true;
      updateSips('both', 1);
      resultEl.textContent = `Photo finish! Basically simultaneous — both drink 1 sip! 😅`;
      resultEl.classList.remove('hidden');
      doneBtn.classList.remove('hidden');
    }
  }

  // False start detection
  halfIt.addEventListener('mousedown', () => {
    if (phase === 'waiting') {
      clearTimeout(goTimeout);
      tapDone = true;
      phase = 'done';
      updateSips('italian', 1);
      resultEl.textContent = `${state.italianName} false-started! Drinks 1 sip.`;
      resultEl.classList.remove('hidden');
      doneBtn.classList.remove('hidden');
    } else playerTapped('italian');
  });
  halfIr.addEventListener('mousedown', () => {
    if (phase === 'waiting') {
      clearTimeout(goTimeout);
      tapDone = true;
      phase = 'done';
      updateSips('irish', 1);
      resultEl.textContent = `${state.irishName} false-started! Drinks 1 sip.`;
      resultEl.classList.remove('hidden');
      doneBtn.classList.remove('hidden');
    } else playerTapped('irish');
  });
  halfIt.addEventListener('touchstart', (e) => { e.preventDefault(); halfIt.dispatchEvent(new MouseEvent('mousedown')); }, { passive: false });
  halfIr.addEventListener('touchstart', (e) => { e.preventDefault(); halfIr.dispatchEvent(new MouseEvent('mousedown')); }, { passive: false });

  doneBtn.onclick = closeMgAndAdvance;
}

// ============================================================
// CARD RENDERING
// ============================================================
function renderCard(card) {
  const cardEl  = document.getElementById('gameCard');
  const catEl   = document.getElementById('cardCategory');
  const textEl  = document.getElementById('cardText');
  const targetEl= document.getElementById('cardTarget');
  const cfg = CAT_CONFIG[card.type] || CAT_CONFIG.truth;

  catEl.textContent = cfg.label;
  catEl.style.background  = cfg.catBg;
  catEl.style.color       = cfg.catColor;
  catEl.style.borderColor = cfg.catBorder;

  textEl.textContent = personalize(card.text);

  if (card.target === 'italian') {
    targetEl.textContent = `👉 ${state.italianName}'s turn`;
  } else if (card.target === 'irish') {
    targetEl.textContent = `👉 ${state.irishName}'s turn`;
  } else if (card.target === 'both') {
    targetEl.textContent = '👫 Both players';
  } else {
    targetEl.textContent = '';
  }

  // Drink rule callout
  const drinkRuleEl = document.getElementById('cardDrinkRule');
  if (drinkRuleEl) {
    if (card.drinkRule) {
      drinkRuleEl.textContent = '🍸 ' + personalize(card.drinkRule);
      drinkRuleEl.classList.remove('hidden');
    } else {
      drinkRuleEl.classList.add('hidden');
    }
  }

  cardEl.style.setProperty('--card-glow-color', cfg.glowColor);
  cardEl.style.setProperty('--card-accent', cfg.catColor);
  cardEl.style.borderColor = cfg.catBorder;
}

function dealNextCard() {
  const zone = getZone(state.round);
  state.zone = zone;

  const poolMap = { warmup: CARDS.warmup, spicy: CARDS.spicy, extreme: CARDS.extreme };
  const usedMap = { warmup: state.usedWarmup, spicy: state.usedSpicy, extreme: state.usedExtreme };
  const pool = poolMap[zone];
  const used = usedMap[zone];

  const { card, idx } = pickCard(pool, used);
  used.push(idx);
  state.currentCard = card;
  state.advancing = false;

  // Reset vote state
  state.voteState = { italianVoted: false, irishVoted: false, italianChoice: null, irishChoice: null };
  const voteResult = document.getElementById('voteResult');
  if (voteResult) {
    voteResult.classList.add('hidden');
    voteResult.textContent = '';
  }
  document.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('selected-italian', 'selected-irish'));

  renderCard(card);
  updateTurnIndicator();

  // Show correct action area
  if (card.type === 'vote') {
    document.getElementById('voteArea').classList.remove('hidden');
    document.getElementById('votePrompt').textContent = card.prompt || 'Who do you vote for?';
    document.getElementById('normalActions').classList.add('hidden');
    document.getElementById('sipAdjusterPanel').classList.add('hidden');
  } else if (card.sipsOpen) {
    document.getElementById('voteArea').classList.add('hidden');
    document.getElementById('normalActions').classList.remove('hidden');
    document.getElementById('drinkBtn').classList.add('hidden');
    document.getElementById('sipAdjusterPanel').classList.remove('hidden');
  } else {
    document.getElementById('voteArea').classList.add('hidden');
    document.getElementById('normalActions').classList.remove('hidden');
    document.getElementById('drinkBtn').classList.remove('hidden');
    document.getElementById('sipAdjusterPanel').classList.add('hidden');
  }

  // Timer
  stopTimer();
  if (card.timer) startTimer(card.timer);

  // Dealing animation
  const gameCard = document.getElementById('gameCard');
  gameCard.classList.remove('dealing', 'leaving');
  void gameCard.offsetWidth;
  gameCard.classList.add('dealing');
  gameCard.addEventListener('animationend', () => gameCard.classList.remove('dealing'), { once: true });

  // If card has a minigame, show overlay a beat after deal
  if (card.minigame) {
    setTimeout(() => showMinigame(card), 800);
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
    const drinkAmount = state.currentCard.loser_drinks || 1;
    const resultEl = document.getElementById('voteResult');
    resultEl.classList.remove('hidden');

    if (vs.italianChoice === vs.irishChoice) {
      const loser = vs.italianChoice;
      const loserName = loser === 'italian' ? state.italianName : state.irishName;
      resultEl.textContent = `Both agree: ${loserName} drinks ${drinkAmount} sip${drinkAmount > 1 ? 's' : ''}! 🎯`;
      updateSips(loser, drinkAmount);
    } else {
      resultEl.textContent = `Divided verdict! Everyone drinks 1 sip 🤷`;
      updateSips('both', 1);
    }

    setTimeout(() => advanceCard(), 2000);
  }
}

// ============================================================
// ZONE TRANSITIONS
// ============================================================
function showZoneTransition(fromZone, toZone, onContinue) {
  const overlay = document.getElementById('roundTransition');
  const content = document.getElementById('transitionContent');
  const emojiEl = document.getElementById('transitionEmoji');
  const textEl  = document.getElementById('transitionText');
  const subEl   = document.getElementById('transitionSub');

  overlay.classList.remove('transition-spicy', 'transition-extreme');

  const spiceTag = { mild: '🌿 Mild', hot: '🌶️ Hot', inferno: '🔥 Inferno' }[state.spiceLevel] || '';

  if (toZone === 'spicy') {
    overlay.classList.add('transition-spicy');
    emojiEl.textContent = '🌶️';
    textEl.textContent  = 'SPICY ZONE';
    subEl.textContent   = `Round ${state.round} — gloves off. It gets personal from here. [${spiceTag}]`;
  } else if (toZone === 'extreme') {
    overlay.classList.add('transition-extreme');
    const infernoCopy = state.spiceLevel === 'inferno'
      ? '🔥 INFERNO MODE ACTIVE. No filter, no mercy, no regrets.'
      : state.spiceLevel === 'hot'
      ? '🌋 Hot mode — things are about to get genuinely uncomfortable. In a good way.'
      : '🌿 Mild Extreme — still spicy, just not unhinged.';
    emojiEl.textContent = state.spiceLevel === 'inferno' ? '🔥🌋🔥' : '🔥';
    textEl.textContent  = 'EXTREME ZONE';
    subEl.textContent   = infernoCopy;
  }

  overlay.classList.remove('hidden');

  // Store the onContinue callback for the continue button
  overlay._onContinue = onContinue;
}

// ============================================================
// ROUND PROGRESSION
// ============================================================
function advanceCard() {
  if (state.advancing) return;
  state.advancing = true;

  stopTimer();

  const gameCard = document.getElementById('gameCard');
  gameCard.classList.add('leaving');

  setTimeout(() => {
    const prevZone = state.zone;
    state.round++;

    // Update progress bar & round number
    const pct = ((state.round - 1) / state.totalRounds) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('roundNum').textContent = state.round;

    // In turns mode, alternate the active turn
    if (state.roundMode === 'turns') {
      state.activeTurn = state.activeTurn === 'italian' ? 'irish' : 'italian';
    }

    // Check for game over first
    if (state.round > state.totalRounds) {
      endGame();
      return;
    }

    const newZone = getZone(state.round);

    // Zone badge update
    updateZoneBadge(newZone);

    // Zone transition checks
    if (prevZone === 'warmup' && newZone === 'spicy') {
      showZoneTransition('warmup', 'spicy', () => {
        document.getElementById('roundTransition').classList.add('hidden');
        dealNextCard();
      });
      return;
    }

    if (prevZone === 'spicy' && newZone === 'extreme') {
      showZoneTransition('spicy', 'extreme', () => {
        document.getElementById('roundTransition').classList.add('hidden');
        dealNextCard();
      });
      return;
    }

    dealNextCard();
  }, 300);
}

function updateZoneBadge(zone) {
  const badge = document.getElementById('zoneBadge');
  badge.classList.remove('spicy', 'zone-extreme');
  if (zone === 'warmup') {
    badge.textContent = 'Warm-Up 🌱';
  } else if (zone === 'spicy') {
    badge.textContent = 'Spicy Zone 🌶️';
    badge.classList.add('spicy');
  } else {
    badge.textContent = 'Extreme 🔥';
    badge.classList.add('zone-extreme');
  }
}

// ============================================================
// GAME END
// ============================================================
function endGame() {
  document.getElementById('endItalianName').textContent = state.italianName;
  document.getElementById('endIrishName').textContent   = state.irishName;
  document.getElementById('endItalianSips').textContent = state.italianSips + (state.italianSips === 1 ? ' sip' : ' sips');
  document.getElementById('endIrishSips').textContent   = state.irishSips + (state.irishSips === 1 ? ' sip' : ' sips');

  const italianCard = document.getElementById('endItalian');
  const irishCard   = document.getElementById('endIrish');
  italianCard.classList.remove('winner');
  irishCard.classList.remove('winner');

  const msgs = [
    `The night's barely started, but the scoreboard says otherwise.`,
    `The real winner? Whoever planned this date.`,
    `From Rome to Dublin, this one's a story to tell.`,
    `One night, two cultures, zero regrets.`,
    `Mamma mia… what a night.`,
    `"I will yeah" — but you actually did. Legends.`,
    `That's giving… unforgettable. Understood the assignment.`,
  ];

  if (state.italianSips < state.irishSips) {
    document.getElementById('winnerText').textContent = `${state.italianName} played it cool 🏆`;
    italianCard.classList.add('winner');
  } else if (state.irishSips < state.italianSips) {
    document.getElementById('winnerText').textContent = `${state.irishName} held their ground 🏆`;
    irishCard.classList.add('winner');
  } else {
    document.getElementById('winnerText').textContent = `Dead heat — perfectly balanced 🤝`;
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
  state.zone = 'warmup';
  state.activeTurn = 'italian';
  state.usedWarmup  = [];
  state.usedSpicy   = [];
  state.usedExtreme = [];
  state.advancing = false;

  document.getElementById('voteItalianName').textContent = state.italianName;
  document.getElementById('voteIrishName').textContent   = state.irishName;
  document.getElementById('italianScoreName').textContent = state.italianName;
  document.getElementById('irishScoreName').textContent   = state.irishName;
  // sip adjuster panel name labels
  const sipItName = document.getElementById('sipItalianName');
  const sipIrName = document.getElementById('sipIrishName');
  if (sipItName) sipItName.textContent = state.italianName;
  if (sipIrName) sipIrName.textContent = state.irishName;

  document.getElementById('italianSips').textContent = '0 sips';
  document.getElementById('irishSips').textContent   = '0 sips';
  document.getElementById('roundNum').textContent    = '1';
  document.getElementById('totalRoundsDisplay').textContent = '/ ' + state.totalRounds;
  document.getElementById('progressBar').style.width = '0%';
  updateZoneBadge('warmup');

  dealNextCard();
}

// ============================================================
// READ SETTINGS FROM SPLASH UI
// ============================================================
function readSettings() {
  const totalRoundsEl = document.getElementById('settingTotalRounds');
  const warmupEndEl   = document.getElementById('settingWarmupEnd');
  const spicyEndEl    = document.getElementById('settingSpicyEnd');
  const modeSharedEl  = document.getElementById('modeShared');

  if (totalRoundsEl) state.totalRounds = parseInt(totalRoundsEl.value, 10) || 12;
  if (warmupEndEl)   state.warmupEnd   = parseInt(warmupEndEl.value, 10)   || 4;
  if (spicyEndEl)    state.spicyEnd    = parseInt(spicyEndEl.value, 10)    || 9;

  // Clamp values to stay consistent
  state.warmupEnd = Math.min(state.warmupEnd, state.spicyEnd - 1);
  state.spicyEnd  = Math.min(state.spicyEnd, state.totalRounds - 1);

  const roundModeEl = document.querySelector('.mode-pill:not(.spice-pill).active');
  state.roundMode = roundModeEl ? roundModeEl.dataset.mode : 'shared';

  const spicePillEl = document.querySelector('.spice-pill.active');
  state.spiceLevel = spicePillEl ? spicePillEl.dataset.spice : 'hot';
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // ── SETTINGS DRAWER TOGGLE ────────────────────────────────
  const settingsToggle = document.getElementById('settingsToggle');
  const settingsDrawer = document.getElementById('settingsDrawer');
  if (settingsToggle && settingsDrawer) {
    settingsToggle.addEventListener('click', () => {
      const isOpen = settingsDrawer.classList.toggle('open');
      settingsToggle.setAttribute('aria-expanded', String(isOpen));
      settingsDrawer.setAttribute('aria-hidden', String(!isOpen));
    });
  }

  // ── ROUND MODE PILLS ──────────────────────────────────────
  document.querySelectorAll('.mode-pill:not(.spice-pill)').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.mode-pill:not(.spice-pill)').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // ── SPICE LEVEL PILLS ─────────────────────────────────────
  document.querySelectorAll('.spice-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.spice-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // ── SLIDER LABELS ─────────────────────────────────────────
  const totalRoundsSlider = document.getElementById('settingTotalRounds');
  const warmupEndSlider   = document.getElementById('settingWarmupEnd');
  const spicyEndSlider    = document.getElementById('settingSpicyEnd');

  if (totalRoundsSlider) {
    totalRoundsSlider.addEventListener('input', () => {
      document.getElementById('totalRoundsLabel').textContent = totalRoundsSlider.value;
      // Ensure spicy end doesn't exceed total rounds
      if (spicyEndSlider && parseInt(spicyEndSlider.value) >= parseInt(totalRoundsSlider.value)) {
        spicyEndSlider.value = parseInt(totalRoundsSlider.value) - 1;
        document.getElementById('spicyEndLabel').textContent = spicyEndSlider.value;
      }
    });
  }
  if (warmupEndSlider) {
    warmupEndSlider.addEventListener('input', () => {
      document.getElementById('warmupEndLabel').textContent = warmupEndSlider.value;
      // Ensure warm-up end is less than spicy end
      if (spicyEndSlider && parseInt(warmupEndSlider.value) >= parseInt(spicyEndSlider.value)) {
        spicyEndSlider.value = parseInt(warmupEndSlider.value) + 1;
        document.getElementById('spicyEndLabel').textContent = spicyEndSlider.value;
      }
    });
  }
  if (spicyEndSlider) {
    spicyEndSlider.addEventListener('input', () => {
      document.getElementById('spicyEndLabel').textContent = spicyEndSlider.value;
      if (warmupEndSlider && parseInt(spicyEndSlider.value) <= parseInt(warmupEndSlider.value)) {
        warmupEndSlider.value = parseInt(spicyEndSlider.value) - 1;
        document.getElementById('warmupEndLabel').textContent = warmupEndSlider.value;
      }
      if (totalRoundsSlider && parseInt(spicyEndSlider.value) >= parseInt(totalRoundsSlider.value)) {
        totalRoundsSlider.value = parseInt(spicyEndSlider.value) + 1;
        document.getElementById('totalRoundsLabel').textContent = totalRoundsSlider.value;
      }
    });
  }

  // ── START BUTTON (splash → rules) ─────────────────────────
  document.getElementById('startBtn').addEventListener('click', () => {
    const it = document.getElementById('italianName').value.trim();
    const ir = document.getElementById('irishName').value.trim();
    state.italianName = it || 'Romeo';
    state.irishName   = ir || 'Aoife';
    showScreen('rulesScreen');
  });

  // ── BEGIN (rules → game) ──────────────────────────────────
  document.getElementById('beginBtn').addEventListener('click', () => {
    readSettings();
    showScreen('gameScreen');
    resetGame();
  });

  // ── NEXT CARD ─────────────────────────────────────────────
  document.getElementById('nextBtn').addEventListener('click', () => advanceCard());

  // ── CHICKEN OUT ───────────────────────────────────────────
  document.getElementById('drinkBtn').addEventListener('click', () => {
    updateSips('both', 2);
    document.getElementById('drinkBtn').classList.add('hidden');
  });

  // ── SCOREBOARD SIP BUTTONS ────────────────────────────────
  document.getElementById('italianPlus').addEventListener('click', () => updateSips('italian', 1));
  document.getElementById('italianMinus').addEventListener('click', () => updateSips('italian', -1));
  document.getElementById('irishPlus').addEventListener('click', () => updateSips('irish', 1));
  document.getElementById('irishMinus').addEventListener('click', () => updateSips('irish', -1));

  // ── SIP ADJUSTER PANEL (sipsOpen cards) — delegate ─────────
  const sipPanel = document.getElementById('sipAdjusterPanel');
  if (sipPanel) {
    sipPanel.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-who]');
      if (!btn) return;
      const who = btn.dataset.who;
      const dir = parseInt(btn.dataset.dir, 10);
      updateSips(who, dir);
    });
  }

  // ── VOTE BUTTONS ──────────────────────────────────────────
  document.getElementById('voteItalian').addEventListener('click', () => {
    if (state.voteState.italianVoted && state.voteState.irishVoted) return;
    if (!state.voteState.italianVoted) handleVote('italian', 'italian');
    else if (!state.voteState.irishVoted) handleVote('irish', 'italian');
  });
  document.getElementById('voteIrish').addEventListener('click', () => {
    if (state.voteState.italianVoted && state.voteState.irishVoted) return;
    if (!state.voteState.italianVoted) handleVote('italian', 'irish');
    else if (!state.voteState.irishVoted) handleVote('irish', 'irish');
  });

  // ── ZONE TRANSITION CONTINUE ──────────────────────────────
  document.getElementById('continueBtn').addEventListener('click', () => {
    const overlay = document.getElementById('roundTransition');
    if (overlay._onContinue) overlay._onContinue();
  });

  // ── PLAY AGAIN ────────────────────────────────────────────
  document.getElementById('playAgainBtn').addEventListener('click', () => {
    showScreen('splash');
  });

  // ── IN-GAME MENU ──────────────────────────────────────────
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

  // Click outside settings overlay
  document.getElementById('settingsOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('settingsOverlay')) {
      document.getElementById('settingsOverlay').classList.add('hidden');
    }
  });

  // ── KEYBOARD SHORTCUTS ────────────────────────────────────
  document.getElementById('irishName').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('startBtn').click();
  });
  document.getElementById('italianName').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('irishName').focus();
  });

  // ── TOUCH FEEDBACK ────────────────────────────────────────
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.addEventListener('touchstart', () => { nextBtn.style.transform = 'scale(0.97)'; }, { passive: true });
  nextBtn.addEventListener('touchend',   () => { nextBtn.style.transform = ''; },            { passive: true });
});
