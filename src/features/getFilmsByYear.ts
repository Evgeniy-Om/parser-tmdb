import { generatorDateRangeByOneMonth } from './generatorDateRangeByOneMonth'
import axios from 'axios'
import { CreateFilmDto } from '../dto/createFilm.dto'

type ResponseTypes = {
    data: {
        page: number
        results: CreateFilmDto[]
        total_pages: number
        total_results: number
    }
}

export async function getFilmsByYear (year: number): Promise<number[]> {
    const generator = generatorDateRangeByOneMonth(year)
    const arr = []
    for (let value of generator) {
        try {
            const response: ResponseTypes = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: '64025437a38e07f748339cb4a01efc38',
                    language: 'ru-RU',
                    include_adult: false,
                    page: 1,
                    'primary_release_date.gte': value[0],
                    'primary_release_date.lte': value[1]
                }
            })
            arr.push(response.data.total_pages)
        } catch (e) {
            console.log(e)
        }
    }
    return arr
}