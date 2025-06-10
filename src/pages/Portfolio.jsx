export default function Portfolio() {
  const projects = [
    {
      title: "Modern Villa",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
    },
    {
      title: "Office Complex",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
    },
    {
      title: "Townhouse Renovation",
      type: "Renovation",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    }
  ];

  return (
    <div className="pt-20 container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.type}</p>
              <button className="mt-4 text-blue-600 hover:underline">
                View Project Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}