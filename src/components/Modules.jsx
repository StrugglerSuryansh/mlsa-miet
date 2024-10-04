const Modules = () => {
    return (
      <section id="modules" className="flex flex-col items-center p-8 ">
        <h2 className="text-2xl font-bold mb-6">Modules to Cover</h2>
        <div className="space-y-4">
          <button 
            className="block w-64 bg-green-500 text-white text-center py-4 rounded hover:bg-green-600"
          >
            Module 1
          </button>
          <button 
            className="block w-64 bg-green-500 text-white text-center py-4 rounded hover:bg-green-600"
          >
            Module 2
          </button>
        </div>
        <button 
          className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </section>
    );
  };
  export default Modules;