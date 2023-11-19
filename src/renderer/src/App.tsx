import 'remixicon/fonts/remixicon.css'
import Controls from './Controls'
import Timer from './Timer'
import { useEffect, useRef, useState } from 'react'

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const display_colon = useRef<boolean>(true)
  const timer = useRef<Timer>(new Timer())

  const handleInputChange = (e): void => {
    const value = e.target.value
    timer.current.setCountdown(value)
    setInputValue(value)
  }

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      timer.current.startResume()
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(timer.current.display(display_colon.current).join(''))
      display_colon.current = !display_colon.current
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="brackets">
      <Controls />
      <input
        className="timer_container"
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        value={inputValue}
        placeholder="00:00"
      />
      <div className="timer_container" style={{ whiteSpace: 'nowrap' }}>{currentTime}</div>
    </div>
  )
}

export default App
