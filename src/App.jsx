import { useRef, useState } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { FiUpload } from "react-icons/fi";

function App() {
  const fileInputRef = useRef(null);

  const [documents, setDocuments] = useState([]);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + "MB",
        fileUrl: URL.createObjectURL(file),
        tag: {
          isOpen: true,
          tagText: "Download",
          tagColor: "green",
        },
      };
      setDocuments((prev) => [...prev, newDoc]);
    }
  };

  const handleDelete = (idx) => {
    setDocuments((prevDocs) => prevDocs.filter((_, i) => i !== idx));
  };

  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Foreground data={documents} onDelete={handleDelete} />
        {/* Upload button */}
        <div
          onClick={() => fileInputRef.current.click()}
          className="fixed z-[4] bottom-10 right-10 w-16 h-16 rounded-full 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
             flex justify-center items-center cursor-pointer
             shadow-lg shadow-purple-800/40 backdrop-blur-md
             hover:scale-110 hover:rotate-12 transition-all duration-300"
        >
          <FiUpload className="text-white text-2xl drop-shadow-md" />
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
    </>
  );
}

export default App;
