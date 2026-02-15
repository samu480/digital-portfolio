// === 3D Partikel Sterne Hintergrund ===
const starCanvas = document.createElement('canvas');
starCanvas.id = 'starCanvas';
starCanvas.style.position = 'fixed';
starCanvas.style.top = '0';
starCanvas.style.left = '0';
starCanvas.style.width = '100%';
starCanvas.style.height = '100%';
starCanvas.style.zIndex = '0';
starCanvas.style.pointerEvents = 'none';
document.body.appendChild(starCanvas);

const starCtx = starCanvas.getContext('2d');
let starsArray;

function initStars(){
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
  starsArray = [];
  const colors = ['#ff00ff','#00f0ff','#ffffff'];
  for(let i=0;i<200;i++){
    starsArray.push({
      x: Math.random()*starCanvas.width,
      y: Math.random()*starCanvas.height,
      z: Math.random()*starCanvas.width,
      size: Math.random()*2 +1,
      color: colors[Math.floor(Math.random()*colors.length)]
    });
  }
}

function animateStars(){
  starCtx.clearRect(0,0,starCanvas.width,starCanvas.height);
  starsArray.forEach(star=>{
    star.z -= 2;
    if(star.z <= 0) star.z = starCanvas.width;
    const sx = (star.x - starCanvas.width/2) * (starCanvas.width/star.z) + starCanvas.width/2;
    const sy = (star.y - starCanvas.height/2) * (starCanvas.width/star.z) + starCanvas.height/2;
    const radius = star.size * (starCanvas.width/star.z);
    starCtx.beginPath();
    starCtx.arc(sx, sy, radius, 0, Math.PI*2);
    starCtx.fillStyle = star.color;
    starCtx.fill();
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', initStars);
initStars();
animateStars();
