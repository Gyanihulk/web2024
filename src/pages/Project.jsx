import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import HeroWithVideo from '../components/VideoContainer/VideoContainer'
import ProjectInfo from '../components/ProjectInfo/ProjectInfo'

const Project = () => {
  return (
    <>
    <section id="Homepage">
        <Navbar />
        <HeroWithVideo/>
       
      </section>
      <section>
          <ProjectInfo/>
        </section>
    </>
  )
}

export default Project