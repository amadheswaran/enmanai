import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: form.get('name'),
        email: form.get('email'),
        message: form.get('message')
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    setStatus(data.message)
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">தொடர்பு படிவம்</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg">
        <input type="text" name="name" placeholder="பெயர்" className="p-2 border rounded" required />
        <input type="email" name="email" placeholder="மின்னஞ்சல்" className="p-2 border rounded" required />
        <textarea name="message" placeholder="உங்கள் செய்தி" className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">அனுப்பு</button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  )
}