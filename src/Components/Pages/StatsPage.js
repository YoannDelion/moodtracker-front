import React from 'react'
import { DatePicker } from "@material-ui/pickers"
import theme from '../../utils/theme'
import { connect } from 'react-redux'
import { selectMonthForStatistics } from '../../redux/services/entriesService'
import { selectedMonthEntriesSelector } from '../../redux/selectors/entriesSelector'
// MUI
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const StatsPage = ({ classes, selectMonthForStatistics, selectedMonth, entries }) => {

    const handleDateChange = date => selectMonthForStatistics(date)

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' component='h1'>Statistics</Typography>
            <div className={classes.monthPicker}>
                <DatePicker
                    variant="inline"
                    openTo="month"
                    views={["month", "year"]}
                    value={selectedMonth}
                    onChange={handleDateChange}
                    disableFuture
                />

                {entries ? entries.map(entry => <div>
                    {entry.entryDate} - {entry.feeling.feelingName}
                </div>
                )
                    : <CircularProgress />
                }
            </div>
        </Container>
    )
}

const mapStateToProps = state => ({
    selectedMonth: state.entries.selectedMonth,
    entries: selectedMonthEntriesSelector(state)
})

export default connect(mapStateToProps, { selectMonthForStatistics })(withStyles(theme)(StatsPage))
