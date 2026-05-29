import { useState, useEffect } from 'react';
import { Home, Building2, Layers, Sun, Sparkles, ArrowRight } from 'lucide-react';

const panels = [
  {
    title: 'RESIDENTIAL\nRESTORATION',
    description: 'Driveways, siding & walkways',
    image: '/brand/IMG_3670.jpeg',
    Icon: Home,
    cta: false,
  },
  {
    title: 'PAVILION\nCEILINGS',
    description: 'Cobwebs, mildew, and staining cleared from pavilion and pergola ceilings. Pressure-washed clean and looking new.',
    image: '/brand/IMG_3675.jpeg',
    Icon: Building2,
    cta: false,
  },
  {
    title: 'SHED\nCLEANING',
    description: 'Vinyl and wood outbuildings stripped of years of grime, algae, and weathering. Curb appeal restored inside and out.',
    image: '/brand/Shed.jpeg',
    Icon: Layers,
    cta: false,
  },
  {
    title: 'SIDING\nRESTORATION',
    description: 'Oxidation, mold, and dirt blasted off vinyl, wood, and composite siding without damage to the surface or paint.',
    image: '/brand/Siding.jpeg',
    Icon: Sun,
    cta: false,
  },
  {
    title: 'COBBLESTONE\n& PAVERS',
    description: 'Driveways, walkways, and patios deep-cleaned to pull out embedded grime and restore the natural color of the stone.',
    image: '/brand/Cobble%20Stone.jpeg',
    Icon: Sparkles,
    cta: false,
  },
  {
    title: 'YOUR PROPERTY\nNEXT',
    description: null,
    image: null,
    Icon: ArrowRight,
    cta: true,
  },
];

export default function InteractiveSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState([]);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const timers = panels.map((_, i) =>
      setTimeout(() => setAnimated(prev => [...prev, i]), 180 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={isMobile ? 'w-full' : 'w-full overflow-x-auto'}>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'stretch',
          minWidth: isMobile ? 'unset' : '600px',
          height: isMobile ? 'auto' : '420px',
        }}
      >
        {panels.map(({ Icon, title, description, image, bgPosition, cta }, i) => {
          const isActive = activeIndex === i;
          const isAnimated = animated.includes(i);

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                flex: isMobile ? 'none' : (isActive ? '7 1 0%' : '1 1 0%'),
                height: isMobile ? (isActive ? '220px' : '60px') : 'auto',
                minWidth: isMobile ? 'unset' : '60px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isActive
                  ? cta ? 'var(--color-accent)' : '#ffffff'
                  : 'var(--color-border)',
                backgroundColor: 'var(--color-bg-card)',
                backgroundImage: image ? `url('${image}')` : 'none',
                backgroundSize: isActive ? (isMobile ? 'cover' : 'auto 100%') : (isMobile ? 'cover' : 'auto 120%'),
                backgroundPosition: bgPosition ?? 'center',
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated
                  ? 'translate(0,0)'
                  : (isMobile ? 'translateY(30px)' : 'translateX(-60px)'),
                transition: isMobile
                  ? 'height 0.5s ease-in-out, border-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out, opacity 0.4s ease, transform 0.4s ease'
                  : 'flex 0.7s ease-in-out, border-color 0.7s ease-in-out, box-shadow 0.7s ease-in-out, background-size 0.7s ease-in-out, opacity 0.4s ease, transform 0.4s ease',
                boxShadow: isActive
                  ? '0 20px 60px rgba(0,0,0,0.50)'
                  : '0 10px 30px rgba(0,0,0,0.30)',
                zIndex: isActive ? 10 : 1,
                willChange: isMobile ? 'height' : 'flex-grow, box-shadow',
              }}
            >
              {/* Dark overlay on collapsed mobile panels so title is readable */}
              {isMobile && !isActive && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.55)',
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Bottom gradient shadow for photo panels */}
              {!cta && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '120px',
                    bottom: isActive ? '0' : '-40px',
                    pointerEvents: 'none',
                    transition: 'all 0.7s ease-in-out',
                    boxShadow: isActive
                      ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                      : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000',
                  }}
                />
              )}

              {/* CTA panel center content */}
              {cta && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    textAlign: 'center',
                    background: 'rgba(220,38,38,0.05)',
                    pointerEvents: 'none',
                  }}
                >
                  <p
                    className="font-bebas"
                    style={{
                      fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.1,
                      marginBottom: '20px',
                      whiteSpace: 'pre-line',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
                    }}
                  >
                    {'YOUR PROPERTY\nNEXT'}
                  </p>
                  <a
                    href="#contact"
                    className="cta-button"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: '0.15em',
                      fontSize: '0.8rem',
                      padding: '10px 24px',
                      pointerEvents: 'auto',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    BECOME ELITE
                  </a>
                </div>
              )}

              {/* Bottom label: title + description */}
              {(!cta || isMobile) && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '0 16px',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                >
                  <div>
                    <div
                      className="font-bebas"
                      style={{
                        fontSize: '1.05rem',
                        color: '#fff',
                        lineHeight: 1.1,
                        whiteSpace: 'pre-line',
                        opacity: (isMobile || isActive) ? 1 : 0,
                        transform: (isMobile || isActive) ? 'translateX(0)' : 'translateX(25px)',
                        transition: 'all 0.7s ease-in-out',
                      }}
                    >
                      {title}
                    </div>
                    {!cta && description && (
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: '#a0a0a0',
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateX(0)' : 'translateX(25px)',
                          transition: 'all 0.7s ease-in-out 0.05s',
                        }}
                      >
                        {description}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
