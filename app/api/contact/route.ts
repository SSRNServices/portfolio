import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create professional HTML template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb; }
            .header { background-color: #0f172a; padding: 32px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; }
            .header p { color: #94a3b8; margin: 8px 0 0; font-size: 14px; }
            .content { padding: 40px; background-color: #ffffff; }
            .field-label { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-bottom: 4px; }
            .field-value { font-size: 16px; color: #1e293b; margin-bottom: 24px; font-weight: 500; }
            .message-box { background-color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #f1f5f9; color: #334155; line-height: 1.6; }
            .footer { padding: 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
            .button { display: inline-block; padding: 14px 28px; background-color: #3b82f6; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px; margin-top: 32px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Request</h1>
              <p>SSRN Services Portfolio</p>
            </div>
            <div class="content">
              <div class="field-label">Full Name</div>
              <div class="field-value">${name}</div>
              
              <div class="field-label">Email Address</div>
              <div class="field-value">${email}</div>
              
              <div class="field-label">Subject</div>
              <div class="field-value">${subject || 'Project Inquiry'}</div>

              <div class="field-label">Message</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>

              <div style="text-align: center;">
                <a href="mailto:${email}" class="button">Reply to this message</a>
              </div>
            </div>
            <div class="footer">
              <p>Submitted via SSRN Services Portfolio Website</p>
              <p>${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] New Message from ${name}`,
      text: `New Message from ${name} (${email}): ${message}`, // Fallback text
      html: htmlTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
