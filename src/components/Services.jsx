// Services.jsx - Vertical Timeline Holographic Reveal (Fully Responsive)
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  FaCode, FaMobileAlt, FaDatabase, FaCloud, FaShoppingCart, FaShieldAlt,
  FaArrowRight, FaCheckCircle, FaGlobe, FaCrown
} from 'react-icons/fa';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const servicesTimeline = [
    {
      year: '01',
      title: 'Web Development',
      subtitle: 'MERN Stack Expert',
      icon: FaCode,
      color: '#61DAFB',
      achievements: ['React', 'MUI/Tailwind css', 'UI/UX Design', 'Responsive Design']
    },
    {
      year: '02',
      title: 'Mobile Development',
      subtitle: 'Flutter Cross-Platform',
      icon: FaMobileAlt,
      color: '#02569B',
      achievements: ['iOS + Android', 'Offline Apps', 'Push Notifications', 'App Store Ready']
    },
    {
      year: '03',
      title: 'Cloud & API',
      subtitle: 'Scalable Infrastructure',
      icon: FaCloud,
      color: '#00ACC1',
      achievements: ['Vercel/Render', 'REST APIs', 'CI/CD', 'Hosting']
    },
    {
      year: '04',
      title: 'Complete Solutions',
      subtitle: 'End-to-End Delivery',
      icon: FaCrown,
      color: '#FF6D00',
      achievements: ['Full Support', 'Maintenance', 'Optimization', '24/7 Monitoring']
    }
  ];

  return (
    <div ref={sectionRef} style={{
      minHeight: '100vh',
      padding: '80px 20px 60px',
      position: 'relative',
      fontFamily: 'Amaranth, sans-serif',
      background: 'radial-gradient(ellipse at center, rgba(14,118,168,0.05) 0%, transparent 100%)'
    }}>
      

      {/* Timeline - Responsive */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        position: 'relative',
        padding: isMobile ? '0' : '20px 0'
      }}>
        
        {/* Center Line - Hide on mobile */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, transparent, #0e76a8, #0e76a8, transparent)',
            transform: 'translateX(-50%)'
          }} />
        )}

        {servicesTimeline.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: isMobile ? 0 : (idx % 2 === 0 ? -50 : 50) }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: isMobile ? 'center' : (idx % 2 === 0 ? 'flex-start' : 'flex-end'),
              marginBottom: isMobile ? '30px' : '60px',
              position: 'relative',
              padding: isMobile ? '0' : '0 20px'
            }}
          >
            {/* Content Card */}
            <div style={{
              width: isMobile ? '100%' : '45%',
              maxWidth: isMobile ? '100%' : '500px',
              background: 'rgba(255,255,255,0.95)',
              borderRadius: '20px',
              padding: isMobile ? '25px' : '30px',
              boxShadow: `0 10px 30px ${service.color}20`,
              borderLeft: isMobile ? 'none' : `4px solid ${service.color}`,
              borderTop: isMobile ? `4px solid ${service.color}` : 'none',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              {/* Icon Circle */}
              <div style={{
                position: 'absolute',
                top: isMobile ? '-20px' : '30px',
                left: isMobile ? '20px' : (idx % 2 === 0 ? 'auto' : '-45px'),
                right: isMobile ? 'auto' : (idx % 2 === 0 ? '-45px' : 'auto'),
                width: isMobile ? '40px' : '40px',
                height: isMobile ? '40px' : '40px',
                borderRadius: '50%',
                background: service.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: `0 5px 15px ${service.color}50`
              }}>
                <service.icon size={isMobile ? 18 : 20} color="white" />
              </div>
              
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                marginBottom: '15px',
                marginTop: isMobile ? '20px' : '0',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: '900',
                  color: service.color,
                  opacity: 0.3
                }}>{service.year}</span>
                <span style={{
                  padding: '4px 12px',
                  background: `${service.color}20`,
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  color: service.color,
                  fontWeight: '600'
                }}>{service.subtitle}</span>
              </div>
              
              {/* Title */}
              <h2 style={{ 
                margin: '0 0 15px', 
                color: '#1a1a1a', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                fontWeight: '700'
              }}>
                {service.title}
              </h2>
              
              {/* Achievements Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '10px', 
                marginTop: '5px' 
              }}>
                {service.achievements.map((achievement, aIdx) => (
                  <div key={aIdx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    color: service.color,
                    background: `${service.color}10`,
                    padding: '8px 12px',
                    borderRadius: '12px',
                    transition: 'transform 0.2s ease'
                  }}>
                    <FaCheckCircle size={12} />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Services;