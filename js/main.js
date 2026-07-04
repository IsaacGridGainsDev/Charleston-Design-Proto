/* WoodAccent Atelier — shared interactions */

/* Option chips (finish / upholstery selectors) act as radio groups */
document.querySelectorAll('[role="radiogroup"]').forEach(function (group) {
  group.querySelectorAll('.option-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      group.querySelectorAll('.option-chip').forEach(function (c) {
        c.classList.remove('is-selected');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('is-selected');
      chip.setAttribute('aria-pressed', 'true');
    });
  });
});

/* Product quick-view modal (Figma: web-product-modal 470:4022) */
(function () {
  var triggers = document.querySelectorAll('[data-modal-product]');
  if (!triggers.length) return;

  var backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML =
    '<div class="product-modal" role="dialog" aria-modal="true" aria-label="Oak Lounge Chair quick view">' +
    '  <div class="product-modal__photo">' +
    '    <img src="assets/img/hero-chair.svg" alt="Oak lounge chair">' +
    '    <button class="product-modal__close" aria-label="Close">&times;</button>' +
    '  </div>' +
    '  <div class="product-modal__details">' +
    '    <div>' +
    '      <div class="eyebrow">Seating &middot; Oak Collection</div>' +
    '      <div style="font-family:var(--font-serif);font-size:32px;margin-top:8px;">Oak Lounge Chair</div>' +
    '    </div>' +
    '    <div style="display:flex;gap:16px;align-items:center;">' +
    '      <span style="color:var(--rust);font-weight:600;font-size:24px;">&#8358;1,450,000</span>' +
    '      <span style="border:1px solid var(--ink);border-radius:4px;padding:4px 8px;font-family:var(--font-mono);font-size:10px;text-transform:uppercase;">Solid Iroko</span>' +
    '    </div>' +
    '    <p style="color:var(--gray);font-size:15px;">Handcrafted in our Lagos atelier using sustainably sourced West African hardwoods. A piece that signs the room.</p>' +
    '    <div>' +
    '      <div style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;color:var(--gray);margin-bottom:12px;">Finish</div>' +
    '      <div style="display:flex;gap:16px;">' +
    '        <span style="width:32px;height:32px;border-radius:16px;background:#d7b594;border:2px solid var(--rust);" title="Natural"></span>' +
    '        <span style="width:32px;height:32px;border-radius:16px;background:#625143;" title="Smoked"></span>' +
    '        <span style="width:32px;height:32px;border-radius:16px;background:#262626;" title="Ebonized"></span>' +
    '      </div>' +
    '    </div>' +
    '    <p style="font-family:var(--font-serif);font-style:italic;font-size:12px;color:var(--gray);text-align:center;width:100%;">12&ndash;16 weeks &middot; Made to order &middot; Numbered piece</p>' +
    '    <a class="btn btn--rust" style="justify-content:center;width:100%;box-sizing:border-box;" href="cart.html">Make it yours</a>' +
    '    <a class="btn btn--outline" style="justify-content:center;width:100%;box-sizing:border-box;" href="transformation.html">View full details</a>' +
    '  </div>' +
    '</div>';
  document.body.appendChild(backdrop);

  function open(e) {
    e.preventDefault();
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (t) { t.addEventListener('click', open); });
  backdrop.querySelector('.product-modal__close').addEventListener('click', close);
  backdrop.addEventListener('click', function (e) { if (e.target === backdrop) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
