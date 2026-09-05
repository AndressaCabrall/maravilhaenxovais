// src/app/page.jsx — Home institucional enxuta
import HeroSlider    from '@/components/sections/HeroSlider/HeroSlider'
import SobreEmpresa  from '@/components/sections/SobreEmpresa/SobreEmpresa'
import FraseDestaque from '@/components/sections/FraseDestaque/FraseDestaque'
import Projetos      from '@/components/sections/Projetos/Projetos'
import ResumoDiferenciais from '@/components/sections/ResumoDiferenciais/ResumoDiferenciais'
import VitrinePreview     from '@/components/sections/VitrinePreview/VitrinePreview'
import Depoimentos   from '@/components/sections/Depoimentos/Depoimentos'
import CtaFooterPin  from '@/components/sections/Cta/CtaFooterPin'
import { DOMINIO } from '@/lib/constants'

export const metadata = {
  title:       'Ateliê de Cortinas e Persianas Sob Medida em Ibitinga SP',
  description: 'Ateliê especializado em cortinas e persianas sob medida em Ibitinga desde 2011. Consultoria personalizada e projeto sob medida. Nota 5,0 no Google.',
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
        <FraseDestaque />
        <VitrinePreview />
        <ResumoDiferenciais />
        <Projetos />
       
      
        <Depoimentos />
      </main>
      <CtaFooterPin />
    </>
  )
}
