const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderRadius: '6px',
        border: 'solid 1px #979797',
        backgroundColor: '#fff',
        textDecoration: 'none',
    },
    mainContent: {
        padding: '0 1rem'
    },
    favorite : {
        width: '1.5rem',
        height: '1.375rem',
    },
    favoriteButton:{
        border: 'none',
        cursor: 'pointer',
        padding: '2.188rem 1.375rem 2.063rem',
        borderRadius: '0 6px 6px 0',
        backgroundColor: '#f5f5f5',
    },
    hourContainer : {
        display: 'flex',
        alignItems: 'center',
    },
    clock:{
        width: '1rem',
        height: '1rem',
        marginRight: '0.5rem',
    },
    hour: {
        fontSize: '0.688rem',
        color: '#767676',
    },
    newsTitle: {
        fontSize: '0.875rem',
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: '1.43',
        letterSpacing: '0.25px',
        color: '#6b6b6b',
        margin: '0.375rem 0 0.875rem 0',
    }
}

export default styles