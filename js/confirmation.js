import "./dark-mode.js"  // Gestion mode sombre

// Récupération des infos depuis le localStorage
// const inscriptionData = JSON.parse(localStorage.getItem('inscriptionData'))
const inscriptionData = {
    isOK: true,
    erreur: 'Le tournoi est complet',
    nom: 'Toto',
    email: 'toto@gmail.com',
    nomTournoi: 'FIFA 2025'
}

// Récupération de l'élément d'affichage de l'erreur
const messageDiv = document.getElementById('message')

// Si le statut de l'inscription est OK
if (inscriptionData.isOK) {
    messageDiv.classList.add('success')
    messageDiv.innerHTML = `
        <h2>Félicitation ! Votre inscription est confirmée.</h2>
        <p><strong>Nom :</strong> ${inscriptionData.nom}</p>
        <p><strong>Email :</strong> ${inscriptionData.email}</p>
        <p><strong>Tournoi :</strong> ${inscriptionData.nomTournoi}</p>
        <a href="/index.html">Retour à l'accueil</a>
    `
} else {
    messageDiv.innerHTML = `
        <h2>Désolé! Votre inscription n'est pas possible</h2>
        <p><strong>Raison :</strong> ${inscriptionData.erreur}</p>
        <a href="/pages/inscription.html">Choisir un autre tournoi</a>
    `
}
