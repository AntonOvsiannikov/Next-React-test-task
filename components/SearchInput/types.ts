export interface SearchInputProps {
  handlerFunction:(searchValue: string,pageNumber:number) => Promise<void>
}

