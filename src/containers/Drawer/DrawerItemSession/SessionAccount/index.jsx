import ColumnFlexSC from '../../../../components/placements/ColumnFlexSC'
import SessionLogout from './SessionLogout'
import SessionName from './SessionName'
import SessionUser from './SessionUser'

const SessionAccount = () => {
    return (
        <ColumnFlexSC>
            <SessionName />
            <SessionUser />
            <SessionLogout />
        </ColumnFlexSC>
    )
}

export default SessionAccount