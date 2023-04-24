import axios from "axios";
import { routes } from "../../models";




export const getCharacters = async (count) =>{
    const url = routes.ruteApi + count
    const response = await axios.get(url)
    return response.data.results
}