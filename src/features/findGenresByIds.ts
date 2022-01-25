import { Genre } from '../entity/Genre'

export async function findGenresByIds(genre_ids: number[], connection) {
    const genres = await connection.manager.createQueryBuilder(Genre, 'genre')
        .where('genre.id IN (:...ids)', {ids: genre_ids})
        .getMany()

    return genres
}