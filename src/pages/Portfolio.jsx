import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="page-portfolio">
      <Nav act="II" />

        <main className="portfolio">
          <h1>Spaces Transformed</h1>
          <div className="case-list">
            <article className="case">
              <img className="case__img" src="/assets/img/room-living.svg" alt="Double-height living room with Irókò dining table" />
              <div className="case__copy">
                <span className="eyebrow">Residential &ndash; Lekki, Lagos</span>
                <h2 className="case__title">A family home that finally felt intentional</h2>
                <p className="case__desc">A double-height living volume centered around a 4-meter solid Ir&oacute;k&ograve; dining anchor.</p>
                <a className="case__link" href="/transformation">View Walkthrough</a>
              </div>
            </article>
            <article className="case case--flip">
              <img className="case__img" src="/assets/img/room-dining.svg" alt="Boardroom with commanding walnut table" />
              <div className="case__copy">
                <span className="eyebrow">Hospitality &ndash; Enugu, Nigeria</span>
                <h2 className="case__title">A boardroom that commands respect</h2>
                <p className="case__desc">A series of outdoor rooms built to weather the elements while retaining softness.</p>
                <a className="case__link" href="/transformation">View Walkthrough</a>
              </div>
            </article>
            <article className="case">
              <img className="case__img" src="/assets/img/room-bedroom.svg" alt="Bedroom sanctuary with black walnut shelving" />
              <div className="case__copy">
                <span className="eyebrow">Workspace &ndash; Victoria Island</span>
                <h2 className="case__title">A bedroom that became a sanctuary</h2>
                <p className="case__desc">Library shelving and integrated desks carved from Nigerian Black Walnut.</p>
                <a className="case__link" href="/transformation">View Walkthrough</a>
              </div>
            </article>
          </div>
        </main>

        <div className="outcome-chips">
          <div className="stat-chip"><span className="k">Average project timeline</span><span className="v">14 weeks</span></div>
          <div className="stat-chip"><span className="k">Pieces per commission</span><span className="v">8-24</span></div>
          <div className="stat-chip"><span className="k">Client satisfaction</span><span className="v">100% would commission again</span></div>
        </div>

        <section className="pull-quote">
          <blockquote>&ldquo;We didn't just buy furniture. We bought the feeling of finally being home.&rdquo;</blockquote>
          <cite>&ndash; Amara Okafor, Creative Director</cite>
        </section>

        <section className="cta-band">
          <h2>Ready to build your space?</h2>
          <a className="btn btn--rust" href="/brief">Commission your transformation
            <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
          </a>
        </section>

        <Footer />
    </div>
  );
}
