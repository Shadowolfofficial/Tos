const video = document.getElementById('video');
const captureButton = document.getElementById('captureButton');
const gallery = document.getElementById('gallery');
const toggleGallery = document.getElementById('toggleGallery');
const helpButton = document.getElementById('helpButton');

const constraints = {
    video: {
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 }
    }
};

// Demande d'autorisation de l'utilisateur pour accéder à la webcam
navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Erreur lors de l\'accès à la webcam:', error);
    });

captureButton.addEventListener('click', () => {
    takePhoto();
    animateCaptureButton();
});

toggleGallery.addEventListener('click', () => {
    const currentVisibility = gallery.style.visibility;
    gallery.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
    toggleGallery.textContent = currentVisibility === 'hidden' ? 'Masquer les photos' : 'Voir les photos';
});

helpButton.addEventListener('click', () => {
    alert('Pour utiliser ce site, cliquez sur le bouton de capture pour prendre une photo. Utilisez le bouton "Voir les photos" pour afficher ou masquer l\'aperçu des photos capturées. Pour télécharger une photo, cliquez dessus.');
});

function takePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/png');
    const img = document.createElement('img');
    img.src = dataUrl;
    img.onclick = () => {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'capture.png';
        a.click();
    };
    gallery.appendChild(img);
}

function animateCaptureButton() {
    captureButton.classList.add('taken'); // Ajoute la classe pour l'animation
    setTimeout(() => {
        captureButton.classList.remove('taken'); // Retire la classe après l'animation
    }, 200); // Durée de l'animation
}
