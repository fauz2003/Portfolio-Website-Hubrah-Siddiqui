export type ExperienceItem = {
  period: string
  role: string
  org: string
  current?: boolean
  details: string[]
}

// Real work history from the CV, most recent first.
export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Dec 2024 — Present',
    role: 'Founding & Managing Partner',
    org: 'Siddiqui Legal Advisors & Corporate Consultants (SLACC) LLP',
    current: true,
    details: [
      'Founded a full-service firm with TRUTH, our pro bono practice for human rights and criminal justice.',
      'Litigator, legal consultant, arbitration counsel and mediator.',
      'Certified trainer in legal and professional capacity-building.',
    ],
  },
  {
    period: 'Apr 2024 — Present',
    role: 'Head of Legal & Company Secretary',
    org: 'Inbox Business Technologies Limited',
    current: true,
    details: [
      'Lead the legal department — its strategy, training and performance.',
      'Own regulatory compliance and Board & shareholder matters as Company Secretary.',
      'Oversee litigation, ADR, contracts and advisory across Pakistan, the UAE and KSA.',
    ],
  },
  {
    period: 'Nov 2019 — Present',
    role: 'Advocate, District & High Courts',
    org: 'Private Practice',
    current: true,
    details: [
      'Pro bono litigator in family, civil, criminal and constitutional matters.',
      'Pro bono advisor to welfare and human-rights organisations.',
      'Volunteer Legal Associate with Clive Stafford Smith OBE’s Justice League.',
    ],
  },
  {
    period: 'Aug 2023 — Apr 2024',
    role: 'Manager, Legal',
    org: 'TCS Group of Companies',
    details: [
      'Corporate advisory for the Board; drafting of contracts, policies and pleadings.',
      'Managed litigation and company-secretarial filings (SECP, PCAA).',
      'Led projects abroad — a company in Uzbekistan, a foundation in Pakistan.',
    ],
  },
  {
    period: 'Oct 2021 — Jul 2023',
    role: 'Sr. Assistant Manager, Legal',
    org: 'TCS Group of Companies',
    details: [
      'Corporate advisory and contract drafting for senior management.',
      'Managed North-region litigation as in-house counsel.',
      'Led cross-border commercial set-up in Dubai.',
    ],
  },
  {
    period: 'Mar 2019 — Oct 2021',
    role: 'Senior Executive — Litigation, Legal & Corporate Affairs',
    org: 'Ufone · PTCL',
    details: [
      'Ran North-region litigation and court proceedings for Ufone and PTCL.',
      'Liaised with law-enforcement and regulatory bodies on compliance.',
      'Built an in-house portal that digitised litigation management.',
    ],
  },
]
