import React from 'react'
import { connect } from 'react-redux'
import { toggleDetailModal } from '../redux/services/uiService'
import moment from 'moment'
// MUI
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Divider from '@material-ui/core/Divider'

const ShowEntryModal = ({ entry, isLoading, isModalOpen, toggleDetailModal }) => {
    return (
        <Dialog
            className='detail-modal'
            open={isModalOpen}
            onClose={() => toggleDetailModal(!isModalOpen)}
            fullWidth
            maxWidth='sm'>
            <DialogTitle id="max-width-dialog-title">{moment(entry.entryDate).format('MMMM Do YYYY')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <p>Created at:</p>
                    <p>{moment(entry.createdAt).format('MMMM Do YYYY h:mm:ss')}</p>
                </DialogContentText>
                <Divider />
                {entry.updatedAt && <>
                    <DialogContentText>
                        <p>Last updated at:</p>
                        <p>{moment(entry.updatedAt).format('MMMM Do YYYY h:mm:ss')}</p>
                    </DialogContentText>
                    <Divider />
                </>}
                <DialogContentText>
                    <p>Note:</p>
                    <p>{entry.note ? entry.note : <i>You can add notes in the homepage</i>}</p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => toggleDetailModal(!isModalOpen)} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading,
    isModalOpen: state.ui.isModalOpen
})

export default connect(mapStateToProps, { toggleDetailModal })(ShowEntryModal)

