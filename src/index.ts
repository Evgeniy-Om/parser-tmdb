import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { findFilmsIDsWhereCountryIsNULL } from './features/db/findFilmsIDsWhereCountryIsNULL'
import axios from 'axios'
import { generatorDateRangeByOneMonth } from './features/generatorDateRangeByOneMonth'
import { CreateFilmDto } from './dto/createFilm.dto'
import { getFilmsByYearAndSaveToDB } from './features/api/getFilmsByYearAndSaveToDB'
import { addRelations_FilmsCountries } from './features/db/addRelations_FilmsCountries'
import { findCountriesByIDs } from './features/db/findCountriesByIDs'
import { Country } from './entity/Country'
import { Film } from './entity/Film'
import { findGenresByIDs } from './features/db/findGenresByIDs'
import { generateGTE } from './features/generateGTE'
import { getFilmsByDateRange } from './features/api/getFilmsByDateRange'
import { fetchFilms } from './features/api/fetchFilms'
import { saveListFilmsToDB } from './features/db/saveListFilmsToDB'

createConnection().then(async connection => {

    // const numberPagesByMonth = await getFilmsByYear(1920)
    // console.log("numberPagesByMonth: ", numberPagesByMonth)

    // const response = await getFilmsByDateRange(['1920-01-01', '1920-01-31'])
    // const response = await getFilmsByYear(2021)
    await getFilmsByYearAndSaveToDB(2021)
    // await saveListFilmsToDB(response)
    // console.log("Фильмы: ", films)
    // console.log(await fetchFilms(['1920-02-27', '1920-02-28'],1).then(res => res.data))
    // console.log("Всего фильмов: ", films)
    console.log('Finish')

    // generatorDateRangeByOneMonth2(2015)
    // console.log(generateGTE(1877, 18))
    // for (let i = 1; i<= 12; i++) {

    // const generator = generatorDateRangeByOneMonth(2015);
    //
    // console.log(generator.next().value)
    //
    // }
    // const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
    //     params: {
    //         api_key: '64025437a38e07f748339cb4a01efc38',
    //         language: 'ru-RU',
    //         include_adult: false,
    //         page: 1,
    //         'primary_release_date.gte': '2019-01-02',
    //         'primary_release_date.lte': '2019-02-01'
    //     }
    // })
    // console.log(response.data.total_pages)
    //


    // Ищу все фильмы из базы данных, у которых не указана ссылка на страны принимавшие участие в их создании
    // const filmsIDs = await findFilmsIDsWhereCountryIsNULL(connection)
    //
    // if (filmsIDs) {
    //     const countriesForFilms = []
    //     for (const filmID of filmsIDs) {
    //         try {
    //             console.log(filmID)
    //             const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmID}`, {
    //                 params: {
    //                     api_key: '64025437a38e07f748339cb4a01efc38',
    //                     language: 'ru-RU'
    //                 }
    //             })
    //             // console.log(response.data.production_countries.map(item => item.iso_3166_1))
    //             countriesForFilms.push(response.data.production_countries.map(item => item.iso_3166_1))
    //             if (countriesForFilms.length > 0) {
    //                 await addRelations_FilmsCountries(filmsIDs, countriesForFilms, connection)
    //             }
    //         } catch (e) {
    //             console.error('Error1111: ', e.message)
    //         }
    //     }
    //     // console.log(countriesForFilms)
    //
    //
    // }

    // console.log(await findGenresByIDs([36,37]))


    // await findCountriesByIDs([ 'US', 'MX', 'ZA' ],connection)


}).catch(error => console.error('Error22222: ', error))
