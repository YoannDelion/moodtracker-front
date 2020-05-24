import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { postNewEntry } from '../../redux/services/entriesService'
import { connect } from 'react-redux'
import { selectCurrentEntry } from '../../redux/slices/entriesSlice'
// Material UI
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80vh'
    }
}

const HomePage = ({ classes, isLoading, postNewEntry, primaryFeelings, entries, selectCurrentEntry, currentEntry }) => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [newEntry, setNewEntry] = useState({ feelingId: '', entryDate: '' })
    const [choosingMood, setChoosingMood] = useState(true)

    const changeSelectedEntry = () => {
        const entryDate = selectedDate.toISOString().split('T')[0]
        const selectedEntry = entries.find(entry => entry.entryDate.split('T')[0] === entryDate)
        selectedEntry ? setChoosingMood(false) : setChoosingMood(true)
        selectCurrentEntry(selectedEntry)
    }

    useEffect(() => {
        changeSelectedEntry()
    }, [selectedDate, changeSelectedEntry])

    const handleDateChange = date => setSelectedDate(date)

    const handleButtonClick = ({ currentTarget }) => {
        // Not using setState because it's not immediate so it doesn't send the correct data
        newEntry.feelingId = currentTarget.value
        newEntry.entryDate = selectedDate.toISOString()

        postNewEntry(newEntry)
        setNewEntry({ feelingId: '', entryDate: '' })
    }

    return (
        <Grid container spacing={4}>
            <Grid item sm={8} xs={12}>
                <Typography variant={'body1'}>Hello {'username'}</Typography>
                <Typography variant={'body1'}>How are you feeling today ?</Typography>

                <div className={classes.buttonsContainer}>
                    {!isLoading ? <>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                disableFuture
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change mood date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        {choosingMood ? (primaryFeelings ? primaryFeelings.map(feeling => <Button
                            onClick={handleButtonClick}
                            key={feeling.feelingId}
                            value={feeling.feelingId}
                            variant='contained'
                            color='primary'>
                            {feeling.feelingName}
                        </Button>)
                            : <CircularProgress />)
                            : <Typography>{currentEntry.feeling.feelingName}</Typography>}
                    </>
                        : <CircularProgress />
                    }
                </div>

            </Grid>
            <Grid item sm={4} xs={12}>
                Side content
          </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading,
    primaryFeelings: state.feelings.primaryFeelings,
    currentEntry: state.entries.currentEntry,
    entries: state.entries.entries
})

export default connect(mapStateToProps, { postNewEntry, selectCurrentEntry })(withStyles(styles)(HomePage))