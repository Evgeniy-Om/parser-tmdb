import { CreateFilmDto } from '../../dto/createFilm.dto'
import { Film } from '../../entity/Film'
import { findGenresByIDs } from './findGenresByIDs'
import { getRepository } from 'typeorm'

export async function saveListFilmsToDB(listOfFilms: CreateFilmDto[]) {
    try {
        const films = []
        for (const film of listOfFilms) {
            const newFilm = new Film()

            newFilm.id = film.id
            newFilm.original_language = film.original_language
            newFilm.original_title = film.original_title
            newFilm.overview = film.overview.length ? film.overview : null
            newFilm.popularity = film.popularity
            newFilm.poster_path = film.poster_path
            newFilm.release_date = new Date(film.release_date)
            newFilm.title = film.title
            newFilm.vote_average = film.vote_average
            newFilm.vote_count = film.vote_count
            newFilm.genres = film.genre_ids.length ? await findGenresByIDs(film.genre_ids) : null

            films.push(newFilm)
        }

        await getRepository(Film).save(films)
    } catch (e) {
        console.log('Ошибка записи в БД: ', e)
    }

}