import { useEffect, useState } from "react"

const leftButtonStyle = {
    paddingRight: '10px',
}

const rightButtonStyle = {
    paddingLeft: '10px',
}

function ModeSwitch({ timer, style, ...props }): JSX.Element {
    const [currentMode, setCurrentMode] = useState('')

    useEffect(() => {
        setInterval(() => {
            setCurrentMode(timer.current.current_mode())
        }, 1000)
    }, [])

    const handleLeftButton = () => {
        console.log('Left button clicked')
    }

    const handleRightButton = () => {
        console.log('Right button clicked')
    }

    return (
        <div className="task_container mode-switch" {...props} style={style}>
            <button  onClick={handleLeftButton} style={leftButtonStyle}>
                {'<'}
            </button>
            <span>{currentMode}</span>
            <button onClick={handleRightButton} style={rightButtonStyle}>
                {'>'}
            </button>
        </div>
    )
}

export default ModeSwitch