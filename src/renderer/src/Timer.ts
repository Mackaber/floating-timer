class Timer {
  paused_at: number = 0
  offset
  countdown
  target: Date | undefined

  setCountdown(countdown: string): void {
    this.countdown = countdown
    console.log(countdown)
  }

  startResume(): void {
    if (this.paused_at > 0) {
      this.target = new Date(Number(this.target) + Number(new Date()) - Number(this.paused_at))
      this.paused_at = 0
    } else {
      this.target = this.parseValue(this.countdown)
    }
  }

  pause(): void {
    this.paused_at = Number(new Date())
  }

  current(): number {
    return this.paused_at > 0
      ? Number(this.target) - Number(this.paused_at)
      : Number(this.target) - Number(new Date())
  }

  last_five(): boolean {
    return Number(this.target) - Number(new Date()) < 5 * 60 * 1000
  }

  done(): boolean {
    return this.current() <= 0
  }

  display(display_colon = true): string[] {
    let minutes: number = Math.floor(this.current() / 1000 / 60)
    const hours = Math.floor(minutes / 60)
    minutes = minutes % 60
    return [
      hours < 0 ? '-' : '',
      hours < 0 ? (Math.abs(hours + 1) + '').padStart(2, '0') : (hours + '').padStart(2, '0'),
      display_colon || this.paused_at > 0 ? ':' : ' ',
      minutes < 0
        ? (Math.abs(minutes + 1) + '').padStart(2, '0')
        : (minutes + 1 + '').padStart(2, '0')
    ]
  }

  private parseValue(value): Date {
    const currentTime = new Date()
    const [hours, minutes] = value.includes(':') ? value.split(':') : ['0', value.split(':')]
    currentTime.setHours(currentTime.getHours() + Number(hours))
    currentTime.setMinutes(currentTime.getMinutes() + Number(minutes))

    return currentTime
  }
}

export default Timer
