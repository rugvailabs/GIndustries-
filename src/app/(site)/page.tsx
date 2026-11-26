import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
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

// Facility gallery photos are portrait/landscape shots force-cropped into squares —
// shift the crop toward each photo's actual subject instead of the default center.
const GALLERY_OBJECT_POSITIONS = ['center 20%', 'center 25%', 'center 35%', 'center 15%'];

export default async function HomePage() {
  const content = await getPageContent('home', HOME_DEFAULTS);
  const { stats, hero, about, capabilities, precision, industries, bess, facilities, machinery, why, projects, certifications, clients, contactCta } = content;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="hero-media">
          <EditableImage slug="home" path="hero.image" src={hero.image.src} alt={hero.image.alt} fill sizes="100vw" priority quality={80} />
        </div>
        <div className="hero-content container">
          <div className="hero-tag"><EditableText slug="home" path="hero.tag">{hero.tag}</EditableText></div>
          <h1>
            <EditableText slug="home" path="hero.titleLine1">{hero.titleLine1}</EditableText>
            <br />
            <em><EditableText slug="home" path="hero.titleEm">{hero.titleEm}</EditableText></em>
          </h1>
          <p className="hero-sub"><EditableText slug="home" path="hero.subtitle" multiline>{hero.subtitle}</EditableText></p>
          <div className="hero-actions">
            <a href={hero.primaryCtaHref} className="btn btn-gold">
              <EditableText slug="home" path="hero.primaryCtaLabel">{hero.primaryCtaLabel}</EditableText> <IconArrowRight />
            </a>
            <a href={hero.secondaryCtaHref} className="btn btn-outline-light">
              <EditableText slug="home" path="hero.secondaryCtaLabel">{hero.secondaryCtaLabel}</EditableText>
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
              <EditableText slug="home" path="stats.locationLine1">{stats.locationLine1}</EditableText>
              <br />
              <EditableText slug="home" path="stats.locationLine2">{stats.locationLine2}</EditableText>
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
            <div className="eyebrow"><EditableText slug="home" path="about.eyebrow">{about.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="about.heading">{about.heading}</EditableText></h2>
            <p>
              <strong><EditableText slug="home" path="about.foundationLabel">{about.foundationLabel}</EditableText></strong>{' '}
              <EditableText slug="home" path="about.foundationText" multiline>{about.foundationText}</EditableText>
            </p>
            <p>
              <strong><EditableText slug="home" path="about.missionLabel">{about.missionLabel}</EditableText></strong>{' '}
              <EditableText slug="home" path="about.missionText" multiline>{about.missionText}</EditableText>
            </p>
            <div className="mini-stats">
              <div className="mini-stat">
                <div className="stat-num"><EditableText slug="home" path="stats.founded" numeric>{stats.founded}</EditableText></div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="mini-stat">
                <div className="stat-num"><EditableText slug="home" path="stats.expansionLandSqm" numeric>{stats.expansionLandSqm}</EditableText> sqm</div>
                <div className="stat-label">Expansion Land</div>
              </div>
              <div className="mini-stat">
                <div className="stat-num"><EditableText slug="home" path="stats.workforce" numeric>{stats.workforce}</EditableText><EditableText slug="home" path="stats.workforceSuffix">{stats.workforceSuffix}</EditableText></div>
                <div className="stat-label">Workforce</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="about-media">
            <EditableImage slug="home" path="about.image" src={about.image.src} alt={about.image.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="about-media-tag">
              <strong><EditableText slug="home" path="about.mediaTagLabel">{about.mediaTagLabel}</EditableText></strong>{' '}
              <EditableText slug="home" path="about.mediaTagText">{about.mediaTagText}</EditableText>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ENGINEERING CAPABILITIES ============ */}
      <section className="section-pad" id="capabilities" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow"><EditableText slug="home" path="capabilities.eyebrow">{capabilities.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="capabilities.heading">{capabilities.heading}</EditableText></h2>
            <p><EditableText slug="home" path="capabilities.intro" multiline>{capabilities.intro}</EditableText></p>
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
                  <h3><EditableText slug="home" path={`capabilities.items.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug="home" path={`capabilities.items.${i}.copy`} multiline>{item.copy}</EditableText></p>
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
              <div className="eyebrow on-dark"><EditableText slug="home" path="precision.eyebrow">{precision.eyebrow}</EditableText></div>
              <h2><EditableText slug="home" path="precision.heading">{precision.heading}</EditableText></h2>
            </div>
          </Reveal>
          <Reveal className="precision-scroll">
            {precision.items.map((item, i) => (
              <div className="precision-item" key={i}>
                <EditableImage slug="home" path={`precision.items.${i}.image`} src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 600px) 220px, 25vw" />
                <span><EditableText slug="home" path={`precision.items.${i}.label`}>{item.label}</EditableText></span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ INDUSTRIES SERVED ============ */}
      <section className="section-pad" id="industries">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow"><EditableText slug="home" path="industries.eyebrow">{industries.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="industries.heading">{industries.heading}</EditableText></h2>
            <p><EditableText slug="home" path="industries.intro" multiline>{industries.intro}</EditableText></p>
          </Reveal>
          <div className="industry-grid reveal-group">
            {industries.items.map((item, i) => {
              const Icon = INDUSTRY_ICONS[i] ?? INDUSTRY_ICONS[INDUSTRY_ICONS.length - 1];
              return (
                <Reveal key={i} className="industry-card" index={i}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3><EditableText slug="home" path={`industries.items.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug="home" path={`industries.items.${i}.copy`} multiline>{item.copy}</EditableText></p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ BESS ============ */}
      <section className="section-pad bess" id="bess">
        <div className="container bess-grid">
          <Reveal className="home-bess-media">
            <figure>
              <EditableImage
                slug="home"
                path="bess.image1"
                src={bess.image1.src}
                alt={bess.image1.alt}
                width={1182}
                height={1330}
                sizes="(max-width: 760px) 50vw, 25vw"
              />
              <figcaption><EditableText slug="home" path="bess.caption1">{bess.caption1}</EditableText></figcaption>
            </figure>
            <figure>
              <EditableImage
                slug="home"
                path="bess.image2"
                src={bess.image2.src}
                alt={bess.image2.alt}
                width={1447}
                height={1087}
                sizes="(max-width: 760px) 50vw, 25vw"
              />
              <figcaption><EditableText slug="home" path="bess.caption2">{bess.caption2}</EditableText></figcaption>
            </figure>
          </Reveal>
          <Reveal className="bess-copy">
            <div className="eyebrow"><EditableText slug="home" path="bess.eyebrow">{bess.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="bess.heading">{bess.heading}</EditableText></h2>
            <p><EditableText slug="home" path="bess.copy" multiline>{bess.copy}</EditableText></p>
            <div className="bess-specs">
              {bess.specs.map((spec, i) => (
                <div className="bess-spec" key={i}>
                  <div className="tag"><EditableText slug="home" path={`bess.specs.${i}.tag`}>{spec.tag}</EditableText></div>
                  <div>
                    <h4><EditableText slug="home" path={`bess.specs.${i}.title`}>{spec.title}</EditableText></h4>
                    <p><EditableText slug="home" path={`bess.specs.${i}.copy`} multiline>{spec.copy}</EditableText></p>
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
            <div className="eyebrow"><EditableText slug="home" path="facilities.eyebrow">{facilities.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="facilities.heading">{facilities.heading}</EditableText></h2>
            <p><EditableText slug="home" path="facilities.intro" multiline>{facilities.intro}</EditableText></p>
          </Reveal>

          <Reveal className="facility-stats">
            {facilities.stats.map((stat, i) => (
              <div className="facility-stat" key={i}>
                <div className="stat-num"><EditableText slug="home" path={`facilities.stats.${i}.num`}>{stat.num}</EditableText></div>
                <div className="stat-label"><EditableText slug="home" path={`facilities.stats.${i}.label`}>{stat.label}</EditableText></div>
              </div>
            ))}
          </Reveal>

          <Reveal className="home-facility-gallery">
            {facilities.galleryImages.map((g, i) => (
              <figure key={i}>
                <EditableImage
                  slug="home"
                  path={`facilities.galleryImages.${i}.image`}
                  src={g.image.src}
                  alt={g.image.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  style={{ objectPosition: GALLERY_OBJECT_POSITIONS[i] ?? 'center' }}
                />
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ MACHINERY ============ */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow"><EditableText slug="home" path="machinery.eyebrow">{machinery.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="machinery.heading">{machinery.heading}</EditableText></h2>
            <p><EditableText slug="home" path="machinery.intro" multiline>{machinery.intro}</EditableText></p>
          </Reveal>

          <div className="machine-grid reveal-group">
            {machinery.machines.map((m, i) => (
              <Reveal key={i} className="machine-card" index={i}>
                <figure>
                  <EditableImage slug="home" path={`machinery.machines.${i}.image`} src={m.image.src} alt={m.image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </figure>
                <div className="mc-body">
                  <h3><EditableText slug="home" path={`machinery.machines.${i}.title`}>{m.title}</EditableText></h3>
                  <div className="mc-meta"><EditableText slug="home" path={`machinery.machines.${i}.meta`}>{m.meta}</EditableText></div>
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
                    <td><EditableText slug="home" path={`machinery.specRows.${i}.equipment`}>{row.equipment}</EditableText></td>
                    <td><EditableText slug="home" path={`machinery.specRows.${i}.spec`}>{row.spec}</EditableText></td>
                    <td className="yr"><EditableText slug="home" path={`machinery.specRows.${i}.year`}>{row.year}</EditableText></td>
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
            <div className="eyebrow on-dark"><EditableText slug="home" path="why.eyebrow">{why.eyebrow}</EditableText></div>
            <h2 style={{ color: 'var(--white)' }}><EditableText slug="home" path="why.heading">{why.heading}</EditableText></h2>
          </Reveal>
          <div className="why-grid reveal-group">
            {why.items.map((item, i) => {
              const Icon = WHY_ICONS[i] ?? WHY_ICONS[WHY_ICONS.length - 1];
              return (
                <Reveal key={i} className="why-card" index={i}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3><EditableText slug="home" path={`why.items.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug="home" path={`why.items.${i}.copy`} multiline>{item.copy}</EditableText></p>
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
            <div className="eyebrow"><EditableText slug="home" path="projects.eyebrow">{projects.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="projects.heading">{projects.heading}</EditableText></h2>
            <p><EditableText slug="home" path="projects.intro" multiline>{projects.intro}</EditableText></p>
          </Reveal>
          <div className="project-list reveal-group">
            {projects.items.map((p, i) => (
              <Reveal key={i} className="project-row" index={i}>
                <div className="pnum"><EditableText slug="home" path={`projects.items.${i}.num`}>{p.num}</EditableText></div>
                <div>
                  <div className="client"><EditableText slug="home" path={`projects.items.${i}.client`}>{p.client}</EditableText></div>
                  <h3><EditableText slug="home" path={`projects.items.${i}.title`}>{p.title}</EditableText></h3>
                </div>
                <p className="desc"><EditableText slug="home" path={`projects.items.${i}.desc`} multiline>{p.desc}</EditableText></p>
                <figure>
                  <div className="figure-media">
                    <EditableImage slug="home" path={`projects.items.${i}.image`} src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                  <figcaption><EditableText slug="home" path={`projects.items.${i}.cap`}>{p.cap}</EditableText></figcaption>
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
            <div className="eyebrow"><EditableText slug="home" path="certifications.eyebrow">{certifications.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="certifications.heading">{certifications.heading}</EditableText></h2>
            <p><EditableText slug="home" path="certifications.intro" multiline>{certifications.intro}</EditableText></p>
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
              &ldquo;<EditableText slug="home" path="certifications.quote" multiline>{certifications.quote}</EditableText>&rdquo;
              <cite><EditableText slug="home" path="certifications.quoteCite">{certifications.quoteCite}</EditableText></cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="section-pad clients" id="clients">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow"><EditableText slug="home" path="clients.eyebrow">{clients.eyebrow}</EditableText></div>
            <h2><EditableText slug="home" path="clients.heading">{clients.heading}</EditableText></h2>
            <p><EditableText slug="home" path="clients.intro" multiline>{clients.intro}</EditableText></p>
          </Reveal>
          <Reveal className="client-wall">
            {clients.featured.map((c, i) => (
              <span className="client-pill featured" key={`f${i}`}><EditableText slug="home" path={`clients.featured.${i}.name`}>{c.name}</EditableText></span>
            ))}
            {clients.other.map((c, i) => (
              <span className="client-pill" key={`o${i}`}><EditableText slug="home" path={`clients.other.${i}.name`}>{c.name}</EditableText></span>
            ))}
          </Reveal>
          <Reveal className="client-note">
            <p style={{ margin: 0 }}><EditableText slug="home" path="clients.note">{clients.note}</EditableText></p>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="section-pad contact-cta" id="contact">
        <div className="bg">
          <EditableImage slug="home" path="contactCta.backgroundImage" src={contactCta.backgroundImage.src} alt={contactCta.backgroundImage.alt} fill sizes="100vw" quality={70} />
        </div>
        <div className="container contact-inner">
          <Reveal className="eyebrow on-dark">Get In Touch</Reveal>
          <Reveal>
            <h2><EditableText slug="home" path="contactCta.heading">{contactCta.heading}</EditableText></h2>
          </Reveal>
          <Reveal>
            <p><EditableText slug="home" path="contactCta.subcopy" multiline>{contactCta.subcopy}</EditableText></p>
          </Reveal>
          <Reveal className="contact-actions">
            <a href={`mailto:${contactCta.email}`} className="btn btn-gold">
              Email Us <IconArrowRight />
            </a>
            <a href={`tel:${contactCta.phone.replace(/\s+/g, '')}`} className="btn btn-outline-light">
              Call <EditableText slug="home" path="contactCta.phone">{contactCta.phone}</EditableText>
            </a>
          </Reveal>
          <Reveal className="contact-grid">
            <div className="contact-item">
              <div className="icon">
                <IconPin />
              </div>
              <h4>Location</h4>
              <p>
                <EditableText slug="home" path="contactCta.addressLine1">{contactCta.addressLine1}</EditableText>
                <br />
                <EditableText slug="home" path="contactCta.addressLine2">{contactCta.addressLine2}</EditableText>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <IconMail />
              </div>
              <h4>Email</h4>
              <a href={`mailto:${contactCta.email}`}><EditableText slug="home" path="contactCta.email">{contactCta.email}</EditableText></a>
              <a href={`mailto:${contactCta.email2}`}><EditableText slug="home" path="contactCta.email2">{contactCta.email2}</EditableText></a>
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
