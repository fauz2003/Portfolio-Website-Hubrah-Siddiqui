export type ServiceIconKey =
  | 'gavel'
  | 'handshake'
  | 'building'
  | 'shield'
  | 'heart'
  | 'spark'

export type Service = {
  no: string
  title: string
  description: string
  tags: string[]
  icon: ServiceIconKey
}

export const SERVICES: Service[] = [
  {
    no: '01',
    title: 'Litigation & Advocacy',
    description:
      'Representation before the District and High Courts — built on sharp case strategy and early risk assessment.',
    tags: ['Family', 'Civil', 'Criminal', 'Constitutional'],
    icon: 'gavel',
  },
  {
    no: '02',
    title: 'Mediation & Arbitration',
    description:
      'Accredited Mediator (IMI) and arbitration counsel — resolving disputes through structured negotiation and durable settlements.',
    tags: ['IMI Accredited', 'ADR', 'Arbitration'],
    icon: 'handshake',
  },
  {
    no: '03',
    title: 'Corporate & Commercial Advisory',
    description:
      'Board-level counsel on governance, contracts and strategy — drafted and negotiated with a clear, decision-ready voice.',
    tags: ['Governance', 'Contracts', 'Advisory'],
    icon: 'building',
  },
  {
    no: '04',
    title: 'Company Secretarial & Compliance',
    description:
      'SECP filings, board and shareholder matters, and regulatory compliance — including chapters in the UAE and KSA.',
    tags: ['SECP', 'Board Matters', 'Regulatory'],
    icon: 'shield',
  },
  {
    no: '05',
    title: 'Human Rights & Pro Bono',
    description:
      'Through TRUTH, a pro bono practice for human-rights and criminal-justice causes — a voice for those who need one.',
    tags: ['Human Rights', 'Civil Liberties', 'Access to Justice'],
    icon: 'heart',
  },
  {
    no: '06',
    title: 'Corporate Training & Capacity Building',
    description:
      'Certified Trainer (GEM International, Singapore) — workshops on negotiation, communication and leadership.',
    tags: ['Negotiation', 'Leadership', 'Communication'],
    icon: 'spark',
  },
]
