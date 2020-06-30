import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

const StyledBadge = withStyles(() => ({
    badge: {
        right: 5,
        top: 10,
        border: `2px solid`,
        padding: '0 4px'
    },
}))(Badge)

export default StyledBadge