import { colors } from '../../styles'
const styles =  {
    container:{
        display: 'flex',
        listStyleType: 'none',
        justifyContent:'center'
    },
    item: {
        padding: '0.800rem',
        margin: '0 0.5rem',
        borderRadius: 6,
        border: 'solid 1px #d9d9d9',
        backgroundColor: '#fff',
        cursor: 'pointer'
    },
    itemSelected: {
        backgroundColor: colors.azure,
        color: colors.white
    }

}

export default styles