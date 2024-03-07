// Building the function to change nav color on page-2
const changeNavColor = () => {
  let landingPage = document.querySelector('.landing-page')
  let navbar = document.querySelectorAll('.nav-link')
  let vertical = document.querySelector('.vertical-line')
  let horizontal = document.querySelector('.horizontal-line')

  landingPage.addEventListener('mouseleave', () => {
    navbar.forEach((navTags) => {
      navTags.style.color = 'white'
      vertical.style.backgroundColor = 'white'
      horizontal.style.backgroundColor = 'white'
    })
  })
  landingPage.addEventListener('mouseenter', () => {
    navbar.forEach((navTags) => {
      navTags.style.color = 'black'
      vertical.style.backgroundColor = 'black'
      horizontal.style.backgroundColor = 'black'
    })
  })
}
changeNavColor()
