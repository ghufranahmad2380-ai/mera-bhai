import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Macaroni } from './components/Macaroni';
import { FunZone } from './components/FunZone';
import { Contact } from './components/Contact';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { FloatingElements } from './components/FloatingElements';

function App() {
  return (
    <>
      <BackgroundAnimation />
      <FloatingElements count={12} />
      
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(32, 39, 52, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(183, 216, 148, 0.1)', padding: '1rem 2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <motion.span
            style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: '"Space Grotesk", sans-serif', background: 'linear-gradient(135deg, #E0F8C7 0%, #B7D894 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }}
          >
            Zain's World
          </motion.span>
          <motion.nav
            style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 15 }}
          >
            {['Home', 'About', 'Gallery', 'Macaroni', 'Fun Zone', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.3s ease', position: 'relative' }}
                whileHover={{ color: '#B7D894' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Gallery />
        <Macaroni />
        <FunZone />
        <Contact />
      </main>
      
      <motion.div
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #B7D894 0%, #E0F8C7 100%)',
          color: '#202734',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(183, 216, 148, 0.4)',
          zIndex: 40,
        }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </motion.div>
    </>
  );
}

export default App;
