/* ===== AMORE & GUINNESS — GAME LOGIC ===== */
// Card database: ~150 cards across warmup / spicy / extreme
// Players born ~1997-1998 | Cultural refs: Italian + Irish + chronically online 28yo energy

// ============================================================
// CARD DATABASE
// ============================================================
const CARDS = {

  // ── WARM-UP (rounds 1→warmupEnd) ─────────────────────────
  warmup: [

    // CHALLENGES
    {
      type: 'challenge',
      text: 'Do your best Italian hand gesture to express "I have absolutely no idea what you\'re talking about." If {irish} can\'t guess it — they drink.',
      target: 'italian',
      drinkRule: 'Wrong guess? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Say "ah sure look, it\'ll be grand" with full conviction. {italian} judges on a scale of 1–10. Under 6? Drink.',
      target: 'irish',
      drinkRule: 'Under 6/10? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Order a Negroni sbagliato in Italian. One butchered pronunciation = 1 sip. {italian} is the judge.',
      target: 'irish',
      drinkRule: 'Adjust sips using the buttons below.',
      sipsOpen: true,
    },
    {
      type: 'challenge',
      text: 'Both players: name 3 pasta shapes in 10 seconds, no repeats. First to blank drinks.',
      target: 'both',
      timer: 10,
      drinkRule: 'First to blank takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Hum the first 4 bars of the Italian national anthem. {irish} must stand to attention. Fail? Drink.',
      target: 'italian',
      drinkRule: 'Fail the hum? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Explain to {italian} what a Centra meal deal is and why it changed lives. If they\'re still confused — you drink.',
      target: 'irish',
      drinkRule: 'Still confused? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Sip your drink and hold eye contact for 5 full seconds. First to look away drinks.',
      target: 'both',
      timer: 10,
      drinkRule: 'First to look away takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Name 5 European capitals in 10 seconds. Drink 1 sip for each one missed.',
      target: 'both',
      timer: 10,
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'challenge',
      text: 'In the most convincing Irish mammy voice you have, say: "I\'m not angry, I\'m just disappointed." {irish} rates it out of 10. Under 6? Drink.',
      target: 'italian',
      drinkRule: 'Under 6/10? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Describe "dolce far niente" to {irish} without using the word "relax". 30 seconds. Fail? Drink.',
      target: 'italian',
      timer: 30,
      drinkRule: 'Fail? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Recreate your most iconic Bebo profile photo pose. Right now. Other player scores it. Under 5? Drink.',
      target: 'both',
      drinkRule: 'Under 5/10? That player takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Quote one MSN Messenger away message you actually used. "Linkin Park lyrics" counts. Fail? Drink 2.',
      target: 'both',
      drinkRule: 'Can\'t remember one? Take 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Both players name a song from FIFA 06 soundtrack simultaneously. Match? Both skip a sip. No match? Both drink.',
      target: 'both',
      drinkRule: 'No match? Both take 1 sip.',
    },
    {
      type: 'challenge',
      text: 'Explain the Distracted Boyfriend meme to someone who\'s never seen the internet. 20 seconds. {italian} judges whether the description lands.',
      target: 'irish',
      timer: 20,
      drinkRule: 'Doesn\'t land? {irish} takes 2 sips.',
    },

    // TRUTHS
    {
      type: 'truth',
      text: 'What\'s the most embarrassing thing you\'ve Googled in the last week? Full honesty or drink 3.',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: '{italian}: What Italian stereotype about yourself is 100% accurate? Own it or drink.',
      target: 'italian',
      drinkRule: 'Won\'t own it? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: What Irish stereotype about yourself is embarrassingly true? "Yeah the tea thing" is a valid answer but you still have to confirm it.',
      target: 'irish',
      drinkRule: 'Won\'t confirm it? {irish} takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'What was your celebrity crush at age 12? The cringe rating determines who drinks.',
      target: 'both',
      drinkRule: 'Most cringe answer takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'Confess: what\'s on your Spotify Wrapped that you\'d never admit to in public? Answer honestly or drink 3.',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'Be honest — what\'s your go-to excuse when you cancel plans? Extra drink if you\'ve used it this week.',
      target: 'both',
      drinkRule: 'Used it this week? Take 1 extra sip.',
    },
    {
      type: 'truth',
      text: '{irish}: Is a Tayto crisp sandwich objectively good? {italian} must listen with an open mind and cannot interrupt.',
      target: 'irish',
      drinkRule: 'No sips — just honest advocacy.',
    },
    {
      type: 'truth',
      text: '{italian}: Have you ever pretended to be Spanish to avoid explaining Italy to someone? Judgment-free zone.',
      target: 'italian',
      drinkRule: 'Refuse to answer? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'What emo / scene / Tumblr-girl / skater phase did you go through in secondary school that you\'re quietly grateful you outgrew?',
      target: 'both',
      drinkRule: 'No sips — but own it completely.',
    },
    {
      type: 'truth',
      text: 'Did you have a Habbo Hotel account? What was your username? No username — drink 1 as punishment for a deprived childhood.',
      target: 'both',
      drinkRule: 'No account? Take 1 sip for the loss.',
    },
    {
      type: 'truth',
      text: 'What\'s the most ridiculous thing you downloaded on Limewire? Admit it.',
      target: 'both',
      drinkRule: 'Refuse to admit it? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s a show you secretly binge-watched and told nobody about? Points for the more chaotic confession.',
      target: 'both',
      drinkRule: 'Most embarrassing confession skips a sip.',
    },
    {
      type: 'truth',
      text: 'Be honest: do you actually like Guinness, or is it just an identity choice at this point?',
      target: 'both',
      drinkRule: 'No sips — just pure honesty required.',
    },
    {
      type: 'truth',
      text: 'What\'s a food your mum made growing up that you know is deeply unglamorous but would still eat right now?',
      target: 'both',
      drinkRule: 'No sips — this is a comfort food vibe check.',
    },

    // VOTES
    {
      type: 'vote',
      text: 'Who would survive longer on a desert island?',
      prompt: 'Who would survive longer on a desert island?',
      loser_drinks: 1,
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
      text: 'Who spends more time getting ready?',
      prompt: 'Who takes longer to get ready?',
      loser_drinks: 1,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would win MasterChef, home-country advantage allowed?',
      prompt: 'Who wins MasterChef (home-country rules)?',
      loser_drinks: 1,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who\'s more likely to accidentally start a diplomatic incident abroad?',
      prompt: 'More likely to cause an international incident?',
      loser_drinks: 1,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who talks to strangers more easily?',
      prompt: 'Talks to strangers more easily?',
      loser_drinks: 1,
      target: 'both',
    },

    // COUPLE
    {
      type: 'couple',
      text: 'Each teach the other one phrase from your language that you\'d only use at home. Pronunciation matters. Mock each other freely.',
      target: 'both',
      drinkRule: 'No sips — just do it together.',
    },
    {
      type: 'couple',
      text: 'Quick debate: Pizza vs. fish & chips. 90 seconds each. Most convincing argument wins a sip-skip.',
      target: 'both',
      timer: 30,
      drinkRule: 'Least convincing argument? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Both close your eyes and simultaneously shout one 2000s pop song. Same song? Both skip a sip. Different song? You both drink.',
      target: 'both',
      drinkRule: 'Different songs? Both take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Spend 30 seconds complimenting each other, non-physical things only. First one to laugh nervously or go awkwardly vague drinks.',
      target: 'both',
      timer: 30,
      drinkRule: 'First to crack or go vague takes 1 sip.',
    },
    {
      type: 'couple',
      text: 'Take turns describing your perfect Sunday morning in your home country. Most vivid description skips their next drink.',
      target: 'both',
      drinkRule: 'Less vivid description? Take 1 sip.',
    },

    // NOSTALGIA
    {
      type: 'nostalgia',
      text: 'Name the first console you played on. If it was a PlayStation 2, you both drink in solidarity.',
      target: 'both',
      drinkRule: 'PS2 players? Both take 1 sip in solidarity.',
    },
    {
      type: 'nostalgia',
      text: 'What was your MSN Messenger status in 2008? "xXx broken_wings xXx" and Yellowcard lyrics are both valid. Confess.',
      target: 'both',
      drinkRule: 'Cringe status? Take 1 sip and own it.',
    },
    {
      type: 'nostalgia',
      text: 'Who was your early YouTube icon? Charlie Bit My Finger, Chocolate Rain, Fred Figglehorn? Tell the story.',
      target: 'both',
      drinkRule: 'No sips — just nostalgia.',
    },
    {
      type: 'nostalgia',
      text: 'What was the stupidest thing you bought with your Leaving Cert / Maturità money? First to answer drinks if it was dumber than the other\'s.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'nostalgia',
      text: 'Hannah Montana, High School Musical, or Lizzie McGuire? One shaped your childhood. Own it.',
      target: 'both',
      drinkRule: 'No sips — but own it.',
    },
    {
      type: 'nostalgia',
      text: 'Name a childhood comfort food that means nothing to the other person\'s culture. They drink if they\'ve never heard of it.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'nostalgia',
      text: 'Recreate your school photo pose circa age 11. Both do it simultaneously. No prep.',
      target: 'both',
      drinkRule: 'No sips — just the pure cringe.',
    },

    // WILD
    {
      type: 'wild',
      text: 'NPC mode for 30 seconds — both players must respond to everything said as if you\'re a background NPC in a video game. First one to break character drinks.',
      target: 'both',
      timer: 30,
      drinkRule: 'First to break character takes 2 sips.',
    },
    {
      type: 'wild',
      text: 'You both have main character energy right now. Narrate the last 60 seconds of this evening as if it\'s a movie voiceover. Who does it better? Loser drinks.',
      target: 'both',
      timer: 60,
      drinkRule: 'Worse voiceover? Take 2 sips.',
    },
    {
      type: 'nostalgia',
      text: 'Did you have a MySpace? What was in your Top 8? Anyone get hurt over that list? Be honest.',
      target: 'both',
      drinkRule: 'No sips — but own any drama you caused.',
    },
    {
      type: 'challenge',
      text: 'Demonstrate the exact noise your phone made when you got an MSN message notification in 2007. Other player drinks if they recognise it instantly.',
      target: 'both',
      drinkRule: 'Recognised it instantly? Other player takes 1 sip.',
    },
    {
      type: 'truth',
      text: 'What\'s your most controversial food opinion? The other person must not react for a full 5 seconds after hearing it.',
      target: 'both',
      drinkRule: 'React in under 5 seconds? Take 1 sip.',
    },
    {
      type: 'couple',
      text: '{italian} describes their ideal Sunday using only Italian words. {irish} must try to understand from context alone. No translation allowed for 60 seconds.',
      target: 'both',
      timer: 60,
      drinkRule: 'Completely lost? {irish} takes 1 sip.',
    },

    // MINI-GAMES
    { type: 'wild', text: 'TAP RACE! 👆 First to 20 taps wins — loser drinks 2.', target: 'both', drinkRule: 'Loser drinks 2 sips.', minigame: 'tap_race', loser_drinks: 2 },
    { type: 'wild', text: 'STARE CONTEST 👀 First to blink or look away — drinks 2.', target: 'both', drinkRule: 'First to look away drinks 2 sips.', minigame: 'stare', loser_drinks: 2 },
  ],

  // ── SPICY ZONE (rounds warmupEnd+1 → spicyEnd) ───────────
  spicy: [

    // CHALLENGES
    {
      type: 'challenge',
      text: 'Show each other the 7th photo in your camera roll. No deleting beforehand. If it\'s awkward — both drink.',
      target: 'both',
      drinkRule: 'Awkward photo? Both take 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Text your mum right now: "Ti voglio bene" or "Thinking of ya, Ma" depending on nationality. Screenshot or it didn\'t happen.',
      target: 'both',
      drinkRule: 'Don\'t send it? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Compliment {irish} in the most dramatic Italian telenovela style you can manage. Use hands. Use pauses. Use the drama. {irish} must fan themselves if convinced.',
      target: 'italian',
      drinkRule: '{irish} not convinced? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Recreate your most attractive selfie face. Right now. Zero prep. Other player votes "post" or "delete." Delete? Drink 2.',
      target: 'both',
      drinkRule: '"Delete" vote? That player takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Stare at each other in complete silence for 30 seconds. First to smile drinks. First to say anything doubles it.',
      target: 'both',
      timer: 30,
      drinkRule: 'First to smile takes 1 sip. First to speak takes 2.',
    },
    {
      type: 'challenge',
      text: 'Freestyle rap about this evening — minimum 4 lines. Alternate. No rhyme = 1 sip each.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'challenge',
      text: 'Post a BeReal right now — no filter, no repositioning. Whoever takes longest to hit post drinks.',
      target: 'both',
      drinkRule: 'Slowest to post takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'You have 60 seconds to explain the Roman Empire meme to someone who\'s never heard of it. {italian}, you will not be allowed to look smug. {irish} judges how convincing it is.',
      target: 'both',
      timer: 60,
      drinkRule: 'Not convincing? {irish} decides who drinks 2.',
    },
    {
      type: 'challenge',
      text: 'Talk about {irish} for 60 seconds using only compliments. No pausing. No filler. Hesitate? Drink.',
      target: 'italian',
      timer: 60,
      drinkRule: 'Hesitate or pause? {italian} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Talk about {italian} for 60 seconds using only compliments. No pausing. No filler. Hesitate? Drink.',
      target: 'irish',
      timer: 60,
      drinkRule: 'Hesitate or pause? {irish} takes 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Both scroll to your most recent "we need to talk" text or its cultural equivalent. Whoever had it more recently drinks 2.',
      target: 'both',
      drinkRule: 'Most recent "we need to talk"? Take 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Open Duolingo right now. How many days is your streak? Shorter streak? That person drinks. No streak? Drink 3.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'challenge',
      text: 'Both of you: describe tonight so far as a Spotify Wrapped top artist — one artist, and why. The weirder the choice, the better. Loser of the vibe contest drinks.',
      target: 'both',
      drinkRule: 'Lost the vibe contest? Take 2 sips.',
    },

    // TRUTHS
    {
      type: 'truth',
      text: 'What\'s the first thing you noticed about the other person tonight? Real answer or drink 3.',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: '{italian}: What\'s something about Irish culture you actually find really attractive? No diplomatic non-answers.',
      target: 'italian',
      drinkRule: 'Diplomatic non-answer? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: What\'s something about Italian culture that genuinely makes you want to move there? Be specific.',
      target: 'irish',
      drinkRule: 'Not specific enough? {irish} takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s a red flag you\'ve been ignoring about yourself recently? 10 seconds to think, then answer — or drink 3.',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the most unexpected thing you find attractive in the other person right now?',
      target: 'both',
      drinkRule: 'Refuse to answer? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'Describe yourself in a "That\'s giving..." statement. The other person adds the last word.',
      target: 'both',
      drinkRule: 'No sips — this is a vibe check.',
    },
    {
      type: 'truth',
      text: 'What\'s your most irrational dealbreaker in a relationship? The more specific and unhinged, the better.',
      target: 'both',
      drinkRule: 'Too vague or boring? Take 1 sip.',
    },
    {
      type: 'truth',
      text: 'If you could relive one night from your early 20s, which night would it be and who would definitely be there?',
      target: 'both',
      drinkRule: 'No sips — just honesty.',
    },
    {
      type: 'truth',
      text: 'What\'s the boldest thing you\'ve done to impress someone? Did it work?',
      target: 'both',
      drinkRule: 'Didn\'t work? Take 1 sip for the pain.',
    },
    {
      type: 'truth',
      text: 'Describe the other person in 3 words you\'d never say out loud sober. You\'re saying them now.',
      target: 'both',
      drinkRule: 'Refuse to say them? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'When did you last genuinely live in your "villain era" and what had you done?',
      target: 'both',
      drinkRule: 'Dodge the details? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s living in your head rent-free lately? Could be a person, a decision, a text you drafted and deleted.',
      target: 'both',
      drinkRule: 'Refuse to share? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'Be honest — what\'s your love language, and do you actually do it, or do you just say it in a quiz?',
      target: 'both',
      drinkRule: 'Just say it in a quiz? Take 1 sip of honesty.',
    },
    {
      type: 'truth',
      text: '{italian}: How often do you think about the Roman Empire — actually? Answer and {irish} decides if it\'s normal or concerning.',
      target: 'italian',
      drinkRule: '{irish} finds it concerning? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: What\'s the most "delulu" plan you\'ve actually acted on in the last year? Did it end well?',
      target: 'irish',
      drinkRule: 'Didn\'t end well? {irish} takes 1 sip.',
    },

    // VOTES
    {
      type: 'vote',
      text: 'Who would be the more chaotic travel companion?',
      prompt: 'More chaotic travel companion?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who\'s the bigger overthinker in relationships?',
      prompt: 'Bigger overthinker in relationships?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would send the "miss you" text first?',
      prompt: 'Sends "miss you" first?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who\'s more charming with strangers in a first impression?',
      prompt: 'More charming on first impression?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would be more dangerous as a villain?',
      prompt: 'More dangerous as a villain?',
      loser_drinks: 1,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who\'s the CEO of overthinking things that haven\'t happened yet?',
      prompt: 'CEO of pre-emptive overthinking?',
      loser_drinks: 2,
      target: 'both',
    },

    // COUPLE
    {
      type: 'couple',
      text: 'Pick a song right now. Both listen to 30 seconds together in silence. Then: what did you each feel, honestly?',
      target: 'both',
      timer: 30,
      drinkRule: 'No sips — just feel it.',
    },
    {
      type: 'couple',
      text: 'Write each other a 6-word love letter. 30 seconds each. Read them simultaneously.',
      target: 'both',
      timer: 30,
      drinkRule: 'No sips — just write it.',
    },
    {
      type: 'couple',
      text: 'Tell each other the moment tonight when you thought "okay, they\'re interesting." Most specific version wins a sip-skip.',
      target: 'both',
      drinkRule: 'Less specific answer? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Plan a hypothetical 72-hour trip together — pick one city. 4 rounds each, alternating. Add one activity per turn. Go.',
      target: 'both',
      drinkRule: 'No sips — just plan the perfect trip.',
    },
    {
      type: 'couple',
      text: 'Both close your eyes. Picture the other person 10 years from now. Describe what you see. Don\'t edit yourself.',
      target: 'both',
      drinkRule: 'No sips — just honesty.',
    },

    // NOSTALGIA
    {
      type: 'nostalgia',
      text: '{italian}: What Italian early 2000s banger do you still have saved somewhere but "ironically"? Confess or drink 2.',
      target: 'italian',
      drinkRule: 'Won\'t confess? {italian} takes 2 sips.',
    },
    {
      type: 'nostalgia',
      text: '{irish}: Name a phrase your mammy says that has leaked into your everyday vocabulary against your will.',
      target: 'irish',
      drinkRule: 'No sips — just own the mammy-isms.',
    },
    {
      type: 'nostalgia',
      text: 'What TV show from your childhood would horrify your adult self if you actually rewatched it?',
      target: 'both',
      drinkRule: 'No sips — just the horror of nostalgia.',
    },
    {
      type: 'nostalgia',
      text: 'Rate the impact on your generation: Bebo, Facebook, Vine, TikTok. 10 seconds per platform. Go.',
      target: 'both',
      timer: 10,
      drinkRule: 'No sips — just the generational analysis.',
    },
    {
      type: 'nostalgia',
      text: 'Quick fire: what was your most-played song on iTunes circa 2008? Both answer simultaneously. Shame-free zone.',
      target: 'both',
      drinkRule: 'No sips — shame-free zone.',
    },
    {
      type: 'nostalgia',
      text: 'Describe your GTA San Andreas strategy in one sentence. The more chaotic the strategy, the more everyone drinks.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'nostalgia',
      text: 'What\'s a core memory from a night out in your early 20s that you\'ve told about 40 times but will never stop telling?',
      target: 'both',
      drinkRule: 'No sips — this one\'s earned.',
    },

    // WILD
    {
      type: 'wild',
      text: 'The "this is fine" dog energy is real tonight. Both describe one thing in your life right now that is absolutely on fire that you\'re choosing to ignore. Whoever sounds more in denial drinks.',
      target: 'both',
      drinkRule: 'Most in denial? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'Chaotic good vs. chaotic evil: classify the other person\'s personality alignment. Give evidence. Other player must accept the verdict or drink 2.',
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
      type: 'truth',
      text: 'What\'s a phrase that lives rent-free in your head from a past relationship? You don\'t need to explain the context. Just say it out loud.',
      target: 'both',
      drinkRule: 'Won\'t say it? Take 2 sips.',
    },
    {
      type: 'challenge',
      text: '{irish}: Explain the Lidl middle aisle experience to {italian} as if it\'s a sacred pilgrimage. Give it the reverence it deserves.',
      target: 'irish',
      drinkRule: 'Not reverent enough? {irish} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{italian}: What\'s one thing about a Sunday family lunch that a therapist would find interesting? Be specific.',
      target: 'italian',
      drinkRule: 'Too vague? {italian} takes 2 sips.',
    },
    {
      type: 'wild',
      text: 'Both players: think of the most "touch grass immediately" opinion you\'ve seen online this week. Most unhinged answer wins a sip-skip.',
      target: 'both',
      drinkRule: 'Less unhinged answer? Take 1 sip.',
    },
    {
      type: 'nostalgia',
      text: 'What\'s the first thing you bought with your own money as a child? Compare notes. Whoever bought something objectively more ridiculous drinks.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },

    // MINI-GAMES
    { type: 'wild', text: 'TAP RACE! 💥 Fastest fingers win — this one\'s personal. Loser drinks 3.', target: 'both', drinkRule: 'Loser drinks 3 sips.', minigame: 'tap_race', loser_drinks: 3 },
    { type: 'wild', text: 'QUICK DRAW 🔫 When you see DRAW — first to tap wins. Loser drinks 2.', target: 'both', drinkRule: 'Slower finger drinks 2 sips.', minigame: 'quick_draw', loser_drinks: 2 },
  ],

  // ── EXTREME ZONE (rounds spicyEnd+1 → totalRounds) ────────
  extreme: [

    // CHALLENGES
    {
      type: 'challenge',
      text: 'Call a mutual friend right now. First thing they answer with determines who drinks. Hang up after 10 seconds. No context given.',
      target: 'both',
      timer: 10,
      drinkRule: 'Don\'t call? Both take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Both players: show each other the last voice note you sent. No skipping ahead.',
      target: 'both',
      drinkRule: 'Refuse to show? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Open your most recent text thread with your mum and read the last thing you said to her out loud. Drink 1 sip for each awkward detail.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'challenge',
      text: 'Tell the other person something about tonight that you didn\'t plan to say until at least two more drinks. Say it anyway. Chicken out? Drink 4.',
      target: 'both',
      drinkRule: 'Chicken out? Take 4 sips.',
    },
    {
      type: 'challenge',
      text: 'Write a PostSecret-style confession on your phone notes — something true, something you\'ve never told anyone. You don\'t have to show it, but you have to actually write it. Don\'t? Drink 3.',
      target: 'both',
      drinkRule: 'Don\'t write it? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Both log onto Instagram. Each person must read out the last caption they posted in their best influencer voice. Most cringe drinks.',
      target: 'both',
      drinkRule: 'Most cringe caption? Take 2 sips.',
    },
    {
      type: 'challenge',
      text: 'Describe your biggest insecurity about dating in exactly 7 words. Go.',
      target: 'both',
      drinkRule: 'Wrong word count or refusal? Take 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Send {italian} a voice note right now saying exactly: "I\'ve been thinking about you." Send it before you second-guess it.',
      target: 'irish',
      drinkRule: 'Don\'t send it? {irish} takes 3 sips.',
    },
    {
      type: 'challenge',
      text: 'Send {irish} a voice note right now saying exactly: "I\'ve been thinking about you." Send it before you second-guess it.',
      target: 'italian',
      drinkRule: 'Don\'t send it? {italian} takes 3 sips.',
    },

    // TRUTHS
    {
      type: 'truth',
      text: 'What\'s the most "main character energy" decision you\'ve ever made — something reckless that you\'d make again?',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s the most embarrassing thing you\'ve done to get someone\'s attention? Did it work?',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'When\'s the last time you genuinely cried at something and what was it? A movie counts. So does a Duolingo notification.',
      target: 'both',
      drinkRule: 'Won\'t say? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s something you\'ve told yourself about your love life that you know is a lie?',
      target: 'both',
      drinkRule: 'Won\'t admit the lie? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'If the other person texted you "we need to talk" tomorrow morning, what would your immediate assumption be — and why?',
      target: 'both',
      drinkRule: 'Too vague? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s a version of yourself you\'ve outgrown but low-key miss?',
      target: 'both',
      drinkRule: 'No sips — just honesty.',
    },
    {
      type: 'truth',
      text: 'What\'s the most "no thoughts, head empty" decision you\'ve made that somehow worked out?',
      target: 'both',
      drinkRule: 'No sips — just chaotic energy.',
    },
    {
      type: 'truth',
      text: '{italian}: What does "aperitivo hour" represent to you emotionally? This is not a small question. Answer properly.',
      target: 'italian',
      drinkRule: 'Answer not deep enough? {italian} takes 2 sips.',
    },
    {
      type: 'truth',
      text: '{irish}: "Grand so" — tell me about a time you said it when nothing was even slightly grand.',
      target: 'irish',
      drinkRule: 'Won\'t tell it? {irish} takes 2 sips.',
    },
    {
      type: 'truth',
      text: 'What\'s something you want from a relationship that you\'ve never actually asked for out loud?',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },
    {
      type: 'truth',
      text: 'Be honest: what\'s the last thing you did that was genuinely "the audacity"? No judgment zone.',
      target: 'both',
      drinkRule: 'Too tame? Take 1 sip and try harder.',
    },
    {
      type: 'truth',
      text: 'What\'s a "girl dinner" / "boy dinner" you\'ve had this month that you could never explain to a nutritionist?',
      target: 'both',
      drinkRule: 'No sips — this is a judgment-free zone.',
    },
    {
      type: 'truth',
      text: 'What\'s the most "chronically online" opinion you hold that you know is slightly insane in real life?',
      target: 'both',
      drinkRule: 'Too normal? Take 1 sip and dig deeper.',
    },
    {
      type: 'truth',
      text: 'What\'s the thing about tonight that you\'ll still be thinking about tomorrow morning?',
      target: 'both',
      drinkRule: 'Dodge it? Take 3 sips.',
    },

    // VOTES
    {
      type: 'vote',
      text: 'Who\'s more likely to send a paragraph text at 2am?',
      prompt: 'More likely to send the 2am paragraph text?',
      loser_drinks: 3,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would fall first in this hypothetical relationship?',
      prompt: 'Who falls first?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who\'s the bigger "I\'m obsessed with you" energy person?',
      prompt: 'Bigger "I\'m obsessed with you" energy?',
      loser_drinks: 2,
      target: 'both',
    },
    {
      type: 'vote',
      text: 'Who would be more mortified the morning after a big night?',
      prompt: 'More mortified the morning after?',
      loser_drinks: 2,
      target: 'both',
    },

    // COUPLE
    {
      type: 'couple',
      text: 'Both look at each other for 10 uninterrupted seconds. No phones. No laughing it off. Then each say one honest thing.',
      target: 'both',
      timer: 10,
      drinkRule: 'Can\'t hold the look? Take 2 sips.',
    },
    {
      type: 'couple',
      text: 'If tonight was a movie, what genre is it and what\'s the title? Both answer separately, then compare. Whoever\'s title is more accurate wins.',
      target: 'both',
      drinkRule: 'Less accurate title? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Tell each other one thing the other person said tonight that you\'ll actually remember. Be specific.',
      target: 'both',
      drinkRule: 'Too vague? Take 1 sip.',
    },
    {
      type: 'couple',
      text: 'Plan the most absurdly perfect date you could imagine with this person — money no object. 3 minutes. Go.',
      target: 'both',
      timer: 30,
      drinkRule: 'No sips — just dream big.',
    },

    // WILD
    {
      type: 'wild',
      text: 'You both get to ask one question the other person must answer fully and honestly. No vetoing. Ask it now. Whoever gives the better answer skips their next sip.',
      target: 'both',
      drinkRule: 'Worse answer? Take 1 sip.',
    },
    {
      type: 'wild',
      text: 'Both of you are in your "obsessed" era right now. Admit one thing about this evening you\'re genuinely obsessed with — no irony allowed. Whoever sounds most sincere wins.',
      target: 'both',
      drinkRule: 'Less sincere? Take 2 sips.',
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
      text: 'Both players: pick a Vine or early meme that defined your sense of humour. Whoever\'s pick lands harder with the other person wins. Loser drinks.',
      target: 'both',
      drinkRule: 'Didn\'t land? Take 2 sips.',
    },
    {
      type: 'wild',
      text: 'It\'s Spotify Wrapped time. Each player names the top 3 artists the other person would have. Whoever guesses more accurately drinks less. {italian} goes first.',
      target: 'both',
      sipsOpen: true,
      drinkRule: 'Adjust sips using the buttons below.',
    },
    {
      type: 'truth',
      text: 'What\'s a version of yourself you perform for people when you first meet them that isn\'t quite the real you?',
      target: 'both',
      drinkRule: 'Won\'t reveal it? Take 3 sips.',
    },
    {
      type: 'wild',
      text: 'Both players write a one-line BeReal caption for right now — this exact moment — as honestly as possible. Read them at the same time.',
      target: 'both',
      drinkRule: 'Too filtered? Take 2 sips.',
    },
    {
      type: 'truth',
      text: 'What would your Spotify Wrapped "Audio Aura" actually say about your emotional state this year? Uncomfortably honest answers only.',
      target: 'both',
      drinkRule: 'Not uncomfortable enough? Take 2 sips.',
    },
    {
      type: 'couple',
      text: 'Without irony: tell the other person one thing you genuinely admire about them that you haven\'t mentioned yet tonight.',
      target: 'both',
      drinkRule: 'No sips — just pure sincerity.',
    },

    // MINI-GAMES
    { type: 'wild', text: 'STARE CONTEST 🔥 No laughing. No looking away. Longest stare wins. Loser takes 3.', target: 'both', drinkRule: 'First to look away drinks 3 sips.', minigame: 'stare', loser_drinks: 3 },
    { type: 'wild', text: 'QUICK DRAW 🔫 Extreme edition — zero mercy. Lose? Drink 3.', target: 'both', drinkRule: 'Slower tap drinks 3 sips.', minigame: 'quick_draw', loser_drinks: 3 },
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

function pickCard(pool, used) {
  const available = pool.filter((_, i) => !used.includes(i));
  if (available.length === 0) {
    used.length = 0;
    return { card: pool[Math.floor(Math.random() * pool.length)], idx: 0 };
  }
  // In turns mode, prefer 'both' and active player's target cards
  let candidates = available;
  if (state.roundMode === 'turns') {
    const preferred = available.filter(c => !c.target || c.target === 'both' || c.target === state.activeTurn);
    if (preferred.length > 0) candidates = preferred;
  }
  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  const idx = pool.indexOf(chosen);
  return { card: chosen, idx };
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

  if (toZone === 'spicy') {
    overlay.classList.add('transition-spicy');
    emojiEl.textContent = '🌶️';
    textEl.textContent  = 'SPICY ZONE';
    subEl.textContent   = `Round ${state.round} — stop playing it safe. Things get personal from here.`;
  } else if (toZone === 'extreme') {
    overlay.classList.add('transition-extreme');
    emojiEl.textContent = '🔥🌋🔥';
    textEl.textContent  = 'EXTREME ZONE';
    subEl.textContent   = `No filter. No mercy. No regrets. The final stretch starts now.`;
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

  const roundModeEl = document.querySelector('.mode-pill.active');
  state.roundMode = roundModeEl ? roundModeEl.dataset.mode : 'shared';
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
  document.querySelectorAll('.mode-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
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
