import { useEffect, useRef, useState } from 'react'
import bell_sound from '../assets/bell.flac'

const bell = new Audio(bell_sound)

const green = '#82DD82'
const red = '#E74C3C'
const yellow = '#F1C40F'

function TimeDisplay({ timer, bellPlayed, setBellPlayed }): JSX.Element {
  const [currentTime, setCurrentTime] = useState(null)
  const display_colon = useRef<boolean>(true)
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentTime(timer.current.display(display_colon.current).join(''))
      display_colon.current = !display_colon.current

      if (timer.current.done() && !bellPlayed) {
        setBellPlayed(true)
        bell.play()
      }
    }, 1000)

    return () => {
      if (interval.current !== null) {
        clearInterval(interval.current)
      }
    }
  }, [bellPlayed, setBellPlayed])

  return (
    <div
      className="timer_container"
      style={{ whiteSpace: 'nowrap', color: timer.current.first_five() ? yellow : (timer.current.last_five() ? red : green) }}
    > 
      {bellPlayed && console.log(bellPlayed)}
      {currentTime}
    </div>
  )
}

export default TimeDisplay
