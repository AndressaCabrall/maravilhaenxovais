// src/app/privacidade/page.jsx — Maravilha Cortinas & Persianas
import Link from 'next/link'
import styles from './privacidade.module.css'
import CtaFooterPin from '@/components/sections/Cta/CtaFooterPin'
import { siteConfig } from '@/lib/config'

export const metadata = {
  title:       'Política de Privacidade',
  description: 'Saiba como a Maravilha Cortinas coleta, usa e protege seus dados pessoais.',
  alternates:  { canonical: `${siteConfig.url}/privacidade` },
  robots:      { index: false, follow: false },
}

export default function Privacidade() {
  return (
    <>
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Legal</span>
            </div>
            <h1 className={styles.titulo}>
              Política de{' '}
              <em className={styles.tituloEm}>Privacidade</em>
            </h1>
            <p className={styles.atualizacao}>
              Última atualização: maio de 2026
            </p>
          </header>

          <div className={styles.conteudo}>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>1. Quem somos</h2>
              <p className={styles.texto}>
                A Maravilha Cortinas (Maravilha Pavan Enxovais Ltda) é uma empresa especializada
                em cortinas e persianas sob medida, localizada em Ibitinga/SP, atendendo a cidade
                e toda a região. A responsável pelo tratamento dos seus dados pode ser contatada
                pelo WhatsApp{' '}
                <a
                  href={`https://wa.me/${siteConfig.contact.waNumber}`}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.contact.phone}
                </a>.
              </p>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>2. Quais dados coletamos</h2>
              <p className={styles.texto}>Podemos coletar os seguintes dados pessoais:</p>
              <ul className={styles.lista}>
                <li>Nome e sobrenome</li>
                <li>Número de WhatsApp ou telefone</li>
                <li>Endereço para visita de medição e instalação</li>
                <li>Dados de navegação (via Google Analytics)</li>
                <li>Mensagens enviadas via WhatsApp ou formulários de contato</li>
              </ul>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>3. Como usamos seus dados</h2>
              <p className={styles.texto}>Utilizamos seus dados para:</p>
              <ul className={styles.lista}>
                <li>Responder solicitações de orçamento e agendamento de visitas de medição</li>
                <li>Realizar medições e instalações no endereço informado</li>
                <li>Melhorar a experiência de navegação no site</li>
                <li>Enviar informações sobre produtos, somente com seu consentimento</li>
              </ul>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>4. Base legal para o tratamento</h2>
              <p className={styles.texto}>
                O tratamento dos seus dados é realizado com base na Lei Geral de Proteção
                de Dados (LGPD — Lei nº 13.709/2018), especificamente nas bases legais de
                execução de contrato, legítimo interesse e, quando aplicável, consentimento.
              </p>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>5. Compartilhamento de dados</h2>
              <p className={styles.texto}>
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros
                para fins comerciais. Seus dados podem ser compartilhados apenas com ferramentas
                de análise de tráfego (Google Analytics) e plataformas de mensageria (WhatsApp),
                estritamente necessárias para o funcionamento do serviço.
              </p>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>6. Armazenamento e segurança</h2>
              <p className={styles.texto}>
                Seus dados são armazenados em ambientes seguros e mantidos apenas pelo tempo
                necessário para a finalidade para a qual foram coletados. Adotamos medidas
                técnicas e organizacionais adequadas para proteger seus dados contra acesso
                não autorizado, perda ou destruição.
              </p>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>7. Seus direitos</h2>
              <p className={styles.texto}>De acordo com a LGPD, você tem direito a:</p>
              <ul className={styles.lista}>
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação dos seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
              <p className={styles.texto}>
                Para exercer qualquer um desses direitos, entre em contato pelo WhatsApp{' '}
                <a
                  href={`https://wa.me/${siteConfig.contact.waNumber}`}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.contact.phone}
                </a>.
              </p>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>8. Cookies</h2>
              <p className={styles.texto}>
                Utilizamos cookies para melhorar a experiência de navegação e para análise
                de tráfego via Google Analytics. Você pode recusar os cookies não essenciais
                pelo banner exibido na primeira visita ao site.
              </p>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>9. Alterações nesta política</h2>
              <p className={styles.texto}>
                Esta política pode ser atualizada periodicamente. Recomendamos que você a
                consulte regularmente. A data da última atualização está indicada no topo
                desta página.
              </p>
            </section>

            <section className={styles.bloco}>
              <h2 className={styles.subtitulo}>10. Contato</h2>
              <p className={styles.texto}>
                Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados,
                entre em contato pelo WhatsApp{' '}
                <a
                  href={`https://wa.me/${siteConfig.contact.waNumber}`}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.contact.phone}
                </a>{' '}
                ou pelo Instagram{' '}
                <a
                  href={siteConfig.contact.instagram}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @maravilhaenxovais
                </a>.
              </p>
            </section>

          </div>

          <div className={styles.voltar}>
            <Link href="/" className={styles.btnVoltar}>
              ← Voltar ao site
            </Link>
          </div>

        </div>
      </main>
      <CtaFooterPin />
    </>
  )
}

