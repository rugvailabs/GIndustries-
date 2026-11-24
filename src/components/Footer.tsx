import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <Image src="/images/logo.png" alt="G Industries logo" width={450} height={300} />
            </div>
            <p>
              A single-source manufacturing partner for Railways, EV, Electronics, Agri-Tech and BESS energy
              storage — Hyderabad, Telangana, India.
            </p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/engineering-design">Engineering &amp; Design</Link></li>
              <li><Link href="/manufacturing-fabrication">Manufacturing &amp; Fabrication</Link></li>
              <li><Link href="/machinery">Machinery &amp; Equipment</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/quality-certifications">Quality &amp; Certifications</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Industries</h5>
            <ul>
              <li><Link href="/industries">Industries We Serve</Link></li>
              <li><Link href="/bess-solutions">BESS Solutions</Link></li>
              <li><Link href="/clients">Clients</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:mvskiran@gindustries.co.in">mvskiran@gindustries.co.in</a></li>
              <li><a href="tel:+918977650585">+91 89776 50585</a></li>
              <li>Gandi Maisamma, Dundigal, Hyderabad</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} G Industries. All rights reserved.</span>
          <span className="certs">ISO 9001:2015 &nbsp;&middot;&nbsp; GST Registered &nbsp;&middot;&nbsp; Udyam/MSME Registered</span>
        </div>
      </div>
    </footer>
  );
}
