// src/app/page.jsx — Home institucional enxuta
import Navbar        from '@/components/layout/Navbar/Navbar'
import Footer        from '@/components/layout/Footer/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat/WhatsAppFloat'
import Preloader     from '@/components/layout/Preloader/Preloader'
import HeroSlider    from '@/components/sections/HeroSlider/HeroSlider'
import Projetos      from '@/components/sections/Projetos/Projetos'
import ResumoDiferenciais from '@/components/sections/ResumoDiferenciais/ResumoDiferenciais'
import VitrinePreview     from '@/components/sections/VitrinePreview/VitrinePreview'
import Depoimentos   from '@/components/sections/Depoimentos/Depoimentos'
import Cta           from '@/components/sections/Cta/Cta'
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
      <Preloader />
      <Navbar />
      <main>
        <HeroSlider />
        <Projetos />
        <ResumoDiferenciais />
        <VitrinePreview />
        <Depoimentos />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
