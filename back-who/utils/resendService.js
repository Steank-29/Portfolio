// utils/resendService.js
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates with professional design
const emailTemplates = {
  adminHeader: `
    <div style="background: linear-gradient(135deg, #0e76a8, #0284C7); padding: 40px 20px; text-align: center;">
      <div style="font-size: 48px; margin-bottom: 10px;">📬</div>
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">New Contact Form Submission</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">You have a new message from your portfolio</p>
    </div>
  `,
  
  autoReplyHeader: `
    <div style="background: linear-gradient(135deg, #0e76a8, #0284C7); padding: 40px 20px; text-align: center;">
      <div style="font-size: 48px; margin-bottom: 10px;">🙏</div>
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Thank You for Reaching Out</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">I appreciate you taking the time to contact me</p>
    </div>
  `,
  
  footer: (name) => `
    <div style="background: #1a1a1a; padding: 30px 20px; text-align: center; border-radius: 0 0 12px 12px;">
      <div style="margin-bottom: 15px;">
        <a href="https://www.linkedin.com/in/sami-jelassi-63a32a1b9/" style="color: #0e76a8; text-decoration: none; margin: 0 10px;">LinkedIn</a>
        <span style="color: #444;">|</span>
        <a href="https://github.com/Steank-29" style="color: #0e76a8; text-decoration: none; margin: 0 10px;">GitHub</a>
        <span style="color: #444;">|</span>
        <a href="mailto:sami_jelassi_2909@outlook.com" style="color: #0e76a8; text-decoration: none; margin: 0 10px;">Email</a>
      </div>
      <p style="color: #888; margin: 0; font-size: 12px;">&copy; 2024 Sami Jelassi | Full Stack MERN Developer</p>
      <p style="color: #666; margin: 10px 0 0; font-size: 11px;">This is an automated message from your portfolio website</p>
    </div>
  `,
  
  infoCard: (icon, label, value) => `
    <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="font-size: 24px;">${icon}</div>
        <div style="flex: 1;">
          <div style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px;">${label}</div>
          <div style="font-size: 16px; font-weight: 600; color: #1a1a1a; margin-top: 4px;">${value}</div>
        </div>
      </div>
    </div>
  `
};

/**
 * Send professional email to admin about new contact
 */
const sendAdminEmail = async (contactData) => {
  const { name, email, subject, company, position, message } = contactData;
  
  const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f0f2f5; }
        .email-wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .content { padding: 30px; background: #f8f9fa; }
        .section-title { font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #0e76a8; display: inline-block; }
        .message-box { background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #0e76a8; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .badge { display: inline-block; padding: 4px 12px; background: #0e76a8; color: white; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .action-button { display: inline-block; padding: 10px 20px; background: #0e76a8; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px; }
      </style>
    </head>
    <body style="margin: 0; padding: 30px 20px; background: #f0f2f5;">
      <div class="email-wrapper">
        ${emailTemplates.adminHeader}
        
        <div class="content">
          <div style="margin-bottom: 25px;">
            <div class="badge">${new Date().toLocaleString()}</div>
          </div>
          
          <div class="section-title">Contact Information</div>
          
          ${emailTemplates.infoCard('👤', 'Full Name', name)}
          ${emailTemplates.infoCard('📧', 'Email Address', email)}
          ${emailTemplates.infoCard('📋', 'Subject', subject)}
          ${company ? emailTemplates.infoCard('🏢', 'Company', company) : ''}
          ${position ? emailTemplates.infoCard('💼', 'Position', position) : ''}
          
          <div style="margin-top: 30px;">
            <div class="section-title">Message Content</div>
            <div class="message-box">
              <div style="font-style: italic; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="background: #e8f4f8; border-radius: 12px; padding: 20px; margin-top: 20px; text-align: center;">
            <p style="margin: 0 0 10px; color: #0e76a8; font-weight: 600;">📌 Quick Actions</p>
            <a href="mailto:${email}" class="action-button">Reply to ${name}</a>
          </div>
        </div>
        
        ${emailTemplates.footer(name)}
      </div>
    </body>
    </html>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: [process.env.FROM_EMAIL],
      reply_to: email,
      subject: `📬 New Contact: ${subject} from ${name}`,
      html: adminEmailHtml
    });
    
    if (error) throw error;
    console.log('✅ Admin notification sent');
    return data;
  } catch (error) {
    console.error('❌ Failed to send admin email:', error.message);
    throw error;
  }
};

/**
 * Send professional auto-reply to the person who submitted the form
 */
