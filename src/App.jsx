import { useMemo, useState } from "react";
import Composer from "./Components/Composer";
import FileSection from "./Components/FileSection";
import Header from "./Components/Header";
import { files } from "./data/files";

function App() {
  const [format, setFormat] = useState("PDF");
  const [size, setSize] = useState("100 KB");
  const [query, setQuery] = useState("");

  const visibleFiles = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return files.filter((file) => {
      if (format && file.type !== format) return false;
      if (size && file.size !== size) return false;
      if (!needle) return true;

      return [file.name, file.type, file.size, file.description]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [format, size, query]);

  const filtersActive = Boolean(format || size || query.trim());

  function clearFilters() {
    setFormat(null);
    setSize(null);
    setQuery("");
  }

  return (
    <>
      <Header />
      <main className="site-main">
        <div className="container">
          <Composer
            format={format}
            size={size}
            onFormat={setFormat}
            onSize={setSize}
          />
          <FileSection
            files={visibleFiles}
            total={files.length}
            query={query}
            onQuery={setQuery}
            filtersActive={filtersActive}
            onClear={clearFilters}
          />
        </div>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Dummy files for testing uploads and downloads. Not real documents.</p>
          <p>Crafted with care for developers.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
