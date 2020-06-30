import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toggleDetailModal } from '../redux/services/uiService'
import moment from 'moment'
// MUI
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'

const DetailModal = ({ icon, isModalOpen, currentEntry, toggleDetailModal }) => {

    const [note, setNote] = useState(currentEntry.note)

    const handleChange = ({ currentTarget }) => setNote(currentTarget.value)

    const handleSubmit = event => {
        event.preventDefault()

        currentEntry = {
            ...currentEntry,
            note
        }

        console.log(currentEntry)
    }

    const handleCancel = () => {
        setNote('')
        toggleDetailModal(!isModalOpen)
    }

    return (
        <Dialog
            className='detail-modal'
            open={isModalOpen}
            onClose={() => toggleDetailModal(!isModalOpen)}
            fullWidth
            maxWidth='sm'
            aria-labelledby="form-dialog-title">
            <DialogTitle className='detail-modal--title' id="form-dialog-title">
                <img src={icon} alt={currentEntry.feeling.feelingName} />
                <div>Add a note to your mood</div>
                <div>{moment(currentEntry.entryDate).format('MMMM Do YYYY')}</div>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        value={note}
                        onChange={handleChange}
                        multiline fullWidth label='What happened today?' />
                </DialogContent>
                <DialogActions>
                    <Button type='submit' color="primary">
                        Add note
                    </Button>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    isModalOpen: state.ui.isModalOpen,
    currentEntry: state.entries.currentEntry
})

export default connect(mapStateToProps, { toggleDetailModal })(DetailModal)
