export interface IMove {
  Title:string,
  Type:string,
  Poster:string,
  Year:string,
  imdbID:string,
}
export interface IOptions {
  url:string,
  method:string
}
export interface IResponse {
  Search:IMove[],
  Response:string,
  totalResults:string
}
export interface IRating {
  Source:string,
  Value:string
}
