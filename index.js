const root = document.body
const letters = document.querySelectorAll('.letter')

let variableConfig = {
  wght: 300,
  wdth: 62.5,
  YTUC: 550
}

anime({
  targets: variableConfig,
  wght: [
    { value: 300 },
    { value: 400, delay: 2000, duration: 200 },
    { value: 300 }
  ],
  wdth: [
    { value: 62.5 },
    { value: 100.5, delay: 2000, duration: 200 },
    { value: 62.5 }
  ],
  YTUC: [
    { value: 550, delay: 500 },
    { value: 900, duration: 1500, easing: 'easeInExpo' },
    { value: 550, duration: 200 }
  ],
  loop: true,
  endDelay: 1700,
  update() {
    root.style.setProperty('--wght', variableConfig.wght)
    root.style.setProperty('--wdth', variableConfig.wdth)
    root.style.setProperty('--YTUC', variableConfig.YTUC)
  }
})

anime({
  targets: letters,
  translateY: [
    { value: 0 },
    { value: 300, duration: 2000 },
    { value: 0, delay: 200, duration: 2000, easing: 'easeOutExpo' }
  ],
  loop: true,
  easing: 'easeInExpo'
})
