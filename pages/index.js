import Head from "next/head";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import PlotCard from "../components/PlotCard";
import Navbar from "../components/Navbar";
import plots from "../data/plots.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>பிளாட் மார்க்கெட்</title>
        <meta name="description" content="தமிழில் பிளாட் விவரங்கள் மற்றும் தேடல்" />
      </Head>

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Filters */}
      <Filters />

      {/* Plots Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {plots.map((plot) => (
          <PlotCard key={plot.id} plot={plot} />
        ))}
      </div>
    </div>
  );
}
