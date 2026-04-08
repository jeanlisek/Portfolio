/* ============================================
   JOLIMENT.FR — supabase-forms.js
   ============================================ */

const SUPABASE_URL = 'https://wpfsrkzhakyumepusmke.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZnNya3poYWt5dW1lcHVzbWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NjExNDAsImV4cCI6MjA5MDEzNzE0MH0.yvX67uCTorUwttc-OQ9LEcBouK8zsOL0A_DfazpXhow'

const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ---- Contact form ----
const contactForm = document.getElementById('contactForm')
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = contactForm.querySelector('[type="submit"]')
    const original = btn.textContent
    btn.textContent = 'Envoi en cours...'
    btn.disabled = true

    const { error } = await db.from('contacts').insert({
      prenom: contactForm.prenom.value.trim(),
      email: contactForm.email.value.trim(),
      sujet: contactForm.sujet.value,
      message: contactForm.message.value.trim()
    })

    if (error) {
      btn.textContent = 'Erreur — réessaye'
      btn.disabled = false
      setTimeout(() => { btn.textContent = original }, 3000)
    } else {
      contactForm.reset()
      btn.textContent = 'Message envoyé ✓'
      btn.style.background = 'var(--accent-dark)'
    }
  })
}

// ---- Collab form ----
const collabForm = document.getElementById('collabForm')
if (collabForm) {
  collabForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = collabForm.querySelector('[type="submit"]')
    const original = btn.textContent
    btn.textContent = 'Envoi en cours...'
    btn.disabled = true

    const { error } = await db.from('collab_submissions').insert({
      prenom: collabForm.prenom.value.trim(),
      email: collabForm.email.value.trim(),
      nom_projet: collabForm.nom_projet.value.trim(),
      type_projet: collabForm.type_projet.value,
      description: collabForm.description.value.trim(),
      profils: collabForm.profils.value.trim()
    })

    if (error) {
      btn.textContent = 'Erreur — réessaye'
      btn.disabled = false
      setTimeout(() => { btn.textContent = original }, 3000)
    } else {
      collabForm.reset()
      btn.textContent = 'Proposition envoyée ✓'
      btn.style.background = 'var(--accent-dark)'
    }
  })
}
