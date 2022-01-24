import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany(() => Photo, photo => photo.user,{eager: true, })
    @JoinTable({name: "users_photos"})
    photos: Photo[]
}