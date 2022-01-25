import { CreateFilmDto } from '../dto/create-film.dto'
import { Film } from '../entity/Film'
import { findGenresByIds } from './findGenresByIds'

export async function generateListFilmsToAddToDb(listOfFilms: CreateFilmDto[], connection) {
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
        newFilm.genres = await findGenresByIds(film.genre_ids, connection)

        films.push(newFilm)
    }
    return films
}