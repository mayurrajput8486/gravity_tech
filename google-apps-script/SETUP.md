# Connect form submissions to your Google Sheet

Your spreadsheet:

https://docs.google.com/spreadsheets/d/1TqszJPQQf2ZjrcuaR3Ae9_cB04uFB6QYaREvYAWRwAA/edit

When a student or user submits a form on the website, a **new row** is added to the matching tab in this sheet. Job application **resumes** (PDF/DOC) are saved to a **Google Drive folder**; the sheet stores a link in the Resume Link column.

---

## What goes where

| Website form | Sheet tab | Resume files |
|--------------|-----------|--------------|
| About — Business Enquiry | `Business Enquiries` | — |
| Services — Get a Quote | `Quote Requests` | — |
| Careers — Job Application | `Job Applications` | Drive folder |
| SCIP page — Apply (uses same job form) | `Job Applications` (Role = SCIP Program) | Drive folder |

---

## Step 1 — Apps Script in your sheet

1. Open your spreadsheet (link above).
2. **Extensions → Apps Script**.
3. Delete any default code and paste the full contents of `FormWebhook.gs` from this repo.
4. Confirm this line at the top matches your sheet (already set):

   ```js
   var SPREADSHEET_ID = '1TqszJPQQf2ZjrcuaR3Ae9_cB04uFB6QYaREvYAWRwAA'
   ```

5. **Save** the project (name it e.g. `GravityTech Form Webhook`).

---

## Step 2 — Drive folder for resumes (required for job/SCIP applications)

`drive.google.com/drive/home` is only your Drive home. You need a **specific folder**:

1. In Google Drive, click **New → Folder** (e.g. `GravityTech Resumes`).
2. Open that folder.
3. Copy the ID from the URL:

   ```
   https://drive.google.com/drive/folders/THIS_PART_IS_THE_FOLDER_ID
   ```

4. In Apps Script, set:

   ```js
   var DRIVE_FOLDER_ID = 'paste-folder-id-here'
   ```

5. Save again.

---

## Step 3 — Create sheet tabs and headers (run once)

1. In Apps Script, select function **`setupSheetHeaders`** in the toolbar dropdown.
2. Click **Run**.
3. First time: **Review permissions → Allow** (Google will ask to access your Sheet and Drive).
4. This creates 4 tabs if missing and adds column headers:

   - `Business Enquiries`
   - `Quote Requests`
   - `Job Applications`
   - `SCIP Applications`

---

## Step 4 — Deploy as web app

1. **Deploy → New deployment**.
2. Type: **Web app**.
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorize if prompted.
5. Copy the **Web app URL** — it ends with `/exec`, for example:

   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

6. Test in browser: open that URL. You should see:

   ```json
   {"ok":true,"message":"GravityTech form webhook is running."}
   ```

---

## Step 5 — Connect the website

### Local development

Create `.env` in the project root:

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Replace with your real URL from Step 4.

```bash
npm run dev
```

### Production (Netlify)

1. **Site settings → Environment variables**
2. Add `VITE_GOOGLE_SHEETS_URL` = your `/exec` URL
3. **Redeploy** the site

---

## Step 6 — Test a submission

1. Open the SCIP or Careers apply form on the site.
2. Fill and submit.
3. Check the **Job Applications** tab — a new row should appear.
4. If a resume was uploaded, check your Drive folder and the **Resume Link** column.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "Form storage is not configured" on site | Set `VITE_GOOGLE_SHEETS_URL` in `.env` or Netlify, then restart/redeploy |
| Sheet tab not found | Run `setupSheetHeaders()` again |
| Resume link says folder not configured | Set `DRIVE_FOLDER_ID` in Apps Script |
| Submission fails after code change | **Deploy → Manage deployments → Edit → New version → Deploy** |
| Permission errors | Re-run script and accept Google permissions; deploy as **Anyone** |

---

## Important

- The website does **not** talk to Google directly. It POSTs to your **Apps Script web app**, which writes to your sheet.
- Until Step 4 and Step 5 are done, forms show an error and **nothing is saved**.
- Share the spreadsheet only with people who should see applicant data.
