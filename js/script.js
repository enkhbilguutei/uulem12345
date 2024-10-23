const heart = document.getElementById('heart');
const numberOfFlowers = 40;

function createHeart() {
    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('img'); // Create an img element
        flower.className = 'flower'; // This will apply the CSS styles
        flower.src = 'flower.png'; // Set the image source
        flower.alt = 'Flower'; // Add an alt text for accessibility

        // Calculate position on heart shape
        const angle = (i / numberOfFlowers) * 2 * Math.PI;
        const heartX = 16 * Math.pow(Math.sin(angle), 3);
        const heartY = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

        // Scale and position the flowers
        const scale = 12; // Adjusted scale for heart size (lower value for smaller heart)
        const offsetX = 200; // Center X offset
        const offsetY = 200; // Center Y offset

        flower.style.left = `${heartX * scale + offsetX}px`;
        flower.style.top = `${heartY * scale + offsetY}px`;
        
        // Add random animation delay
        flower.style.animationDelay = `${Math.random() * 1.1}s`;
        
        heart.appendChild(flower);
    }
}

createHeart();

// Add click interaction
document.querySelectorAll('.flower').forEach(flower => {
    flower.addEventListener('click', () => {
        flower.style.transform = 'scale(1.5)';
        setTimeout(() => {
            flower.style.transform = 'scale(1)';
        }, 100);
    });
});
