import { Film } from '../entity/Film'

export async function findFilmsWhereCountryIsNULL(connection): Promise<Film> {
    const films = await connection.manager.createQueryBuilder(Film, 'film')
        .select('film.id')
        .where('film.country IS NULL')
        .getMany()

    return films
}