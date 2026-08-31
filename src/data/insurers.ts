export interface Insurer {
  id: string
  name: string
  logo: string
}

export const insurers: Insurer[] = [
  { id: 'axa', name: 'AXA', logo: '/images/insurer-axa.jpg' },
  { id: 'willis', name: 'Willis Towers Watson', logo: '/images/insurer-willis.png' },
  { id: 'saham', name: 'Saham Assurance', logo: '/images/insurer-saham.png' },
  { id: 'gmc', name: 'GMC', logo: '/images/insurer-gmc.png' },
]
