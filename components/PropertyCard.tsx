import Image from "next/image";

interface PropertyCardProps {
  title: string;
  city: string;
  price: string;
  image: string;
}

export default function PropertyCard({ title, city, price, image }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-500">{city}</p>
        <p className="text-blue-600 font-bold text-lg mt-2">{price}</p>
      </div>
    </div>
  );
}
