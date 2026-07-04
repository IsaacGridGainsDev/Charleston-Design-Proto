import Nav from '../components/Nav';
import Footer from '../components/Footer';
import OptionGroup from '../components/OptionGroup';
import './Transformation.css';

export default function Transformation() {
  return (
    <div className="page-transformation">
      <Nav act="I" />

        <header className="pdp-hero">
          <img className="pdp-hero__bg" src="/assets/img/hero-chair.svg" alt="Oak lounge chair, detail of joined frame and velvet cushion" />
          <div className="pdp-panel">
            <div>
              <div className="pdp-panel__crumb">Archive &ndash; Seating</div>
              <h1 className="pdp-panel__title">The piece your living room has been waiting for.</h1>
              <span className="pdp-panel__material">Solid White Oak</span>
            </div>
            <div className="pdp-panel__price">&#8358;1,450,000</div>
            <p className="pdp-panel__copy">Drawn from a single harvest in the Nigerian Highlands, the Oak Lounge Chair is a study in restraint. The frame is joined using traditional through-tenons, ensuring a lifetime of structural integrity.</p>
            <div>
              <OptionGroup label="Finish" options={['Natural', 'Smoked', 'Ebonized']} />
              <OptionGroup label="Upholstery" options={['Linen', 'Velvet', 'Leather']} />
            </div>
            <a className="btn btn--rust pdp-panel__cta" href="/cart">Make it yours
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
            </a>
            <p className="pdp-panel__assurance">Handcrafted to order &middot; 40-year structural guarantee &middot; Numbered, named.</p>
          </div>
        </header>

        <section className="proof">
          <hr className="proof__rule" />
          <div>
            <p className="proof__kicker">How it changes the room</p>
            <div className="proof__row">
              <figure className="proof__cell">
                <img src="/assets/img/room-study.svg" alt="Chair creating a quiet reading nook" />
                <figcaption>Creates a quiet reading nook</figcaption>
              </figure>
              <figure className="proof__cell">
                <img src="/assets/img/room-living.svg" alt="Chair anchoring a conversational circle" />
                <figcaption>Anchors a conversational circle</figcaption>
              </figure>
              <figure className="proof__cell">
                <img src="/assets/img/room-foyer.svg" alt="Chair defining a calm workspace" />
                <figcaption>Defines a calm workspace</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <blockquote>&ldquo;Four years in &ndash; it's still the most-asked-about piece in our home.&rdquo;</blockquote>
          <cite>Sarah M., London</cite>
        </section>

        <section className="proof">
          <hr className="proof__rule" />
          <div>
            <p className="proof__kicker">Why it lasts a lifetime</p>
            <div className="proof__row">
              <figure className="proof__cell">
                <img src="/assets/img/detail-joinery.svg" alt="Through-tenon joinery detail" />
                <figcaption>Structural integrity</figcaption>
              </figure>
              <figure className="proof__cell">
                <img src="/assets/img/detail-grain.svg" alt="Wood surface showing developing patina" />
                <figcaption>Patina over time</figcaption>
              </figure>
              <figure className="proof__cell">
                <img src="/assets/img/workshop.svg" alt="Maker signing the underside of a finished piece" />
                <figcaption>Signed by the maker</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  );
}
