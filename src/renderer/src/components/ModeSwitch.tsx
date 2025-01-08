import { useEffect, useState } from "react"


function ModeSwitch({ timer, style, ...props }): JSX.Element {
    const [currentMode, setCurrentMode] = useState('')

    useEffect(() => {
        setInterval(() => {
            setCurrentMode(timer.current.target ? timer.current.current_mode(): '')
        }, 1000)
    }, [])

    return (
        <div className="task_container mode-switch" {...props} style={style}>
            <span>{currentMode}</span>
        </div>
    )
}

export default ModeSwitch