import * as APIS from "./api";
import axios from "axios";

export const fetchCountry = (name: string) => {
   return  axios(`${APIS.COUNTRY_SEARCH}?name=${name}`);
};