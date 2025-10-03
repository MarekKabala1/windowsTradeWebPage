import mkLogo from '../assets/img/MkLogoNoBg.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <nav className="footer-nav-container">
        <div className="footer-logo logo">
          <img src={mkLogo} alt="Logo" />
        </div>
        <div className="nav1 ">
          <h3>
            <span>Useful</span> Pages
          </h3>
          <ul className="footer-nav-links">
            <li>
              <a href="/about"> &gt; About Us</a>
            </li>
            <li>
              <a href="/contact">&gt; Contact</a>
            </li>
            <li>
              <a href="/careers">&gt; Careers</a>
            </li>
            <li>
              <a href="/privacy"> &gt; Privacy Policy</a>{' '}
            </li>
            <li>
              <a href="/terms"> &gt; Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="nav2">
          <h3>
            <span>Services </span>Offered
          </h3>
          <ul className="footer-nav-links">
            <li>
              <a href="/windows"> &gt; Windows Installation</a>
            </li>
            <li>
              <a href="/doors"> &gt; Doors Installation</a>
            </li>

            <li>
              <a href="/repair"> &gt; Repair</a>
            </li>
            <li>
              <a href="/custom"> &gt; Custom Solutions</a>
            </li>
          </ul>
        </div>
        <div className="nav3">
          <h3>
            <span>Office</span> Contact
          </h3>
          <ul className="footer-nav-links">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q152 0 263.5 98T876-538q-20-10-41.5-15.5T790-560q-19-73-68.5-130T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q11 0 20.5 5.5T595-459q-17 27-26 57t-9 62q0 63 32.5 117T659-122q-41 20-86 31t-93 11Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm340 82q-7 0-12-4t-7-10q-11-35-31-65t-43-59q-21-26-34-57t-13-65q0-58 41-99t99-41q58 0 99 41t41 99q0 34-13.5 64.5T873-218q-23 29-43 59t-31 65q-2 6-7 10t-12 4Zm0-113q10-17 22-31.5t23-29.5q14-19 24.5-40.5T860-340q0-33-23.5-56.5T780-420q-33 0-56.5 23.5T700-340q0 24 10.5 45.5T735-254q12 15 23.5 29.5T780-193Zm0-97q-21 0-35.5-14.5T730-340q0-21 14.5-35.5T780-390q21 0 35.5 14.5T830-340q0 21-14.5 35.5T780-290Z" />
              </svg>
              <a href="/contact">WD177ES Borough St Watford, Uk</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
              </svg>
              <a href="/contact">Email: 0dMxW@example.com</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <a href="/contact">Phone: (123) 456-7890</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="footer-info">
        <p>&copy; {currentYear} MK Windows & Doors. All rights reserved.</p>
        <p>Designed by Mk69</p>
      </div>
    </footer>
  );
}
