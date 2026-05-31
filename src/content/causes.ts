export type Cause = {
  name: string
  blurb: string
}

// TRUTH — the pro bono practice — and the causes / organisations served.
export const TRUTH = {
  acronym: 'TRUTH',
  expansion: 'Together for Rights, Unity, Truth and Humanity',
  description:
    'Our pro bono practice for human rights and criminal justice — a voice for those who need one.',
}

export const CAUSES: Cause[] = [
  {
    name: 'The Justice League',
    blurb: 'Volunteer Legal Associate with Clive Stafford Smith OBE’s human-rights project.',
  },
  {
    name: 'Defence for Human Rights',
    blurb: 'Pro bono advisor on enforced-disappearance and civil-liberties cases.',
  },
  {
    name: 'The Aafia Movement',
    blurb: 'Legal advisor to the campaign for Dr Aafia Siddiqui’s rights and repatriation.',
  },
  {
    name: 'Pak–Palestine Forum · Save Gaza',
    blurb: 'Pro bono advisor to the Save Gaza Campaign.',
  },
  {
    name: 'Palestine Action Coalition',
    blurb: 'Legal support for peaceful advocacy and humanitarian action.',
  },
  {
    name: 'Saeeda Welfare Organization',
    blurb: 'Pro bono advisor to the organisation and its community centre.',
  },
]
