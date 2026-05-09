// Home.jsx - Fully Responsive
import PixelTransition from './PixelTransition';
import myImage from '../assets/Linkedin.png'; // Your photo
import { FaWhatsapp, FaCopy, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const fullName = "Sami Jelassi";

  const phoneNumber = "+21623265016";
  const email = "sami_jelassi_2909@outlook.com";

  // Letter by letter animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      position: 'relative',
      fontFamily: 'Amaranth, sans-serif'
    }}>
      
      {/* Professional Card - Responsive */}
      <PixelTransition
        firstContent={
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img 
              src={myImage} 
              alt="Sami Jelassi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        }
        
        secondContent={
          <div style={{
            width: '100%',
            height: '100%',
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            textAlign: 'center',
            overflowY: 'auto',
            fontFamily: 'Amaranth, sans-serif'
          }}>
            {/* Name with letter by letter animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                margin: 0,
                color: '#1a1a1a',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                fontFamily: 'Amaranth, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                wordBreak: 'break-word'
              }}
            >
              {displayName}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1em',
                  backgroundColor: '#0e76a8',
                  marginLeft: '2px'
                }}
              />
            </motion.h1>
            
            {/* Title with MERN Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                marginTop: '15px',
                width: '100%'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '12px'
              }}>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <SiReact color="#61DAFB" size={24} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <SiNodedotjs color="#339933" size={24} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <SiExpress color="#000000" size={24} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <SiMongodb color="#47A248" size={24} />
                </motion.div>
              </div>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  fontSize: 'clamp(0.8rem, 3.5vw, 1.2rem)',
                  margin: '5px 0 0 0',
                  color: '#0e76a8',
                  fontWeight: '900',
                  fontFamily: 'Amaranth, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Full Stack MERN Developer
              </motion.h2>
            </motion.div>
            
            {/* Phone Section - Responsive */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                marginTop: '20px',
                width: '100%',
                background: '#f8f9fa',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #e9ecef'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flex: 1,
                  minWidth: '140px'
                }}>
                  <FaPhone color="#0e76a8" size={14} />
                  <a 
                    href={`tel:${phoneNumber}`}
                    style={{
                      color: '#333',
                      textDecoration: 'none',
                      fontSize: 'clamp(0.75rem, 3vw, 0.85rem)',
                      fontWeight: '500',
                      fontFamily: 'Amaranth, sans-serif'
                    }}
                  >
                    {phoneNumber}
                  </a>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(phoneNumber, 'phone')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#0e76a8',
                      fontSize: '0.7rem'
                    }}
                  >
                    <FaCopy size={14} />
                    {copied === 'phone' && <span style={{ fontSize: '0.6rem', color: 'green' }}>Copied!</span>}
                  </motion.button>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#25D366',
                      textDecoration: 'none'
                    }}
                  >
                    <FaWhatsapp size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Email Section - Responsive */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{
                marginTop: '10px',
                width: '100%',
                background: '#f8f9fa',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #e9ecef'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flex: 1,
                  minWidth: '160px'
                }}>
                  <FaEnvelope color="#0e76a8" size={14} />
                  <a 
                    href={`mailto:${email}`}
                    style={{
                      color: '#333',
                      textDecoration: 'none',
                      fontSize: 'clamp(0.7rem, 3vw, 0.8rem)',
                      fontWeight: '500',
                      fontFamily: 'Amaranth, sans-serif',
                      wordBreak: 'break-all'
                    }}
                  >
                    {email}
                  </a>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard(email, 'email')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#0e76a8',
                    fontSize: '0.7rem'
                  }}
                >
                  <FaCopy size={14} />
                  {copied === 'email' && <span style={{ fontSize: '0.6rem', color: 'green' }}>Copied!</span>}
                </motion.button>
              </div>
            </motion.div>
            
            {/* Professional Statement - Responsive */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{
                fontSize: 'clamp(0.7rem, 3vw, 0.85rem)',
                marginTop: '15px',
                color: '#666',
                lineHeight: '1.5',
                fontFamily: 'Amaranth, sans-serif',
                fontStyle: 'italic',
                padding: '0 5px'
              }}
            >
              Software Engineering student with 2+ years of freelance experience delivering live web and mobile projects. Fast learner with strong problem-solving skills, advanced English communication, and a passion for modern development.
            </motion.p>
          </div>
        }
        
        gridSize={32}
        pixelColor="#3f7538"
        animationStepDuration={0.35}
        once={false}
        aspectRatio="100%"
        style={{
          width: 'min(550px, 95vw)',
          maxWidth: '100%',
          cursor: 'pointer',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          borderRadius: '15px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          margin: '0 auto'
        }}
        className="professional-card"
      />
    </div>
  );
};

export default Home;