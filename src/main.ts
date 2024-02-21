import gsap from 'gsap'
import './style.css'

const time = gsap.timeline()

time
  .from('.up1', { y: '100%', duration: 1 })
  .from('.up2', { y: '100%', duration: 1 })
  .from('.down1', { y: '-100%', duration: 1 })
  .from('.down2', { y: '-100%', duration: 1 })
  .from('.fade', { opacity: 0, duration: 1 })

const productHover = () => {
  const allElementsToHover = document.querySelectorAll('.myHover')
  allElementsToHover.forEach((element) => {
    const htmlElement = element as HTMLElement
    const img = htmlElement.querySelector('img') as HTMLElement
    htmlElement.addEventListener('mousemove', (details: MouseEvent) => {
      const elementBoundry = element.getBoundingClientRect()
      gsap.to(img, {
        opacity: 1,
        top: details.clientY - elementBoundry.top,
        left: details.clientX - elementBoundry.left,
        duration: 1,
      })
    })
  })

  allElementsToHover.forEach((element) => {
    const htmlElement = element as HTMLElement
    const img = htmlElement.querySelector('img') as HTMLElement
    htmlElement.addEventListener('mouseleave', () => {
      gsap.to(img, {
        opacity: 0,
        duration: 1,
      })
    })
  })
}

productHover()
