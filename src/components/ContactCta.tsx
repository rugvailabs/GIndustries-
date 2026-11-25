import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { IconArrowRight, IconPin, IconMail, IconPhone } from '@/components/icons';

type ContactCtaProps = {
  image?: string;
  heading?: React.ReactNode;
  subcopy?: string;
};

export default function ContactCta({
  image = '/images/9ab78c05-093b-405e-9850-54976077abdf.jpg',
  heading = (
    <>
      Challenge everything
      <br />
      with <em>G Industries.</em>
    </>
  ),
  subcopy = 'Ready to elevate your next project? Partner with a manufacturer built to meet the most demanding engineering challenges — end to end.',
}: ContactCtaProps) {
  return (
    <section className="section-pad contact-cta" id="contact">
      <div className="bg">
        <Image src={image} alt="" fill sizes="100vw" quality={70} />
      </div>
      <div className="container contact-inner">
        <Reveal className="eyebrow on-dark">Get In Touch</Reveal>
        <Reveal>
          <h2>{heading}</h2>
        </Reveal>
        <Reveal>
          <p className="contact-lede">{subcopy}</p>
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
  );
}
