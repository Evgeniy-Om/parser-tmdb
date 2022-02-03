import axios from 'axios'
import { updateFilmDto } from '../../dto/updateFilm.dto'

export async function fetchFilmByID (id: number): Promise<updateFilmDto> {
    const url = `${process.env.BASE_FILM_URL}${id}`
    try {
        const response = await axios.get(url, {
            params: {
                api_key: process.env.API_KEY,
                language: 'ru-RU'
            }
        })
        return response.data
    } catch (e) {
        console.log("Ошибка в fetchFilmByID: ", e)
    }

}

