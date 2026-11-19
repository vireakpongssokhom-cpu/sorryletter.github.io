const reply = document.getElementById('reply');

// Page one: open the envelope, then show the main page
document.getElementById('open').addEventListener('click', e => {
  e.currentTarget.classList.add('opening');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(() => {
    document.getElementById('intro').hidden = true;
    document.getElementById('page').hidden = false;
    window.scrollTo(0, 0);
  }, still ? 0 : 700);
});

// Floating hearts
function hearts(n) {
  for (let i = 0; i < n; i++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = '♥';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (14 + Math.random() * 26) + 'px';
    h.style.animationDelay = (Math.random() * 1.2) + 's';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4800);
  }
}

document.getElementById('yes').addEventListener('click', () => {
  reply.textContent = 'Thank you. I’ll hold your hand and do better, starting right now. I love you.';
  hearts(28);
});

document.getElementById('wait').addEventListener('click', () => {
  reply.textContent = 'Of course. Take all the time you need. I’ll be here, and I’m not going anywhere.';
});