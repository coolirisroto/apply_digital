const styles = {
    dropdown: {
        width: '100%',
        height: 'auto',
        border: '1px solid #2e2e2e',
        borderRadius: 5,
        position: 'relative' as 'relative',
        cursor: 'pointer',
    },
    titleContent: {
        height: '2rem',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 10px',
        background: '#fff'
    },
    title: {
        fontSize: '1rem',
        height: '2rem',
        lineHeight: '2em',
        display: 'inline-flex',
    },
    downIcon: {
        fontSize: '1rem',
        transform: 'rotate(-90deg)',
    },
    list: {
        width: '100%',
        maxHeight: 250,
        overflowY: 'auto' as 'auto',
        boxShadow: '0 2px 2px 0 #dad8d8',
        position: 'absolute' as 'absolute',
        top: 35 as 35,
        background: '#fff',
        zIndex: 100
    },
    selectedItem: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' },
    iconItem: { width: '1.5rem', marginRight: 15 },
    iconItemSelected: { width: '1rem', marginRight: 15, objectFit: 'contain' as 'contain' },
    item: (isSelected: boolean) => ({
        listStyle: 'none',
        padding: '0.8rem 0.5rem',
        display: 'flex',
        alignItems: 'center',
        background: isSelected ? '#eaeaea' : 'none'
    }),
}

export default styles