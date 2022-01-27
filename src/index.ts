import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { generateListFilmsToAddToDb } from './features/generateListFilmsToAddToDb'

const axios = require('axios').default


createConnection().then(async connection => {

    // const arr = await getFilmsByYear(2015)
    // console.log("arr: ", arr)
    //
    //
    // console.log('Finish')

    // for (let i = 1; i<= 12; i++) {
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
    // const films = await generateListFilmsToAddToDb(response.data.results, connection)
    // await connection.manager.save(films)
    const d = 1
    // Ищу все фильмы из базы данных, у которых не указана ссылка на страны принимавшие участие в их создании
    const filmsIDs = await findFilmsIDsWhereCountryIsNULL(connection)

    if (filmsIDs) {
        const countriesForFilms = []
        for (const filmID of filmsIDs) {
            try {
                console.log(filmID)
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmID}`, {
                    params: {
                        api_key: '64025437a38e07f748339cb4a01efc38',
                        language: 'ru-RU'
                    }
                })
                // console.log(response.data.production_countries.map(item => item.iso_3166_1))
                countriesForFilms.push(response.data.production_countries.map(item => item.iso_3166_1))
                if (countriesForFilms.length > 0) {
                    await addRelations_FilmsCountries(filmsIDs, countriesForFilms, connection)
                }
            } catch (e) {
                console.error('Error1111: ', e.message)
            }
        }
        // console.log(countriesForFilms)

    const result = await generateListFilmsToAddToDb(response.data.results, connection)
    await connection.manager.save(result)

}).catch(error => console.log(error))
