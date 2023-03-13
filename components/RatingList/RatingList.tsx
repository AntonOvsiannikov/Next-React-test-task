import {FC} from 'react';
import RatingsItem from '../RatingsItem/RatingsItem';
import styles from './styles.module.scss';
import {RatingListProps} from './types'


const RatingList:FC<RatingListProps> = ({ratingList = []}) => {
  return (
    <ul className={styles['rating-list']}>
      {
        ratingList.map((arrItem,index)=> (
          <RatingsItem key={index} ratingItem={arrItem}/>
        ))
      }
    </ul>
  )
}

export default RatingList;
