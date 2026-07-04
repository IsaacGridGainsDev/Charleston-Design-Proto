import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-contact">
      <Nav act="I" />

        <main className="contact-layout">
          <div className="contact-main">
            <div>
              <h1>Your space is waiting.</h1>
              <div className="contact-story">
                <span className="eyebrow">Transformation story</span>
                <blockquote>I didn't think furniture could change my life. Then I sat in my own chair for the first time.</blockquote>
                <cite>&ndash; T. Abara, Nairobi</cite>
              </div>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="k">Atelier Address</div>
                  <div className="v">14 Ademola Adetokunbo St, Victoria Island, Lagos</div>
                </div>
                <div className="contact-detail">
                  <div className="k">Direct Lines</div>
                  <div className="v">+234 802 000 0000 &ndash; studio@woodaccent.com</div>
                </div>
                <div className="contact-detail">
                  <div className="k">Studio Hours</div>
                  <div className="v">Mon &ndash; Fri: 09:00 &ndash; 18:00 (By Appointment Only)</div>
                </div>
              </div>
            </div>
            <img src="/assets/img/sconce.svg" alt="Sculptural chair in the atelier showroom" />
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" type="text" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email Address</label>
                <input id="c-email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="c-subject">Subject</label>
                <select id="c-subject">
                  <option>General Enquiry</option>
                  <option>Commission a Space</option>
                  <option>Shop the Collection</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" rows="5"></textarea>
              </div>
            </div>
            <button className="btn btn--rust" type="submit">Tell us about your space
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
            </button>
          </form>
        </main>

        <div className="contact-stats">
          <div className="contact-stat">
            <span className="k">Satisfaction</span>
            <span className="v">100% of commission clients say they would do it again</span>
          </div>
          <div className="contact-stat">
            <span className="k">Timeline</span>
            <span className="v">Average 14 weeks from brief to installation</span>
          </div>
          <div className="contact-stat">
            <span className="k">Guarantee</span>
            <span className="v">Every piece guaranteed for 40 years</span>
          </div>
        </div>

        <div className="map-band">
          <img src="/assets/img/complete-look.svg" alt="Illustrated map area around the Victoria Island atelier" />
          <a className="map-band__btn" href="#">View Map</a>
        </div>

        <Footer />
    </div>
  );
}
