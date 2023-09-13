import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import './locomotive-scroll.css'
import './style.css'

const scroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true,
})

const time = gsap.timeline()

time
  .from('.up1', { y: '100%', duration: 1 })
  .from('.up2', { y: '100%', duration: 1 })
  .from('.down1', { y: '-100%', duration: 1 })
  .from('.down2', { y: '-100%', duration: 1 })
  .from('.fade', { opacity: 0, duration: 1 })
