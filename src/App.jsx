import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Transformation from './pages/Transformation';
import Cart from './pages/Cart';
import Brief from './pages/Brief';
import Portfolio from './pages/Portfolio';
import ProcessPage from './pages/ProcessPage';
import Makers from './pages/Makers';
import Journal from './pages/Journal';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// The page markup uses plain <a href="/..."> anchors; intercept internal
// clicks so navigation stays client-side.
function LinkInterceptor({ children }) {
  const navigate = useNavigate();
  function onClick(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('/') || a.target) return;
    e.preventDefault();
    navigate(href);
  }
  return <div onClick={onClick}>{children}</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LinkInterceptor>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/brief" element={<Brief />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/makers" element={<Makers />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LinkInterceptor>
    </BrowserRouter>
  );
}
