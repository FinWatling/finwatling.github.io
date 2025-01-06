const img = document.getElementById('bounce');

let x = 100;
let y = 100;
let speedX = 2;
let speedY = 2;

const maxWidth = window.innerWidth - img.width;
const maxHeight = window.innerHeight - img.height;

function bounceImage() {
    x += speedX;
    y += speedY;

    if (x <= 0 || x >= maxWidth) {
        speedX = -speedX;
    }

    if (y <= 0 || y >= maxHeight) {
        speedY = -speedY;
    }

    img.style.left = x + 'px';
    img.style.top = y + 'px';
    
    requestAnimationFrame(bounceImage);
}

bounceImage();
