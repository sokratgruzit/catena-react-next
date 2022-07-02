import Image from 'next/image';
import styles from "./HomeTrust.module.css";

const HomeTrust = () => {
  return (
    <div className={`container`}>
      <Image layout='fill' className={styles.homeGlobeBg} src="/images/home/HomeGlobe.png" alt="Globe" />
      <div className={styles.HomeTrust__inner}>
        <div className={styles.HomeTrust__wrapper}>
          <h1 className="font_51">
            Used by <span className={styles.coreColor}>millions</span>. <br />{" "}
            Trusted with <span className={styles.coreColor}>billions</span>.
          </h1>
          <p className={styles.textColor}>
            Core has the most users of any decentralized platform, ever.
            <br /> And those users are now entrusting the platform with over
            $4.4 billion in funds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTrust;
