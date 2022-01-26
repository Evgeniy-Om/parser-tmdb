export function* generatorDateRangeByOneMonth (year: number): IterableIterator<[string, string]> {
    let gte, lte
    for (let month = 1; month <= 12; month++) {
        gte = (month <= 9) ? `${year}-0${month}-02` : `${year}-${month}-02`

        if (month === 12) {
            lte = `${year+1}-01-01`
        } else if (month+1 <=9) {
            lte = `${year}-0${month + 1}-01`
        } else {
            lte = `${year}-${month + 1}-01`
        }
        yield [gte,lte]
    }
}