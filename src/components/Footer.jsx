export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <a className="site-footer__logo" href="/">Wood<span>Accent</span></a>
        <div className="site-footer__social">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="/journal">Journal</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div>
          <div className="site-footer__hq-label">Headquarters</div>
          <div className="site-footer__hq">Victoria Island, Lagos, Nigeria</div>
        </div>
        <div className="site-footer__legal">&copy; 2026 WoodAccent Atelier. All materials signed by the maker.</div>
      </div>
    </footer>
  );
}
