export type Cause = {
  name: string
  blurb: string
}

// TRUTH — the pro bono practice — and the causes / organisations served.
export const TRUTH = {
  acronym: 'TRUTH',
  expansion: 'Together for Rights, Unity, Truth and Humanity',
  description:
    'SLACC’s pro bono project for human-rights and criminal-justice cases — a voice for the people and causes that need one.',
}

export const CAUSES: Cause[] = [
  {
    name: 'The Justice League',
    blurb:
      'Volunteer Legal Associate on the human-rights project of US–British attorney Clive Stafford Smith OBE.',
  },
  {
    name: 'Defence for Human Rights',
    blurb: 'Pro bono legal advisor supporting cases of enforced disappearance and civil liberties.',
  },
  {
    name: 'The Aafia Movement',
    blurb: 'Legal advisory in support of the campaign for the rights and repatriation of Dr Aafia Siddiqui.',
  },
  {
    name: 'Pak–Palestine Forum · Save Gaza',
    blurb: 'Pro bono advisor to the Save Gaza Campaign and allied solidarity initiatives.',
  },
  {
    name: 'Palestine Action Coalition',
    blurb: 'Legal support for peaceful advocacy and humanitarian action.',
  },
  {
    name: 'Saeeda Welfare Organization',
    blurb: 'Pro bono legal advisor to the welfare organisation and its community centre.',
  },
]
