import React,{useState,useEffect} from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import {searchMoves} from '../http/index';
import {IResponse} from '../types/index';
import MoveCardList from '../components/MoveCardList/MoveCardList';
import { getPageCount, getPagesArray } from '../utils';
import Pagination from '@mui/material/Pagination';

const MainPage = () => {
  const [filmList,setFilmList] = useState<IResponse>({Search:[],Response:'',totalResults:''});
  const [selectedPage,setSelectedPage] = useState<number>(1);
  const [totalPage,setTotalPageState] = useState<number>(0);
  const pagesArray = getPagesArray(totalPage);

  const getSearchFilms = async (searchValue: string,pageState:number) => {
    try {
      const moveList: IResponse | string = await searchMoves(searchValue,pageState);
      if (typeof moveList === 'string') return
      const pageNumber = getPageCount(Number(moveList.totalResults),10);
      if(moveList.Response === 'True') {
        setFilmList(moveList);
        setTotalPageState(pageNumber);
        localStorage.setItem('search-query',`${searchValue}`)
        localStorage.setItem('selected-page',`${pageState}`)
        return;
      }
      throw new Error('Film not found');
    } catch(e:unknown) {
      setFilmList({Search:[],Response:'',totalResults:''})
      setTotalPageState(0);
      alert(e);
    }
  }
  const handlerChange = (e:React.ChangeEvent<unknown>,value:number)=> {
    const searchQuery = localStorage.getItem('search-query') || '';
    setSelectedPage(value);
    void getSearchFilms(searchQuery,value);
    window.scrollTo(0, 0);
  }
  useEffect(()=> {
    const searchQuery = localStorage.getItem('search-query') || '';
    const pageState = Number(localStorage.getItem('selected-page'));
    if(searchQuery) {
      setSelectedPage(pageState)
      void getSearchFilms(searchQuery,pageState);
      return; 
    }
  },[])
  return (
    <div className={'wrapper-container'}>
      <SearchInput handlerFunction={getSearchFilms}/>
      <MoveCardList moveCardList={filmList.Search}/>
      <Pagination
        count={pagesArray.length}
        page={selectedPage}
        onChange={handlerChange}
        />
    </div>
  )
}

export default MainPage;


