document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'none' || !navbar.style.display) ? 'block' : 'none';
});

const canvas = document.getElementById('canvas');
canvas.height = window.screen.height;
canvas.width = window.screen.width;

const columns = new Array(256).fill(1);
let character = 0;

function step() {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    columns.forEach((value, index) => {
        ctx.fillText(character, index * 10, value);
        character = character === 0 ? 1 : 0;
        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10;
    });
}

setInterval(step, 33);
