import 'remixicon/fonts/remixicon.css'
import Controls from './Controls'
import Timer from './Timer'
import { useState } from 'react'

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('00:00:00')

  const timer = new Timer()

  const handleInputChange = (e): void => {
    const value = e.target.value
    setInputValue(value)
    timer.setTimer(value)
  }

  const handleEnterPress = (e): void => {
    if (e.key === 'Enter') {
      timer.start()
    }
  }

  return (
    <div className="brackets">
      <Controls />
      <input 
        className="timer_container"
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        value={inputValue} />
    </div>
  )
}

export default App
