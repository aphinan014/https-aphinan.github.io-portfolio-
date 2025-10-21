// Theme toggle
const root = document.documentElement;
const themeKey = 'theme';
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme) root.setAttribute('data-theme', savedTheme);
themeBtn?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  if (next === 'dark') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', 'light');
  localStorage.setItem(themeKey, next);
});

// Language switch
const btnTH = document.getElementById('btnTH');
const btnEN = document.getElementById('btnEN');
const paneTH = document.getElementById('resumeTH');
const paneEN = document.getElementById('resumeEN');

function setLang(lang){
  const isTH = lang === 'TH';
  paneTH.classList.toggle('hidden', !isTH);
  paneEN.classList.toggle('hidden', isTH);
  btnTH.setAttribute('aria-pressed', String(isTH));
  btnEN.setAttribute('aria-pressed', String(!isTH));
  document.documentElement.setAttribute('lang', isTH ? 'th' : 'en');
}
btnTH?.addEventListener('click', () => setLang('TH'));
btnEN?.addEventListener('click', () => setLang('EN'));
setLang('TH');

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: .14 });
document.querySelectorAll('.reveal, .card').forEach(el => io.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();
