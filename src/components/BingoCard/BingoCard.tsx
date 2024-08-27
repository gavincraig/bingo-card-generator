import styles from "./BingoCard.module.css";

interface BingoCardProps {
  numbers: number[];
  title?: string;
}
const BingoCard = ({ numbers, title }: BingoCardProps) => {
  return (
    <div className={styles.root}>
      {title && <h2>{title}</h2>}
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
