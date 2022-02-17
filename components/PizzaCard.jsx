import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width={500} height={500} />
      <h1 className={styles.title}>FIORI DE ZUCCA</h1>
      <span className={styles.price}>$15.20</span>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem
        excepturi magni in dolorum impedit!
      </p>
    </div>
  );
};

export default PizzaCard;
