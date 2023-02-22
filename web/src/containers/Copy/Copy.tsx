import { CopyIcon } from '../../assets';
import styles from './Copy.module.css';

export const Copy = ({
  text,
  onCopy,
}: {
  text: string;
  onCopy: () => void;
}) => {
  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    onCopy();
  };
  return (
    <div className={styles.container}>
      <input type="text" value={text} disabled />
      <CopyIcon onClick={copyToClipboard} />
    </div>
  );
};
