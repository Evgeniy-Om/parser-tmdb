import { Genre } from '../../entity/Genre'
import { getRepository } from 'typeorm'

export function findGenresByIDs(genre_ids = [36,37]): Promise<Genre[]> {
    return getRepository(Genre)
        .createQueryBuilder( 'genre')
        .where('genre.id IN (:...ids)', {ids: genre_ids})
        .getMany()
}