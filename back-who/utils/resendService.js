// utils/resendService.js - Working version with Gmail recipient
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Your actual email where you want to receive notifications
const ADMIN_EMAIL = 'samijlassi2909@gmail.com';

/**
 * Send email to YOU (the admin) when someone submits the contact form
 */
const sendAdminEmail = async (contactData) => {
  const { name, email, subject, company, position, message } = contactData;
  
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f0f2f5; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0e76a8, #0284C7); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 10px 0 0; font-size: 24px; }
        .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0; }
        .content { padding: 30px; background: #f8f9fa; }
        .info-card { background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; border-left: 4px solid #0e76a8; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .label { font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
        .value { font-size: 16px; font-weight: 600; color: #1a1a1a; margin-top: 6px; word-break: break-word; }
        .message-box { background: white; border-radius: 12px; padding: 20px; margin-top: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .message-box h3 { color: #0e76a8; margin: 0 0 12px 0; font-size: 14px; }
        .message-text { line-height: 1.6; color: #555; white-space: pre-wrap; }
        .reply-button { background: #e8f4f8; border-radius: 12px; padding: 20px; margin-top: 20px; text-align: center; }
        .reply-button a { background: #0e76a8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; }
        .reply-button a:hover { background: #0284C7; }
        .footer { background: #1a1a1a; padding: 20px; text-align: center; color: #888; font-size: 12px; }
        .badge { display: inline-block; background: #0e76a8; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
      </style>
    </head>
    <body style="margin: 0; padding: 20px; background: #f0f2f5;">
      <div class="container">
        <div class="header">
          <div style="font-size: 48px;">📬</div>
          <h1>New Contact Form Submission</h1>
          <p>${new Date().toLocaleString()}</p>
        </div>
        
        <div class="content">
          <div class="info-card">
            <div class="label">👤 NAME</div>
            <div class="value">${escapeHtml(name)}</div>
          </div>
          
          <div class="info-card">
            <div class="label">📧 EMAIL</div>
            <div class="value">${escapeHtml(email)}</div>
          </div>
          
          <div class="info-card">
            <div class="label">📋 SUBJECT</div>
            <div class="value"><span class="badge">${escapeHtml(subject)}</span></div>
          </div>
          
          ${company ? `
          <div class="info-card">
            <div class="label">🏢 COMPANY</div>
            <div class="value">${escapeHtml(company)}</div>
          </div>
          ` : ''}
          
          ${position ? `
          <div class="info-card">
            <div class="label">💼 POSITION</div>
            <div class="value">${escapeHtml(position)}</div>
          </div>
          ` : ''}
          
          <div class="message-box">
            <h3>💬 MESSAGE</h3>
            <div class="message-text">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="reply-button">
            <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject)}">
              ✉️ Reply to ${escapeHtml(name)}
            </a>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from your portfolio contact form</p>
          <p style="font-size: 11px; margin-top: 10px;">© 2025 Sami Jelassi | Full Stack MERN Developer</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Send to YOUR email address using Resend's testing domain
    const { data, error } = await resend.emails.send({
      from: `Sami Jelassi Portfolio <onboarding@resend.dev>`,
      to: [ADMIN_EMAIL], // 👈 Sends to YOUR Gmail
      reply_to: email,
      subject: `📬 New Contact: ${subject} from ${name}`,
      html: emailHtml
    });
    
    if (error) {
      console.error('Resend error:', error);
      throw error;
    }
    
    console.log('✅ Admin notification sent to:', ADMIN_EMAIL);
    console.log('📧 Email ID:', data?.id);
    return data;
  } catch (error) {
    console.error('❌ Failed to send admin email:', error.message);
    throw error;
  }
};

/**
 * Send auto-reply to the user (optional)
 */
const sendAutoReply = async (contactData) => {
  const { name, email, subject } = contactData;
  
  // Log that we would send an auto-reply (for debugging)
  console.log(`📧 Would send auto-reply to ${email} (${name}) about "${subject}"`);
  
  // Auto-reply is disabled because Resend's testing domain can only send to verified emails
  // To enable auto-reply, verify a domain at resend.com/domains
  return null;
};

// Helper function to escape HTML special characters
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = { 
  sendAdminEmail, 
  sendAutoReply 
};