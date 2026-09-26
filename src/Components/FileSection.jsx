import {
    Search,
    ChevronDown,
    FileText,
    Image,
    Archive,
    Video,
    Box,
    Database,
    Download,
    Copy,
} from "lucide-react";

import "./FileSection.css";

const files = [
    {
        id: 1,
        name: "sample-100kb.pdf",
        type: "PDF",
        size: "100 KB",
        category: "PDF Document",
        description: "Sample PDF for upload and file validation testing",
        icon: FileText,
    },
    {
        id: 2,
        name: "sample-1mb.jpg",
        type: "JPG",
        size: "1 MB",
        category: "JPEG Image",
        description: "Sample image for image upload testing",
        icon: Image,
    },
    {
        id: 3,
        name: "sample-5mb.zip",
        type: "ZIP",
        size: "5 MB",
        category: "Compressed Archive",
        description: "Archive file for upload and extraction testing",
        icon: Archive,
    },
    {
        id: 4,
        name: "sample-10mb.mp4",
        type: "MP4",
        size: "10 MB",
        category: "Video Container",
        description: "Video file for upload and streaming testing",
        icon: Video,
    },
    {
        id: 5,
        name: "sample-25mb.bin",
        type: "BIN",
        size: "25 MB",
        category: "Raw Binary",
        description: "Binary file for file-size and storage testing",
        icon: Box,
    },
    {
        id: 6,
        name: "sample-100mb.bin",
        type: "BIN",
        size: "100 MB",
        category: "Large Binary",
        description: "Large file for testing upload limits and performance",
        icon: Database,
    },
];

const sizes = [
    "All",
    "100 KB",
    "500 KB",
    "1 MB",
    "5 MB",
    "10 MB",
    "50 MB",
    "100 MB",
];

function FileSection() {
    return (
        <section className="files-section" id="files">
            <div className="files-container">

                {/* Section header */}

                <div className="files-header">
                    <div>
                        <h2>Download test files</h2>

                        <p>
                            Real, ready-to-use files for testing uploads, downloads,
                            file validation, and application workflows.
                        </p>
                    </div>

                    <span className="file-count">
                        24 TEST FILES
                    </span>
                </div>

                {/* Search + filters */}

                <div className="file-toolbar">

                    <div className="search-box">
                        <Search size={16} />

                        <input
                            type="text"
                            placeholder="Search files (e.g. pdf, 10mb, json)..."
                        />
                    </div>

                    <div className="select-group">

                        <button className="filter-select">
                            All formats
                            <ChevronDown size={15} />
                        </button>

                        <button className="filter-select">
                            All sizes
                            <ChevronDown size={15} />
                        </button>

                    </div>
                </div>

                {/* Size filters */}

                <div className="size-filter">

                    <span className="size-label">
                        Size:
                    </span>

                    {sizes.map((size, index) => (
                        <button
                            key={size}
                            className={`size-button ${index === 0 ? "active" : ""
                                }`}
                        >
                            {size}
                        </button>
                    ))}

                </div>

                {/* Files */}

                <div className="file-grid">

                    {files.map((file) => {
                        const Icon = file.icon;

                        return (
                            <article className="file-card" key={file.id}>

                                <div className="file-card-top">

                                    <span className="file-type">
                                        {file.type}
                                    </span>

                                    <Icon
                                        className="file-type-icon"
                                        size={17}
                                    />

                                </div>

                                <div className="file-details">

                                    <h3>
                                        {file.name}
                                    </h3>

                                    <p className="file-meta">
                                        {file.size}
                                        <span>·</span>
                                        {file.category}
                                    </p>
                                    <p className="file-description">
                                        {file.description}
                                    </p>
                                </div>
                                <div className="file-card-actions">
                                    <a
                                        href={`/files/${file.name}`}
                                        download
                                        className="download-button"
                                    >
                                        <Download size={14} />
                                        Download
                                    </a>
                                    <button
                                        className="copy-button"
                                        title="Copy file link"
                                    >
                                        <Copy size={15} />
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FileSection;