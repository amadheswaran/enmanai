import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // For demo, we just log. In production, configure SMTP.
    console.log('Contact Form:', { name, email, message })

    return res.status(200).json({ message: 'உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}