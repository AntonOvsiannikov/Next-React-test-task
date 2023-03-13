import {FC} from 'react';
import MoveCard from '../MoveCard/MoveCard';
import {MoveCardListProps} from './types';
import styles from './styles.module.scss';

const MoveCardList:FC<MoveCardListProps> = ({moveCardList}) => {
  return (
    <ul className={styles['card-list']}>
      { moveCardList.map((moveItem,index) => (
        <MoveCard key={index} moveItem={moveItem}/>
      ))
      }
    </ul>
  )
}

export default MoveCardList;
