import { generatorDateRangeByOneMonth } from '../generatorDateRangeByOneMonth'
import { getFilmsByDateRange } from './getFilmsByDateRange'
import { CreateFilmDto } from '../../dto/createFilm.dto'


export async function getFilmsByYear(year: number): Promise<CreateFilmDto[] > {
    const generator = generatorDateRangeByOneMonth(year)
    const films = []
    for (let value of generator) {
        const res = await getFilmsByDateRange(value)
        films.push(...res)
    }
    return films
}