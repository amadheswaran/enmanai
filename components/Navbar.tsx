export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">
          பிளாட் மார்க்கெட்
        </a>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">முகப்பு</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">எங்களை பற்றி</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">தொடர்பு</a>
        </div>
      </div>
    </nav>
  );
}
