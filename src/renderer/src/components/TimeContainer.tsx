import { useState } from "react"

function TimeContainer({ timer, inputValue, setInputValue }): JSX.Element {

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

  return (
    <input
      className="time_container"
      onChange={handleInputChange}
      onKeyDown={handleEnterPress}
      value={inputValue}
      placeholder="00:00"
    />
  )
}

export default TimeContainer
