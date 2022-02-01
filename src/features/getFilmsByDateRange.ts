import { CreateFilmDto } from '../dto/createFilm.dto'
import { fetchFilms } from './fetchFilms'

export async function getFilmsByDateRange(dateRange: [string, string]): Promise<CreateFilmDto[]> {

    let response = await fetchFilms(dateRange, 1)
    let films = response.data.results
    let totalPages = response.data.total_pages
    console.log(totalPages)
    console.log(response.data.total_results)

    if (totalPages > 1) {
        for (let page = 2; page <= totalPages; page++) {
            response = await fetchFilms(dateRange, page)
            films.push(...response.data.results)
        }
    }
    return films

}