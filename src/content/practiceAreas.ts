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
      'Representation before the District Courts and High Courts across family, civil, criminal and constitutional matters — built on meticulous case strategy and early risk identification.',
    tags: ['Family', 'Civil', 'Criminal', 'Constitutional'],
    icon: 'gavel',
  },
  {
    no: '02',
    title: 'Mediation & Arbitration',
    description:
      'Accredited Mediator (IMI) and arbitration counsel. Resolving disputes through structured, interest-based negotiation that protects relationships and reaches durable settlements.',
    tags: ['IMI Accredited', 'ADR', 'Arbitration'],
    icon: 'handshake',
  },
  {
    no: '03',
    title: 'Corporate & Commercial Advisory',
    description:
      'Board-level counsel on governance, contracts and commercial strategy — drafting, reviewing and negotiating agreements with a clear, decision-ready voice.',
    tags: ['Governance', 'Contracts', 'Advisory'],
    icon: 'building',
  },
  {
    no: '04',
    title: 'Company Secretarial & Compliance',
    description:
      'Company Secretary practice covering SECP filings, board and shareholder matters, and regulatory compliance — including international chapters in the UAE and KSA.',
    tags: ['SECP', 'Board Matters', 'Regulatory'],
    icon: 'shield',
  },
  {
    no: '05',
    title: 'Human Rights & Pro Bono',
    description:
      'Through TRUTH, a dedicated pro bono practice for human-rights, civil-rights and criminal-justice causes — standing with communities and organisations that need a voice.',
    tags: ['Human Rights', 'Civil Liberties', 'Access to Justice'],
    icon: 'heart',
  },
  {
    no: '06',
    title: 'Corporate Training & Capacity Building',
    description:
      'Certified Corporate Trainer (GEM International, Singapore) delivering workshops on negotiation, communication, leadership and legal awareness for teams and institutions.',
    tags: ['Negotiation', 'Leadership', 'Communication'],
    icon: 'spark',
  },
]
