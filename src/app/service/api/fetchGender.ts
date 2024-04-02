import * as APIS from "./api";
import axios from "axios";
export const fetchGender = (name: string) => {
   return  axios(`${APIS.GENDER_SEARCH}?name=${name}`) 
};