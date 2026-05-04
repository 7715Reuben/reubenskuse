const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const root = document.documentElement;
const onScroll = () => {
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(window.scrollY / maxScroll, 1);

  const topL = 68 - Math.round(progress * 56);
  const midL = 60 - Math.round(progress * 44);
  root.style.setProperty('--bg-top', `hsl(191 76% ${topL}%)`);
  root.style.setProperty('--bg-mid', `hsl(213 88% ${midL}%)`);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
document.getElementById('year').textContent = new Date().getFullYear();
