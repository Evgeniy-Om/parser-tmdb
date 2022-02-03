import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { updateListFilms } from './features/db/updateListFilms'

createConnection().then(async () => {

    // await addListFilmsPerOneYear(2020)

    await updateListFilms(23)

    console.log('Finish')

}).catch(error => console.error('Ошибка в index.ts: ', error))
