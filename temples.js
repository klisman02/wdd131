// Atualiza o ano atual no rodapé
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Atualiza data da última modificação
const lastModifiedP = document.getElementById('lastModified');
if (lastModifiedP) {
    const lastMod = new Date(document.lastModified);
    lastModifiedP.textContent = `Last Modification: ${lastMod.toLocaleString()}`;
}

// Add event listener for the hamburger button
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('primary-navigation');

hamburgerBtn.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    if (isActive) {
    hamburgerBtn.textContent = '✕';
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    } else {
    hamburgerBtn.textContent = '☰';
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}
});
