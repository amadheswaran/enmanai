import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import plots from '../sample-data/plots.json'

export default function Home() {
  const [query, setQuery] = useState('')

  const filteredPlots = plots.filter(
    (plot) =>
      plot.name.includes(query) ||
      plot.city.includes(query)
  )

  return (
    <div>
      <Head>
        <title>ப்ளாட் சந்தை</title>
      </Head>
      <header className="bg-blue-600 text-white p-4">
        <div className="container flex justify-between items-center">
          <h1 className="text-xl font-bold">ப்ளாட் சந்தை</h1>
          <nav>
            <Link href="/" className="px-2">முகப்பு</Link>
            <Link href="/contact" className="px-2">தொடர்பு</Link>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">உங்களுக்கு பொருத்தமான ப்ளாட்டைத் தேடுங்கள்</h2>
          <input
            type="text"
            placeholder="பெயர் அல்லது நகரம் மூலம் தேடுங்கள்..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 border rounded w-1/2"
          />
        </div>
      </section>

      <section className="container py-10 grid md:grid-cols-3 gap-6">
        {filteredPlots.map((plot) => (
          <Link href={`/plots/${plot.id}`} key={plot.id}>
            <div className="border rounded-lg shadow hover:shadow-lg cursor-pointer">
              <img src={plot.image} alt={plot.name} className="rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{plot.name}</h3>
                <p>{plot.city}</p>
                <p className="text-blue-600 font-bold">₹ {plot.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className="bg-blue-600 text-white text-center p-4 mt-10">
        <p>© 2025 ப்ளாட் சந்தை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
      </footer>
    </div>
  )
}