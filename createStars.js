const canvas = document.getElementById('canvas-ele1');
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// draw circle


function createStars() {
    stars = [];
    const canvasize = canvas.width * canvas.height;
    const starsFraction = canvasize / 2000;
    for (let i = 0; i < starsFraction; i++) {
        stars.push({
            x: random(0, canvas.width),
            y: random(0, canvas.height),
            alpha: random(0.5, 1),
            size: random(1, 4),
            speed: random(0.5, 3),
            direction: Math.random() * 2 * Math.PI * 1000
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y += star.speed * Math.sin(star.direction);
        if (star.y > canvas.height) {
            star.y = 0;
        }
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = star.alpha;
        ctx.fillRect(star.x, star.y, star.size, star.size);
    }
}



window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars();
});


function animate() {
    drawStars();
    requestAnimationFrame(animate);
}

createStars();
animate();
