import { Icon } from '@mui/material'
import React from 'react'
import { NotificationBellIcon } from '../../../assets/icons'
import { NotificationCenterLayout } from '../../../layout/NotificationBar'

const Center = () => {
    return (
        <NotificationCenterLayout>
            <Icon color='primary'><NotificationBellIcon height='1em' width='1em' /></Icon>
        </NotificationCenterLayout>
    )
}

export default Center