const sendAutoReply = async (contactData) => {
  const { name, email, subject, message } = contactData;
  
  const autoReplyHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Me</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f0f2f5; }
        .email-wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .content { padding: 30px; background: #f8f9fa; }
        .greeting { font-size: 24px; font-weight: 700; color: #1a1a1a; margin: 0 0 5px; }
        .timeline-box { background: white; border-radius: 12px; padding: 20px; margin: 25px 0; text-align: center; }
        .timeline-step { display: inline-block; margin: 0 15px; text-align: center; }
        .timeline-circle { width: 40px; height: 40px; background: #0e76a8; border-radius: 50%; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
        .message-preview { background: #f0f7fa; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #0e76a8; }
        .social-links { display: flex; justify-content: center; gap: 15px; margin: 20px 0; }
        .social-link { display: inline-block; padding: 8px 16px; background: #f0f2f5; border-radius: 8px; text-decoration: none; color: #0e76a8; font-weight: 500; font-size: 14px; }
        .qr-code { text-align: center; margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 12px; }
      </style>
    </head>
    <body style="margin: 0; padding: 30px 20px; background: #f0f2f5;">
      <div class="email-wrapper">
        ${emailTemplates.autoReplyHeader}
        
        <div class="content">
          <p class="greeting">Dear ${name},</p>
          <p style="color: #555; margin: 15px 0;">Thank you for reaching out to me. I have received your message regarding <strong>${subject}</strong> and I truly appreciate your interest.</p>
          
          <div class="timeline-box">
            <p style="margin: 0 0 15px; font-weight: 600; color: #0e76a8;">📅 What happens next?</p>
            <div>
              <div class="timeline-step">
                <div class="timeline-circle">1</div>
                <div style="font-size: 12px;">Message Received</div>
              </div>
              <span style="font-size: 20px; color: #ccc;">→</span>
              <div class="timeline-step">
                <div class="timeline-circle">2</div>
                <div style="font-size: 12px;">Review (2-4 hrs)</div>
              </div>
              <span style="font-size: 20px; color: #ccc;">→</span>
              <div class="timeline-step">
                <div class="timeline-circle">3</div>
                <div style="font-size: 12px;">Response (24 hrs)</div>
              </div>
            </div>
          </div>
          
          <div class="message-preview">
            <p style="margin: 0 0 8px; font-weight: 600; color: #0e76a8;">📝 Your message preview:</p>
            <p style="margin: 0; color: #555; font-style: italic; font-size: 14px;">"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</p>
          </div>
          
          <div class="qr-code">
            <p style="margin: 0 0 10px; font-weight: 600; color: #0e76a8;">📱 Connect with me</p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/sami-jelassi-63a32a1b9/" class="social-link">🔗 LinkedIn</a>
              <a href="https://github.com/Steank-29" class="social-link">💻 GitHub</a>
              <a href="mailto:sami_jelassi_2909@outlook.com" class="social-link">✉️ Email</a>
            </div>
          </div>
          
          <div style="background: #e8f4f8; border-radius: 12px; padding: 20px; margin-top: 20px;">
            <p style="margin: 0 0 5px; font-weight: 600; color: #0e76a8;">💡 Quick tip</p>
            <p style="margin: 0; color: #555; font-size: 14px;">While you wait, feel free to check out my portfolio projects to see examples of my work.</p>
          </div>
        </div>
        
        ${emailTemplates.footer(name)}
      </div>
    </body>
    </html>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: [email],
      subject: `✨ Thank you for contacting Sami Jelassi - I'll respond within 24 hours`,
      html: autoReplyHtml
    });
    
    if (error) throw error;
    console.log('✅ Auto-reply sent to:', email);
    return data;
  } catch (error) {
    console.error('❌ Failed to send auto-reply:', error.message);
    // Don't throw - auto-reply failure shouldn't break the form
    return null;
  }
};

/**
 * Test email configuration
 */
const testEmailConfig = async () => {
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: [process.env.FROM_EMAIL],
      subject: '✅ Email Configuration Test',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #0e76a8;">Email Service is Working! 🎉</h2>
          <p>Your Resend integration is configured correctly.</p>
          <p>You will now receive notifications when someone submits the contact form.</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Sent from your portfolio backend</p>
        </div>
      `
    });
    
    if (error) throw error;
    console.log('✅ Email test successful');
    return true;
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    return false;
  }
};

module.exports = { 
  sendAdminEmail, 
  sendAutoReply,
  testEmailConfig 
};