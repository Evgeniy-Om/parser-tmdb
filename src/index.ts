import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { updateListFilms } from './features/db/updateListFilms'
import {addListFilmsPerOneYear} from "./features/db/addListFilmsPerOneYear";
import {addListFilmsPerYears} from "./features/db/addListFilmsPerYears";

createConnection().then(async () => {

    // await addListFilmsPerOneYear(2017,12)
    await addListFilmsPerYears(2018,2022)
    // await updateListFilms(2000)

    console.log('Finish')

}).catch(error => console.error('Ошибка в index.ts: ', error))
