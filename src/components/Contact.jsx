// Contact.jsx - Fully Responsive & Professional
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaLinkedin, 
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaBriefcase,
  FaRegBuilding,
  FaRegClock
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    company: '',
    position: '',
    message: ''
  });
  
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

// Add this to your Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  
  try {
    const response = await fetch('https://sami-portfolio-backend.onrender.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (data.success) {
      setSubmitted(true);
      setFormData({
        name: '', email: '', subject: '', company: '', position: '', message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setError(data.message || 'Failed to send message');
    }
  } catch (err) {
    setError('Network error. Please try again.');
  } finally {
    setLoading(false);
  }
};

  const contactMethods = [
    { icon: FaPhone, title: 'Phone', value: '+216 23 265 016', link: 'tel:+21623265016', color: '#0e76a8' },
    { icon: FaWhatsapp, title: 'WhatsApp', value: '+216 23 265 016', link: 'https://wa.me/21623265016', color: '#25D366' },
    { icon: FaEnvelope, title: 'Email', value: 'sami_jelassi_2909@outlook.com', link: 'mailto:sami_jelassi_2909@outlook.com', color: '#EA4335' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sami-jelassi-63a32a1b9/', color: '#0A66C2' },
    { icon: FaGithub, url: 'https://github.com/Steank-29', color: '#333' }
  ];

  const subjectOptions = [
    'Job Opportunity',
    'Freelance Project',
    'Collaboration',
    'Technical Question',
    'General Inquiry'
  ];

  return (
    <div ref={sectionRef} style={{
      minHeight: '100vh',
      padding: isMobile ? '80px 16px 60px' : '100px 40px 80px',
      fontFamily: 'Amaranth, sans-serif',
      background: 'radial-gradient(ellipse at center, rgba(14,118,168,0.05) 0%, transparent 100%)'
    }}>
      
      {/* Header - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}
      >
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '20px',
          padding: isMobile ? '20px 30px' : '35px 60px',
          display: 'inline-block',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          width: isMobile ? '100%' : 'auto'
        }}>
          <h1 style={{
            fontSize: isMobile ? 'clamp(1.5rem, 5vw, 2rem)' : 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            color: '#1a1a1a',
            margin: 0,
            fontFamily: 'Amaranth, sans-serif'
          }}>
            Ready to <span style={{ color: '#0e76a8' }}>Create Together</span>
          </h1>
          <p style={{
            marginTop: '10px',
            color: '#666',
            fontSize: isMobile ? '0.8rem' : '0.9rem'
          }}>
            Whether it's a job, freelance work, or collaboration — let's talk
          </p>
        </div>
      </motion.div>

      {/* Main Content - Responsive Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: isMobile ? '30px' : '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Contact Info - Responsive */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '24px',
            padding: isMobile ? '25px' : '40px',
            height: '100%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              color: '#1a1a1a',
              marginBottom: '10px',
              fontFamily: 'Amaranth, sans-serif'
            }}>
              Contact Information
            </h2>
            <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '25px' }}>
              Reach out through any channel below
            </p>

            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target={method.title !== 'Phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: isMobile ? 0 : 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '15px',
                  padding: isMobile ? '12px' : '15px',
                  marginBottom: '12px',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e9ecef'
                }}
              >
                <div style={{
                  width: isMobile ? '35px' : '40px',
                  height: isMobile ? '35px' : '40px',
                  background: `${method.color}15`,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <method.icon size={isMobile ? 16 : 20} color={method.color} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: isMobile ? '0.8rem' : '0.85rem', color: method.color }}>
                    {method.title}
                  </h3>
                  <p style={{ margin: '3px 0 0', fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666' }}>
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Location - Responsive */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '12px' : '15px',
              padding: isMobile ? '12px' : '15px',
              background: '#f8f9fa',
              borderRadius: '12px',
              marginTop: '12px',
              border: '1px solid #e9ecef'
            }}>
              <div style={{
                width: isMobile ? '35px' : '40px',
                height: isMobile ? '35px' : '40px',
                background: '#0e76a815',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaMapMarkerAlt size={isMobile ? 16 : 20} color="#0e76a8" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: isMobile ? '0.8rem' : '0.85rem', color: '#0e76a8' }}>
                  Location
                </h3>
                <p style={{ margin: '3px 0 0', fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666' }}>
                  Tunisia / Remote Worldwide
                </p>
              </div>
            </div>

            {/* Availability - Responsive */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '12px' : '15px',
              padding: isMobile ? '12px' : '15px',
              background: '#f8f9fa',
              borderRadius: '12px',
              marginTop: '12px',
              border: '1px solid #e9ecef'
            }}>
              <div style={{
                width: isMobile ? '35px' : '40px',
                height: isMobile ? '35px' : '40px',
                background: '#4CAF5015',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaRegClock size={isMobile ? 16 : 20} color="#4CAF50" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: isMobile ? '0.8rem' : '0.85rem', color: '#4CAF50' }}>
                  Availability
                </h3>
                <p style={{ margin: '3px 0 0', fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666' }}>
                  Open for Full-time & Freelance
                </p>
              </div>
            </div>

            {/* Social - Responsive */}
            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    style={{
                      width: isMobile ? '35px' : '40px',
                      height: isMobile ? '35px' : '40px',
                      background: `${social.color}15`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <social.icon size={isMobile ? 16 : 20} color={social.color} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form - Responsive */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '24px',
            padding: isMobile ? '25px' : '40px',
            height: '100%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              color: '#1a1a1a',
              marginBottom: '10px',
              fontFamily: 'Amaranth, sans-serif'
            }}>
              Send a Message
            </h2>
            <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '25px' }}>
              Fill out the form below and I'll get back to you promptly
            </p>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px'
                }}>
                  <FaUser size={11} color={focused === 'name' ? '#0e76a8' : '#999'} />
                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#333' }}>
                    Full Name <span style={{ color: '#E53935' }}>*</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : '12px 14px',
                    border: `2px solid ${focused === 'name' ? '#0e76a8' : '#e9ecef'}`,
                    borderRadius: '10px',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontFamily: 'Amaranth, sans-serif',
                    outline: 'none',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px'
                }}>
                  <FaEnvelope size={11} color={focused === 'email' ? '#0e76a8' : '#999'} />
                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#333' }}>
                    Email Address <span style={{ color: '#E53935' }}>*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="john@company.com"
                  required
                  value={formData.email}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : '12px 14px',
                    border: `2px solid ${focused === 'email' ? '#0e76a8' : '#e9ecef'}`,
                    borderRadius: '10px',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontFamily: 'Amaranth, sans-serif',
                    outline: 'none',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Subject Dropdown */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px'
                }}>
                  <FaBriefcase size={11} color={focused === 'subject' ? '#0e76a8' : '#999'} />
                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#333' }}>
                    Subject <span style={{ color: '#E53935' }}>*</span>
                  </label>
                </div>
                <select
                  required
                  value={formData.subject}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : '12px 14px',
                    border: `2px solid ${focused === 'subject' ? '#0e76a8' : '#e9ecef'}`,
                    borderRadius: '10px',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontFamily: 'Amaranth, sans-serif',
                    outline: 'none',
                    background: 'white',
                    cursor: 'pointer',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Select an option</option>
                  {subjectOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Company & Position Row - Responsive */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '16px' : '15px',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '6px'
                  }}>
                    <FaRegBuilding size={11} color={focused === 'company' ? '#0e76a8' : '#999'} />
                    <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#333' }}>
                      Company
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    style={{
                      width: '100%',
                      padding: isMobile ? '10px 12px' : '12px 14px',
                      border: `2px solid ${focused === 'company' ? '#0e76a8' : '#e9ecef'}`,
                      borderRadius: '10px',
                      fontSize: isMobile ? '0.85rem' : '0.9rem',
                      fontFamily: 'Amaranth, sans-serif',
                      outline: 'none',
                      transition: 'all 0.2s',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '6px'
                  }}>
                    <FaBriefcase size={11} color={focused === 'position' ? '#0e76a8' : '#999'} />
                    <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#333' }}>
                      Position
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Your Role"
                    value={formData.position}
                    onFocus={() => setFocused('position')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    style={{
                      width: '100%',
                      padding: isMobile ? '10px 12px' : '12px 14px',
                      border: `2px solid ${focused === 'position' ? '#0e76a8' : '#e9ecef'}`,
                      borderRadius: '10px',
                      fontSize: isMobile ? '0.85rem' : '0.9rem',
                      fontFamily: 'Amaranth, sans-serif',
                      outline: 'none',
                      transition: 'all 0.2s',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px'
                }}>
                  <FaPaperPlane size={11} color={focused === 'message' ? '#0e76a8' : '#999'} />
                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#333' }}>
                    Message <span style={{ color: '#E53935' }}>*</span>
                  </label>
                </div>
                <textarea
                  placeholder="Tell me about your project, job opportunity, or collaboration idea..."
                  required
                  rows={isMobile ? 4 : 4}
                  value={formData.message}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : '12px 14px',
                    border: `2px solid ${focused === 'message' ? '#0e76a8' : '#e9ecef'}`,
                    borderRadius: '10px',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontFamily: 'Amaranth, sans-serif',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: isMobile ? '12px' : '14px',
                  background: loading ? '#ccc' : 'linear-gradient(135deg, #0e76a8, #0284C7)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: 'Amaranth, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.2s'
                }}
              >
                {loading ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid white',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={isMobile ? 12 : 14} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '16px',
                    padding: '10px',
                    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                    color: 'white',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontSize: isMobile ? '0.75rem' : '0.85rem'
                  }}
                >
                  ✓ Message sent successfully! I'll respond within 24 hours.
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '16px',
                    padding: '10px',
                    background: '#E53935',
                    color: 'white',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontSize: isMobile ? '0.75rem' : '0.85rem'
                  }}
                >
                  ⚠️ {error}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Availability Badge - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        style={{ textAlign: 'center', marginTop: isMobile ? '40px' : '60px' }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? '8px 16px' : '10px 24px',
          borderRadius: '50px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{
            width: isMobile ? '6px' : '8px',
            height: isMobile ? '6px' : '8px',
            background: '#4CAF50',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }} />
          <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.85rem' }}>
            Open for opportunities — Full-time & Freelance
          </span>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;