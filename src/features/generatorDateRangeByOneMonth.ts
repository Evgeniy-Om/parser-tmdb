import { generateGTE } from './generateGTE'
import { generateLTE } from './generateLTE'

type DateRange = [
    from: string,
    to: string
]

export function* generatorDateRangeByOneMonth(year: number): IterableIterator<DateRange> {
    let gte, lte
    for (let month = 1; month <= 12; month++) {
        gte = generateGTE(year, month)
        lte = generateLTE(year, month)
        yield [gte, lte]
    }
}