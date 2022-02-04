import { Film } from '../../entity/Film'
import { getManager } from 'typeorm'

export async function saveInDb(listFilms: Film[]) {
    await getManager().save(listFilms)
}