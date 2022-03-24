import {Film} from '../../entity/Film'
import {getManager} from 'typeorm'

export function saveInDb(listFilms: Film[]) {
    listFilms.forEach(async (i) => {
        try {
            // console.log(i)
            await getManager().save(i)
        } catch (e) {
            console.log(e.message)
            console.log(i)
        }
    })

}