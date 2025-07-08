// script.js (konsep)
document.addEventListener('DOMContentLoaded', () => {
    const introMessage = document.getElementById('introMessage');
    const outroMessage = document.getElementById('outroMessage');
    const photoOutput = document.querySelector('.photo-output');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Mencegah autoplay issues, berikan kontrol manual atau instruksi
    // Untuk pengembangan, bisa dicoba langsung autoplay tapi perlu dihandle di production
    backgroundMusic.play().catch(e => console.log("Autoplay blocked:", e));

    const photos = [
        { src: 'photo1.jpg', caption: 'Your heart is my home.' },
        { src: 'photo2.jpg', caption: 'Every moment with you is a gift.' },
        { src: 'photo3.jpg', caption: 'Thank you for being my side for two amazing years!' }
        // Add more photos here
    ];

    let currentPhotoIndex = 0;

    const showIntro = () => {
        introMessage.style.opacity = 1;
        setTimeout(startPhotoSequence, 3000); // Wait 3 seconds
    };

    const displayNextPhoto = () => {
        if (currentPhotoIndex < photos.length) {
            const photoData = photos[currentPhotoIndex];
            const photoDiv = document.createElement('div');
            photoDiv.classList.add('polaroid-photo');
            photoDiv.innerHTML = `
                <img src="${photoData.src}" alt="Anniversary Photo">
                <p class="caption">${photoData.caption}</p>
            `;
            photoOutput.appendChild(photoDiv);

            // Animate photo in
            setTimeout(() => {
                photoDiv.style.top = '0'; // Move into view
                photoDiv.style.opacity = 1;
            }, 100); // Small delay to allow element to render before animation

            currentPhotoIndex++;
            setTimeout(displayNextPhoto, 4000); // Wait 4 seconds before next photo
        } else {
            // All photos displayed, show outro
            setTimeout(showOutro, 3000);
        }
    };

    const startPhotoSequence = () => {
        introMessage.style.opacity = 0; // Fade out intro
        setTimeout(() => {
            introMessage.style.display = 'none';
            displayNextPhoto();
        }, 1000); // Wait for fade out
    };

    const showOutro = () => {
        outroMessage.style.display = 'block';
        setTimeout(() => {
            outroMessage.style.opacity = 1;
        }, 100);
    };

    showIntro();
});