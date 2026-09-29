export const files = [
  {
    id: 1,
    name: "sample-100kb.pdf",
    type: "PDF",
    size: "100 KB",
    description: "Upload validation",
  },
  {
    id: 2,
    name: "sample-1mb.jpg",
    type: "JPG",
    size: "1 MB",
    description: "Image upload",
  },
  {
    id: 3,
    name: "sample-5mb.zip",
    type: "ZIP",
    size: "5 MB",
    description: "Archive upload",
  },
  {
    id: 4,
    name: "sample-10mb.mp4",
    type: "MP4",
    size: "10 MB",
    description: "Streaming tests",
  },
  {
    id: 5,
    name: "sample-25mb.bin",
    type: "BIN",
    size: "25 MB",
    description: "Storage limits",
  },
  {
    id: 6,
    name: "sample-100mb.bin",
    type: "BIN",
    size: "100 MB",
    description: "Upload limits",
  },
];

const SIZE_ORDER = ["100 KB", "1 MB", "5 MB", "10 MB", "25 MB", "100 MB"];

export const formats = [...new Set(files.map((file) => file.type))];

export const sizes = SIZE_ORDER.filter((size) =>
  files.some((file) => file.size === size),
);

export const maxSizeLabel = sizes[sizes.length - 1];

export function findFile(format, size) {
  return files.find((file) => file.type === format && file.size === size) ?? null;
}

export function parseSize(label) {
  const match = /^(\d+(?:\.\d+)?)\s*(KB|MB)$/i.exec(label ?? "");
  if (!match) {
    return { amount: "1", unit: "MB" };
  }
  return { amount: match[1], unit: match[2].toUpperCase() };
}

export function customFileName(format, amount, unit) {
  return `sample-${amount}${unit.toLowerCase()}.${format.toLowerCase()}`;
}

export function filePath(name) {
  return `/files/${encodeURIComponent(name)}`;
}

export function absoluteFileUrl(name) {
  return `${window.location.origin}${filePath(name)}`;
}
