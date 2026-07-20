# La nuova Casa

Gioco di ruolo interattivo del **Team Design di start2impact** per raccogliere feedback sulla nuova Home della piattaforma in modo piacevole e coinvolgente. Invece di un questionario, chi partecipa vive una breve storia (~8 minuti) e, immedesimandosi in uno studente, sceglie cosa salvare e cosa ricostruire — ispirato al metodo **Buy a Feature**.

🔗 **Live:** pubblicato su Netlify, con deploy automatico a ogni push su `main`.

---

## Di cosa si tratta

La casa dello studente va a fuoco. Guidato da **Aster** (l'angelo custode gatto), il giocatore:

1. **Salva dalle fiamme** gli elementi della Home attuale che gli sono più cari — ogni cosa lasciata frutta punti.
2. **Ricostruisce la casa** comprando, con quei punti, i moduli della nuova Home che vorrebbe (budget limitato: ogni acquisto è una priorità).
3. **Aggiunge il pezzo che manca**, descrivendo una funzionalità che oggi non c'è.
4. Nel **capitolo finale** riceve un seme, lo fa germogliare in un minigioco e risponde all'ultima domanda sull'"acqua di ogni giorno" della Home.

Tutte le scelte e le risposte aperte vengono inviate come feedback a fine partita.

---

## Struttura del progetto

Sito **statico** — nessun processo di build, nessun framework da compilare. React viene caricato dal bundle del Design System.

| File | Ruolo |
|------|-------|
| `index.html` | Entry point. Carica gli stili, il bundle DS, `image-slot.js` e monta il componente `BuyAFeatureFlow`. |
| `buy-a-feature-app2.jsx` | **Cuore del gioco** (~2200 righe): tutta la logica, le schermate, il catalogo dei materiali, le scene animate. È il file che si modifica per cambiare contenuti e comportamento. |
| `buy-a-feature.css` | Tutti gli stili del gioco (~2500 righe). |
| `support.js` | Runtime di supporto che interpreta i tag `<x-dc>` / `<x-import>` in `index.html`. |
| `image-slot.js` | Web component `<image-slot>` per le illustrazioni. |
| `_ds/` | Design System di start2impact (token, stili, `_ds_bundle.js` che espone `window.DesignSystem_3f5762`). |
| `assets/` | Illustrazioni del gioco: archetipi, Aster, mascotte, immagine della Home (`dashboard-oscurato.png`), icone, logo. |
| `uploads/` | Asset aggiuntivi del Design System usati dai componenti React. |
| `buy-a-feature-app.jsx` | Versione precedente, **non usata** (`index.html` carica la `app2`). |

---

## Il flusso di gioco

Definito in `FLOW_STEPS` (in `buy-a-feature-app2.jsx`):

| Step | Fase | Cosa succede |
|------|------|--------------|
| `ingresso` | Prologo | La storia dell'incendio, presentazione di Aster, scelta nome/team/anzianità. |
| `discovery` | Fase 1 · Salva dalle fiamme | 11 elementi della vecchia Home: per ognuno "lo porto" o "lo lascio" (con motivo e prova facoltativa). |
| `ponte` | Atto 2 | Passaggio narrativo verso la ricostruzione. |
| `buy` | Fase 2 · Ricostruisci | Negozio dei materiali della nuova Home: si comprano col budget accumulato. Ogni acquisto è commentabile. |
| `custom` | Fase 3 · Il pezzo che manca | Descrivi una funzionalità da zero; un'anteprima la disegna riconoscendo le parole-chiave. |
| `reward` | Fase 4 | Riepilogo e archetipo della casa costruita. |
| `seme` | Capitolo finale | Dono del seme → minigioco dell'innaffiatura → germoglio → domanda finale. |

**Recupero punti:** se i punti disponibili scendono sotto i 40, Aster propone 4 domande a risposta aperta sul ruolo reale di chi gioca (+10 pt l'una, max +40).

---

## Raccolta feedback

Le risposte vengono inviate tramite **Formspree** a fine partita (endpoint configurato in `buy-a-feature-app2.jsx`, costante `FEEDBACK_ENDPOINT`). Il payload include: identità, scelte della Fase 1 con motivi, materiali comprati e commenti, pezzo su misura, risposte del recupero punti e "acqua di ogni giorno".

- `DEV_NO_SEND = true` → disattiva l'invio reale (modalità test), utile in sviluppo.

---

## Sviluppo locale

Essendo un sito statico, basta un qualsiasi web server:

```bash
python3 -m http.server 8899
# poi apri http://localhost:8899
```

Modifica → salva → ricarica la pagina. Non serve alcun passo di build.

---

## Deploy

Il repo è collegato a **Netlify**: ogni push su `main` pubblica automaticamente la nuova versione. Il file `.nojekyll` è presente per compatibilità con eventuali hosting statici.

```bash
git add .
git commit -m "descrizione della modifica"
git push
# Netlify pubblica in ~1-2 minuti
```

> Dopo il deploy, per vedere subito le modifiche fai un ricaricamento forzato (Cmd/Ctrl + Shift + R): i file statici restano in cache nel browser.
