'use client'

import styles            from './ComoFunciona.module.css'
import { PASSOS }        from '@/data/passos'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

export default function ComoFunciona() {
  return (
    <section className={styles.sec} aria-labelledby="como-funciona-titulo">
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Como funciona</span>
            </div>
            <h2 id="como-funciona-titulo" className={styles.titulo}>
              Da consultoria à instalação:{' '}
              <em className={styles.tituloEm}>um projeto, passo a passo.</em>
            </h2>
          </div>
          <p className={styles.sub}>
            Da consultoria personalizada ao acabamento — cada etapa
            pensada pro seu ambiente, cuidada pela nossa equipe.
            Instalação sob consulta.
          </p>
        </div>

        {/* Mobile — vertical com bolinha e linha */}
        <ol className={styles.listaMobile} aria-label="Etapas do processo">
          {PASSOS.map((passo, i) => (
            <li key={i} className={styles.passoMobile}>
              <div className={styles.passoEsquerda}>
                <div className={styles.numCirculo} aria-hidden="true">
                  <span className={styles.num}>{passo.numero}</span>
                </div>
                {i < PASSOS.length - 1 && (
                  <div className={styles.linhaV} aria-hidden="true" />
                )}
              </div>
              <div className={styles.conteudo}>
                <h3 className={styles.passoTitulo}>{passo.titulo}</h3>
                <p className={styles.passoDesc}>{passo.descricao}</p>
                {passo.detalhe && (
                  <span className={styles.badge}>{passo.detalhe}</span>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop — horizontal com bolinha e linha */}
        <div className={styles.listaDesktop} aria-hidden="true">
          {/* Linha com bolinhas */}
          <div className={styles.timeline}>
            {PASSOS.map((passo, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.numCirculo}>
                  <span className={styles.num}>{passo.numero}</span>
                </div>
                {i < PASSOS.length - 1 && (
                  <div className={styles.linhaH} />
                )}
              </div>
            ))}
          </div>
          {/* Conteúdo abaixo das bolinhas */}
          <div className={styles.conteudosDesktop}>
            {PASSOS.map((passo, i) => (
              <div key={i} className={styles.conteudoDesktop}>
                <span className={styles.detalhe}>{passo.detalhe}</span>
                <h3 className={styles.passoTitulo}>{passo.titulo}</h3>
                <p className={styles.passoDesc}>{passo.descricao}</p>
                {i < PASSOS.length - 1 && (
                  <span className={styles.setaDesk} aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaTxt}>Pronta para transformar seu ambiente?</p>
          <a
            href={WHATSAPP_URLS.orcamento}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            aria-label="Fazer consultoria personalizada pelo WhatsApp"
            onClick={() => trackWhatsApp('como-funciona-consultoria')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.521 5.857L0 24l6.335-1.521A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.368l-.357-.213-3.755.901.916-3.653-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Consultoria personalizada
          </a>
        </div>

      </div>
    </section>
  )
}

