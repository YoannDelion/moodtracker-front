import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'tail.datetime/css/tail.datetime-default-blue.css'
import theme from '../utils/theme'
import { withStyles } from '@material-ui/core'

const Calendar = ({ classes, selectedMonth, entries }) => {

    const [date, setDate] = useState(new Date(selectedMonth))

    useEffect(() => {
        setDate(selectedMonth)
    }, [selectedMonth])

    // Check if a day has an existing entry
    const hasEntry = monthDay => {
        let testDate = new Date(date)
        testDate.setDate(monthDay)
        testDate = testDate.toISOString().split('T')[0]
        return entries.find(entry => entry.entryDate.split('T')[0] === testDate)
    }

    // Return an array with the short name of weekdays
    const weekDayShort = moment.weekdaysShort()

    // Creates the header of the calendar
    const weekDayShortName = weekDayShort.map(day => <th key={day} className='week-day'>{day}</th>)

    // Return first day of the month 
    const firstDayOfMonth = () => moment(date).startOf("month").format("d")

    // Creates blanks at the start of the calendar to match the first day of the month 
    const blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td key={`empty-${i}`} className='calendar-day empty'>{''}</td>)
    }

    // Creates the array with the days of the month
    let daysInMonth = []
    for (let d = 1; d <= moment(date).daysInMonth(); d++) {
        let entry = hasEntry(d)
        daysInMonth.push(<td key={d} className='calendar-day'>{entry ? entry.feeling.feelingName.charAt(0) : d}</td>)
    }

    // Creates the needed amount of rows in the calendar
    const totalSlots = [...blanks, ...daysInMonth]
    const rows = []
    let cells = []
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row) // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells) // when reach next week we contain all td in last week to rows 
            cells = [] // empty container 
            cells.push(row) // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
            rows.push(cells)
        }
    })

    // Finally creates the body of the calendar
    daysInMonth = rows.map((d, i) => <tr key={i}>{d}</tr>)

    return (
        <table className={classes.calendar}>
            <thead>
                <tr>
                    {weekDayShortName}
                </tr>
            </thead>
            <tbody>{daysInMonth}</tbody>
        </table>
    )
}

export default withStyles(theme)(Calendar)
