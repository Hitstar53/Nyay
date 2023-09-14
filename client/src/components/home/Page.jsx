import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useTransform, useScroll, motion } from 'framer-motion'
import styles from './Page.module.css'

import one from '../../assets/imgs/1.png'
import two from '../../assets/imgs/2.png'
import three from '../../assets/imgs/3.png'
import four from '../../assets/imgs/4.png'
import five from '../../assets/imgs/5.png'
import six from '../../assets/imgs/6.png'
import seven from '../../assets/imgs/7.png'
import eight from '../../assets/imgs/8.png'
import nine from '../../assets/imgs/9.png'
import ten from '../../assets/imgs/10.png'
import eleven from '../../assets/imgs/11.png'
import twelve from '../../assets/imgs/12.png'

import Lenis from '@studio-freight/lenis'

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve
]

export default function Page () {
  const gallery = useRef(null)

  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })

  const { height } = dimension

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = time => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)

    requestAnimationFrame(raf)

    resize()
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y}/>
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3}/>
          <Column images={[images[9], images[10], images[11]]}y={y4} />
        </div>
      </div>
      
    </main>
  )
}

const Column = ({ images ,y}) => {
  return (
    <motion.div className={styles.column}  style={{y}}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <img
              src={src}
              alt='image'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        )
      })}
    
    </motion.div>
  )
}
