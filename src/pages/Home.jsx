import Footer from '../components/Footer';
import './Home.css';

export default function Home() {
  return (
    <div className="page-home">
      {/* s01 · hero */}
        <header className="hero">
          <nav className="hero__nav" aria-label="Primary">
            <div className="hero__nav-links hero__nav-links--left">
              <a href="/shop">Act I</a>
              <a href="/brief">Act II</a>
            </div>
            <a className="hero__nav-logo" href="/"><span className="wa-w">Wood</span><span className="wa-a">Accent</span></a>
            <div className="hero__nav-links hero__nav-links--right">
              <a href="/journal">Journal</a>
              <a href="/shop" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="6"/><path d="m14 14 4 4"/></svg>
              </a>
            </div>
          </nav>

          <a className="hero__act hero__act--i" href="/shop">
            <div className="hero__kicker">
              <span className="eyebrow eyebrow--tan">Act I</span>
              <span className="hero__title">The Collection</span>
            </div>
            <img className="hero__img" src="/assets/img/hero-chair.svg" alt="Òkè lounge chair in solid Irókò" />
            <span className="btn btn--rust">Shop the pieces that arrive
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
            </span>
          </a>
          <div className="hero__divider" role="presentation"></div>
          <a className="hero__act hero__act--ii" href="/brief">
            <div className="hero__kicker">
              <span className="eyebrow">Act II</span>
              <span className="hero__title">The Commission</span>
            </div>
            <img className="hero__img" src="/assets/img/hero-commission.svg" alt="Commissioned interior with walnut console" />
            <span className="btn btn--ink">Spaces we build with you
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
            </span>
          </a>
        </header>

        {/* s02 · maker's note */}
        <section className="makers-note">
          <hr className="rule" />
          <span className="eyebrow">Maker's Note</span>
          <div className="makers-note__cols">
            <div className="makers-note__col">
              <h3>MATERIAL</h3>
              <p>We source our hardwoods with the reverence they deserve. Every grain tells a story of the Lagos rain and the Nigerian sun. We use only FSC-certified timber, ensuring the forest continues to breathe as we build.</p>
            </div>
            <div className="makers-note__col">
              <h3>METHOD</h3>
              <p>Joinery is where the soul of the maker enters the wood. No hidden fasteners, no shortcuts. We employ traditional West African woodworking techniques refined for the modern architectural home.</p>
            </div>
            <div className="makers-note__col">
              <h3>FINISH</h3>
              <p>A surface should feel as good as it looks. We finish our pieces with hand-rubbed natural oils and waxes that allow the wood to age gracefully, gaining character and permanence with every generation.</p>
            </div>
          </div>
          <div className="makers-note__quote">
            <div className="makers-note__seal">W</div>
            <blockquote>&ldquo;We start with the tree. We end with the room. Everything between is signed by the maker.&rdquo;</blockquote>
          </div>
          <hr className="rule" />
        </section>

        {/* s03 · featured pieces */}
        <section className="featured">
          <span className="eyebrow">01 &ndash; The Collection</span>
          <div className="featured__hero-row">
            <a className="featured__primary" href="/transformation">
              <img className="featured__primary-img" src="/assets/img/hero-chair.svg" alt="Òkè lounge chair" />
              <div className="featured__meta">
                <div>
                  <div className="featured__name">Òkè Lounge Chair</div>
                  <div className="featured__spec">Solid Irókò &ndash; Hand Polished</div>
                </div>
                <div>
                  <div className="featured__price">&#8358;1,240,000</div>
                  <div className="featured__add">Add to collection</div>
                </div>
              </div>
            </a>
            <a className="featured__secondary" href="/shop">
              <img className="featured__secondary-img" src="/assets/img/console.svg" alt="Ààfin console in black walnut" />
              <div>
                <div className="featured__name">Ààfin Console</div>
                <div className="featured__spec">Black Walnut &ndash; Brass Inlay</div>
                <div style={{ fontSize: '16px', marginTop: '8px' }}>&#8358;840,000</div>
              </div>
            </a>
          </div>
          <div className="featured__tertiary-row">
            <a className="featured__tertiary" href="/shop">
              <div className="featured__tertiary-copy">
                <h3>Ìbí Coffee Table</h3>
                <p>A study in nesting forms. Three circular surfaces carved from a single trunk, connected by bronze architecture.</p>
                <span className="btn btn--outline">View details
                  <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
                </span>
              </div>
              <img className="featured__tertiary-img" src="/assets/img/coffee-table.svg" alt="Ìbí coffee table nesting forms" />
            </a>
          </div>
        </section>

        {/* s04 · shop the look */}
        <section className="shop-look">
          <img className="shop-look__bg" src="/assets/img/shop-the-look.svg" alt="" />
          <span className="shop-look__kicker eyebrow eyebrow--cream">02 &ndash; Shop the Look</span>
          <h2 className="shop-look__title">The room, complete.</h2>

          <div className="hotspot" style={{ left: '20.8%', top: '50%' }}>
            <button className="hotspot__dot" aria-label="Òkè Lounge Chair, 1.2 million naira">+</button>
            <div className="hotspot__tag"><span className="name">Òkè Lounge Chair</span><span className="price">&#8358;1.2M</span></div>
          </div>
          <div className="hotspot" style={{ left: '58.4%', top: '85.3%' }}>
            <button className="hotspot__dot" aria-label="Ìbí Coffee Table, 550 thousand naira">+</button>
            <div className="hotspot__tag" style={{ top: '-78px' }}><span className="name">Ìbí Coffee Table</span><span className="price">&#8358;550k</span></div>
          </div>
          <div className="hotspot" style={{ left: '65.6%', top: '48.3%' }}>
            <button className="hotspot__dot" aria-label="Palm Sconce, 120 thousand naira">+</button>
            <div className="hotspot__tag"><span className="name">Palm Sconce</span><span className="price">&#8358;120k</span></div>
          </div>
        </section>

        {/* s05 · atelier */}
        <section className="atelier">
          <div className="atelier__panel--open">
            <img className="bg" src="/assets/img/panel-craftsmanship.svg" alt="" />
            <div>
              <div className="atelier__num">01</div>
              <h2 className="atelier__title">Craftsmanship</h2>
              <p className="atelier__copy">Our artisans spend decades mastering the hand-planing of Irókò and Walnut. Each joint is a testament to Nigerian craft heritage.</p>
            </div>
            <div className="atelier__footer">
              <a className="btn btn--rust" href="/process">Explore our process
                <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
              </a>
              <span style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'var(--rust)' }}></span>
            </div>
          </div>
          <div className="atelier__rail">
            <span className="atelier__rail-num">02</span>
            <span className="atelier__rail-label">Machinery</span>
          </div>
          <div className="atelier__rail">
            <span className="atelier__rail-num">03</span>
            <span className="atelier__rail-label">Materials</span>
          </div>
        </section>

        {/* s06 · final CTA */}
        <section className="final-cta">
          <div className="final-cta__head">
            <span className="eyebrow">The Full Atelier</span>
            <h2 className="final-cta__title">Every door is open.</h2>
          </div>

          <div className="preview-gallery">
            <div className="preview-gallery__row">
              <a className="preview-card" href="/shop">
                <img className="bg" src="/assets/img/card-shop-archive.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">ACT I &middot; The Collection</span>
                  <div><div className="preview-card__title">The Archive</div><div className="preview-card__tag">Own the room.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
              <a className="preview-card" href="/transformation">
                <img className="bg" src="/assets/img/hero-chair.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">ACT I &middot; The Collection</span>
                  <div><div className="preview-card__title">Oak Lounge Chair</div><div className="preview-card__tag">The piece that defines the room.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
              <a className="preview-card" href="/cart">
                <img className="bg" src="/assets/img/card-cart-configure.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">ACT I &middot; The Collection</span>
                  <div><div className="preview-card__title">Your Commission</div><div className="preview-card__tag">Handmade for you, specifically.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="preview-gallery__row">
              <a className="preview-card" href="/brief">
                <img className="bg" src="/assets/img/hero-commission.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">ACT II &middot; The Commission</span>
                  <div><div className="preview-card__title">Brief a Project</div><div className="preview-card__tag">Commission an entire space.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
              <a className="preview-card" href="/portfolio">
                <img className="bg" src="/assets/img/panel-craftsmanship.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">ACT II &middot; The Commission</span>
                  <div><div className="preview-card__title">Spaces Transformed</div><div className="preview-card__tag">See what's possible.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
              <a className="preview-card" href="/process">
                <img className="bg" src="/assets/img/card-process.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">ACT II &middot; The Commission</span>
                  <div><div className="preview-card__title">The Method</div><div className="preview-card__tag">From empty room to defining space.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="preview-gallery__row">
              <a className="preview-card" href="/makers">
                <img className="bg" src="/assets/img/card-makers.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">The Atelier</span>
                  <div><div className="preview-card__title">The Makers</div><div className="preview-card__tag">Every hand signs their work.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
              <a className="preview-card" href="/journal">
                <img className="bg" src="/assets/img/card-journal.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">The Atelier</span>
                  <div><div className="preview-card__title">The Journal</div><div className="preview-card__tag">Stories from the atelier.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
              <a className="preview-card" href="/contact">
                <img className="bg" src="/assets/img/coffee-table.svg" alt="" />
                <div className="preview-card__overlay">
                  <span className="eyebrow">The Atelier</span>
                  <div><div className="preview-card__title">Begin a Conversation</div><div className="preview-card__tag">Your space is waiting.</div></div>
                </div>
                <svg className="preview-card__arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 9h16M10 2l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <div className="final-cta__head">
            <span className="eyebrow">Your Next Step</span>
            <h2 className="final-cta__title">Which door do you walk through?</h2>
          </div>
          <div className="pathways">
            <a className="pathway" href="/shop">
              <img className="bg" src="/assets/img/hero-chair.svg" alt="" />
              <span className="pathway__title">Act I: Shop Furniture</span>
              <span className="btn btn--rust">Explore the Collection
                <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
              </span>
            </a>
            <a className="pathway" href="/brief">
              <img className="bg" src="/assets/img/hero-commission.svg" alt="" />
              <span className="pathway__title">Act II: Commission A Space</span>
              <span className="btn btn--ink">Begin Your Project
                <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
              </span>
            </a>
          </div>

          <Footer />
        </section>
    </div>
  );
}
