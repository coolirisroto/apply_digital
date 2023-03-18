import { colors } from '../../styles'
const styles = {
  button: (isActive: boolean) => ({
      padding: '0.188rem 2.5rem',
      borderRadius: 2,
      fontFamily: 'Roboto',
      fontSize: '1rem',
      lineHeight: 1.75,
      border: `1px solid  ${isActive ? colors.azure : colors.borderGrey}`,
      background: 'none',
      cursor: 'pointer',
      color: isActive ? colors.azure : colors.grey,
    }),
}

export default styles