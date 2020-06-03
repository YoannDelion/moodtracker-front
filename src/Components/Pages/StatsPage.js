import React from 'react'
import { DatePicker } from "@material-ui/pickers"
import theme from '../../utils/theme'
import { connect } from 'react-redux'
import { selectMonthForStatistics } from '../../redux/services/entriesService'
import { selectedMonthEntriesSelector } from '../../redux/selectors/entriesSelector'
import Calendar from '../Calendar'
// MUI
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core'
import FeelingsStatsList from '../FeelingsStatsList'

const StatsPage = ({ classes, selectMonthForStatistics, selectedMonth, entries, primaryFeelings }) => {

    const handleDateChange = date => selectMonthForStatistics(date)

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' component='h1'>Statistics</Typography>
            <div className={classes.monthPicker}>
                <DatePicker
                    autoOk
                    views={["month"]}
                    value={selectedMonth}
                    onChange={handleDateChange}
                    disableFuture
                    format="MMMM"
                />
                <DatePicker
                    autoOk
                    variant="inline"
                    views={["year"]}
                    value={selectedMonth}
                    onChange={handleDateChange}
                    disableFuture
                />
                <Calendar selectedMonth={new Date(selectedMonth)} entries={entries} />

                <FeelingsStatsList primaryFeelings={primaryFeelings} entries={entries} />
            </div>
        </Container>
    )
}

const mapStateToProps = state => ({
    selectedMonth: state.entries.selectedMonth,
    entries: selectedMonthEntriesSelector(state),
    primaryFeelings: state.feelings.primaryFeelings
})

export default connect(mapStateToProps, { selectMonthForStatistics })(withStyles(theme)(StatsPage))
