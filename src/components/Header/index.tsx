import React from 'react'
import styles from './styles';
import imageHeader from '../../assets/icons/hacker-news.svg'

const Header = () => {
        return (
            <div className="container">
                <div className='column'>
                    <img src={imageHeader} style={styles.image} alt="HACKER NEWS" />
                </div>
            </div>
        )
}

export default Header