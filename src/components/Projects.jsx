// Projects.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiMui,
  SiTypescript,
  SiFlutter,
  SiCloudinary,
  SiVercel,
  SiRender,
  SiFirebase,
  SiDart
} from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import PixelTransition from './PixelTransition';

// Import your images
import tawakkolImg from '../assets/tawakkol.png';
import wiqarImg from '../assets/wiqar.png';
import pinkinkImg from '../assets/Pinkink.png';
import storeImg from '../assets/agri.png';
import qafImg from '../assets/qaf.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'TAWAKKOL',
      url: 'https://www.tawakkol.tn',
      description: 'Full-featured e-commerce platform with complete admin dashboard for product management, order tracking, and customer management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Material-UI', 'Cloudinary', 'Vercel', 'Render'],
      icons: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMui, SiCloudinary, SiVercel, SiRender],
      type: 'web',
      category: 'web',
      color: '#333333',
      gradient: 'linear-gradient(135deg, #333333, #000000)',
      bgColor: '#f5f5f5',
      cardBg: '#ffffff',
      textColor: '#000000',
      features: [
        'User authentication & authorization',
        'Product management system',
        'Shopping cart & checkout',
        'Order tracking',
        'Payment integration',
        'Admin dashboard with analytics'
      ],
      mockup: 'browser',
      image: tawakkolImg
    },
    {
      id: 2,
      name: 'WIQAR',
      url: 'https://www.wiqar-perfume.com',
      description: 'Premium perfume e-commerce website with modern design and fully functional admin panel for inventory and order management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Cloudinary', 'Vercel', 'Render'],
      icons: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiCloudinary, SiVercel, SiRender],
      type: 'web',
      category: 'web',
      color: '#D2B48C',
      gradient: 'linear-gradient(135deg, #D2B48C, #A0522D)',
      bgColor: '#FDF5E6',
      cardBg: '#FFF8F0',
      textColor: '#8B4513',
      features: [
        'Responsive design with TailwindCSS',
        'Product filtering & search',
        'Secure payment gateway',
        'Order management system',
        'Customer reviews & ratings',
        'Inventory tracking'
      ],
      mockup: 'browser',
      image: wiqarImg
    },
    {
      id: 3,
      name: 'PINKINK',
      url: 'https://www.pinkink.com',
      description: 'Modern e-commerce platform that sells handmade products, built with TypeScript for type safety and better developer experience.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Cloudinary'],
      icons: [SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiCloudinary],
      type: 'web',
      category: 'web',
      color: '#E83E8C',
      gradient: 'linear-gradient(135deg, #E83E8C, #C9184A)',
      bgColor: '#FFF0F5',
      cardBg: '#ffffff',
      textColor: '#C9184A',
      features: [
        'Full TypeScript implementation',
        'Type-safe API calls',
        'Advanced state management',
        'Automated testing',
        'Performance optimized',
        'SEO friendly architecture'
      ],
      mockup: 'browser',
      image: pinkinkImg
    },
    {
      id: 4,
      name: 'AGRY',
      url: '#',
      description: 'Cross-platform mobile application for store management with powerful backend infrastructure.',
      technologies: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'REST API'],
      icons: [SiFlutter, SiNodedotjs, SiExpress, SiMongodb],
      type: 'mobile',
      category: 'mobile',
      color: '#90EE90',
      gradient: 'linear-gradient(135deg, #90EE90, #32CD32)',
      bgColor: '#F0FFF0',
      cardBg: '#F5FFF5',
      textColor: '#228B22',
      features: [
        'Inventory management',
        'Sales tracking & analytics',
        'Employee management',
        'Real-time notifications',
        'Offline data synchronization',
        'PDF report generation'
      ],
      mockup: 'iphone',
      image: storeImg
    },
    {
      id: 5,
      name: 'Qaf-ق',
      url: '#',
      description: 'Comprehensive Islamic mobile application with Quran reading, prayer times, Qibla direction, Adhkar, and intelligent notifications.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Local Notifications'],
      icons: [SiFlutter, SiDart, SiFirebase],
      type: 'mobile',
      category: 'mobile',
      color: '#F5DEB3',
      gradient: 'linear-gradient(135deg, #F5DEB3, #DEB887)',
      bgColor: '#FFFAF0',
      cardBg: '#FFFBF0',
      textColor: '#8B7355',
      features: [
        'Complete Quran with audio recitation',
        'Accurate prayer times based on location',
        'Qibla direction compass',
        'Morning & evening Adhkar',
        'Push notifications for prayer times',
        'Ramadan special features',
        'Dark mode support',
        'Bookmark & note taking'
      ],
      mockup: 'iphone',
      image: qafImg
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Browser Mockup Component with Pixel Transition
  const BrowserMockup = ({ image, url, color, projectName }) => (
    <div style={{
      background: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}>
      {/* Browser Chrome */}
      <div style={{
        background: '#f5f5f5',
        padding: '10px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{
          flex: 1,
          background: '#fff',
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '10px',
          color: '#666',
          textAlign: 'center',
          border: '1px solid #e0e0e0'
        }}>
          {url}
        </div>
        <div style={{ width: '50px' }} />
      </div>
      
      {/* Browser Content with Pixel Transition */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
        <PixelTransition
          firstContent={
            <img 
              src={image} 
              alt={projectName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          }
          secondContent={
            <div style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${color}15, ${color}05)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '10px'
            }}>
              
              
              
            </div>
          }
          gridSize={20}
          pixelColor={color}
          animationStepDuration={0.3}
          once={false}
          aspectRatio="100%"
          style={{
            width: '100%',
            height: '100%',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );

  // iPhone Mockup Component with Pixel Transition
  const IPhoneMockup = ({ image, color, projectName }) => (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '240px',
      margin: '0 auto',
      borderRadius: '35px',
      background: '#1a1a1a',
      padding: '10px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      cursor: 'pointer'
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '25px',
        background: '#1a1a1a',
        borderRadius: '15px',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px'
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#333' }} />
        <div style={{ width: '35px', height: '10px', background: '#333', borderRadius: '3px' }} />
      </div>
      
      {/* Screen Content with Pixel Transition */}
      <div style={{
        background: '#fff',
        borderRadius: '28px',
        overflow: 'hidden',
        aspectRatio: '9/19',
        position: 'relative'
      }}>
        <PixelTransition
          firstContent={
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff'
            }}>
              <img 
                src={image} 
                alt={projectName}
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          }
          secondContent={
            <div style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${color}20, ${color}10)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '10px'
            }}>
             
              
            </div>
          }
          gridSize={15}
          pixelColor={color}
          animationStepDuration={0.3}
          once={false}
          aspectRatio="100%"
          style={{
            width: '100%',
            height: '100%',
            cursor: 'pointer'
          }}
        />
      </div>
      
      {/* Home Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '3px',
        background: '#333',
        borderRadius: '2px',
        zIndex: 10
      }} />
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '60px 30px',
      position: 'relative',
      fontFamily: 'Amaranth, sans-serif'
    }}>

      {/* Professional Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '80px',
          flexWrap: 'wrap'
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter('all')}
          style={{
            padding: '10px 28px',
            background: filter === 'all' ? 'rgba(14,118,168,0.9)' : 'rgba(255,255,255,0.1)',
            color: filter === 'all' ? 'white' : 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'Amaranth, sans-serif',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            letterSpacing: '0.5px'
          }}
        >
          All Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter('web')}
          style={{
            padding: '10px 28px',
            background: filter === 'web' ? 'rgba(14,118,168,0.9)' : 'rgba(255,255,255,0.1)',
            color: filter === 'web' ? 'white' : 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'Amaranth, sans-serif',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            letterSpacing: '0.5px'
          }}
        >
          Web Apps
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter('mobile')}
          style={{
            padding: '10px 28px',
            background: filter === 'mobile' ? 'rgba(14,118,168,0.9)' : 'rgba(255,255,255,0.1)',
            color: filter === 'mobile' ? 'white' : 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'Amaranth, sans-serif',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            letterSpacing: '0.5px'
          }}
        >
          Mobile Apps
        </motion.button>
      </motion.div>

      {/* Projects Grid - Smaller cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            style={{
              background: project.cardBg,
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Device Mockup with Pixel Transition */}
            <div style={{
              background: project.bgColor,
              padding: project.type === 'mobile' ? '25px 15px' : '15px',
              borderBottom: `2px solid ${project.color}`
            }}>
              {project.mockup === 'browser' ? (
                <BrowserMockup 
                  image={project.image} 
                  url={project.url} 
                  color={project.color}
                  projectName={project.name}
                />
              ) : (
                <IPhoneMockup 
                  image={project.image} 
                  color={project.color}
                  projectName={project.name}
                />
              )}
            </div>

            {/* Project Content */}
            <div style={{ padding: '20px' }}>
              {/* Project Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '12px'
              }}>
                <div>
                  <h2 style={{
                    fontSize: '1.3rem',
                    margin: 0,
                    color: project.textColor,
                    fontFamily: 'Amaranth, sans-serif',
                    fontWeight: '700'
                  }}>
                    {project.name}
                  </h2>
                  <div style={{
                    display: 'flex',
                    gap: '6px',
                    marginTop: '6px',
                    flexWrap: 'wrap'
                  }}>
                    {project.icons.slice(0, 4).map((Icon, idx) => (
                      <Icon key={idx} color={project.color} size={16} />
                    ))}
                  </div>
                </div>
                <div style={{
                  background: project.gradient,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {project.type === 'web' ? 'Web App' : 'Mobile App'}
                </div>
              </div>

              <p style={{
                color: '#555',
                lineHeight: '1.4',
                marginBottom: '12px',
                fontSize: '0.8rem',
                fontFamily: 'Amaranth, sans-serif'
              }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                marginBottom: '15px'
              }}>
                {project.technologies.slice(0, 5).map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: `${project.color}15`,
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '0.6rem',
                      color: project.textColor,
                      fontFamily: 'Amaranth, sans-serif',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span style={{ fontSize: '0.6rem', color: '#999' }}>
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Live Demo Button Only */}
              {project.url !== '#' && (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '8px',
                    background: project.gradient,
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    fontFamily: 'Amaranth, sans-serif'
                  }}
                >
                  <FaExternalLinkAlt size={11} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;