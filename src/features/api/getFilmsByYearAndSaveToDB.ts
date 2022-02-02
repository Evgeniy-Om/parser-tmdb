import { generatorDateRangeByOneMonth } from '../generatorDateRangeByOneMonth'
import { getFilmsByDateRange } from './getFilmsByDateRange'
import { saveListFilmsToDB } from '../db/saveListFilmsToDB'


export async function getFilmsByYearAndSaveToDB(year: number) {
    const generator = generatorDateRangeByOneMonth(year)
    for (let value of generator) {
        console.log("DateRange: ", value)
        const res = await getFilmsByDateRange(value)
        await saveListFilmsToDB(res)
    }
}


