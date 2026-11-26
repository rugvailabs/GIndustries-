import Image from 'next/image';
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
import { getPageContent } from '@/lib/content';
import { HOME_DEFAULTS } from '@/content/pages/home';

// Icons are fixed in code (not admin-editable) and paired with their card by position.
const CAPABILITY_ICONS = [IconCube, IconWave, IconStructural, IconSpark, IconDroplet, IconMagnifierCheck];
const INDUSTRY_ICONS = [IconRail, IconBolt, IconChip, IconLeaf, IconFlask, IconShieldBolt];
const WHY_ICONS = [IconChain, IconShieldCheck, IconLayers, IconTruckCheck];

export default async function HomePage() {
  const content = await getPageContent('home', HOME_DEFAULTS);
  const { stats, hero, about, capabilities, precision, industries, bess, facilities, machinery, why, projects, certifications, clients, contactCta } = content;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="hero-media">
          <Image src={hero.image.src} alt={hero.image.alt} fill sizes="100vw" priority quality={80} />
        </div>
        <div className="hero-content container">
          <div className="hero-tag">{hero.tag}</div>
          <h1>
            {hero.titleLine1}
            <br />
            <em>{hero.titleEm}</em>
          </h1>
          <p className="hero-sub">{hero.subtitle}</p>
          <div className="hero-actions">
            <a href={hero.primaryCtaHref} className="btn btn-gold">
              {hero.primaryCtaLabel} <IconArrowRight />
            </a>
            <a href={hero.secondaryCtaHref} className="btn btn-outline-light">
              {hero.secondaryCtaLabel}
            </a>
          </div>
          <div className="stat-strip">
            <div className="stat">
              <div className="stat-num"><Counter to={stats.founded} noGroup /></div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat">
              <div className="stat-num"><Counter to={stats.expansionLandSqm} /> sqm</div>
              <div className="stat-label">Expansion Land</div>
            </div>
            <div className="stat">
              <div className="stat-num"><Counter to={stats.workforce} suffix={stats.workforceSuffix} /></div>
              <div className="stat-label">Workforce</div>
            </div>
            <div className="stat-loc">
              {stats.locationLine1}
              <br />
              {stats.locationLine2}
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
            <div className="eyebrow">{about.eyebrow}</div>
            <h2>{about.heading}</h2>
            <p>
              <strong>{about.foundationLabel}</strong> {about.foundationText}
            </p>
            <p>
              <strong>{about.missionLabel}</strong> {about.missionText}
            </p>
            <div className="mini-stats">
              <div className="mini-stat">
                <div className="stat-num">{stats.founded}</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="mini-stat">
                <div className="stat-num">{stats.expansionLandSqm.toLocaleString('en-IN')} sqm</div>
                <div className="stat-label">Expansion Land</div>
              </div>
              <div className="mini-stat">
                <div className="stat-num">{stats.workforce}{stats.workforceSuffix}</div>
                <div className="stat-label">Workforce</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="about-media">
            <Image src={about.image.src} alt={about.image.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="about-media-tag">
              <strong>{about.mediaTagLabel}</strong> {about.mediaTagText}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ENGINEERING CAPABILITIES ============ */}
      <section className="section-pad" id="capabilities" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{capabilities.eyebrow}</div>
            <h2>{capabilities.heading}</h2>
            <p>{capabilities.intro}</p>
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
            {capabilities.items.map((item, i) => {
              const Icon = CAPABILITY_ICONS[i] ?? CAPABILITY_ICONS[CAPABILITY_ICONS.length - 1];
              return (
                <Reveal key={i} className="capability-card" index={i}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PRECISION STRIP ============ */}
      <section className="section-pad precision-strip">
        <div className="container">
          <Reveal className="kicker-row">
            <div className="section-head" style={{ marginBottom: 'var(--space-4)' }}>
              <div className="eyebrow on-dark">{precision.eyebrow}</div>
              <h2>{precision.heading}</h2>
            </div>
          </Reveal>
          <Reveal className="precision-scroll">
            {precision.items.map((item, i) => (
              <div className="precision-item" key={i}>
                <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 600px) 220px, 25vw" />
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
            <div className="eyebrow">{industries.eyebrow}</div>
            <h2>{industries.heading}</h2>
            <p>{industries.intro}</p>
          </Reveal>
          <div className="industry-grid reveal-group">
            {industries.items.map((item, i) => {
              const Icon = INDUSTRY_ICONS[i] ?? INDUSTRY_ICONS[INDUSTRY_ICONS.length - 1];
              return (
                <Reveal key={i} className="industry-card" index={i}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ BESS ============ */}
      <section className="section-pad bess" id="bess">
        <div className="container bess-grid">
          <Reveal className="bess-media">
            <figure>
              <Image
                src={bess.image1.src}
                alt={bess.image1.alt}
                width={1182}
                height={1330}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'contain', backgroundColor: 'var(--surface-2)' }}
              />
              <figcaption>{bess.caption1}</figcaption>
            </figure>
            <figure>
              <Image
                src={bess.image2.src}
                alt={bess.image2.alt}
                width={1447}
                height={1087}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'contain', backgroundColor: 'var(--surface-2)' }}
              />
              <figcaption>{bess.caption2}</figcaption>
            </figure>
          </Reveal>
          <Reveal className="bess-copy">
            <div className="eyebrow">{bess.eyebrow}</div>
            <h2>{bess.heading}</h2>
            <p>{bess.copy}</p>
            <div className="bess-specs">
              {bess.specs.map((spec, i) => (
                <div className="bess-spec" key={i}>
                  <div className="tag">{spec.tag}</div>
                  <div>
                    <h4>{spec.title}</h4>
                    <p>{spec.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FACILITIES ============ */}
      <section className="section-pad" id="facilities" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{facilities.eyebrow}</div>
            <h2>{facilities.heading}</h2>
            <p>{facilities.intro}</p>
          </Reveal>

          <Reveal className="facility-stats">
            {facilities.stats.map((stat, i) => (
              <div className="facility-stat" key={i}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="facility-gallery">
            <div className="stack">
              {facilities.galleryImages.slice(0, 2).map((g, i) => (
                <figure key={i}>
                  <Image src={g.image.src} alt={g.image.alt} width={1800} height={2400} sizes="(max-width: 900px) 50vw, 28vw" />
                </figure>
              ))}
            </div>
            <div className="stack">
              {facilities.galleryImages.slice(2, 4).map((g, i) => (
                <figure key={i}>
                  <Image src={g.image.src} alt={g.image.alt} width={1800} height={2400} sizes="(max-width: 900px) 50vw, 28vw" />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MACHINERY ============ */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{machinery.eyebrow}</div>
            <h2>{machinery.heading}</h2>
            <p>{machinery.intro}</p>
          </Reveal>

          <div className="machine-grid reveal-group">
            {machinery.machines.map((m, i) => (
              <Reveal key={i} className="machine-card" index={i}>
                <figure>
                  <Image src={m.image.src} alt={m.image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
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
                {machinery.specRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.equipment}</td>
                    <td>{row.spec}</td>
                    <td className="yr">{row.year}</td>
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
            <div className="eyebrow on-dark">{why.eyebrow}</div>
            <h2 style={{ color: 'var(--white)' }}>{why.heading}</h2>
          </Reveal>
          <div className="why-grid reveal-group">
            {why.items.map((item, i) => {
              const Icon = WHY_ICONS[i] ?? WHY_ICONS[WHY_ICONS.length - 1];
              return (
                <Reveal key={i} className="why-card" index={i}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="section-pad" id="projects">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{projects.eyebrow}</div>
            <h2>{projects.heading}</h2>
            <p>{projects.intro}</p>
          </Reveal>
          <div className="project-list reveal-group">
            {projects.items.map((p, i) => (
              <Reveal key={i} className="project-row" index={i}>
                <div className="pnum">{p.num}</div>
                <div>
                  <div className="client">{p.client}</div>
                  <h3>{p.title}</h3>
                </div>
                <p className="desc">{p.desc}</p>
                <figure>
                  <div className="figure-media">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
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
            <div className="eyebrow">{certifications.eyebrow}</div>
            <h2>{certifications.heading}</h2>
            <p>{certifications.intro}</p>
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
              &ldquo;{certifications.quote}&rdquo;
              <cite>{certifications.quoteCite}</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="section-pad clients" id="clients">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{clients.eyebrow}</div>
            <h2>{clients.heading}</h2>
            <p>{clients.intro}</p>
          </Reveal>
          <Reveal className="client-wall">
            {clients.featured.map((c, i) => (
              <span className="client-pill featured" key={`f${i}`}>{c.name}</span>
            ))}
            {clients.other.map((c, i) => (
              <span className="client-pill" key={`o${i}`}>{c.name}</span>
            ))}
          </Reveal>
          <Reveal className="client-note">
            <p style={{ margin: 0 }}>{clients.note}</p>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="section-pad contact-cta" id="contact">
        <div className="bg">
          <Image src={contactCta.backgroundImage.src} alt={contactCta.backgroundImage.alt} fill sizes="100vw" quality={70} />
        </div>
        <div className="container contact-inner">
          <Reveal className="eyebrow on-dark">Get In Touch</Reveal>
          <Reveal>
            <h2>{contactCta.heading}</h2>
          </Reveal>
          <Reveal>
            <p>{contactCta.subcopy}</p>
          </Reveal>
          <Reveal className="contact-actions">
            <a href={`mailto:${contactCta.email}`} className="btn btn-gold">
              Email Us <IconArrowRight />
            </a>
            <a href={`tel:${contactCta.phone.replace(/\s+/g, '')}`} className="btn btn-outline-light">
              Call {contactCta.phone}
            </a>
          </Reveal>
          <Reveal className="contact-grid">
            <div className="contact-item">
              <div className="icon">
                <IconPin />
              </div>
              <h4>Location</h4>
              <p>
                {contactCta.addressLine1}
                <br />
                {contactCta.addressLine2}
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <IconMail />
              </div>
              <h4>Email</h4>
              <a href={`mailto:${contactCta.email}`}>{contactCta.email}</a>
              <a href={`mailto:${contactCta.email2}`}>{contactCta.email2}</a>
            </div>
            <div className="contact-item">
              <div className="icon">
                <IconPhone />
              </div>
              <h4>Phone</h4>
              <a href={`tel:${contactCta.phone.replace(/\s+/g, '')}`}>{contactCta.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
