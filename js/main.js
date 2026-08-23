// Chucko Golf — shared interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Hand toggle (Left / Right)
  document.querySelectorAll('.toggle-row').forEach((row) => {
    row.addEventListener('click', (e) => {
      const btn = e.target.closest('.toggle-btn');
      if (!btn) return;
      row.querySelectorAll('.toggle-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Size selection
  document.querySelectorAll('.size-row').forEach((row) => {
    row.addEventListener('click', (e) => {
      const btn = e.target.closest('.size-btn');
      if (!btn || btn.disabled) return;
      row.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Quantity stepper
  document.querySelectorAll('.qty-stepper').forEach((stepper) => {
    const input = stepper.querySelector('input');
    const dec = stepper.querySelector('.qty-dec');
    const inc = stepper.querySelector('.qty-inc');
    const clamp = (v) => Math.min(10, Math.max(1, v));

    dec?.addEventListener('click', () => {
      input.value = clamp((parseInt(input.value, 10) || 1) - 1);
    });
    inc?.addEventListener('click', () => {
      input.value = clamp((parseInt(input.value, 10) || 1) + 1);
    });
    input?.addEventListener('change', () => {
      input.value = clamp(parseInt(input.value, 10) || 1);
    });
  });

  // Ball marker add-on (adjusts displayed price)
  const ballMarkerToggle = document.getElementById('ball-marker-toggle');
  const priceNow = document.querySelector('.price-now');
  const basePrice = 20;
  ballMarkerToggle?.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn || !priceNow) return;
    const delta = parseInt(btn.dataset.priceDelta, 10) || 0;
    priceNow.textContent = `$${(basePrice + delta).toFixed(2)}`;
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.hidden = false;
    contactForm.reset();
  });

  // Gallery thumbnail swap (placeholder-safe: swaps label text only)
  const mainPlate = document.querySelector('.gallery-main .plate-label');
  document.querySelectorAll('.gallery-thumbs .plate').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      if (!mainPlate) return;
      const label = thumb.querySelector('.plate-label');
      if (label) mainPlate.textContent = label.textContent;
    });
  });
});
