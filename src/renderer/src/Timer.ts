class Timer {
  paused_at
  started_at
  offset

  /*
  async start_resume() {
    if (!this.paused_at && !this.started_at) {
      this.started_at = Number(new Date())
    } else if (this.paused_at) {
      this.offset += Number(new Date()) - this.paused_at
      this.paused_at = 0
    }
    return await this.save()
  }

  async pause() {
    this.paused_at = Number(new Date())
    await this.save()
  }

  async stop() {
    this.paused_at = 0
    this.started_at = 0
    this.offset = 0
    await this.save()
    return this.display()
  }

  current() {
    return (this.paused_at ? this.paused_at : Number(new Date())) - this.started_at - this.offset
  }

  display(display_colon = true) {
    let minutes: any = Math.floor(this.current() / 1000 / 60)
    const hours = Math.floor(minutes / 60) + ''
    minutes = (minutes % 60) + ''
    return [
      hours.padStart(2, '0'),
      display_colon || this.paused_at > 0 ? ':' : '&nbsp',
      minutes.padStart(2, '0')
    ]
  }
	*/

  start(): void {
    throw new Error('Method not implemented.')
  }
  setTimer(value: string): void {
    // this.
  }

  private parseValue(value) {
    const currentTime = new Date()
    const [hours, minutes] = value.split(':')
    currentTime.setHours(currentTime.getHours() + Number(hours))
    currentTime.setMinutes(currentTime.getMinutes() + Number(minutes))

    return currentTime
  }
}

export default Timer
