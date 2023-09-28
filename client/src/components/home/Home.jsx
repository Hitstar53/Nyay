import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Services from './Services'
import Recommendation from './Recommendation'
import Probono from './Probono'
import Reviews from './Reviews'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className={styles.homeContent}>
      <h1 className={styles.heading}>Legal Categories</h1>
      <Categories />
      <h1 className={styles.heading}>Our Services</h1>
      <Services />
      <h1 className={styles.heading}>Get Customized Recommendations</h1>
      <Recommendation />
      <h1 className={styles.heading}>Apply for Pro Bono</h1>
      <Probono />
      <h1 className={styles.heading}>Reviews</h1>
      <Reviews />
      </div>
    </div>
  )
}

export default Home
