# GravityTech Software

Enterprise IT services website built with React, Vite, Tailwind CSS, and WebGPU shaders. Converted from the Axion Studio design system with full multi-page routing.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS 3.4
- React Router DOM
- [`shaders`](https://www.npmjs.com/package/shaders) — home hero background
- [`lucide-react`](https://lucide.dev/) — icons

## Pages

| Route | Page |
|-------|------|
| `/` | Home — shader hero, clients, services preview |
| `/about` | About — story, values, global offices |
| `/services` | Services — capabilities, why GravityTech |
| `/careers` | Careers — perks, openings, SCIP, apply form |

## Project Structure

```
src/
├── App.tsx                 # Router + ScrollToTop
├── main.tsx
├── index.css
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── TextRollButton.tsx
    ├── SectionBadge.tsx
    ├── HeroBackground.tsx
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Services.tsx
        └── Careers.tsx
```

## Form submissions (Google Sheets + Drive)

All site forms save to **Google Sheets** (one tab per form type). Job application **resumes** are uploaded to **Google Drive**.

### 1. Google Sheet

Production spreadsheet:

https://docs.google.com/spreadsheets/d/1TqszJPQQf2ZjrcuaR3Ae9_cB04uFB6QYaREvYAWRwAA/edit

Full setup steps: **`google-apps-script/SETUP.md`**

The spreadsheet needs **4 tabs** (exact names; `setupSheetHeaders()` creates them):

| Tab name | Form |
|----------|------|
| `Business Enquiries` | About — Business Enquiry |
| `Quote Requests` | Services — Get a Quote |
| `Job Applications` | Careers — Job Application |
| `SCIP Applications` | SCIP — Apply for SCIP |

### 2. Create a Drive folder for resumes

1. In Google Drive, create a folder (e.g. `GravityTech Resumes`)
2. Copy its folder ID from the URL: `drive.google.com/drive/folders/FOLDER_ID_HERE`

### 3. Deploy the Apps Script

1. Open your spreadsheet → **Extensions → Apps Script**
2. Paste the code from `google-apps-script/FormWebhook.gs`
3. Set `DRIVE_FOLDER_ID` at the top of the script to your folder ID
4. Run **`setupSheetHeaders`** once (creates column headers on each tab)
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the **Web app URL** (ends with `/exec`)

### 4. Connect the website

```bash
cp .env.example .env
```

Set in `.env`:

```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_ID/exec
```

For **Netlify**, add the same variable under **Site settings → Environment variables**, then redeploy.

Restart dev server: `npm run dev`

Submissions appear as new rows in the matching sheet tab. Resume links appear in the **Resume Link** column on **Job Applications**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Brand

- **Accent color:** Cyan `#1fb6e8` (replaces Axion orange)
- **Logo:** GT
- **Clock:** IST (Asia/Kolkata)
