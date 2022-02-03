import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm'
import { Genre } from './Genre'
import { Country } from './Country'

@Entity()
export class Film {

    @PrimaryColumn()
    id: number

    @Column({nullable: true, default: null})
    imdb_id: string

    @Column()
    original_language: string

    @Column()
    original_title: string

    @Column()
    title: string

    @Column({nullable: true, default: null})
    overview: string

    @Column({type: 'numeric'})
    popularity: number

    @Column({nullable: true, default: null})
    poster_path: string

    @Column()
    release_date: Date

    @Column({type: 'numeric'})
    vote_average: number

    @Column()
    vote_count: number

    @ManyToMany(() => Country, {nullable: true})
    @JoinTable({name: 'films_countries'})
    countries: Country[]

    @ManyToMany(() => Genre, {nullable: true})
    @JoinTable({name: 'films_genres'})
    genres: Genre[]

    @Column({default: false})
    is_updated: boolean
}