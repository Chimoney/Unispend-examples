import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { ChromePicker, ColorChangeHandler } from 'react-color';
import { Pencil } from '../../assets';
import styles from './ColorPicker.module.css';

export const ColorPicker = ({
  color,
  onChange,
}: {
  color: string;
  onChange: ColorChangeHandler;
}) => {
  const [open, setOpen] = React.useState(false);
  const colorPickerRef = React.useRef(null);
  const handleClickOutside = () => {
    setOpen(false);
  }

  useOnClickOutside(colorPickerRef, handleClickOutside);

  return (
    <div className={styles.container}>
      <p>{color}</p>
      <Pencil
        onClick={() => {
          setOpen((o) => !o);
        }}
      />
      <div className={styles.picker__container} ref={colorPickerRef}>
        {open && <ChromePicker  color={color} onChange={onChange} />}
      </div>
    </div>
  );
};

