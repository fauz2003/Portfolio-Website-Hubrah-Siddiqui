// Short, scannable honours used in the recognition marquee + highlights grid.
export const HONORS: string[] = [
  '“Leader of Tomorrow” — President of Pakistan, 2012',
  'Nestlé “Woman of Strength”, 2009',
  'Committee Leader, National Youth Policy Forum — Govt. of Pakistan, 2020',
  'Workplace Mentor — ACCA, 2017',
  'Runner-up Best Line Manager — Ufone, 2018',
  '100% Merit Scholarship — LL.B (Hons), TILS',
  'Youth Ambassador — “Aman ki Asha” Peace Initiative',
  'Best Team Award — AIESEC, 2013–14',
  'Founder & Manager — Know Your Rights platform',
]

// A few honours given fuller treatment as cards.
export type HonorCard = {
  year: string
  title: string
  detail: string
}

export const HONOR_CARDS: HonorCard[] = [
  {
    year: '2012',
    title: '“Leader of Tomorrow”',
    detail: 'Titled by the President of Pakistan; addressed the Presidency at the PakLOT Youth Summit.',
  },
  {
    year: '2020',
    title: 'National Youth Policy Forum',
    detail: 'Committee Leader, selected for the Government of Pakistan.',
  },
  {
    year: '2009',
    title: 'Nestlé “Woman of Strength”',
    detail: 'Recognised for leadership and community contribution.',
  },
]
