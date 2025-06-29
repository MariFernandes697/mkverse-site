const canvas = document.getElementById('estrelas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



const estrelas = [];
const numEstrelas = 200;

for (let i = 0; i < numEstrelas; i++) {
    estrelas.push({
        x: Math.random() * canvas.width, //criar posições aleatórias
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5, //criar tamanhos aleatórios
        dx: (Math.random() - 0.5) * 0.5, //criar movimentos  aleatórios
        dy: (Math.random() - 0.5) * 0.5,
    });
}

function desenharEstrelas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpa o canvas
    ctx.fillStyle = 'white';
    estrelas.forEach(estrela => {
        ctx.beginPath();
        ctx.arc(estrela.x, estrela.y, estrela.radius, 0, Math.PI * 2); // desenha a forma
        ctx.fill(); //pinta a estrela

        estrela.x += estrela.dx;
        estrela.y += estrela.dy;

        if (estrela.x < 0 || estrela.x > canvas.width)
            estrela.dx *= -1;
        if(estrela.y < 0 || estrela.y > canvas.height)
            estrela.dy *= -1;
    });
    requestAnimationFrame(desenharEstrelas);
}

desenharEstrelas();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



});