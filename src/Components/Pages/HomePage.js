import React, { useEffect, useState, useCallback } from 'react'
import { postNewEntry } from '../../redux/services/entriesService'
import { connect } from 'react-redux'
import { selectCurrentEntry } from '../../redux/slices/entriesSlice'
import moment from 'moment'
// Material UI
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import { DatePicker } from '@material-ui/pickers'
import CircularProgress from '@material-ui/core/CircularProgress'
import CreateIcon from '@material-ui/icons/Create'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'

import * as Moods from '../../Assets/mood-icons'

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

    const [selectedDate, setSelectedDate] = useState(moment())
    const [newEntry, setNewEntry] = useState({ feelingId: '', entryDate: '' })
    const [choosingMood, setChoosingMood] = useState(true)
    const [updating, setUpdating] = useState(false)

    const changeSelectedEntry = useCallback(() => {
        const entryDate = selectedDate.toISOString().split('T')[0]
        const selectedEntry = entries.find(entry => entry.entryDate.split('T')[0] === entryDate)
        selectedEntry ? setChoosingMood(false) : setChoosingMood(true)
        selectCurrentEntry(selectedEntry)
        setUpdating(false)
    }, [entries, selectCurrentEntry, selectedDate])

    useEffect(() => {
        changeSelectedEntry()
    }, [selectedDate, changeSelectedEntry])

    const handleDateChange = date => setSelectedDate(date)

    const handleButtonClick = ({ currentTarget }) => {
        // Not using setState because it's not immediate so it doesn't send the correct data
        newEntry.feelingId = currentTarget.value
        newEntry.entryDate = selectedDate.toISOString()

        postNewEntry(newEntry, updating)
        setNewEntry({ feelingId: '', entryDate: '' })
    }

    const handleUpdateButtonClick = () => setUpdating(!updating)

    return (
        <Container maxWidth='sm'>
            <Typography variant={'body1'}>Hello {'username'}</Typography>
            <Typography variant={'body1'}>How are you feeling today ?</Typography>

            <div className={classes.buttonsContainer}>
                {!isLoading ? <>
                    <DatePicker
                        autoOk
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/DD/yyyy"
                        disableFuture
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change mood date',
                        }}
                    />
                    <div>
                        {choosingMood || updating ? (primaryFeelings ? primaryFeelings.map(feeling => <div className='moods-button-container'>

                            <img src={Moods[feeling.feelingName]} alt={feeling.feelingName}
                                className={`moods-button-container__icon moods--${feeling.feelingName}`} />

                            <Button
                                onClick={handleButtonClick}
                                key={feeling.feelingId}
                                value={feeling.feelingId}
                                variant='contained'
                                color='primary'>
                                {feeling.feelingName}
                            </Button>
                        </div>)
                            : <CircularProgress />)
                            : <Typography>{currentEntry.feeling.feelingName}</Typography>}
                    </div>
                </>
                    : <CircularProgress />
                }
            </div>
            {!choosingMood && <IconButton onClick={handleUpdateButtonClick}>
                {updating ? <ClearIcon /> : <CreateIcon />}
            </IconButton>}
        </Container>
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading,
    primaryFeelings: state.feelings.primaryFeelings,
    currentEntry: state.entries.currentEntry,
    entries: state.entries.entries
})

export default connect(mapStateToProps, { postNewEntry, selectCurrentEntry })(withStyles(styles)(HomePage))