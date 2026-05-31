// Headline qualifications shown as featured cards.
export type KeyCredential = {
  title: string
  issuer: string
}

export const KEY_CREDENTIALS: KeyCredential[] = [
  { title: 'Accredited Mediator', issuer: 'International Mediation Institute (IMI) · via MICADR' },
  { title: 'Certified Corporate Trainer', issuer: 'GEM International, Singapore' },
  { title: 'Certified Corporate Virtual Trainer', issuer: 'GEM International, Singapore' },
  { title: 'LL.B (Hons) — 2:1', issuer: 'University of London · via TILS' },
]

export type EducationItem = {
  period: string
  qualification: string
  school: string
  detail?: string
}

export const EDUCATION: EducationItem[] = [
  {
    period: '2017 — 2019',
    qualification: 'LL.B (Hons), 2:1',
    school: 'University of London (International Programmes) · The Institute of Legal Studies',
    detail: 'Distinction in Jurisprudence · 7 Merits · Class High Achiever’s Award (twice).',
  },
  {
    period: '2018',
    qualification: 'High Performance Collaboration: Leadership, Teamwork & Negotiation',
    school: 'Northwestern University — Kellogg School of Management',
  },
  {
    period: '2012 — 2016',
    qualification: 'BBA — Marketing major, HR minor',
    school: 'National University of Sciences & Technology (NUST)',
    detail: 'CGPA 3.24 / 4.0.',
  },
  {
    period: '2009 — 2011',
    qualification: 'A Levels — 3A*, 1A',
    school: 'Roots College International',
    detail: 'Distinction: Top in Pakistan in A-Level Law · Student of the Year.',
  },
]

// A curated selection of professional certifications (the CV lists 25+).
export const CERTIFICATIONS: string[] = [
  'Digital Forensics & Electronic Evidence',
  'Employment Law Compliance',
  'Trademark Law for Entrepreneurs',
  'Social Media & the Law',
  'Successful Negotiation',
  'Persuasion Psychology & Influence',
  'Critical Thinking',
  'The Seven Habits of Highly Effective People',
  'Women’s Leadership Masterclass — Marshall Goldsmith',
  'Labor Relations for Human Resources',
  'Business Contracts',
  'Legal English',
  'Emotional Intelligence & Conflict Resolution',
  'Effective & Virtual Communication',
]
