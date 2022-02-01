import { generatorDateRangeByOneMonth } from './generatorDateRangeByOneMonth'
import { getFilmsByDateRange } from './getFilmsByDateRange'


export async function getFilmsByYear(year: number): Promise<number[]> {
    const generator = generatorDateRangeByOneMonth(year)
    const films = []
    for (let value of generator) {
        const res = await getFilmsByDateRange(value)
        films.push(...res)
    }
    return films
}