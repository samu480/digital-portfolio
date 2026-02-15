// === Partikel-Hintergrund ===
const canvas = document.createElement('canvas');
canvas.id = 'particleCanvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '0';
canvas.style.pointerEvents = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let particlesArray;

function initParticles(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];
  const colors = ['#ff00ff','#00f0ff','#ffffff'];
  for(let i=0;i<150;i++){
    particlesArray.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      size: Math.random()*3 +1,
      speedX: (Math.random()-0.5)*1.5,
      speedY: (Math.random()-0.5)*1.5,
      color: colors[Math.floor(Math.random()*colors.length)]
    });
  }
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    // Bounce edges
    if(p.x < 0 || p.x>canvas.width) p.speedX *= -1;
    if(p.y < 0 || p.y>canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', initParticles);

initParticles();
animateParticles();
