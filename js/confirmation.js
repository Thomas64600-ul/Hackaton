// Récupération des infos depuis le localStorage
// const inscriptionData = JSON.parse(localStorage.getItem('inscriptionData'))
const inscriptionData = {
    isOK: true,,
    nom: 'Toto',
    email: 'toto@gmail.com',
    nomTournoi: 'FIFA 2025'
}

// Récupération de l'élément d'affichage de l'erreur
const messageDiv = document.getElementById('message')

// Si le statut de l'inscription est OK
if (inscriptionData.isOK) {
    messageDiv.innerHTML = `
        <h2>Félicitation ! Votre inscription est confirmée.</h2>
        <p>Nom : ${inscriptionData.nom}</p>
        <p>Email : ${inscriptionData.email}</p>
        <p>Tournoi : ${inscriptionData.tournoi}</p>
    `
} else {
    messageDiv.innerHTML = `
        <h2>Désolé! Votre inscription n'est pas possible</h2>
        <p>Raison : ${inscriptionData.erreur}</p>
    `
}





// const inscriptionData = {
//     isOK: true,
//     nom: 
//     email:
//     nomTournoi:
// }
// localStorage.setItem('inscriptionData', JSON.stringify(inscriptionData))