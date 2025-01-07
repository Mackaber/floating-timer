import 'remixicon/fonts/remixicon.css'
import Controls from './Controls'
import Timer from './Timer'
import TimeContainer from './components/TimeContainer'
import TaskContainer from './components/TaskContainer'
import TimeDisplay from './components/TimeDisplay'
import { useRef, useState } from 'react'
import ModeSwitch from './components/ModeSwitch'

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [bellPlayed, setBellPlayed] = useState(false)
  const timer = useRef<Timer>(new Timer())

  return (
    <div className="brackets">
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
