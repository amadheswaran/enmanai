import { useRouter } from 'next/router'
import plots from '../../sample-data/plots.json'

export default function PlotDetails() {
  const router = useRouter()
  const { id } = router.query
  const plot = plots.find((p) => p.id.toString() === id)

  if (!plot) return <p>ப்ளாட் கிடைக்கவில்லை.</p>

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">{plot.name}</h1>
      <img src={plot.image} alt={plot.name} className="mb-4 rounded-lg" />
      <p className="mb-2"><b>நகரம்:</b> {plot.city}</p>
      <p className="mb-2"><b>விலை:</b> ₹ {plot.price}</p>
      <p className="mb-2"><b>விளக்கம்:</b> {plot.description}</p>
    </div>
  )
}
