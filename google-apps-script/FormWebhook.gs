/**
 * GravityTech — Form submissions → Google Sheets + Google Drive
 *
 * SETUP:
 * 1. Create a Google Sheet with 4 tabs (exact names below)
 * 2. Extensions → Apps Script → paste this file
 * 3. Set DRIVE_FOLDER_ID to a Google Drive folder ID for resume uploads
 * 4. Run setupSheetHeaders() once from the editor
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL into your site .env as VITE_GOOGLE_SHEETS_URL
 */

/** Paste your Google Drive folder ID for resume/CV uploads (optional but recommended) */
var DRIVE_FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID_HERE'

var SHEETS = {
  business_enquiry: 'Business Enquiries',
  quote_request: 'Quote Requests',
  job_application: 'Job Applications',
  scip_application: 'SCIP Applications',
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents)
    var formType = payload.formType
    var data = payload.data || {}
    var file = payload.file
    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var resumeUrl = ''

    if (file && file.base64 && file.name) {
      resumeUrl = saveFileToDrive_(file.name, file.mimeType, file.base64)
    }

    switch (formType) {
      case 'business_enquiry':
        appendRow_(ss, SHEETS.business_enquiry, [
          new Date(),
          data.firstName,
          data.companyEmail,
          data.designation,
          data.phone,
          data.requirements,
        ])
        break

      case 'quote_request':
        appendRow_(ss, SHEETS.quote_request, [
          new Date(),
          data.firstName,
          data.lastName,
          data.companyName,
          data.companyEmail,
          data.phone,
          data.designation,
          data.companySize,
          data.serviceTypes,
          data.projectTimeline,
          data.estimatedBudget,
          data.projectDescription,
          data.currentChallenges,
          data.hasExistingSystem,
          data.preferredStartDate,
        ])
        break

      case 'job_application':
        appendRow_(ss, SHEETS.job_application, [
          new Date(),
          data.fullName,
          data.email,
          data.phone,
          data.city,
          data.roleApplying,
          data.experienceLevel,
          data.currentCompany,
          data.currentDesignation,
          data.noticePeriod,
          data.linkedinUrl,
          data.portfolioUrl,
          data.githubUrl,
          resumeUrl,
          data.whyGravityTech,
        ])
        break

      case 'scip_application':
        appendRow_(ss, SHEETS.scip_application, [
          new Date(),
          data.fullName,
          data.email,
          data.phone,
          data.city,
          data.track,
          data.qualification,
          data.graduationYear,
          data.college,
          data.projectLink,
          data.whyScip,
        ])
        break

      default:
        throw new Error('Unknown form type: ' + formType)
    }

    return jsonResponse_({ ok: true })
  } catch (err) {
    return jsonResponse_({ ok: false, message: String(err.message || err) })
  }
}

function doGet() {
  return jsonResponse_({ ok: true, message: 'GravityTech form webhook is running.' })
}

/** Run once from Apps Script editor to create headers on each tab */
function setupSheetHeaders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()

  setHeaders_(ss, SHEETS.business_enquiry, [
    'Submitted At',
    'First Name',
    'Email',
    'Designation',
    'Phone',
    'Requirements',
  ])

  setHeaders_(ss, SHEETS.quote_request, [
    'Submitted At',
    'First Name',
    'Last Name',
    'Company Name',
    'Email',
    'Phone',
    'Designation',
    'Company Size',
    'Services',
    'Timeline',
    'Budget',
    'Project Description',
    'Current Challenges',
    'Existing System',
    'Preferred Start Date',
  ])

  setHeaders_(ss, SHEETS.job_application, [
    'Submitted At',
    'Full Name',
    'Email',
    'Phone',
    'City',
    'Role Applying',
    'Experience Level',
    'Current Company',
    'Current Designation',
    'Notice Period',
    'LinkedIn',
    'Portfolio',
    'GitHub',
    'Resume Link',
    'Why GravityTech',
  ])

  setHeaders_(ss, SHEETS.scip_application, [
    'Submitted At',
    'Full Name',
    'Email',
    'Phone',
    'City',
    'Track',
    'Qualification',
    'Graduation Year',
    'College',
    'Project Link',
    'Why SCIP',
  ])
}

function appendRow_(ss, sheetName, row) {
  var sheet = ss.getSheetByName(sheetName)
  if (!sheet) {
    throw new Error('Sheet not found: "' + sheetName + '". Create this tab in your spreadsheet.')
  }
  sheet.appendRow(row)
}

function setHeaders_(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName)
  if (!sheet) {
    sheet = ss.insertSheet(sheetName)
  }
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold')
  sheet.setFrozenRows(1)
}

function saveFileToDrive_(fileName, mimeType, base64Data) {
  if (!DRIVE_FOLDER_ID || DRIVE_FOLDER_ID === 'YOUR_DRIVE_FOLDER_ID_HERE') {
    return '(Drive folder not configured — set DRIVE_FOLDER_ID in Apps Script)'
  }

  var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID)
  var blob = Utilities.newBlob(Utilities.base64Decode(base64Data), mimeType, fileName)
  var file = folder.createFile(blob)
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW)
  return file.getUrl()
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}
