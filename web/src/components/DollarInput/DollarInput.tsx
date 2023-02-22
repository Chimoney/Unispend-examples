import styles from './DollarInput.module.css';

export const DollarInput = ({
  name,
  onChange,
  value
}: {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.container}>
      <p>$</p>
      <input type="number" value={value} name={name} onChange={onChange} />
    </div>
  );
};
