// About.jsx - Clean & Professional
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaCode, 
  FaHeart,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaServer,
  FaPalette,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiFlutter, 
  SiTailwindcss, 
  SiMui,
  SiJavascript,
  SiFirebase,
  SiDart,
  SiRedux,
  SiGraphql,
  SiJest,
  SiDocker,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiPostman
} from 'react-icons/si';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const skills = [
    { name: 'React.js', level: 80, icon: <SiReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', level: 70, icon: <SiReact />, color: '#000000', category: 'Frontend' },
    { name: 'JavaScript', level: 75, icon: <SiJavascript />, color: '#F7DF1E', category: 'Language' },
    { name: 'Php', level: 65, icon: <SiPhp />, color: '#777BB4', category: 'Language'},
    { name: 'Node.js', level: 80, icon: <SiNodedotjs />, color: '#339933', category: 'Backend' },
    { name: 'Express.js', level: 80, icon: <SiExpress />, color: '#000000', category: 'Backend' },
    { name: 'MongoDB', level: 80, icon: <SiMongodb />, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', level: 70, icon: <SiPostgresql />, color: '#336791', category: 'Database'},
    { name: 'MySQL', level: 75, icon: <SiMysql />, color: '#00758F', category: 'Database' },
    { name: 'Flutter', level: 70, icon: <SiFlutter />, color: '#02569B', category: 'Mobile' },
    { name: 'TailwindCSS', level: 80, icon: <SiTailwindcss />, color: '#38BDF8', category: 'Styling' },
    { name: 'Material-UI', level: 88, icon: <SiMui />, color: '#007FFF', category: 'Styling' },
    { name: 'Redux', level: 85, icon: <SiRedux />, color: '#764ABC', category: 'State Management' },
    { name: 'Firebase', level: 70, icon: <SiFirebase />, color: '#FFCA28', category: 'Backend' },
    { name: 'REST APIs', level: 90, icon: <FaCloud />, color: '#00ACC1', category: 'API' },
    { name: 'Docker', level: 60, icon: <SiDocker />, color: '#2496ED', category: 'DevOps' },
    { name: 'Jest', level: 80, icon: <SiJest />, color: '#C21325', category: 'Testing' },
    { name: 'Postman', level: 75, icon: <SiPostman />, color: '#FF6C37', category: 'Testing' },
    
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };

  return (
    <div ref={sectionRef} style={{
      minHeight: '100vh',
      padding: '100px 40px 80px',
      position: 'relative',
      fontFamily: 'Amaranth, sans-serif',
      background: 'radial-gradient(ellipse at center, rgba(14,118,168,0.05) 0%, transparent 100%)'
    }}>
      
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '0',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(97,218,251,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '0',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,118,168,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      {/* Header Section - Minimal & Clean */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '20px',
          padding: '30px 40px',
          display: 'inline-block',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            color: '#1a1a1a',
            fontFamily: 'Amaranth, sans-serif',
            margin: 0,
            letterSpacing: '-0.02em'
          }}>
            About <span style={{ color: '#0e76a8' }}>Me</span>
          </h1>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          maxWidth: '900px',
          margin: '0 auto 80px',
          textAlign: 'center'
        }}
      >
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '30px',
          padding: '50px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative quote mark */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '30px',
            fontSize: '80px',
            color: '#0e76a8',
            opacity: 0.1,
            fontFamily: 'Georgia, serif'
          }}>"</div>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            lineHeight: '1.7',
            color: '#444',
            fontFamily: 'Amaranth, sans-serif',
            position: 'relative',
            zIndex: 1
          }}>
            I'm <strong style={{ color: '#0e76a8' }}>Sami Jelassi</strong>, a passionate <strong>Full Stack MERN Developer</strong> and 
            <strong> Flutter Mobile Developer</strong> with <strong>2+ years of freelance experience</strong>. 
            Currently pursuing my Software Engineering degree, I combine academic knowledge with practical industry experience.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '30px',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: <FaCode />, text: 'Clean Code', color: '#61DAFB' },
              { icon: <FaRocket />, text: 'Fast Delivery', color: '#FF6D00' },
              { icon: <FaHeart />, text: 'Client Focus', color: '#E83E8C' },
              { icon: <FaShieldAlt />, text: 'Secure', color: '#4CAF50' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                background: `${item.color}10`,
                borderRadius: '30px',
                color: item.color,
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technical Skills Section - Sick Design */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
            fontWeight: '800',
            color: 'white',
            fontFamily: 'Amaranth, sans-serif',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Technical <span style={{ color: '#0e76a8' }}>Expertise</span>
          </h2>
          <div style={{
            width: '60px',
            height: '3px',
            background: '#0e76a8',
            margin: '15px auto',
            borderRadius: '2px'
          }} />
        </div>

        {/* Skills Grid by Category */}
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <motion.div key={category} variants={itemVariants} style={{
            marginBottom: '50px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '25px'
            }}>
              <div style={{
                width: '35px',
                height: '35px',
                background: 'linear-gradient(135deg, #0e76a8, #0284C7)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {category === 'Frontend' && <FaCode size={18} color="white" />}
                {category === 'Backend' && <FaServer size={18} color="white" />}
                {category === 'Database' && <FaDatabase size={18} color="white" />}
                {category === 'Mobile' && <FaMobileAlt size={18} color="white" />}
                {category === 'Styling' && <FaPalette size={18} color="white" />}
                {category === 'Language' && <FaCode size={18} color="white" />}
                {category === 'State Management' && <FaCode size={18} color="white" />}
                {category === 'API' && <FaCloud size={18} color="white" />}
                {category === 'DevOps' && <FaServer size={18} color="white" />}
                {category === 'Testing' && <FaShieldAlt size={18} color="white" />}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'white',
                margin: 0,
                fontFamily: 'Amaranth, sans-serif'
              }}>
                {category}
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {categorySkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8, scale: 1.02 }}
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '16px',
                    padding: '18px 20px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    borderLeft: `3px solid ${skill.color}`
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: `${skill.color}15`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        color: skill.color
                      }}>
                        {skill.icon}
                      </div>
                      <span style={{
                        fontWeight: '700',
                        color: '#1a1a1a',
                        fontSize: '1rem'
                      }}>
                        {skill.name}
                      </span>
                    </div>
                    <span style={{
                      fontWeight: '800',
                      fontSize: '0.9rem',
                      color: skill.color
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: '#e9ecef',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.2 + idx * 0.05 }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                        borderRadius: '3px',
                        position: 'relative'
                      }}
                    >
                      {/* Shimmer effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'shimmer 2s infinite'
                      }} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default About;