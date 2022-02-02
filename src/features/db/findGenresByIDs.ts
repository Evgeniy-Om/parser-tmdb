import { Genre } from '../../entity/Genre'
import { getRepository } from 'typeorm'

export async function findGenresByIDs(genre_ids: number[]): Promise<Genre[]> {
    try {
        const response = await getRepository(Genre)
        .createQueryBuilder( 'genre')
        .where('genre.id IN (:...ids)', {ids: genre_ids})
        .getMany()
        return response
    }
    catch (e) {
        console.log("Ошибка поиска жанров по ID: ", e)
    }

}