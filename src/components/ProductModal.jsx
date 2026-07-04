import { useEffect } from 'react';

/* Product quick-view modal (Figma: web-product-modal 470:4022) */
export default function ProductModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop is-open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="product-modal" role="dialog" aria-modal="true" aria-label="Oak Lounge Chair quick view">
        <div className="product-modal__photo">
          <img src="/assets/img/hero-chair.svg" alt="Oak lounge chair" />
          <button className="product-modal__close" aria-label="Close" onClick={onClose}>&times;</button>
        </div>
        <div className="product-modal__details">
          <div>
            <div className="eyebrow">Seating &middot; Oak Collection</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', marginTop: '8px' }}>Oak Lounge Chair</div>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ color: 'var(--rust)', fontWeight: 600, fontSize: '24px' }}>&#8358;1,450,000</span>
            <span style={{ border: '1px solid var(--ink)', borderRadius: '4px', padding: '4px 8px', fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase' }}>Solid Iroko</span>
          </div>
          <p style={{ color: 'var(--gray)', fontSize: '15px' }}>
            Handcrafted in our Lagos atelier using sustainably sourced West African hardwoods. A piece that signs the room.
          </p>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '12px' }}>Finish</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ width: '32px', height: '32px', borderRadius: '16px', background: '#d7b594', border: '2px solid var(--rust)' }} title="Natural" />
              <span style={{ width: '32px', height: '32px', borderRadius: '16px', background: '#625143' }} title="Smoked" />
              <span style={{ width: '32px', height: '32px', borderRadius: '16px', background: '#262626' }} title="Ebonized" />
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '12px', color: 'var(--gray)', textAlign: 'center', width: '100%' }}>
            12&ndash;16 weeks &middot; Made to order &middot; Numbered piece
          </p>
          <a className="btn btn--rust" style={{ justifyContent: 'center', width: '100%', boxSizing: 'border-box' }} href="/cart">Make it yours</a>
          <a className="btn btn--outline" style={{ justifyContent: 'center', width: '100%', boxSizing: 'border-box' }} href="/transformation">View full details</a>
        </div>
      </div>
    </div>
  );
}
