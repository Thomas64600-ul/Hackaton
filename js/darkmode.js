function applyCurrentTheme() {
    // Récupère le thème courant depuis le localstorage, light par défaut
    const currentTheme = localStorage.getItem('theme') || 'light'

    // Appliquer le theme et change l'icône du bouton
    const themeBtn = document.getElementById('themeBtn')
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark')
        themeBtn.innerText = '☀️'
    } else {
        document.documentElement.classList.remove('dark')
        themeBtn.innerText = '🌙'
    }
}


function switchMode() {
    // Switch l'état du mode et stocke le résultat dans la variable
    const isDark = document.documentElement.classList.toggle('dark')

    // Enregistre le theme dans le localStorage, Si dark est vrai, stocke dark sinon light
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    // Change l'icône du bouton, Si dark est vrai, applique le soleil sinon la lune
    this.innerText = isDark ? '☀️' : '🌙'
}

export {applyCurrentTheme, switchMode}