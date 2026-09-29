import { useState } from "react";
import { Copy, Download } from "lucide-react";
import {
  absoluteFileUrl,
  customFileName,
  filePath,
  findFile,
  formats,
  parseSize,
  sizes,
} from "../data/files";
import { useCopy } from "../hooks/useCopy";

function Composer({ format, size, onFormat, onSize }) {
  const preset = format && size ? findFile(format, size) : null;
  const missingPreset = Boolean(format && size && !preset);
  const [customOpen, setCustomOpen] = useState(false);
  const [amount, setAmount] = useState(() => parseSize(size).amount);
  const [unit, setUnit] = useState(() => parseSize(size).unit);
  const linkCopy = useCopy();

  function chooseSize(next) {
    onSize(next);
    const parsed = parseSize(next);
    setAmount(parsed.amount);
    setUnit(parsed.unit);
  }

  const showCustom = customOpen || missingPreset;
  const amountNumber = Number(amount);
  const customValid =
    Boolean(format) &&
    amount !== "" &&
    Number.isFinite(amountNumber) &&
    amountNumber > 0 &&
    amountNumber <= 1024;

  let active = null;
  if (showCustom && customValid) {
    const name = customFileName(format, amount, unit);
    active = {
      name,
      size: `${amount} ${unit}`,
      description: "Custom file for upload and storage tests",
    };
  } else if (preset) {
    active = preset;
  }

  const fileUrl = active ? absoluteFileUrl(active.name) : "";

  return (
    <div className="stack gap-10">
      <div className="stack gap-4">
        <h1 className="display">
          Free test files for <mark className="mark">developers</mark> and{" "}
          <mark className="mark">testers</mark>
        </h1>
        <p className="text-md muted measure">
          Download dummy files in different formats and sizes to test
          uploads, downloads, file validation, and storage limits. No signup.
        </p>
      </div>

      <div className="card card-pad stack gap-6">
        <div className="stack gap-2">
          <p className="upper faint" id="format-label">
            Format
          </p>
          <div className="flex wrap gap-2" role="group" aria-labelledby="format-label">
            {formats.map((item) => (
              <button
                key={item}
                type="button"
                className="chip"
                aria-pressed={format === item}
                onClick={() => onFormat(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="stack gap-2">
          <p className="upper faint" id="size-label">
            Size
          </p>
          <div className="flex wrap gap-2" role="group" aria-labelledby="size-label">
            {sizes.map((item) => (
              <button
                key={item}
                type="button"
                className="chip"
                aria-pressed={size === item}
                onClick={() => chooseSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="link self-start"
          aria-expanded={showCustom}
          onClick={() => {
            if (missingPreset) {
              setCustomOpen(true);
              return;
            }
            setCustomOpen((open) => !open);
          }}
        >
          Custom size →
        </button>

        {showCustom && (
          <div className="flex wrap center gap-2">
            <label className="w-amount">
              <span className="sr-only">Custom size</span>
              <input
                className="input"
                inputMode="decimal"
                value={amount}
                onChange={(event) => {
                  const next = event.target.value;
                  if (next === "" || /^\d*\.?\d*$/.test(next)) {
                    setAmount(next);
                  }
                }}
                placeholder="10"
              />
            </label>
            <div className="segment" role="group" aria-label="Unit">
              {["KB", "MB"].map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={unit === option}
                  onClick={() => setUnit(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mono text-xs muted">
              {format
                ? customValid
                  ? customFileName(format, amount, unit)
                  : "Enter a size from 1 to 1024."
                : "Pick a format to name the file."}
            </p>
          </div>
        )}
      </div>

      <div className="card card-warm result-bar">
        {active ? (
          <>
            <div className="stack gap-1">
              <div className="flex wrap center gap-2">
                <h2 className="file-title">{active.name}</h2>
                <span className="size-badge">{active.size}</span>
              </div>
              <p className="text-sm muted">{active.description}</p>
            </div>
            <div className="flex wrap gap-2">
              <a className="btn btn-primary" href={filePath(active.name)} download>
                <Download size={14} aria-hidden="true" />
                Download
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => linkCopy.copy(fileUrl)}
              >
                <Copy size={14} aria-hidden="true" />
                {linkCopy.copied ? "Copied" : "Copy link"}
              </button>
            </div>
          </>
        ) : (
          <p className="text-sm muted">
            {missingPreset
              ? `No preset for ${format} at ${size}. Set a custom size above.`
              : "Pick a format and a size."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Composer;
