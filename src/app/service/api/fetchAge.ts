import axios from "axios";
import * as APIS from "./api";

export const fetchAge = (name: string) => {
   return  axios(`${APIS.AGE_SEARCH}?name=${name}`)
};