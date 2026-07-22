// src/app/page.jsx — Home institucional enxuta
import HeroSlider    from '@/components/sections/HeroSlider/HeroSlider'
import SobreEmpresa  from '@/components/sections/SobreEmpresa/SobreEmpresa'
import Projetos      from '@/components/sections/Projetos/Projetos'
import ResumoDiferenciais from '@/components/sections/ResumoDiferenciais/ResumoDiferenciais'
import VitrinePreview     from '@/components/sections/VitrinePreview/VitrinePreview'
import Depoimentos   from '@/components/sections/Depoimentos/Depoimentos'
import CtaFooterPin  from '@/components/sections/Cta/CtaFooterPin'
import { DOMINIO } from '@/lib/constants'

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Ibitinga SP',
  description: 'Especialista em cortinas e persianas sob medida em Ibitinga e região desde 2011. Loja da Fábrica com +16 anos, visita técnica mediante agendamento. Nota 5,0 no Google.',
  alternates: {
    canonical: DOMINIO,
  },
}

export default function Home() {
  return (
    <>
      <main>
        <HeroSlider />
        <SobreEmpresa />
        <VitrinePreview />
        <ResumoDiferenciais />
        <Projetos />
       
      
        <Depoimentos />
      </main>
      <CtaFooterPin />
    </>
  )
}
