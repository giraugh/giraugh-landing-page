window.onload = () => {
  // Locate parent
  const textContainer = document.querySelector('#text')

  const createTextSpan = c => {
    const el = document.createElement('span')
    el.innerText = c
    return el
  }

  const createBreak = () =>
    document.createElement('br')

  const addText = (text) => {
    if (text.length > 0) {
      const el = text.shift()
      textContainer.appendChild(el)
      setTimeout(_ => addText(text), 80)
    }
  }

  // Create github link prompt
  const link = document.createElement('a')
  link.innerHTML = 'this'
  link.href = 'http://github.com/giraugh'
  let ghPrompt = [
    createBreak(),
    ...'or perhaps '.split('').map(createTextSpan),
    link,
    createTextSpan('?')
  ]

  // Create bonus prompt
  const bonusPrompt = [
    createBreak(),
    ...'okay, nevermind then.'.split('').map(createTextSpan)
  ]

  // Run effect after a delay
  setTimeout(() => {
    addText(ghPrompt)
  }, 2000)

  // Run bonus effect after a bigger delay
  setTimeout(() => {
    addText(bonusPrompt)
  }, 20000)
}
