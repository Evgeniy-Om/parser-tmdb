import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Genre } from './entity/Genre'
import { films } from './initialData/films'
import { Film } from './entity/Film'
import { CreateFilmDto } from './dto/create-film.dto'

createConnection().then(async connection => {

    // const photo1 = new Photo()
    // photo1.url = 'me.jpg'
    // await connection.manager.save(photo1)
    //
    // const photo2 = new Photo()
    // photo2.url = 'me-and-bears.jpg'
    // await connection.manager.save(photo2)
    //
    // const user = new User()
    // user.name = 'John'
    // user.photos = [photo2, photo1]
    // await connection.manager.save(user)
    //
    // const user2 = new User()
    // user2.name = 'John2'
    // user2.photos = [photo1, photo2]
    // await connection.manager.save(user2)
    //
    // const userRepository = connection.getRepository(User)
    // const users = await userRepository.find()
    // console.log(users)

    // genres.forEach(item => {
    //     const genre = new Genre()
    //     genre.id = item.id
    //     genre.name = item.name
    //     connection.manager.save(genre)
    // })

    // countries.forEach(item => {
    //     const country = new Country()
    //     country.id = item.iso_3166_1
    //     country.name = item.english_name
    //     connection.manager.save(country)
    // })


    function addFilmsToDb(listOfFilms: CreateFilmDto[]) {
        listOfFilms.forEach(film => {
            const newFilm = new Film()

            newFilm.id = film.id
            newFilm.original_language = film.original_language
            newFilm.original_title = film.original_title
            newFilm.overview = film.overview
            newFilm.popularity = film.popularity
            newFilm.poster_path = film.poster_path
            newFilm.release_date = new Date(film.release_date)
            newFilm.title = film.title
            newFilm.vote_average = film.vote_average
            newFilm.vote_count = film.vote_count

            async function addRelations(genre_ids: number[]) {
                newFilm.genres = []
                for (const genreId of genre_ids) {
                    const genre = await connection.manager.findOne(Genre, genreId)
                    newFilm.genres.push(genre)
                }
            }

            addRelations(film.genre_ids)
            connection.manager.save(newFilm)
        })
    }

    addFilmsToDb(films)

    // await connection.manager.save(genre)

    //
    // // const users = await connection
    // //     .getRepository(User)
    // //     .createQueryBuilder("user")
    // //     .leftJoinAndSelect("user.photos", "photo")
    // //     .getMany();
    //
    // console.log(users[0])
    // console.log(users[1])

    // const { sum } = await connection.getRepository(User)
    //     .createQueryBuilder("u")
    //     .select("SUM(u.photos)", "sum")
    //     .where("u.id = :id", { id: 1 })
    //     .getRawOne();
    //
    // console.log(sum)

    // await getConnection()
    //     .createQueryBuilder()
    //     .relation(User, "photos")
    //     .of(1)
    //     .add(13);

//     const user = new User()
// user.id = 1
//     // console.log(user)
//     // user.photos = await getConnection()
//     //     .createQueryBuilder()
//     //     .relation(User, "photos")
//     //     .of(user) // you can use just post id as well
//     //     .loadMany();
//
//     console.log(user)
    // post.author = await getConnection()
    //     .createQueryBuilder()
    //     .relation(Post, "user")
    //     .of(post) // you can use just post id as well
    //     .loadOne();

}).catch(error => console.log(error))
