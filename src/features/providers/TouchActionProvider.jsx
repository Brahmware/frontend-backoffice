import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setDrawerState } from '../../Application/drawerState/drawerStateSlice';
import FlexCC from '../../components/placements/FlexCC'

const TouchActionProvider = ({ children }) => {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const dispatch = useDispatch();

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe || isRightSwipe) {
            isLeftSwipe && dispatch(setDrawerState({ drawerOpen: false }));
            isRightSwipe && dispatch(setDrawerState({ drawerOpen: true }));
        }
        // add your conditional logic here
    }


    return (
        <FlexCC onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} >
            {children}
        </FlexCC>
    )
}

export default TouchActionProvider