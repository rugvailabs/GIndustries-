/* Shared line-icon set (24x24, stroke-based, matches the approved brand style).
   Used inside elements with a `.icon` wrapper class — CSS targets `.icon svg` directly. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconRail() {
  return (
    <svg {...base}>
      <path d="M3 7h18M3 12h18M3 17h18M7 4v16M17 4v16" />
    </svg>
  );
}

export function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

export function IconChip() {
  return (
    <svg {...base}>
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  );
}

export function IconLeaf() {
  return (
    <svg {...base}>
      <path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z" />
      <path d="M4 20 13 11" />
    </svg>
  );
}

export function IconFlask() {
  return (
    <svg {...base}>
      <path d="M10 2h4M10 2v6l-6 11a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-11V2" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function IconShieldBolt() {
  return (
    <svg {...base}>
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5Z" />
      <path d="M13 8l-4 5h3l-1 4 4-5h-3z" />
    </svg>
  );
}

export function IconCube() {
  return (
    <svg {...base}>
      <path d="M12 2 20 6.5V17.5L12 22 4 17.5V6.5Z" />
      <path d="M12 12v10M12 12 20 6.5M12 12 4 6.5" />
    </svg>
  );
}

export function IconWave() {
  return (
    <svg {...base}>
      <path d="M3 3v18h18" />
      <path d="M3 14c2 0 2-6 4-6s2 10 4 10 2-8 4-8 2 4 4 4" />
    </svg>
  );
}

export function IconStructural() {
  return (
    <svg {...base}>
      <path d="M3 17l5-7 4 5 3-4 6 6" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function IconSpark() {
  return (
    <svg {...base}>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" />
    </svg>
  );
}

export function IconDroplet() {
  return (
    <svg {...base}>
      <path d="M12 2s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z" />
    </svg>
  );
}

export function IconMagnifierCheck() {
  return (
    <svg {...base}>
      <circle cx="10" cy="10" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M7 10l2 2 4-4" />
    </svg>
  );
}

export function IconShieldCheck() {
  return (
    <svg {...base}>
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5Z" />
      <path d="M8.5 12l2.5 2.5L16 9" />
    </svg>
  );
}

export function IconGst() {
  return (
    <svg {...base}>
      <path d="M4 4h16v4H4zM4 10h16M8 10v10M16 10v10M4 20h16" />
    </svg>
  );
}

export function IconReceipt() {
  return (
    <svg {...base}>
      <path d="M5 2h14v20l-3-2-2 2-2-2-2 2-2-2-3 2Z" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}

export function IconBuilding() {
  return (
    <svg {...base}>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

export function IconPin() {
  return (
    <svg {...base}>
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg {...base}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.6 21 3 12.4 3 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" />
    </svg>
  );
}

export function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconChain() {
  return (
    <svg {...base}>
      <path d="M8 13 5 16a3 3 0 0 0 4 4l3-3" />
      <path d="M16 11l3-3a3 3 0 0 0-4-4l-3 3" />
      <path d="M9 15l6-6" />
    </svg>
  );
}

export function IconMedal() {
  return (
    <svg {...base}>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
    </svg>
  );
}

export function IconLayers() {
  return (
    <svg {...base}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

export function IconTruckCheck() {
  return (
    <svg {...base}>
      <rect x="1" y="7" width="13" height="10" />
      <path d="M14 10h4l3 3v4h-7" />
      <circle cx="6" cy="19" r="1.6" />
      <circle cx="16.5" cy="19" r="1.6" />
    </svg>
  );
}

export function IconCheckCircle() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9" />
    </svg>
  );
}

export function IconClock() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconTarget() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function IconGrid() {
  return (
    <svg {...base}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

export function IconUsers() {
  return (
    <svg {...base}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
      <circle cx="18" cy="9" r="2.4" />
      <path d="M15.5 20c.2-2.6 1.8-4.6 4-5.3" />
    </svg>
  );
}

export function IconDocCheck() {
  return (
    <svg {...base}>
      <path d="M7 2h8l4 4v16H7Z" />
      <path d="M15 2v4h4" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  );
}
