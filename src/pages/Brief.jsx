import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Brief.css';

export default function Brief() {
  return (
    <div className="page-brief">
      <Nav act="II" />

        <header className="brief-hero">
          <img className="bg" src="/assets/img/brief-hero.svg" alt="" />
          <h1>Commission a Space</h1>
        </header>

        <section className="outcomes">
          <span className="outcomes__label">Outcomes</span>
          <div className="outcomes__row">
            <blockquote className="testimonial-card">
              <p>We had a blank canvas. WOODACCENT made it ours.</p>
              <cite>&ndash; R. Okonkwo, Lagos</cite>
            </blockquote>
            <blockquote className="testimonial-card">
              <p>Not furniture &ndash; a life decision.</p>
              <cite>&ndash; P. Lehmann, Z&uuml;rich</cite>
            </blockquote>
            <blockquote className="testimonial-card">
              <p>The space changed how we live.</p>
              <cite>&ndash; M. Ibarra, Mexico City</cite>
            </blockquote>
          </div>
        </section>

        <section className="brief-form-wrap">
          <form className="brief-form" onSubmit={(e) => e.preventDefault()}>
            <p className="brief-form__lede">Tell us about your space &ndash; we'll tell you what it could become.</p>
            <div className="brief-form__grid">
              <div className="field">
                <label htmlFor="b-name">Project Name</label>
                <input id="b-name" type="text" placeholder="Ikoyi Penthouse" />
              </div>
              <div className="field">
                <label htmlFor="b-space">Space Type</label>
                <input id="b-space" type="text" placeholder="Living Room / Study" />
              </div>
              <div className="field">
                <label htmlFor="b-budget">Estimated Budget</label>
                <input id="b-budget" type="text" placeholder="&#8358;5,000,000+" />
              </div>
              <div className="field">
                <label htmlFor="b-timeline">Timeline</label>
                <input id="b-timeline" type="text" placeholder="6 - 12 Months" />
              </div>
              <div className="field field--wide">
                <label htmlFor="b-brief">The Brief</label>
                <textarea id="b-brief" rows="1" placeholder="Describe the atmosphere and function of the space..."></textarea>
              </div>
              <div className="field field--wide">
                <label>Moodboard Upload</label>
                <div className="dropzone">Drag images or PDF brief here</div>
              </div>
            </div>
            <button className="btn btn--rust" type="submit">Start My Transformation
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
            </button>
          </form>
        </section>

        <Footer />
    </div>
  );
}
