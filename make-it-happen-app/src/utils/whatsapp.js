/**
 * WhatsApp utility — isolated so it can be updated in one place.
 * Phone: +44 7301 553790
 */
const WHATSAPP_PHONE = '447301553790'

/**
 * Build a properly-encoded WhatsApp URL.
 * @param {Object} fields - optional form field values to include in the message
 * @param {string} [fields.name]
 * @param {string} [fields.eventType]
 * @param {string} [fields.date]
 * @param {string} [fields.guests]
 * @param {string} [fields.notes]
 * @returns {string} WhatsApp URL
 */
export function buildWhatsAppUrl(fields = {}) {
  const lines = ["Hello! I'd like to enquire about planning an event with Make It Happen Events."]

  if (fields.name)      lines.push(`Name: ${fields.name}`)
  if (fields.eventType) lines.push(`Event type: ${fields.eventType}`)
  if (fields.date)      lines.push(`Preferred date: ${fields.date}`)
  if (fields.guests)    lines.push(`Number of guests: ${fields.guests}`)
  if (fields.notes)     lines.push(`Additional notes: ${fields.notes}`)

  lines.push('\nI look forward to hearing from you.')

  const message = lines.join('\n')
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

/**
 * Simple WhatsApp link (no pre-filled message)
 */
export function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_PHONE}`
}
