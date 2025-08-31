"use client";

import { useState } from "react";

export default function Filters() {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6 flex flex-wrap gap-4 justify-center">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      >
        <option value="">நகரம் தேர்வு</option>
        <option value="chennai">சென்னை</option>
        <option value="madurai">மதுரை</option>
        <option value="coimbatore">கோயம்புத்தூர்</option>
      </select>

      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      >
        <option value="">விலை வரம்பு</option>
        <option value="10">₹10L கீழே</option>
        <option value="20">₹10L - ₹20L</option>
        <option value="30">₹20L மேல்</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      >
        <option value="">வகை</option>
        <option value="residential">வசிப்பிடம்</option>
        <option value="commercial">வணிகம்</option>
      </select>

      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        தேடுங்கள்
      </button>
    </div>
  );
}
