import { CreateFilmDto } from '../../dto/createFilm.dto'
import { Film } from '../../entity/Film'
import { findGenresByIDs } from './findGenresByIDs'

export async function generateListFilmsToAddToDb(listOfFilms: CreateFilmDto[]) {
    const films = []
    for (const film of listOfFilms) {
        const newFilm = new Film()

        newFilm.id = film.id
        newFilm.original_language = film.original_language
        newFilm.original_title = film.original_title
        newFilm.overview = film.overview
        newFilm.popularity = film.popularity
        newFilm.poster_path = film.poster_path
        newFilm.release_date = new Date(film.release_date)
        newFilm.title = film.title
        newFilm.vote_average = film.vote_average
        newFilm.vote_count = film.vote_count
        newFilm.genres = await findGenresByIDs(film.genre_ids)

        films.push(newFilm)
    }
    return films
}