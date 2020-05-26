import { createSelector } from '@reduxjs/toolkit'
import { getYearAndMonthFromISOStringDate } from '../../utils/utilFunctions'

const entriesSelector = state => state.entries.entries
const selectedMonth = state => getYearAndMonthFromISOStringDate(state.entries.selectedMonth)

export const selectedMonthEntriesSelector = createSelector(
    [entriesSelector, selectedMonth],
    (entries, selectedMonth) => entries.filter(entry => getYearAndMonthFromISOStringDate(entry.entryDate) === selectedMonth)
)

