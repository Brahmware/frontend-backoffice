import ColumnFlexSC from '../../../placements/ColumnFlexSC'
import SessionLogout from './SessionLogout'
import SessionUser from './SessionUser'

const SessionAccount = () => {
    return (
        <ColumnFlexSC>
            <SessionUser />
            <SessionLogout />
        </ColumnFlexSC>
    )
}

export default SessionAccount