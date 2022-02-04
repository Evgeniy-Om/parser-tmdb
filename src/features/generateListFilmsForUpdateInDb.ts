import { updateFilmDto } from '../dto/updateFilm.dto'
import { Film } from '../entity/Film'

export function generateListFilmsForUpdateInDb(listFilms: updateFilmDto[]) {

    const films: Film[] = []
    for (const film of listFilms) {
        const updateFilm = new Film()

        updateFilm.id = film.id
        updateFilm.imdb_id = film.imdb_id
        updateFilm.countries = film.production_countries
            ? film.production_countries.map(item => ({id: item.iso_3166_1}))
            : []
        updateFilm.is_updated = true

        films.push(updateFilm)
    }
    return films
}