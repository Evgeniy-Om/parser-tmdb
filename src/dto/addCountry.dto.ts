import { Entity } from 'typeorm'

@Entity()
export class addCountryDto {
    iso_3166_1: string[]
    name: string
}