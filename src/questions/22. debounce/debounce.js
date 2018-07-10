function debounce(fn, delay = 0) {
  let lastCall = {
    time: null,
    timer: null,
  }

  return function() {
    let time = Date.now();

    if (lastCall.time && (time - lastCall.time) < delay) {
      clearTimeout(lastCall.timer);
    }

    lastCall = {
      time,
      timer: setTimeout(fn, delay),
    }
  }
}

module.exports = {
  debounce,
}