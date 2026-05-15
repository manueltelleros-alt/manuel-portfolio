'use server'

import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

// Helper function to ensure value is not undefined or empty
function safeField(value: string | undefined | null, fallback = "Not provided") {
  if (!value || value.trim() === "") return fallback
  return value
}

export async function POST(request: Request) {

  try {
    const { senderName, senderEmail, message } = await request.json()

    // Use helper function
    const name = safeField(senderName)
    const email = safeField(senderEmail)
    const msg = safeField(message)

    // Create transporter using Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // true if port = 465
      auth: {
        user: "a4b538001@smtp-brevo.com",
        pass: "GVCTjKnx9aY21yDZ"
      }
    })

    // Email content
    const mailOptions = {
      from: "manueltelleros@sksu.edu.ph",
      to: "manueltelleros@sksu.edu.ph",
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${msg}
      `,
      html: `
        <h3>New Contact Message</h3>
        
        <p style="font-family: Arial, sans-serif; font-size:15px; background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #3b82f6; margin-bottom:10px;">
          <strong style="color:#1f2937;">Name:</strong> ${name}
        </p>

        <p style="font-family: Arial, sans-serif; font-size:15px; background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #10b981; margin-bottom:10px;">
          <strong style="color:#1f2937;">Email:</strong> ${email}
        </p>

        <p style="font-family: Arial, sans-serif; font-size:15px; background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #f59e0b; margin-bottom:10px; line-height:1.6;">
          <strong style="color:#1f2937;">Message:</strong><br>
          ${msg}
        </p>
      `
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.messageId)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )

  } catch (error: any) {
    console.error("Email error:", error)
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    )
  }
}


export async function GET() {
  return NextResponse.json(
    { message: "API working" },
    { status: 200 }
  )
}