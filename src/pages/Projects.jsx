export default function Projects() {
  const projectImages = [
    "/assests/project1.jpeg",
    "/assests/project2.jpeg",
    "/assests/project3.jpeg",
    "/assests/project4.jpeg",
    "/assests/project5.jpeg",
    "/assests/project6.jpeg",
    "/assests/project7.jpeg",
    "/assests/project8.jpeg",
    "/assests/project9.jpeg"
  ];

  return (
    <div className="pt-20 px-4 pb-16 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Completed Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectImages.map((src, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-white">
            <img
              src={src}
              alt={`Project ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
