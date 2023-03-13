import {FC} from 'react';
import {MoveCardProps} from './types';
import Image from 'next/image'
import Link from 'next/link'
import NAImg from '../../assets/img/N-A.jpg'
import styles from './styles.module.scss'
import {Card,CardMedia,CardActionArea,CardContent,Typography} from '@mui/material'

const MoveCard:FC<MoveCardProps> = ({moveItem}) => {
  return (
    <li className={styles['card-list__item']}>
      <Link href={`/movies/${moveItem.imdbID}`} style={{textDecoration:'none'}}>
        <Card className={styles['card-list__item-card']}>
          <CardActionArea className={styles['card-list__item-container']}>
            <CardMedia className={styles['card-list__item-img']}>
              <Image 
                alt=''
                width={300}
                height={350}
                src={moveItem.Poster !== "N/A" ? moveItem.Poster : NAImg}
              />
            </CardMedia>
            <CardContent className={styles['card-list__item-content']}>
              <Typography gutterBottom variant="h4" component="div">
                {moveItem.Title}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {moveItem.Year}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </li>
  )
}

export default MoveCard;
