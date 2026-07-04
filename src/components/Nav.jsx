export default function Nav({ act = 'I' }) {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__links">
        <a
          href="/shop"
          aria-current={act === 'I' ? 'page' : undefined}
          style={act === 'II' ? { color: 'var(--gray)' } : undefined}
        >
          Act I
        </a>
        <a
          href="/brief"
          aria-current={act === 'II' ? 'page' : undefined}
          style={act === 'I' ? { color: 'var(--gray)' } : undefined}
        >
          Act II
        </a>
      </div>
      <a className="site-nav__logo" href="/">Wood<span>Accent</span></a>
      <div className="site-nav__links" style={{ alignItems: 'center' }}>
        <a href="/journal">Journal</a>
        <a href="#" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="9" r="6" />
            <path d="m14 14 4 4" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
