import { NextResponse, type NextRequest } from "next/server"
import Email from "@/emails/email"
import { env } from "@/env.mjs"
import { render } from "@react-email/render"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(request: NextRequest) {
  const emailProps = await request.json()

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.NODEMAILER_EMAIL,
      pass: env.NODEMAILER_PASSWORD,
    },
  })
  const emailHtml = render(<Email {...emailProps} />)

  const mailOptions: Mail.Options = {
    from: env.NODEMAILER_EMAIL,
    to: env.NODEMAILER_EMAIL,
    subject: `EMM newsletter`,
    html: emailHtml,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: "Success!", status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 })
  }
}
