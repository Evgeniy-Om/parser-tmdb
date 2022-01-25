import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { generateListFilmsToAddToDb } from './features/generateListFilmsToAddToDb'

const axios = require('axios').default


createConnection().then(async connection => {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=64025437a38e07f748339cb4a01efc38&language=ru-RU&include_adult=false&include_video=false&year=2016&with_original_language=en&with_watch_monetization_types=flatrate')

    const result = await generateListFilmsToAddToDb(response.data.results, connection)
    await connection.manager.save(result)

}).catch(error => console.log(error))
