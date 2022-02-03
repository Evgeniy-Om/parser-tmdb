import { Film } from '../../entity/Film'
import { getManager } from 'typeorm'

export function saveInDb(listFilms: Film[]) {
    getManager().save(listFilms)
}