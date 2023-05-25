import { CatenaLogoHallow } from "../../../svg";;
import React from "react";
import styles from "./SoftwareStatus.module.css";

const SoftwareStatus = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        SOFTWARE{" "}
        <span className={`status ${"status-green"} font-14 ${styles.healthy}`}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill={`${"#4AB762"}`} />
          </svg>
          Healthy
        </span>
        <svg
          width="3"
          height="15"
          viewBox="0 0 3 15"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 3C1.89782 3 2.27936 2.84196 2.56066 2.56066C2.84196 2.27936 3 1.89782 3 1.5C3 1.10218 2.84196 0.720644 2.56066 0.43934C2.27936 0.158035 1.89782 0 1.5 0C1.10218 0 0.720645 0.158035 0.43934 0.43934C0.158036 0.720644 0 1.10218 0 1.5C0 1.89782 0.158036 2.27936 0.43934 2.56066C0.720645 2.84196 1.10218 3 1.5 3Z" />
          <path d="M1.5 9C1.89782 9 2.27936 8.84196 2.56066 8.56066C2.84196 8.27936 3 7.89782 3 7.5C3 7.10218 2.84196 6.72064 2.56066 6.43934C2.27936 6.15804 1.89782 6 1.5 6C1.10218 6 0.720645 6.15804 0.43934 6.43934C0.158036 6.72064 0 7.10218 0 7.5C0 7.89782 0.158036 8.27936 0.43934 8.56066C0.720645 8.84196 1.10218 9 1.5 9Z" />
          <path d="M1.5 15C1.89782 15 2.27936 14.842 2.56066 14.5607C2.84196 14.2794 3 13.8978 3 13.5C3 13.1022 2.84196 12.7206 2.56066 12.4393C2.27936 12.158 1.89782 12 1.5 12C1.10218 12 0.720645 12.158 0.43934 12.4393C0.158036 12.7206 0 13.1022 0 13.5C0 13.8978 0.158036 14.2794 0.43934 14.5607C0.720645 14.842 1.10218 15 1.5 15Z" />
        </svg>
      </h3>
      <div className={styles.softwareStatsWrap}>
        <div>
          <h3>Last Block validated</h3>
          <p># -</p>
        </div>
        <div>
          <h3>Blocks validated</h3>
          <p>-</p>
        </div>
        <div>
          <h3>total rewards balance</h3>
          <p>
            <CatenaLogoHallow /> -
          </p>
        </div>
        <div>
          <h3>
            Block reward <span className={styles.perBlock}>(per block)</span>
          </h3>
          <p>
            <CatenaLogoHallow /> -
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareStatus;
