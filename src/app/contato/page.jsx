// src/app/contato/page.jsx — Maravilha Cortinas
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import styles         from './contato.module.css'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, ENDERECO, HORARIO, DOMINIO } from '@/lib/constants'
import { WHATSAPP_URLS } from '@/lib/whatsapp'

export const metadata = {
  title:       'Contato — Orçamento em Ibitinga SP',
  description: 'Fale com a Maravilha Cortinas: endereço, telefone, horário de funcionamento e WhatsApp. Av. Sete de Setembro, 595, Centro, Ibitinga-SP.',
  keywords:    ['contato Maravilha Cortinas', 'orçamento cortinas Ibitinga', 'telefone Maravilha Cortinas'],
  alternates:  { canonical: `${DOMINIO}/contato` },
}

export default function ContatoPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home',    href: '/' },
        { nome: 'Contato', href: '/contato' },
      ]} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Fale com a gente</span>
            </div>
            <h1 className={styles.titulo}>
              Vamos transformar{' '}
              <em className={styles.tituloEm}>o seu ambiente?</em>
            </h1>
            <p className={styles.sub}>
              Agende sua visita técnica pelo WhatsApp ou venha até a loja. Atendemos Ibitinga e toda a região.
            </p>
          </header>

          <div className={styles.grid}>

            <div className={styles.infoCol}>
              <address className={styles.nap}>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Endereço</span>
                  <span className={styles.napValor}>
                    {ENDERECO.logradouro}<br />
                    {ENDERECO.bairro}, {ENDERECO.cidade}–{ENDERECO.estado}<br />
                    CEP {ENDERECO.cep}
                  </span>
                </div>

                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Telefone / WhatsApp</span>
                  <a href={`tel:${CONTATO.telefoneFormatado}`} className={styles.napLink}>
                    {CONTATO.telefone}
                  </a>
                </div>

                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Horário de funcionamento</span>
                  <span className={styles.napValor}>
                    {HORARIO.semana}<br />
                    {HORARIO.sabado}<br />
                    {HORARIO.domingo}
                  </span>
                </div>

                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Redes sociais</span>
                  <div className={styles.redes}>
                    <a href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.napLink}>
                      Instagram
                    </a>
                    <a href={CONTATO.facebookUrl} target="_blank" rel="noopener noreferrer" className={styles.napLink}>
                      Facebook
                    </a>
                  </div>
                </div>
              </address>

              <a
                href={WHATSAPP_URLS.orcamento}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWa}
              >
                Agendar visita pelo WhatsApp →
              </a>
            </div>

            <div className={styles.mapaCol}>
              <iframe
                title="Localização da Maravilha Cortinas em Ibitinga SP"
                className={styles.mapa}
                src={`https://maps.google.com/maps?q=${ENDERECO.lat},${ENDERECO.lng}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </main>
      <CtaFooterPin />
    </>
  )
}
