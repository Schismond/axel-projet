const firstPage = document.getElementById("firstPage"); //première page
const secondPage = document.getElementById("secondPage"); //deuxième page
const thirdPage = document.getElementById("thirdPage"); //troisième page
const fourthPage = document.getElementById("fourthPage"); //quatreieme page

const stepper = document.getElementsByClassName("stepper-item"); //la barre de progression
const precedent1 = document.getElementById("precedent1"); // 1er button precedent
const precedent2 = document.getElementById("precedent2"); // 2eme button precedent
const precedent3 = document.getElementById("precedent3"); // 3eme button precedent

firstPage.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  const selectedOption = document.getElementById("selectOffre").value;
  console.log(selectedOption);

  firstPage.style.display = "none"; // Masqué le premier formulaire
  secondPage.style.display = "flex"; // Affiche le deuxième formulaire

  stepper[0].classList.remove("active"); // supprime la classe active pour le premier formulaire
  stepper[0].classList.add("completed"); // donner la classe finie pour le premier formulaire
  stepper[1].classList.add("active"); // donner la classe active pour le deuxième formulaire
});

secondPage.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupère les valeurs des champs de texte du deuxième formulaire
  const name = document.getElementById("name").value;
  const familyName = document.getElementById("familyName").value;
  const birthdate = document.getElementById("birthdate").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const gender = document.getElementById("gender").value;

  //afficher les valeurs des champs de texte du deuxième formulaire
  console.log("Nom :", name);
  console.log("Prénom :", familyName);
  console.log("Date de naissance :", birthdate);
  console.log("Taille :", height);
  console.log("Poids :", weight);
  console.log("Sexe :", gender);

  secondPage.style.display = "none"; // Masque le deuxième formulaire
  thirdPage.style.display = "flex"; // Affiche le troisième formulaire

  stepper[1].classList.remove("active");
  stepper[1].classList.add("completed");
  stepper[2].classList.add("active");
});



























// thirdPage.addEventListener("submit", function (event) {
//   event.preventDefault(); // Empêche l'envoi du formulaire

//   // Récupère les valeurs des champs de texte du formulaire de securité
//   const password = document.getElementById("password1").value;
//   const passwordConfirmation = document.getElementById("password2").value;
//   const phoneNumber = document.getElementById("phoneNumber").value;
//   const email = document.getElementById("email").value;

//   //afficher les les valeurs des champs
//   console.log("Numéro :", phoneNumber);
//   console.log("email :", email);
//   console.log("mot de passe", password);
//   console.log("mot de passe confirmation :", passwordConfirmation);

//   //avancer a la quatrieme page
//   thirdPage.style.display = "none";
//   fourthPage.style.display = "flex";

//   //rénitialliser progress bar
//   stepper[2].classList.remove("active");
//   stepper[2].classList.add("completed");
//   stepper[3].classList.add("active");
// });

thirdPage.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupère les valeurs des champs de texte du formulaire de sécurité
  const password = document.getElementById("password1").value;
  const passwordConfirmation = document.getElementById("password2").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;

  // Affiche les valeurs des champs
  console.log("Numéro :", phoneNumber);
  console.log("email :", email);
  console.log("mot de passe :", password);
  console.log("mot de passe confirmation :", passwordConfirmation);

  // Avancer à la quatrième page
  thirdPage.style.display = "none";
  fourthPage.style.display = "flex";

  // Réinitialiser la barre de progression
  stepper[2].classList.remove("active");
  stepper[2].classList.add("completed");
  stepper[3].classList.add("active");
});



fourthPage.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupère les valeurs des champs de texte du formulaire de paiement
  const cardNumber = document.getElementById("cardNumber").value;
  const cardName = document.getElementById("cardName").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;

  console.log("Numéro de carte :", cardNumber);
  console.log("Nom sur la carte :", cardName);
  console.log("Date d'expiration :", expiryDate);
  console.log("CVV :", cvv);

  alert("Paiement effectué avec succès !");

  //retourner a la premiere page
  fourthPage.style.display = "none";
  firstPage.style.display = "flex";

  //rénitialliser progress bar
  stepper[0].classList.add("active");
  stepper[0].classList.remove("completed");
  stepper[1].classList.remove("active");
  stepper[1].classList.remove("completed");
  stepper[2].classList.remove("completed");
  stepper[2].classList.remove("active");
  stepper[3].classList.remove("active");
  stepper[3].classList.remove("completed");

});

//premier button precedent
precedent1.addEventListener("click", () => {
  stepper[0].classList.add("active");
  stepper[0].classList.remove("completed");
  stepper[1].classList.remove("active");
  secondPage.style.display = "none";
  firstPage.style.display = "flex";
});

//deuxieme button precedent
precedent2.addEventListener("click", () => {
  stepper[1].classList.add("active");
  stepper[1].classList.remove("completed");
  stepper[2].classList.remove("active");
  thirdPage.style.display = "none";
  secondPage.style.display = "flex";
});

//troisieme button precedent
precedent3.addEventListener("click", () => {
  stepper[2].classList.add("active");
  stepper[2].classList.remove("completed");
  stepper[3].classList.remove("active");
  fourthPage.style.display = "none";
  thirdPage.style.display = "flex";
});


//une fonction pour comparer si le mot de passe et sa confirmation
function verifierCorrespondanceMotDePasse() {
  const password = document.getElementById("password1").value;
  const passwordConfirmation = document.getElementById("password2").value;

  if (password !== passwordConfirmation) {
    document.getElementById("password2").setCustomValidity("Les mots de passe ne correspondent pas.");
  } else {
    document.getElementById("password2").setCustomValidity("");
  }
}

// Exécuter la fonction de vérification à chaque fois que la valeur du mot de passe ou de la confirmation du mot de passe change
document.getElementById("password1").addEventListener("input", verifierCorrespondanceMotDePasse);
document.getElementById("password2").addEventListener("input", verifierCorrespondanceMotDePasse);


const birthdateInput = document.getElementById("birthdate");
//cette fonction ajoute une contrainte sur l'age dans cette exemple le form va pas accepter une personne -16 ans
birthdateInput.addEventListener("input", function () {
  const minimumAge = 16;
  const selectedDate = new Date(this.value);
  const currentDate = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - minimumAge); // Calculate the minimum date
  // Compare the selected date with the minimum date
  if (selectedDate > minDate) {
    this.setCustomValidity(`You must be at least ${minimumAge} years old.`);
  } else {
    this.setCustomValidity("");
  }
});