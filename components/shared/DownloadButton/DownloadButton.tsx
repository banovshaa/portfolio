"use client";

import styles from "./DownloadButton.module.scss";
import { useState } from "react";
import { IoMdDownload } from "react-icons/io";

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (downloading || downloaded) return;

    setDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
      setDownloaded(true);
    }, 2000);
  };

  return (
    <button
      className={`${styles.download_btn} ${downloading ? styles.loading : ""} ${
        downloaded ? styles.done : ""
      }`}
      onClick={handleDownload}
    >
      <span className={styles.icon}>
        <IoMdDownload size={20} />
      </span>
      <span className={styles.text}>
        {downloading
          ? "Downloading..."
          : downloaded
          ? "Downloaded"
          : "Download CV"}
      </span>
      <span className={styles.bar}></span>
    </button>
  );
};

export default DownloadButton;
