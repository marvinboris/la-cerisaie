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
  { id: 'pad', name: 'Port Autonome de Douala', logo: '/images/insurer-pad.png' },
  { id: 'sonara', name: 'SONARA', logo: '/images/insurer-sonara.png' },
  { id: 'olea', name: 'Olea', logo: '/images/insurer-olea.png' },
  { id: 'sanlam', name: 'Sanlam', logo: '/images/insurer-sanlam.png' },
  { id: 'chanas', name: 'Chanas Assurances', logo: '/images/insurer-chanas.png' },
  { id: 'area', name: 'Area Assurances', logo: '/images/insurer-area.png' },
]
