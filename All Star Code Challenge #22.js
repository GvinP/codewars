function toTime(seconds) {
    return `${Math.floor(seconds/3600)} hour(s) and ${Math.floor((seconds/60)%60)} minute(s)`
  }