const heart = document.getElementById('heart');
const sorryImage = document.getElementById('sorry-image');
const imageContainer = document.getElementById('image-container');

let heartSize = 1;
let clickedTimes = 0;

heart.addEventListener('click', () => {
    clickedTimes++;
    
    // Increase heart size on click
    heartSize += 0.3;
    heart.style.transform = `scale(${heartSize}) rotate(45deg)`;
    
    // After clicking 3 times, burst the heart and show the image
    if (clickedTimes === 4) {
        heart.style.animation = 'burst 0.5s forwards';
        setTimeout(() => {
            imageContainer.style.opacity = 1;
            imageContainer.style.animation = 'uncrumple 1s forwards';
        }, 500); // Show the sorry image after heart bursts
    }
});
