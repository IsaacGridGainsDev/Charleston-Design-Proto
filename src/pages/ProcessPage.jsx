import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './ProcessPage.css';

export default function ProcessPage() {
  return (
    <div className="page-process">
      <Nav act="II" />

        <main className="process">
          <div className="process__head">
            <span className="kicker">Commissions</span>
            <h1>From empty room to defining space.</h1>
          </div>

          <div className="before-after">
            <div className="before-after__col">
              <span className="before-after__label">Before: A room</span>
              <img src="/assets/img/before-room.svg" alt="Empty room before transformation" />
            </div>
            <div className="before-after__col">
              <span className="before-after__label before-after__label--after">After: Your space</span>
              <img src="/assets/img/after-room.svg" alt="Furnished room after transformation" />
            </div>
          </div>

          <article className="phase">
            <div className="phase__copy">
              <span className="phase__num">01</span>
              <h2 className="phase__title">The Concept</h2>
              <p className="phase__desc">We design the space with structural integrity and poetic intent. Detailed renders and material palettes are shared for resonance.</p>
            </div>
            <img className="phase__img" src="/assets/img/room-study.svg" alt="Concept renders and material palette" />
          </article>

          <article className="phase phase--flip">
            <div className="phase__copy">
              <span className="phase__num">02</span>
              <h2 className="phase__title">The Brief</h2>
              <p className="phase__desc">Every commission begins with a conversation. You share the vision for your space, and we listen for the underlying rhythm of your life.</p>
            </div>
            <img className="phase__img" src="/assets/img/room-foyer.svg" alt="Brief conversation sketches" />
          </article>

          <article className="phase">
            <div className="phase__copy">
              <span className="phase__num">03</span>
              <h2 className="phase__title">The Craft</h2>
              <p className="phase__desc">Each piece is made to order in our Lagos atelier. We use traditional joinery and hand-carved details that reveal the wood's inner character.</p>
            </div>
            <img className="phase__img" src="/assets/img/workshop.svg" alt="Craftsman at work in the Lagos atelier" />
          </article>

          <article className="phase">
            <div className="phase__copy">
              <span className="phase__num">04</span>
              <h2 className="phase__title">The Install</h2>
              <p className="phase__desc">We bring the vision to life. Our team ensures every joint is seated and every surface is finished to our exact signature standards.</p>
            </div>
            <img className="phase__img" src="/assets/img/room-bedroom.svg" alt="Finished installation in a bedroom" />
          </article>

          <div className="outcome-quote">
            <span className="kicker">The outcome</span>
            <p>Most clients say the same thing when they walk in for the first time: this is exactly who I am.</p>
          </div>

          <div className="timeline-card">
            <span className="kicker">Timeline</span>
            <p>A typical commission spans 12 to 16 weeks from initial brief to final installation.</p>
            <a className="btn btn--rust" href="/brief">Start your transformation
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
            </a>
          </div>
        </main>

        <Footer />
    </div>
  );
}
