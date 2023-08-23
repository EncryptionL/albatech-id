import React, { Fragment } from 'react'

import MainSection from '../components/sections/MainSection'
import Section1 from '../components/sections/Section1'
import Section2 from '../components/sections/Section2'
import Section3 from '../components/sections/Section3'

function HomePage() {
  return (
    <Fragment>
      <MainSection />
      <Section1 />
      <Section2 />
      <Section3 />
    </Fragment>
  )
}

export default HomePage