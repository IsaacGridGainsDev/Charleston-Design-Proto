import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Makers.css';

export default function Makers() {
  return (
    <div className="page-makers">
      <Nav act="I" />

        <header className="makers-hero">
          <img className="bg" src="/assets/img/workshop.svg" alt="" />
          <h1>The Makers</h1>
          <p>Every piece is made by one man &mdash; Charles &mdash; in our Lagos atelier.</p>
        </header>

        <section className="why-matters">
          <span className="eyebrow">Why it matters who builds your furniture</span>
          <div className="why-matters__row">
            <div className="why-matters__col">
              <h3>One maker. Every piece.</h3>
              <p>Charles oversees every commission from first cut to final polish.</p>
            </div>
            <div className="why-matters__col">
              <h3>Two decades of mastery</h3>
              <p>Not a team of contractors. One craftsman with 20 years of refined skill.</p>
            </div>
            <div className="why-matters__col">
              <h3>His name on every piece</h3>
              <p>Charles signs and numbers every piece. That is his promise.</p>
            </div>
          </div>
        </section>

        <section className="charles">
          <img src="/assets/img/portrait-charles.svg" alt="Charles, founder and master craftsman, at his workbench" />
          <div className="charles__details">
            <h2 className="charles__name">Charles</h2>
            <span className="charles__role">Founder &amp; Master Craftsman</span>
            <p className="charles__bio">Charles founded WoodAccent Furniture with a single conviction &ndash; that the furniture in your home should outlast you. With over two decades spent mastering traditional joinery and West African hardwood craft, every piece that leaves the atelier bears his hand and his name.</p>
            <p className="charles__bio">Each piece is personally signed by Charles.</p>
          </div>
        </section>

        <section className="signature">
          <div>
            <span className="eyebrow">Signature &amp; mark</span>
            <h2 className="signature__title">Signed and numbered by its maker.</h2>
          </div>
          <div className="signature__row">
            <div className="signature-card">
              <span className="k">Every piece</span>
              <p>Includes a signed certificate of authenticity and a numbered maker's mark.</p>
            </div>
            <div className="signature-card">
              <span className="k">The mark</span>
              <p>A small signature on the underside of the frame &ndash; a promise of quality you can trust.</p>
            </div>
          </div>
        </section>

        <div className="values-ticker" aria-hidden="true">
          <div className="values-ticker__track">
            <span className="values-ticker__item">Slow &ndash; because great things take time</span>
            <span className="values-ticker__item">Local &ndash; because we know every hand</span>
            <span className="values-ticker__item">Considered &ndash; because you deserve better than fast furniture</span>
            <span className="values-ticker__item">Slow &ndash; because great things take time</span>
            <span className="values-ticker__item">Local &ndash; because we know every hand</span>
            <span className="values-ticker__item">Considered &ndash; because you deserve better than fast furniture</span>
          </div>
        </div>

        <Footer />
    </div>
  );
}
