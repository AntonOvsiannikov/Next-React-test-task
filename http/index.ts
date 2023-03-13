import { IOptions } from "../types";
export const API_BASE_URL = 'http://www.omdbapi.com/';
import {IResponse} from '../types/index';

const request = (options: IOptions) : Promise<string | IResponse> => {
  const defaults = {};
  options = Object.assign({}, defaults, options);
  return fetch(options.url, options)
  .then(response => 
      response.json().then((json: string) => {
          if(!response.ok) {
              return Promise.reject(json);
          }
          return json;
      })
  );
}


export function searchMoves(rest:string,pageNumber:number) {
  return request({
      url: API_BASE_URL + `?apikey=60a6b816&s=${rest}&page=${pageNumber}`,
      method: 'GET',
  });
}
export function getOneMove(rest:string | undefined | string[]) {
  if (typeof rest === 'undefined' || typeof rest === 'object') return
  return request({
      url: API_BASE_URL + `?apikey=60a6b816&i=${rest}`,
      method: 'GET',
  });
}