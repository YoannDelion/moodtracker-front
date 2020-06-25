import React from 'react'
import { DatePicker } from "@material-ui/pickers"
import { connect } from 'react-redux'
import { selectMonthForStatistics } from '../../redux/services/entriesService'
import { selectedMonthEntriesSelector } from '../../redux/selectors/entriesSelector'
import Calendar from '../Calendar'
import moment from 'moment'
// MUI
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import FeelingsStatsList from '../FeelingsStatsList'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const StatsPage = ({ selectMonthForStatistics, selectedMonth, entries, primaryFeelings }) => {

    const handleDateChange = date => selectMonthForStatistics(date)

    return (
        <Container maxWidth='sm' className='statspage'>
            <div className='monthPicker'>
                <IconButton onClick={() => handleDateChange(moment(selectedMonth).subtract(1, 'month'))}>
                    <ChevronLeftIcon />
                </IconButton>
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
                <IconButton disabled={moment(selectedMonth).isSame(moment(), 'month')} onClick={() => handleDateChange(moment(selectedMonth).add(1, 'month'))}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <div className="statspage--values">
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

export default connect(mapStateToProps, { selectMonthForStatistics })(StatsPage)
