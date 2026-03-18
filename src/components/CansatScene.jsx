import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CansatScene() {
  const dropRef = useRef(null)
  const canopyRef = useRef(null)

  useEffect(() => {
    const drop = dropRef.current
    const canopy = canopyRef.current
    if (!drop || !canopy) return

    let frameId = null
    let descentProgress = 0
    let gustTarget = 0
    let gustCurrent = 0
    let gustTimeoutId = null
    const start = performance.now()

    const createGust = () => {
      gustTarget = (Math.random() * 2 - 1) * 22
      gustTimeoutId = window.setTimeout(createGust, 1400 + Math.random() * 2200)
    }
    createGust()

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: () => Math.max(document.documentElement.scrollHeight - window.innerHeight, 1),
      scrub: true,
      onUpdate: (self) => {
        descentProgress = self.progress
      },
    })

    const render = () => {
      const elapsed = (performance.now() - start) / 1000
      const viewportHeight = window.innerHeight
      const verticalFall = ((-10 + descentProgress * 74) / 100) * viewportHeight

      gustCurrent += (gustTarget - gustCurrent) * 0.012
      const sway = Math.sin(elapsed * 1.15) * 22 + Math.cos(elapsed * 0.5) * 12 + gustCurrent
      const tilt = Math.sin(elapsed * 0.9) * 4 + gustCurrent * 0.12
      const stretch = 1 + Math.sin(elapsed * 2.4) * 0.02 + descentProgress * 0.04
      const cordsStretch = 1 + Math.sin(elapsed * 2.1 + 0.5) * 0.035

      drop.style.transform = `translate3d(${sway}px, ${verticalFall}px, 0) rotate(${tilt}deg)`
      canopy.style.transform = `scale(${stretch})`
      drop.style.setProperty('--cord-stretch', String(cordsStretch))

      frameId = requestAnimationFrame(render)
    }
    render()

    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      scrollTrigger.kill()
      window.clearTimeout(gustTimeoutId)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="canvas-frame scene-2d" aria-hidden="true">
      <div className="sky-halo">
        <div className="cloud cloud-a" />
        <div className="cloud cloud-b" />
        <div className="cloud cloud-c" />

        <div className="guide-parachute guide-left">
          <span className="guide-canopy" />
          <span className="guide-payload" />
        </div>
        <div className="guide-parachute guide-right">
          <span className="guide-canopy" />
          <span className="guide-payload" />
        </div>

        <div className="cansat-drop" ref={dropRef}>
          <div className="cansat-canopy" ref={canopyRef} />
          <div className="cansat-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="cansat-body">
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CansatScene
