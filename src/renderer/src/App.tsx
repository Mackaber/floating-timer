import 'remixicon/fonts/remixicon.css'
import Controls from './Controls'
import Timer from './Timer'
import TimeContainer from './components/TimeContainer'
import TaskContainer from './components/TaskContainer'
import { useEffect, useRef, useState } from 'react'

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [currentTime, setCurrentTime] = useState(null)
  const display_colon = useRef<boolean>(true)
  const interval = useRef<number>(null)
  const timer = useRef<Timer>(new Timer())

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentTime(timer.current.display(display_colon.current).join(''))
      display_colon.current = !display_colon.current
    }, 1000)

    return () => clearInterval(interval.current)
  }, [])

  return (
    <div className="brackets">
      <TaskContainer style={{ top: '0px' }} placeholder="Current Task" />
      {timer.current.target ? (
        <>
          <Controls timer={timer} interval={interval} setInputValue={setInputValue} />
          <div className="timer_container" style={{ whiteSpace: 'nowrap' }}>
            {currentTime}
          </div>
        </>
      ) : (
        <TimeContainer timer={timer} inputValue={inputValue} setInputValue={setInputValue} />
      )}
      <TaskContainer style={{ bottom: '0px' }} placeholder="" />
    </div>
  )
}

export default App
