const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(webhookUrl?.trim())
}

export function getGoogleSheetsWebhookUrl(): string {
  if (!webhookUrl?.trim()) {
    throw new Error(
      'Form storage is not configured. Set VITE_GOOGLE_SHEETS_URL to your Google Apps Script web app URL.'
    )
  }
  return webhookUrl.trim()
}

export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const base64 = result.split(',')[1]
      if (!base64) {
        reject(new Error('Failed to read file'))
        return
      }
      resolve(base64)
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

export type FormType =
  | 'business_enquiry'
  | 'quote_request'
  | 'job_application'
  | 'scip_application'

export interface SheetFilePayload {
  name: string
  mimeType: string
  base64: string
}

export interface SheetSubmitPayload {
  formType: FormType
  data: Record<string, string | number | boolean | null | string[]>
  file?: SheetFilePayload
}

export type SheetSubmitResult = { ok: true } | { ok: false; message: string }

export async function postToGoogleSheet(
  payload: SheetSubmitPayload
): Promise<SheetSubmitResult> {
  try {
    const url = getGoogleSheetsWebhookUrl()
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })

    const text = await response.text()
    let parsed: { ok?: boolean; message?: string } = {}

    try {
      parsed = JSON.parse(text) as { ok?: boolean; message?: string }
    } catch {
      if (!response.ok) {
        return { ok: false, message: 'Submission failed. Please try again.' }
      }
    }

    if (parsed.ok === false) {
      return { ok: false, message: parsed.message || 'Submission failed.' }
    }

    if (!response.ok) {
      return { ok: false, message: 'Submission failed. Please try again.' }
    }

    return { ok: true }
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : 'Network error. Please try again.',
    }
  }
}
