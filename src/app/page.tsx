import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import {
  IconCube,
  IconWave,
  IconStructural,
  IconSpark,
  IconDroplet,
  IconMagnifierCheck,
  IconRail,
  IconBolt,
  IconChip,
  IconLeaf,
  IconFlask,
  IconShieldBolt,
  IconChain,
  IconShieldCheck,
  IconLayers,
  IconTruckCheck,
  IconGst,
  IconBuilding,
  IconPin,
  IconMail,
  IconPhone,
  IconArrowRight,
} from '@/components/icons';

const CAPABILITIES = [
  { Icon: IconCube, title: 'Advanced CAD Modeling', copy: 'Full 3D parametric design for complex assemblies, custom enclosures, and structural systems — engineered to exact specifications.' },
  { Icon: IconWave, title: 'Finite Element Analysis', copy: 'Stress, thermal, and structural simulation validates every design before a single piece of metal is cut — reducing risk and rework.' },
  { Icon: IconStructural, title: 'Structural Simulation', copy: 'Real-world load-case modelling ensures performance under extreme operational and environmental conditions.' },
  { Icon: IconSpark, title: 'Structural Fabrication', copy: 'Heavy-duty welding, cutting, and assembly for industrial-grade components and systems.' },
  { Icon: IconDroplet, title: 'Surface Treatments', copy: 'Precision machining, coating, and finishing for corrosion resistance and longevity.' },
  { Icon: IconMagnifierCheck, title: 'Rigorous QC Testing', copy: 'Dimensional inspection before every delivery, backed by a documented Quality Management System.' },
];

const PRECISION_ITEMS = [
  { src: '/images/IMG_20261021_104334.jpg', alt: 'Precision-machined stainless steel bracket with sleeve, fabricated at G Industries', label: 'Precision Bracket Assembly' },
  { src: '/images/IMG_20261021_104523.jpg', alt: 'Fabricated stainless steel cone enclosure with mounting flange', label: 'Enclosure Housing' },
  { src: '/images/IMG_20261021_104739.jpg', alt: 'Formed steel bowl-shaped bracket component with bolted mount', label: 'Formed Mount Bracket' },
  { src: '/images/IMG_20261021_104821.jpg', alt: 'Welded stainless steel mesh grille disc component', label: 'Mesh Grille Component' },
  { src: '/images/IMG_20261021_104507.jpg', alt: 'Precision-turned cylindrical pin housing with cross-bolt mounting', label: 'Pin Housing Sleeve' },
];

const INDUSTRIES = [
  { Icon: IconRail, title: 'Railways', copy: 'Registered vendor executing railway tender orders.' },
  { Icon: IconBolt, title: 'Electric Vehicles', copy: 'Precision EV enclosures & structural components.', fillOnly: true },
  { Icon: IconChip, title: 'Electronics', copy: 'Modular enclosures & engineering consoles.' },
  { Icon: IconLeaf, title: 'Agri-Tech', copy: 'Fabrication for agricultural technology systems.' },
  { Icon: IconFlask, title: 'Laboratory Equipment', copy: 'Custom lab enclosures & assemblies.' },
  { Icon: IconShieldBolt, title: 'Switchgear Systems', copy: 'Electrical & switchgear panel fabrication.' },
];

const WHY_ITEMS = [
  { Icon: IconChain, title: 'End-to-End Capability', copy: 'Design, simulation, fabrication, and finishing under one roof.' },
  { Icon: IconShieldCheck, title: 'Certified Quality', copy: 'ISO 9001:2015, GST, and Udyam/MSME registered enterprise.' },
  { Icon: IconLayers, title: 'Multi-Sector Expertise', copy: 'Railways, EV, Electronics, Agri-Tech, Switchgear & more.' },
  { Icon: IconTruckCheck, title: 'Proven Delivery', copy: 'Trusted by BHEL, VEM Technologies, Medha, ECIL & more.' },
];

