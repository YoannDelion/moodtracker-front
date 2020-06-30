import { toggleModal } from '../slices/uiSlice'

/**
 * Toggle Modal Opening
 */
export const toggleDetailModal = isOpen => async dispatch => {
    dispatch(toggleModal(isOpen))
}