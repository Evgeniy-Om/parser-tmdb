import { Film } from '../../entity/Film'
import { findCountriesByIDs } from './findCountriesByIDs'

export async function addRelations_FilmsCountries(films: number[], countries: string[][], connection) {

    const resultFilms = []
    for (let i = 0; i < films.length; i++) {
        const updateFilm = new Film()

        updateFilm.id = films[i]
        updateFilm.countries = await findCountriesByIDs(countries[i], connection)

        resultFilms.push(updateFilm)
    }
    await connection.manager.save(resultFilms)
}