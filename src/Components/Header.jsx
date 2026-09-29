import { files, formats, maxSizeLabel } from "../data/files";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="flex center gap-2">
          <a href="/" className="logo">
            testfiles
          </a>
          <span className="crafted">crafted</span>
        </div>
        <p className="flex wrap end gap-2 text-xs muted">
          <span>{formats.length} formats</span>
          <span aria-hidden="true">·</span>
          <span>up to {maxSizeLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{files.length} files</span>
          <span aria-hidden="true">·</span>
          <span>no signup</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
