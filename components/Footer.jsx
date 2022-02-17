import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID IT. THE EMMY PIZZA, WELL-BAKED SLICES OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #532.
            <br /> New York 53702
            <br /> (306) 4564 2311
          </p>
          <p className={styles.text}>
            3313 Queen Drive #166.
            <br /> Austin TX 53702
            <br /> (306) 354-2311
          </p>
          <p className={styles.text}>
            33132 Euper Lane #500.
            <br /> Boston MA 99913
            <br /> (407) 11900 2311
          </p>
          <p className={styles.text}>
            54672 R. Cheyenne Str #345.
            <br /> Nebraska 53734
            <br /> (427) 4545 1125
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
