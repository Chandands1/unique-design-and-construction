export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      icon: "🏠",
      features: [
        "Custom home building",
        "Villa construction",
        "Duplex/triplex projects"
      ]
    },
    {
      title: "Commercial Projects",
      icon: "🏢",
      features: [
        "Office spaces",
        "Retail buildings",
        "Mixed-use developments"
      ]
    },
    {
      title: "Renovation Services",
      icon: "🛠️",
      features: [
        "Structural upgrades",
        "Interior remodeling",
        "Exterior facelifts"
      ]
    }
  ];

  return (
    <div className="pt-20 container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Comprehensive construction solutions tailored to your vision and budget
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}