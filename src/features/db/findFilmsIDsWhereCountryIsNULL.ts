import { getConnection } from 'typeorm'

export async function findFilmsIDsWhereCountryIsNULL(): Promise<number[]> {
    const filmsIDs = (await getConnection().query(
        `SELECT id FROM film
               EXCEPT
               SELECT "filmId" FROM films_countries`
    )).map(item => item.id)

    return filmsIDs
}