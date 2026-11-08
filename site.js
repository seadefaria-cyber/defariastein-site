const track = document.querySelector('.track');
const button = document.querySelector('.motion');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

[...track.children].forEach((item) => {
  const copy = item.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  copy.querySelector('img').alt = '';
  track.append(copy);
});

let paused = false;
function sync() {
  track.classList.toggle('paused', paused);
  button.disabled = reduced.matches;
  button.textContent = reduced.matches ? 'Motion off' : paused ? 'Play' : 'Pause';
  button.setAttribute('aria-pressed', String(paused));
}
button.addEventListener('click', () => { paused = !paused; sync(); });
reduced.addEventListener('change', sync);
sync();
