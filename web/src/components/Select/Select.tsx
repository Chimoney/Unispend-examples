import React from 'react';
import styles from './Select.module.css';

export const Select = ({
  children,
  onChange,
  name,
  value,
  ...rest
}: {
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string;
}) => {
  return (
    <div className={styles.container}>
      <select {...{ ...rest, onChange, name, value }}>{children}</select>
    </div>
  );
};
