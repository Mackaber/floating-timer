class Timer {
  paused_at: number = 0;
  offset: number = 0;
  countdown: string = '';
  target: Date | undefined;
  planningDuration: number = 5 * 60 * 1000; // 5 minutes in milliseconds
  wrappingUpDuration: number = 5 * 60 * 1000; // 5 minutes in milliseconds

  setCountdown(countdown: string): void {
    this.countdown = countdown;
    console.log(countdown);
  }

  startResume(): void {
    if (this.paused_at > 0) {
      this.target = new Date(Number(this.target) + Number(new Date()) - this.paused_at);
      this.paused_at = 0;
    } else {
      const totalDuration = this.parseValue(this.countdown);
      this.target = new Date(Number(new Date()) + totalDuration);
    }
  }

  pause(): void {
    this.paused_at = Number(new Date());
  }

  current(): number {
    return this.paused_at > 0
      ? Number(this.target) - Number(this.paused_at)
      : Number(this.target) - Number(new Date());
  }

  first_five(): boolean {
    const start_time = Number(this.target) - this.parseValue(this.countdown)
    console.log(Number(new Date()) - start_time)
    return Number(new Date()) - start_time < this.planningDuration
  }

  last_five(): boolean {
    return Number(this.target) - Number(new Date()) < this.wrappingUpDuration;
  }

  done(): boolean {
    return this.current() <= 0;
  }

  display(display_colon = true): string[] {
    let minutes: number = Math.floor(this.current() / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return [
      hours < 0 ? '-' : '',
      hours < 0 ? (Math.abs(hours + 1) + '').padStart(2, '0') : (hours + '').padStart(2, '0'),
      display_colon || this.paused_at > 0 ? ':' : ' ',
      minutes < 0
        ? (Math.abs(minutes + 1) + '').padStart(2, '0')
        : (minutes + 1 + '').padStart(2, '0')
    ];
  }

  current_mode(): 'planning' | 'working' | 'wrapping-up' {
    return this.first_five() ? 
      'planning' : 
      (this.last_five() ? 
      'wrapping-up' : 
      'working');
  }

  parseValue(value: string): number {
    // Assuming the value is in minutes, convert to milliseconds
    return parseInt(value) * 60 * 1000;
  }
}

export default Timer;
