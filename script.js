function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColors() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const randomColor = getRandomColor();
        item.style.backgroundColor = randomColor;
        item.textContent = randomColor;
    });
}

window.onload = setRandomColors;
