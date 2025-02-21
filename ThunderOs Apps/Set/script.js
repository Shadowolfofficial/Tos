document.getElementById("galleryToggle").addEventListener("click", function() {
    const isEnabled = this.checked;
    localStorage.setItem('galleryEnabled', isEnabled);
    updateGalleryUI(isEnabled);
    alert('L\'état de la galerie secrète a été modifié.');
});

document.getElementById('setPassword').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password) {
        localStorage.setItem('galleryPassword', password);
        document.getElementById('password').value = '';
        document.getElementById('passwordSection').style.display = 'none'; // Cache le champ de mot de passe
        alert('Le mot de passe a été défini.');
    } else {
        alert('Veuillez entrer un mot de passe.');
    }
});

// Modification du bouton "Mot de passe oublié" en "Réinitialiser ThunderOs"
document.getElementById('resetPassword').addEventListener('click', function() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser ThunderOs ? Toutes les données du site seront entièrement supprimées.')) {
        // Supprimer toutes les données de localStorage
        localStorage.clear();
        alert('ThunderOs a été réinitialisé.');
    }
});

document.getElementById('accessGallery').addEventListener('click', function() {
    const password = prompt('Entrez le mot de passe pour accéder à la galerie secrète :');
    if (password === localStorage.getItem('galleryPassword')) {
        // Accéder à la galerie
        window.location.href = 'galerie.html';
    } else {
        alert('Mot de passe incorrect.');
    }
});

function updateGalleryUI(isEnabled) {
    document.getElementById('accessGallery').style.display = isEnabled ? 'block' : 'none';
    document.getElementById('passwordSection').style.display = isEnabled && !localStorage.getItem('galleryPassword') ? 'block' : 'none';
    document.getElementById('resetPassword').style.display = 'block'; // Assurez-vous que le bouton est toujours visible
}

window.addEventListener('load', function() {
    const isEnabled = localStorage.getItem('galleryEnabled') === 'true';
    document.getElementById('galleryToggle').checked = isEnabled;
    updateGalleryUI(isEnabled);
});
