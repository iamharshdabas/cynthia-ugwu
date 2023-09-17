import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import './locomotive-scroll.css'
import './style.css'

const scroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true,
})

const followCursor = () => {
  window.addEventListener('mousemove', (details) => {
    const x = details.pageX
    const y = details.pageY
    const cursor = document.querySelector('#cursor')
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
  })
}

followCursor()

const time = gsap.timeline()

time
  .from('.up1', { y: '100%', duration: 1 })
  .from('.up2', { y: '100%', duration: 1 })
  .from('.down1', { y: '-100%', duration: 1 })
  .from('.down2', { y: '-100%', duration: 1 })
  .from('.fade', { opacity: 0, duration: 1 })

const productHover = () => {
  const allElements = document.querySelectorAll('.element')
  allElements.forEach((element) => {
    element.addEventListener('mousemove', (details) => {
      const elementBoundry = element.getBoundingClientRect()
      gsap.to(element.querySelector('img'), {
        opacity: 1,
        top: details.clientY - elementBoundry.top,
        left: details.clientX - elementBoundry.left,
        duration: 1,
      })
    })

    element.addEventListener('mouseleave', () => {
      gsap.to(element.querySelector('img'), {
        opacity: 0,
        duration: 1,
      })
    })
  })
}

productHover()
