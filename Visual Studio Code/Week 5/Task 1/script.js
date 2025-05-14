// Handle button actions
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const bannerHeading = document.getElementById('banner-heading');
const bannerText = document.getElementById('banner-text');
const banner = document.getElementById('banner');

// "Yes, I am!" button logic
yesButton.addEventListener('click', () => {
    bannerHeading.innerHTML = 'First Lesson - Don\'t admit that';
    bannerText.innerHTML = 'But you did! So as a reward, your third year will now feature 30% extra dementor!';
    yesButton.style.display = 'none';
    noButton.innerHTML = 'Yay!';
});

// "Nope" button logic
noButton.addEventListener('click', () => {
    banner.style.display = 'none';
});
