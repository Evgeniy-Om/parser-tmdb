import { saveInDb } from './saveInDb'
import { updateFilmDto } from '../../dto/updateFilm.dto'
import { fetchFilmByID } from '../api/fetchFilmByID'
import { generateListFilmsForUpdateInDb } from '../generateListFilmsForUpdateInDb'
import { findIsNotUpdatedFilms } from './findIsNotUpdatedFilms'

// При получении списка фильмов в итоговом результате нет полей: страна-производитель и imdb_id. Поэтому приходится
// делать запрос на каждый фильм по отдельности чтобы получить эту недостающую информацию
export async function updateListFilms(limitFilms: number) {
    const filmsIDs = await findIsNotUpdatedFilms(limitFilms)
    console.log(filmsIDs.length)

    if (filmsIDs) {
        const responses: updateFilmDto[] = []
        for (let i = 0; i < limitFilms; i++) {
            const film = await fetchFilmByID(filmsIDs[i])
            responses.push(film)
        }
        const listFilms = generateListFilmsForUpdateInDb(responses)
        saveInDb(listFilms)
    }
}
