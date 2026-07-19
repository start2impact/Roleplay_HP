// ─────────────────────────────────────────────────────────────
// Buy a Feature — la Home di start2impact
// Canvas di esplorazione: 3 direzioni per il "turno" del gioco.
// Economia condivisa: budget fisso 100, prezzi 10–40 per priorità,
// compra E rivendi liberamente finché non chiudi il turno.
// Componenti React dal bundle DS (window.DesignSystem_3f5762).
// ─────────────────────────────────────────────────────────────
(function () {
  const DS_BASE = "uploads/grande-mercato-home/public/";
  function getNS() { return window.DesignSystem_3f5762 || {}; }
  function DSIcon(props) { const NS = getNS(); return NS.Icon ? React.createElement(NS.Icon, Object.assign({ base: DS_BASE }, props)) : null; }
  function DSInput(props) { const NS = getNS(); return NS.Input ? React.createElement(NS.Input, Object.assign({ base: DS_BASE }, props)) : null; }
  function DSTextarea(props) { const NS = getNS(); return NS.Textarea ? React.createElement(NS.Textarea, Object.assign({ base: DS_BASE }, props)) : null; }
  function DSDropdown(props) { const NS = getNS(); return NS.Dropdown ? React.createElement(NS.Dropdown, Object.assign({ base: DS_BASE }, props)) : null; }

  // ── Primitive pittoriche condivise per le scene animate ──
  // Filtro grana (roughen) per bordi nuvole dipinti a mano; definito una volta, referenziato via filter:url(#baf-rough)
  function bafRoughFilter() {
    return React.createElement("svg", { className: "baf-rough-def", width: 0, height: 0, "aria-hidden": "true", style: { position: "absolute" } },
      React.createElement("filter", { id: "baf-rough" },
        React.createElement("feTurbulence", { type: "fractalNoise", baseFrequency: "0.014 0.022", numOctaves: 3, seed: 4, result: "n" }),
        React.createElement("feDisplacementMap", { in: "SourceGraphic", in2: "n", scale: 10, xChannelSelector: "R", yChannelSelector: "G" })),
      React.createElement("filter", { id: "baf-rough-soft" },
        React.createElement("feTurbulence", { type: "fractalNoise", baseFrequency: "0.018 0.022", numOctaves: 2, seed: 4, result: "n2" }),
        React.createElement("feDisplacementMap", { in: "SourceGraphic", in2: "n2", scale: 3.5, xChannelSelector: "R", yChannelSelector: "G" })));
  }
  // Nuvola a lobi fusi: una fascia d'ombra (shade) + 8 gobbe (lobe), layout px scalato a partire da un riferimento di 470px.
  function bafLobes(w) {
    const s = w / 470;
    const px = (v) => v * s;
    const lobe = (l, b, lw, lh, k) => React.createElement("div", { key: "l" + k, className: "lobe", style: { left: px(l), bottom: px(b), width: px(lw), height: px(lh) } });
    return [
      React.createElement("div", { key: "sh", className: "shade", style: { left: px(10), bottom: 0, width: px(430), height: px(72) } }),
      lobe(0, 20, 150, 86, 1),
      lobe(70, 30, 170, 116, 2),
      lobe(170, 26, 160, 104, 3),
      lobe(260, 22, 150, 90, 4),
      lobe(340, 18, 130, 72, 5),
      lobe(40, 10, 120, 80, 6),
      lobe(150, 12, 130, 86, 7),
      lobe(250, 10, 120, 78, 8)
    ];
  }
  function bafCloud(cls, style, w, key) {
    return React.createElement("div", { key: key, className: cls, "aria-hidden": "true", style: Object.assign({ width: w, height: (150 * w) / 470 }, style) }, bafLobes(w));
  }

  const TEAMS = ["Education", "Growth", "Customer Care", "Prodotto"];
  const TENURES = ["< 1 anno", "1-2 anni", "2+ anni"];

  // ── Modalità speciale (chi entra nell'emporio con solo 40 pt di base) ──
  // Aster propone un recupero: rispondere a queste domande porta il budget
  // fino a un massimo di 200 pt (40 base + 4 × 40).
  const SPECIAL_STEP = 40;
  const SPECIAL_QS = [
    { id: "freq", q: "Quanto spesso apri la Home di start2impact?", opts: ["Ogni giorno", "Qualche volta a settimana", "Di rado"] },
    { id: "first", q: "Appena entri, cosa cerchi per prima cosa?", opts: ["Dove ero rimasto", "I miei progressi", "Cosa fare oggi"] },
    { id: "miss", q: "Cosa senti che manca di più oggi?", opts: ["Chiarezza sul percorso", "Motivazione a continuare", "Contatto con le persone"] },
    { id: "feel", q: "Come ti fa sentire la Home di adesso?", opts: ["A mio agio", "Un po' spaesato", "Sopraffatto"] },
  ];

  // ── Raccolta risposte ───────────────────────────────────────
  // A fine percorso tutte le risposte del partecipante vengono inviate
  // automaticamente a Formspree (richiesta AJAX JSON). Stringa vuota = nessun invio.
  const FEEDBACK_ENDPOINT = "https://formspree.io/f/mqereojn";
  // ⚠️ SOLO PER PROGETTAZIONE: invio disattivato per non consumare i 50 invii/mese
  //    di Formspree mentre si naviga il gioco. La pagina finale mostra comunque
  //    lo stato "inviato" (mock) così il flusso resta completo.
  //    → RIPORTARE A false PRIMA DELLA CONDIVISIONE per riattivare l'invio reale.
  const DEV_NO_SEND = false;

  // ── Economia condivisa ──────────────────────────────────────
  const BUDGET = 100;

  // Catalogo della nuova Home: prezzo = priorità/costo, arch = teoria-Home.
  // (nome reale nel data model; qui la "pelle" leggibile in 1 secondo)
  const CATALOG = [
    { id: "resume_course",        name: "Riprendi da dove eri",        real: "Ripresa ultimo corso",     price: 40, icon: "book-bookmark",    arch: "cabina",  what: "Riapre con un tocco l'ultima lezione lasciata a metà, senza cercarla tra i corsi. Togli l'attrito del «dov'ero rimasto?» e riprendi a studiare in pochi secondi." },
    { id: "project_status",       name: "Stato delle correzioni",      real: "In revisione · feedback",  price: 35, icon: "clipboard-list",   arch: "cabina",  what: "Mostra in evidenza lo stato del tuo progetto: in revisione oppure feedback pronto. Sai sempre se la palla è a te o al tutor, senza controllare di continuo." },
    { id: "path_progress",        name: "Percorso e avanzamento",      real: "Progress del master",      price: 30, icon: "list-check",       arch: "bussola", what: "La barra di avanzamento del Master ti dice quanto manca al traguardo. Un colpo d'occhio che rende concreto il percorso e tiene alta la motivazione." },
    { id: "personal_suggestions", name: "Suggerimenti personalizzati", real: "Il prossimo passo per te", price: 30, icon: "flag",            arch: "bussola", what: "Ti indica il prossimo passo giusto in base a dove sei arrivato. Niente pagina bianca: sai sempre cosa fare appena entri." },
    { id: "portfolio_review",     name: "Esercitazione quotidiana in coppia", real: "Buddy + tutor",      price: 30, icon: "handshake",       arch: "motore",  what: "Ogni giorno un'esercitazione a difficoltà crescente, in coppia con un «buddy» e con i tutor a supporto. Impari facendo e non resti mai solo davanti al problema." },
    { id: "daily_exercise",       name: "Esercizio del giorno",        real: "Consegna + correzione",    price: 25, icon: "pen-to-square",    arch: "cabina",  what: "Un esercizio al giorno da svolgere e consegnare, corretto da un tutor. Ritmo costante e feedback rapido: la pratica diventa un'abitudine." },
    { id: "next_master",          name: "Il tuo prossimo master",      real: "Valore del rinnovo",       price: 30, icon: "rocket",          arch: "rampa",   what: "Ti mostra il Master naturale dopo questo, con il valore concreto del rinnovo. Vedi dove puoi arrivare prima ancora di aver finito." },
    { id: "ai_path",              name: "Percorso su misura con l'AI", real: "Onboarding intelligente",  price: 30, icon: "gem",             arch: "bussola", what: "Al primo accesso scrivi cosa vuoi imparare e in meno di un minuto l'AI costruisce un percorso su misura pescando da oltre 12.000 lezioni. Onboarding personale, zero configurazione." },
    { id: "dashboard_counters",   name: "Cruscotto a 4 contatori",     real: "Ore · concetti · lezioni · progetti", price: 25, icon: "clipboard-list-check", arch: "cabina", what: "Quattro contatori sempre in vista: ore di studio, concetti, lezioni e progetti superati. La tua costanza diventa un numero che cresce sotto i tuoi occhi." },
    { id: "personal_dashboard",   name: "Cruscotto personale",         real: "Tutto in una schermata",   price: 30, icon: "list-check",       arch: "cabina",  what: "Voti, medie, presenze, minuti online e competenze acquisite: tutto in un'unica schermata. Il quadro completo dei progressi senza saltare da una pagina all'altra." },
    { id: "projects_portfolio",   name: "Progetti e portfolio",        real: "Collegato a GitHub",       price: 35, icon: "folder",          arch: "rampa",   what: "I progetti si collegano a GitHub, il «curriculum» di chi programma, e ricevono la valutazione dei docenti. Studiare e costruire il portfolio diventano la stessa cosa." },
    { id: "gamification",         name: "Gamification",                real: "Punti, badge, streak",     price: 25, icon: "medal",           arch: "motore",  what: "Punti, badge e streak trasformano lo studio in progressi visibili. Piccole ricompense che tengono viva la motivazione giorno dopo giorno." },
    { id: "weighted_points",      name: "Punti pesati per competenza", real: "Pratica > teoria",         price: 20, icon: "gem",             arch: "motore",  what: "I punti pesano la pratica: 50 un progetto, 25 una lezione, 10 un quiz, 5 un video. Ti spinge a fare, non solo a guardare." },
    { id: "weekly_streak",        name: "Streak settimanale",          real: "Non giornaliera",          price: 15, icon: "fire",            arch: "motore",  what: "Scegli quanti giorni a settimana vuoi studiare; ogni settimana centrata allunga la serie. Un obiettivo sostenibile che rispetta i tuoi ritmi reali." },
    { id: "weekly_leaderboard",   name: "Classifiche settimanali",     real: "Piccoli gruppi casuali",   price: 20, icon: "medal", arch: "motore",  what: "Piccoli gruppi casuali che si sfidano sui punti della settimana. La competizione giusta: leggera, alla tua portata, mai schiacciante." },
    { id: "job_opportunities",    name: "Opportunità di lavoro",       real: "Career service",           price: 25, icon: "briefcase",       arch: "rampa",   what: "Ogni settimana nuove offerte di lavoro interne, raccolte in un unico posto. Le opportunità arrivano a te mentre studi." },
    { id: "career_home",          name: "Carriera in home",            real: "Colloqui + risorse",       price: 30, icon: "briefcase",       arch: "rampa",   what: "Simulazioni di colloquio e risorse per il lavoro, già nella prima schermata. La preparazione alla carriera entra nella routine di studio." },
    { id: "cert_thresholds",      name: "Certificato a soglie",        real: "Mancano X corsi",          price: 20, icon: "award",           arch: "motore",  what: "Ti dice quanti corsi mancano al prossimo certificato: si sblocca all'80% del corso più un quiz e si condivide su LinkedIn con un click. Un traguardo chiaro e spendibile." },
    { id: "cert_conditions",      name: "Certificato con condizioni",  real: "Presenze + esercitazioni", price: 20, icon: "circle-check",    arch: "rampa",   what: "Il certificato arriva con il 70% di presenze e il 70% di esercitazioni consegnate. Regole trasparenti: sai esattamente cosa serve per ottenerlo." },
    { id: "calendar_events",      name: "Calendario ed eventi",        real: "Appuntamenti dell'anno",   price: 20, icon: "calendar-clock",  arch: "motore",  what: "Tutti gli appuntamenti dell'anno in un calendario, con eventi e ospiti da rivedere. Non perdi più una data e recuperi ciò che ti sei perso." },
    { id: "community_feed",       name: "Community fuori dalla piattaforma", real: "Circle",  price: 20, icon: "comments",        arch: "motore",  what: "La community vive su Circle. Confronto e supporto tra pari sempre a portata di mano." },
    { id: "coach_access",         name: "Accesso rapido al coach",     real: "Il tuo riferimento",       price: 20, icon: "message-dots",    arch: "motore",  what: "Un accesso rapido per scrivere al tuo coach di riferimento. Quando ti blocchi, l'aiuto è a un tocco di distanza." },
    { id: "saved_materials",      name: "Materiali salvati",           real: "Risorse a portata di click", price: 15, icon: "bookmark",     arch: "cabina",  what: "Le risorse che hai salvato, raccolte e pronte al click. La tua libreria personale, senza cercare due volte la stessa cosa." },
    { id: "weekly_goal",          name: "Obiettivo della settimana",   real: "Micro-goal settimanale",   price: 15, icon: "circle-check",    arch: "cabina",  what: "Un micro-obiettivo settimanale per non perdere il ritmo. Piccolo, concreto, raggiungibile: mantiene viva l'abitudine allo studio." },
  ];
  const byId = Object.fromEntries(CATALOG.map((f) => [f.id, f]));

  // ── Vecchia Home (fase discovery) ───────────────────────────
  const SHELF = [
    { id: "master_hero", name: "Il tuo Master e l'avanzamento", real: "Card hero + barra completamento", icon: "graduation-cap", desc: "La card in cima alla Home: il tuo Master e la barra di completamento." },
    { id: "corsi_master", name: "I Corsi del tuo Master", real: "Lista dei corsi del percorso", icon: "book-bookmark", desc: "L'elenco dei corsi che compongono il tuo percorso di studio." },
    { id: "teoria_test_progetto", name: "Teoria · Test · Progetto", real: "Le tre card azione del corso", icon: "clipboard-list-check", desc: "Le tre azioni di ogni corso: studi la teoria, fai il test, consegni il progetto." },
    { id: "punti_streak", name: "Punti e streak", real: "Gamification in sidebar", icon: "fire", desc: "I punti che accumuli e la streak dei giorni consecutivi di studio." },
    { id: "chat_supporto", name: "Chat di supporto", real: "Widget flottante di aiuto", icon: "comments", desc: "Il widget flottante per chiedere aiuto quando ti blocchi." },
    { id: "notifiche", name: "Notifiche", real: "Campanella in alto a destra", icon: "bell", desc: "La campanella in alto: avvisi su corsi, progetti e messaggi." },
    { id: "skill_corso", name: "Skill del corso", real: "Tag Skill principali", icon: "award", desc: "I tag delle competenze che stai sviluppando in ogni corso." },
    { id: "saluto", name: "Saluto personalizzato", real: '"Ciao {nome}" in testa', icon: "handshake", desc: "Il «Ciao {nome}» che ti accoglie in cima alla Home." },
    { id: "profilo_sidebar", name: "Profilo in vista", real: "Avatar + nome in sidebar", icon: "circle-user", desc: "Il tuo avatar e nome sempre visibili nella barra laterale." },
    { id: "carriera_lavoro", name: "Suggerimento corsi aggiuntivi", real: "Corsi consigliati per il lavoro", icon: "briefcase", desc: "Modulo corsi consigliati da svolgere durante il Master per aumentare le possibilità di trovare lavoro." },
  ];
  const shelfById = Object.fromEntries(SHELF.map((m) => [m.id, m]));
  // Valori di vendita al mercatino (stessi del Trasloco, atto 1)
  const SHELF_VALUE = { master_hero: 35, corsi_master: 35, teoria_test_progetto: 30, punti_streak: 20, chat_supporto: 20, notifiche: 15, skill_corso: 15, saluto: 15, profilo_sidebar: 15, carriera_lavoro: 20 };
  SHELF.forEach((m) => { m.value = SHELF_VALUE[m.id] || 15; });

  // ── La storia: la casa sta bruciando. Ogni modulo della vecchia Home è
  // un oggetto da strappare alle fiamme; ogni voce del catalogo è un
  // materiale per ricostruire. Pelle narrativa: le meccaniche non cambiano,
  // solo il copy. Le chiavi/id restano identiche.
  const SKIN = {
    // Vecchia Home — gli oggetti da salvare dall'incendio
    master_hero: "La mappa del percorso, che stacchi dal muro tra il fumo",
    corsi_master: "La libreria dei manuali, già lambita dalle fiamme",
    teoria_test_progetto: "La scrivania a tre cassetti, da svuotare in fretta",
    punti_streak: "Il barattolo delle monete, da afferrare al volo",
    chat_supporto: "Il citofono che squilla a vuoto nel fumo",
    notifiche: "La cassetta della posta sulla soglia in fiamme",
    skill_corso: "Gli attestati in cornice da strappare al fuoco",
    saluto: "Lo zerbino col tuo nome, mentre bruci la soglia",
    profilo_sidebar: "Lo specchio dell'ingresso, che riflette le fiamme",
    carriera_lavoro: "La cassetta degli attrezzi per il lavoro, sotto la scala",
    // Casa ricostruita — i materiali dell'emporio sopravvissuto
    resume_course: "La poltrona col libro aperto",
    project_status: "La bacheca di sughero dei progetti",
    path_progress: "La mappa illuminata",
    personal_suggestions: "La lampada che consiglia",
    portfolio_review: "Il tavolo condiviso col vicinato",
    next_master: "La porta sulla stanza nuova",
    ai_path: "Il maggiordomo che apparecchia da solo",
    dashboard_counters: "Il quadro comandi accanto all'ingresso",
    cert_thresholds: "Le tacche sullo stipite che segnano quanto cresci",
    gamification: "La parete dei trofei",
    job_opportunities: "La bacheca degli annunci",
    live_events: "Il calendario a muro",
    community_feed: "Il balcone sul cortile",
    coach_access: "Il telefono rosso",
    saved_materials: "La cassettiera delle cose salvate",
    weekly_goal: "La lavagnetta in cucina",
    news: "La radio",
  };
  CATALOG.forEach((f) => { f.skin = SKIN[f.id] || f.name; });
  SHELF.forEach((m) => { m.skin = SKIN[m.id] || m.name; });

  // ── Mini-mockup dei moduli (l'"immagine" della card) ─────────
  const Icon = DSIcon; // alias per le scene JSX
  const EX = "var(--greyscale-extralight)", LT = "var(--greyscale-light)", WHITE = "var(--ui-primary)";
  const MINT = "var(--brand-primary)", MINTL = "var(--brand-primary-light)", MINTD = "var(--brand-secondary)";
  const PURP = "var(--accent-mid)", PURPD = "var(--accent-dark)", PURPL = "var(--purple-00)";
  const Line = ({ w = "100%", h = 6, c = EX }) => <div style={{ width: w, height: h, borderRadius: 99, background: c }} />;
  const Dot = ({ s = 9, c = EX }) => <div style={{ width: s, height: s, borderRadius: 99, background: c, flexShrink: 0 }} />;
  const Chip = ({ c = MINTL, fg = MINTD, children }) => (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 7px", borderRadius: 99, background: c, color: fg, fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8.5, lineHeight: 1.3, whiteSpace: "nowrap" }}>{children}</span>
  );
  const IconChip = ({ name, bg = MINTL, fg = MINTD, size = 14, dim = 26 }) => (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: dim, height: dim, borderRadius: "var(--radius-md)", background: bg, color: fg, flexShrink: 0 }}><Icon name={name} size={size} /></span>
  );
  const Avatar = ({ letter = "M", from = "#007369", to = "#08F7A1", dim = 30 }) => (
    <span style={{ width: dim, height: dim, borderRadius: 99, background: `linear-gradient(135deg, ${from}, ${to})`, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-title)", fontWeight: 800, fontSize: dim * 0.42, flexShrink: 0 }}>{letter}</span>
  );
  const Bar = ({ pct = 60, c = MINT }) => (
    <div style={{ height: 8, borderRadius: 99, background: EX, overflow: "hidden", width: "100%" }}><div style={{ width: pct + "%", height: "100%", borderRadius: 99, background: c }} /></div>
  );
  const Ring = ({ pct = 68, c = MINT, label }) => (
    <div style={{ width: 46, height: 46, borderRadius: 99, background: `conic-gradient(${c} 0 ${pct}%, ${EX} ${pct}% 100%)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <div style={{ width: 32, height: 32, borderRadius: 99, background: WHITE, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: MINTD }}>{label || pct + "%"}</div>
    </div>
  );
  const Panel = ({ children, style }) => (
    <div style={{ background: WHITE, borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: 10, width: "100%", display: "flex", flexDirection: "column", gap: 7, ...style }}>{children}</div>
  );
  const Row = ({ children, style }) => <div style={{ display: "flex", alignItems: "center", gap: 8, ...style }}>{children}</div>;
  const Col = ({ children, style }) => <div style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 0, flex: 1, ...style }}>{children}</div>;
  const BellDot = () => (
    <span style={{ position: "relative", display: "inline-flex", color: LT }}><Icon name="bell" size={16} /><span style={{ position: "absolute", top: -2, right: -2, width: 7, height: 7, borderRadius: 99, background: "var(--feedback-error)", border: "1.5px solid " + WHITE }} /></span>
  );
  const SCENES = {
    master_hero: () => (<Panel style={{ gap: 6 }}><Row style={{ alignItems: "flex-start", gap: 10 }}><Row style={{ flex: 1.6, justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: "var(--greyscale-dark)", whiteSpace: "nowrap" }}>Il Master che hai scelto è:</span><span style={{ color: "var(--greyscale-dark)", display: "inline-flex", flexShrink: 0 }}><Icon name="pen-to-square" size={11} /></span></Row><span style={{ flex: 1, fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: "var(--greyscale-dark)", whiteSpace: "nowrap" }}>Percorso completo al:</span></Row><Row style={{ gap: 10, alignItems: "stretch" }}><div style={{ flex: 1.6, background: MINTL, borderRadius: "var(--radius-md)", padding: "8px 10px", display: "flex", alignItems: "center" }}><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 11.5, color: "var(--greyscale-dark)", lineHeight: 1.15, whiteSpace: "nowrap" }}>Lorem ipsum e Agenti AI</span></div><div style={{ flex: 1, background: MINTL, borderRadius: "var(--radius-md)", padding: "8px 10px", display: "flex", alignItems: "center", gap: 6 }}><div style={{ flex: 1 }}><Bar pct={100} c="var(--green-600)" /></div><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: "var(--greyscale-dark)", flexShrink: 0 }}>100%</span></div></Row></Panel>),
    corsi_master: () => { const Tile = ({ c, ic }) => (<span style={{ width: 22, height: 22, borderRadius: 6, background: c, color: WHITE, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={11} /></span>); const Ring = ({ on, ic }) => (<span style={{ width: 15, height: 15, borderRadius: 99, border: "2px solid " + (on ? "var(--green-600)" : EX), color: on ? "var(--green-600)" : LT, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={7} /></span>); const CRow = ({ c, ic, t, meta, on }) => (<div style={{ background: WHITE, borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "6px 8px", display: "flex", alignItems: "center", gap: 7 }}><Tile c={c} ic={ic} /><div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 9.5, color: "var(--greyscale-dark)", lineHeight: 1.1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t}</span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 7, color: LT, whiteSpace: "nowrap" }}>{meta}</span></div><Ring ic="book" /><Ring on={on} ic="clipboard-list-check" /><span style={{ color: LT, display: "inline-flex", flexShrink: 0 }}><Icon name="plus" size={9} /></span></div>); return (<div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 10, color: "var(--greyscale-dark)" }}>I Corsi del tuo Master:</span><CRow c="#E5527C" ic="angle-right" t="Introduzione al Lorem Ipsum" meta="Test: 70/100 · Progetto: 1/200" on /><CRow c="#25BCC9" ic="gem" t="Lorem e Prompt Engineering" meta="19 Ore di Teoria · 300 pt Max" /></div>); },
    teoria_test_progetto: () => { const Ring = ({ on, ic }) => (<span style={{ width: 18, height: 18, borderRadius: 99, border: "3px solid " + (on ? "var(--green-600)" : EX), color: on ? "var(--green-600)" : LT, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={8} /></span>); const Btn = ({ fill, children }) => (<span style={{ display: "block", textAlign: "center", padding: "4px 3px", borderRadius: 5, background: fill ? PURP : WHITE, color: fill ? WHITE : PURP, border: fill ? "none" : "1px solid " + PURP, fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 6.5, letterSpacing: "0.04em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{children}</span>); const Card = ({ on, ic, t, btn, fill }) => (<div style={{ flex: 1, minWidth: 0, background: WHITE, borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "8px 7px", display: "flex", flexDirection: "column", gap: 7 }}><div style={{ display: "flex", alignItems: "center", gap: 5 }}><Ring on={on} ic={ic} /><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8, color: "var(--greyscale-dark)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t}</span></div><Btn fill={fill}>{btn}</Btn></div>); return (<Row style={{ gap: 6, width: "100%", alignItems: "stretch" }}><Card ic="book" t="Teoria da completare" btn="VAI ALLA TEORIA" fill /><Card on ic="clipboard-list-check" t="Test - 70/100" btn="VAI AL TEST" /><Card on ic="file-signature" t="Progetto 1/200" btn="VISUALIZZA FEEDBACK" fill /></Row>); },
    punti_streak: () => (<Panel style={{ gap: 6, alignItems: "center" }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 11, color: "var(--greyscale-dark)" }}>Lorem Ipsum</span><Row style={{ gap: 4 }}><span style={{ color: "var(--greyscale-dark)", display: "inline-flex" }}><Icon name="medal" size={11} /></span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 10, color: "var(--greyscale-dark)" }}>15450pt</span></Row><Row style={{ gap: 6, alignSelf: "stretch", alignItems: "flex-start" }}><span style={{ width: 20, height: 20, borderRadius: 6, background: "var(--yellow-100)", color: "var(--yellow-600)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name="fire" size={11} /></span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 600, fontSize: 8.5, color: LT, lineHeight: 1.3 }}>0 giorni consecutivi su start2impact!</span></Row></Panel>),
    chat_supporto: () => (<div style={{ position: "relative", width: "100%", minHeight: 96, display: "flex", justifyContent: "center" }}><div style={{ position: "relative", width: "78%", marginTop: 10 }}><Row style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", gap: 0, zIndex: 2 }}><Avatar letter="L" from="#2b2b2b" to="#555" dim={22} /><span style={{ marginLeft: -7, display: "inline-flex" }}><Avatar letter="I" from="#6b4a3f" to="#a3776a" dim={22} /></span></Row><div style={{ position: "relative", background: WHITE, borderRadius: "var(--radius-md)", boxShadow: "0 6px 16px rgba(0,0,0,0.12)", padding: "22px 12px 20px" }}><span style={{ position: "absolute", top: 7, right: 9, color: "var(--greyscale-dark)", display: "inline-flex" }}><Icon name="xmark" size={9} /></span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 600, fontSize: 9.5, color: "var(--greyscale-dark)", display: "block", textAlign: "center" }}>Ciao! Come possiamo aiutarti?</span></div><span style={{ position: "absolute", right: -12, bottom: -14, width: 34, height: 34, borderRadius: 99, background: MINT, color: WHITE, display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-card)" }}><Icon name="comments" size={15} /></span></div></div>),
    notifiche: () => (<div style={{ position: "relative", width: "100%", minHeight: 92 }}><span style={{ position: "absolute", top: 0, right: 6, width: 26, height: 26, borderRadius: 7, background: MINT, color: WHITE, display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-card)" }}><Icon name="bell" size={13} /></span><div style={{ position: "absolute", top: 34, left: 0, right: 0, background: WHITE, borderRadius: "var(--radius-md)", boxShadow: "0 6px 16px rgba(0,0,0,0.12)", overflow: "hidden" }}><div style={{ padding: "8px 10px", borderBottom: "1px solid " + MINTL }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9.5, color: "var(--greyscale-dark)" }}>Notifiche</span></div><div style={{ padding: "9px 10px" }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 600, fontSize: 9, color: "var(--greyscale-dark)" }}>Non ci sono notifiche</span></div></div></div>),
    skill_corso: () => (<Panel style={{ gap: 6 }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8.5, color: MINTD }}>Skill Principali</span><Row style={{ flexWrap: "wrap", gap: 5 }}>{["Wireframing", "People Oriented"].map((s) => (<span key={s} style={{ padding: "3px 8px", borderRadius: 6, border: "1.5px solid var(--greyscale-extralight)", background: WHITE, fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8, color: "var(--greyscale-dark)", whiteSpace: "nowrap" }}>{s}</span>))}</Row></Panel>),
    saluto: () => (<Panel style={{ gap: 6 }}><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 16, color: "var(--greyscale-dark)", lineHeight: 1 }}>Ciao Mario</span><Line w="62%" h={5} /></Panel>),
    profilo_sidebar: () => (<div style={{ width: "100%", display: "flex", alignItems: "stretch", gap: 0, background: WHITE, borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", overflow: "hidden" }}><div style={{ width: "46%", borderRight: "1px solid var(--greyscale-extralight)", padding: "8px 6px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><span style={{ display: "inline-flex", padding: 2, borderRadius: 99, border: "2px solid " + MINT }}><Avatar letter="L" from="#4a4a4a" to="#8a8a8a" dim={24} /></span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8.5, color: "var(--greyscale-dark)", whiteSpace: "nowrap" }}>Lorem Ipsum</span><Row style={{ gap: 3 }}><span style={{ color: "var(--greyscale-dark)", display: "inline-flex" }}><Icon name="medal" size={8} /></span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 7.5, color: "var(--greyscale-dark)" }}>15450pt</span></Row></div><div style={{ flex: 1, padding: "10px 10px", display: "flex", flexDirection: "column", gap: 5, justifyContent: "center" }}><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 13, color: "var(--greyscale-dark)", lineHeight: 1 }}>Ciao Lorem</span><Line w="70%" h={5} /></div></div>),
    carriera_lavoro: () => { const OC = ({ ic, t }) => (<div style={{ flex: 1, minWidth: 0, background: WHITE, borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "7px 7px", display: "flex", flexDirection: "column", gap: 5 }}><Row style={{ justifyContent: "space-between", alignItems: "flex-start", gap: 4 }}><span style={{ width: 22, height: 22, borderRadius: 6, background: "var(--orange-100)", color: "var(--orange-600)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={11} /></span><Chip c={MINTL} fg={MINTD}>Corso Opzionale</Chip></Row><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 9.5, color: "var(--greyscale-dark)", lineHeight: 1.1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t}</span><Row style={{ gap: 4 }}><span style={{ color: LT, display: "inline-flex" }}><Icon name="clock" size={8} /></span><Line w="54%" h={4} /></Row><Row style={{ gap: 4 }}><span style={{ color: LT, display: "inline-flex" }}><Icon name="medal" size={8} /></span><Line w="40%" h={4} /></Row></div>); return (<div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 9.5, color: "var(--greyscale-dark)" }}>Aumenta le possibilità di trovare lavoro</span><Row style={{ gap: 6, alignItems: "stretch" }}><OC ic="briefcase" t="Trovare Lavoro" /><OC ic="linkedin-in" t="LinkedIn" /></Row></div>); },
    resume_course: () => (<Panel><Row><IconChip name="angle-right" bg={PURP} fg={WHITE} dim={30} size={16} /><Col><Chip c={PURPL} fg={PURPD}>Riprendi</Chip><Line w="72%" /></Col><span style={{ width: 34, height: 34, borderRadius: "var(--radius-md)", background: PURPL, display: "inline-flex", alignItems: "center", justifyContent: "center", color: PURPD, flexShrink: 0 }}><Icon name="book-bookmark" size={15} /></span></Row></Panel>),
    project_status: () => (<Panel><Line w="34%" h={5} /><Row style={{ flexWrap: "wrap", gap: 5 }}><Chip c="var(--blue-100)" fg="var(--blue-600)">Inviati</Chip><Chip c="var(--yellow-100)" fg="var(--yellow-600)">In correzione</Chip><Chip c="var(--green-100)" fg="var(--green-600)">Corretti</Chip><Chip c="var(--red-100)" fg="var(--red-600)">Da rifare</Chip></Row></Panel>),
    path_progress: () => (<Panel style={{ gap: 6 }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9.5, color: "var(--greyscale-dark)" }}>Percorso completo al:</span><div style={{ background: MINTL, borderRadius: "var(--radius-md)", padding: "9px 12px", display: "flex", alignItems: "center", gap: 8 }}><div style={{ flex: 1 }}><Bar pct={64} c="var(--green-600)" /></div><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 10, color: "var(--greyscale-dark)", flexShrink: 0 }}>64%</span></div></Panel>),
    personal_suggestions: () => (<Panel><Row><IconChip name="flag" bg={PURPL} fg={PURPD} dim={26} size={13} /><Chip c={PURPL} fg={PURPD}>Il prossimo passo</Chip></Row><Line w="86%" /><Line w="58%" /></Panel>),
    portfolio_review: () => (<Panel style={{ gap: 6 }}><Row><Avatar letter="A" from="#EA7317" to="#F2994A" dim={24} /><span style={{ marginLeft: -8 }}><Avatar letter="G" from="#0063B5" to="#3CA6FF" dim={24} /></span><Chip c={MINTL} fg={MINTD}>Tra pari</Chip></Row><div style={{ background: MINTL, borderRadius: "var(--radius-md)", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}><Line w="88%" h={5} /><Line w="66%" h={5} /></div></Panel>),
    next_master: () => (<Panel><Row><IconChip name="graduation-cap" bg={PURPL} fg={PURPD} dim={30} size={16} /><Col><Line w="52%" h={5} /><Line w="74%" h={7} c={LT} /></Col><Chip c={PURP} fg={WHITE}>Rinnova</Chip></Row></Panel>),
    gamification: () => (<Panel><Row style={{ gap: 6 }}><IconChip name="medal" dim={24} size={13} /><IconChip name="award" bg={PURPL} fg={PURPD} dim={24} size={13} /><IconChip name="circle-check" bg="var(--orange-100)" fg="var(--orange-600)" dim={24} size={13} /><div style={{ flex: 1 }}><Bar pct={58} c={PURP} /></div></Row></Panel>),
    job_opportunities: () => (<Panel><Row style={{ justifyContent: "space-between" }}><Row><IconChip name="briefcase" bg={PURPL} fg={PURPD} dim={26} size={13} /><Col><Line w="60%" h={5} /><Line w="40%" h={4} /></Col></Row><Chip c={MINT} fg={WHITE}>New</Chip></Row><Line w="82%" /></Panel>),
    live_events: () => (<Panel style={{ gap: 8 }}>{[["12", "78%"], ["18", "60%"]].map(([d, w], i) => (<Row key={i}><span style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: PURPL, color: PURPD, display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 10, lineHeight: 1, flexShrink: 0 }}>{d}</span><Col><Line w={w} h={5} /><Line w="35%" h={4} /></Col></Row>))}</Panel>),
    community_feed: () => (<Panel style={{ gap: 8 }}>{[["A", "#EA7317", "#F2994A", "76%"], ["G", "#0063B5", "#3CA6FF", "58%"]].map(([l, a, b, w], i) => (<Row key={i} style={{ alignItems: "flex-start" }}><Avatar letter={l} from={a} to={b} dim={24} /><Col><Line w={w} h={5} /><Line w="40%" h={4} /></Col></Row>))}</Panel>),
    coach_access: () => (<Panel><Row><Avatar letter="C" dim={30} /><Col><Line w="55%" h={6} /><Line w="35%" h={4} /></Col><Chip c={PURP} fg={WHITE}><Icon name="message-dots" size={9} /> Scrivi</Chip></Row></Panel>),
    saved_materials: () => (<Panel style={{ gap: 7 }}><Row><IconChip name="bookmark" bg={PURPL} fg={PURPD} dim={24} size={12} /><Line w="42%" h={5} /></Row><Row><Dot c={LT} /><Line w="72%" /></Row><Row><Dot c={LT} /><Line w="55%" /></Row></Panel>),
    weekly_goal: () => (<Panel><Row><span style={{ width: 22, height: 22, borderRadius: 99, background: MINTL, color: MINTD, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name="check" size={11} /></span><Chip c={PURPL} fg={PURPD}>Obiettivo settimana</Chip></Row><Bar pct={40} c={PURP} /></Panel>),
    news: () => (<Panel><Row><IconChip name="bell" bg={PURPL} fg={PURPD} dim={26} size={13} /><Col><Line w="62%" h={5} /><Line w="40%" h={4} /></Col></Row><Line w="84%" /></Panel>),
    ai_path: () => (<Panel style={{ gap: 7 }}><Row style={{ justifyContent: "space-between" }}><Row><IconChip name="gem" bg={PURP} fg={WHITE} dim={26} size={13} /><Chip c={PURPL} fg={PURPD}>Percorso AI</Chip></Row><span style={{ color: "var(--greyscale-dark)", display: "inline-flex" }}><Icon name="xmark" size={9} /></span></Row><Line w="90%" h={5} /><Line w="64%" h={5} /><div style={{ alignSelf: "flex-start" }}><Chip c={PURP} fg={WHITE}>Genera</Chip></div></Panel>),
    dashboard_counters: () => { const Cell = ({ n, l, ic }) => (<div style={{ flex: 1, minWidth: 0, background: MINTL, borderRadius: "var(--radius-md)", padding: "7px 8px", display: "flex", flexDirection: "column", gap: 3 }}><span style={{ color: MINTD, display: "inline-flex" }}><Icon name={ic} size={11} /></span><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 13, color: "var(--greyscale-dark)", lineHeight: 1 }}>{n}</span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 7, color: LT, lineHeight: 1.15 }}>{l}</span></div>); return (<Panel style={{ gap: 6 }}><Row style={{ gap: 6 }}><Cell n="128" l="Ore di studio" ic="clock" /><Cell n="342" l="Concetti" ic="check" /></Row><Row style={{ gap: 6 }}><Cell n="57" l="Lezioni" ic="book" /><Cell n="12" l="Progetti" ic="circle-check" /></Row></Panel>); },
    cert_thresholds: () => (<Panel style={{ gap: 7 }}><Row><IconChip name="award" bg={PURPL} fg={PURPD} dim={26} size={13} /><Col><Line w="60%" h={5} /><Line w="40%" h={4} /></Col></Row><Row style={{ gap: 4 }}>{[1, 1, 1, 0, 0].map((on, i) => (<div key={i} style={{ flex: 1, height: 8, borderRadius: 99, background: on ? PURP : EX }} />))}</Row><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8.5, color: LT }}>Mancano 2 corsi al certificato</span></Panel>),
    daily_exercise: () => (<Panel style={{ gap: 7 }}><Row style={{ justifyContent: "space-between" }}><Row><IconChip name="pen-to-square" bg={PURPL} fg={PURPD} dim={26} size={13} /><Chip c={PURPL} fg={PURPD}>Esercizio di oggi</Chip></Row><Chip c="var(--yellow-100)" fg="var(--yellow-600)">Da consegnare</Chip></Row><Line w="86%" /><Line w="60%" /><div style={{ alignSelf: "flex-start" }}><Chip c={MINT} fg={WHITE}>Consegna</Chip></div></Panel>),
    personal_dashboard: () => { const Cell = ({ n, l, ic }) => (<div style={{ flex: 1, minWidth: 0, background: MINTL, borderRadius: "var(--radius-md)", padding: "7px 8px", display: "flex", flexDirection: "column", gap: 3 }}><span style={{ color: MINTD, display: "inline-flex" }}><Icon name={ic} size={11} /></span><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 13, color: "var(--greyscale-dark)", lineHeight: 1 }}>{n}</span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 7, color: LT, lineHeight: 1.15 }}>{l}</span></div>); return (<Panel style={{ gap: 6 }}><Row style={{ gap: 6 }}><Cell n="28" l="Media voti" ic="award" /><Cell n="92%" l="Presenze" ic="circle-check" /></Row><Row style={{ gap: 6 }}><Cell n="1240" l="Minuti online" ic="clock" /><Cell n="7" l="Competenze" ic="medal" /></Row></Panel>); },
    projects_portfolio: () => (<Panel style={{ gap: 7 }}><Row style={{ justifyContent: "space-between" }}><Row><IconChip name="folder" bg={PURPL} fg={PURPD} dim={26} size={13} /><Chip c={PURPL} fg={PURPD}>GitHub</Chip></Row><Chip c={MINTL} fg={MINTD}>Valutato dai docenti</Chip></Row><Row><Dot c={LT} /><Line w="78%" /></Row><Row><Dot c={LT} /><Line w="56%" /></Row></Panel>),
    weighted_points: () => { const PRow = ({ l, pct, n }) => (<Row style={{ gap: 6 }}><span style={{ width: 52, fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8, color: "var(--greyscale-dark)", flexShrink: 0 }}>{l}</span><div style={{ flex: 1 }}><Bar pct={pct} c={PURP} /></div><span style={{ width: 18, fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8.5, color: "var(--greyscale-dark)", textAlign: "right", flexShrink: 0 }}>{n}</span></Row>); return (<Panel style={{ gap: 5 }}><PRow l="Progetto" pct={100} n="50" /><PRow l="Lezione" pct={50} n="25" /><PRow l="Quiz" pct={20} n="10" /><PRow l="Video" pct={10} n="5" /></Panel>); },
    weekly_streak: () => (<Panel style={{ gap: 8, alignItems: "center" }}><Row style={{ gap: 4 }}>{["L", "M", "M", "G", "V", "S", "D"].map((d, i) => (<span key={i} style={{ width: 20, height: 20, borderRadius: 99, background: i < 3 ? MINT : EX, color: i < 3 ? WHITE : LT, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8 }}>{d}</span>))}</Row><Row style={{ gap: 4 }}><span style={{ color: "var(--yellow-600)", display: "inline-flex" }}><Icon name="fire" size={12} /></span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 9, color: "var(--greyscale-dark)" }}>3 giorni / settimana</span></Row></Panel>),
    weekly_leaderboard: () => { const LRow = ({ n, l, a, b, pt, hl }) => (<Row style={{ gap: 6, background: hl ? MINTL : "transparent", borderRadius: "var(--radius-sm)", padding: "3px 5px" }}><span style={{ width: 14, fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: LT, flexShrink: 0 }}>{n}</span><Avatar letter={l} from={a} to={b} dim={20} /><div style={{ flex: 1 }}><Line w="60%" h={5} /></div><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8.5, color: "var(--greyscale-dark)" }}>{pt}</span></Row>); return (<Panel style={{ gap: 4 }}><LRow n="1" l="G" a="#0063B5" b="#3CA6FF" pt="820" /><LRow n="2" l="A" a="#EA7317" b="#F2994A" pt="640" hl /><LRow n="3" l="M" a="#04B585" b="#3CD9A0" pt="510" /></Panel>); },
    career_home: () => (<Panel style={{ gap: 7 }}><Row><IconChip name="briefcase" bg={PURP} fg={WHITE} dim={26} size={13} /><Chip c={PURPL} fg={PURPD}>Carriera</Chip></Row><Row style={{ gap: 6 }}><div style={{ flex: 1, background: MINTL, borderRadius: "var(--radius-md)", padding: "7px 8px", display: "flex", flexDirection: "column", gap: 4 }}><span style={{ color: MINTD, display: "inline-flex" }}><Icon name="comments" size={11} /></span><Line w="80%" h={4} /></div><div style={{ flex: 1, background: MINTL, borderRadius: "var(--radius-md)", padding: "7px 8px", display: "flex", flexDirection: "column", gap: 4 }}><span style={{ color: MINTD, display: "inline-flex" }}><Icon name="book" size={11} /></span><Line w="70%" h={4} /></div></Row></Panel>),
    cert_conditions: () => { const CBar = ({ l, pct }) => (<div style={{ display: "flex", flexDirection: "column", gap: 3 }}><Row style={{ justifyContent: "space-between" }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8, color: "var(--greyscale-dark)" }}>{l}</span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8, color: MINTD }}>{pct}%</span></Row><Bar pct={pct} c="var(--green-600)" /></div>); return (<Panel style={{ gap: 8 }}><CBar l="Presenze" pct={70} /><CBar l="Esercitazioni consegnate" pct={70} /></Panel>); },
    calendar_events: () => (<Panel style={{ gap: 8 }}>{[["12", "78%"], ["18", "60%"]].map(([d, w], i) => (<Row key={i}><span style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: PURPL, color: PURPD, display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 10, lineHeight: 1, flexShrink: 0 }}>{d}</span><Col><Line w={w} h={5} /><Line w="35%" h={4} /></Col></Row>))}</Panel>),
  };
  // ── Anteprima su misura (fase 3): NON ripete le parole dell'utente.
  //    Dal testo descritto si riconosce il tipo di funzionalità e si
  //    disegna una vera bozza (wireframe) del modulo, con titolo dedotto.
  const Head = ({ label, w = 40 }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: "var(--greyscale-dark)", whiteSpace: "nowrap" }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: EX }} />
    </div>
  );
  const Cell = ({ n, l, ic, bg = MINTL, fg = MINTD }) => (
    <div style={{ flex: 1, minWidth: 0, background: bg, borderRadius: "var(--radius-md)", padding: "8px 9px", display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ color: fg, display: "inline-flex" }}><Icon name={ic} size={12} /></span>
      <span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 15, color: "var(--greyscale-dark)", lineHeight: 1 }}>{n}</span>
      <span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 7.5, color: LT, lineHeight: 1.15 }}>{l}</span>
    </div>
  );
  const DateRow = ({ d, mo, wl, ic, chip, cbg, cfg, hl }) => (
    <Row style={{ gap: 9, background: hl ? PURPL : "transparent", borderRadius: "var(--radius-md)", padding: hl ? "7px 8px" : "3px 0" }}>
      <span style={{ width: 30, height: 30, borderRadius: "var(--radius-sm)", background: hl ? PURP : EX, color: hl ? "#fff" : "var(--greyscale-mid)", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0, lineHeight: 1 }}>
        <span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 12 }}>{d}</span>
        <span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 6, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.85 }}>{mo}</span>
      </span>
      <Col style={{ gap: 4 }}>
        <Row style={{ gap: 5 }}><span style={{ color: LT, display: "inline-flex" }}><Icon name={ic} size={10} /></span><Line w={wl} h={5} /></Row>
        <Line w="34%" h={4} />
      </Col>
      <Chip c={cbg} fg={cfg}>{chip}</Chip>
    </Row>
  );
  const MsgRow = ({ l, a, b, w, on }) => (
    <Row style={{ alignItems: "flex-start", gap: 8 }}>
      <Avatar letter={l} from={a} to={b} dim={26} />
      <Col style={{ gap: 4 }}>
        <Row style={{ justifyContent: "space-between" }}><Line w="34%" h={5} />{on ? <span style={{ width: 7, height: 7, borderRadius: 99, background: MINT, flexShrink: 0 }} /> : null}</Row>
        <div style={{ background: EX, borderRadius: "8px 8px 8px 2px", padding: "6px 8px", width: w }}><Line w="100%" h={4} c={LT} /></div>
      </Col>
    </Row>
  );
  function CustomScene({ text }) {
    const t = (text || "").toLowerCase();
    // Riconoscimento a punteggio: ogni categoria somma le parole-chiave trovate
    // e vince quella con più riscontri (non più il primo match della catena).
    const KEYWORDS = {
      lista:     ["elenco", "lista", "checklist", "check list", "spunta", "spuntare", "spunte", "casella", "checkbox", "attività", "attivita", "to-do", "todo", "cose da fare", "da fare", "traccia", "tracciare", "tracker", "task", "punti elenco", "voci"],
      scadenze:  ["scadenz", "promemoria", "calendari", "appuntament", "consegn", "evento", "eventi", "reminder", "termine", "deadline", "agenda", "quando", "ricorda", "data"],
      riepilogo: ["ore", "tempo", "minut", "riepilog", "statist", "media", "cruscott", "report", "grafic", "torta", "percentual", "dati", "numer", "contator", "dashboard", "andament", "monitor", "kpi", "quanto ho"],
      progressi: ["punt", "classific", "streak", "badge", "sfid", "gioc", "gamif", "livell", "premi", "medagl", "trofe", "ricompens", "competizion", "traguard"],
      rete:      ["chat", "messagg", "community", "compagn", "buddy", "tutor", "confront", "coach", "aiuto", "supporto", "domand", "rete", "forum", "grupp", "mentor", "colleg", "chiedere"],
      percorso:  ["percorso", "avanzament", "progress", "prossim", "passo", "suggeri", "master", "lezion", "studi", "roadmap", "orientament", "consigli", "cosa fare", "cosa studiare"],
      carriera:  ["lavoro", "lavori", "carriera", "offert", "colloqui", "curriculum", "portfolio", "github", "aziend", "stage", "assunz", "linkedin", "cv", "recruiter"],
      materiali: ["nota", "appunt", "material", "salv", "risors", "bookmark", "preferit", "raccolt", "librer", "dispens", "pdf", "slide", "download", "scaric"],
      notifiche: ["notific", "avvis", "campanell", "aggiornament", "alert", "novit"],
      certificati: ["certificat", "attestat", "diploma", "soglia", "riconoscim", "badge finale"],
      video:     ["video", "live", "webinar", "registrazion", "streaming", "puntat", "rivedere", "replay"],
      ai:        ["intelligenza artificiale", "assistente", "chatbot", "su misura", "personalizz", "automatic", "genera per me"],
    };
    const scores = Object.keys(KEYWORDS).map((k) => [k, KEYWORDS[k].filter((w) => t.includes(w)).length]);
    if (/\bai\b/.test(t)) scores.find((s) => s[0] === "ai")[1] += 1;
    scores.sort((a, b) => b[1] - a[1]);
    const cat = scores[0] && scores[0][1] > 0 ? scores[0][0] : "generic";
    const buildBlock = (cat) => {
    let title, bd, tag = "Bozza", ic = "list-check";
    if (cat === "lista") {
      title = "Le mie attività"; ic = "list-check";
      const LItem = ({ on, w }) => (
        <Row style={{ gap: 9, alignItems: "center" }}>
          <span style={{ width: 16, height: 16, borderRadius: 99, flexShrink: 0, background: on ? MINT : WHITE, boxShadow: on ? "none" : "inset 0 0 0 2px var(--greyscale-extralight)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>{on ? <Icon name="check" size={9} /> : null}</span>
          <Line w={w} h={6} c={on ? MINTL : EX} />
        </Row>
      );
      bd = (<React.Fragment>
        <Head label="Da completare oggi" />
        <LItem on w="72%" />
        <LItem on w="58%" />
        <LItem w="66%" />
        <LItem w="48%" />
        <Row style={{ gap: 7, marginTop: 2 }}>
          <div style={{ flex: 1, height: 28, borderRadius: 99, background: EX, display: "flex", alignItems: "center", padding: "0 12px" }}><Line w="46%" h={4} c={LT} /></div>
          <span style={{ width: 28, height: 28, borderRadius: 99, background: PURP, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name="plus" size={13} /></span>
        </Row>
      </React.Fragment>);
    } else if (cat === "scadenze") {
      title = "Scadenze e promemoria"; ic = "calendar-clock";
      bd = (<React.Fragment>
        <Head label="Prossime" />
        <DateRow d="14" mo="lug" wl="72%" ic="clipboard-list" chip="Tra 2 giorni" cbg="var(--yellow-100)" cfg="var(--yellow-600)" hl />
        <DateRow d="18" mo="lug" wl="60%" ic="pen-to-square" chip="In arrivo" cbg={MINTL} cfg={MINTD} />
        <DateRow d="25" mo="lug" wl="54%" ic="graduation-cap" chip="Evento" cbg="var(--blue-100)" cfg="var(--blue-600)" />
      </React.Fragment>);
    } else if (cat === "riepilogo") {
      title = "Il tuo riepilogo"; ic = "clipboard-list-check";
      bd = (<React.Fragment>
        <Row style={{ gap: 7, alignItems: "stretch" }}><Cell n="12h" l="Studio questa settimana" ic="clock" /><Cell n="47" l="Lezioni completate" ic="book" /></Row>
        <Row style={{ gap: 7, alignItems: "stretch" }}><Cell n="8" l="Progetti superati" ic="folder" /><Cell n="92%" l="Costanza" ic="circle-check" /></Row>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Row style={{ justifyContent: "space-between" }}><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8.5, color: "var(--greyscale-mid)" }}>Obiettivo settimanale</span><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8.5, color: MINTD }}>72%</span></Row>
          <Bar pct={72} c="var(--green-600)" />
        </div>
      </React.Fragment>);
    } else if (cat === "progressi") {
      title = "Progressi e obiettivi"; ic = "medal";
      bd = (<React.Fragment>
        <Row style={{ justifyContent: "space-between" }}>
          <Row style={{ gap: 5 }}><span style={{ color: "var(--greyscale-dark)", display: "inline-flex" }}><Icon name="medal" size={13} /></span><span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 14, color: "var(--greyscale-dark)" }}>15450 pt</span></Row>
          <Chip c={MINTL} fg={MINTD}><Icon name="fire" size={9} /> 12 giorni</Chip>
        </Row>
        <Row style={{ gap: 4 }}>{["L", "M", "M", "G", "V", "S", "D"].map((d, i) => (<span key={i} style={{ flex: 1, height: 22, borderRadius: 6, background: i < 5 ? MINT : EX, color: i < 5 ? "#fff" : LT, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 8 }}>{d}</span>))}</Row>
        <div style={{ background: MINTL, borderRadius: "var(--radius-md)", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
          {[["1", "G", "#0063B5", "#3CA6FF", "820"], ["2", "T", "#EA7317", "#F2994A", "640"], ["3", "M", "#04B585", "#3CD9A0", "510"]].map(([n, l, a, b, pt], i) => (
            <Row key={i} style={{ gap: 7 }}><span style={{ width: 12, fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: MINTD }}>{n}</span><Avatar letter={l} from={a} to={b} dim={20} /><div style={{ flex: 1 }}><Line w="56%" h={5} /></div><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 9, color: "var(--greyscale-dark)" }}>{pt}</span></Row>
          ))}
        </div>
      </React.Fragment>);
    } else if (cat === "rete") {
      title = "La tua rete"; ic = "comments";
      bd = (<React.Fragment>
        <MsgRow l="A" a="#EA7317" b="#F2994A" w="88%" on />
        <MsgRow l="T" a="#6E5DC6" b="#9B8BE0" w="70%" />
        <Row style={{ gap: 7, marginTop: 2 }}>
          <div style={{ flex: 1, height: 30, borderRadius: 99, background: EX, display: "flex", alignItems: "center", padding: "0 12px" }}><Line w="52%" h={4} c={LT} /></div>
          <span style={{ width: 30, height: 30, borderRadius: 99, background: PURP, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name="message-dots" size={13} /></span>
        </Row>
      </React.Fragment>);
    } else if (cat === "percorso") {
      title = "Il tuo percorso"; ic = "flag";
      bd = (<React.Fragment>
        <div style={{ background: MINTL, borderRadius: "var(--radius-md)", padding: "9px 12px", display: "flex", alignItems: "center", gap: 8 }}><div style={{ flex: 1 }}><Bar pct={64} c="var(--green-600)" /></div><span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 800, fontSize: 10, color: "var(--greyscale-dark)", flexShrink: 0 }}>64%</span></div>
        <Row style={{ gap: 8, background: PURPL, borderRadius: "var(--radius-md)", padding: "8px 10px" }}>
          <IconChip name="flag" bg={PURP} fg={WHITE} dim={28} size={13} />
          <Col style={{ gap: 4 }}><Chip c="#fff" fg={PURPD}>Il prossimo passo</Chip><Line w="80%" h={5} /></Col>
          <span style={{ color: PURPD, display: "inline-flex" }}><Icon name="angle-right" size={14} /></span>
        </Row>
        {[["angle-right", "70%"], ["gem", "54%"]].map(([ic, w], i) => (
          <Row key={i} style={{ gap: 7 }}><span style={{ width: 22, height: 22, borderRadius: 6, background: EX, color: "var(--greyscale-mid)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={10} /></span><Line w={w} h={5} /></Row>
        ))}
      </React.Fragment>);
    } else if (cat === "carriera") {
      title = "Carriera e opportunità"; ic = "briefcase";
      bd = (<React.Fragment>
        {[["briefcase", "78%", "New", MINT, "#fff"], ["briefcase", "62%", "3 posti", MINTL, MINTD]].map(([ic, w, chip, cbg, cfg], i) => (
          <Row key={i} style={{ gap: 8, justifyContent: "space-between" }}>
            <Row style={{ gap: 8 }}><IconChip name={ic} bg={PURPL} fg={PURPD} dim={28} size={13} /><Col style={{ gap: 4 }}><Line w="72%" h={5} /><Line w="46%" h={4} /></Col></Row>
            <Chip c={cbg} fg={cfg}>{chip}</Chip>
          </Row>
        ))}
        <Row style={{ gap: 7, marginTop: 2 }}><Chip c={PURPL} fg={PURPD}><Icon name="comments" size={9} /> Simula un colloquio</Chip><Chip c={PURPL} fg={PURPD}><Icon name="book" size={9} /> Risorse CV</Chip></Row>
      </React.Fragment>);
    } else if (cat === "materiali") {
      title = "Appunti e materiali"; ic = "bookmark";
      bd = (<React.Fragment>
        <Head label="Salvati di recente" />
        {[["book-bookmark", "76%"], ["folder", "58%"], ["pen-to-square", "66%"]].map(([ic, w], i) => (
          <Row key={i} style={{ gap: 8 }}>
            <span style={{ width: 26, height: 26, borderRadius: "var(--radius-sm)", background: PURPL, color: PURPD, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={12} /></span>
            <Col style={{ gap: 3 }}><Line w={w} h={5} /><Line w="30%" h={4} /></Col>
            <span style={{ color: LT, display: "inline-flex" }}><Icon name="bookmark" size={12} /></span>
          </Row>
        ))}
      </React.Fragment>);
    } else if (cat === "notifiche") {
      title = "Avvisi e novità"; ic = "bell";
      bd = (<React.Fragment>
        <Head label="Da vedere" />
        {[["bell", "74%", true], ["comments", "58%", true], ["clipboard-list", "66%", false]].map(([icn, w, on], i) => (
          <Row key={i} style={{ gap: 8 }}>
            <span style={{ width: 26, height: 26, borderRadius: "var(--radius-sm)", background: on ? PURPL : EX, color: on ? PURPD : LT, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={icn} size={12} /></span>
            <Col style={{ gap: 3 }}><Line w={w} h={5} /><Line w="34%" h={4} /></Col>
            {on ? <Dot s={8} c={MINT} /> : null}
          </Row>
        ))}
      </React.Fragment>);
    } else if (cat === "certificati") {
      title = "I tuoi certificati"; ic = "award";
      bd = (<React.Fragment>
        <Row style={{ gap: 8 }}><IconChip name="award" bg={PURP} fg={WHITE} dim={28} size={14} /><Col style={{ gap: 4 }}><Line w="64%" h={5} /><Line w="40%" h={4} /></Col><Chip c={MINTL} fg={MINTD}>Quasi tuo</Chip></Row>
        <Row style={{ gap: 4 }}>{[1, 1, 1, 1, 0].map((on, i) => (<div key={i} style={{ flex: 1, height: 8, borderRadius: 99, background: on ? PURP : EX }} />))}</Row>
        <span style={{ fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8.5, color: LT }}>Manca 1 corso al prossimo certificato</span>
        <Row style={{ gap: 6 }}><Chip c={PURP} fg={WHITE}><Icon name="linkedin-in" size={9} /> Condividi</Chip><Chip c={PURPL} fg={PURPD}>Vedi tutti</Chip></Row>
      </React.Fragment>);
    } else if (cat === "video") {
      title = "Live e registrazioni"; ic = "calendar-clock";
      bd = (<React.Fragment>
        <div style={{ position: "relative", background: "#1A1A2E", borderRadius: "var(--radius-md)", height: 74, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ width: 30, height: 30, borderRadius: 99, background: "rgba(255,255,255,0.92)", color: "#1A1A2E", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="angle-right" size={14} /></span>
          <span style={{ position: "absolute", top: 8, left: 8, padding: "2px 7px", borderRadius: 99, background: "var(--red-100)", color: "var(--red-600)", fontFamily: "var(--font-paragraph)", fontWeight: 700, fontSize: 8.5 }}>● Live</span>
        </div>
        {[["76%"], ["54%"]].map(([w], i) => (
          <Row key={i} style={{ gap: 8 }}><span style={{ width: 34, height: 24, borderRadius: 5, background: EX, flexShrink: 0 }} /><Col style={{ gap: 3 }}><Line w={w} h={5} /><Line w="30%" h={4} /></Col></Row>
        ))}
      </React.Fragment>);
    } else if (cat === "ai") {
      title = "Il tuo assistente AI"; ic = "gem";
      bd = (<React.Fragment>
        <Row style={{ gap: 8, background: PURPL, borderRadius: "var(--radius-md)", padding: "8px 10px" }}>
          <IconChip name="gem" bg={PURP} fg={WHITE} dim={28} size={13} />
          <Col style={{ gap: 4 }}><Chip c="#fff" fg={PURPD}>Pensato per te</Chip><Line w="82%" h={5} /><Line w="58%" h={4} /></Col>
        </Row>
        <Row style={{ gap: 7 }}>
          <div style={{ flex: 1, height: 30, borderRadius: 99, background: EX, display: "flex", alignItems: "center", padding: "0 12px" }}><Line w="60%" h={4} c={LT} /></div>
          <span style={{ width: 30, height: 30, borderRadius: 99, background: PURP, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name="gem" size={13} /></span>
        </Row>
      </React.Fragment>);
    } else {
      title = "Nuovo modulo della Home"; ic = "house";
      bd = (<React.Fragment>
        <Line w="88%" h={7} />
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 2 }}><Line w="100%" /><Line w="92%" /><Line w="64%" /></div>
        <Row style={{ gap: 7, alignItems: "stretch", marginTop: 2 }}><Cell n="-" l="Dato principale" ic="list-check" /><Cell n="-" l="Dato secondario" ic="circle-check" bg={PURPL} fg={PURPD} /></Row>
      </React.Fragment>);
    }
      return { title, ic, tag, bd };
    };
    // Punto 2: se la frase tocca più funzionalità, compone due blocchi.
    const b1 = buildBlock(cat);
    const cat2 = (scores[1] && scores[1][1] > 0 && scores[1][0] !== cat) ? scores[1][0] : null;
    const b2 = cat2 ? buildBlock(cat2) : null;
    // L'anteprima disegna la FUNZIONALITÀ dedotta (titolo + componenti DS),
    // non ripete la frase scritta dall'utente.
    return (
      <Panel style={{ gap: 9 }}>
        <Row style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
          <Row style={{ minWidth: 0 }}>
            <IconChip name={b1.ic} bg={PURP} fg={WHITE} dim={32} size={16} />
            <Col style={{ gap: 4 }}>
              <span style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: 12.5, color: "var(--greyscale-dark)", lineHeight: 1.15 }}>{b1.title}</span>
              <div style={{ alignSelf: "flex-start" }}><Chip c={PURPL} fg={PURPD}>{b1.tag}</Chip></div>
            </Col>
          </Row>
          <span style={{ color: "var(--greyscale-light)", display: "inline-flex", flexShrink: 0 }}><DSIcon name="ellipsis-vertical" size={13} /></span>
        </Row>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{b1.bd}</div>
        {b2 ? <div style={{ height: 1, background: EX, margin: "2px 0" }} /> : null}
        {b2 ? <Head label={b2.title} /> : null}
        {b2 ? <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{b2.bd}</div> : null}
        <Row style={{ gap: 6, marginTop: 2 }}>
          <Chip c={PURP} fg={WHITE}>Apri</Chip>
          <Chip c={PURPL} fg={PURPD}>Personalizza</Chip>
        </Row>
      </Panel>
    );
  }

  function ModuleThumb({ id, big }) {
    const scene = SCENES[id];
    return (
      <div aria-hidden="true" className={"baf-thumb" + (big ? " baf-thumb-lg" : "")} style={{ background: MINTL }}>
        {scene ? scene() : <IconChip name="circle" dim={34} size={18} />}
      </div>
    );
  }
  // Anteprima piccola della piattaforma per le righe del listino (step 3).
  function ListThumb({ id, catalog }) {
    const scene = SCENES[id];
    return (
      <div aria-hidden="true" className="baf-lthumb" style={{ background: catalog ? PURPL : MINTL }}>
        <div className="baf-lthumb-scale">{scene ? scene() : <IconChip name="circle" dim={30} size={16} />}</div>
      </div>
    );
  }

  const ARCH = {
    rampa:   { art: "una Rampa di lancio",      title: "Rampa di lancio",      icon: "rocket",       img: "assets/arch-rampa.png",   color: "#EA7317", casa: "la casa con la porta aperta sul mondo", desc: "Hai ricostruito per carriera e sbocco: opportunità, il prossimo master, il tavolo del vicinato." },
    cabina:  { art: "una Cabina di pilotaggio", title: "Cabina di pilotaggio", icon: "list-check",   img: "assets/arch-cabina.png",  color: "#04B585", casa: "la casa-studio, tutto a portata di mano", desc: "Hai ricostruito per l'operatività: riprendere da dove eri, stato progetti, obiettivi." },
    motore:  { art: "un Motore motivazionale",  title: "Motore motivazionale", icon: "fire",         img: "assets/arch-motore.png",  color: "#7070E0", casa: "la casa col camino sempre acceso", desc: "Hai ricostruito per spinta e relazione: gamification, community, accesso al coach." },
    bussola: { art: "una Bussola",              title: "Bussola",              icon: "location-dot", img: "assets/arch-bussola.png", color: "#E86A92", casa: "la casa piena di finestre", desc: "Hai ricostruito per orientamento e chiarezza: percorso, avanzamento, suggerimenti." },
  };
  // Badge dell'archetipo: mostra l'illustrazione del gatto (se il file esiste),
  // altrimenti ricade sull'icona su disco colorato. dim = diametro del disco.
  function ArchBadge({ arch, dim, iconSize }) {
    const [err, setErr] = React.useState(false);
    const illu = !!arch.img && !err;
    const d = dim || 88;
    // illustrazione: nessun riempimento, nessun anello, immagine ~30% più grande;
    // fallback icona: disco colorato con ombra (look originale).
    const base = illu
      ? { width: d, height: d, borderRadius: Math.round(d * 0.16), display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: arch.color + "22", overflow: "hidden", boxShadow: "0 10px 26px rgba(0,0,0,0.12)" }
      : { width: d, height: d, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: arch.color, color: "#fff", boxShadow: "0 10px 26px rgba(0,0,0,0.16)" };
    return React.createElement("span", { className: "baf-hero-badge" + (illu ? " baf-hero-badge-illu" : ""), style: base },
      illu
        ? React.createElement("img", { src: arch.img, alt: arch.title, onError: () => setErr(true), style: { width: "88%", height: "88%", objectFit: "contain" } })
        : React.createElement(DSIcon, { name: arch.icon, size: iconSize || 40 }));
  }

  function computeArch(ids) {
    const spend = {};
    ids.forEach((id) => { const f = byId[id]; if (f) spend[f.arch] = (spend[f.arch] || 0) + f.price; });
    const keys = Object.keys(spend);
    if (!keys.length) return null;
    const best = Math.max(...keys.map((k) => spend[k]));
    const tied = keys.filter((k) => spend[k] === best);
    if (tied.length === 1) return tied[0];
    const top = ids.map((id) => byId[id]).filter((f) => f && tied.includes(f.arch)).sort((a, b) => b.price - a.price)[0];
    return top ? top.arch : tied[0];
  }

  // Percentuali di spesa per ciascun archetipo (per il certificato finale).
  function archPercentages(ids) {
    const spend = { rampa: 0, cabina: 0, motore: 0, bussola: 0 };
    ids.forEach((id) => { const f = byId[id]; if (f && spend[f.arch] != null) spend[f.arch] += f.price; });
    const total = Object.keys(spend).reduce((s, k) => s + spend[k], 0);
    return Object.keys(spend)
      .map((k) => ({ key: k, pts: spend[k], pct: total ? Math.round((spend[k] / total) * 100) : 0 }))
      .sort((a, b) => b.pct - a.pct);
  }

  // ── Numero animato ──────────────────────────────────────────
  function AnimatedNumber({ value, duration = 420 }) {
    const [display, setDisplay] = React.useState(value);
    const from = React.useRef(value), raf = React.useRef(0), start = React.useRef(0);
    React.useEffect(() => {
      const a = from.current, b = value;
      if (a === b) return;
      cancelAnimationFrame(raf.current); start.current = 0;
      const tick = (ts) => {
        if (!start.current) start.current = ts;
        const t = Math.min(1, (ts - start.current) / duration);
        const e = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(a + (b - a) * e));
        if (t < 1) raf.current = requestAnimationFrame(tick); else from.current = b;
      };
      raf.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf.current);
    }, [value, duration]);
    return React.createElement(React.Fragment, null, display);
  }

  // ── Hook: stato del turno ───────────────────────────────────
  function useTurn() {
    const [cart, setCart] = React.useState(() => new Set());
    const [closed, setClosed] = React.useState(false);
    const [blocked, setBlocked] = React.useState(null);
    const [lastBuy, setLastBuy] = React.useState(null);
    const ids = Array.from(cart);
    const spent = ids.reduce((s, id) => s + (byId[id]?.price || 0), 0);
    const left = BUDGET - spent;

    const toggle = (id) => {
      if (closed) return;
      const f = byId[id];
      setCart((prev) => {
        const next = new Set(prev);
        if (next.has(id)) { next.delete(id); }
        else if (f.price <= BUDGET - Array.from(prev).reduce((s, x) => s + byId[x].price, 0)) {
          next.add(id); setLastBuy(id); setTimeout(() => setLastBuy((v) => (v === id ? null : v)), 520);
        } else {
          setBlocked(id); setTimeout(() => setBlocked((v) => (v === id ? null : v)), 440);
        }
        return next;
      });
    };
    const affordable = (id) => cart.has(id) || byId[id].price <= left;
    return { cart, ids, spent, left, closed, blocked, lastBuy, toggle, affordable,
      close: () => ids.length && setClosed(true), reopen: () => setClosed(false) };
  }

  // ── Wallet (barra budget mint) ──────────────────────────────
  function Wallet({ left, spent, total = BUDGET }) {
    return React.createElement("div", { className: "baf-wallet" },
      React.createElement("span", { className: "baf-wallet-ico" }, React.createElement(DSIcon, { name: "credit-card", size: 22 })),
      React.createElement("div", { className: "baf-wallet-main" },
        React.createElement("div", { className: "baf-wallet-label" }, "Budget disponibile"),
        React.createElement("div", { className: "baf-wallet-num" },
          React.createElement("span", { className: "baf-big" }, React.createElement(AnimatedNumber, { value: left })),
          " ", React.createElement("span", { className: "baf-unit" }, "pt"),
          "  ", React.createElement("span", { className: "baf-of" }, "di ", total)),
        React.createElement("div", { className: "baf-meter" },
          React.createElement("div", { className: "baf-meter-fill", style: { width: (spent / total) * 100 + "%" } }))));
  }

  // ── Barra di chiusura / stato chiuso ────────────────────────
  function CloseBar({ turn }) {
    if (turn.closed) {
      const archK = computeArch(turn.ids);
      const arch = archK ? ARCH[archK] : null;
      return React.createElement("div", { className: "baf-done" },
        React.createElement("span", { style: { color: "var(--brand-base)" } }, React.createElement(DSIcon, { name: "circle-check", size: 30 })),
        React.createElement("div", { className: "baf-close-info", style: { textAlign: "center", flex: "none" } },
          React.createElement("div", { className: "t" }, "Turno chiuso"),
          React.createElement("div", { className: "s" }, turn.ids.length, " funzioni · ", turn.spent, " pt spesi · ", turn.left, " pt avanzati")),
        arch && React.createElement("div", { className: "baf-done-arch" },
          React.createElement(DSIcon, { name: arch.icon, size: 18 }), "Hai costruito ", arch.art),
        React.createElement("button", { className: "baf-reopen", onClick: turn.reopen }, "Riapri il turno"));
    }
    const n = turn.ids.length;
    return React.createElement("div", { className: "baf-close" },
      React.createElement("div", { className: "baf-close-info" },
        React.createElement("div", { className: "t" }, n ? `${n} funzioni nel carrello` : "Il carrello è vuoto"),
        React.createElement("div", { className: "s" }, n ? `${turn.spent} pt spesi · puoi ancora cambiare idea` : "Compra ciò che conta di più")),
      React.createElement("button", { className: "baf-cta" + (n ? "" : " off"), onClick: turn.close }, "Chiudi il turno"));
  }

  // ═══════════ 1A · IL LISTINO ═══════════════════════════════
  function OptionListino() {
    const t = useTurn();
    return React.createElement("section", { id: "1a", className: "baf-option", "data-screen-label": "1A · Listino", style: { width: 520 } },
      React.createElement(OHead, { badge: "1A", name: "Il Listino", desc: "Un listino compatto: ogni funzione ha un prezzo, aggiungi e togli con un tocco. Il portafoglio in cima si aggiorna in tempo reale." }),
      React.createElement("div", { className: "baf-board" },
        React.createElement(Wallet, { left: t.left, spent: t.spent }),
        React.createElement("div", { className: "baf-list" },
          CATALOG.map((f) => {
            const on = t.cart.has(f.id), aff = t.affordable(f.id);
            return React.createElement("div", {
              key: f.id,
              className: "baf-lrow" + (on ? " on" : "") + (!on && !aff ? " dim" : "") + (t.blocked === f.id ? " baf-shake" : "") },
              React.createElement("span", { className: "baf-ico" + (on ? " baf-ico-on" : "") }, React.createElement(DSIcon, { name: f.icon, size: 20 })),
              React.createElement("div", { className: "baf-lbody" },
                React.createElement("div", { className: "baf-lname" }, f.name),
                React.createElement("div", { className: "baf-lreal" }, f.real)),
              React.createElement("div", { className: "baf-lright" },
                React.createElement("span", { className: "baf-price baf-lprice" }, f.price, React.createElement("span", { className: "baf-unit" }, "pt")),
                t.closed
                  ? React.createElement("span", { className: "baf-icon-btn", style: { background: on ? "var(--brand-primary)" : "var(--greyscale-extralight)", color: on ? "#063" : "var(--greyscale-light)" } },
                      React.createElement(DSIcon, { name: on ? "check" : "xmark", size: 14 }))
                  : React.createElement("button", {
                      className: "baf-toggle " + (on ? "baf-owned" : aff ? "baf-buy" : "baf-disabled"),
                      onClick: () => t.toggle(f.id) },
                      React.createElement(DSIcon, { name: on ? "check" : "plus", size: 13 }),
                      on ? "Presa" : "Aggiungi")));
          })),
        React.createElement(CloseBar, { turn: t })));
  }

  // ═══════════ 1B · I GETTONI ════════════════════════════════
  function OptionGettoni() {
    const t = useTurn();
    return React.createElement("section", { id: "1b", className: "baf-option", "data-screen-label": "1B · Gettoni", style: { width: 520 } },
      React.createElement(OHead, { badge: "1B", name: "I Gettoni", desc: "Il budget è una moneta d'oro che si svuota mentre compri. Tocca una funzione per prenderla, toccala di nuovo per rimettere i gettoni nel salvadanaio." }),
      React.createElement("div", { className: "baf-board" },
        React.createElement("div", { className: "baf-coinwall" },
          React.createElement("div", { className: "baf-coin" },
            React.createElement("b", null, React.createElement(AnimatedNumber, { value: t.left })),
            React.createElement("span", null, "gettoni")),
          React.createElement("div", { className: "baf-coinwall-txt" },
            React.createElement("div", { className: "t" }, "Ti restano ", t.left, " di ", BUDGET),
            React.createElement("div", { className: "s" }, t.ids.length ? `${t.ids.length} funzioni prese · ${t.spent} spesi` : "Spendi dove senti che serve di più"))),
        React.createElement("div", { className: "baf-tiles" },
          CATALOG.map((f) => {
            const on = t.cart.has(f.id), aff = t.affordable(f.id);
            return React.createElement("button", {
              key: f.id, type: "button",
              className: "baf-tile" + (on ? " on" : "") + (!on && !aff ? " no" : "") + (t.blocked === f.id ? " baf-shake" : ""),
              onClick: () => t.toggle(f.id), disabled: t.closed },
              t.lastBuy === f.id && React.createElement("span", { className: "baf-coin-drop" }, React.createElement(DSIcon, { name: "medal", size: 18 })),
              React.createElement("div", { className: "baf-tile-top" },
                React.createElement("span", { className: "baf-ico" + (on ? " baf-ico-on" : "") }, React.createElement(DSIcon, { name: f.icon, size: 18 })),
                React.createElement("span", { className: "baf-tag" }, f.price)),
              React.createElement("div", { className: "baf-tile-name" }, f.name),
              React.createElement("div", { className: "baf-tile-foot " + (on ? "have" : "buy") },
                React.createElement(DSIcon, { name: on ? "check" : "plus", size: 12 }),
                on ? "Presa, tocca per rendere" : (aff ? "Tocca per comprare" : "Gettoni finiti")));
          })),
        React.createElement(CloseBar, { turn: t })));
  }

  // ═══════════ 1C · IL TABELLONE ═════════════════════════════
  function OptionTabellone() {
    const t = useTurn();
    const inCatalog = CATALOG.filter((f) => !t.cart.has(f.id));
    const inHome = t.ids.map((id) => byId[id]);
    return React.createElement("section", { id: "1c", className: "baf-option", "data-screen-label": "1C · Tabellone", style: { width: 620 } },
      React.createElement(OHead, { badge: "1C", name: "Il Tabellone", desc: "Due colonne: il Catalogo e la tua Home. Sposta le funzioni a destra per comprarle, a sinistra per rivenderle. La reversibilità è il cuore del gioco." }),
      React.createElement("div", { className: "baf-board baf-board-wide" },
        React.createElement(Wallet, { left: t.left, spent: t.spent }),
        React.createElement("div", { className: "baf-cols" },
          React.createElement("div", { className: "baf-col" },
            React.createElement("div", { className: "baf-col-head" },
              React.createElement(DSIcon, { name: "list-ul", size: 16, color: "var(--greyscale-mid)" }),
              React.createElement("h4", null, "Catalogo"),
              React.createElement("span", { className: "baf-count" }, inCatalog.length)),
            inCatalog.map((f) => {
              const aff = t.affordable(f.id);
              return React.createElement("div", { key: f.id, className: "baf-crow" + (!aff ? " no" : "") + (t.blocked === f.id ? " baf-shake" : "") },
                React.createElement("span", { className: "baf-ico", style: { width: 32, height: 32 } }, React.createElement(DSIcon, { name: f.icon, size: 16 })),
                React.createElement("div", { className: "baf-crow-body" },
                  React.createElement("div", { className: "baf-crow-name" }, f.name)),
                React.createElement("span", { className: "baf-crow-price" }, f.price),
                !t.closed && React.createElement("button", {
                  className: "baf-icon-btn", title: aff ? "Compra" : "Budget insufficiente",
                  style: aff ? { background: "var(--accent-mid)", color: "#fff" } : { background: "var(--greyscale-extralight)", color: "var(--greyscale-light)", cursor: "not-allowed" },
                  onClick: () => t.toggle(f.id) }, React.createElement(DSIcon, { name: "angle-right", size: 15 })));
            })),
          React.createElement("div", { className: "baf-col baf-col-home" },
            React.createElement("div", { className: "baf-col-head" },
              React.createElement(DSIcon, { name: "house", size: 16, color: "var(--brand-secondary)" }),
              React.createElement("h4", null, "La tua Home"),
              React.createElement("span", { className: "baf-count" }, inHome.length)),
            inHome.length === 0
              ? React.createElement("div", { className: "baf-empty" }, "Sposta qui le funzioni che vuoi nella nuova Home.")
              : inHome.map((f) =>
                  React.createElement("div", { key: f.id, className: "baf-crow" },
                    !t.closed && React.createElement("button", {
                      className: "baf-icon-btn", title: "Rivendi",
                      style: { background: "#fff", color: "var(--brand-secondary)", boxShadow: "var(--shadow-card)" },
                      onClick: () => t.toggle(f.id) }, React.createElement(DSIcon, { name: "arrow-left", size: 15 })),
                    React.createElement("span", { className: "baf-ico baf-ico-on", style: { width: 32, height: 32 } }, React.createElement(DSIcon, { name: f.icon, size: 16 })),
                    React.createElement("div", { className: "baf-crow-body" },
                      React.createElement("div", { className: "baf-crow-name" }, f.name)),
                    React.createElement("span", { className: "baf-crow-price" }, f.price)))
          )),
        React.createElement(CloseBar, { turn: t })));
  }

  // ── Intestazione opzione ────────────────────────────────────
  function OHead({ badge, name, desc }) {
    return React.createElement("div", { className: "baf-ohead" },
      React.createElement("div", { className: "baf-badge-row" },
        React.createElement("a", { className: "baf-badge", href: "#" + badge.toLowerCase(), style: { textDecoration: "none" } }, badge),
        React.createElement("h2", null, name)),
      React.createElement("p", { className: "baf-odesc" }, desc));
  }

  function TurnHeader({ phase, title, desc, done }) {
    return React.createElement("div", { className: "baf-turnhead" },
      React.createElement("span", { className: "baf-phase" + (done ? " done" : "") }, phase),
      React.createElement("h1", null, title),
      desc && React.createElement("p", null, desc));
  }

  // ── Stato identità (per anteprima, indipendente per versione) ─
  function useIdentity() {
    const [id, setId] = React.useState({ name: "", team: "", tenure: "", warmup: "" });
    const set = (patch) => setId((v) => Object.assign({}, v, patch));
    return [id, set];
  }

  function ChipGroup({ options, value, onChange }) {
    return React.createElement("div", { className: "baf-chips" },
      options.map((o) => React.createElement("button", {
        key: o, type: "button", className: "baf-chip",
        "aria-pressed": value === o, onClick: () => onChange(o) }, o)));
  }

  function Field({ label, hint, children }) {
    return React.createElement("div", { className: "baf-field" },
      React.createElement("label", { className: "baf-flabel" }, label),
      hint && React.createElement("div", { className: "baf-fhint" }, hint),
      children);
  }

  // avatar dello studente impersonato: dipende dalla scelta uomo/donna
  const STUD = { src: "assets/studente.png" };
  const WARMUP_LABEL = "Stavi chiacchierando su Circle con un altro studente. Ti aveva confidato qualcosa sulla piattaforma?";
  const WARMUP_HINT = "Scrivi l'ultima cosa che uno studente ti ha detto o scritto sulla piattaforma.";
  // ═══════════ FASE 1 · INGRESSO — la corsa fuori dalle fiamme ═══
  // Niente muro di testo: un dialogo di corsa. Il gatto ti ha appena
  // svegliato e ti trascina fuori, una domanda alla volta, mentre la
  // casa brucia.
  function WizBeat({ reply, children }) {
    const [typing, setTyping] = React.useState(true);
    React.useEffect(() => {
      const t = setTimeout(() => setTyping(false), 620);
      return () => clearTimeout(t);
    }, []);
    // porta in vista l'ultima bolla (sia i puntini che il messaggio)
    React.useEffect(() => {
      const t = setTimeout(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }, [typing]);
    return React.createElement("div", { className: "baf-wiz-beat" },
      React.createElement("div", { className: "baf-wiz-them" },
        React.createElement("span", { className: "baf-cat-ava", title: "Aster, il tuo Angelo Custode" }, React.createElement("img", { src: "assets/aster-avatar-sm.png", alt: "" })),
        typing
          ? React.createElement("div", { className: "baf-wiz-bubble baf-wiz-typing" },
              React.createElement("i", null), React.createElement("i", null), React.createElement("i", null))
          : React.createElement("div", { className: "baf-wiz-bubble baf-wiz-rise" },
              React.createElement("span", { className: "baf-wiz-speaker" }, "Aster"),
              children)),
      !typing && reply && React.createElement("div", { className: "baf-wiz-reply baf-wiz-rise" }, reply,
        React.createElement("span", { className: "baf-stud-ava", title: "Lo studente che impersoni" }, React.createElement("img", { src: STUD.src, alt: "" }))));
  }

  function IngressoChat({ id, set, onSubmit, ctaLabel }) {
    const name = id.name.trim();
    const [nameDone, setNameDone] = React.useState(() => !!name);
    const valid = name && id.team && id.tenure;
    const confirmName = () => { if (name) setNameDone(true); };
    const B = (t) => React.createElement("b", null, t);

    return React.createElement("div", { className: "baf-wiz" },
      React.createElement(WizBeat, {
        reply: nameDone
          ? React.createElement("button", { type: "button", className: "baf-wiz-said", title: "Cambia nome", onClick: () => setNameDone(false) }, name)
          : React.createElement("div", { className: "baf-wiz-say" },
              React.createElement("input", {
                className: "baf-pass-name", placeholder: "scrivi il tuo nome…", value: id.name,
                onChange: (e) => set({ name: e.target.value }),
                onKeyDown: (e) => { if (e.key === "Enter") confirmName(); },
                "aria-label": "Il tuo nome" }),
              React.createElement("button", { type: "button", className: "baf-wiz-ok", disabled: !name, title: "Conferma", onClick: confirmName },
                React.createElement(DSIcon, { name: "check", size: 16 }))) },
        React.createElement("p", null, "Dobbiamo sbrigarci. ", B("Come ti chiami"), "?")),

      nameDone && React.createElement(WizBeat, { key: "team",
        reply: React.createElement(ChipGroup, { options: TEAMS, value: id.team, onChange: (v) => set({ team: v }) }) },
        React.createElement("p", null, B(name), ", piacere! Prima dell'incendio, di quale team facevi parte?")),

      nameDone && id.team && React.createElement(WizBeat, { key: "tenure",
        reply: React.createElement(ChipGroup, { options: TENURES, value: id.tenure, onChange: (v) => set({ tenure: v }) }) },
        React.createElement("p", null, "E da quanto vivi in questo villaggio?")),

      nameDone && id.team && id.tenure && React.createElement(WizBeat, { key: "pronti",
        reply: React.createElement("button", {
          type: "button", className: "baf-cta baf-cta-sm",
          onClick: () => { if (onSubmit && valid) onSubmit(); } }, ctaLabel || "Continua") },
        React.createElement("p", null, "Bene, ", B("siamo pronti"), "!")));
  }

  function IngressoView(id, set, onSubmit, ctaLabel) {
    return React.createElement(IngressoChat, { id: id, set: set, onSubmit: onSubmit, ctaLabel: ctaLabel });
  }
  function Ingresso() {
    const [id, set] = useIdentity();
    return React.createElement("section", { id: "3a", className: "baf-option", "data-screen-label": "Ingresso", style: { width: 720 } },
      React.createElement(OHead, { badge: "3A", name: "Ingresso — il Genio del Trasloco", desc: "Niente muro di testo: il Genio ti trasforma in uno studente e compila il contratto in dialogo, una domanda alla volta." }),
      IngressoView(id, set));
  }

  // ── Dati d'esempio per l'anteprima del reward ───────────────
  const SAMPLE_ID = { name: "Giulia", team: "Prodotto", tenure: "2+ anni" };
  const SAMPLE_CART = ["resume_course", "project_status", "weekly_goal", "news"];
  function sampleData() {
    const items = SAMPLE_CART.map((id) => byId[id]);
    const spent = items.reduce((s, f) => s + f.price, 0);
    const archK = computeArch(SAMPLE_CART);
    return { items, spent, left: BUDGET - spent, arch: ARCH[archK] };
  }

  // ── Dati seed del quartiere (per la vetrina di team) ────────
  const SEED = [
    { name: "Giulia",  team: "Prodotto",  cart: ["resume_course", "project_status", "weekly_goal", "news"] },
    { name: "Marco",   team: "Prodotto",  cart: ["resume_course", "project_status", "saved_materials"] },
    { name: "Dario",   team: "Prodotto",  cart: ["resume_course", "gamification", "path_progress"] },
    { name: "Anna",    team: "Growth", cart: ["portfolio_review", "job_opportunities", "next_master", "news"] },
    { name: "Elisa",   team: "Growth", cart: ["next_master", "job_opportunities", "portfolio_review"] },
    { name: "Luca",    team: "Customer Care",  cart: ["coach_access", "community_feed", "gamification", "live_events"] },
    { name: "Marta",   team: "Customer Care",  cart: ["coach_access", "gamification", "personal_suggestions", "news"] },
    { name: "Federico",team: "Education", cart: ["path_progress", "personal_suggestions", "weekly_goal", "news"] },
    { name: "Sara",    team: "Education", cart: ["path_progress", "personal_suggestions", "resume_course"] },
  ].map((r) => Object.assign({}, r, { archK: computeArch(r.cart) }));

  const filterTeam = (team) => (team === "Tutti" ? SEED : SEED.filter((r) => r.team === team));
  function archTally(list) {
    const t = { rampa: 0, cabina: 0, motore: 0, bussola: 0 };
    list.forEach((r) => { if (r.archK) t[r.archK]++; });
    return t;
  }
  function featureRank(list) {
    const c = {};
    list.forEach((r) => r.cart.forEach((id) => { c[id] = (c[id] || 0) + 1; }));
    return Object.keys(c).map((id) => ({ f: byId[id], n: c[id] })).sort((a, b) => b.n - a.n);
  }
  // funzione più contesa: comprata da ~metà, concentrata in pochi team
  function divisiveFeature(list) {
    const total = list.length; if (total < 2) return null;
    const c = {}, teams = {};
    list.forEach((r) => new Set(r.cart).forEach((id) => {
      c[id] = (c[id] || 0) + 1; (teams[id] = teams[id] || new Set()).add(r.team);
    }));
    let best = null;
    Object.keys(c).forEach((id) => {
      const inN = c[id], outN = total - inN; if (!outN) return;
      const score = Math.min(inN, outN) * 10 - teams[id].size;
      if (!best || score > best.score) best = { id, inN, outN, score, teams: Array.from(teams[id]) };
    });
    return best ? { f: byId[best.id], inN: best.inN, outN: best.outN, teams: best.teams } : null;
  }

  // ═══════════ FASE 4 · VETRINA (finale) ═════════════════════
  // galleria delle case (6B) + nota informativa sulla funzione più contesa
  function Vetrina() {
    const [team, setTeam] = React.useState("Tutti");
    const list = filterTeam(team);
    const split = divisiveFeature(list);
    return React.createElement("section", { id: "7a", className: "baf-option", "data-screen-label": "Vetrina", style: { width: 560 } },
      React.createElement(OHead, { badge: "7A", name: "Le case del team — versione finale", desc: "La parete delle insegne: una card per ogni Home costruita, con archetipo e funzioni-chiave. In cima, la nota su cosa divide il team." }),
      React.createElement("div", { className: "baf-board" },
        React.createElement("div", { className: "baf-vt-filter" },
          React.createElement("span", { className: "lbl" }, "Team"),
          ["Tutti"].concat(TEAMS).map((tm) => React.createElement("button", { key: tm, type: "button", className: "baf-vt-chip", "aria-pressed": team === tm, onClick: () => setTeam(tm) }, tm))),
        split && React.createElement("div", { className: "baf-splitnote" },
          React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: "shuffle", size: 16 })),
          React.createElement("div", null,
            React.createElement("div", { className: "k" }, "Su cosa il ", team === "Tutti" ? "quartiere" : "team", " è spaccato"),
            React.createElement("div", { className: "t" },
              React.createElement("b", null, split.f.name), ": ", split.inN, " la mettono in Home, ", split.outN, " la lasciano fuori.",
              team === "Tutti" && split.teams.length <= 2 ? " Solo " + split.teams.join(" e ") + "." : ""))),
        React.createElement("div", { className: "baf-gal" },
          list.map((r) => {
            const a = ARCH[r.archK];
            const top = r.cart.map((id) => byId[id]).sort((x, y) => y.price - x.price).slice(0, 3);
            return React.createElement("div", { key: r.name, className: "baf-gal-card" },
              React.createElement("div", { className: "baf-gal-strip", style: { background: a.color } },
                React.createElement(DSIcon, { name: a.icon, size: 20 }),
                React.createElement("div", { className: "t" },
                  React.createElement("div", { className: "nm" }, r.name),
                  React.createElement("div", { className: "tm" }, r.team))),
              React.createElement("div", { className: "baf-gal-body" },
                React.createElement("div", { className: "ar", style: { color: a.color } }, a.title),
                React.createElement("div", { className: "baf-gal-feats" },
                  top.map((f) => React.createElement("span", { key: f.id, className: "baf-gal-feat" }, React.createElement(DSIcon, { name: f.icon, size: 11 }), f.name)))));
          }))));
  }

  // ═══════════ FASE 3 · REWARD (finale) ═════════════════════
  // insegna-hero (4B) + Home costruita a blocchi (4C) al posto delle chips
  function RewardView(d, total) {
    const cap = total || BUDGET;
    const pct = archPercentages(d.items.filter((f) => !f.custom).map((f) => f.id)).filter((p) => p.pct > 0);
    return React.createElement("div", { className: "baf-board baf-hero" },
        React.createElement("div", { className: "baf-hero-top" },
          React.createElement(ArchBadge, { arch: d.arch, dim: 150, iconSize: 56 }),
          React.createElement("div", { className: "baf-hero-headings" },
            React.createElement("div", { className: "baf-hero-name", style: { color: d.arch.color } }, d.arch.title),
            React.createElement("div", { className: "baf-hero-casa" }, "“", d.arch.casa, "”"))),
        React.createElement("p", { className: "baf-hero-desc" }, d.arch.desc),
        React.createElement("div", { className: "baf-hero-mirror" }, "Percentuali, non voti: nessuna casa è quella giusta."),
        React.createElement("div", { className: "baf-hero-sum" },
          pct.length > 0 && React.createElement("div", { className: "baf-arch-pct" },
            React.createElement("div", { className: "baf-arch-pct-h" }, "Come hai distribuito la spesa"),
            React.createElement("div", { className: "baf-arch-pie-wrap" },
              React.createElement("span", { className: "baf-arch-pie", "aria-hidden": "true", style: { background: (function () { let acc = 0; return "conic-gradient(" + pct.map((p) => { const from = acc; acc += p.pct; return ARCH[p.key].color + " " + from + "% " + acc + "%"; }).join(", ") + ")"; })() } },
                React.createElement("span", { className: "hole" }, React.createElement(DSIcon, { name: "house", size: 16 }))),
              React.createElement("div", { className: "baf-arch-pie-legend" },
                pct.map((p) => React.createElement("div", { key: p.key, className: "baf-arch-pie-row" },
                  React.createElement("span", { className: "sw", style: { background: ARCH[p.key].color } }),
                  React.createElement("span", { className: "nm" }, React.createElement(DSIcon, { name: ARCH[p.key].icon, size: 12 }), ARCH[p.key].title,
                    React.createElement("span", { className: "baf-tip", tabIndex: 0 },
                      React.createElement(DSIcon, { name: "circle-info", size: 12 }),
                      React.createElement("span", { className: "baf-tip-pop" },
                        React.createElement("b", null, ARCH[p.key].casa),
                        ARCH[p.key].desc))),
                  React.createElement("span", { className: "v" }, p.pct, "%")))))),
          React.createElement("div", { className: "baf-hero-budget" },
            React.createElement(DSIcon, { name: "credit-card", size: 14 }), d.spent, " di ", cap, " pt spesi · ", d.items.length, " arredi nella tua casa")));
  }
  function Reward() {
    return React.createElement("section", { id: "5a", className: "baf-option", "data-screen-label": "Reward", style: { width: 540 } },
      React.createElement(OHead, { badge: "5A", name: "Reward — versione finale", desc: "L'archetipo è l'eroe; al posto delle chips vedi la Home che hai costruito, blocco per blocco." }),
      RewardView(sampleData()));
  }

  // ── Stato discovery (vecchia Home) ──────────────────────────
  const dvReasonValid = (s) => (s || "").trim().length >= 1;
  const dvEvidenceValid = (s) => (s || "").trim().length >= 1;
  const EVIDENCE_BONUS = 5;
  function dvApi(entries, setEntries) {
    const patch = (id, p) => setEntries((e) => Object.assign({}, e, { [id]: Object.assign({ action: null, reason: "", evidence: "", image: null }, e[id], p) }));
    const hasProof = (en) => !!en && (dvEvidenceValid(en.evidence) || !!en.image);
    const reviewed = SHELF.filter((m) => entries[m.id] && entries[m.id].action).length;
    const problems = SHELF.filter((m) => entries[m.id] && entries[m.id].action === "ko").length;
    const proofs = SHELF.filter((m) => hasProof(entries[m.id])).length;
    return {
      entries, hasProof, reviewed, problems, proofs, bonus: proofs * EVIDENCE_BONUS,
      setAction: (id, action) => patch(id, { action }),
      setReason: (id, reason) => patch(id, { reason }),
      setEvidence: (id, evidence) => patch(id, { evidence }),
      setImage: (id, image) => patch(id, { image }),
    };
  }
  function useDiscovery() {
    const [entries, setEntries] = React.useState({});
    return dvApi(entries, setEntries);
  }

  const DV_Q = "D'istinto: lo porto o lo lascio?";
  const DV_KO_LABEL = "Veloce: una lamentela, un ticket, qualcosa che ti ha stancato.";

  // blocco prova opzionale: testo e/o immagine → +5 al budget
  function EvidenceBlock({ id, entry, dv }) {
    const fileRef = React.useRef(null);
    const valid = dv.hasProof(entry);
    const [plus, setPlus] = React.useState(false);
    const was = React.useRef(valid);
    React.useEffect(() => {
      if (valid && !was.current) { setPlus(true); const t = setTimeout(() => setPlus(false), 1000); was.current = valid; return () => clearTimeout(t); }
      was.current = valid;
    }, [valid]);
    const pick = (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => dv.setImage(id, { name: f.name, url: r.result });
      r.readAsDataURL(f);
    };
    return React.createElement("div", { className: "baf-ev" + (valid ? " filled" : "") },
      plus && React.createElement("span", { className: "baf-ev-plus" }, "+", EVIDENCE_BONUS),
      React.createElement("div", { className: "baf-ev-optlabel" }, "Domanda facoltativa"),
      React.createElement("div", { className: "baf-ev-head" },
        React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: "gem", size: 16 })),
        React.createElement("span", { className: "l" }, "Hai una prova a supporto della tua scelta?"),
        React.createElement("span", { className: "tag" }, valid ? "+" + EVIDENCE_BONUS + " pt guadagnati" : "guadagni +" + EVIDENCE_BONUS + " pt")),
      React.createElement("textarea", { rows: 2, placeholder: "Incolla o cita un dato reale: un ticket, un messaggio di uno studente, un numero da un report.", value: entry.evidence || "", onChange: (e) => dv.setEvidence(id, e.target.value) }));
  }

  // ═══════════ DISCOVERY-A · IL SOPRALLUOGO (deck) ═══════════
  function DiscoveryDeck({ dv: dvProp, onDone, onRestart, bare, onStage } = {}) {
    const dvLocal = useDiscovery();
    const dv = dvProp || dvLocal;
    const [i, setI] = React.useState(0);
    React.useEffect(() => { if (bare && typeof window !== "undefined" && window.scrollTo) window.scrollTo(0, 0); }, [i]);
    const done = i >= SHELF.length;
    const m = done ? null : SHELF[i];
    const entry = m ? dv.entries[m.id] || {} : {};
    const canNext = !!entry.action && dvReasonValid(entry.reason);
    const tookList = SHELF.filter((s) => (dv.entries[s.id] || {}).action === "ok");
    const leftList = SHELF.filter((s) => (dv.entries[s.id] || {}).action === "ko");
    const recovered = leftList.reduce((s, it) => s + it.value, 0) + dv.bonus;
    React.useEffect(() => { if (onStage) onStage(done); }, [done]);
    return React.createElement(bare ? React.Fragment : "section", bare ? {} : { id: "dva", className: "baf-option", "data-screen-label": "Discovery deck", style: { width: 460 } },
      bare ? null : React.createElement(OHead, { badge: "DA", name: "Il sopralluogo", desc: "Cammini nella vecchia stanza un oggetto alla volta: di ognuno dici se ti è servito o no. Un ricordo concreto — un ticket, un messaggio — vale budget per la casa nuova." }),
      React.createElement("div", { className: "baf-board baf-dv" },
        React.createElement("div", { className: "baf-dv-dots" },
          SHELF.map((_, k) => React.createElement("i", { key: k, className: k < i ? "done" : k === i ? "now" : "" })),
          dv.bonus > 0 && React.createElement("span", { className: "baf-dv-bonus" }, React.createElement(DSIcon, { name: "gem", size: 12 }), "+", dv.bonus, " recupero"),
          React.createElement("span", { className: "lbl" }, Math.min(i + 1, SHELF.length), "/", SHELF.length)),
        done
          ? React.createElement("div", { className: "baf-dv-done baf-dv-report" },
              React.createElement("div", { className: "baf-dv-report-head" },
                React.createElement("span", { className: "baf-dv-report-ava" }, React.createElement("img", { src: "assets/aster-avatar-sm.png", alt: "Aster" })),
                React.createElement("div", null,
                  React.createElement("div", { className: "nm" }, "Aster"),
                  React.createElement("div", { className: "big" }, "Ecco cosa hai portato via dalle fiamme"))),
              React.createElement("div", { className: "baf-dv-report-pts" },
                React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: "medal", size: 20 })),
                React.createElement("div", null,
                  React.createElement("div", { className: "k" }, "Punti recuperati"),
                  React.createElement("div", { className: "v" }, React.createElement(AnimatedNumber, { value: recovered }), " pt")),
                React.createElement("div", { className: "note" }, "Li spenderai per ricostruire la casa")),
              React.createElement("div", { className: "baf-dv-recap" },
                React.createElement("div", { className: "baf-dv-recol took" },
                  React.createElement("div", { className: "h" }, React.createElement(DSIcon, { name: "circle-check", size: 13 }), "Portato via (", tookList.length, ")"),
                  tookList.length
                    ? tookList.map((s) => React.createElement("div", { key: s.id, className: "it" }, React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: s.icon, size: 13 })), React.createElement("span", { className: "nm" }, s.name)))
                    : React.createElement("div", { className: "empty" }, "Niente")),
                React.createElement("div", { className: "baf-dv-recol left" },
                  React.createElement("div", { className: "h" }, React.createElement(DSIcon, { name: "fire", size: 13 }), "Lasciato alle fiamme (", leftList.length, ")"),
                  leftList.length
                    ? leftList.map((s) => React.createElement("div", { key: s.id, className: "it" }, React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: s.icon, size: 13 })), React.createElement("span", { className: "nm" }, s.name)))
                    : React.createElement("div", { className: "empty" }, "Niente"))),
              React.createElement("div", { className: "baf-dv-done-cta" },
                React.createElement("button", { className: "baf-cta baf-cta-ghost", onClick: () => { setI(0); if (onRestart) onRestart(); } }, React.createElement(DSIcon, { name: "arrow-left", size: 13 }), "Ricomincia"),
                React.createElement("button", { className: "baf-cta", onClick: onDone || (() => setI(0)) }, "Continua"))) 
          : React.createElement(React.Fragment, null,
              React.createElement("div", { className: "baf-dv-card" },
                React.createElement("div", { className: "baf-dv-imgwrap" }, React.createElement(ModuleThumb, { id: m.id, big: true })),
                React.createElement("div", { className: "baf-dv-cbody" },
                  React.createElement("div", { className: "baf-dv-head" },
                    React.createElement("span", { className: "baf-ico" }, React.createElement(DSIcon, { name: m.icon, size: 20 })),
                    React.createElement("div", null,
                      React.createElement("div", { className: "baf-dv-name" }, m.name),
                      React.createElement("div", { className: "baf-dv-desc" }, m.desc))),
                  React.createElement("div", { className: "baf-dv-q" }, DV_Q),
                  React.createElement("div", { className: "baf-dv-actions" },
                    React.createElement("button", { className: "baf-dv-act ok", "aria-pressed": entry.action === "ok", onClick: () => dv.setAction(m.id, "ok") },
                      React.createElement(DSIcon, { name: "circle-check", size: 15 }), "Lo porto"),
                    React.createElement("button", { className: "baf-dv-act ko", "aria-pressed": entry.action === "ko", onClick: () => dv.setAction(m.id, "ko") },
                      React.createElement(DSIcon, { name: "arrow-right", size: 15 }), "Lo lascio · +", m.value, " pt")),
                  entry.action && React.createElement("div", { className: "baf-dv-comment" },
                    React.createElement("div", { className: "baf-dv-clabel" },
                      React.createElement("span", { className: "l" }, entry.action === "ok" ? "Perché decidi di portarlo?" : "Perché decidi di lasciarlo?"),
                      React.createElement("span", { className: "c", style: { color: dvReasonValid(entry.reason) ? "var(--brand-secondary)" : "var(--greyscale-light)" } }, dvReasonValid(entry.reason) ? "ok" : "scrivi qualcosa")),
                    React.createElement("textarea", { rows: 3, placeholder: entry.action === "ok" ? "Chi lo usa davvero? A cosa serve?" : DV_KO_LABEL, value: entry.reason || "", onChange: (e) => dv.setReason(m.id, e.target.value) })),
                  entry.action && React.createElement(EvidenceBlock, { id: m.id, entry: entry, dv: dv }))),
              React.createElement("div", { className: "baf-dv-nav" },
                React.createElement("button", { className: "baf-dv-back", disabled: i === 0, onClick: () => setI((v) => Math.max(0, v - 1)) }, React.createElement(DSIcon, { name: "arrow-left", size: 13 }), "Indietro"),
                React.createElement("button", { className: "baf-cta" + (canNext ? "" : " off"), style: { marginLeft: "auto" }, onClick: () => canNext && setI((v) => v + 1) }, i === SHELF.length - 1 ? "Finisci" : "Avanti")))));
  }

  // ═══════════ DISCOVERY-B · LA BACHECA (griglia) ═══════════
  function DiscoveryBoard() {
    const dv = useDiscovery();
    return React.createElement("section", { id: "dvb", className: "baf-option", "data-screen-label": "Discovery bacheca", style: { width: 620 } },
      React.createElement(OHead, { badge: "DB", name: "La bacheca da smontare", desc: "Tutta la vecchia Home a colpo d'occhio: passi in rassegna i moduli e marchi quelli che non funzionano, commentando il problema. Panoramica, non lineare." }),
      React.createElement("div", { className: "baf-board" },
        React.createElement("div", { className: "baf-dv-grid" },
          SHELF.map((m) => {
            const entry = dv.entries[m.id] || {};
            return React.createElement("div", { key: m.id, className: "baf-dvg" + (entry.action === "ko" ? " ko" : entry.action === "ok" ? " ok" : "") },
              React.createElement("div", { className: "baf-dvg-img" }, React.createElement(ModuleThumb, { id: m.id })),
              React.createElement("div", { className: "baf-dvg-body" },
                React.createElement("div", { className: "baf-dvg-name" }, m.name),
                React.createElement("div", { className: "baf-dvg-btns" },
                  React.createElement("button", { className: "baf-dvg-btn ok", "aria-pressed": entry.action === "ok", onClick: () => dv.setAction(m.id, "ok") },
                    React.createElement(DSIcon, { name: "circle-check", size: 12 }), "Va bene"),
                  React.createElement("button", { className: "baf-dvg-btn ko", "aria-pressed": entry.action === "ko", onClick: () => dv.setAction(m.id, "ko") },
                    React.createElement(DSIcon, { name: "circle-xmark", size: 12 }), "Elimina")),
                entry.action === "ko" && React.createElement("div", { className: "baf-dvg-comment" },
                  React.createElement("textarea", { rows: 2, placeholder: "Perché non funziona? Un episodio concreto.", value: entry.reason || "", onChange: (e) => dv.setReason(m.id, e.target.value) }))));
          })),
        React.createElement("div", { className: "baf-dv-foot" },
          React.createElement("div", { className: "info" },
            React.createElement("div", { className: "t" }, dv.problems, " problem", dv.problems === 1 ? "a segnalato" : "i segnalati"),
            React.createElement("div", { className: "s" }, dv.reviewed, "/", SHELF.length, " moduli passati in rassegna")),
          React.createElement("button", { className: "baf-cta" + (dv.reviewed ? "" : " off") }, "Vai a comprare"))));
  }

  // ── App ─────────────────────────────────────────────────────
  function BuyAFeature() {
    return React.createElement("div", { className: "baf-canvas" },
      React.createElement("div", { className: "baf-turn" },
        React.createElement(TurnHeader, {
          phase: "Fase 2 · Discovery — scelto: DA", done: true,
          title: "Cosa non funziona nella Home di oggi",
          desc: "Prima di comprare il nuovo, si smonta il vecchio: un modulo alla volta si dice cosa non va (o perché lo si tiene) commentando con un episodio. Ogni prova concreta — un ricordo o un'immagine — vale +5 di budget per la nuova Home. È qui che nasce la mappa dei problemi." }),
        React.createElement("div", { className: "baf-row" },
          React.createElement(DiscoveryDeck, null))),
      React.createElement("div", { className: "baf-turn" },
        React.createElement(TurnHeader, {
          phase: "Fase 5 · Vetrina di team — finale", done: true,
          title: "Il quartiere delle Home",
          desc: "Fuori cronometro: la parete delle insegne di team, filtrabile, con in cima la nota su cosa divide il quartiere — la funzione più contesa, calcolata dai dati. Esempio: 9 partecipanti sui 4 team." }),
        React.createElement("div", { className: "baf-row" },
          React.createElement(Vetrina, null))),
      React.createElement("div", { className: "baf-turn" },
        React.createElement(TurnHeader, {
          phase: "Fase 4 · Reward — finale", done: true,
          title: "Il reward: che Home hai costruito",
          desc: "L'archetipo al centro (che Home hai in testa) e, sotto, la Home che hai costruito blocco per blocco — i più costosi occupano più spazio, colorati per archetipo. Esempio: Giulia → Cabina di pilotaggio." }),
        React.createElement("div", { className: "baf-row" },
          React.createElement(Reward, null))),
      React.createElement("div", { className: "baf-turn" },
        React.createElement(TurnHeader, {
          phase: "Fase 1 · Ingresso — finale", done: true,
          title: "Come accogliamo chi entra",
          desc: "Versione consolidata: copy della cover, layout split e look da tessera del mercato. Chi apre capisce il gioco al volo e ci dice chi è (nome, team, anzianità) più un riscaldamento episodico." }),
        React.createElement("div", { className: "baf-row" },
          React.createElement(Ingresso, null))),
      React.createElement("div", { className: "baf-turn" },
        React.createElement(TurnHeader, {
          phase: "Fase 3 · Il turno — scelto: 1A", done: true,
          title: "Compra la Home che vorresti",
          desc: "Budget fisso di 100 pt, prezzi 10–40 per priorità, compra e rivendi finché non chiudi il turno. Direzione confermata: Il Listino." }),
        React.createElement("div", { className: "baf-row" },
          React.createElement(OptionListino, null))));
  }

  window.BuyAFeature = BuyAFeature;

  // ═══════════════════════════════════════════════════════════
  // FLUSSO LINEARE — il gioco completo in sequenza
  // Ingresso → Discovery → Turno (1A) → Reward → Vetrina
  // Stato condiviso; budget = 100 + bonus prove della discovery.
  // ═══════════════════════════════════════════════════════════
  const FLOW_STEPS = ["ingresso", "discovery", "ponte", "buy", "custom", "reward", "seme"];
  const FLOW_PHASE = { ingresso: "Prologo", discovery: "Fase 1", ponte: "Atto 2", buy: "Fase 2", custom: "Fase 3", reward: "Fase 4", seme: "Capitolo finale" };
  const FLOW_LABELS = { ingresso: "Il risveglio", discovery: "Salva dalle fiamme", ponte: "La domanda", buy: "Ricostruisci", custom: "Il pezzo che manca", confirm: "L'architetto", reward: "La casa che hai costruito", seme: "Il seme" };
  const COVER_ROCKETS = [
    { x: "8%", y: "16%", c: "#6E5DC6", s: 50, rot: -18, d: "0s" },
    { x: "84%", y: "12%", c: "#007369", s: 40, rot: 22, d: "0.6s" },
    { x: "16%", y: "70%", c: "#1A8366", s: 34, rot: 12, d: "0.3s" },
    { x: "88%", y: "64%", c: "#4E3BA9", s: 44, rot: -14, d: "0.9s" },
    { x: "50%", y: "84%", c: "#6E5DC6", s: 28, rot: 18, d: "0.45s" },
  ];

  // ── Il Genio guida — intro animata (2s) poi mascotte nell'angolo ──
  // Entra da sotto con rimbalzo elastico, saluta con la mano, pronuncia
  // il benvenuto in un fumetto, poi si rimpicciolisce nell'angolo in
  // basso a destra dove resta per tutta la sessione (idle su e giù).
  // Non blocca nulla: la chat parte in parallelo.

  // ═══════════ SCENA D'INIZIO · la storia prima del risveglio ═══════════
  // Un'apertura cinematografica a più battute: il villaggio di start2impact
  // di notte, una casa che prende fuoco. Disegnata in CSS (cielo, case,
  // bagliore, fumo, braci). Click per avanzare; l'ultima battuta consegna
  // al risveglio (il gatto che ti sveglia dentro la casa in fiamme).
  const STORY_BEATS = [
    { k: "Capitolo zero", t: "È notte sul villaggio di start2impact. Le case dormono, una accanto all'altra." },
    { k: "", t: "In una di queste case vivi tu: uno studente con 10 mesi di studio alle spalle, quasi al traguardo del Master. La tua casa è la Home di sempre: comoda, familiare." },
    { k: "", t: "Poi, nel buio, qualcosa comincia a bruciare. Prima una scintilla. Poi le pareti." },
    { k: "", t: "La tua Home va a fuoco. Tutto quello che conosci sta per cambiare: decidi tu cosa portare e cosa lasciare." },
    { k: "", t: "Ma non sei solo. Dal fumo sbuca il tuo angelo custode. Ti prende per mano e ti guiderà per tutta la notte." },
  ];
  // Lightbox full page della Home Studenti: immagine a piena larghezza,
  // si scorre in verticale per vederla tutta in grande.
  function HomeLightbox({ onClose }) {
    const h = React.createElement;
    // la modale resta sempre un riquadro centrato con margini dallo schermo;
    // lo zoom ingrandisce l'immagine DENTRO il riquadro (che scorre), mai a tutto schermo
    const [zoom, setZoom] = React.useState(false);
    return h("div", { className: "baf-shot-lightbox", onClick: (e) => { e.stopPropagation(); onClose(); },
        style: { position: "fixed", inset: 0, zIndex: 130, display: "flex", alignItems: "center", justifyContent: "center", padding: 28, background: "rgba(20,16,34,0.82)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", cursor: "zoom-out" } },
      h("button", { type: "button", "aria-label": "Chiudi", onClick: (e) => { e.stopPropagation(); onClose(); }, style: { position: "fixed", top: 18, right: 22, zIndex: 2, width: 44, height: 44, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.94)", color: "#1A1A2E", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.35)" } }, h(DSIcon, { name: "xmark", size: 20 })),
      h("div", { className: "baf-shot-modal", onClick: (e) => e.stopPropagation(),
        style: { width: "min(1000px, 90vw)", maxHeight: "88vh", overflow: "auto", borderRadius: 12, boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", background: "#fff", WebkitOverflowScrolling: "touch" } },
        h("img", { src: "assets/home-piattaforma.jpg", alt: "Home Studenti in piattaforma", title: zoom ? "Clicca per ridurre" : "Clicca per ingrandire", onClick: (e) => { e.stopPropagation(); setZoom((v) => !v); },
          style: { display: "block", width: zoom ? "165%" : "100%", maxWidth: zoom ? "none" : "100%", height: "auto", cursor: zoom ? "zoom-out" : "zoom-in" } })));
  }

  function StoryIntro({ onDone }) {
    const h = React.createElement;
    const [i, setI] = React.useState(0);
    const [homeOpen, setHomeOpen] = React.useState(false);
    const last = i >= STORY_BEATS.length - 1;
    const beat = STORY_BEATS[i] || STORY_BEATS[STORY_BEATS.length - 1];
    const advance = () => { if (last) { onDone && onDone(); } else { setI((v) => v + 1); } };
    const catIn = last; // il gatto "angelo custode" compare nell'ultima battuta
    // il titoletto ("Capitolo zero") appare, poi dal secondo passo in poi
    // sale e sbiadisce fino a sparire man mano che la storia prosegue.
    let kStart = i;
    while (kStart > 0 && beat.k && STORY_BEATS[kStart - 1] && STORY_BEATS[kStart - 1].k === beat.k) kStart--;
    const kStep = i - kStart;
    const kStyle = { transform: "translateY(" + (-10 * kStep) + "px)", opacity: Math.max(0, 1 - kStep * 0.16), transition: "transform 0.7s ease, opacity 0.7s ease" };
    // il fuoco compare dalla 4ª battuta (i===3): "Poi, nel buio, qualcosa comincia a bruciare…"
    const fire = i < 2 ? 0 : i === 2 ? 1 : 2;
    const treesL = [{ h: 120, b: 8 }, { h: 168, b: 2 }, { h: 96, b: 15 }, { h: 200, b: 0 }, { h: 132, b: 10 }];
    const treesR = [{ h: 140, b: 9 }, { h: 190, b: 1 }, { h: 110, b: 14 }, { h: 168, b: 4 }, { h: 128, b: 11 }];
    const Fir = (t, k) => h("span", { key: k, className: "baf-fir", style: { height: t.h, marginBottom: t.b } });
    const snow = [];
    const flakes = fire === 2 ? 64 : 34;
    for (let k = 0; k < flakes; k++) snow.push(h("i", { key: k, style: { left: ((k * 29) % 100) + (k % 3) + "%", width: 2 + (k % 3), height: 2 + (k % 3), animationDuration: (7 + (k % 5)) + "s", animationDelay: (-(k % 8)) + "s", opacity: 0.4 + (k % 4) * 0.15 } }));
    const embers = [0, 1, 2, 3, 4, 5, 6].map((k) => h("i", { key: k, style: { left: (k * 6) + "px", animationDelay: (k * 0.5) + "s", animationDuration: (2.8 + (k % 3) * 0.6) + "s" } }));
    const mtns = [{ l: "-4%", w: 260, hh: 150 }, { l: "10%", w: 200, hh: 120 }, { l: "68%", w: 240, hh: 140 }, { l: "84%", w: 220, hh: 128 }];

    return h("div", { className: "baf-story-page baf-story-fragility baf-story-f" + fire + " baf-story-i" + i, onClick: advance },
      h("div", { className: "baf-sky", "aria-hidden": "true" }),
      bafRoughFilter(),
      bafCloud("baf-cloud", { left: "-3%", top: "5%" }, 300),
      bafCloud("baf-cloud", { left: "72%", top: "9%" }, 300),
      h("div", { className: "baf-mountains", "aria-hidden": "true" },
        mtns.map((m, k) => h("span", { key: k, style: { left: m.l, width: m.w, height: m.hh } }))),
      h("div", { className: "baf-haze", "aria-hidden": "true" }),
      h("div", { className: "baf-trees baf-trees-l", "aria-hidden": "true" }, treesL.map(Fir)),
      h("div", { className: "baf-trees baf-trees-r", "aria-hidden": "true" }, treesR.map(Fir)),
      // casette in secondo piano attorno alla casa principale
      h("div", { className: "baf-bghouses", "aria-hidden": "true" },
        [{ l: "6%", w: 50, hh: 50 }, { l: "13%", w: 54, hh: 54 }, { l: "20%", w: 48, hh: 48 }, { l: "27%", w: 58, hh: 58 }, { l: "35%", w: 46, hh: 46 }, { l: "63%", w: 50, hh: 50 }, { l: "70%", w: 56, hh: 56 }, { l: "77%", w: 52, hh: 52 }, { l: "84%", w: 48, hh: 48 }, { l: "91%", w: 46, hh: 46 }].map((b, k) =>
          h("span", { key: k, className: "baf-bghouse", style: { left: b.l, width: b.w, height: b.hh } },
            h("span", { className: "r" }),
            k % 2 === 0 ? h("span", { className: "bgfire" }, h("i", null), h("i", null), h("i", null)) : null))),
      // la casa: base in pietra + piano a graticcio + tetto a falde, in fiamme in alto
      h("div", { className: "baf-fhouse", "aria-hidden": "true" },
        h("span", { className: "smoke-plume" }, h("i", null), h("i", null), h("i", null), h("i", null)),
        h("span", { className: "roof" }),
        h("span", { className: "chimney" }),
        h("span", { className: "upper" }, h("span", { className: "beam v1" }), h("span", { className: "beam v2" }), h("span", { className: "beam v3" }), h("span", { className: "beam h1" }), h("span", { className: "win uwin" })),
        h("span", { className: "base" }, h("span", { className: "door" }), h("span", { className: "win bwin bwin1" }), h("span", { className: "win bwin bwin2" })),
        h("span", { className: "baf-house-mark" }, h("img", { src: "uploads/grande-mercato-home/public/assets/logo/logo-white.svg", alt: "" })),
        h("span", { className: "fire" }, h("i", null), h("i", null), h("i", null), h("i", null), h("i", null)),
        h("span", { className: "fireglow" }),
        h("span", { className: "story-embers" }, embers)),
      h("div", { className: "baf-snowfield", "aria-hidden": "true" }),
      h("div", { className: "baf-paper", "aria-hidden": "true" }),
      h("div", { className: "baf-paper2", "aria-hidden": "true" }),
      // 5/6-6/6: focolai a terra per tutto il villaggio
      h("div", { className: "baf-groundfires", "aria-hidden": "true" },
        ["5%", "15%", "30%", "47%", "60%", "74%", "87%"].map((l, k) =>
          h("span", { key: k, className: "baf-gfire", style: { left: l } },
            h("i", null), h("i", null), h("i", null)))),
      // il viandante col fuoco in mano (compare dal secondo passo)
      i > 0 ? h("div", { className: "baf-walker", "aria-hidden": "true" },
        h("span", { className: "torchglow" }),
        h("span", { className: "torch" }),
        h("span", { className: "body" }),
        h("span", { className: "head" })) : null,
      // beat 2: la Home di oggi, lo "screen" appeso nel cielo — click per il full page
      i === 1 ? h("div", { className: "baf-story-shot", onClick: (e) => { e.stopPropagation(); setHomeOpen(true); } },
        h("img", { src: "assets/home-piattaforma.jpg", alt: "La Home di oggi" }),
        h("span", { className: "hint" }, h(DSIcon, { name: "eye", size: 13 }), "Clicca per vederla a tutto schermo")) : null,
      // beat 4: la stessa Home che va a fuoco, in trasparenza nel cielo
      i === 3 ? h("div", { className: "baf-story-shot baf-story-shot-burn", "aria-hidden": "true" },
        h("img", { src: "assets/home-piattaforma.jpg", alt: "" }),
        h("span", { className: "burnveil" }),
        h("span", { className: "flames" }, h("i", null), h("i", null), h("i", null), h("i", null), h("i", null))) : null,
      catIn ? h("div", { className: "baf-story-smokeveil", "aria-hidden": "true" },
        h("i", null), h("i", null), h("i", null), h("i", null), h("i", null)) : null,
      // beat 5: l'angelo custode è il protagonista — la pallina con l'anello,
      // come in tutte le scene dipinte, ma in grande e nella sua luce
      catIn ? h("div", { className: "baf-story-aster", role: "img", "aria-label": "Aster, il tuo angelo custode" },
        h("span", { className: "floor" }),
        h("span", { className: "aura" }),
        h("span", { className: "cat" },
          h("span", { className: "ring" }),
          h("span", { className: "dot" })),
        h("span", { className: "sp sp1" }), h("span", { className: "sp sp2" }), h("span", { className: "sp sp3" }), h("span", { className: "sp sp4" }), h("span", { className: "sp sp5" })) : null,
      h("div", { className: "baf-snowfall", "aria-hidden": "true" }, snow),
      h("div", { className: "baf-story-vignette2", "aria-hidden": "true" }),
      h("div", { className: "baf-fcaption", key: i },
        beat.k && kStep === 0 ? h("div", { className: "k", style: kStyle }, beat.k) : null,
        h("p", { className: "line" }, beat.t),
        last
          ? h("button", { type: "button", className: "baf-cta baf-story-btn", onClick: (e) => { e.stopPropagation(); onDone && onDone(); } }, React.createElement(DSIcon, { name: "rocket", size: 18 }), " Entra nella casa")
          : h("span", { className: "baf-story-go" },
              "Clicca per continuare ",
              h("span", { className: "dots" }, i + 1, " / ", STORY_BEATS.length))),
      homeOpen ? h(HomeLightbox, { onClose: () => setHomeOpen(false) }) : null);
  }

  function ArchScene({ onRivedi, onSicuro }) {
    const h = React.createElement;
    return h("div", { className: "baf-alba-page baf-arch-scene arch-b1" },
      h("div", { className: "baf-alba-sky", "aria-hidden": "true" }),
      h("div", { className: "baf-alba-stars", "aria-hidden": "true" },
        [["14%","12%"],["28%","22%"],["44%","9%"],["66%","18%"],["80%","11%"],["90%","26%"],["20%","30%"],["55%","6%"],["8%","20%"],["36%","15%"],["50%","24%"],["60%","8%"],["72%","28%"],["86%","19%"],["94%","13%"],["24%","7%"],["40%","28%"],["48%","14%"],["68%","32%"],["78%","22%"],["4%","32%"],["32%","33%"],["62%","24%"],["96%","30%"],["11%","7%"],["18%","16%"],["34%","5%"],["52%","33%"],["58%","15%"],["70%","11%"],["76%","6%"],["84%","32%"],["92%","7%"],["6%","12%"],["22%","24%"],["30%","11%"],["38%","21%"],["46%","31%"],["56%","28%"],["64%","5%"],["74%","17%"],["82%","14%"],["88%","9%"],["98%","20%"],["2%","25%"],["16%","33%"],["42%","36%"],["66%","37%"]].map((p, k) =>
          h("i", { key: k, style: { left: p[0], top: p[1], animationDelay: (k * 0.22) + "s" } }))),
      h("div", { className: "baf-alba-glow", "aria-hidden": "true" }),
      bafRoughFilter(),
      bafCloud("baf-alba-cloud", { left: "4%", top: "8%" }, 300),
      bafCloud("baf-alba-cloud", { right: "4%", top: "16%" }, 250),
      h("div", { className: "baf-emporio", "aria-hidden": "true" },
        h("span", { className: "smoke" }, h("i", null), h("i", null), h("i", null)),
        h("span", { className: "chimney" }),
        h("span", { className: "roof" }),
        h("span", { className: "body" }, h("span", { className: "win w1" }), h("span", { className: "win w2" }), h("span", { className: "door" })),
        h("span", { className: "lamp" })),
      h("div", { className: "baf-walker baf-alba-walker", "aria-hidden": "true" },
        h("span", { className: "torchglow" }), h("span", { className: "torch" }), h("span", { className: "body" }), h("span", { className: "head" })),
      h("div", { className: "baf-story-cat baf-alba-cat", "aria-hidden": "true" },
        h("span", { className: "halo" }), h("span", { className: "dot" })),
      h("div", { className: "baf-walker baf-arch-walker", "aria-hidden": "true" },
        h("span", { className: "roll" }), h("span", { className: "body" }), h("span", { className: "head" })),
      h("div", { className: "baf-alba-snow", "aria-hidden": "true" }),
      h("div", { className: "baf-paper", "aria-hidden": "true" }),
      h("div", { className: "baf-paper2", "aria-hidden": "true" }),
      h("div", { className: "baf-fcaption baf-arch-cap", key: "arch" },
        h("div", { className: "k" }, "Capitolo Due"),
        h("p", { className: "line" }, "Il proprietario del negozio, con un sorriso, ti dice: «Ottimi acquisti, sei pronto per costruire la tua nuova casa.»"),
        h("div", { className: "baf-arch-btns" },
          h("button", { type: "button", className: "baf-cta baf-cta-ghost", onClick: onRivedi }, "Modifica gli acquisti"),
          h("button", { type: "button", className: "baf-cta baf-alba-btn", onClick: onSicuro }, "Costruisci la nuova casa"))));
  }

  // ── Capitolo finale · la casa nuova, la signora col dono, il seme:
  //    pianta → innaffia → la domanda dell'acqua di ogni giorno → TYP ──
  function SemeScene({ value, onChange, onFinish, onDone, onDownload, sendStatus, onRetry, recap }) {
    const h = React.createElement;
    const [i, setI] = React.useState(0);
    const advance = () => { if (i < 2) setI(i + 1); };
    const cls = "baf-seme-scene seme-s" + i + (i >= 7 ? " seme-done seme-final" : "");
    const newHouse = h("div", { className: "baf-emporio baf-newhouse", "aria-hidden": "true" },
      h("span", { className: "chimney" }),
      h("span", { className: "roof" }),
      h("span", { className: "body" },
        h("span", { className: "win w1" }), h("span", { className: "win w2" }), h("span", { className: "door" }),
        h("span", { className: "baf-house-mark" }, h("img", { src: "uploads/grande-mercato-home/public/assets/logo/logo-black.svg", alt: "" }))));
    const seed = (extra) => h("span", { className: "baf-seed " + extra, "aria-hidden": "true" },
      h("span", { className: "glow" }),
      h("span", { className: "plant" },
        h("i", { className: "pot" }),
        h("i", { className: "stem" }),
        h("i", { className: "leaf l" }),
        h("i", { className: "leaf r" })));
    return h("div", { className: cls, onClick: i < 2 ? advance : undefined },
      h("div", { className: "baf-seme-sky", "aria-hidden": "true" }),
      h("div", { className: "baf-seme-sun", "aria-hidden": "true" }),
      h("div", { className: "baf-seme-starfield", "aria-hidden": "true" },
        [["8%","10%"],["16%","20%"],["24%","7%"],["33%","16%"],["41%","6%"],["49%","13%"],["57%","8%"],["64%","18%"],["72%","6%"],["79%","14%"],["86%","9%"],["93%","17%"],["12%","28%"],["28%","30%"],["44%","26%"],["60%","30%"],["76%","27%"],["90%","31%"],["4%","20%"],["37%","23%"],["68%","24%"],["96%","23%"]].map((p, k) =>
          h("i", { key: k, style: { left: p[0], top: p[1], animationDelay: ((k % 8) * 0.4) + "s" } }))),
      bafRoughFilter(),
      h("div", { className: "baf-seme-clouds", "aria-hidden": "true" },
        h("span", { className: "c1", style: { width: 300, height: 300 * 0.42 * 1.7 } }, bafLobes(300)),
        h("span", { className: "c2", style: { width: 230, height: 230 * 0.42 * 1.7 } }, bafLobes(230))),
      h("div", { className: "baf-paper", "aria-hidden": "true" }),
      h("div", { className: "baf-paper2", "aria-hidden": "true" }),
      i < 8 ? h("div", { className: "baf-seme-ground", "aria-hidden": "true" }) : null,
      // il villaggio che rinasce dietro la tua casa (nel dono le case grigie spariscono)
      // resta montato anche a i===7 per un crossfade morbido verso la pagina finale
      (i === 0 || i === 4 || i === 5 || i === 6 || i === 7) ? h("div", { className: "baf-seme-houses", "aria-hidden": "true" },
        ["0", "1", "3", "4", "0", "1", "2", "3", "0", "4", "1", "3"].map((n, k) => h("span", { key: k, className: "hs h" + n }))) : null,
      // la casa che hai costruito, in mezzo al villaggio
      (i === 0 || i === 1 || i === 4 || i === 5 || i === 6 || i === 7) ? newHouse : null,
      // il seme piantato accanto alla casa (dal beat della semina)
      (i === 4 || i === 5 || i === 6 || i === 7) ? h("div", { className: "baf-seme-plot", "aria-hidden": "true" },
        h("span", { className: "mound" }),
        h("span", { className: "sprout" }, h("i", { className: "stem" }), h("i", { className: "leaf l" }), h("i", { className: "leaf r" }))) : null,
      // la signora: alla porta con il dono, poi da sola col seme
      (i === 1 || i === 2) ? h("div", { className: "baf-walker baf-seme-walker", "aria-hidden": "true" },
        h("span", { className: "staff" }),
        h("span", { className: "body" }),
        h("span", { className: "head" }, h("i", { className: "flower" }))) : null,
      i === 2 ? seed("baf-seed-scene") : null,
      // beat 5: lo studente annaffia il seme con l'annaffiatoio
      i === 5 ? h("div", { className: "baf-walker baf-seme-stud", "aria-hidden": "true" },
        h("span", { className: "body" }),
        h("span", { className: "head" })) : null,
      i === 5 ? h("div", { className: "baf-seme-can", "aria-hidden": "true" },
        h("span", { className: "handle" }),
        h("span", { className: "can" }),
        h("span", { className: "spout" }),
        h("span", { className: "water" }, h("i", null), h("i", null), h("i", null))) : null,
      h("div", { className: "baf-fcaption baf-seme-cap", key: i },
        i === 0
          ? h(React.Fragment, null,
              h("div", { className: "k" }, "Capitolo Finale"),
              h("p", { className: "line" }, "L'alba arriva e con lei il giorno. Hai costruito la tua casa, uno spazio dove tutto è su misura per te."),
              h("span", { className: "baf-story-go" }, "Clicca per continuare"))
          : i === 1
          ? h(React.Fragment, null,
              h("div", { className: "k" }, "Dlin dlon"),
              h("p", { className: "line" }, "Hanno suonato alla tua porta: una signora vuole farti gli auguri e ti ha portato un dono."),
              h("span", { className: "baf-story-go" }, "Clicca per continuare"))
          : i === 2
          ? h(React.Fragment, null,
              h("p", { className: "line" }, "«Questo», dice senza guardarti, «rappresenta un nuovo inizio. Prenditi cura di lui e vedrai che nascerà qualcosa di meraviglioso.»"),
              h("button", { className: "baf-cta baf-seme-btn", onClick: (e) => { e.stopPropagation(); setI(3); } }, "Ricevi il dono"))
          : i === 3
          ? h("div", { className: "baf-seme-typ", onClick: (e) => e.stopPropagation() },
              seed("baf-seed-typ"),
              h("div", { className: "k" }, "Hai guadagnato"),
              h("div", { className: "big" }, "Seme"),
              h("p", { className: "line" }, "Un nuovo inizio da piantare accanto alla tua casa."),
              h("button", { className: "baf-cta baf-seme-btn", onClick: () => setI(4) }, "Pianta il seme"))
          : i === 4
          ? h(React.Fragment, null,
              h("p", { className: "line" }, "Il seme è nella terra, accanto alla tua casa nuova. Ora ha bisogno di te."),
              h("button", { className: "baf-cta baf-seme-btn", onClick: (e) => { e.stopPropagation(); setI(5); } }, "Innaffia il seme"))
          : i === 5
          ? h(React.Fragment, null,
              h("p", { className: "line" }, "Lo studente annaffia la piantina con cura, mentre pensa tra sé e sé…"),
              h("button", { className: "baf-cta baf-seme-btn", onClick: (e) => { e.stopPropagation(); setI(6); } }, "Continua"))
          : i === 6
          ? h(React.Fragment, null,
              h("h1", { className: "baf-seme-q baf-seme-ask" }, "Una piantina si cura un po' ogni giorno."),
              h("p", { className: "line baf-seme-subq" }, "Come questo seme ha bisogno d'acqua per crescere, anche tu hai bisogno di qualcosa ogni giorno. Da studente, cosa vorresti trovare tornando in Home per sentirti nutrito, motivato e sostenuto, anche nei giorni storti?"),
              h("textarea", { className: "baf-seme-field", rows: 3, placeholder: "Una riga, se ti va. Oppure resta in silenzio e prosegui.", value: value, onChange: (e) => onChange(e.target.value), onClick: (e) => e.stopPropagation() }),
              h("button", { className: "baf-cta baf-seme-btn", onClick: (e) => { e.stopPropagation(); onFinish && onFinish(); setI(7); } }, value.trim() ? "Lascia la tua acqua" : "Prosegui"),
              h("button", { className: "baf-seme-skip", onClick: (e) => { e.stopPropagation(); onFinish && onFinish(); setI(7); } }, "Prosegui senza scrivere"))
          : h("div", { className: "baf-seme-final-overlay" },
              // cielo: nuvole rosa dipinte + stelline che luccicano
              h("div", { className: "baf-final-sky", "aria-hidden": "true" },
                bafCloud("baf-final-cloud", { left: "4%", top: "7%" }, 260),
                bafCloud("baf-final-cloud", { right: "5%", top: "5%" }, 220),
                bafCloud("baf-final-cloud", { left: "30%", top: "15%" }, 190),
                bafCloud("baf-final-cloud", { right: "22%", top: "20%" }, 150),
                bafCloud("baf-final-cloud", { left: "8%", top: "34%" }, 200),
                bafCloud("baf-final-cloud", { right: "8%", top: "40%" }, 170),
                bafCloud("baf-final-cloud", { left: "42%", top: "48%" }, 150),
                bafCloud("baf-final-cloud", { left: "16%", top: "62%" }, 180),
                bafCloud("baf-final-cloud", { right: "14%", top: "66%" }, 210),
                bafCloud("baf-final-cloud", { left: "48%", top: "78%" }, 160),
                h("div", { className: "baf-final-stars" },
                  [["10%","9%"],["20%","5%"],["30%","14%"],["42%","7%"],["52%","16%"],["62%","5%"],["70%","12%"],["80%","8%"],["88%","17%"],["94%","6%"],["6%","20%"],["15%","24%"],["26%","28%"],["37%","22%"],["48%","26%"],["58%","30%"],["66%","23%"],["74%","28%"],["84%","32%"],["92%","26%"],["12%","44%"],["34%","40%"],["55%","46%"],["78%","42%"],["90%","48%"],["8%","56%"],["28%","60%"],["50%","58%"],["68%","62%"],["86%","57%"],["18%","72%"],["40%","70%"],["60%","74%"],["82%","72%"],["24%","84%"],["46%","88%"],["66%","85%"],["88%","82%"]].map((p, k) =>
                    h("i", { key: k, style: { left: p[0], top: p[1], animationDelay: ((k % 9) * 0.35) + "s" } })))),
              // in basso: i personaggi del racconto che salutano (in CSS)
              h("div", { className: "baf-final-cast", "aria-hidden": "true" },
                h("span", { className: "cast stud" }, h("i", { className: "arm" }), h("i", { className: "body" }), h("i", { className: "head" })),
                h("span", { className: "cast aster" }, h("i", { className: "halo" }), h("i", { className: "ears" }), h("i", { className: "dot" }), h("i", { className: "eyes" })),
                h("span", { className: "cast shop" }, h("i", { className: "arm" }), h("i", { className: "body" }), h("i", { className: "apron" }), h("i", { className: "head" })),
                h("span", { className: "cast oldlady" }, h("i", { className: "staff" }), h("i", { className: "arm" }), h("i", { className: "body" }), h("i", { className: "head" }))),
              h("div", { className: "baf-paper", "aria-hidden": "true" }),
              h("div", { className: "baf-paper2", "aria-hidden": "true" }),
              h("div", { className: "baf-seme-final-in", onClick: (e) => e.stopPropagation() },
                h("span", { className: "baf-seme-final-mark" }, h("img", { src: "assets/logo/logo-black.svg", alt: "start2impact" })),
                h("h1", { className: "baf-seme-final-title" }, "Ce l'hai fatta!"),
                h("p", { className: "line" }, "Dalle fiamme alla casa nuova: quello che hai scelto stanotte diventa la Home in cui il prossimo studente si sveglierà. Grazie per averla costruita con noi :)"),
                recap ? h("div", { className: "baf-seme-recap" },
                  h("div", { className: "r" }, h("span", { className: "ic" }, h(DSIcon, { name: "fire", size: 14 })), h("span", null, h("b", null, recap.tookCount), " oggetti salvati dalle fiamme · ", h("b", null, recap.leftCount), " lasciati andare")),
                  h("div", { className: "r" }, h("span", { className: "ic" }, h(DSIcon, { name: recap.arch.icon, size: 14 })), h("span", null, "La tua casa: ", h("b", null, recap.arch.title), " · “", recap.arch.casa, "”")),
                  h("div", { className: "r" }, h("span", { className: "ic" }, h(DSIcon, { name: "credit-card", size: 14 })), h("span", null, h("b", null, recap.itemsCount), " arredi scelti · ", recap.spent, " di ", recap.total, " pt spesi")),
                  (value || "").trim() ? h("div", { className: "r" }, h("span", { className: "ic" }, h(DSIcon, { name: "gem", size: 14 })), h("span", null, "La tua acqua di ogni giorno: “", value.trim(), "”")) : null) : null,
                sendStatus === "sending"
                  ? h("div", { style: { marginTop: 2, fontSize: 13, color: "#5D7870", fontFamily: "var(--font-paragraph)", textAlign: "center" } }, "Invio delle risposte in corso…")
                  : sendStatus === "sent"
                  ? h("div", { style: { marginTop: 2, fontSize: 13, fontWeight: 800, color: "#2a1a0c", fontFamily: "var(--font-paragraph)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 } }, h(DSIcon, { name: "circle-check", size: 15 }), "Risposte inviate, grazie!")
                  : sendStatus === "error"
                  ? h("div", { style: { marginTop: 4, padding: "11px 14px", borderRadius: 10, background: "#FDECEC", color: "#B23A3A", fontSize: 12.5, fontFamily: "var(--font-paragraph)", display: "flex", flexDirection: "column", alignItems: "center", gap: 9, textAlign: "center" } },
                      h("span", null, "Non siamo riusciti a inviare le risposte: forse manca la connessione. Niente panico, le tue risposte non sono andate perse."),
                      h("button", { type: "button", className: "baf-cta baf-cta-sm", onClick: (e) => { e.stopPropagation(); onRetry && onRetry(); } }, "Riprova"))
                  : null,
                h("div", { className: "baf-seme-actions" },
                  h("button", { className: "baf-cta baf-seme-btn", onClick: (e) => { e.stopPropagation(); onDownload && onDownload(); } }, h(DSIcon, { name: "download", size: 15 }), "Scarica il certificato"),
                  h("button", { className: "baf-cta baf-cta-ghost baf-seme-btn", onClick: (e) => { e.stopPropagation(); onDone && onDone(); } }, "Chiudi il gioco"),
                  h("a", { className: "baf-seme-secondary", href: "https://mail.google.com/mail/?view=cm&fs=1&to=arianna@start2impact.com,sara@start2impact.com&su=" + encodeURIComponent("Feedback per il Team Design \u2013 La nuova Casa"), target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation() }, "Vuoi lasciare un feedback al team design?"))))));
  }

  function GenioGuide({ intro, onDone, say }) {
    // enter (il gatto ti sveglia) → corner: chiuso il fumetto, parte la chat
    const [phase, setPhase] = React.useState(intro ? "enter" : "corner");
    const advance = () => { if (phase === "enter") { setPhase("corner"); onDone && onDone(); } };
    React.useEffect(() => {
      if (phase !== "reveal") return;
      const t = setTimeout(() => { setPhase("corner"); onDone && onDone(); }, 4200);
      return () => clearTimeout(t);
    }, [phase]);
    // istruzioni di fase: il gatto le "dice" in un fumetto dall'angolo;
    // click sul gatto per nasconderle/rivederle.
    const [sayOpen, setSayOpen] = React.useState(true);
    React.useEffect(() => { setSayOpen(true); }, [say]);
    const toggleSay = () => { if (phase === "corner") setSayOpen((v) => !v); };
    const canSlot = typeof customElements !== "undefined" && !!customElements.get("image-slot");
    // il fondino grigio dello slot vive nello shadow DOM: lo si spegne da qui
    const figRef = React.useRef(null);
    React.useEffect(() => {
      const el = figRef.current && figRef.current.querySelector("image-slot");
      if (el && el.shadowRoot && !el.shadowRoot.querySelector("#no-bg")) {
        const st = document.createElement("style");
        st.id = "no-bg";
        st.textContent = ".frame{background:transparent !important}";
        el.shadowRoot.appendChild(st);
      }
    });
    return React.createElement("div", { className: "baf-genio " + (phase === "corner" ? "baf-genio-corner" : "baf-genio-enter baf-genio-p-" + phase), onClick: phase === "enter" ? advance : phase === "corner" ? toggleSay : undefined },
      React.createElement("div", { className: "baf-genio-bubble" },
        phase === "reveal"
          ? React.createElement(React.Fragment, null,
              "Tu adesso sei ", React.createElement("b", null, "uno studente di start2impact"), ", dieci mesi in questo villaggio, quasi al traguardo del tuo Master. E questa casa sta bruciando.",
              React.createElement("span", { className: "baf-genio-go" }, "In piedi."))
          : React.createElement(React.Fragment, null,
              "Ciao! Io sono ", React.createElement("b", null, "Aster"), ", il tuo angelo custode. Ti guiderò in questa notte.",
              React.createElement("span", { className: "baf-genio-go" }, "Clicca per continuare"))),
      phase === "corner" && say && sayOpen && React.createElement("div", { className: "baf-genio-say", key: typeof say === "string" ? say : "say" }, say),
      React.createElement("div", { className: "baf-genio-fig", ref: figRef },
        canSlot
          ? React.createElement("image-slot", { id: "genio-illustrazione", shape: "rect", fit: "contain", transparent: "", src: "assets/genio-gatto.png", placeholder: "la mascotte: trascina qui l'illustrazione" })
          : React.createElement("span", { className: "baf-wiz-avatar" }, React.createElement(DSIcon, { name: "gem", size: 26 })),
        React.createElement("i", { className: "sp sp1" }),
        React.createElement("i", { className: "sp sp2" }),
        React.createElement("i", { className: "sp sp3" })));
  }

  // ── Riga catalogo del negozio (step buy) ───────────────────
  // Riga compatta: nome + prezzo + compra. Click sulla riga per aprire
  // il dropdown con l'anteprima e la spiegazione di cosa fa il componente.
  function BuyRow({ f, on, aff, blocked, onToggle }) {
    const [open, setOpen] = React.useState(false);
    return React.createElement("div", { className: "baf-lrow2" + (on ? " on" : "") + (!on && !aff ? " dim" : "") + (blocked ? " baf-shake" : "") + (open ? " open" : "") },
      React.createElement("div", { className: "baf-lrow2-head", role: "button", tabIndex: 0, "aria-expanded": open, onClick: () => setOpen((v) => !v), onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen((v) => !v); } } },
        React.createElement("span", { className: "baf-ico" + (on ? " baf-ico-on" : "") }, React.createElement(DSIcon, { name: f.icon, size: 16 })),
        React.createElement("span", { className: "baf-lrow2-name" }, f.name),
        React.createElement("span", { className: "baf-price baf-lprice" }, f.price, React.createElement("span", { className: "baf-unit" }, "pt")),
        React.createElement("button", { className: "baf-toggle baf-lrow2-btn " + (on ? "baf-owned" : aff ? "baf-buy" : "baf-disabled"), onClick: (e) => { e.stopPropagation(); onToggle(); } },
          React.createElement(DSIcon, { name: on ? "check" : "plus", size: 13 }), on ? "Nel carrello" : (aff ? "Compra" : "Budget finito")),
        React.createElement("span", { className: "baf-lrow2-chev" }, React.createElement(DSIcon, { name: "chevron-down", size: 13 }))),
      open ? React.createElement("div", { className: "baf-lrow2-body" },
        React.createElement("div", { className: "baf-lrow2-thumb" }, React.createElement(ModuleThumb, { id: f.id, big: true })),
        React.createElement("div", { className: "baf-lrow2-what" },
          React.createElement("div", { className: "k" }, "A cosa serve"),
          React.createElement("p", null, f.what || f.real))) : null);
  }

  // ── Mascotte fissa nella sidebar (dopo l'intro) ─────────────
  function RailCat({ say }) {
    const [open, setOpen] = React.useState(true);
    React.useEffect(() => { setOpen(true); }, [say]);
    const figRef = React.useRef(null);
    React.useEffect(() => {
      const el = figRef.current && figRef.current.querySelector("image-slot");
      if (el && el.shadowRoot && !el.shadowRoot.querySelector("#no-bg")) {
        const st = document.createElement("style");
        st.id = "no-bg"; st.textContent = ".frame{background:transparent !important}";
        el.shadowRoot.appendChild(st);
      }
    });
    const canSlot = typeof customElements !== "undefined" && !!customElements.get("image-slot");
    return React.createElement("div", { className: "baf-genio-dock", onClick: () => setOpen((v) => !v) },
      say && open && React.createElement("div", { className: "baf-genio-say", key: say }, say),
      React.createElement("div", { className: "baf-genio-fig", ref: figRef },
        canSlot
          ? React.createElement("image-slot", { id: "genio-illustrazione-rail", shape: "rect", fit: "contain", transparent: "", src: "assets/genio-gatto.png", placeholder: "la mascotte" })
          : React.createElement("span", { className: "baf-wiz-avatar" }, React.createElement(DSIcon, { name: "gem", size: 26 })),
        React.createElement("i", { className: "sp sp1" }),
        React.createElement("i", { className: "sp sp2" }),
        React.createElement("i", { className: "sp sp3" })));
  }

  // ── Modale della modalità speciale ─────────────────────────
  function SpecialModal({ answers, onAnswer, onClose, points }) {
    const answered = SPECIAL_QS.filter((q) => answers[q.id] != null).length;
    return React.createElement("div", { className: "baf-sp-overlay" },
      React.createElement("div", { className: "baf-sp-modal", role: "dialog", "aria-label": "Modalità speciale" },
        React.createElement("button", { type: "button", className: "baf-sp-x", "aria-label": "Chiudi", onClick: onClose }, React.createElement(DSIcon, { name: "xmark", size: 16 })),
        React.createElement("div", { className: "baf-sp-head" },
          React.createElement("span", { className: "baf-sp-ava" }, React.createElement("img", { src: "assets/aster-avatar-sm.png", alt: "" })),
          React.createElement("div", null,
            React.createElement("div", { className: "baf-sp-name" }, "Aster"),
            React.createElement("div", { className: "baf-sp-title" }, "Modalità speciale · recupera punti"))),
        React.createElement("p", { className: "baf-sp-intro" }, "Sei uscito dalle fiamme quasi a mani vuote: parti da ", React.createElement("b", null, "40 punti"), " di base. Ogni risposta ti fa recuperare ", React.createElement("b", null, "+" + SPECIAL_STEP + " pt"), ": rispondi a tutte e arrivi fino a ", React.createElement("b", null, (40 + SPECIAL_QS.length * SPECIAL_STEP) + " pt"), " di budget per ricostruire la casa."),
        React.createElement("div", { className: "baf-sp-body" },
          SPECIAL_QS.map((q, qi) => React.createElement("div", { key: q.id, className: "baf-sp-q" + (answers[q.id] != null ? " done" : "") },
            React.createElement("div", { className: "baf-sp-qh" },
              React.createElement("span", { className: "baf-sp-qn" }, answers[q.id] != null ? React.createElement(DSIcon, { name: "check", size: 12 }) : (qi + 1)),
              React.createElement("span", { className: "t" }, q.q),
              React.createElement("span", { className: "pts" }, "+", SPECIAL_STEP)),
            React.createElement("div", { className: "baf-sp-opts" },
              q.opts.map((o) => React.createElement("button", { key: o, type: "button", className: "baf-sp-opt", "aria-pressed": answers[q.id] === o, onClick: () => onAnswer(q.id, o) }, o)))))),
        React.createElement("div", { className: "baf-sp-foot" },
          React.createElement("div", { className: "baf-sp-tot" },
            React.createElement(DSIcon, { name: "credit-card", size: 16 }),
            React.createElement("span", null, "Budget: ", React.createElement("b", null, points), " / ", (40 + SPECIAL_QS.length * SPECIAL_STEP), " pt")),
          React.createElement("button", { type: "button", className: "baf-cta baf-sp-go", onClick: onClose }, answered ? "Entra nel negozio" : "Salta e entra"))));
  }

  // ── Reward finale scaricabile: card 440×440 PNG (layout mockup) ──
  function CertOverlay({ data, onClose }) {
    const h = React.createElement;
    const cardRef = React.useRef(null);
    const [busy, setBusy] = React.useState(false);
    const BAR_ORDER = [["cabina", "Cabina", "#04B585"], ["motore", "Motore", "#7070E0"], ["rampa", "Rampa", "#EA7317"], ["bussola", "Bussola", "#E86A92"]];
    const pctMap = {};
    archPercentages(data.items.filter((f) => !f.custom).map((f) => f.id)).forEach((p) => { pctMap[p.key] = p.pct; });
    const download = () => {
      const node = cardRef.current;
      if (!node) return;
      setBusy(true);
      const run = () => window.html2canvas(node, { scale: 2.5, backgroundColor: null, useCORS: true })
        .then((canvas) => {
          const a = document.createElement("a");
          a.download = "la-casa-che-ho-costruito.png";
          a.href = canvas.toDataURL("image/png");
          a.click();
          setBusy(false);
        })
        .catch(() => setBusy(false));
      if (window.html2canvas) { run(); return; }
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
      s.onload = run;
      s.onerror = () => setBusy(false);
      document.head.appendChild(s);
    };
    const mont = "'Montserrat', system-ui, sans-serif";
    const inter = "'Inter', system-ui, sans-serif";
    const village = [["6%", 38], ["16%", 30], ["78%", 44], ["90%", 32]].map((v, k) =>
      h("div", { key: k, style: { position: "absolute", bottom: 0, left: v[0], width: 34, height: v[1], background: "#1A1A2E", borderRadius: "3px 3px 0 0" } },
        h("span", { style: { position: "absolute", top: -14, left: -3, width: 0, height: 0, borderLeft: "20px solid transparent", borderRight: "20px solid transparent", borderBottom: "16px solid #1A1A2E" } })));
    return h("div", { className: "baf-reward-overlay", onClick: onClose,
      style: { position: "fixed", inset: 0, zIndex: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: 24, overflow: "auto", background: "linear-gradient(180deg, rgba(20,16,34,0.72), rgba(20,16,34,0.9))" } },
      // la card scaricabile
      h("div", { ref: cardRef, onClick: (e) => e.stopPropagation(),
        style: { width: 440, height: 440, flex: "none", borderRadius: 28, position: "relative", overflow: "hidden", fontFamily: inter, background: "linear-gradient(155deg, #E8FBF4 0%, #EDEAFB 60%, #FBEAF1 100%)", boxShadow: "0 24px 60px -20px rgba(30,20,60,0.35)" } },
        h("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 40, opacity: 0.22 } }, village),
        h("div", { style: { position: "relative", zIndex: 2, padding: "26px 30px 16px", height: "100%", display: "flex", flexDirection: "column" } },
          h("div", { style: { fontFamily: mont, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.09em", color: "#6E5DC6", textTransform: "uppercase", textAlign: "center" } }, "Certificato · La nuova Casa"),
          h("div", { style: { fontFamily: inter, fontWeight: 600, fontSize: 11, color: "#4B4B5A", textAlign: "center", marginTop: 6 } }, data.name, " ha completato il gioco · ", data.dateStr),
          h("div", { style: { width: 92, height: 92, borderRadius: "50%", margin: "14px auto 12px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", color: data.arch.img ? data.arch.color : "#fff", background: data.arch.img ? (data.arch.color + "22") : data.arch.color, boxShadow: "0 10px 24px -8px " + data.arch.color + "aa" } },
            data.arch.img
              ? h("div", { role: "img", "aria-label": data.arch.title, style: { width: "88%", height: "88%", backgroundImage: "url(" + data.arch.img + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" } })
              : h(DSIcon, { name: data.arch.icon, size: 40 })),
          h("div", { style: { fontFamily: mont, fontWeight: 800, fontSize: 24, textAlign: "center", color: data.arch.color, margin: 0 } }, data.arch.title),
          h("div", { style: { fontStyle: "italic", fontSize: 12.5, color: "#6B6B7B", textAlign: "center", margin: "4px 0 10px" } }, "“", data.arch.casa, "”"),
          h("div", { style: { fontSize: 11.5, color: "#4B4B5A", textAlign: "center", lineHeight: 1.45, margin: "0 6px 16px" } }, data.arch.desc),
          h("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
            BAR_ORDER.map((b) => {
              const pct = pctMap[b[0]] || 0;
              return h("div", { key: b[0], style: { display: "flex", alignItems: "center", gap: 8, fontSize: 10.5, color: "#1A1A2E" } },
                h("span", { style: { width: 64, flex: "none", textAlign: "right", fontWeight: 600 } }, b[1]),
                h("span", { style: { flex: 1, height: 7, borderRadius: 99, background: "rgba(0,0,0,0.06)", overflow: "hidden" } },
                  h("span", { style: { display: "block", height: "100%", borderRadius: 99, width: pct + "%", background: b[2] } })),
                h("span", { style: { width: 30, flex: "none", fontWeight: 700 } }, pct + "%"));
            })),
          h("div", { style: { textAlign: "center", fontSize: 11, fontWeight: 600, color: "#1A1A2E", margin: "12px 0 0" } },
            data.items.length + (data.items.length === 1 ? " arredo · " : " arredi · ") + data.spent + "/" + data.total + " pt"),
          h("div", { style: { marginTop: "auto", display: "flex", justifyContent: "center", paddingTop: 14 } },
            h("div", { style: { display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: 999, padding: "7px 16px", boxShadow: "0 6px 16px -6px rgba(20,20,40,0.18)" } },
              h("img", { src: "assets/logo/logo-full.svg", alt: "start2impact", style: { height: 15, width: "auto", display: "block" } }))))),
      // azioni
      h("div", { onClick: (e) => e.stopPropagation(), style: { display: "flex", gap: 12, alignItems: "center" } },
        h("button", { type: "button", className: "baf-cta baf-seme-btn", disabled: busy, onClick: download },
          h(DSIcon, { name: "download", size: 15 }), busy ? "Preparo il PNG…" : "Scarica la tua casa (PNG)"),
        h("button", { type: "button", className: "baf-cta baf-cta-ghost baf-seme-btn", onClick: onClose }, "Chiudi")));
  }

  function BuyAFeatureFlow() {    const [step, setStep] = React.useState("cover");
    const [genioIntroDone, setGenioIntroDone] = React.useState(false);
    const [id, setId] = React.useState({ name: "", team: "", tenure: "", warmup: "", gender: "" });
    const setIdent = (p) => setId((v) => Object.assign({}, v, p));
    STUD.src = id.gender === "donna" ? "assets/studentessa-sm.png" : "assets/studente.png";
    const [dvEntries, setDvEntries] = React.useState({});
    const dv = dvApi(dvEntries, setDvEntries);
    const [cart, setCart] = React.useState(() => new Set());
    const [blocked, setBlocked] = React.useState(null);
    const [custom, setCustom] = React.useState({ text: "", icon: "gem" });
    // testo "fotografato" all'ultima generazione: si può rigenerare quante volte si vuole
    const [pvText, setPvText] = React.useState(null);
    const [pvNonce, setPvNonce] = React.useState(0);
    const [semeReply, setSemeReply] = React.useState("");
    const [special, setSpecial] = React.useState({});
    const [specialOpen, setSpecialOpen] = React.useState(false);
    const [specialSeen, setSpecialSeen] = React.useState(false);
    const [certOpen, setCertOpen] = React.useState(false);
    const [homeOpen, setHomeOpen] = React.useState(false);
    const [discoveryDone, setDiscoveryDone] = React.useState(false);
    const answerSpecial = (qid, val) => setSpecial((s) => Object.assign({}, s, { [qid]: val }));
    const bonusPoints = Math.min(Object.keys(special).length * SPECIAL_STEP, SPECIAL_QS.length * SPECIAL_STEP);
    // Stato invio: "idle" | "sending" | "sent" | "error".
    const [sendStatus, setSendStatus] = React.useState("idle");
    const feedbackDone = React.useRef(false); // true solo dopo un invio riuscito

    // Riepilogo di tutte le risposte con etichette leggibili: le chiavi sono il
    // testo delle domande (non codici tipo "q1"), così l'invio è comprensibile.
    const buildPayload = (reply) => {
      const cartIds = Array.from(cart);
      const cartNames = cartIds.map((x) => byId[x].name);
      const cartSpent = cartIds.reduce((s, x) => s + byId[x].price, 0);
      const semeText = (reply != null ? reply : semeReply).trim();
      const nome = id.name.trim() || "(senza nome)";
      const payload = {
        _subject: "La nuova Casa · risposte di " + nome,
        "Nome": nome,
        "Data e ora": new Date().toLocaleString("it-IT"),
        "Chi hai scelto di essere": id.gender === "donna" ? "Studentessa" : id.gender === "uomo" ? "Studente" : "-",
        "In che team lavori": id.team || "-",
        "Da quanto vivi nel villaggio (anzianità)": id.tenure || "-",
      };
      // Fase 1 — cosa salvi / lasci dalle fiamme (vecchia Home), con motivo e ricordo
      SHELF.forEach((m) => {
        const e = dvEntries[m.id] || {};
        let val = e.action === "ko" ? "Lasciato alle fiamme" : e.action === "ok" ? "Portato via" : "-";
        if (e.reason) val += " · motivo: " + e.reason;
        if (e.evidence) val += " · ricordo: " + e.evidence;
        payload["[Vecchia Home] " + m.name] = val;
      });
      // Modalità speciale — domande di recupero punti
      SPECIAL_QS.forEach((q) => { if (special[q.id] != null) payload[q.q] = special[q.id]; });
      // Fase 2 — ricostruzione della nuova casa
      payload["Materiali scelti per la nuova casa"] = cartNames.length ? cartNames.join(", ") : "(nessuno)";
      payload["Punti spesi"] = cartSpent + " / " + total + " pt";
      payload["Archetipo della casa"] = (ARCH[computeArch(cartIds)] || ARCH.cabina).title;
      if (custom.text.trim()) payload["Pezzo su misura richiesto"] = custom.text.trim();
      if (bonusPoints) payload["Punti recuperati (modalità speciale)"] = bonusPoints + " pt";
      payload["L'acqua di ogni giorno (cosa vorresti trovare ogni giorno in Home)"] = semeText || "(nessuna risposta)";
      return payload;
    };

    // Invio a fine percorso: una sola volta se riuscito, ritentabile se fallisce.
    const sendFeedback = (reply) => {
      if (feedbackDone.current || sendStatus === "sending") return; // no invii doppi
      // SOLO PER PROGETTAZIONE: nessun invio reale, si mostra lo stato "inviato" (mock)
      if (DEV_NO_SEND || !FEEDBACK_ENDPOINT) { feedbackDone.current = true; setSendStatus("sent"); return; }
      setSendStatus("sending");
      const payload = buildPayload(reply);
      fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (res && res.ok) { feedbackDone.current = true; setSendStatus("sent"); }
          else setSendStatus("error");
        })
        .catch(() => setSendStatus("error")); // es. offline: risposte mai perse, si può riprovare
    };
    const CUSTOM_ICONS = ["gem", "rocket", "flag", "medal", "comments", "bell", "list-check", "house", "briefcase", "calendar-clock"];
    const customFeat = custom.text.trim() ? { id: "__custom", name: custom.text.trim(), icon: custom.icon, price: 0, arch: "cabina", custom: true } : null;

    const idx = FLOW_STEPS.indexOf(step);
    // meccanica Cassa (come Il Trasloco, atto 1): "Non funziona" = vendi
    // l'oggetto al mercatino e incassi il suo valore; "Va bene" = lo tieni.
    // Budget casa nuova = base 40 + cassa (vendite + ricordi).
    const soldPts = SHELF.reduce((s, m) => s + ((dvEntries[m.id] || {}).action === "ko" ? m.value : 0), 0);
    const cassa = soldPts + dv.bonus;
    const total = 40 + cassa + bonusPoints;
    const ids = Array.from(cart);
    const spent = ids.reduce((s, x) => s + byId[x].price, 0);
    const left = total - spent;
    const go = (s) => { setStep(s); if (typeof window !== "undefined") window.scrollTo && window.scrollTo(0, 0); };

    // Modalità speciale: si attiva quando si entra nel negozio con un budget
    // basso — 40 pt o meno (prima dei punti recuperabili con le domande).
    React.useEffect(function () {
      if (step === "buy" && (total - bonusPoints) <= 40 && !specialSeen) { setSpecialOpen(true); setSpecialSeen(true); }
    }, [step, total, bonusPoints, specialSeen]);

    // (stepper DEV di navigazione rapida rimosso)

    const toggle = (fid) => {
      setCart((prev) => {
        const n = new Set(prev);
        if (n.has(fid)) n.delete(fid);
        else if (byId[fid].price <= total - Array.from(prev).reduce((s, x) => s + byId[x].price, 0)) n.add(fid);
        else { setBlocked(fid); setTimeout(() => setBlocked((v) => (v === fid ? null : v)), 440); }
        return n;
      });
    };

    // cover d'ingresso (fuori dai passi numerati)
    if (step === "cover") {
      return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "baf-cover-page" },
        React.createElement("div", { className: "baf-cover-sky", "aria-hidden": "true" },
          COVER_ROCKETS.map((r, i) => React.createElement("span", { key: i, className: "baf-crocket", style: { left: r.x, top: r.y, color: r.c, "--rot": r.rot + "deg", animationDelay: r.d } }, React.createElement(DSIcon, { name: "rocket", size: r.s })))),
        React.createElement("div", { className: "baf-cover-content" },
          React.createElement("span", { className: "baf-cover-logo" }, React.createElement("img", { src: "assets/logo/logo-full.svg", alt: "start2impact" })),
          React.createElement("h1", { className: "baf-cover-title" }, "La nuova Casa"),
          React.createElement("p", { className: "baf-cover-sub" }, "Benvenuti nel gioco di ruolo realizzato dal Team Design. Lo scopo è rendere la raccolta feedback un'esperienza piacevole e permetterti di immedesimarti in uno studente."),
          React.createElement("button", { type: "button", className: "baf-cover-btn", onClick: () => go("storia") }, React.createElement(DSIcon, { name: "rocket", size: 20 }), " Inizia ora"),
          React.createElement("span", { className: "baf-cover-time", style: { marginTop: 14 } }, "Circa 8 minuti · puoi fermarti e riprendere quando vuoi"))));
    }

    // Scena d'inizio: la storia prima del risveglio (a schermo intero)
    if (step === "storia") {
      return React.createElement(StoryIntro, { onDone: () => go("genere") });
    }

    // Scelta del personaggio (uomo o donna) — prima della chat con Aster
    if (step === "genere") {
      const pick = (g) => { setIdent({ gender: g }); go("ingresso"); };
      return React.createElement("div", { className: "baf-gender-page", "data-screen-label": "Chi sei" },
        React.createElement("div", { className: "baf-atto1-glow", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-atto1-embers", "aria-hidden": "true" },
          [0,1,2,3,4,5,6,7].map((k) => React.createElement("i", { key: k, style: { left: (10 + k * 11) + "%", animationDelay: (k * 0.4) + "s", animationDuration: (2.6 + (k % 3) * 0.7) + "s" } }))),
        React.createElement("div", { className: "baf-paper", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-paper2", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-gender-content" },
          React.createElement("div", { className: "baf-atto1-k" }, "Prologo"),
          React.createElement("h1", { className: "baf-atto1-q" }, "Prima di entrare nella storia, ", React.createElement("b", null, "chi vuoi essere?")),
          React.createElement("div", { className: "baf-gender-row" },
            React.createElement("button", { type: "button", className: "baf-gender-opt", onClick: () => pick("uomo") },
              React.createElement("img", { src: "assets/studente.png", alt: "Uomo" })),
            React.createElement("button", { type: "button", className: "baf-gender-opt", onClick: () => pick("donna") },
              React.createElement("img", { src: "assets/studentessa-sm.png", alt: "Donna" })))));
    }

    // Atto 1 — dentro la casa in fiamme, si comincia a salvare (a schermo intero)
    if (step === "atto1") {
      const nm = id.name.trim();
      return React.createElement("div", { className: "baf-atto1-page" },
        React.createElement("div", { className: "baf-atto1-glow", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-paper", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-paper2", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-atto1-embers", "aria-hidden": "true" },
          [0,1,2,3,4,5,6,7].map((k) => React.createElement("i", { key: k, style: { left: (10 + k * 11) + "%", animationDelay: (k * 0.4) + "s", animationDuration: (2.6 + (k % 3) * 0.7) + "s" } }))),
        React.createElement("div", { className: "baf-atto1-content" },
          React.createElement("div", { className: "baf-atto1-figs" },
            React.createElement("span", { className: "stud" }, React.createElement("img", { src: STUD.src, alt: "" })),
            React.createElement("span", { className: "cat" }, React.createElement("img", { src: "assets/aster-avatar-sm.png", alt: "" }))),
          React.createElement("div", { className: "baf-atto1-k" }, "Atto 1"),
          React.createElement("h1", { className: "baf-atto1-q" }, "Non c'è più tempo da perdere", nm ? React.createElement(React.Fragment, null, ", ", React.createElement("b", null, nm)) : null, ": prendi dalle fiamme quello che è più importante per te."),
          React.createElement("button", { className: "baf-cta baf-atto1-btn", onClick: () => go("discovery") }, React.createElement(DSIcon, { name: "fire", size: 18 }), " Inizia")));
    }

    // Atto IV — schermata-ponte a schermo intero tra discovery e buy
    if (step === "ponte") {
      return React.createElement("div", { className: "baf-ponte-page" },
        React.createElement("div", { className: "baf-ponte-glow", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-seme-starfield", "aria-hidden": "true" },
          [["8%","9%"],["16%","18%"],["24%","6%"],["33%","15%"],["41%","7%"],["49%","12%"],["57%","8%"],["64%","17%"],["72%","6%"],["79%","13%"],["86%","9%"],["93%","16%"],["12%","26%"],["28%","30%"],["44%","24%"],["60%","29%"],["76%","26%"],["90%","30%"],["4%","20%"],["37%","22%"],["68%","23%"],["96%","22%"],["20%","40%"],["52%","38%"],["82%","41%"]].map((p, k) =>
            React.createElement("i", { key: k, style: { left: p[0], top: p[1], animationDelay: ((k % 8) * 0.4) + "s" } }))),
        React.createElement("div", { className: "baf-paper", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-paper2", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-ponte-content" },
          React.createElement("div", { className: "baf-ponte-figs" },
            React.createElement("span", { className: "baf-stud-ava" }, React.createElement("img", { src: STUD.src, alt: "" })),
            React.createElement("span", { className: "baf-cat-ava" }, React.createElement("img", { src: "assets/aster-avatar-sm.png", alt: "" }))),
          React.createElement("div", { className: "baf-ponte-k" }, "Atto 2"),
          React.createElement("h1", { className: "baf-ponte-q" }, "Tutto si può ricostruire. Bisogna solo capire da dove cominciare."),
          React.createElement("div", { className: "baf-ponte-bag" },
            React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: "briefcase", size: 22 })),
            React.createElement("div", { className: "tx" },
              React.createElement("div", { className: "k" }, "Il tuo budget"),
              React.createElement("div", { className: "v" }, React.createElement("b", null, total), " pt per ricostruire"))),
          React.createElement("button", { className: "baf-cta baf-ponte-btn", onClick: () => go("alba") }, "Cominciamo!")));
    }

    // Scena dell'alba: lo sfondo dipinto della notte che finisce (cielo, stelle,
    // nuvole, casette bruciate, viandante e Aster) — senza le colline ad arco
    if (step === "alba") {
      return React.createElement("div", { className: "baf-alba-page" },
        React.createElement("div", { className: "baf-alba-sky", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-alba-stars", "aria-hidden": "true" },
          [["14%","12%"],["28%","22%"],["44%","9%"],["66%","18%"],["80%","11%"],["90%","26%"],["20%","30%"],["55%","6%"],["8%","20%"],["36%","15%"],["50%","24%"],["60%","8%"],["72%","28%"],["86%","19%"],["94%","13%"],["24%","7%"],["40%","28%"],["48%","14%"],["68%","32%"],["78%","22%"],["4%","32%"],["32%","33%"],["62%","24%"],["96%","30%"],["11%","7%"],["18%","16%"],["34%","5%"],["52%","33%"],["58%","15%"],["70%","11%"],["76%","6%"],["84%","32%"],["92%","7%"],["6%","12%"],["22%","24%"],["30%","11%"],["38%","21%"],["46%","31%"],["56%","28%"],["64%","5%"],["74%","17%"],["82%","14%"],["88%","9%"],["98%","20%"],["2%","25%"],["16%","33%"],["42%","36%"],["66%","37%"]].map((p, k) =>
            React.createElement("i", { key: k, style: { left: p[0], top: p[1], animationDelay: (k * 0.22) + "s" } }))),
        React.createElement("div", { className: "baf-alba-glow", "aria-hidden": "true" }),
        bafRoughFilter(),
        bafCloud("baf-alba-cloud", { left: "4%", top: "8%" }, 300),
        bafCloud("baf-alba-cloud", { right: "4%", top: "16%" }, 250),
        React.createElement("div", { className: "baf-emporio", "aria-hidden": "true" },
          React.createElement("span", { className: "smoke" }, React.createElement("i", null), React.createElement("i", null), React.createElement("i", null)),
          React.createElement("span", { className: "chimney" }),
          React.createElement("span", { className: "roof" }),
          React.createElement("span", { className: "body" },
            React.createElement("span", { className: "win w1" }), React.createElement("span", { className: "win w2" }), React.createElement("span", { className: "door" })),
          React.createElement("span", { className: "lamp" })),
        React.createElement("div", { className: "baf-walker baf-alba-walker", "aria-hidden": "true" },
          React.createElement("span", { className: "torchglow" }),
          React.createElement("span", { className: "torch" }),
          React.createElement("span", { className: "body" }),
          React.createElement("span", { className: "head" })),
        React.createElement("div", { className: "baf-story-cat baf-alba-cat", "aria-hidden": "true" },
          React.createElement("span", { className: "halo" }),
          React.createElement("span", { className: "dot" })),
        React.createElement("div", { className: "baf-alba-snow", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-paper", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-paper2", "aria-hidden": "true" }),
        React.createElement("div", { className: "baf-alba-caption" },
          React.createElement("div", { className: "k" }, "Capitolo Uno"),
          React.createElement("p", { className: "line" }, "Si illumina la prima luce del mattino, il villaggio è in cenere. È rimasto in piedi solo il negozio del villaggio. Aster ti fa entrare."),
          React.createElement("button", { className: "baf-cta baf-alba-btn", onClick: () => go("buy") }, "Entra nel negozio")));
    }

    // Scena dell'architetto: il negoziante dell'emporio si rivela (soglia →
    // si avvicina), in due battute con lo stile-copy delle scene introduttive
    if (step === "architetto") {
      return React.createElement(ArchScene, { onRivedi: () => go("buy"), onSicuro: () => go("reward") });
    }

    // Atto VII — il seme: la signora e la domanda per chi verrà (a schermo intero)
    if (step === "seme") {
      const certItems = ids.map((x) => byId[x]);
      if (customFeat) certItems.push(customFeat);
      const certData = {
        name: id.name.trim() || "Studente",
        dateStr: new Date().toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" }),
        arch: ARCH[computeArch(ids)] || ARCH.cabina,
        items: certItems, spent: spent, total: total, seed: semeReply.trim(),
      };
      const semeRecap = {
        tookCount: SHELF.filter((m) => (dvEntries[m.id] || {}).action === "ok").length,
        leftCount: SHELF.filter((m) => (dvEntries[m.id] || {}).action === "ko").length,
        itemsCount: certItems.length, spent: spent, total: total, arch: certData.arch,
      };
      return React.createElement(React.Fragment, null,
        React.createElement(SemeScene, { value: semeReply, onChange: setSemeReply, onFinish: () => sendFeedback(), onDone: () => go("cover"), onDownload: () => setCertOpen(true), sendStatus: sendStatus, onRetry: () => sendFeedback(), recap: semeRecap }),
        certOpen ? React.createElement(CertOverlay, { data: certData, onClose: () => setCertOpen(false) }) : null);
    }

    // header
    const bar = React.createElement("div", { className: "baf-flowbar" },
      React.createElement("div", { className: "baf-flowbar-in" },
        React.createElement("div", { className: "baf-flowbar-top" },
          idx > 0
            ? React.createElement("button", { className: "baf-flow-back", onClick: () => go(step === "buy" ? "alba" : FLOW_STEPS[idx - 1]) }, React.createElement(DSIcon, { name: "arrow-left", size: 13 }), "Indietro")
            : React.createElement("img", { className: "baf-flow-logo", src: "assets/logo/logo-full.svg", alt: "start2impact" }),
          React.createElement("div", { className: "baf-flow-me" },
            React.createElement("span", { className: "baf-flow-steplabel" }, FLOW_PHASE[step], " · ", FLOW_LABELS[step]),
            step !== "ingresso" && React.createElement("span", { className: "baf-stud-ava" }, React.createElement("img", { src: STUD.src, alt: "Il tuo studente" })))),
        React.createElement("div", { className: "baf-flow-prog" }, React.createElement("i", { style: { width: ((idx) / (FLOW_STEPS.length - 1)) * 100 + "%" } }))));

    let body;
    if (step === "ingresso") {
      body = React.createElement("div", { className: "baf-flow" }, genioIntroDone ? IngressoView(id, setIdent, () => go("atto1"), "Continua") : null);
    } else if (step === "discovery") {
      body = React.createElement("div", { className: "baf-flow" },
        React.createElement("div", { className: "baf-flow-h" },
          React.createElement("div", { className: "k" }, "Fase 1 · Salva dalle fiamme"),
          React.createElement("h1", null, "Cosa porti via dalle fiamme?"),
          React.createElement("div", { className: "baf-obj" },
            React.createElement("span", { className: "baf-obj-k" }, React.createElement(DSIcon, { name: "flag", size: 12 }), "Obiettivo"),
            React.createElement("p", null, "Prendi solo ciò che per te conta davvero e lascia andare il resto: ogni scelta racconta la Home che vorresti."),
            React.createElement("button", { type: "button", className: "baf-obj-link", onClick: () => setHomeOpen(true) }, React.createElement(DSIcon, { name: "eye", size: 13 }), "Guarda com'è la Home di oggi"))),
        React.createElement(DiscoveryDeck, { dv: dv, onDone: () => go("ponte"), onRestart: () => setDvEntries({}), bare: true, onStage: setDiscoveryDone }));
    } else if (step === "buy") {
      body = React.createElement("div", { className: "baf-flow baf-flow-buy" },
        React.createElement("div", { className: "baf-flow-h" },
          React.createElement("div", { className: "k" }, "Fase 2 · Il negozio dei materiali"),
          React.createElement("h1", null, "Ricostruisci la tua casa"),
          React.createElement("div", { className: "baf-obj" },
            React.createElement("span", { className: "baf-obj-k" }, React.createElement(DSIcon, { name: "flag", size: 12 }), "Obiettivo"),
            React.createElement("p", null, "Spendi i punti per i materiali che contano davvero: il budget non basta per tutto, ogni acquisto è una priorità. Apri una riga per scoprire cosa fa."))),
        React.createElement("div", { className: "baf-board" },
          React.createElement("div", { className: "baf-list baf-alist baf-alist-scroll" },
            CATALOG.map((f) => {
              const on = cart.has(f.id), aff = on || f.price <= left;
              return React.createElement(BuyRow, { key: f.id, f: f, on: on, aff: aff, blocked: blocked === f.id, onToggle: () => toggle(f.id) });
            }))),
        React.createElement("div", { className: "baf-flow-cta" },
          React.createElement("div", { className: "info" },
            React.createElement("div", { className: "t" }, ids.length ? `${ids.length} materiali · ${spent} pt` : "La casa è ancora vuota"),
            React.createElement("div", { className: "s" }, ids.length ? "Puoi ancora cambiare idea" : "Ricostruisci ciò che conta di più")),
          (cassa === 0 && bonusPoints < SPECIAL_QS.length * SPECIAL_STEP) ? React.createElement("button", { className: "baf-cta baf-cta-ghost", onClick: () => setSpecialOpen(true) }, React.createElement(DSIcon, { name: "gem", size: 14 }), "Recupera punti") : null,
          React.createElement("button", { className: "baf-cta" + (ids.length ? "" : " off"), onClick: () => ids.length && go("custom") }, "Continua")));
    } else if (step === "custom") {
      body = React.createElement("div", { className: "baf-flow" },
        React.createElement("div", { className: "baf-flow-h" },
          React.createElement("div", { className: "k" }, "Fase 3 · Il pezzo che manca"),
          React.createElement("h1", null, "C'è qualcosa che vuoi costruire da zero?")),
        React.createElement("div", { className: "baf-board" },
          React.createElement("div", { className: "baf-custom" },
            React.createElement("textarea", { placeholder: "Es. «Un promemoria delle scadenze dei progetti» oppure «Un riepilogo delle ore di studio della settimana».", value: custom.text, onChange: (e) => setCustom((v) => Object.assign({}, v, { text: e.target.value })) }),
            React.createElement("div", { className: "baf-custom-preview" },
              React.createElement("div", { className: "baf-custom-pv-k" }, "Anteprima"),
              pvText != null
                ? React.createElement("div", { className: "baf-thumb baf-thumb-lg", key: pvNonce, style: { background: MINTL } },
                    React.createElement(CustomScene, { text: pvText }))
                : React.createElement("div", { className: "baf-custom-pv-empty" }, "Premi «Genera anteprima» per vederlo con gli stili di start2impact.")))),
        React.createElement("div", { className: "baf-flow-cta" },
          React.createElement("button", { className: "baf-cta baf-cta-ghost baf-cta-gen" + (custom.text.trim() ? "" : " off"), onClick: () => { if (custom.text.trim()) { setPvText(custom.text); setPvNonce((n) => n + 1); } } }, React.createElement(DSIcon, { name: "gem", size: 14 }), pvText != null ? "Rigenera anteprima" : "Genera anteprima"),
          React.createElement("button", { className: "baf-cta", style: { marginLeft: "auto" }, onClick: () => go("architetto") }, "Andiamo avanti", React.createElement(DSIcon, { name: "arrow-right", size: 14 }))));
    } else if (step === "confirm") {
      const chosen = ids.map((x) => byId[x]);
      const allChosen = customFeat ? chosen.concat([customFeat]) : chosen;
      body = React.createElement("div", { className: "baf-flow" },
        React.createElement("div", { className: "baf-flow-h" },
          React.createElement("div", { className: "k" }, "Fase 4 · L'architetto sulla soglia"),
          React.createElement("h1", null, "Sei sicuro di questa casa?")),
        React.createElement("div", { className: "baf-board" },
          React.createElement("div", { className: "baf-confirm" },
            React.createElement("div", { className: "baf-confirm-ask" },
              React.createElement("span", { className: "cat arch" }, React.createElement(DSIcon, { name: "pen-to-square", size: 24 })),
              React.createElement("div", { className: "msg" }, "Sono l'architetto. Prima di tirare su i muri per davvero: ", React.createElement("b", null, "è questa la casa che vuoi?"), " Possiamo ancora rimettere mano al progetto.")),
            React.createElement("div", { className: "baf-confirm-list" },
              allChosen.map((f) => React.createElement("div", { key: f.id, className: "baf-confirm-item" },
                React.createElement("span", { className: "baf-ico baf-ico-on", style: { width: 32, height: 32 } }, React.createElement(DSIcon, { name: f.icon, size: 15 })),
                React.createElement("span", { className: "nm" }, f.name),
                React.createElement("span", { className: "pr" }, f.custom ? "su misura" : f.price + " pt")))),
            React.createElement("div", { className: "baf-confirm-tot" },
              React.createElement("span", { className: "l" }, ids.length, " arredi", customFeat ? " + 1 su misura" : ""),
              React.createElement("span", { className: "v" }, spent, " di ", total, " pt")))),
        React.createElement("div", { className: "baf-flow-cta" },
          React.createElement("button", { className: "baf-flow-back", style: { marginRight: "auto" }, onClick: () => go("buy") }, React.createElement(DSIcon, { name: "arrow-left", size: 13 }), "Rivedi il progetto"),
          React.createElement("button", { className: "baf-cta", onClick: () => go("reward") }, "Sì, costruiamola")));
    } else if (step === "reward") {
      const items = ids.map((x) => byId[x]);
      if (customFeat) items.push(customFeat);
      const d = { items, spent, left, arch: ARCH[computeArch(ids)] || ARCH.cabina };
      body = React.createElement("div", { className: "baf-flow" },
        React.createElement("div", { className: "baf-flow-h" },
          React.createElement("div", { className: "k" }, "Fase 4 · La casa che hai costruito"),
          React.createElement("h1", null, "Ecco la tua nuova casa")),
        RewardView(d, total),
        React.createElement("div", { className: "baf-flow-cta" },
          React.createElement("div", { className: "info" },
            React.createElement("div", { className: "t" }, React.createElement("span", { className: "baf-bell" }, React.createElement(DSIcon, { name: "bell", size: 16 })), "Dlin dlon"),
            React.createElement("div", { className: "s" }, "Suonano al campanello della tua nuova casa! Chi sarà?")),
          React.createElement("button", { className: "baf-cta", onClick: () => go("seme") }, React.createElement(DSIcon, { name: "bell", size: 15 }), "Rispondi al campanello")));
    } else {
      // vetrina — la tua casa + il quartiere del team
      const myArchK = computeArch(ids) || "cabina";
      const myArch = ARCH[myArchK];
      const myResult = { name: id.name.trim() || "Tu", team: id.team || "-", cart: ids, archK: myArchK };
      const list = [myResult].concat(SEED);
      const split = divisiveFeature(list);
      body = React.createElement("div", { className: "baf-flow" },
        React.createElement("div", { className: "baf-flow-h" },
          React.createElement("div", { className: "k" }, "Fase 6 · Il villaggio che rinasce"),
          React.createElement("h1", null, "Il villaggio, il giorno dopo"),
          React.createElement("p", null, "Le case di tutti i team sorgono una accanto all'altra, sulla stessa cenere di ieri.")),
        React.createElement("div", { className: "baf-flow-mine", style: { background: myArch.color } },
          React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: myArch.icon, size: 22 })),
          React.createElement("div", null,
            React.createElement("div", { className: "k" }, "La tua casa"),
            React.createElement("div", { className: "nm" }, myArch.title))),
        split && React.createElement("div", { className: "baf-splitnote" },
          React.createElement("span", { className: "ic" }, React.createElement(DSIcon, { name: "shuffle", size: 16 })),
          React.createElement("div", null,
            React.createElement("div", { className: "k" }, "Su cosa il villaggio non è d'accordo"),
            React.createElement("div", { className: "t" }, React.createElement("b", null, split.f.name), ": ", split.inN, " la tengono in casa, ", split.outN, " la lasciano fuori."))),
        React.createElement("div", { className: "baf-gal" },
          list.map((r, k) => {
            const a = ARCH[r.archK] || ARCH.cabina;
            const top = r.cart.map((x) => byId[x]).sort((p, q) => q.price - p.price).slice(0, 3);
            return React.createElement("div", { key: k, className: "baf-gal-card", style: k === 0 ? { boxShadow: "inset 0 0 0 2px " + a.color + ", var(--shadow-card)" } : undefined },
              React.createElement("div", { className: "baf-gal-strip", style: { background: a.color } },
                React.createElement(DSIcon, { name: a.icon, size: 20 }),
                React.createElement("div", { className: "t" },
                  React.createElement("div", { className: "nm" }, r.name, k === 0 ? " (tu)" : ""),
                  React.createElement("div", { className: "tm" }, r.team))),
              React.createElement("div", { className: "baf-gal-body" },
                React.createElement("div", { className: "ar", style: { color: a.color } }, a.title),
                React.createElement("div", { className: "baf-gal-feats" },
                  top.map((f) => React.createElement("span", { key: f.id, className: "baf-gal-feat" }, React.createElement(DSIcon, { name: f.icon, size: 11 }), f.name)))));
          })),
        React.createElement("div", { className: "baf-flow-cta" },
          React.createElement("div", { className: "info" },
            React.createElement("div", { className: "t" }, "Fatto, grazie!"),
            React.createElement("div", { className: "s" }, "Il tuo feedback è nel villaggio")),
          React.createElement("button", { className: "baf-cta", onClick: () => go("cover") }, "Ricomincia")));
    }

    const sky = React.createElement("div", { className: "baf-flow-sky", "aria-hidden": "true" },
      COVER_ROCKETS.map((r, i) => React.createElement("span", { key: i, className: "baf-crocket", style: { left: r.x, top: r.y, color: r.c, "--rot": r.rot + "deg", animationDelay: r.d } }, React.createElement(DSIcon, { name: "rocket", size: r.s }))));
    // le istruzioni di ogni fase vivono nel fumetto del gatto
    const GENIO_SAY = {
      discovery: React.createElement(React.Fragment, null,
        React.createElement("strong", { className: "baf-aster-title" }, "Segui l'istinto"),
        React.createElement("p", null, "Prendi ciò che conta davvero: quello che lasci sparisce tra le fiamme."),
        React.createElement("p", { className: "baf-aster-note" }, "Ogni cosa lasciata ti fa recuperare punti, e se aggiungi una prova a supporto guadagni +5 pt.")),
      buy: React.createElement(React.Fragment, null,
        React.createElement("strong", { className: "baf-aster-title" }, "Il negozio è aperto"),
        React.createElement("p", null, "Hai ", React.createElement("b", null, total, " pt"), ": 40 di base + " + (cassa + bonusPoints) + " recuperati."),
        React.createElement("p", { className: "baf-aster-note" }, "Apri una riga per scoprire cosa fa. Compra e rivendi finché non torna il progetto.")),
      custom: React.createElement(React.Fragment, null,
        React.createElement("strong", { className: "baf-aster-title" }, "Manca qualcosa?"),
        React.createElement("p", null, "Se nel negozio non c'era, descrivilo: te lo disegno al volo con i materiali di start2impact.")),
      confirm: React.createElement(React.Fragment, null,
        React.createElement("strong", { className: "baf-aster-title" }, "Un ultimo sguardo"),
        React.createElement("p", null, "Il progetto è sul tavolo: se ti convince, si tirano su i muri.")),
      reward: React.createElement(React.Fragment, null,
        React.createElement("strong", { className: "baf-aster-title" }, "Ta-daan!"),
        React.createElement("p", null, "Questa è la casa che hai tirato su dalla cenere. Guardala bene: dice molto di te.")),
      vetrina: "Ultimo giro: sbircia le case del villaggio e lascia un feedback ai vicini.",
    };

    // ── Sidebar fissa: carrello · gatto/Genio · budget · obiettivo ──
    const goalName = id.name.trim();
    let railWallet;
    if (step === "discovery") {
      railWallet = React.createElement("div", { className: "baf-rail-wallet earn" },
        React.createElement("div", { className: "k" }, React.createElement(DSIcon, { name: "medal", size: 14 }), "Punti recuperati"),
        React.createElement("div", { className: "hint" }, "Guadagni punti per ogni cosa che lasci alle fiamme, più 5 pt per ogni prova che aggiungi. Li spenderai per ricostruire la casa."),
        React.createElement("div", { className: "num" }, React.createElement("span", { className: "big" }, React.createElement(AnimatedNumber, { value: cassa })), " pt"));
    } else {
      railWallet = React.createElement("div", { className: "baf-rail-wallet" },
        React.createElement("div", { className: "k" }, React.createElement(DSIcon, { name: "credit-card", size: 14 }), "Budget disponibile"),
        React.createElement("div", { className: "num" }, React.createElement("span", { className: "big" }, React.createElement(AnimatedNumber, { value: left })), " / ", total, " pt"),
        React.createElement("div", { className: "meter" }, React.createElement("i", { style: { width: (total ? (spent / total) * 100 : 0) + "%" } })),
        // il budget scarseggia: proprio accanto al counter compare il recupero punti
        (step === "buy" && cassa === 0 && left < 20 && bonusPoints < SPECIAL_QS.length * SPECIAL_STEP)
          ? React.createElement("button", { type: "button", className: "baf-rail-recover", onClick: () => setSpecialOpen(true) },
              React.createElement(DSIcon, { name: "gem", size: 13 }), "Punti quasi finiti? Recuperane altri")
          : null);
    }
    if (step === "reward" || step === "custom") railWallet = null;

    const railCart = step === "buy" ? React.createElement("div", { className: "baf-rail-goal baf-rail-cart" },
      React.createElement("span", { className: "baf-cart-ic" }, React.createElement(DSIcon, { name: "briefcase", size: 18 })),
      React.createElement("div", { className: "tx" },
        React.createElement("div", { className: "k" }, "Carrello", ids.length ? React.createElement("span", { className: "n" }, ids.length) : null),
        ids.length
          ? React.createElement("ul", { className: "baf-cart-list" },
              ids.map((cid) => React.createElement("li", { key: cid },
                React.createElement(DSIcon, { name: byId[cid].icon, size: 12 }),
                React.createElement("span", { className: "nm" }, byId[cid].name),
                React.createElement("b", null, byId[cid].price))))
          : React.createElement("div", { className: "t" }, "Ancora vuoto: aggiungi i materiali dal negozio."))) : null;

    // Obiettivo dello studente in spalla: via da buy/custom/reward (l'obiettivo
    // dell'esercizio vive sotto il titolo; nel reward non c'è esercizio contestuale)
    const railGoal = (step === "buy" || step === "custom" || step === "reward") ? null : React.createElement("div", { className: "baf-rail-goal" },
      React.createElement("span", { className: "baf-stud-ava" }, React.createElement("img", { src: STUD.src, alt: "" })),
      React.createElement("div", { className: "tx" },
        React.createElement("div", { className: "k" }, goalName ? "Obiettivo di " + goalName : "Obiettivo studente"),
        React.createElement("ol", { className: "baf-goal-list" },
          React.createElement("li", null, "Costruire la nuova Home di start2impact."),
          React.createElement("li", null, "Arrivare in fondo al Master, ormai quasi al traguardo, e prepararsi al mondo del lavoro."))));
    const rail = step === "discovery"
      ? React.createElement("aside", { className: "baf-rail baf-rail-light" },
          React.createElement("div", { className: "baf-rail-head" },
            React.createElement("img", { className: "baf-rail-logo", src: "assets/logo/logo-full.svg", alt: "start2impact" })),
          railWallet)
      : React.createElement("aside", { className: "baf-rail" },
          React.createElement("div", { className: "baf-rail-head" },
            React.createElement("img", { className: "baf-rail-logo", src: "assets/logo/logo-full.svg", alt: "start2impact" })),
          railGoal,
          railWallet,
          railCart);

    // Aster a figura intera con fumetto, alla destra del gioco (non si sovrappone)
    const asterPanel = (genioIntroDone && GENIO_SAY[step] && !(step === "discovery" && discoveryDone)) ? React.createElement("aside", { className: "baf-aster-panel" },
      React.createElement("div", { className: "baf-aster-bubble" },
        React.createElement("div", { className: "baf-aster-name" }, "Aster"),
        React.createElement("div", { className: "baf-aster-say", key: step }, GENIO_SAY[step])),
      React.createElement("span", { className: "baf-aster-fig" }, React.createElement("img", { src: "assets/aster-full-sm.png", alt: "Aster" }))) : null;
    // la spalla laterale compare solo dopo la firma del contratto (dallo step
    // discovery in poi); in custom e reward resterebbe vuota, quindi sparisce
    const showRail = step !== "ingresso" && step !== "custom" && step !== "reward" && !(step === "discovery" && discoveryDone);
    const fireSnow = step === "discovery"
      ? React.createElement("div", { className: "baf-fire-snow", "aria-hidden": "true" },
          Array.from({ length: 44 }, (_, k) => React.createElement("i", { key: k, style: { left: ((k * 29) % 100) + (k % 3) + "%", width: 2 + (k % 3), height: 2 + (k % 3), animationDuration: (7 + (k % 5)) + "s", animationDelay: (-(k % 8)) + "s", opacity: 0.4 + (k % 4) * 0.15 } })))
      : null;
    const prologueBg = step === "ingresso" ? React.createElement("div", { className: "baf-prologue-bg", "aria-hidden": "true" },
      React.createElement("div", { className: "baf-atto1-glow" }),
      React.createElement("div", { className: "baf-atto1-embers" },
        [0,1,2,3,4,5,6,7].map((k) => React.createElement("i", { key: k, style: { left: (10 + k * 11) + "%", animationDelay: (k * 0.4) + "s", animationDuration: (2.6 + (k % 3) * 0.7) + "s" } })))) : null;
    // cielo stellato del negozio (fase 2 e affini): stelline su tutta la pagina
    const albaStars = (step === "buy" || step === "custom" || step === "reward")
      ? React.createElement("div", { className: "baf-alba-starfield", "aria-hidden": "true" },
          Array.from({ length: 70 }, (_, k) => React.createElement("i", { key: k, style: { left: ((k * 37) % 100) + (k % 5) + "%", top: ((k * 53) % 96) + "%", width: 1.5 + (k % 3), height: 1.5 + (k % 3), animationDelay: ((k % 9) * 0.4) + "s", opacity: 0.35 + (k % 4) * 0.18 } })))
      : null;
    return React.createElement("div", { className: "baf-flow-page" + (showRail ? " has-rail" : "") + (asterPanel ? " has-aster" : "") + (step === "discovery" ? " flow-fire" : "") + ((step === "buy" || step === "custom" || step === "reward") ? " flow-alba" : "") + (step === "ingresso" ? " flow-prologue" : "") }, sky, fireSnow, prologueBg, albaStars,
      step !== "ingresso" ? bar : null,
      body,
      showRail ? rail : null,
      asterPanel,
      specialOpen ? React.createElement(SpecialModal, { answers: special, onAnswer: answerSpecial, onClose: () => setSpecialOpen(false), points: total }) : null,
      homeOpen ? React.createElement(HomeLightbox, { onClose: () => setHomeOpen(false) }) : null,
      !genioIntroDone ? React.createElement(GenioGuide, { intro: true, onDone: () => setGenioIntroDone(true) }) : null);
  }
  window.BuyAFeatureFlow = BuyAFeatureFlow;
})();
