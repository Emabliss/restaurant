import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzzaList = ({ pizzalist }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo non
        quidem unde, eveniet eligendi atque iure facere magnam soluta
        accusantium officia perferendis iste molestiae eum recusandae rerum amet
        tempora fugiat?
      </p>
      <div className={styles.wrapper}>
        {pizzalist.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzzaList;
