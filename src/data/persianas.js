// src/data/persianas.js
// Maravilha Cortinas & Persianas — Ibitinga/SP

import telaSolar    from '@/assets/images/persianas/webp/persiana-tela-solar-sob-medida-ibitinga-sp.webp'
import telaSolarVao from '@/assets/images/persianas/webp/persiana-tela-solar-dentro-vao-ibitinga-sp.webp'
import blackout     from '@/assets/images/persianas/webp/persiana-blackout-sob-medida-ibitinga-sp.webp'
import doubleVision from '@/assets/images/persianas/webp/persiana-double-vision-sob-medida-ibitinga-sp.webp'
import rolo         from '@/assets/images/persianas/webp/persiana-rolo-sob-medida-ibitinga-sp.webp'
import roloBox      from '@/assets/images/persianas/webp/persiana-rolo-blackout-caixa-box-sob-medida-ibitinga-sp.webp'
import horizontal   from '@/assets/images/persianas/webp/persiana-horizontal-50mm-fita-sob-medida-ibitinga-sp.webp'
import painel       from '@/assets/images/persianas/webp/persiana-painel-translucida-sob-medida-ibitinga-sp.webp'

export const PERSIANAS = [
  {
    id:       'tela-solar',
    slug:     'persiana-tela-solar',
    nome:     'Persiana Tela Solar',
    tagline:  'Vista desobstruída com conforto térmico',
    descricao:'Filtra até 90% do calor e da radiação UV sem bloquear a paisagem. A escolha número um para salas, escritórios e varandas em Ibitinga e região.',
    destaque: 'Mais pedida',
    beneficios: [
      'Filtra até 90% do calor e UV',
      'Mantém a vista desobstruída',
      'Reduz o custo com ar-condicionado',
      'Produzida sob medida por janela',
    ],
    imagem: telaSolar,
    alt: 'Persiana tela solar sob medida em sala — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana Tela Solar sob medida. Pode me passar mais informações?',
  },
  {
    id:       'tela-solar-vao',
    slug:     'persiana-tela-solar-dentro-vao',
    nome:     'Persiana Tela Solar Dentro do Vão',
    tagline:  'Instalação embutida, visual limpo',
    descricao:'Instalada dentro do vão da janela para um acabamento embutido e sofisticado. Filtra o calor e o brilho sem comprometer o visual da janela — ideal para projetos de arquitetura e decoração.',
    destaque: 'Acabamento premium',
    beneficios: [
      'Instalação dentro do vão da janela',
      'Visual embutido e sofisticado',
      'Filtra calor e radiação UV',
      'Ideal para projetos de arquitetura',
    ],
    imagem: telaSolarVao,
    alt: 'Persiana tela solar instalada dentro do vão da janela — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana Tela Solar dentro do vão. Pode me passar mais informações?',
  },
  {
    id:       'blackout',
    slug:     'persiana-blackout',
    nome:     'Persiana Blackout',
    tagline:  'Escuridão total, conforto real',
    descricao:'Bloqueio total de luz e calor. Ideal para quartos de bebê, home theater e qualquer ambiente que exige privacidade e controle de temperatura ao longo do dia.',
    destaque: 'Mais buscada',
    beneficios: [
      'Bloqueio total de luz 100%',
      'Reduz calor e ruído externo',
      'Ideal para quarto de bebê e casal',
      'Produzida sob medida',
    ],
    imagem: blackout,
    alt: 'Persiana blackout sob medida em quarto — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana Blackout sob medida. Pode me passar mais informações?',
  },
  {
    id:       'double-vision',
    slug:     'persiana-double-vision',
    nome:     'Persiana Double Vision',
    tagline:  'Dois em um, dia e noite',
    descricao:'Faixas alternadas que você controla — abertas para luz natural ou fechadas para privacidade total. O modelo mais moderno e versátil, febre nos apartamentos e casas novas da região.',
    destaque: 'Tendência',
    beneficios: [
      'Regulagem precisa de luz e privacidade',
      'Visual moderno e diferenciado',
      'Funciona perfeitamente dia e noite',
      'Disponível em versão motorizada',
    ],
    imagem: doubleVision,
    alt: 'Persiana Double Vision sob medida em sala moderna — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana Double Vision sob medida. Pode me passar mais informações?',
  },
  {
    id:       'rolo',
    slug:     'persiana-rolo',
    nome:     'Persiana Rolô',
    tagline:  'Minimalismo inteligente',
    descricao:'Minimalista, prática e moderna. Visual clean sem abrir mão do conforto. Fácil de usar, fácil de limpar e produzida sob medida — disponível em blackout e translúcida.',
    destaque: null,
    beneficios: [
      'Visual clean e minimalista',
      'Fácil manuseio no dia a dia',
      'Disponível em blackout e translúcida',
      'Excelente custo-benefício',
    ],
    imagem: rolo,
    alt: 'Persiana Rolô sob medida — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana Rolô sob medida. Pode me passar mais informações?',
  },
  {
    id:       'rolo-blackout-caixa-box',
    slug:     'persiana-rolo-blackout-caixa-box',
    nome:     'Persiana Rolô Blackout Caixa Box',
    tagline:  'Bloqueio total sem fresta de luz',
    descricao:'A caixa box cobre completamente o mecanismo e elimina as frestas de luz pelo topo e pelas laterais. O máximo em bloqueio — ideal para quartos de bebê, home theater e quem precisa de escuridão total.',
    destaque: 'Bloqueio total',
    beneficios: [
      'Elimina frestas de luz pelo topo',
      'Caixa box cobre o mecanismo',
      'Bloqueio superior ao rolô convencional',
      'Ideal para quarto de bebê e home theater',
    ],
    imagem: roloBox,
    alt: 'Persiana Rolô Blackout Caixa Box sob medida — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana Rolô Blackout Caixa Box sob medida. Pode me passar mais informações?',
  },
  {
    id:       'horizontal-50mm',
    slug:     'persiana-horizontal-50mm',
    nome:     'Persiana Horizontal 50mm com Fita',
    tagline:  'Funcional e durável para uso intenso',
    descricao:'Persiana horizontal com lâminas de 50mm e fita — resistente, durável e fácil de limpar. Excelente para escritórios, salas comerciais e ambientes de uso intenso que exigem praticidade.',
    destaque: null,
    beneficios: [
      'Lâminas de 50mm resistentes',
      'Fita que garante alinhamento perfeito',
      'Fácil higienização com pano úmido',
      'Ideal para escritórios e comércios',
    ],
    imagem: horizontal,
    alt: 'Persiana horizontal 50mm com fita sob medida — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana Horizontal 50mm com Fita sob medida. Pode me passar mais informações?',
  },
  {
    id:       'painel-translucida',
    slug:     'persiana-painel-translucida',
    nome:     'Persiana de Painel Translúcida',
    tagline:  'Luz filtrada com design sofisticado',
    descricao:'Painéis deslizantes em tecido translúcido que filtram a luz natural criando uma atmosfera suave e aconchegante. Visual contemporâneo que combina com qualquer decoração moderna.',
    destaque: null,
    beneficios: [
      'Filtra a luz sem bloquear completamente',
      'Visual sofisticado e contemporâneo',
      'Painéis deslizantes práticos',
      'Produzida sob medida',
    ],
    imagem: painel,
    alt: 'Persiana de Painel Translúcida sob medida — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Persiana de Painel Translúcida sob medida. Pode me passar mais informações?',
  },
]

