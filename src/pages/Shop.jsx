import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import './Shop.css';

export default function Shop() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="page-shop">
      <Nav act="I" />

        <header className="shop-hero">
          <h1>Own the room.</h1>
          <p>Each piece is chosen to define a space &ndash; not fill it.</p>
        </header>

        <div className="trust-strip">
          <div className="trust-item">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m2.5 8.5 3.5 3.5 7.5-8"/></svg>
            Handmade to order
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m2.5 8.5 3.5 3.5 7.5-8"/></svg>
            40-year guarantee
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m2.5 8.5 3.5 3.5 7.5-8"/></svg>
            Ships in 12-16 weeks
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m2.5 8.5 3.5 3.5 7.5-8"/></svg>
            Named, numbered pieces
          </div>
        </div>

        <div className="cat-tabs">
          <a className="cat-tab is-active" href="#">Living Room</a>
          <a className="cat-tab" href="#">Dining Room</a>
          <a className="cat-tab" href="#">Bedroom</a>
          <a className="cat-tab" href="#">Study</a>
          <a className="cat-tab" href="#">The Complete Look</a>
        </div>

        <main className="product-grid">
          <div className="product-row">
            <a className="room-card" href="/transformation" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalOpen(true); }}>
              <div className="room-card__img-wrap">
                <img src="/assets/img/hero-chair.svg" alt="Oak lounge chair styled in the Loft Residence" />
                <span className="room-card__label">As seen in: The Loft Residence</span>
              </div>
              <div className="room-card__name">Oak Lounge Chair</div>
              <div className="room-card__desc">The centerpiece that makes a room feel intentional.</div>
              <div className="room-card__price">&#8358;1,450,000</div>
            </a>
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap">
                <img src="/assets/img/console.svg" alt="Kaftan console styled in the Heritage Dining Room" />
                <span className="room-card__label">As seen in: The Heritage Dining Room</span>
              </div>
              <div className="room-card__name">Kaftan Console</div>
              <div className="room-card__desc">A statement entry that sets the tone for the home.</div>
              <div className="room-card__price">&#8358;2,100,000</div>
            </a>
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap">
                <img src="/assets/img/coffee-table.svg" alt="Wu coffee table styled in the Study Atelier" />
                <span className="room-card__label">As seen in: The Study Atelier</span>
              </div>
              <div className="room-card__name">Wu Coffee Table</div>
              <div className="room-card__desc">A gathering point that invites conversation.</div>
              <div className="room-card__price">&#8358;850,000</div>
            </a>
          </div>
          <div className="product-row">
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap"><img src="/assets/img/shelf-system.svg" alt="Arco shelf system" /></div>
              <div className="room-card__name">Arco Shelf System</div>
              <div className="room-card__desc">A modular system that keeps a room calm.</div>
              <div className="room-card__price">&#8358;3,200,000</div>
            </a>
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap"><img src="/assets/img/side-table.svg" alt="Pedestal side table" /></div>
              <div className="room-card__name">Pedestal Side Table</div>
              <div className="room-card__desc">A sculptural accent that adds depth.</div>
              <div className="room-card__price">&#8358;420,000</div>
            </a>
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap"><img src="/assets/img/woven-bench.svg" alt="Woven bench" /></div>
              <div className="room-card__name">Woven Bench</div>
              <div className="room-card__desc">A flexible seat that creates a sense of flow.</div>
              <div className="room-card__price">&#8358;680,000</div>
            </a>
          </div>
          <div className="product-row">
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap"><img src="/assets/img/marble-desk.svg" alt="Marble slab desk" /></div>
              <div className="room-card__name">Marble Slab Desk</div>
              <div className="room-card__desc">A workspace that feels like a sanctuary.</div>
              <div className="room-card__price">&#8358;4,800,000</div>
            </a>
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap"><img src="/assets/img/linen-sofa.svg" alt="Linen sofa" /></div>
              <div className="room-card__name">Linen Sofa</div>
              <div className="room-card__desc">A foundation piece that anchors the room.</div>
              <div className="room-card__price">&#8358;5,200,000</div>
            </a>
            <a className="room-card" href="/transformation">
              <div className="room-card__img-wrap"><img src="/assets/img/terrazzo-platter.svg" alt="Terrazzo platter" /></div>
              <div className="room-card__name">Terrazzo Platter</div>
              <div className="room-card__desc">A decorative anchor for the dining table.</div>
              <div className="room-card__price">&#8358;120,000</div>
            </a>
          </div>
        </main>

        <section className="complete-look">
          <div className="complete-look__header">
            <span className="kicker">Shop the Complete Look</span>
            <h2>A fully furnished room, curated for calm.</h2>
          </div>
          <div className="complete-look__stage">
            <img src="/assets/img/complete-look.svg" alt="Fully furnished living room curation" />
            <div className="callout" style={{ left: '8.3%', top: '25%' }}>
              <div className="callout__ring"></div>
              <span>Oak Lounge Chair</span>
            </div>
            <div className="callout" style={{ left: '56.9%', top: '19.4%' }}>
              <div className="callout__ring"></div>
              <span>Walnut Shelf System</span>
            </div>
            <div className="callout" style={{ left: '38.9%', top: '72.2%' }}>
              <div className="callout__ring"></div>
              <span>Travertine Side Table</span>
            </div>
          </div>
          <div className="bundle-row">
            <a className="bundle-card" href="/cart">
              <span className="bundle-card__kicker">Bundle</span>
              <span className="bundle-card__name">The Living Room Edit</span>
              <span className="bundle-card__save">Save &#8358;450,000 on the full curation.</span>
              <span className="bundle-card__price">&#8358;8,250,000</span>
            </a>
            <a className="bundle-card" href="/cart">
              <span className="bundle-card__kicker">Bundle</span>
              <span className="bundle-card__name">The Dining Room Edit</span>
              <span className="bundle-card__save">Save &#8358;320,000 on the full curation.</span>
              <span className="bundle-card__price">&#8358;6,800,000</span>
            </a>
            <a className="bundle-card" href="/cart">
              <span className="bundle-card__kicker">Bundle</span>
              <span className="bundle-card__name">The Study Edit</span>
              <span className="bundle-card__save">Save &#8358;180,000 on the full curation.</span>
              <span className="bundle-card__price">&#8358;4,950,000</span>
            </a>
          </div>
        </section>

        <Footer />
        <ProductModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
