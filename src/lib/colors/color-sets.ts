export interface ColorSet {
  name: string;
  colors: string[];
}

export const BRAND_COLOR_SETS: ColorSet[] = [
  {
    name: 'Brand',
    colors: [
      'tmo-magenta-brand',
      'tmo-magenta-light',
      'tmo-magenta-dark',
      'tmo-magenta-very-dark',
      'tmo-yellow-brand'
    ]
  },
  {
    name: 'Gray',
    colors: [
      'tmo-gray05',
      'tmo-gray10',
      'tmo-gray20',
      'tmo-gray30',
      'tmo-gray40',
      'tmo-gray60',
      'tmo-gray70',
      'tmo-gray80',
      'tmo-gray85'
    ]
  },
  {
    name: 'UI',
    colors: [
      'tmo-black',
      'tmo-white',
      'tmo-green',
      'tmo-green-light',
      'tmo-red',
      'tmo-yellow'
    ]
  }
];
