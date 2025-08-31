import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    title: "சென்னை ப்ளாட்",
    city: "சென்னை",
    price: "₹ 15,00,000",
    image: "https://images.unsplash.com/photo-1560185008-5b66b1c4f87b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "கோயம்புத்தூர் ப்ளாட்",
    city: "கோயம்புத்தூர்",
    price: "₹ 12,00,000",
    image: "https://images.unsplash.com/photo-1595526114035-0f39e0b4362d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "மதுரை ப்ளாட்",
    city: "மதுரை",
    price: "₹ 10,00,000",
    image: "https://images.unsplash.com/photo-1600047509408-309c2e5d3cfa?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {properties.map((p, index) => (
          <PropertyCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}
