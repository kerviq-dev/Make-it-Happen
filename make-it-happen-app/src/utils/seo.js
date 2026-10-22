import { useEffect } from 'react'

/**
 * Sets page-level SEO metadata: title, description, og tags.
 * Call at the top of each page component.
 *
 * @param {Object} meta
 * @param {string} meta.title        - Full page title
 * @param {string} meta.description  - Meta description
 * @param {string} [meta.ogImage]    - Optional OG image URL
 */
export function useSEO({ title, description, ogImage }) {
  useEffect(() => {
    // Title
    document.title = title

    // Meta description
    setMeta('name', 'description', description)

    // Open Graph
    setMeta('property', 'og:title',       title)
    setMeta('property', 'og:description', description)
    if (ogImage) setMeta('property', 'og:image', ogImage)
  }, [title, description, ogImage])
}

function setMeta(attrName, attrValue, content) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Broken image fallback handler.
 * Usage: <img onError={handleImgError} ... />
 */
export function handleImgError(e) {
  e.target.style.opacity = '0.2'
  e.target.alt = 'Image unavailable'
}