const MACHINES = [
  { src: '/images/IMG_20261021_105113.jpg', alt: 'Senfeng fiber laser cutting machine on the G Industries shop floor', title: 'Sheet & Pipe Laser Cutting', meta: 'Senfeng, 3 kW · 2024' },
  { src: '/images/IMG_20261021_103106.jpg', alt: 'Hindustan Hydraulics Swift 100-31 CNC press brake machine', title: 'CNC Press Brake', meta: 'Hindustan, 100T · 2024' },
  { src: '/images/IMG_20261021_103828.jpg', alt: 'IPG Photonics LightWeld handheld laser welding system in use', title: 'Laser Welding', meta: '1.5 kW · 2023, 25 & 26' },
  { src: '/images/file_00000000046c820aa9597951eafb2253.png', alt: 'Tinex power press machines and a pillar drilling machine on the shop floor', title: 'Power Press & Drilling', meta: '50T / 20T · Ø36mm · 2024–26' },
  { src: '/images/IMG_20261021_103749.jpg', alt: 'Row of laser welding stations in the LW/002 work area', title: 'Laser Welding Stations', meta: '5 Nos. installed' },
  { src: '/images/IMG_20261021_104031.jpg', alt: 'MIG and TIG welding bay with gas cylinders', title: 'TIG / MIG / ARC Welding', meta: '500A AC/DC · 400A · 200A' },
];

const SPEC_ROWS = [
  ['Sheet Laser Cutting', 'Senfeng, 3 kW', '2024'],
  ['Pipe Laser Cutting', 'Senfeng, 3 kW', '2024'],
  ['Plasma Cutting', 'Power Plus, 100mm', '2020'],
  ['CNC Press Brake', 'Hindustan, 100T', '2024'],
  ['Sheet Rolling', 'Capacity 5mm', '2022'],
  ['Pipe Bending', 'Gujarath, 40mm', '2024'],
  ['Deburring Machine', '75mm Thickness', '2026'],
  ['Laser Welding', "5 Nos., 1.5 kW", '2023, 25 & 26'],
  ['TIG Welding Set', '500 Amp AC/DC', '2023'],
  ['MIG Welding', '5 Nos., 400 A', '2023'],
  ['MIG Welding', '2 Nos., 200 Amp', '2025'],
  ['ARC Welding', '200 Amp', '2023'],
  ['Power Press', '50 Ton', '2026'],
  ['Power Press', '20 Ton', '2025'],
  ['Fly Press', '10', '2024'],
  ['Drilling Machine', 'Ø36 mm', '2025'],
];

const PROJECTS = [
  {
    num: '01',
    client: 'Medha Servo Drives',
    title: 'BESS Container, Railways & EV',
    desc: 'Manufactured custom 10-foot and 20-foot BESS Containers for large-scale energy storage deployments.',
    src: '/images/file_00000000686081fa8ef0d50efda247d2.png',
    alt: 'BESS container chassis fabrication on the shop floor',
    cap: 'Container chassis fabrication, Unit 3',
  },
  {
    num: '02',
    client: 'BHEL',
    title: 'Power Containers',
    desc: 'Successfully delivered two heavy industrial-grade specialized containers for Bharat Heavy Electricals Limited.',
    src: '/images/IMG_20261021_103942.jpg',
    alt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly',
    cap: 'Sheet-metal enclosure fabrication, Unit 1',
  },
  {
    num: '03',
    client: 'VEM Technologies',
    title: 'CNC Machine Body',
    desc: 'Engineered and manufactured a high-precision CNC Machine Body to exacting tolerances.',
    src: '/images/IMG_20261021_104523.jpg',
    alt: 'Precision-machined flanged housing component',
    cap: 'Precision-machined component, ex-works',
  },
];

