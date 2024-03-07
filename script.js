// locomotive scroll..
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
})

// Building the function to load the website.....
const loadingAnimation = () => {
  let loader = document.querySelector('.loader')
  let yellowPage1 = document.querySelector('.yellow-page-1')
  let yellowPage2 = document.querySelector('.yellow-page-2')

  const loadingTimeLine = gsap.timeline()

  loadingTimeLine.to('.yellow-page-1', {
    top: '-100%',
    delay: 0.1,
    duration: 0.4,
    ease: 'power4.out',
  })
  loadingTimeLine.to(
    '.yellow-page-2',
    {
      top: '-100%',
      delay: 1,
      duration: 1.5,
      ease: 'power4.out',
    },
    'color'
  )
  loadingTimeLine.to(
    '.loader-tagline',
    {
      delay: 0.6,
      color: 'black',
    },
    'color'
  )
  loadingTimeLine.to('.loader', {
    opacity: 0,
    display: 'none',
    duration: 1,
  })
}

loadingAnimation()

// Building the function to open the menu bar.....
const openMenu = () => {
  // targeting the menu button..
  let menu = document.querySelector('.menu-button')
  // targeting the nav tags..
  let navTags = document.querySelector('.nav-tags')

  let open = false
  // add event listener on menu button..
  menu.addEventListener('click', (details) => {
    if (open) {
      menu.style.transform = `rotate(0deg)`
      navTags.style.transform = `translateX(100%)`
      navTags.style.opacity = 0
      open = false
    } else {
      menu.style.transform = `rotate(225deg)`
      navTags.style.transform = `translateX(0%)`
      navTags.style.opacity = 1
      open = true
    }
  })
}
openMenu()

// Function to show background image on hover

const showBackGroundImage = () => {
  let elements = document.querySelectorAll('.element')
  let tagSection = document.querySelector('.tags-section')
  let currentIndex = 0
  elements[currentIndex].classList.add('active')

  let intervalID // Declare intervalID outside so it's accessible throughout

  // Function to start the background image rotation
  const startBackgroundRotation = () => {
    if (intervalID) {
      // Clear existing interval if any before starting a new one
      clearInterval(intervalID)
    }

    intervalID = setInterval(() => {
      const currentTag = document.querySelector('.active')
      currentTag.classList.remove('active')

      if (currentIndex < elements.length - 1) {
        currentIndex += 1
      } else {
        currentIndex = 0
      }

      elements[currentIndex].classList.add('active')
      const image = elements[currentIndex].getAttribute('data-image')
      tagSection.style.background = `url(${image})`
    }, 1000)
  }

  // Function to clear the interval
  const clearBackgroundInterval = () => {
    clearInterval(intervalID)
  }

  // Add event listeners for mouseover and mouseout events
  elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      clearBackgroundInterval()
      const currentTag = document.querySelector('.active')
      currentTag.classList.remove('active')
      element.classList.add('active')
      const image = element.getAttribute('data-image')
      tagSection.style.background = `url(${image})`
    })
    element.addEventListener('mouseout', startBackgroundRotation)
  })

  // Initial call to start the rotation
  startBackgroundRotation()
}

showBackGroundImage()

showBackGroundImage()

// Function to show background image on hover
// const showImage = () => {
//   let tagsSection = document.querySelector('.tags-section')
//   let elements = document.querySelectorAll('.element')
//   elements.forEach((element) => {
//     let image = element.getAttribute('data-image')
//     element.addEventListener('mouseover', () => {
//       tagsSection.style.backgroundImage = `url(${image})`
//     })
//     element.addEventListener('mouseleave', () => {
//       tagsSection.style.backgroundImage = 'none'
//     })
//   })
// }
// showImage()
