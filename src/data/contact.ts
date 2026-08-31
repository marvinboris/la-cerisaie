export interface PhoneLine {
  operator: 'Orange' | 'MTN'
  display: string
  href: string
}

export const phones: PhoneLine[] = [
  { operator: 'Orange', display: '(+237) 699 955 164', href: 'tel:+237699955164' },
  { operator: 'MTN', display: '(+237) 675 853 201', href: 'tel:+237675853201' },
]

export const address = 'Bonapriso, Avenue du Général de Gaulle, Douala'
