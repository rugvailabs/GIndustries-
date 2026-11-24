const PHONE = '918977650585';
const MESSAGE = "Hi G Industries, I'd like to know more about your products and services.";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.78.47 3.44 1.28 4.88L2 22l5.35-1.4a9.9 9.9 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.44 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.13h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.17.83.85-3.1-.2-.32a7.95 7.95 0 0 1-1.22-4.29c0-4.4 3.58-7.98 7.99-7.98 2.13 0 4.14.83 5.65 2.34a7.93 7.93 0 0 1 2.34 5.65c0 4.4-3.59 7.99-7.99 7.99z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with G Industries on WhatsApp"
    >
      <span className="whatsapp-float-icon">
        <IconWhatsApp />
      </span>
    </a>
  );
}
