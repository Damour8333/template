// js/newsletter.js - Formulaire newsletter avec sécurité

// Stockage temporaire des emails inscrits
const emailsInscrits = [];

// Validation email
function validateEmail(email) {
  // Vérification vide
  if (!email) {
    return { valid: false, message: 'Veuillez entrer une adresse email.' };
  }
  
  // Protection injection : caractères interdits
  const caracteresInterdits = /[<>\"'&]/;
  if (caracteresInterdits.test(email)) {
    return { valid: false, message: 'Caractères non autorisés détectés.' };
  }
  
  // Validation format email
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(email)) {
    return { valid: false, message: 'Format email invalide. Exemple : nom@email.com' };
  }
  
  // Vérification doublon
  if (emailsInscrits.includes(email)) {
    return { valid: false, message: 'Cet email est déjà inscrit.' };
  }
  
  // Vérification domaine jetable
  const domainesJetables = ['temp-mail.org', 'yopmail.com', 'mailinator.com', '10minutemail.com'];
  const domaine = email.split('@')[1];
  if (domainesJetables.includes(domaine)) {
    return { valid: false, message: 'Les emails temporaires ne sont pas acceptés.' };
  }
  
  return { valid: true, message: '' };
}

// Afficher message d'erreur
function showError(message) {
  const errorDiv = document.getElementById('newsletter-error');
  errorDiv.textContent = '⚠️ ' + message;
  errorDiv.style.display = 'block';
  
  setTimeout(() => {
    errorDiv.style.display = 'none';
  }, 3000);
}

// Afficher message de succès
function showSuccess() {
  const form = document.getElementById('newsletter-form');
  const successDiv = document.getElementById('newsletter-success');
  
  form.style.display = 'none';
  successDiv.style.display = 'block';
  
  // Réinitialiser après 3 secondes
  setTimeout(() => {
    form.style.display = 'flex';
    successDiv.style.display = 'none';
    document.getElementById('newsletter-email').value = '';
  }, 3000);
}

// Gestionnaire de soumission
function handleSubmit(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById('newsletter-email');
  const email = emailInput.value.trim().toLowerCase();
  
  // Validation
  const validation = validateEmail(email);
  
  if (!validation.valid) {
    showError(validation.message);
    return;
  }
  
  // ✅ Succès : enregistrer
  emailsInscrits.push(email);
  console.log('Email inscrit :', email);
  console.log('Liste complète :', emailsInscrits);
  
  showSuccess();
}

// Initialiser le formulaire
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  
  // Cacher les messages au départ
  document.getElementById('newsletter-success').style.display = 'none';
  document.getElementById('newsletter-error').style.display = 'none';
  
  // Ajouter l'écouteur d'événement
  form.addEventListener('submit', handleSubmit);
}

// Démarrer quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initNewsletter);