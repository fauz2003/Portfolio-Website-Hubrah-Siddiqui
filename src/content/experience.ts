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
      'Founded a full-service law firm with a dedicated pro bono project, TRUTH, for human-rights, civil-rights and criminal-justice cases.',
      'Practising as litigator, legal consultant, arbitration counsel and mediator.',
      'Certified Trainer delivering legal and professional capacity-building.',
    ],
  },
  {
    period: 'Apr 2024 — Present',
    role: 'Head of Legal & Company Secretary',
    org: 'Inbox Business Technologies Limited',
    current: true,
    details: [
      'Leading the legal department and building team skills, training and performance.',
      'Ensuring regulatory compliance and managing Board and Shareholder matters as Company Secretary.',
      'Overseeing litigation, ADR, contracts and corporate advisory — including the company’s international chapters in Dubai and Saudi Arabia.',
    ],
  },
  {
    period: 'Nov 2019 — Present',
    role: 'Advocate, District & High Courts',
    org: 'Private Practice',
    current: true,
    details: [
      'Pro bono litigator across family, civil, criminal and constitutional matters.',
      'Pro bono legal advisor to several welfare and human-rights organisations.',
      'Volunteer Legal Associate at The Justice League — the human-rights project of US–British attorney Clive Stafford Smith OBE.',
    ],
  },
  {
    period: 'Aug 2023 — Apr 2024',
    role: 'Manager, Legal',
    org: 'TCS Group of Companies',
    details: [
      'Corporate advisory for the Board and senior management; drafting and review of contracts, policies, SOPs and pleadings.',
      'Managed litigation as in-house counsel and company-secretarial work, including registrations and regulatory filings (SECP, PCAA).',
      'Led national and international projects, including a company set-up in Uzbekistan and a charitable foundation in Pakistan.',
    ],
  },
  {
    period: 'Oct 2021 — Jul 2023',
    role: 'Sr. Assistant Manager, Legal',
    org: 'TCS Group of Companies',
    details: [
      'Corporate advisory and contract drafting for Board and senior management.',
      'Managed North-region litigation as in-house counsel and supported company-secretarial work.',
      'Led cross-border commercial set-up in Dubai and historic compliance projects.',
    ],
  },
  {
    period: 'Mar 2019 — Oct 2021',
    role: 'Senior Executive — Litigation, Legal & Corporate Affairs',
    org: 'Ufone · PTCL',
    details: [
      'Managed all North-region litigation and court proceedings, ensuring case disposals for Ufone and PTCL.',
      'Liaised with law-enforcement agencies and regulatory bodies on compliance.',
      'Built an in-house portal that digitised the entire litigation-management process for operational efficiency.',
    ],
  },
]
