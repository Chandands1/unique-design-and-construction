export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">𝙐𝙉𝙄𝙌𝙐𝙀 𝘿𝙀𝙎𝙄𝙂𝙉𝙎</h1>
        <p className="mt-4 text-xl">Building Dreams with Smart Designs</p>
        <div className="mt-8 space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            📞 Call Now
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            📅 Book a Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}