import { NotificationRightLayout } from '../../../layout/NotificationBar';
import Clock from '../../../components/Clocks/MinuteClock';
import ElevatedFilledThemedButton from '../../../components/Buttons/ElevatedFilledThemedButton';

const Right = () => {
    return (
        <NotificationRightLayout>
            <ElevatedFilledThemedButton
                sxCard={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                sx={{
                    width: '100%',
                    height: '100%',
                    padding: '0 2em'
                }}
                onClick={() => {console.log('Clicked on Time')}}
            >
                <Clock
                    full
                    fontSize='1.2em'
                />
            </ElevatedFilledThemedButton>
        </NotificationRightLayout>
    )
}

export default Right