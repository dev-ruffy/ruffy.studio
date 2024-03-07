const changeBackgroundImage = () => {
  let elements = document.querySelectorAll('.element')
  let num = 0
  let intervalId = null

  const startInterval = () => {
    return setInterval(() => {
      let prevTag = document.querySelector('.show-line')
      if (prevTag) {
        prevTag.classList.remove('show-line')
      }

      let currentTag = elements[num].querySelector('.moving-line')
      currentTag.classList.add('show-line')

      let currentName = document.querySelector('.currentName')
      if (currentName) {
        currentName.style.color = 'white'
        currentName.classList.remove('currentName')
        currentName.style.fontFamily = 'Fright Light Pro'
      }

      let tagsSection = document.querySelector('.tags-section')
      let image = elements[num].getAttribute('data-image')
      let tagName = elements[num].querySelector('.tag-name')
      tagName.classList.add('currentName')
      tagsSection.style.backgroundImage = `url(${image})`
      tagName.style.color = 'black'
      tagName.style.fontFamily = 'Fright Pro Light italic'

      num = num < elements.length - 1 ? num + 1 : 0
    }, 2000)
  }

  if (intervalId === null) {
    intervalId = startInterval()
  }

  let elementsContainer = document.querySelector('.elements-container')
  elementsContainer.addEventListener('mousemove', () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  })

  elementsContainer.addEventListener('mouseleave', () => {
    if (intervalId === null) {
      intervalId = startInterval()
    }
  })
}
changeBackgroundImage()
