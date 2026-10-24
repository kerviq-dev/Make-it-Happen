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
  const lines = ["Hello! I'd like to enquire about planning a bespoke event with Make It Happen Events."]

  if (fields.name)      lines.push(`• Name: ${fields.name}`)
  if (fields.package)   lines.push(`• Package of Interest: ${fields.package}`)
  if (fields.eventType) lines.push(`• Event Type: ${fields.eventType}`)
  if (fields.date)      lines.push(`• Approximate Date: ${fields.date}`)
  if (fields.guests)    lines.push(`• Expected Guests: ${fields.guests}`)
  if (fields.style)     lines.push(`• Aesthetic Style: ${fields.style}`)
  if (fields.notes)     lines.push(`• Vision & Notes: ${fields.notes}`)

  lines.push('\nI look forward to discussing availability and next steps with your team.')

  const message = lines.join('\n')
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

/**
 * Simple WhatsApp link (no pre-filled message)
 */
export function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_PHONE}`
}
