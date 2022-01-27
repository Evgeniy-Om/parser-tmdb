import { Country } from '../../entity/Country'

export async function findCountriesByIDs(countries_ids: string[], connection) {
    const foundCountries = await connection.manager.createQueryBuilder(Country, 'country')
        .where('country.id IN (:...ids)', {ids: countries_ids})
        .getMany()

    console.log(foundCountries)

    return foundCountries
}