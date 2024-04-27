import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('rgba(0, 0, 0, 0.2)');

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = window.scrollY;

      if (distanceFromTop > 100) {
        setNavBackground('rgba(0, 0, 0, 0.5)');
      } else {
        setNavBackground('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ backgroundColor: navBackground }}>
      <Link to='/' className='title'>
        <svg width="183.6" height="56.00071672825985" viewBox="0 0 350 106.75517894820779" class="looka-1j8o68f"><defs id="SvgjsDefs1315"></defs><g id="SvgjsG1316" featurekey="X3o6dM-0" transform="matrix(5.7407586077529125,0,0,5.7407586077529125,-1.9314716216455503,-41.103830755540606)" fill="#e37910"><path d="M10.44 7.16 q0.36 0 0.93 0.04 t1.21 0.15 t1.3 0.3 t1.18 0.49 t0.85 0.72 t0.33 0.98 q0 0.76 -0.58 1.19 t-1.36 0.43 q-0.04 0 -0.18 -0.03 t-0.29 -0.08 t-0.26 -0.12 t-0.11 -0.17 q0 -0.2 0.23 -0.33 t0.5 -0.22 t0.5 -0.2 t0.23 -0.29 q0 -0.34 -0.49 -0.58 t-1.18 -0.39 t-1.45 -0.22 t-1.28 -0.07 q-0.5 0 -1.32 0.07 t-1.77 0.22 t-1.93 0.4 t-1.78 0.6 t-1.32 0.81 t-0.56 1.04 q-0.04 0.34 0.44 0.67 t1.26 0.64 t1.77 0.6 t1.99 0.56 t1.9 0.54 t1.5 0.51 q0.58 0.24 1.25 0.59 t1.25 0.8 t0.96 1.01 t0.38 1.24 q0 0.64 -0.32 1.09 t-0.85 0.74 t-1.21 0.42 t-1.4 0.13 q-1.62 0 -3.15 -0.31 t-2.97 -0.89 q-0.52 -0.2 -1.1 -0.51 t-1.06 -0.72 t-0.8 -0.9 t-0.32 -1.09 q0 -0.3 0.13 -0.6 t0.38 -0.54 t0.61 -0.39 t0.84 -0.15 q0.1 0 0.24 0.02 t0.24 0.08 t0.1 0.14 t-0.2 0.2 q-0.34 0.2 -0.61 0.34 t-0.46 0.28 t-0.28 0.29 t-0.09 0.35 q0 0.3 0.19 0.58 t0.47 0.52 t0.57 0.42 t0.51 0.28 q1.44 0.74 3.1 1.13 t3.34 0.39 q0.3 0 0.79 -0.02 t0.97 -0.14 t0.82 -0.36 t0.34 -0.7 q0 -0.6 -0.57 -1.09 t-1.4 -0.9 t-1.77 -0.71 t-1.66 -0.52 q-2.08 -0.6 -3.55 -1.06 t-2.38 -0.91 t-1.32 -0.93 t-0.37 -1.14 q0.06 -0.94 0.63 -1.66 t1.46 -1.24 t1.99 -0.87 t2.2 -0.56 t2.11 -0.3 t1.71 -0.09 z M20.64 16.42 q0.08 -0.18 0.22 -0.23 t0.26 -0.01 t0.17 0.15 t-0.03 0.29 q-0.12 0.28 -0.33 0.82 t-0.5 1.09 t-0.69 0.97 t-0.9 0.46 q-0.6 0.04 -0.87 -0.3 t-0.36 -0.82 t-0.06 -0.96 t0.07 -0.7 q0 -0.1 -0.1 -0.1 t-0.25 0.06 t-0.3 0.17 t-0.23 0.23 q-0.02 0.76 -0.03 1.42 t0.01 1.1 q0 0.28 -0.21 0.41 t-0.48 0.12 t-0.48 -0.16 t-0.21 -0.45 q0.02 -0.5 0.05 -1.26 t0.05 -1.62 t0.04 -1.75 t0.03 -1.66 t0.01 -1.34 l0 -0.79 q-0.02 -0.38 0.23 -0.61 t0.55 -0.31 t0.54 0 t0.2 0.3 q-0.02 0.14 -0.06 0.66 t-0.08 1.28 t-0.08 1.67 t-0.06 1.83 q0.46 -0.56 0.85 -1.05 t0.47 -0.97 q0.02 -0.22 0.33 -0.34 t0.64 -0.12 t0.57 0.14 t0.12 0.4 q-0.14 0.3 -0.49 0.6 t-0.73 0.58 t-0.72 0.52 t-0.46 0.42 q0.14 -0.04 0.47 -0.15 t0.64 -0.14 t0.5 0.11 t0.05 0.6 q-0.12 0.36 -0.14 0.74 t0.02 0.67 t0.15 0.44 t0.27 0.05 q0.18 -0.12 0.36 -0.42 t0.36 -0.67 t0.34 -0.75 t0.28 -0.62 z M20.62 15.84 q0 -0.48 0.25 -0.66 t0.55 -0.14 t0.52 0.26 t0.16 0.54 q-0.08 0.36 -0.15 0.9 t-0.09 1.04 t0.03 0.86 t0.23 0.36 q0.12 0 0.29 -0.31 t0.33 -0.73 t0.3 -0.84 t0.18 -0.64 q0.06 -0.2 0.2 -0.27 t0.27 -0.04 t0.22 0.15 t0.03 0.3 q-0.04 0.12 -0.13 0.45 t-0.23 0.73 t-0.33 0.83 t-0.44 0.76 t-0.55 0.51 t-0.66 0.08 q-0.54 -0.16 -0.77 -0.59 t-0.27 -1 t0.01 -1.24 t0.05 -1.31 z M22.900000000000002 13.1 q0.04 0.22 -0.05 0.41 t-0.27 0.34 t-0.42 0.25 t-0.5 0.14 q-0.5 0.06 -0.98 -0.1 t-0.54 -0.58 q-0.08 -0.44 0.27 -0.75 t0.93 -0.41 t1.04 0.09 t0.52 0.61 z M26.62 11.38 q0 -0.48 0.26 -0.67 t0.56 -0.17 t0.53 0.22 t0.17 0.52 q-0.04 0.24 -0.12 0.91 t-0.17 1.55 t-0.15 1.82 t-0.06 1.74 t0.07 1.31 t0.27 0.51 q0.18 0 0.37 -0.34 t0.37 -0.79 t0.31 -0.88 t0.17 -0.63 q0.06 -0.2 0.19 -0.27 t0.26 -0.04 t0.22 0.15 t0.05 0.32 t-0.18 0.78 t-0.42 1.19 t-0.73 1.09 t-1.07 0.48 q-0.46 0 -0.71 -0.37 t-0.39 -0.97 q-0.16 0.38 -0.43 0.68 t-0.67 0.44 q-0.44 0.16 -0.76 0.04 q-0.58 -0.14 -0.92 -0.63 t-0.47 -1.14 t-0.03 -1.35 t0.41 -1.26 t0.83 -0.87 t1.26 -0.19 q0.4 0.06 0.7 0.42 q0.08 -1.14 0.18 -2.12 t0.1 -1.48 z M26.160000000000004 16.32 q-0.04 -0.28 -0.15 -0.56 t-0.33 -0.32 q-0.32 -0.06 -0.57 0.2 t-0.41 0.67 t-0.23 0.91 t-0.04 0.95 t0.17 0.76 t0.4 0.35 t0.49 -0.24 t0.4 -0.72 t0.25 -0.98 t0.02 -1.02 z M33.02 16.8 q0.24 0 0.39 0.15 t0.22 0.33 t0.03 0.32 t-0.2 0.1 q-0.58 -0.06 -1.11 -0.05 t-1.29 0.03 q-0.14 0 -0.22 -0.14 t-0.09 -0.3 t0.05 -0.3 t0.2 -0.12 q0.76 0.06 1.23 0.03 t0.79 -0.05 z M40.02 13.92 q0.54 0.4 1.34 1.03 t1.68 1.35 t1.76 1.45 t1.6 1.33 t1.18 0.99 t0.5 0.43 q0.18 0.2 0.08 0.32 t-0.31 0.18 t-0.46 0.08 t-0.35 0.04 q-0.34 0 -0.81 -0.27 t-1.03 -0.69 t-1.17 -0.95 t-1.23 -1.07 q-0.4 -0.36 -0.92 -0.79 t-1.02 -0.93 t-0.88 -1.04 t-0.52 -1.1 q-0.66 0.46 -1.43 1.02 t-1.29 1.02 l0 1.52 q0 0.4 -0.07 1.02 t-0.19 1.21 t-0.3 1.02 t-0.38 0.43 q-0.18 0 -0.27 -0.6 t-0.19 -1.8 q-0.14 -2 -0.19 -3.98 t0.03 -4.12 l0 -0.62 t0.03 -0.82 t0.11 -0.8 t0.24 -0.56 t0.43 -0.07 t0.69 0.65 q0.06 0.12 0.11 0.34 t0.06 0.85 t-0.01 1.84 t-0.08 3.29 q2.04 -1.82 4.22 -3.5 t4.48 -3.08 q0.12 -0.08 0.43 -0.19 t0.65 -0.16 t0.6 0.02 t0.3 0.35 q0.02 0.24 -0.33 0.6 t-0.86 0.74 t-1.07 0.75 t-0.96 0.63 q-1 0.64 -1.68 1.06 t-1.14 0.71 t-0.78 0.49 t-0.6 0.38 z M50.760000000000005 14.54 q0.28 0.06 0.49 0.26 t0.35 0.44 q0.16 -0.18 0.4 -0.2 t0.46 0.07 t0.36 0.28 t0.1 0.45 q-0.08 0.36 -0.15 0.9 t-0.09 1.04 t0.03 0.86 t0.21 0.36 q0.12 0 0.29 -0.31 t0.34 -0.73 t0.31 -0.84 t0.18 -0.64 q0.06 -0.2 0.2 -0.27 t0.27 -0.04 t0.22 0.15 t0.03 0.3 q-0.04 0.12 -0.13 0.45 t-0.23 0.73 t-0.33 0.83 t-0.44 0.76 t-0.56 0.51 t-0.67 0.08 q-0.58 -0.16 -0.84 -0.7 q-0.16 0.48 -0.44 0.87 t-0.72 0.57 q-0.42 0.14 -0.74 0.06 q-0.58 -0.16 -0.92 -0.72 t-0.46 -1.3 t-0.02 -1.54 t0.41 -1.44 t0.83 -1.01 t1.26 -0.23 z M51.28000000000001 16.56 q-0.04 -0.34 -0.15 -0.66 t-0.33 -0.36 q-0.32 -0.06 -0.57 0.23 t-0.41 0.77 t-0.23 1.05 t-0.04 1.08 t0.16 0.87 t0.39 0.4 t0.49 -0.28 t0.4 -0.82 t0.26 -1.11 t0.03 -1.17 z M54.660000000000004 16.740000000000002 q-0.04 0.16 -0.17 0.23 t-0.27 0.04 t-0.22 -0.14 t0 -0.29 l0.12 -0.34 q-0.18 -0.18 -0.2 -0.42 t0.08 -0.45 t0.29 -0.36 t0.43 -0.15 q0.42 0 0.46 0.31 t-0.12 0.69 q0.12 0.06 0.39 0.02 t0.51 -0.05 t0.4 0.09 t0.08 0.46 t-0.17 0.86 t-0.13 0.95 t0 0.77 t0.22 0.32 q0.12 0 0.31 -0.35 t0.39 -0.81 t0.36 -0.93 t0.2 -0.71 q0.04 -0.2 0.17 -0.28 t0.27 -0.07 t0.23 0.12 t0.07 0.31 q-0.02 0.1 -0.1 0.43 t-0.22 0.74 t-0.34 0.86 t-0.48 0.83 t-0.62 0.61 t-0.76 0.21 q-0.48 -0.02 -0.7 -0.43 t-0.28 -0.98 t0.03 -1.21 t0.25 -1.12 q-0.1 0.02 -0.2 0.02 l-0.2 0 q-0.06 0.1 -0.08 0.22 z M57.84 13.440000000000001 q0 -0.14 0.01 -0.27 t0.01 -0.23 q0 -0.48 0.26 -0.67 t0.56 -0.17 t0.53 0.22 t0.17 0.52 l-0.1 0.52 l0.48 0 q0.38 0 0.55 0.13 t0.17 0.28 t-0.18 0.27 t-0.5 0.12 l-0.6 0 q-0.08 0.72 -0.14 1.59 t-0.08 1.64 t0.02 1.28 t0.18 0.51 q0.12 0 0.33 -0.36 t0.43 -0.83 t0.4 -0.92 t0.24 -0.61 q0.04 -0.18 0.18 -0.24 t0.27 -0.03 t0.22 0.14 t0.03 0.29 q-0.12 0.4 -0.32 1.04 t-0.5 1.24 t-0.72 1.04 t-1 0.44 q-0.38 0 -0.62 -0.3 t-0.36 -0.79 t-0.15 -1.13 t-0.01 -1.32 t0.08 -1.37 t0.1 -1.27 l-0.48 0 q-0.32 0 -0.49 -0.12 t-0.18 -0.26 t0.15 -0.26 t0.52 -0.12 l0.54 0 z"></path></g><g id="SvgjsG1317" featurekey="RFbU7s-0" transform="matrix(1.02466523188101,0,0,1.02466523188101,33.77040118428449,86.05694048245384)" fill="#e37910"><path d="M12.04 20 l-2.78 0 l-3.12 -4.76 l-0.12 0 l-2.2 0 l0 4.76 l-2.62 0 l0 -14 l4.82 0 c3.14 0 5.12 1.92 5.12 4.7 c0 1.94 -0.96 3.38 -2.6 4.08 z M3.82 8.42 l0 4.56 l2.06 0 c1.58 0 2.64 -0.68 2.64 -2.28 c0 -1.58 -1.06 -2.28 -2.64 -2.28 l-2.06 0 z M38.9 20 l-1.16 -2.7 l-6.92 0 l-1.16 2.7 l-2.78 0 l6.24 -14 l2.34 0 l6.22 14 l-2.78 0 z M31.740000000000002 15.16 l5.08 0 l-2.54 -5.92 z M68.84 18.5 c-1.26 1.1 -2.9 1.7 -4.76 1.7 c-3.84 0 -7.26 -2.96 -7.26 -7.2 s3.42 -7.2 7.26 -7.2 c1.84 0 3.46 0.6 4.68 1.66 l-1.58 1.8 c-0.8 -0.6 -1.86 -1 -2.94 -1 c-2.6 0 -4.7 1.98 -4.7 4.74 s2.1 4.74 4.7 4.74 c1.1 0 2.2 -0.42 3.02 -1.08 z M87.19999999999999 6 l0 14 l-2.62 0 l0 -14 l2.62 0 z M112.74 6 l2.62 0 l0 14 l-2 0 l-7.3 -9.22 l0 9.22 l-2.62 0 l0 -14 l2.02 0 l7.28 9.24 l0 -9.24 z M144.8 12.64 c0.54 4.66 -2.52 7.56 -6.26 7.56 c-3.92 0 -7.24 -2.96 -7.24 -7.2 s3.4 -7.2 7.24 -7.2 c1.82 0 3.46 0.6 4.68 1.66 l-1.58 1.8 c-0.8 -0.6 -1.86 -1 -2.94 -1 c-2.62 0 -4.68 1.98 -4.68 4.74 s2 4.74 4.52 4.74 c2 0 3.42 -0.8 3.84 -2.86 l-3.48 0 l0 -2.24 l5.9 0 z M190.02 6 l0 2.42 l-3.6 0 l0 11.58 l-2.62 0 l0 -11.58 l-3.58 0 l0 -2.42 l9.8 0 z M208.48000000000002 17.58 l6.1 0 l0 2.42 l-6.5 0 l-2.22 0 l0 -14 l2.62 0 l5.92 0 l0 2.42 l-5.92 0 l0 3.36 l4.5 0 l0 2.36 l-4.5 0 l0 3.44 z M241.34 20 l-1.16 -2.7 l-6.92 0 l-1.16 2.7 l-2.78 0 l6.24 -14 l2.34 0 l6.22 14 l-2.78 0 z M234.18 15.16 l5.08 0 l-2.54 -5.92 z M274.46000000000004 6 l0 14 l-2.7 0 l0 -8.12 l-3.64 8.12 l-2.24 0 l-3.62 -8.08 l0 8.08 l-2.7 0 l0 -14 l2.6 0 l4.86 10.48 l4.84 -10.48 l2.6 0 z"></path></g></svg>
      </Link>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to='/Uvod'>UVOD</NavLink>
        </li>
        <li>
          <NavLink to='/Onas'>O NAS</NavLink>
        </li>
        <li>
          <NavLink to='/Preteky'>PRETEKY</NavLink>
        </li>
        <li>
          <NavLink to='/Kontakt'>KONTAKT</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;