const CLIENTS_FEATURED = ['Medha Servo Drives', 'BHEL', 'HBL', 'VEM Technologies', 'ECIL'];
const CLIENTS_OTHER = [
  'RCF Kapurthala', 'Medha — Powering Mobility', 'Medha Electrical Contractors', 'Medha Marine',
  'BHEL — R&D Balanagar', 'BHEL — RC Puram', 'Cygni Energy', 'Nexigo Energy', 'Axonify Tech Systems',
  'Hemair Systems', 'Keto Motors', 'Neural Foundry', 'Quantum EV', 'Smart Lab', 'SLN Electricals',
  'Polmon Instruments', 'Rotomag', 'SGD Pharma', 'Stability Automation', 'XMachines', 'Venjay Automation',
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/9ab78c05-093b-405e-9850-54976077abdf.png"
            alt="The G Industries team on the shop floor at the Hyderabad facility, standing in front of a CNC press brake"
          />
        </div>
        <div className="hero-content container">
          <div className="hero-tag">Precision Engineering · Sheet Metal Fabrication · Turnkey Manufacturing</div>
          <h1>
            Engineering the future.
            <br />
            <em>Challenge everything.</em>
          </h1>
          <p className="hero-sub">
            A single-source manufacturing partner bridging conceptual design, structural simulation, heavy
            fabrication and precise post-processing — under one roof in Hyderabad, Telangana.
          </p>
          <div className="hero-actions">
            <a href="#capabilities" className="btn btn-gold">
              Explore Capabilities <IconArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Start a Project
            </a>
          </div>
          <div className="stat-strip">
            <div className="stat">
              <div className="stat-num"><Counter to={2021} noGroup /></div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat">
              <div className="stat-num"><Counter to={40000} /> sqm</div>
              <div className="stat-label">Expansion Land</div>
            </div>
            <div className="stat">
              <div className="stat-num"><Counter to={110} suffix="+" /></div>
              <div className="stat-label">Workforce</div>
            </div>
            <div className="stat-loc">
              Gandi Maisamma, Dundigal
              <br />
              Hyderabad, Telangana, India
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="line"></span>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section-pad" id="about">
        <div className="container about-grid">
          <Reveal className="about-copy">
            <div className="eyebrow">About Us</div>
            <h2>Engineering the future, since 2021.</h2>
            <p>
              <strong>Our Foundation —</strong> Founded in 2021 in Dundigal, Gandi Maisamma, Hyderabad, Telangana,
              G&nbsp;Industries was built to redefine what a manufacturing partner can deliver — from concept to
              completion, under one roof.
            </p>
            <p>
              <strong>Our Mission —</strong> To engineer, fabricate, and post-process industrial solutions that
              challenge industry standards and empower critical infrastructure across sectors, as a registered,
              ISO-certified manufacturing enterprise.
            </p>
            <div className="mini-stats">
              <div className="mini-stat">
                <div className="stat-num">2021</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="mini-stat">
                <div className="stat-num">40,000 sqm</div>
                <div className="stat-label">Expansion Land</div>
              </div>
              <div className="mini-stat">
                <div className="stat-num">110+</div>
                <div className="stat-label">Workforce</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="about-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/IMG_20261021_103203.jpg"
              alt="Raw material racks and laser-cut sheet metal stock on the G Industries fabrication shop floor"
            />
            <div className="about-media-tag">
              <strong>One Partner.</strong> Every capability — design, simulation, fabrication and finishing in a
              single facility.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ENGINEERING CAPABILITIES ============ */}
      <section className="section-pad" id="capabilities" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Our Advantage</div>
            <h2>From complex concepts to rugged realities</h2>
            <p>
              G&nbsp;Industries is a single-source, end-to-end manufacturing partner — bridging conceptual design,
              structural simulation, heavy fabrication, and precise post-processing seamlessly.
            </p>
          </Reveal>

          <Reveal className="process-strip">
            <div className="process-step">
              <div className="num">01</div>
              <h3>Design</h3>
              <p>CAD &amp; Concept</p>
            </div>
            <div className="process-step">
              <div className="num">02</div>
              <h3>Simulate</h3>
              <p>FEA &amp; Analysis</p>
            </div>
            <div className="process-step">
              <div className="num">03</div>
              <h3>Fabricate</h3>
              <p>Sheet Metal &amp; Structural</p>
            </div>
            <div className="process-step">
              <div className="num">04</div>
              <h3>Finish</h3>
              <p>Post-Process &amp; QC</p>
            </div>
          </Reveal>

          <div className="capability-grid reveal-group">
            {CAPABILITIES.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} className="capability-card" index={i}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRECISION STRIP ============ */}
      <section className="section-pad precision-strip">
        <div className="container">
          <Reveal className="kicker-row">
            <div className="section-head" style={{ marginBottom: 'var(--space-4)' }}>
              <div className="eyebrow on-dark">Precision, Component by Component</div>
              <h2>Tolerances that hold under real-world load</h2>
            </div>
          </Reveal>
          <Reveal className="precision-scroll">
            {PRECISION_ITEMS.map((item) => (
              <div className="precision-item" key={item.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} loading="lazy" alt={item.alt} />
                <span>{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ INDUSTRIES SERVED ============ */}
      <section className="section-pad" id="industries">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Industries We Serve</div>
            <h2>Precision components across critical sectors</h2>
            <p>
              From railway infrastructure to next-generation EVs and energy systems, G&nbsp;Industries manufactures
              high-precision components for national and international industries under stringent quality and
              compliance standards.
            </p>
          </Reveal>
          <div className="industry-grid reveal-group">
            {INDUSTRIES.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} className="industry-card" index={i}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BESS ============ */}
      <section className="section-pad bess" id="bess">
        <div className="container bess-grid">
          <Reveal className="bess-media">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/file_00000000686081fa8ef0d50efda247d2.png"
                alt="Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit"
              />
              <figcaption>Container structural base under fabrication — Unit 3, BESS Manufacturing</figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/file_000000005b9481fabfbaf36350a99db5.png"
                alt="Steel I-beam chassis frame for a battery energy storage container, raised on support legs"
              />
              <figcaption>I-beam chassis, engineered for heavy structural loads</figcaption>
            </figure>
          </Reveal>
          <Reveal className="bess-copy">
            <div className="eyebrow">Key Specialization</div>
            <h2>BESS container systems</h2>
            <p>
              G&nbsp;Industries specializes in heavily optimized enclosure systems for Battery Energy Storage
              Systems (BESS) and severe-duty industrial applications — engineered for thermal management,
              structural integrity, and operational safety.
            </p>
            <div className="bess-specs">
              <div className="bess-spec">
                <div className="tag">10 ft</div>
                <div>
                  <h4>Compact BESS Containers</h4>
                  <p>Compact, high-performance energy storage enclosures.</p>
                </div>
              </div>
              <div className="bess-spec">
                <div className="tag">20 ft</div>
                <div>
                  <h4>Full-Scale BESS Containers</h4>
                  <p>Full-scale industrial BESS infrastructure solutions.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FACILITIES ============ */}
      <section className="section-pad" id="facilities" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Facilities</div>
            <h2>Built for scale. Engineered for precision.</h2>
            <p>
              A continuously modernized facility footprint across Hyderabad, purpose-built for heavy fabrication,
              electronics assembly, and BESS container manufacturing.
            </p>
          </Reveal>

          <Reveal className="facility-stats">
            <div className="facility-stat">
              <div className="stat-num">13,000 sft</div>
              <div className="stat-label">Unit 1 Covered Area</div>
            </div>
            <div className="facility-stat">
              <div className="stat-num">10,000 sft</div>
              <div className="stat-label">Unit 2 — Electronics</div>
            </div>
            <div className="facility-stat">
              <div className="stat-num">30,000 sft</div>
              <div className="stat-label">Unit 3 — BESS Container Mfg.</div>
            </div>
            <div className="facility-stat">
              <div className="stat-num">40,000 sft</div>
              <div className="stat-label">Available for Expansion</div>
            </div>
          </Reveal>

          <Reveal className="facility-gallery">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/IMG_20261021_091914.jpg"
                alt="Official G Industries plant layout plan displayed at the facility entrance, showing Shed 2 and Shed 2A"
              />
              <figcaption className="gallery-cap">
                Registered plant layout — Shed 2 / Shed 2A, Sy. 710, Gandimaisamma Mandal, Dundigal
              </figcaption>
            </figure>
            <div className="stack">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/IMG_20261021_103212.jpg" alt="Wide view of the fabrication shop floor aisle with material handling area" />
              </figure>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/file_00000000a890820a9306d10de46aeddb.png" alt="Quality Department entrance with safety signage at the G Industries facility" />
              </figure>
            </div>
            <div className="stack">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/IMG_20261021_103528.jpg" alt="Store Room and Managing Director office entrances on the production floor" />
              </figure>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/IMG_20261021_104031.jpg" alt="MIG welding station near the facility emergency exit with gas cylinders" />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MACHINERY ============ */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Manufacturing Equipment</div>
            <h2>Modern machinery. Precision-grade output.</h2>
            <p>
              A continuously modernized machine shop — anchored by recent (2022–2026) additions — gives
              G&nbsp;Industries the range to cut, weld, form, and finish to exacting tolerances.
            </p>
          </Reveal>

          <div className="machine-grid reveal-group">
            {MACHINES.map((m, i) => (
              <Reveal key={m.title} className="machine-card" index={i}>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.src} loading="lazy" alt={m.alt} />
                </figure>
                <div className="mc-body">
                  <h3>{m.title}</h3>
                  <div className="mc-meta">{m.meta}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Specification</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td className="yr">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY G INDUSTRIES ============ */}
      <section className="section-pad why-strip">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow on-dark">Why G Industries</div>
            <h2 style={{ color: 'var(--white)' }}>Built to be your single-source partner</h2>
          </Reveal>
          <div className="why-grid reveal-group">
            {WHY_ITEMS.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} className="why-card" index={i}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="section-pad" id="projects">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Recent Track Record</div>
            <h2>Proven capabilities. Delivered.</h2>
            <p>
              From energy storage to heavy industrial machinery, G&nbsp;Industries has a growing portfolio of
              high-stakes, high-precision deliveries.
            </p>
          </Reveal>
          <div className="project-list reveal-group">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.num} className="project-row" index={i}>
                <div className="pnum">{p.num}</div>
                <div>
                  <div className="client">{p.client}</div>
                  <h3>{p.title}</h3>
                </div>
                <p className="desc">{p.desc}</p>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} loading="lazy" alt={p.alt} />
                  <figcaption>{p.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Accreditations</div>
            <h2>Registered, certified, compliant</h2>
            <p>
              G&nbsp;Industries operates as a formally registered manufacturing enterprise, holding current
              certifications across quality, tax, and government enterprise classifications.
            </p>
          </Reveal>
          <div className="cert-grid reveal-group">
            <Reveal className="cert-card" index={0}>
              <div className="icon">
                <IconShieldCheck />
              </div>
              <h3>ISO 9001:2015</h3>
              <p>Quality Management System certification for all fabrication works and manufacture of electronic &amp; electrical enclosures.</p>
              <span className="cert-no">Cert. No. QMS-MMXXII-04-12580 · Valid through Apr 2029</span>
            </Reveal>
            <Reveal className="cert-card" index={1}>
              <div className="icon">
                <IconGst />
              </div>
              <h3>GST Registered</h3>
              <p>Registered under Form GST REG-06 as a proprietorship enterprise in Telangana.</p>
              <span className="cert-no">Reg. No. 36CIXPM4532Q1Z8</span>
            </Reveal>
            <Reveal className="cert-card" index={2}>
              <div className="icon">
                <IconBuilding />
              </div>
              <h3>Udyam / MSME Registered</h3>
              <p>Classified as a Micro Enterprise under the Ministry of MSME, Government of India — Manufacturing.</p>
              <span className="cert-no">UDYAM-TS-20-0052717</span>
            </Reveal>
          </div>
          <Reveal>
            <blockquote className="quality-quote">
              &ldquo;At G&nbsp;Industries, we focus on customer satisfaction by manufacturing and supplying
              high-quality engineering and fabrication products that consistently meet customer requirements —
              fostering employee competency and continually improving the effectiveness of our Quality Management
              System.&rdquo;
              <cite>Quality Policy, G Industries</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="section-pad clients" id="clients">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Our Valued Customers</div>
            <h2>Trusted by industry leaders</h2>
            <p>
              From railway PSUs and defence-linked enterprises to EV innovators and energy pioneers,
              G&nbsp;Industries is proud to serve 25+ organizations across India&apos;s most demanding sectors.
            </p>
          </Reveal>
          <Reveal className="client-wall">
            {CLIENTS_FEATURED.map((c) => (
              <span className="client-pill featured" key={c}>{c}</span>
            ))}
            {CLIENTS_OTHER.map((c) => (
              <span className="client-pill" key={c}>{c}</span>
            ))}
          </Reveal>
          <Reveal className="client-note">
            <p style={{ margin: 0 }}>
              <strong>Registered vendor</strong> — Railway Tenders &nbsp;|&nbsp; Engaging with Defence Sector Projects
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="section-pad contact-cta" id="contact">
        <div className="bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/IMG_20261021_103212.jpg" alt="" />
        </div>
        <div className="container contact-inner">
          <Reveal className="eyebrow on-dark">Get In Touch</Reveal>
          <Reveal>
            <h2>
              Challenge everything
              <br />
              with <em>G Industries.</em>
            </h2>
          </Reveal>
          <Reveal>
            <p>
              Ready to elevate your next project? Partner with a manufacturer built to meet the most demanding
              engineering challenges — end to end.
            </p>
          </Reveal>
          <Reveal className="contact-actions">
            <a href="mailto:mvskiran@gindustries.co.in" className="btn btn-gold">
              Email Us <IconArrowRight />
            </a>
            <a href="tel:+918977650585" className="btn btn-outline-light">
              Call +91 89776 50585
            </a>
          </Reveal>
          <Reveal className="contact-grid">
            <div className="contact-item">
              <div className="icon">
                <IconPin />
              </div>
              <h4>Location</h4>
              <p>
                Gandi Maisamma, Dundigal,
                <br />
                Hyderabad, Telangana 500043
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <IconMail />
              </div>
              <h4>Email</h4>
              <a href="mailto:mvskiran@gindustries.co.in">mvskiran@gindustries.co.in</a>
              <a href="mailto:gindustries.md@gmail.com">gindustries.md@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="icon">
                <IconPhone />
              </div>
              <h4>Phone</h4>
              <a href="tel:+918977650585">+91 89776 50585</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
