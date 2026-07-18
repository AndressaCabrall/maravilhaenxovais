// src/components/ui/MotionSection/MotionSection.jsx — Maravilha Cortinas
// Wrapper reutilizável para animações via CSS + IntersectionObserver
// Respeita prefers-reduced-motion automaticamente via globals.css

export default function MotionSection({
  children,
  animate = 'fade-up',  // fade-up | fade-in | fade-left | fade-right | scale-in | slide-up
  delay = 0,            // 0 | 100 | 200 | 300 | 400 | 500
  className = '',
  as = 'div',
}) {
  const Tag = as

  return (
    <Tag
      className={`${animate} ${className}`}
      data-animate={animate}
      data-delay={delay || undefined}
    >
      {children}
    </Tag>
  )
}

