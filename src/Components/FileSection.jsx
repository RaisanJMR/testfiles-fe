import { Download } from "lucide-react";
import { absoluteFileUrl, filePath } from "../data/files";
import { useCopy } from "../hooks/useCopy";

function FileRow({ file }) {
  const { copied, copy } = useCopy();
  const url = absoluteFileUrl(file.name);

  return (
    <article className="table-row">
      <p className="file-title">{file.name}</p>
      <span className="type-badge">{file.type}</span>
      <p className="file-size text-sm ink">{file.size}</p>
      <p className="file-use text-sm muted">{file.description}</p>
      <div className="file-actions flex end gap-2">
        <a className="btn btn-primary btn-sm" href={filePath(file.name)} download>
          <Download size={14} aria-hidden="true" />
          Download
        </a>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => copy(url)}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </article>
  );
}

function FileSection({
  files,
  total,
  query,
  onQuery,
  filtersActive,
  onClear,
}) {
  const countLabel =
    files.length === total
      ? `${total} ${total === 1 ? "file" : "files"}`
      : `${files.length} of ${total}`;

  return (
    <section className="stack gap-6 mt-12" id="files" aria-label="Library">
      <div className="flex between baseline gap-4 wrap">
        <div className="flex baseline gap-2">
          <h2 className="section-title">Library</h2>
          <span className="text-xs muted">{countLabel}</span>
        </div>
        {filtersActive && (
          <button type="button" className="link" onClick={onClear}>
            Show all files
          </button>
        )}
      </div>

      <label className="w-search">
        <span className="sr-only">Search files</span>
        <input
          className="input"
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search files"
        />
      </label>

      {files.length === 0 ? (
        <div className="card empty stack center gap-2">
          <p className="text-sm muted">No files match.</p>
          <button type="button" className="link" onClick={onClear}>
            Show all files
          </button>
        </div>
      ) : (
        <div className="table">
          <div className="table-row table-head" aria-hidden="true">
            <span>Name</span>
            <span>Type</span>
            <span>Size</span>
            <span>Use</span>
            <span />
          </div>
          {files.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FileSection;
