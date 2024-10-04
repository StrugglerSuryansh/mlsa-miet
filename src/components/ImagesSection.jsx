const ImagesSection = () => {
    const images = [
      { src: "./images/z.png", text: "Image 1 Description" },
      { src: "/api/placeholder/300/200", text: "Image 2 Description" },
      { src: "/api/placeholder/300/200", text: "Image 3 Description" },
    ];
  
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
              <p className="mt-4 text-center text-gray-700">{image.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default ImagesSection;