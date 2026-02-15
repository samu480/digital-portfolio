// Cursor-Trail
const cursor = document.createElement('div');
cursor.id = 'cursor';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
cursor.style.background = '#ff00ff';
cursor.style.position = 'fixed';
cursor.style.pointerEvents = 'none';
cursor.style.transform = 'translate(-50%, -50%)';
cursor.style.zIndex = '9999';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Scroll-Animation für Über mich
const aboutHome = document.querySelector('.about-home');

if(aboutHome){
  window.addEventListener('scroll', () => {
    const top = aboutHome.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      aboutHome.classList.add('visible');
    }
  });
}

// Projekt Modal & Filter (nur auf projects.html aktiv)
if(cards.length > 0 && modal){

if(cards.length > 0){
  cards.forEach(card => {
    card.addEventListener('click', () => {
      modalTitle.innerHTML = card.dataset.title;
      modalDesc.innerHTML = card.dataset.desc;
      modal.style.display = 'flex';
    });
  });
  
  modalClose.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if(e.target===modal) modal.style.display='none'; });

  const filterButtons = document.querySelectorAll('.filter-buttons button');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if(filter === 'all' || card.dataset.category === filter){
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
// Skills Animation beim Scroll
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  skillFills.forEach(fill => {
    const top = fill.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      fill.style.width = fill.dataset.percent;
    }
  });
});
// Kontaktformular (nur Frontend-Feedback)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  const formMessage = document.getElementById('formMessage');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = "Danke! Deine Nachricht wurde gesendet (nur Frontend-Demo).";
    contactForm.reset();
  });
}
// Tilt für Projektkarten
const tiltCards = document.querySelectorAll('.project-card.tilt');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX)/centerX;
    const deltaY = (y - centerY)/centerY;
    card.style.transform = `rotateY(${deltaX*10}deg) rotateX(${-deltaY*10}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
});
// Scroll Reveal für Projekte & Skills
const revealElements = document.querySelectorAll('.project-card, .skill');
window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      el.classList.add('visible');
    }
  });
});
// Neon Intro Buchstaben-Animation
const neonIntro = document.querySelector('.neon-intro');
if(neonIntro){
  const text = neonIntro.textContent;
  neonIntro.textContent = '';
  text.split('').forEach((char,i)=>{
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${i*0.08}s`;
    neonIntro.appendChild(span);
  });
}
tiltCards.forEach(card => {
  card.addEventListener('mouseenter', e=>{
    const glow = document.createElement('div');
    glow.className = 'hover-glow';
    card.appendChild(glow);
    setTimeout(()=>{ if(glow.parentElement) glow.parentElement.removeChild(glow); },500);
  });
});
