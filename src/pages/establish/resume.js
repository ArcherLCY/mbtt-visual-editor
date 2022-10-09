import React from 'react'
import Resume from '../../components/resume'
import ClockIn from './clockIn/index'
import { useLocation } from 'react-router'

const App = () => {
    const location = useLocation();
    const state = location.state
    return (
        state.name == 'resume' ? <Resume /> : <ClockIn/>
    )
}
export default App