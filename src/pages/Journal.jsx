import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Journal.css';

export default function Journal() {
  return (
    <div className="page-journal">
      <Nav act="I" />

        <main className="journal">
          <div className="journal__head">
            <h1>The Journal</h1>
            <p>Observations from the atelier.</p>
          </div>

          <article className="featured-story">
            <img src="/assets/img/journal-1.svg" alt="Oak chair in a family living room, four years on" />
            <div className="featured-story__copy">
              <span className="featured-story__kicker">Featured Story</span>
              <h2 className="featured-story__title">Four years later: how one oak chair changed a room &ndash; and a family.</h2>
              <p className="featured-story__desc">An exploration of how the physical weight of our furniture grounds the spiritual energy of a home.</p>
              <a className="featured-story__link" href="#">Read Article</a>
            </div>
          </article>

          <div className="article-grid">
            <div className="article-row">
              <a className="article-card" href="#">
                <img src="/assets/img/room-dining.svg" alt="" />
                <div>
                  <div className="article-card__meta"><span className="cat">Transformation Stories</span><span className="date">Sept 12, 2026</span></div>
                  <div className="article-card__title">The dining table that made them eat together again</div>
                </div>
              </a>
              <a className="article-card" href="#">
                <img src="/assets/img/room-study.svg" alt="" />
                <div>
                  <div className="article-card__meta"><span className="cat">Transformation Stories</span><span className="date">Aug 28, 2026</span></div>
                  <div className="article-card__title">Why the right desk changed how he works</div>
                </div>
              </a>
            </div>
            <div className="article-row">
              <a className="article-card" href="#">
                <img src="/assets/img/room-bedroom.svg" alt="" />
                <div>
                  <div className="article-card__meta"><span className="cat">Transformation Stories</span><span className="date">Aug 04, 2026</span></div>
                  <div className="article-card__title">She commissioned a bedroom. She got her sanctuary.</div>
                </div>
              </a>
              <a className="article-card" href="#">
                <img src="/assets/img/journal-2.svg" alt="" />
                <div>
                  <div className="article-card__meta"><span className="cat">Transformation Stories</span><span className="date">July 19, 2026</span></div>
                  <div className="article-card__title">The oak chair that became the center of the home</div>
                </div>
              </a>
            </div>
            <div className="article-row">
              <a className="article-card" href="#">
                <img src="/assets/img/journal-3.svg" alt="" />
                <div>
                  <div className="article-card__meta"><span className="cat">Transformation Stories</span><span className="date">July 02, 2026</span></div>
                  <div className="article-card__title">The sideboard that gave them room to breathe</div>
                </div>
              </a>
              <a className="article-card" href="#">
                <img src="/assets/img/shelf-system.svg" alt="" />
                <div>
                  <div className="article-card__meta"><span className="cat">Transformation Stories</span><span className="date">June 24, 2026</span></div>
                  <div className="article-card__title">Act II: A New Harvest of Form</div>
                </div>
              </a>
            </div>
          </div>

          <nav className="pagination" aria-label="Pagination">
            <a className="is-current" href="#" aria-current="page">01</a>
            <a href="#">02</a>
            <a href="#">03</a>
            <a className="next" href="#">Next &rarr;</a>
          </nav>
        </main>

        <Footer />
    </div>
  );
}
