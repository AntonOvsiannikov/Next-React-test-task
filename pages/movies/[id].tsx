import {getOneMove} from '../../http/index'
import { MoveProps } from './types'
import {Box,Card,CardMedia,Typography,CardContent,CardActions} from '@mui/material'
import Image from 'next/image'
import NAImg from '../../assets/img/N-A.jpg'
import RatingList from '../../components/RatingList/RatingList'
import styles from './styles.module.scss'
import CardButton from '../../components/CardButton/CardButton'
import { GetServerSideProps} from 'next'
import { ParsedUrlQuery } from 'querystring';

export default function Move({searchMove}:{searchMove: MoveProps}) {
  return (
    <Box className={styles['page-wrapper']}>
      <Card className={styles['page-wrapper__card']}>
        <CardMedia className={styles['page-wrapper__card-poster']}>
          <Image 
            alt=''
            style={{
              border:'1px solid black'
            }}
            width={550}
            height={800}
            src={searchMove.Poster !== "N/A" ? searchMove.Poster : NAImg}
          />
          <Typography 
            gutterBottom variant="h1" 
            component="div"
            className={styles['page-wrapper__card-poster-title']}
          >
            {searchMove.Title}
          </Typography>
        </CardMedia>
        <CardContent className={styles['page-wrapper__card-info']}>
          <div className={styles['page-wrapper__card-info-first-section']}>
            <Typography gutterBottom variant="h4" component="div">
                Year of release:<span>{searchMove.Year}</span>
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
                Actors:<span>{searchMove.Actors}</span>
            </Typography>
            <div className={styles['page-wrapper__card-info-first-section-list-wrapper']}>
              <Typography gutterBottom variant="h4" component="div">
                Ratings:
              </Typography>
              <RatingList ratingList={searchMove.Ratings}/>
            </div>
          </div>
          <div className={styles['page-wrapper__card-info-second-section']}>
            <Typography gutterBottom variant="h4" component="div">
              Plot: <span>{searchMove.Plot}</span>
            </Typography>
          </div>
          <CardActions
            sx={{
              height:'15%',
              display:'flex',
              alignItems:'center'
            }}>
            <CardButton url={'/'} btnText={'Back'}/>
            <CardButton url={'/'} btnText={'Add to Favorite'}/>
          </CardActions>
        </CardContent>

      </Card>
    </Box>
  )
}
export const getServerSideProps:GetServerSideProps = async ({params}) => {
  try {
    const id = (params as ParsedUrlQuery).id;
    const searchMove = await getOneMove(id);
    return {
      props:{searchMove}
    }
  } catch(e) {
    return {
      props:{searchMove:[]}}
  }
}