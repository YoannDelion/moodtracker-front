import React, { useEffect, useState, useCallback } from 'react'
import { postNewEntry } from '../../redux/services/entriesService'
import { connect } from 'react-redux'
import { selectCurrentEntry } from '../../redux/slices/entriesSlice'
import moment from 'moment'
import AddDetailModal from '../AddDetailModal'
// Material UI
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { DatePicker } from '@material-ui/pickers'
import CircularProgress from '@material-ui/core/CircularProgress'
import CreateIcon from '@material-ui/icons/Create'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import * as Moods from '../../Assets/mood-icons'


const HomePage = ({ isLoading, postNewEntry, primaryFeelings, entries, selectCurrentEntry, currentEntry, isModalOpen, toggleDetailModal }) => {

    const [selectedDate, setSelectedDate] = useState(moment())
    const [newEntry, setNewEntry] = useState({ feelingId: '', entryDate: '' })
    const [choosingMood, setChoosingMood] = useState(true)
    const [updating, setUpdating] = useState(false)
    const [isToday, setIsToday] = useState(true)

    const colors = {
        angry: '#FF595E',
        neutral: '#8AC926',
        happy: '#FFCA3A',
        sad: '#1982C4',
        fear: '#6A4C93'
    }

    const changeBackgroundColor = color => {
        document.getElementsByTagName('html')[0].style.backgroundColor = color
    }

    const changeSelectedEntry = useCallback(() => {
        const entryDate = selectedDate.toISOString().split('T')[0]
        const selectedEntry = entries.find(entry => entry.entryDate.split('T')[0] === entryDate)
        selectedEntry ? setChoosingMood(false) : setChoosingMood(true)
        selectCurrentEntry(selectedEntry)
        setUpdating(false)
        selectedEntry && changeBackgroundColor(colors[selectedEntry.feeling.feelingName.toLowerCase()])
    }, [entries, selectCurrentEntry, selectedDate])

    useEffect(() => {
        changeSelectedEntry()
        return () => {
            changeBackgroundColor('#fff')
        }
    }, [selectedDate, changeSelectedEntry])

    const handleDateChange = date => {
        setSelectedDate(date)
        setIsToday(date.isSame(moment(), 'day'))
    }

    const handleButtonClick = ({ currentTarget }) => {
        // Not using setState because it's not immediate so it doesn't send the correct data
        newEntry.feelingId = currentTarget.value
        newEntry.entryDate = selectedDate.toISOString()

        postNewEntry(newEntry, updating)
        setNewEntry({ feelingId: '', entryDate: '' })
    }

    const handleUpdateButtonClick = () => {
        setUpdating(!updating)
        changeBackgroundColor('#fff')
        !updating ? changeBackgroundColor('#fff') : changeBackgroundColor(colors[currentEntry.feeling.feelingName.toLowerCase()])
    }

    return (
        <Container maxWidth='sm' className='mui-container'>

            <div className='homepage--header'>
                <Typography variant={'body1'} align='center'>{isToday ? 'How are you feeling today?' : 'How were you feeling?'}</Typography>
                <div className="monthPicker">
                    <IconButton onClick={() => handleDateChange(moment(selectedDate).subtract(1, 'day'))}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <DatePicker
                        showTodayButton
                        autoOk
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/DD/yyyy"
                        disableFuture
                        value={selectedDate}
                        onChange={handleDateChange}
                        keyboardbuttonprops={{
                            'aria-label': 'change mood date',
                        }}
                    />
                    <IconButton disabled={isToday} onClick={() => handleDateChange(moment(selectedDate).add(1, 'days'))}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>

            <div className='moods-button-container'>
                {!isLoading ? <div>
                    {choosingMood || updating ? (primaryFeelings ? primaryFeelings.map(feeling => <div className='mood-container' key={feeling.feelingId}>
                        <img src={Moods[feeling.feelingName]} alt={feeling.feelingName}
                            className={`mood-container__icon moods--${feeling.feelingName}`} />
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
                        : <div className={`display-mood mood--${currentEntry.feeling.feelingName}`}>
                            <img src={Moods[currentEntry.feeling.feelingName]} alt={currentEntry.feeling.feelingName}
                                className={`display-mood__icon moods--darkgrey`} />
                            <Typography>{currentEntry.feeling.feelingName}</Typography>
                        </div>
                    }
                </div>
                    : <CircularProgress />
                }
            </div>
            <div className="homepage--footer">
                {!choosingMood && <IconButton onClick={handleUpdateButtonClick}>
                    {updating ? <ClearIcon /> : <CreateIcon />}
                </IconButton>}
            </div>

            {currentEntry && currentEntry.feeling && <AddDetailModal icon={Moods[currentEntry.feeling.feelingName]} />}
        </Container >
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading,
    primaryFeelings: state.feelings.primaryFeelings,
    currentEntry: state.entries.currentEntry,
    entries: state.entries.entries
})

export default connect(mapStateToProps, { postNewEntry, selectCurrentEntry })(HomePage)