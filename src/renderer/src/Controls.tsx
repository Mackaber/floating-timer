import { useState } from 'react'
import Timer from './Timer'

function Controls({ timer, setInputValue, setBellPlayed }): JSX.Element {
  const [paused, setPaused] = useState(false)
  const handlePlayButton = () => {
    timer.current.startResume()
    setPaused(false)
  }

  const handlePauseButton = () => {
    timer.current.pause()
    setPaused(true)
  }

  const handleStopButton = () => {
    timer.current = new Timer()
    setInputValue('')
    setPaused(false)
    setBellPlayed(false)
  }

  return (
    <div id="controls" className="hidden">
      {paused > 0 ? (
        <span id="start_research_btn" onClick={handlePlayButton}>
          <i className="ri-play-line ri-4x"></i>
        </span>
      ) : (
        <span id="pause_research_btn" onClick={handlePauseButton}>
          <i className="ri-pause-line ri-4x"></i>
        </span>
      )}

      <span id="stop_research_btn" onClick={handleStopButton}>
        <i className="ri-stop-line ri-4x"></i>
      </span>
    </div>
  )
}

export default Controls
