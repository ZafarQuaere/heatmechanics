import type { ReactNode } from 'react';

export type IconName = 'arrow' | 'boiler' | 'certificate' | 'pipe' | 'snowflake' | 'cylinder' | 'catering' | 'sun' | 'spark' | 'shield' | 'home' | 'building' | 'check' | 'menu' | 'close' | 'leaf' | 'phone' | 'thermometer';

export function Icon({ name, size = 20, className = '' }: { name: IconName; size?: number; className?: string }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const, className };
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M4 12h15" /><path d="m13 5 7 7-7 7" /></>,
    boiler: <><rect x="5" y="3.5" width="14" height="17" rx="2.5" /><path d="M9 8h6M9 12h6M10 16h4" /><path d="M9 20.5v1M15 20.5v1" /></>,
    certificate: <><path d="M7 3.5h8l4 4v9.2" /><path d="M15 3.5v4h4M7 8.5h5M7 12h6" /><circle cx="16.5" cy="17" r="3.5" /><path d="m14.5 20-1 2.5 3-1 3 1-1-2.5" /></>,
    pipe: <><path d="M7 4v7a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v3" /><path d="M4 4h6M14 20h6M7 4v3M17 17v3" /><circle cx="7" cy="10" r="2" /></>,
    snowflake: <><path d="M12 2v20M4 6l16 12M20 6 4 18" /><path d="m9 4 3 2 3-2M9 20l3-2 3 2M4 10l3-1 1-3M20 14l-3 1-1 3M20 10l-3-1-1-3M4 14l3 1 1 3" /></>,
    cylinder: <><path d="M7 4.5h10M7 19.5h10" /><rect x="6" y="4" width="12" height="16" rx="5" /><path d="M9 9h6M9 14h6M12 1.8v2.5M12 19.7v2.5" /></>,
    catering: <><path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4M8 14h8M7 20v2M17 20v2" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    spark: <><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3L12 3Z" /><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.2 8-8 10-4.8-2-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-7h6v7" /></>,
    building: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" /></>,
    check: <><path d="m5 12.5 4.2 4.2L19 7" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    leaf: <><path d="M20 4c-9 0-14 4-14 10a6 6 0 0 0 6 6c6 0 10-5 8-16Z" /><path d="M4 21c3-5 7-8 12-11" /></>,
    phone: <><path d="M7 3h3l1.5 4-2 1.5a14 14 0 0 0 6 6L17 13l4 1.5v3A3.5 3.5 0 0 1 17.5 21C9 20.5 3.5 15 3 6.5A3.5 3.5 0 0 1 7 3Z" /></>,
    thermometer: <><path d="M14 14.7V5a3 3 0 0 0-6 0v9.7a5 5 0 1 0 6 0Z" /><path d="M11 11v7" /><circle cx="11" cy="18" r="1" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
