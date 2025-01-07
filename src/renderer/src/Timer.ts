class Timer {
  paused_at: number = 0;
  offset: number = 0;
  countdown: string = '';
  target: Date | undefined;
  planningDuration: number = 5 * 60 * 1000; // 5 minutes in milliseconds
  wrappingUpDuration: number = 5 * 60 * 1000; // 5 minutes in milliseconds
  workingDuration: number = 0;

  setCountdown(countdown: string): void {
    this.countdown = countdown;
    console.log(countdown);
  }

  startResume(): void {
    if (this.paused_at > 0) {
      this.paused_at = 0;
    } else {
      const totalDuration = this.parseValue(this.countdown);
      this.workingDuration = totalDuration - this.planningDuration - this.wrappingUpDuration;
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
    const now = Number(new Date());
    const elapsed = Number(this.target) - now;
    return elapsed <= this.planningDuration;
  }
  last_five(): boolean {
    const now = Number(new Date());
    const elapsed = Number(this.target) - now;
    return elapsed <= this.wrappingUpDuration;
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
    const now = Number(new Date());
    const elapsed = Number(this.target) - now;

    if (elapsed > this.workingDuration + this.wrappingUpDuration) {
      return 'planning';
    } else if (elapsed > this.wrappingUpDuration) {
      return 'working';
    } else {
      return 'wrapping-up';
    }
  }

  parseValue(value: string): number {
    // Assuming the value is in minutes, convert to milliseconds
    return parseInt(value) * 60 * 1000;
  }
}

export default Timer;
