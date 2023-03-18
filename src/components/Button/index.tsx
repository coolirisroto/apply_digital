
import React, { memo } from "react";
import styles from './styles';

type Props = {
  isActive?: boolean;
  text: string;
  onClick: () => void;
}
const Button: React.FC<Props> = ({ isActive = false, text, onClick }) => {

  return (
    <button
      onClick={onClick}
      style={styles.button(isActive)}
      data-testid={'button'}
    >
      {text}
    </button>
  )
}

export default memo(Button)
