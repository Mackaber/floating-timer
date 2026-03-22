import 'remixicon/fonts/remixicon.css'
import Controls from './Controls'
import Timer from './Timer'
import TimeContainer from './components/TimeContainer'
import TaskContainer from './components/TaskContainer'
import TimeDisplay from './components/TimeDisplay'
import { useEffect, useRef, useState, type WheelEvent } from 'react'
import { MIN_SCALE, MAX_SCALE } from './constants'
import ModeSwitch from './components/ModeSwitch'

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [bellPlayed, setBellPlayed] = useState(false)
  const [scale, setScale] = useState(1)
  const timer = useRef<Timer>(new Timer())

  const handleScale = (event: WheelEvent<HTMLDivElement>): void => {
    event.preventDefault()

    const direction = Math.sign(event.deltaY)
    if (!direction) return

    setScale((prevScale) => {
      const nextScale = prevScale - direction * 0.05
      return Math.min(MAX_SCALE, Math.max(MIN_SCALE, nextScale))
    })
  }

  useEffect(() => {
    window.api.setWindowScale(scale)
  }, [scale])

  return (
    <div className="brackets" onWheel={handleScale}>
      <TaskContainer style={{ top: '0px' }} placeholder="Current Task" />
      {inputValue && timer.current.target ? (
        <>
          <Controls {...{ timer, setInputValue, setBellPlayed }} />
          <TimeDisplay {...{ timer, bellPlayed, setBellPlayed }} />
        </>
      ) : (
        <TimeContainer {...{ timer, inputValue, setInputValue }} />
      )}
      <ModeSwitch style={{ bottom: '0px' }} {...{timer}} />
    </div>
  )
}

export default App
