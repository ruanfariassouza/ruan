export const projects = [
  {
    slug: 'portfolio',
    num: '01',
    name: 'Este Portfólio',
    tags: ['React', 'Three.js', 'GSAP'],
    year: '2025',
    client: 'Projeto Pessoal',
    type: 'Desenvolvimento Web',
    tools: 'React, Three.js, GSAP, Tailwind',
    description: 'Portfólio pessoal construído com foco em experiência imersiva, combinando WebGL, animações avançadas e design editorial.',
    image: '/images/portfolio_cover.jpg',
    gallery: ['/images/portfolio_detail_1.jpg', '/images/portfolio_detail_2.jpg'],
    video: '/videos/screen_recording_site.mp4',
    statement: 'Uma presença digital que transforma código, movimento e narrativa em uma experiência memorável.',
    metrics: [
      { value: '60fps', label: 'Performance' },
      { value: '100', label: 'Lighthouse Score' },
    ],
  },
  {
    slug: 'viva-junto',
    num: '02',
    name: 'Viva Junto',
    tags: ['Branding', 'Social Media', 'App'],
    year: '2025',
    client: 'Viva Junto',
    type: 'Social Media + Branding',
    tools: 'Canva, CapCut, Meta Business Suite',
    description: 'Estratégia de conteúdo e identidade visual para plataforma de conexão comunitária.',
    image: '/images/vivajunto_cover.jpg',
    gallery: ['/images/vivajunto_mockup.png', '/images/vivajunto_detail.jpg'],
    statement: 'Uma identidade próxima, útil e otimista para aproximar pessoas, bairros e iniciativas locais.',
    metrics: [
      { value: '+240%', label: 'Engajamento' },
      { value: '3x', label: 'Crescimento de Seguidores' },
    ],
  },
  {
    slug: 'iflow',
    num: '03',
    name: 'iFlow Self-Repair',
    tags: ['Tech', 'Content', 'Strategy'],
    year: '2025',
    client: 'iFlow',
    type: 'Content Strategy + Social',
    tools: 'Canva, CapCut, ChatGPT',
    description: 'Criação de conteúdo técnico e estratégia digital para empresa de serviços em tecnologia.',
    image: '/images/iflow_cover.jpg',
    gallery: ['/images/iflow_mockup.png', '/images/iflow_detail.jpg'],
    statement: 'Conteúdo técnico traduzido em clareza, confiança e decisões rápidas para quem precisa de suporte.',
    metrics: [
      { value: '+180%', label: 'Alcance Orgânico' },
      { value: '4.8', label: 'Avaliação Média' },
    ],
  },
]

export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
