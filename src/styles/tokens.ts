// Kairo Design Tokens
// Source of truth: Kairo Blueprint. Every component should pull colors from here —
// never hardcode hex values in a component file.

export const color = {
  // Core surfaces
  bg: '#121018',
  surface: '#1A1625',
  surfaceSecondary: '#231D32',
  border: '#322A45',

  // Text
  textPrimary: '#F6F4FC',
  textSecondary: '#B6ADC8',
  textTertiary: 'rgba(182, 173, 200, 0.55)',

  // Brand
  primary: '#8B6CFF',
  primaryHover: '#9A7BFF',
  glow: '#CDB8FF',

  // Deal Status palette (Blueprint, 9-value enum)
  status: {
    unknown: '#8B93A7',
    healthy: '#3DD68C',
    promising: '#4F8CFF',
    atRisk: '#F6B23E',
    critical: '#FF667A',
    stalled: '#C97A2B',
    recovering: '#2EC5B6',
    won: '#28B463',
    lost: '#C84A5A',
  },

  // Semantic risk color — amber is THE risk color across the product
  risk: '#F6B23E',
} as const

export const font = {
  display: `'Fraunces', Georgia, serif`, // headline serif for premium/editorial feel
  body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
  mono: `'IBM Plex Mono', 'SF Mono', monospace`, // eyebrows, data labels
} as const

export const dealStages = [
  'Qualification',
  'Discovery',
  'Demo',
  'Evaluation',
  'Alignment',
  'Proposal',
  'Negotiation',
  'Procurement',
  'Closed Won',
  'Closed Lost',
] as const

export const dealStatuses = [
  { key: 'unknown', label: 'Unknown', color: color.status.unknown },
  { key: 'healthy', label: 'Healthy', color: color.status.healthy },
  { key: 'promising', label: 'Promising', color: color.status.promising },
  { key: 'atRisk', label: 'At Risk', color: color.status.atRisk },
  { key: 'critical', label: 'Critical', color: color.status.critical },
  { key: 'stalled', label: 'Stalled', color: color.status.stalled },
  { key: 'recovering', label: 'Recovering', color: color.status.recovering },
  { key: 'won', label: 'Won', color: color.status.won },
  { key: 'lost', label: 'Lost', color: color.status.lost },
] as const

export const APP_URL = 'https://kairoiq.vercel.app/signup'