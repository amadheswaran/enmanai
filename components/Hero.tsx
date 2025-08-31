"use client";

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          உங்களுக்கு பொருத்தமான ப்ளாட்டைத் தேடுங்கள்
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          நகரம், பட்ஜெட் மற்றும் விருப்பத்தின் அடிப்படையில் தேர்வு செய்யுங்கள்
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="பெயர் அல்லது நகரம் மூலம் தேடுங்கள்..."
            className="w-full md:w-2/3 px-4 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
}
