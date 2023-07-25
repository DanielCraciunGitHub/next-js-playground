import { NextResponse, type NextRequest } from "next/server"
import { env } from "@/env.mjs"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json()

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.NODEMAILER_EMAIL,
      pass: env.NODEMAILER_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: env.NODEMAILER_EMAIL,
    to: env.NODEMAILER_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: "Success!", status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 })
  }
}
