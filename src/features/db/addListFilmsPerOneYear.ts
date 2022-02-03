import { generatorDateRangeByOneMonth } from '../generatorDateRangeByOneMonth'
import { generateListFilmsForCreateInDb } from '../generateListFilmsForCreateInDb'
import { saveInDb } from './saveInDb'
import { getFilmsByDateRange } from '../api/getFilmsByDateRange'


export async function addListFilmsPerOneYear(year: number) {
    const generator = generatorDateRangeByOneMonth(year)
    for (let dateRange of generator) {
        console.log('DateRange: ', dateRange)
        const response = await getFilmsByDateRange(dateRange)
        const listFilms = generateListFilmsForCreateInDb(response)
        saveInDb(listFilms)
    }
}


