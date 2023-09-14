import React from 'react'
import Hero from './Hero'
import Function from './Function'
import Lawyers from './Lawyers'
import Page from './Page'
import ProBono from './ProBono'

const Home = () => {
  return (
    <div className="mt-6">
      <Hero/>
      <Function/>
      <Lawyers/>
      <Page/>
      <ProBono/>
    </div>
  )
}

export default Home