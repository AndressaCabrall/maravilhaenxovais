'use client'

import Image             from 'next/image'
import styles            from './Motorizacao.module.css'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'
import bgImg from '@/assets/images/motorizacao/webp/cortina-motorizada-trilho-automatizado-maravilha-ibitinga-sp.webp'

const RECURSOS = [
  {
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    titulo: 'Controle pelo celular',
    desc:   'Abra e feche de qualquer lugar pelo smartphone.',
  },
  {
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
    titulo: 'Alexa & Google Home',
    desc:   'Compatível com os principais assistentes de voz.',
  },
  {
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    titulo: 'Horários automáticos',
    desc:   'Programe abertura e fechamento por horário.',
  },
  {
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    titulo: 'Motor silencioso',
    desc:   'Operação suave e sem ruído em qualquer ambiente.',
  },
]

export default function Motorizacao() {
  return (
    <section id="motorizacao" className={styles.sec} aria-labelledby="motorizacao-titulo">

      {/* Imagem de fundo */}
      <div className={styles.bgWrap} aria-hidden="true">
        <Image
          src={bgImg}
          alt="cortina-motorizada-trilho-automatizado-maravilha-ibitinga-sp"
          fill
          sizes="100vw"
          className={styles.bgImg}
          priority={false}
        />
      </div>

      {/* Overlay */}
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.inner}>

          <div className={styles.copy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Cortinas & Persianas Motorizadas</span>
            </div>
            <h2 id="motorizacao-titulo" className={styles.titulo}>
              Seu ambiente{' '}
              <em className={styles.tituloEm}>mais inteligente.</em>
            </h2>
            <p className={styles.sub}>
              Acorde com luz natural entrando aos poucos.
              Feche tudo com um comando de voz antes de dormir.
              O detalhe que separa um imóvel comum de um imóvel premium
              em Ibitinga e região.
            </p>

            <ul className={styles.recursos} aria-label="Recursos da motorização">
              {RECURSOS.map((r, i) => (
                <li key={i} className={styles.recurso}>
                  <div className={styles.recursoIco}>{r.icone}</div>
                  <div className={styles.recursoTexto}>
                    <strong className={styles.recursoTitulo}>{r.titulo}</strong>
                    <span className={styles.recursoDesc}>{r.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.acoes}>
              <a
                 href={WHATSAPP_URLS.motorizacao}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={styles.ctaPrimario}
                 aria-label="Solicitar orçamento de motorização pelo WhatsApp"
                 onClick={() => trackWhatsApp('motorizacao-orcamento')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.521 5.857L0 24l6.335-1.521A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.368l-.357-.213-3.755.901.916-3.653-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Solicitar orçamento
              </a>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <div className={styles.visualIcone} aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <p className={styles.visualTitulo}>Motorização</p>
              <p className={styles.visualDesc}>
                Compatível com Alexa, Google Home e controle remoto.
                Motor silencioso instalado por equipe especializada em Ibitinga e região.
              </p>
              <div className={styles.visualBadges}>
                <span className={styles.visualBadge}>Alexa</span>
                <span className={styles.visualBadge}>Google Home</span>
                <span className={styles.visualBadge}>App</span>
                <span className={styles.visualBadge}>Controle remoto</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

