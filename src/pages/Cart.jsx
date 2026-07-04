import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Cart.css';

export default function Cart() {
  return (
    <div className="page-cart">
      <Nav act="I" />

        <main className="cart-layout">
          <div className="cart-main">
            <div className="value-strip">
              <span className="value-chip">12-16 weeks</span>
              <span className="value-chip">Made by hand in our atelier</span>
              <span className="value-chip">40-year structural guarantee</span>
              <span className="value-chip">Numbered piece</span>
            </div>

            <h1 className="cart-title">Your Commission</h1>

            <div>
              <div className="cart-line">
                <img src="/assets/img/cart-piece.svg" alt="Oak lounge chair" />
                <div className="cart-line__info">
                  <div className="cart-line__name">Oak Lounge Chair</div>
                  <div className="cart-line__spec">Natural / Linen</div>
                </div>
                <div className="cart-line__price">&#8358;1,450,000</div>
              </div>
              <div className="cart-line">
                <img src="/assets/img/console.svg" alt="Kaftan console" />
                <div className="cart-line__info">
                  <div className="cart-line__name">Kaftan Console</div>
                  <div className="cart-line__spec">Ebony / Brass</div>
                </div>
                <div className="cart-line__price">&#8358;2,100,000</div>
              </div>
            </div>

            <div className="info-note">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="8"/><path d="M10 9v5M10 6v.5"/></svg>
              <p><strong>Every piece is made specifically for you &ndash;</strong> never mass-produced, never rushed.</p>
            </div>

            <div className="outcome-value">
              <span className="outcome-value__label">What you're really investing in</span>
              <div className="outcome-point">Heirloom quality</div>
              <div className="outcome-point">A named, numbered piece</div>
              <div className="outcome-point">40 years of structural guarantee</div>
            </div>
          </div>

          <aside className="checkout-card">
            <h2>Finalize Commission</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" type="text" placeholder="Tunde Adeyemi" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" type="email" placeholder="tunde@residence.com" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="f-address">Shipping Address</label>
                <input id="f-address" type="text" placeholder="12 Glover Road, Ikoyi" autoComplete="street-address" />
              </div>
              <div className="field">
                <label htmlFor="f-notes">Notes for the Maker</label>
                <textarea id="f-notes" rows="1" placeholder="Special requests or finish adjustments..."></textarea>
              </div>
            </form>
            <div>
              <div className="checkout-card__subtotal">
                <span className="label">Subtotal</span>
                <span>&#8358;3,550,000</span>
              </div>
              <hr className="rule" style={{ margin: '16px 0' }} />
              <button className="btn btn--rust checkout-card__cta" type="submit">Confirm My Commission
                <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
              </button>
            </div>
          </aside>
        </main>

        <Footer />
    </div>
  );
}
