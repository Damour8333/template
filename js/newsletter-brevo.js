// js/newsletter-brevo.js - Formulaire newsletter Brevo avec UX améliorée

// Validation email
function validateEmail(email) {
  if (!email) return false;
  if (/[<>\"'&]/.test(email)) return false;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regexEmail.test(email);
}

// Afficher message de confirmation (affiche le div existant)
function showConfirmation() {
  const form = document.getElementById('sib-form');
  const successDiv = document.getElementById('success-message');
  const emailInput = document.getElementById('EMAIL');
  
  // 1. Cacher le formulaire (l'email disparaît)
  form.style.display = 'none';
  
  // 2. Vider l'email (sécurité)
  emailInput.value = '';
  
  // 3. Afficher le message de succès existant dans le HTML
  successDiv.style.display = 'block';
  
  // 4. Après 3 secondes, réafficher le formulaire propre
  setTimeout(() => {
    successDiv.style.display = 'none';
    form.style.display = 'block';
    // La case à cocher est décochée
    document.getElementById('OPT_IN').checked = false;
  }, 3000);
}

// Afficher message d'erreur (affiche le div existant)
function showError(message) {
  const errorDiv = document.getElementById('error-message');
  const errorText = errorDiv.querySelector('.notification');
  
  // On garde le même style mais on change le texte si besoin
  errorText.textContent = '⚠️ ' + message;
  errorDiv.style.display = 'block';
  
  setTimeout(() => {
    errorDiv.style.display = 'none';
  }, 3000);
}

// Gestionnaire de soumission
async function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const email = document.getElementById('EMAIL').value.trim();
  const optIn = document.getElementById('OPT_IN').checked;
  const submitButton = document.getElementById('submit-button');
  const submitText = document.getElementById('submit-text');
  const submitIcon = document.getElementById('submit-icon');
  
  // Validation côté client
  if (!validateEmail(email)) {
    showError('Veuillez entrer une adresse email valide.');
    return;
  }
  
  if (!optIn) {
    showError('Vous devez accepter les conditions pour vous inscrire.');
    return;
  }
  
  // Désactiver le bouton pendant l'envoi
  submitButton.disabled = true;
  submitText.textContent = 'Inscription...';
  submitIcon.style.display = 'inline-block';
  
  try {
    // Récupérer les données du formulaire
    const formData = new FormData(form);
    
    // Envoyer à Brevo
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Important pour Brevo
    });
    
    // 🎉 SUCCÈS ! L'email "part" et le message apparaît
    showConfirmation();
    
  } catch (error) {
    console.error('Erreur:', error);
    showError('Une erreur est survenue. Veuillez réessayer plus tard.');
    
    // Réactiver le bouton en cas d'erreur seulement
    submitButton.disabled = false;
    submitText.textContent = "S'INSCRIRE";
    submitIcon.style.display = 'none';
  }
}

// Ajouter un peu de style CSS supplémentaire
function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Style pour la case à cocher personnalisée */
    .checkbox {
      display: flex !important;
      align-items: flex-start !important;
      text-align: left !important;
      line-height: 1.4 !important;
    }
    
    .checkbox input[type="checkbox"] {
      margin-top: 3px;
      flex-shrink: 0;
    }
    
    .checkbox span {
      display: inline-block;
      margin-left: 8px;
    }
    
    /* Animation pour le bouton */
    #submit-button {
      transition: all 0.3s ease;
    }
    
    #submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(62,72,87,0.3);
    }
    
    #submit-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    /* Style pour les messages */
    .notification {
      border-radius: 8px;
      margin-bottom: 20px;
      animation: slideDown 0.3s ease;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Animation de disparition du formulaire */
    #sib-form {
      transition: opacity 0.3s ease;
    }
    
    #sib-form[style*="display: none"] {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
}

// Initialiser le formulaire
function initNewsletter() {
  // Ajouter les styles personnalisés
  addCustomStyles();
  
  // Récupérer les éléments
  const form = document.getElementById('sib-form');
  const successDiv = document.getElementById('success-message');
  const errorDiv = document.getElementById('error-message');
  
  // Cacher les messages au départ
  successDiv.style.display = 'none';
  errorDiv.style.display = 'none';
  
  // Ajouter l'écouteur d'événement
  form.addEventListener('submit', handleSubmit);
}

// Démarrer quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initNewsletter);