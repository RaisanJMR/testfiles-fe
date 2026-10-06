# testfiles

Free dummy files for developers and testers. Pick a format and a size, then download a sample file to test uploads, downloads, file validation, and storage limits. No signup.

**Live:** [https://raisanjmr.github.io/testfiles-fe/](https://raisanjmr.github.io/testfiles-fe/)

## Features
- Format and size picker (PDF, JPG, ZIP, MP4, BIN)
- Instant download and copy-link actions
- Searchable file library
- Optional custom size for naming presets

## Stack

- React 19
- Vite
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Sample files

Static assets are served from `public/` (for example under `/files/...`). Catalog entries live in `src/data/files.js`.
