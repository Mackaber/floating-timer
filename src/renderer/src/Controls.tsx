import Timer from './Timer'

function Controls({ timer, interval, setInputValue }): JSX.Element {
  const handlePlayButton = () => {
    timer.current.startResume()
  }

  const handlePauseButton = () => {
    timer.current.pause()
  }

  const handleStopButton = () => {
    timer.current = new Timer()
    setInputValue('')
  }

  return (
    <div id="controls" className="hidden">
      <span id="start_research_btn" onClick={handlePlayButton}>
        <i className="ri-play-line ri-4x"></i>
      </span>
      <span id="pause_research_btn" onClick={handlePauseButton}>
        <i className="ri-pause-line ri-4x"></i>
      </span>
      <span id="stop_research_btn" onClick={handleStopButton}>
        <i className="ri-stop-line ri-4x"></i>
      </span>
    </div>
  )
}

export default Controls
