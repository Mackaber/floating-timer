import { useEffect, useRef, useState } from 'react'
import bell_sound from '../assets/bell.flac'

const bell = new Audio(bell_sound)

function TimeDisplay({ timer, bellPlayed, setBellPlayed }): JSX.Element {
  const [currentTime, setCurrentTime] = useState(null)
  const display_colon = useRef<boolean>(true)
  const interval = useRef<number>(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentTime(timer.current.display(display_colon.current).join(''))
      display_colon.current = !display_colon.current

      if (timer.current.done() && !bellPlayed) {
        setBellPlayed(true)
        bell.play()
      }
    }, 1000)

    return () => clearInterval(interval.current)
  }, [bellPlayed, setBellPlayed])

  return (
    <div
      className="timer_container"
      style={{ whiteSpace: 'nowrap', color: timer.current.last_five() ? '#E74C3C' : '#82DD82' }}
    > 
      {bellPlayed && console.log(bellPlayed)}
      {currentTime}
    </div>
  )
}

export default TimeDisplay
