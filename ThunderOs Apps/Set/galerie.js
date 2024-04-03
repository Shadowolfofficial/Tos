document.getElementById('upload').addEventListener('change', function(e) {
    const files = e.target.files;
    const gallery = document.getElementById('gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const media = document.createElement('img');
            media.src = e.target.result;
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const wrapper = document.createElement('div');
            wrapper.appendChild(checkbox);
            wrapper.appendChild(media);
            gallery.appendChild(wrapper);

            // Sauvegarder l'image dans localStorage avec un identifiant unique
            const base64String = e.target.result.replace('data:', '').replace(/^.+,/, '');
            const imageKey = `image${Date.now()}`; // Utiliser un timestamp pour générer un identifiant unique
            localStorage.setItem(imageKey, base64String);
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById('addToGallery').addEventListener('click', function() {
    document.getElementById('upload').click();
});

document.getElementById('deleteFromGallery').addEventListener('click', function() {
    const selectedImages = document.querySelectorAll('#gallery input[type="checkbox"]:checked');
    selectedImages.forEach(checkbox => {
        const img = checkbox.nextElementSibling;
        img.parentNode.removeChild(img);
        checkbox.parentNode.removeChild(checkbox);

        // Supprimer l'image de localStorage
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (localStorage.getItem(key) === img.src.replace('data:image/png;base64,', '')) {
                localStorage.removeItem(key);
            }
        });
    });
});

// Charger les images sauvegardées depuis localStorage lors du chargement de la page
window.addEventListener('load', function() {
    const gallery = document.getElementById('gallery');
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        const base64String = localStorage.getItem(key);
        if (base64String) {
            const media = document.createElement('img');
            media.src = `data:image/png;base64,${base64String}`;
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const wrapper = document.createElement('div');
            wrapper.appendChild(checkbox);
            wrapper.appendChild(media);
            gallery.appendChild(wrapper);
        }
    });
});

document.getElementById("cameraButton").addEventListener("click", function() {
    window.location.href = "cam/index.html"; // Remplacez par l'URL de la page.
});
