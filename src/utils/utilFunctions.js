export const getYearAndMonthFromISOStringDate = isoStringDate => {
    const date = new Date(isoStringDate)
    return `${date.getFullYear()}-${date.getMonth()}`
}