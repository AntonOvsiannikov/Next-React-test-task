import {FC} from 'react';
import {RatingsItemProps} from './types'
import styles from './styles.module.scss'

const RatingsItem:FC<RatingsItemProps> = ({ratingItem}) => {
  return (
    <li className={styles['rating-list__item']}>
      <div>{ratingItem.Source}</div>
      <div>{ratingItem.Value}</div>
    </li>
  )
}

export default RatingsItem;
