/**
 * Nodemailer
 */
import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  })

  try {
    const emailResponse = await transporter.sendMail({
      from: 'contact@henv.online',
      to: 'info@henv.online',
      subject: `Nieuw bericht van ${name}`,
      html: `<p>We ontvingen een nieuw bericht via ons contactformulier.</p>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Bericht:</strong> ${message}</p>`
    })
    res.status(200).json({ email: emailResponse })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
