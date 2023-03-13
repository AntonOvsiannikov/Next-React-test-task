import {Button} from '@mui/material'
import Link from 'next/link'
import { CardButtonProps } from './types'
import {FC} from 'react'

const CardButton:FC<CardButtonProps> = ({url,btnText}) => {
  return (
    <Link 
      href={url}  
      style={{
        textDecoration:'none',
        width:'50%',
        height:'70%'
      }}
    >
      <Button 
        variant="contained"
        sx={{
          width:'100%',
          height:'100%',
          color:'white',
          fontWeight:'bold',
          fontSize:'30px'}}
      >
        {btnText}
      </Button>
    </Link>
  )
}
export default CardButton;