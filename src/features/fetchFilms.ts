import { CreateFilmDto } from '../dto/createFilm.dto'
import axios from 'axios'

type ResponseTypes = {
    data: {
        page: number
        results: CreateFilmDto[]
        total_pages: number
        total_results: number
    }
}
export function fetchFilms(dateRange: [string, string], page): Promise<ResponseTypes> {
    try {
        return axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: '64025437a38e07f748339cb4a01efc38',
                language: 'ru-RU',
                include_adult: false,
                page,
                'primary_release_date.gte': dateRange[0],
                'primary_release_date.lte': dateRange[1]
            }
        })
    } catch (e) {
        console.log(e)
    }
}