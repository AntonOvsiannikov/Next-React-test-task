import { IRating } from "../../types"

export interface MoveProps {
  Poster:string,
  Title:string,
  Year:string,
  Actors:string,
  Ratings:IRating[],
  Plot:string
}