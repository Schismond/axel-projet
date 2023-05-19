// Cache les éléments DOM
const pages = document.querySelectorAll('.page');
const precedentBtn = document.querySelectorAll('.precedentBtn');
const stepper = document.getElementsByClassName('stepper-item');

// Fonction pour mettre à jour la barre de progression et afficher/masquer les pages de formulaire
function updateProgressBar(currentIndex) {
  for (let i = 0; i < stepper.length; i++) {
    if (i < currentIndex) {
      stepper[i].classList.add('completed');
      stepper[i].classList.remove('active');
    } else if (i === currentIndex) {
      stepper[i].classList.add('active');
      stepper[i].classList.remove('completed');
    } else {
      stepper[i].classList.remove('active');
      stepper[i].classList.remove('completed');
    }
  }

  pages.forEach((page, index) => {
    if (index === currentIndex) {
      page.style.display = 'flex';
    } else {
      page.style.display = 'none';
    }
  });
}

// Événement soumission du premier formulaire
pages[0].addEventListener('submit', function (event) {
  event.preventDefault();

  const selectedOption = document.getElementById('selectOffre').value;
  console.log(selectedOption);

  updateProgressBar(1);
});

// Événement soumission du deuxième formulaire
pages[1].addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const familyName = document.getElementById('familyName').value;
  const birthdate = document.getElementById('birthdate').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const gender = document.getElementById('gender').value;

  console.log('Nom :', name);
  console.log('Prénom :', familyName);
  console.log('Date de naissance :', birthdate);
  console.log('Taille :', height);
  console.log('Poids :', weight);
  console.log('Sexe :', gender);

  updateProgressBar(2);
});

// Événement soumission du troisième formulaire
pages[2].addEventListener('submit', function (event) {
  event.preventDefault();

  const password = document.getElementById('password1').value;
  const passwordConfirmation = document.getElementById('password2').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const email = document.getElementById('email').value;

  console.log('Numéro :', phoneNumber);
  console.log('Email :', email);
  console.log('Mot de passe :', password);
  console.log('Confirmation du mot de passe :', passwordConfirmation);

  updateProgressBar(3);
});

// Événement soumission du quatrième formulaire
pages[3].addEventListener('submit', function (event) {
  event.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value;
  const cardName = document.getElementById('cardName').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  console.log('Numéro de carte :', cardNumber);
  console.log('Nom sur la carte :', cardName);
  console.log('Date d\'expiration :', expiryDate);
  console.log('CVV :', cvv);

  alert('Paiement effectué avec succès !');

  updateProgressBar(0);
});

// Événement clic sur le bouton précédent
precedentBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    updateProgressBar(index);
  });
});

// Fonction pour vérifier la correspondance entre le mot de passe et sa confirmation
function verifierCorrespondanceMotDePasse() {
  const password = document.getElementById('password1').value;
  const passwordConfirmation = document.getElementById('password2').value;

  if (password !== passwordConfirmation) {
    document.getElementById('password2').setCustomValidity('Les mots de passe ne correspondent pas.');
  } else {
    document.getElementById('password2').setCustomValidity('');
  }
}

// Exécute la fonction de vérification lorsque la valeur du mot de passe ou de la confirmation du mot de passe change
document.getElementById('password1').addEventListener('input', verifierCorrespondanceMotDePasse);
document.getElementById('password2').addEventListener('input', verifierCorrespondanceMotDePasse);

// Affiche la première page initialement
updateProgressBar(0);
