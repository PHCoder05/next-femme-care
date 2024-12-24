import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
      pool: true, // Enables connection pooling
  });

  const userTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #bf6159; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .message-box { background: #feede5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #bf6159; font-size: 14px; }
        .button { background: #bf6159; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0; }
        .office-hours { background: #feede5; padding: 15px; border-radius: 8px; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Hemkanti Clinics</div>
          <div>Healthcare Excellence</div>
        </div>
        <div class="content">
          <h2>Thank you for reaching out, ${name}!</h2>
          <p>We appreciate you contacting Hemkanti Clinics. We have received your message and will respond shortly.</p>
          
          <div class="message-box">
            <h3>Your Message:</h3>
            <p>${message}</p>
          </div>

          <p><strong>What's Next?</strong></p>
          <ul>
            <li>Our team will review your message</li>
            <li>We'll respond within 24-48 hours</li>
            <li>For urgent matters, please call us at +919405631363</li>
          </ul>
          
          <a href="https://www.hemkanti.com" class="button">Visit Our Website</a>
          
          <div class="office-hours">
            <h3>Visit Us</h3>
            <p>Hemkanti Clinics<br>
            Off No:207, Commerce Centre,<br>
            Shivar Garden Road, Pimple Saudagar,<br>
            Pune, (MH), India -411017</p>
          </div>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Hemkanti Clinics</p>
          <p>Email: support@hemkanti.com | Phone: +919405631363</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const adminTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #bf6159; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #feede5; border-radius: 0 0 8px 8px; }
        .contact-info { background: #feede5; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .message-box { background: #feede5; padding: 20px; border-radius: 8px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="contact-info">
            <h3>Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div class="message-box">
            <h3>Message Content:</h3>
            <p>${message}</p>
          </div>
          
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const userMailOptions = {
    from: 'support@hemkanti.com',
    to: email,
    subject: `Thank you for contacting Hemkanti Clinics, ${name}`,
    html: userTemplate
  };

  const adminMailOptions = {
    from: 'support@hemkanti.com',
    to: 'support@hemkanti.com',
    subject: `New Contact Form Submission from ${name}`,
    html: adminTemplate
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response(JSON.stringify({ message: 'Failed to send emails' }), { status: 500 });
  }
}
