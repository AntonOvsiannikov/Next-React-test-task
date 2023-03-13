import React,{useState,FC} from 'react';
import {TextField,Button} from '@mui/material';
import styles from './styles.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputProps } from './types';

const SearchInput:FC<SearchInputProps> = ({handlerFunction}) => {

  const [searchValue,setSearchValue] = useState<string>('');
  const handlerChangeInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  const handlerClick = async () => {
    await handlerFunction(searchValue,1);
  }
  return (
    <div className={styles['search-field']}>
      <TextField
        sx={{width:'79%',fontSize:'150px'}}
        label="Search move"
        color="info"
        type="search"
        variant="filled"
        helperText="Enter move title"
        onChange={handlerChangeInputValue}
      />
      <Button 
        sx={{width:'20%',height:'56%'}}
        variant="contained" 
        size='small'
        onClick={handlerClick}
      >
        <SearchIcon fontSize='large'/>
      </Button>
    </div>
  )
}

export default SearchInput;
