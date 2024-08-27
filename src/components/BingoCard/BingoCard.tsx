import styles from "./BingoCard.module.css";

interface BingoCardProps {
  numbers: number[];
}
const BingoCard = ({ numbers }: BingoCardProps) => {
  return (
    <div className={styles.root}>
      <h2>
        CI<span>BINGO</span>
      </h2>
      <div className={styles.grid}>
        {numbers.map((num) => (
          <div className={styles.cell} key={num}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoCard;
