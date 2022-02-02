import { findGenresByIDs } from './findGenresByIDs'
import { createConnection, getConnection } from 'typeorm'

beforeAll(() => {
    return createConnection()
})

afterAll(() => {
    return getConnection().close()
})

test('получение массива объектов жанров из базы @integration', async () => {
    const data = await findGenresByIDs([36, 37])
    expect(data).toEqual([{'id': 37, 'name': 'вестерн'}, {'id': 36, 'name': 'история'}])
})