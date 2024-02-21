import * as THREE from 'three'
import fragmentShader from './shaders/fragment.glsl'
import vertexShader from './shaders/vertex.glsl'

let width = innerWidth
let height = innerHeight
const canvas = document.querySelector('#webgl') as HTMLCanvasElement

const scene = new THREE.Scene()
// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000)
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
camera.position.set(0, 0, 1)
camera.lookAt(0, 0, 0)
renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uNoiseStrength: { value: 40 },
      uNoiseSharpness: { value: 12 },
      uNoiseThickness: { value: 0.9 },
      uNoiseBrightness: { value: 0.1 },
    },
  })
)
scene.add(plane)

window.addEventListener('resize', () => {
  width = innerWidth
  height = innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const clock = new THREE.Clock()
function animate() {
  requestAnimationFrame(animate)
  const elapsedTime = clock.getElapsedTime()

  plane.material.uniforms.uTime.value = elapsedTime

  renderer.render(scene, camera)
}

animate()
