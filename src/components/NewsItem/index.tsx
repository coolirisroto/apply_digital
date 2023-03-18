import React from 'react'
import filledheart from '../../assets/icons/filled-heart.svg'
import heart from '../../assets/icons/heart.svg'
import clock from '../../assets/icons/clock.svg'
import styles from './styles';
import '../../App.css';
import { Item } from '../../clients/algolia';
import { formatDistance } from 'date-fns'

interface NewsItemProps {
  item: Item;
  isFavorite?: boolean;
  onPress(item: Item): void
}

const NewsItem: React.FC<NewsItemProps> = ({item, isFavorite, onPress}) => {
  const addToFavorite = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
    e.preventDefault()
    onPress(item);
  }

  const since = formatDistance(new Date(item.created_at), new Date(), {addSuffix: true})

  return (
    <a href={item.story_url} target="_blank" rel="noreferrer" style={styles.container} className='opacity'>
        <div style={styles.mainContent}>
          <div style={styles.hourContainer}>
            <img style={styles.clock} src={clock} alt="time" />
            <span style={styles.hour}>{`${since} by ${item.author}`}</span>
            </div>
          <h4 style={styles.newsTitle}>{item.story_title}</h4>
        </div>
        <button style={styles.favoriteButton} onClick={addToFavorite} className='heart-button' data-testid={`news_item_button_${item.created_at_i}`}>
            <img style={styles.favorite} src={isFavorite ? filledheart : heart } alt="add-faves" id="fav"/>
        </button>
    </a>
  )
}

export default NewsItem